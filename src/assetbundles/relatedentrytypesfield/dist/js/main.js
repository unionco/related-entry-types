!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(5),t.exports=n(1)},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,u=0,l=[],h=n(4);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(g(r.parts[s],e))}else{var c=[];for(s=0;s<r.parts.length;s++)c.push(g(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function p(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}function d(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(t.insertAt.before,n);n.insertBefore(e,i)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=u++;n=a||(a=v(e)),r=S.bind(null,n,s,!1),i=S.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=h(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}.bind(null,n,e),i=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(c=o[s.id]).refs--,r.push(c)}t&&f(p(t,e),e);for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete o[c.id]}}}};var m,T=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function S(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=T(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);var r,i=function(){function t(t){this.checkbox=t,this.active=t.checked;var e=t.value.match(/section:(.*)/);e&&e.length&&(this.uid=e[1]),this.name=t.value;var n=document.querySelector('label[for="'+this.checkbox.id+'"]');n&&(this.label=n.innerText),this.checkboxChangeHandler=this.checkboxChangeHandler.bind(this),this.updateActiveStatus=this.updateActiveStatus.bind(this),this.checkbox.addEventListener("change",this.checkboxChangeHandler)}return t.prototype.updateActiveStatus=function(){this.active=this.checkbox.checked},t.prototype.checkboxChangeHandler=function(t){var e=t.target;this.active=e.checked;var n=new CustomEvent("channelChange",{detail:{sectionUid:this.uid,active:this.active,all:!1},bubbles:!0});return this.checkbox.dispatchEvent(n)},t}(),o=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.checkboxChangeHandler=function(t){var e=t.target;this.active=e.checked;var n=new CustomEvent("channelChange",{detail:{sectionUid:this.uid,active:this.active,all:!0},bubbles:!0});return this.checkbox.dispatchEvent(n)},e}(i),c=function(){function t(t){this.node=t;var e=t.querySelectorAll('input[type="checkbox"]');this.channels=Array.from(e).map(function(t){return"*"===t.value?new s(t):new i(t)}),this.getActiveChannels=this.getActiveChannels.bind(this),this.getChannels=this.getChannels.bind(this)}return t.prototype.getChannels=function(){return this.channels},t.prototype.getActiveChannels=function(){return this.channels.filter(function(t){return t.updateActiveStatus(),t.active})},t}(),a=function(){function t(t){this.id=t.id,this.label=t.label,this.sectionUid=t.sectionUid,this.active=t.active,this.toHtml=this.toHtml.bind(this)}return t.prototype.toHtml=function(){return'<div>\n            <input type="checkbox" name="types[unionco\\relatedentrytypes\\fields\\RelatedEntryTypesField][entryTypes][]" class="checkbox" value="'+this.id+'" id="entryType-'+this.id+'" '+(this.active?"checked":"")+'/>\n            <label for="entryType-'+this.id+'">'+this.label+"</label>\n        </div>"},t}(),u=function(){function t(t,e){this.sections=t,this.entryTypes=e.map(function(t){return new a(t)}),this.getEntryTypesBySectionUid=this.getEntryTypesBySectionUid.bind(this),this.getEntryTypesBySectionUidArray=this.getEntryTypesBySectionUidArray.bind(this),this.getEntryTypesByChannelArray=this.getEntryTypesByChannelArray.bind(this)}return t.prototype.getEntryTypesBySectionUid=function(t){if(!t||!t.length)return[];var e=this.entryTypes.filter(function(e){return e.sectionUid===t});return e&&e.length?e:[]},t.prototype.getEntryTypesBySectionUidArray=function(t){var e=this,n=[];return t.forEach(function(t){e.getEntryTypesBySectionUid(t).forEach(function(t){n.push(t)})}),n},t.prototype.getEntryTypesByChannelArray=function(t){var e=t.map(function(t){return t.uid});return this.getEntryTypesBySectionUidArray(e)},t}(),l=function(){function t(t){this.node=t}return t.prototype.render=function(){console.log(this.entryTypes);var t=this.node.querySelectorAll(".field.checkboxfield"),e=this.entryTypes.map(function(t){return t.id.toString()});t.forEach(function(t){var n=t.querySelector('input[type="checkbox"]').value;e.includes(n)?t.style.display="block":t.style.display="none"})},t.prototype.setEntryTypes=function(t){this.entryTypes=t},t}(),h=function(){function t(t){var e=this;this.namespacedId=t.namespace;var n=t.prefix;this.activeSections=[];var r=document.querySelector("#"+n+n+"channels");if(r){this.channelGroup=new c(r),this.activeSections=this.channelGroup.getActiveChannels();var i=JSON.parse(r.dataset.relatedEntryTypesChannels);this.sectionMap=new u(i.sections,i.entryTypes)}var o=document.querySelector("#"+n+n+"select");o&&(this.entryTypeGroup=new l(o),this.entryTypeGroup.setEntryTypes(this.sectionMap.getEntryTypesByChannelArray(this.activeSections)),this.entryTypeGroup.render()),this.updateActiveSections=this.updateActiveSections.bind(this),r.parentElement.addEventListener("channelChange",function(t){var n=t.detail,r=n.all,i=n.active;e.updateActiveSections(r,i)})}return t.prototype.updateActiveSections=function(t,e){this.activeSections=t?e?this.channelGroup.getChannels():[]:this.channelGroup.getActiveChannels();var n=this.sectionMap.getEntryTypesByChannelArray(this.activeSections);this.entryTypeGroup.setEntryTypes(n),this.entryTypeGroup.render()},t}();e.default=h;window.RelatedEntryTypesField=h}]);