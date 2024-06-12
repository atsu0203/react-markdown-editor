const CacheName = "Cache:v1";

// if (!self.define) {
//   let e,
//     t = {};
//   const i = (i, r) => (
//     (i = new URL(i + ".js", r).href),
//     t[i] ||
//       new Promise((t) => {
//         if ("document" in self) {
//           const e = document.createElement("script");
//           (e.src = i), (e.onload = t), document.head.appendChild(e);
//         } else (e = i), importScripts(i), t();
//       }).then(() => {
//         let e = t[i];
//         if (!e) throw new Error(`Module ${i} didn’t register its module`);
//         return e;
//       })
//   );
//   self.define = (r, o) => {
//     const s =
//       e ||
//       ("document" in self ? document.currentScript.src : "") ||
//       location.href;
//     if (t[s]) return;
//     let n = {};
//     const c = (e) => i(e, s),
//       d = { module: { uri: s }, exports: n, require: c };
//     t[s] = Promise.all(r.map((e) => d[e] || c(e))).then((e) => (o(...e), n));
//   };
// }
// define(["./workbox-8366b1fe"], function (e) {
//   "use strict";
//   self.addEventListener("message", (e) => {
//     e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
//   }),
//     e.precacheAndRoute(
//       [
//         { url: "index.html", revision: "2da498fbcca68bf41d0eeb5043fd9f27" },
//         { url: "manifest.json", revision: "4f14b1f37c90b3a8d4ce0d6daee3d5f9" },
//         { url: "robots.txt", revision: "61c27d2cd39a713f7829422c3d9edcc7" },
//       ],
//       { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
//     );
// });

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate:", event);
});

const networkFallingBackToCache = async (request) => {
  const cache = await caches.open(CacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (err) {
    console.error(err);
    return cache.match(request);
  }
};
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  console.log("Fetch to:", event.request.url);
//   event.respondWith(fetch(event.request));
  event.respondWith(networkFallingBackToCache(event.request))
});
//# sourceMappingURL=sw.js.map
