const CACHE =
"rdo-v1";

self.addEventListener(
"install",
event => {

event.waitUntil(

caches.open(CACHE)

.then(cache=>{

return cache.addAll([
"/",
"/index.html",
"/style.css",
"/app.js"
])

})

)

})
