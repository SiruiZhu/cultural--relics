parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"HK/x":[function(require,module,exports) {
module.exports="/cultural--relics/architecture_point_completed.1b80faaf.geojson";
},{}],"8hoJ":[function(require,module,exports) {
"use strict";var e=null,r=35.5,a=105,s=require("./data/architecture_point_completed.geojson"),t="pk.eyJ1Ijoiemh1c2lydWkiLCJhIjoiczRLMGhEMCJ9.37GHQC_3mSKufR5ERmXsLw",o="mapbox://styles/zhusirui/cjote0r366qqd2spcea8df8td";function i(){e.addSource("markers-source",{type:"geojson",data:s}),e.addLayer({id:"markers",type:"circle",source:"markers-source",paint:{"circle-color":{property:"classification_en",type:"categorical",stops:[["Ancient architecture","#66c2a5"],["Ancient ruins","#fc8d62"],["Historical buildings of modern times","#8da0cb"],["Ancient tomb","#e78ac3"],["Cave temple and stone carving","#a6d854"],["others","#ffd92f"]]},"circle-radius":3.5,"circle-stroke-width":.5}});var r=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});e.on("mouseenter","markers",function(a){e.getCanvas().style.cursor="default";var s=a.features[0].geometry.coordinates.slice();a.features[0],a.features[0].properties;title=a.features[0].properties.name_en,era=a.features[0].properties.era_en,address=a.features[0].properties.province_en,type=a.features[0].properties.classification_en;for(var t="<div class='g-popup-line-1'>"+title+"</div><div class='g-popup-divider'></div><div class='g-popup-line-1-address'>Province: "+address+"</div><div class='g-popup-line-1-address'>Type: "+type+"</div><div class='g-popup-line-1-address'>Era: "+era+"</div></div></div>";Math.abs(a.lngLat.lng-s[0])>180;)s[0]+=a.lngLat.lng>s[0]?360:-360;r.setLngLat(s).setHTML(t).addTo(e)}),e.on("mouseout","markers",function(){e.getCanvas().style.cursor="",r.remove()})}mapboxgl.accessToken=t,(e=new mapboxgl.Map({container:"map",style:o,center:[a,r],zoom:3.3})).once("style.load",function(r){i(),e.addControl(new mapboxgl.NavigationControl)});
},{"./data/architecture_point_completed.geojson":"HK/x"}]},{},["8hoJ"], null)
//# sourceMappingURL=/cultural--relics/interactive_map.75bc8c65.map