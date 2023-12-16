import { manifest, version } from "@parcel/service-worker";

declare const self: ServiceWorkerGlobalScope;

async function onInstall() {
  const cache = await caches.open(version);
  await cache.addAll(manifest);
}
self.addEventListener("install", (event) => event.waitUntil(onInstall()));

async function onActivate() {
  const keys = await caches.keys();
  await Promise.all(keys.map((key) => key !== version && caches.delete(key)));
}
self.addEventListener("activate", (event) => event.waitUntil(onActivate()));
