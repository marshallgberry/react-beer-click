"use strict";var precacheConfig=[["/react-beer-click/index.html","6864be601be7479d61780d9124c483c3"],["/react-beer-click/static/css/main.50c831cd.css","e874641f667ae566ab66f3dcea1a55f5"],["/react-beer-click/static/js/main.980009b5.js","94e6b1d2ccfc562ae2ac83287e8408b8"],["/react-beer-click/static/media/berlin.5a34dc49.jpg","5a34dc49f30afaae69d02c721281f540"],["/react-beer-click/static/media/bg.59622efd.jpg","59622efdfe0889802cf1921ad681aa0b"],["/react-beer-click/static/media/coral.0b0caa92.jpg","0b0caa92d44661f5d963ad223198ea8a"],["/react-beer-click/static/media/guinness.3c5c567f.jpg","3c5c567f25b9c84c8bc1ff3823c5176a"],["/react-beer-click/static/media/heineken.d3109b51.jpg","d3109b512f634630191ec6ec191f8f9c"],["/react-beer-click/static/media/jumbo.5faa066a.jpg","5faa066a33b6cc3456f60f21c4c295f2"],["/react-beer-click/static/media/leffe.e874bb0c.jpg","e874bb0c2daf794494aee953e8415321"],["/react-beer-click/static/media/nomong.d17becfd.jpg","d17becfd920a52552f1485ca8955c032"],["/react-beer-click/static/media/redstripe.ca10097c.jpg","ca10097caf0165c6009d3765b33cd0a2"],["/react-beer-click/static/media/sierranevada.3e127400.jpg","3e1274008779ed6d0edb07282cba0a1b"],["/react-beer-click/static/media/yuengling.1d8d9e43.jpg","1d8d9e43b27740fe552fe1bec8191c79"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/react-beer-click/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});