"use strict";var precacheConfig=[["/index.html","bca174dffa636169c391e8f2c01d4d12"],["/static/js/main.f92683ba.js","49ed8f2ffeec427e787b2f130323fa26"],["/static/media/dispel.l.c74014f3.jpg","c74014f384c43965e36a6160103a2386"],["/static/media/dispel.m.6083e25c.jpg","6083e25c7a3509cac9ff0f2894463e06"],["/static/media/dispel.s.371bdbf8.jpg","371bdbf8322683426f72ec82ca62847d"],["/static/media/fevered-visions.l.0261c691.jpg","0261c691a3591bfdad36bc7170629a1b"],["/static/media/fevered-visions.m.990f6374.jpg","990f6374584e2e5f15530c858eccf029"],["/static/media/fevered-visions.s.299f6b9d.jpg","299f6b9d9b268fe15b0eda107f89868e"],["/static/media/force-of-will.m.f3d2250d.jpg","f3d2250dec93b562f4ca98a677c66fe5"],["/static/media/force-of-will.s.a8ebb4e3.jpg","a8ebb4e312be3164796e244a48bb63ca"],["/static/media/hinder.m.bcbb634a.jpg","bcbb634ad8f7c8ef014403b964ef9b14"],["/static/media/hinder.s.f60a1f95.jpg","f60a1f95ed3dc5e4d86587e9a10679bd"],["/static/media/island.l.a805b63c.jpg","a805b63c88e212bd8c3d5ea02c44d52b"],["/static/media/island.m.d0ac8cef.jpg","d0ac8cef56bc5cee3ee14265d869c338"],["/static/media/island.s.e5d01ae3.jpg","e5d01ae35cde8ad462669ac53c05de57"],["/static/media/lord-of-the-unreal.l.2d623be6.jpg","2d623be69c3a9f9c8055df3df154d328"],["/static/media/lord-of-the-unreal.m.8ced711a.jpg","8ced711a29d6412ff5494d4dd26b641c"],["/static/media/lord-of-the-unreal.s.1e779dcd.jpg","1e779dcde8290029047c225c875818ba"],["/static/media/mana-leak.m.b2f68de2.jpg","b2f68de20f1cdb7a385738d015c02711"],["/static/media/mana-leak.s.361e563c.jpg","361e563c170393821c352b2d424ccda3"],["/static/media/negate.m.55ee4fd7.jpg","55ee4fd79ecad65639361d4f37e9852e"],["/static/media/negate.s.84438431.jpg","84438431081e46e1b8ff1ae0f661ffbf"],["/static/media/negate2.m.9c73679b.jpg","9c73679bed024c82a3d6f26e28c4cc37"],["/static/media/negate2.s.7881b8d5.jpg","7881b8d5f3f8ccd2958363e8e548d054"],["/static/media/plains.l.0ea28f7a.jpg","0ea28f7a4f60cd6d55d342922a195e5d"],["/static/media/plains.m.18e2cbb5.jpg","18e2cbb5c531bc2aa3d69f4d6e1cee57"],["/static/media/plains.s.162b04c1.jpg","162b04c1496408feb3f6442e81807f36"],["/static/media/ponder.l.c0f2c284.jpg","c0f2c2842d829dd4533c7ff514e6bd4a"],["/static/media/ponder.m.db25a857.jpg","db25a857d32d2239779c97271dab834a"],["/static/media/ponder.s.f70c5d25.jpg","f70c5d25ac88573bd4d03dfda3eac941"],["/static/media/psionic-blast.m.be3a935d.jpg","be3a935d40ed9996bcd33d0d55863554"],["/static/media/psionic-blast.s.f8ec92f9.jpg","f8ec92f9d8d9456362918ecf608dd999"],["/static/media/remove-soul.m.c8010b71.jpg","c8010b71aa33e8f5373c9b5202616745"],["/static/media/remove-soul.s.043941fb.jpg","043941fbeb49530a74851e04e90c7ec9"],["/static/media/thoughtseize.l.e8fa5697.jpg","e8fa5697ee8a3f61bd48ba6799a2ec4f"],["/static/media/thoughtseize.m.ed760550.jpg","ed760550330197060e19c4ec5ddac8ff"],["/static/media/thoughtseize.s.70984f33.jpg","70984f33278d9dc3b33537187ca47ecd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});