'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1813b2b3231cc55647cc51ad05aac84e",
".git/config": "3d851fa55dbb086f61858ad33e66912e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "529847148560ae1386c51830cd200f82",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a21cb1c1858133d721b1b98e6e90d98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4dde913c4d2d2921cdaf96273f44b024",
".git/logs/refs/heads/main": "402006f59184fb3f77d745606b09f39e",
".git/logs/refs/remotes/origin/main": "e27dbe6424e46dd6c988e9fb5ab2757e",
".git/objects/02/0f4d689db316eda8342f534870ffa8300fa595": "d0f22376a4d2416697d3344c84034ed9",
".git/objects/02/34f59b70a832defee34764bc2118adf17a0102": "03fa3d215f31a001732bd86ebd3a6e0b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/08/c4dcb158140944f0b869ee3970c68b2dcc68a1": "a5431e717af6f91c8f8820adee948a2f",
".git/objects/0c/8bba4f307306e6861e04c4139c257706087548": "9768b593ca97e443fb2f8de6b413fcf5",
".git/objects/0d/d9b9debeb57f368c97dc72356683dfd624dd86": "4e330dd2358f9a45480384ad879bfe33",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/8e29669b430865cf3f96f4b45e1e181a0a1d6d": "56b4721a4bc03f05b508a480c3e61360",
".git/objects/1b/2c25ec17d8ef06d950f5bac5faee0eb0ce815a": "54b53365f97d13aa0a00327b3ed33f8d",
".git/objects/1d/5a2ad576278dae3a204a4215f8beb158889d49": "eedc9e8e58d22101a336e9180ece5891",
".git/objects/20/be4f0467e207a26d056bf7861d856a8bcaa310": "6b0a1f996a0c5d752907a62a1d8a1b23",
".git/objects/21/78787309b25be07f6141f10a4ccc9ac340a4eb": "dc30d9e0eabcccf48c7e1001b6018541",
".git/objects/24/0fd57519acf6b5844278c59242033de76c56be": "764842045922f2ca241b26a2ac6901f5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/36/4244ba467f1b5a506eabc5e1bac48cea353588": "4b2ce9a4cbed9db41d58f76e58eda03f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/624231b6bc55db86b6dad1b993b633b558c9bd": "1fe2549e0063a88dc56683710fd1d7d1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/7452ff817ac405732dd1cedd136693ceb3fcd0": "7bc4b5bb6a863c8c0ec9505f5a6d3b67",
".git/objects/45/833c6deaaa721c526cea9afd2bd17dc3ca0ee0": "7960193b9fb74ff4fb45cc8fecc1f554",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d2ec3ccf6475038bdd4d3d38bf75421a2d036e": "f8d28c6d7f0345261e98df6872807fb0",
".git/objects/49/01123c00f17bb4d74d79379d285d5cbf2bbe6f": "1b6bdfa3260ad120609471b1768d038a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/edbc0dd77379279c29cf3752cf7ccc299573c6": "3a339fbb6eb5783a4c91ade268cfe0c4",
".git/objects/53/e626501d9b2a538bbbc035c8f179fb453fa333": "af9f56d104dd90033e041e655a8c810a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/69/aa7edd294369e660fe7dbec98c1808c0237c46": "c444ed0e6decb6d06b75f251a46a2371",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/72/2af1c1b6a1fcbc33882508023de38d708b921d": "be5b240aee8b56c9e19f2500ee56964d",
".git/objects/72/614bd93cca04678c78f1ea3bd10b3de7c725eb": "cc8ecfca805e18b5ae6d40592f42c54f",
".git/objects/72/9019270d0c2b2347eed7ce25bee68ea7b02525": "a757d666f8f4ceac9701aededbf11b83",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/81b8cf872bbfba5d90ee1cbaa054e03b7308fc": "6dc4104a8af17cc71e4444de9474c7a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/b55995e5c9ac4c8f9bb5728dae12efacabea8a": "402945a22bfc40402ef8cc3478217b94",
".git/objects/7d/584e74b8a3785785cb2add96fec7d47a41cff4": "623284b3c580ade26c3914089e4b9f8d",
".git/objects/82/8336ef8d8d757154616282e60236d12b9cc6f1": "46a084b20fe111180a5881254905458f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/60b581d944c49938848e807a442921d6c19d8a": "751b081ea7728cf8a5f425b706b112dd",
".git/objects/95/26014e4939f853ae0c15fa5a20a9213495ff71": "4cc6ccb1a412b8f86aa57fbeb5272a0e",
".git/objects/98/7fbca2985cef3b6f421e4d733a6b8b25af9943": "59e94599805fccdc5622e2663f13b0e3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ac/9a2f55b4f0a11ede2608b017591f4f9d81b887": "8685902b8a8715bc57037b35e964ebea",
".git/objects/b0/80d402b54840a0b9c3d9707b021ee42f24aa62": "263761333f279b40ae2f197fc135eb7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/55463665966419092941e75a9e2b7503500140": "9cc1a4dc618956e1de9e01dd2ee220ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/b292421d9adc14d888f1babf74fe3952092c02": "ab218da17be45218ae5271515041fcfc",
".git/objects/d5/029f8ae8340d185e03427697c8628abf3a6423": "4b5251e44cac015d0dff77d6e8779e62",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/05215c6f6cb0aaa1cba27390c6657b4f3c6a30": "a9e51f50fd786d92802a19cc51b0e6ff",
".git/objects/de/b26771796617f293009a38bdaf0742e4b6f9f7": "d7356836936be61d36803d344fe87861",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/427c12e33ac82f5e1ae7261e0b12a36f88302c": "7874bbb79dae00c2a6e188bb39115df6",
".git/objects/eb/164d9c0f5af1e02a61cb1d18c8e012633b8a8d": "659f44b91e54f0a6cdbc2ed1ae467eff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0c72a280601ed7dd32a2acab338aab03cf79e6": "f3c50e93ac9f5d31161b7c81d5fe7f71",
".git/objects/fa/797148024362cc9245ba75627549c9853aa79e": "9b9d79d98809df7003293fa038c65d09",
".git/ORIG_HEAD": "f18d17c96cfc3995b9b98922ab6cff20",
".git/refs/heads/main": "155803f9e65399a7a1a8f0502d1eb436",
".git/refs/remotes/origin/main": "155803f9e65399a7a1a8f0502d1eb436",
"assets/AssetManifest.json": "57ab6422c4bd4632049f71ccda6b6a9e",
"assets/assets/images/ayt.jpg": "7a66482d7922a7e84446e6f4f91d49c1",
"assets/assets/images/calarsaat.jpg": "ac7b1bfb114dba697342397b771a945f",
"assets/assets/images/derscalis.jpg": "1db56f8cf8543b2f6da75d360b47e95d",
"assets/assets/images/google.png": "94276e4e5348b37b5e76b36a9d420673",
"assets/assets/images/indir.jpg": "0d74af0f062d450b80480f85be528bc0",
"assets/assets/images/ipucu.jpg": "501e6b2b25b9ec1f6a71b1748317a6ae",
"assets/assets/images/istatistik.jpg": "c2a7e7924504bd5d1afaf544b829fca6",
"assets/assets/images/kalangun.jpg": "d2b0c5ea2d8ef21636849621a6759b89",
"assets/assets/images/kitap.jpg": "ae2a0a50b491abac0999ac35671d5b4e",
"assets/assets/images/logoo.jpg": "4dc774149bbdbd23fe30063067ca5912",
"assets/assets/images/notlarim.jpg": "dcddeae75532d053552e16d68e790e3b",
"assets/assets/images/tik.jpg": "66c14fd5e586c58f8f3fa2af3d9baa86",
"assets/assets/images/tyt.jpg": "1aacfdfef1f3252ae280c64cd7df897a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c7eee19fc6817b63fdbd8e7820184361",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "68f5cbd4fba890176118f0c49842366a",
"/": "68f5cbd4fba890176118f0c49842366a",
"main.dart.js": "62cba7949064b69506f3cd45d6438cae",
"manifest.json": "530492636f6a7b9cdb3ef1846a7af108",
"version.json": "6a71a9fcb1c521fb8851f9744e18d125"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
