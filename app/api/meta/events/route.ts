import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import type { MetaEventName, MetaEventPayload, MetaUserData } from "@/lib/meta-events";

const META_GRAPH_API_VERSION = "v19.0";
const SUPPORTED_EVENTS = new Set<MetaEventName>([
  "PageView",
  "InitiateCheckout",
  "Lead",
  "Schedule",
]);

function normalize(value?: string) {
  return value?.trim().toLowerCase();
}

function hashValue(value?: string) {
  const normalized = normalize(value);

  if (!normalized) {
    return undefined;
  }

  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function formatUserData(userData?: MetaUserData) {
  if (!userData) {
    return {};
  }

  return {
    em: hashValue(userData.email),
    ph: hashValue(userData.phone),
    fn: hashValue(userData.firstName),
    ln: hashValue(userData.lastName),
  };
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined
  );
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.json({ skipped: true });
  }

  const payload = (await request.json()) as MetaEventPayload;

  if (!payload.eventName || !SUPPORTED_EVENTS.has(payload.eventName)) {
    return NextResponse.json(
      { error: "Unsupported Meta event" },
      { status: 400 },
    );
  }

  const eventId = payload.eventId || crypto.randomUUID();
  const eventSourceUrl = payload.pageUrl || request.headers.get("referer") || undefined;
  const userData = {
    ...formatUserData(payload.userData),
    client_ip_address: getClientIp(request),
    client_user_agent: request.headers.get("user-agent") || undefined,
  };

  const metaResponse = await fetch(
    `https://graph.facebook.com/${META_GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name: payload.eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            action_source: "website",
            event_source_url: eventSourceUrl,
            user_data: userData,
            custom_data: {
              ...payload.customData,
              page_url: eventSourceUrl,
            },
          },
        ],
      }),
    },
  );

  if (!metaResponse.ok) {
    return NextResponse.json(
      { error: "Meta CAPI request failed" },
      { status: metaResponse.status },
    );
  }

  return NextResponse.json({ ok: true, eventId });
}
