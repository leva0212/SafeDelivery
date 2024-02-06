'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bb972e882deae58ca54a90089436939c",
".git/config": "089cf1adf5ac69495e86ebe7b9a59589",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "e611547905d040afae647c660a23db10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ae2d62726c0c64d303b3d03590643b5",
".git/logs/refs/heads/main": "dd82a3aa282fdc1ec8f270c9ebdeb587",
".git/logs/refs/heads/master": "5ff72137af180d3bd62fc71acb01154f",
".git/logs/refs/heads/SafeDelivery": "e6d8f47dcb09535681b8e0b64c8f6fd8",
".git/logs/refs/remotes/origin/main": "5a03a014e03a5128a860fe1603545005",
".git/logs/refs/remotes/origin/SafeDelivery": "1dbbadeb475659779ba2e6e7bbc9f339",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/07f1aeb9ea3635433b3346225fff4e97355880": "5c3613d9cdc91871dc8e0c4b229ce780",
".git/objects/02/15b23c077c2ac7e32e3ddd3548ad4171aa0569": "4a64f783d1bcb89e1aa94c892908bb72",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/0c/8c6f356e81fd0c7520ce0c6f8f9a765892457e": "509dde2a6883c2961849868a33f53ee5",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/10/ba72db254493c4f1972160ed6e971b6ce8b423": "14defae1e62fd072cf21b17ed5738697",
".git/objects/17/6a95eed5b5e88af468bd59e0eca2c221654ffb": "af809fe238f9e4b712862545e0762e04",
".git/objects/1e/a854d6d43067b816eecc3a889a6357e2cf1f9a": "620f7da7cb28607033044aba2f19f36b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2f/88d95ddf2352cc1061cb282d4ced2a99d8f8ee": "0136e88867991b72bcae15220e942ee2",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a1f71730686e7a38b715793688f119ad33f583": "baf8dea8cff9573fa1243b4609254b5e",
".git/objects/35/ed7ede9994c423245da0a9f68e14d5f663e5b4": "6bff7ef9cf27c563a7e6d75ec372b241",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/3f/d2dabe3927471f589eac4f852cc5ffa642ef16": "e8df539b3189fea3951f59be6251db13",
".git/objects/49/bbbae86d6df99a39358546dcb16bcf1b965840": "72fc7cdde7bc2cb1efb0ef24e253dfaa",
".git/objects/4a/c0b3287f9e0c3e75726958e18560c516f5432d": "fdaa8b2b5e02cd1efd395ace1a61ac26",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/5d/0dc6bd6b9ef90b238abdba19a522ab816245dc": "6c64156bff4605c948d917d568ae5f27",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/62/26457583572f23508eff440001f9e5b86101b1": "c479962de40952d62c04a82a63588051",
".git/objects/66/f1af28243e0734d93446e0c709131b878ba267": "c396beced3487e19f8d8f41e4a4a987d",
".git/objects/67/d1378cb5e043d8198fdf136b75efa1e6b16856": "f66f01741ff6db9ff3eefe5be3037893",
".git/objects/69/46d515899dc389b3d24b453ed47c3be707cafa": "e91bf8a33fd17777279f262ae8ae6491",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7e/d9752d81d4e91a7128ba89f0d0b1e0779e837c": "7a915f629d92e4b55a5c40a5f69a6c0c",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/88/25ae9848ac208021e3293c6d2bc229adf4b83b": "9f8d78c0415be549c2d8b430f98eda0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/e373650bee5d7c319b6bd6e8dbc2495c9f722b": "fd5103f5de26a23563daab2326da8868",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/99/75d54f6b947fe2760dfc1b88091bf50266760a": "3c33b4d634cd56b8387d10711faef35f",
".git/objects/99/a3520f4f5fc995790ea9af423e75f8a4b84980": "538b74def6a10be6bc802c1ea67806cd",
".git/objects/9a/0309f6b051767e3e52990c5bb910349c1864f6": "741d82a3cafc1265a8a4e58fe1ecc957",
".git/objects/9c/10639a89f28d78859dec66d27a0e4fa5b5449e": "90f42986cbb85af27f9c89fdec329474",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/e471ccd8b014dbec1264960ca4f1ffe78ffc6a": "94eb59b8df318c41485c0f4e5f25fcda",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/a4/ed7b4b9d9976c9b9d52d99f9c27bb70ef63fad": "a2500320c29af2430d3c9c9acbf246c4",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/ab/2b384e4d4c21bf9ad2ee29ad73e51454f160a7": "e5516259713f8c594e93c4649f76db19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/bff6c6e2695c568d5921c03c410d1687c3cad7": "082dc043e6022afac8ff2b2c9587b984",
".git/objects/c3/51fb8128015cea8394725d955d0b01ff2da2d6": "96da92cc1e60d488891be1b1546a6f45",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/d1/0ff0fd0a2388bd840edc6f84d8025c3120502b": "133691eded0e5e5145435cc6acb121d2",
".git/objects/d2/f1aeba314cb0ebe0bcc9c79881818e182c7748": "616614b8193ca3ca3758dd93900df40f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d9/229f7e41482bc90d0e04a1049b9e732464fa04": "5905050d5a1bdbbe3542306c3bec6c1a",
".git/objects/df/603f580c10ace5c64b95168a26259e0cdcf589": "9c8caf96ee76b81f209889f149ec6881",
".git/objects/e3/cf946c8e6351095bb9653ef702db2ccaa015ae": "cc28f108fa71199190cca770f3a1780b",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/43d6c3e2063a16fc3c701dcae7d2efc979e6db": "e4838886e6087bf997080be74277d32b",
".git/objects/ec/32ea898d10fc2fab18814e067a07fe6a34065d": "a04ef57e73b44a6a57542b809cb9e895",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/71c398f0ff8091d65f79e58db0cf686949e4c3": "8948af080176fdb6f1fd5516efe2360f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "7b206df7ea90fa6e9e9661109a98859b",
".git/refs/heads/master": "7b206df7ea90fa6e9e9661109a98859b",
".git/refs/heads/SafeDelivery": "7b206df7ea90fa6e9e9661109a98859b",
".git/refs/remotes/origin/main": "7b206df7ea90fa6e9e9661109a98859b",
".git/refs/remotes/origin/SafeDelivery": "7b206df7ea90fa6e9e9661109a98859b",
"assets/AssetManifest.bin": "f02ecca126d0f458c34da8e21812c321",
"assets/AssetManifest.json": "1eac0b649d88da5a6d867948ebd37117",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/app_launcher_icon.jpg": "19770cb50724fde07e391433739c12cb",
"assets/assets/images/error_image.png": "793dc13d330cc09f122dcc46a1ba3fa5",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/logomensajeriapp.png": "949ac0b0c20ecbe96adefc6e165178ca",
"assets/assets/images/Logo_mensajeriapp.jpg": "19770cb50724fde07e391433739c12cb",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7faff44a021e5282e0eff9371fff01f3",
"assets/NOTICES": "6946cdb00cc7c8539ea4f087de584474",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "93285f1e9c4417af97380da8cce3be09",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "db830ed004c352e86ab3c89bbd013fa4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6936c9a2daa26772cc870f0b70971ff5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "17724b11bc53c51c071e661f35044cb3",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"Captura_de_pantalla_2023-11-18_185801.png": "f9acd741bcc537bd83f7e606bfad4ec0",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/app_launcher_icon.jpg": "19770cb50724fde07e391433739c12cb",
"icons/error_image.png": "793dc13d330cc09f122dcc46a1ba3fa5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e40e9cc5c515c03b29397f10164b0b4b",
"/": "e40e9cc5c515c03b29397f10164b0b4b",
"Logo_mensajeriapp.jpg": "19770cb50724fde07e391433739c12cb",
"main.dart.js": "41140c3753f8e6bf883f1372e9862ada",
"version.json": "80680fe5df71c6ae97cac9d4bbaa1aa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
