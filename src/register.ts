if (process.env.NODE_ENV === "production") {
  navigator.serviceWorker.register(
    new URL("service-worker.ts", import.meta.url),
    { type: "module" },
  );
}
