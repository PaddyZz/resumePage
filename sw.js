// sw.js

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/the_nights_avicii.mp3',
  'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/DreamItPossible.mp3',
  'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/TheNightsCover_scale_ver1.webp',
  'https://cdn.jsdelivr.net/gh/PaddyZz/resumePage/src/dreamItPossibleCover.webp',
  // 添加更多需要缓存的音乐文件
];

self.addEventListener('install', event => {
  // 执行安装阶段时，将需要缓存的资源加入到缓存中
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // 拦截网络请求，尝试从缓存中获取资源
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存中存在则直接返回缓存的资源
        if (response) {
          return response;
        }
        // 否则从网络请求资源
        return fetch(event.request);
      })
  );
});
