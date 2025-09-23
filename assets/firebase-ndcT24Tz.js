const W_=()=>{};var bh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},H_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let g=(c&15)<<2|h>>6,b=h&63;u||(b=64,o||(g=64)),n.push(t[f],t[m],t[g],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Sf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):H_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new Q_;const g=s<<2|c>>4;if(n.push(g),h!==64){const b=c<<4&240|h>>2;if(n.push(b),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Q_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J_=function(r){const e=Sf(r);return Cf.encodeByteArray(e,!0)},Eo=function(r){return J_(r).replace(/\./g,"")},Qc=function(r){try{return Cf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Y_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!X_(t)||(r[t]=Y_(r[t],e[t]));return r}function X_(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=()=>kf().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof bh>"u")return;const r=bh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ty=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Qc(r[1]);return e&&JSON.parse(e)},Jc=()=>{try{return W_()||Z_()||ey()||ty()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Yc=()=>Jc()?.config,ny=r=>Jc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Eo(JSON.stringify(t)),Eo(JSON.stringify(o)),""].join(".")}const Vi={};function sy(){const r={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?r.emulator.push(e):r.prod.push(e);return r}function oy(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ph=!1;function Df(r,e){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||Vi[r]===e||Vi[r]||Ph)return;Vi[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",s=sy().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,b){g.setAttribute("width","24"),g.setAttribute("id",b),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Ph=!0,o()},g}function f(g,b){g.setAttribute("id",b),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=oy(n),b=t("text"),C=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),D=document.getElementById(N)||document.createElement("a"),z=t("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;c(q),f(D,N);const ee=h();u(j,z),q.append(j,C,D,ee),document.body.appendChild(q)}s?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Nf(){const r=Jc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cy(){return typeof window<"u"||xf()}function xf(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function uy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ly(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dy(){const r=Ae();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Of(){return!Nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mf(){return!Nf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Lf(){try{return typeof indexedDB=="object"}catch{return!1}}function fy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="FirebaseError";class It extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=py,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?my(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new It(i,c,n)}}function my(r,e){return r.replace(gy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const gy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function _y(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function an(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Sh(s)&&Sh(o)){if(!an(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Sh(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function vi(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ai(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function yy(r,e){const t=new Iy(r,e);return t.subscribe.bind(t)}class Iy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ty(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Qa),i.error===void 0&&(i.error=Qa),i.complete===void 0&&(i.complete=Qa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ty(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(r){return r&&r._delegate?r._delegate:r}class Ln{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ry;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vy(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:wy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wy(r){return r===Rn?void 0:r}function vy(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ey(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=[];var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const Uf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Ay=W.INFO,Ry={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},by=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Ry[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Ay,this._logHandler=by,this._userLogHandler=null,Xc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}function Py(r){Xc.forEach(e=>{e.setLogLevel(r)})}function Sy(r,e){for(const t of Xc){let n=null;e&&e.level&&(n=Uf[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(n??i.logLevel)&&r({level:W[s].toLowerCase(),message:c,args:o,type:i.name})}}}const Cy=(r,e)=>e.some(t=>r instanceof t);let Ch,kh;function ky(){return Ch||(Ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vy(){return kh||(kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bf=new WeakMap,pc=new WeakMap,qf=new WeakMap,Ja=new WeakMap,eu=new WeakMap;function Dy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(nn(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bf.set(t,r)}).catch(()=>{}),eu.set(e,r),e}function Ny(r){if(pc.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});pc.set(r,e)}let mc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xy(r){mc=r(mc)}function Oy(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ya(this),e,...t);return qf.set(n,e.sort?e.sort():[e]),nn(n)}:Vy().includes(r)?function(...e){return r.apply(Ya(this),e),nn(Bf.get(this))}:function(...e){return nn(r.apply(Ya(this),e))}}function My(r){return typeof r=="function"?Oy(r):(r instanceof IDBTransaction&&Ny(r),Cy(r,ky())?new Proxy(r,mc):r)}function nn(r){if(r instanceof IDBRequest)return Dy(r);if(Ja.has(r))return Ja.get(r);const e=My(r);return e!==r&&(Ja.set(r,e),eu.set(e,r)),e}const Ya=r=>eu.get(r);function Ly(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=nn(o);return n&&o.addEventListener("upgradeneeded",u=>{n(nn(o.result),u.oldVersion,u.newVersion,nn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Fy=["get","getKey","getAll","getAllKeys","count"],Uy=["put","add","delete","clear"],Xa=new Map;function Vh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Uy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Fy.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Xa.set(e,s),s}xy(r=>({...r,get:(e,t,n)=>Vh(e,t)||r.get(e,t,n),has:(e,t)=>!!Vh(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qy(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function qy(r){return r.getComponent()?.type==="VERSION"}const wo="@firebase/app",gc="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Zc("@firebase/app"),jy="@firebase/app-compat",zy="@firebase/analytics-compat",$y="@firebase/analytics",Gy="@firebase/app-check-compat",Ky="@firebase/app-check",Wy="@firebase/auth",Hy="@firebase/auth-compat",Qy="@firebase/database",Jy="@firebase/data-connect",Yy="@firebase/database-compat",Xy="@firebase/functions",Zy="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",iI="@firebase/performance",sI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",cI="@firebase/storage",uI="@firebase/storage-compat",lI="@firebase/firestore",hI="@firebase/ai",dI="@firebase/firestore-compat",fI="firebase",pI="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="[DEFAULT]",mI={[wo]:"fire-core",[jy]:"fire-core-compat",[$y]:"fire-analytics",[zy]:"fire-analytics-compat",[Ky]:"fire-app-check",[Gy]:"fire-app-check-compat",[Wy]:"fire-auth",[Hy]:"fire-auth-compat",[Qy]:"fire-rtdb",[Jy]:"fire-data-connect",[Yy]:"fire-rtdb-compat",[Xy]:"fire-fn",[Zy]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[iI]:"fire-perf",[sI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[cI]:"fire-gcs",[uI]:"fire-gcs-compat",[lI]:"fire-fst",[dI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[fI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Map,Er=new Map,wr=new Map;function _c(r,e){try{r.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function gI(r,e){r.container.addOrOverwriteComponent(e)}function Fn(r){const e=r.name;if(wr.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,r);for(const t of cn.values())_c(t,r);for(const t of Er.values())_c(t,r);return!0}function jf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _I(r,e,t=$i){jf(r,e).clearInstance(t)}function tu(r){return r.options!==void 0}function zf(r){return tu(r)?!1:"authIdToken"in r||"appCheckToken"in r||"releaseOnDeref"in r||"automaticDataCollectionEnabled"in r}function le(r){return r==null?!1:r.settings!==void 0}function yI(){wr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new ls("app","Firebase",II);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(r,e){const t=Qc(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class TI extends $f{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,o={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig={automaticDataCollectionEnabled:s,...t},this._serverConfig.authIdToken&&Dh(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Dh(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,bt(wo,gc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Kf(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ze.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=pI;function Gf(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:$i,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(t||(t=Yc()),!t)throw Ze.create("no-options");const s=cn.get(i);if(s){if(an(t,s.options)&&an(n,s.config))return s;throw Ze.create("duplicate-app",{appName:i})}const o=new Ff(i);for(const u of wr.values())o.addComponent(u);const c=new $f(t,n,o);return cn.set(i,c),c}function EI(r,e={}){if(cy()&&!xf())throw Ze.create("invalid-server-app-environment");let t,n=e||{};if(r&&(tu(r)?t=r.options:zf(r)?n=r:t=r),n.automaticDataCollectionEnabled===void 0&&(n.automaticDataCollectionEnabled=!0),t||(t=Yc()),!t)throw Ze.create("no-options");const i={...n,...t};i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const s=f=>[...f].reduce((m,g)=>Math.imul(31,m)+g.charCodeAt(0)|0,0);if(n.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ze.create("finalization-registry-not-supported",{});const o=""+s(JSON.stringify(i)),c=Er.get(o);if(c)return c.incRefCount(n.releaseOnDeref),c;const u=new Ff(o);for(const f of wr.values())u.addComponent(f);const h=new TI(t,n,o,u);return Er.set(o,h),h}function wI(r=$i){const e=cn.get(r);if(!e&&r===$i&&Yc())return Gf();if(!e)throw Ze.create("no-app",{appName:r});return e}function vI(){return Array.from(cn.values())}async function Kf(r){let e=!1;const t=r.name;cn.has(t)?(e=!0,cn.delete(t)):Er.has(t)&&r.decRefCount()<=0&&(Er.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function bt(r,e,t){let n=mI[r]??r;t&&(n+=`-${t}`);const i=n.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(o.join(" "));return}Fn(new Ln(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function AI(r,e){if(r!==null&&typeof r!="function")throw Ze.create("invalid-log-argument");Sy(r,e)}function RI(r){Py(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firebase-heartbeat-database",PI=1,Gi="firebase-heartbeat-store";let Za=null;function Wf(){return Za||(Za=Ly(bI,PI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gi)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ze.create("idb-open",{originalErrorMessage:r.message})})),Za}async function SI(r){try{const t=(await Wf()).transaction(Gi),n=await t.objectStore(Gi).get(Hf(r));return await t.done,n}catch(e){if(e instanceof It)St.warn(e.message);else{const t=Ze.create("idb-get",{originalErrorMessage:e?.message});St.warn(t.message)}}}async function Nh(r,e){try{const n=(await Wf()).transaction(Gi,"readwrite");await n.objectStore(Gi).put(e,Hf(r)),await n.done}catch(t){if(t instanceof It)St.warn(t.message);else{const n=Ze.create("idb-set",{originalErrorMessage:t?.message});St.warn(n.message)}}}function Hf(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=1024,kI=30;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=xh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>kI){const i=xI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){St.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xh(),{heartbeatsToSend:t,unsentEntries:n}=DI(this._heartbeatsCache.heartbeats),i=Eo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return St.warn(e),""}}}function xh(){return new Date().toISOString().substring(0,10)}function DI(r,e=CI){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Oh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Oh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class NI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lf()?fy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Nh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Oh(r){return Eo(JSON.stringify({version:2,heartbeats:r})).length}function xI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(r){Fn(new Ln("platform-logger",e=>new By(e),"PRIVATE")),Fn(new Ln("heartbeat",e=>new VI(e),"PRIVATE")),bt(wo,gc,r),bt(wo,gc,"esm2020"),bt("fire-js","")}OI("");const JR=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:It,SDK_VERSION:Hn,_DEFAULT_ENTRY_NAME:$i,_addComponent:_c,_addOrOverwriteComponent:gI,_apps:cn,_clearComponents:yI,_components:wr,_getProvider:jf,_isFirebaseApp:tu,_isFirebaseServerApp:le,_isFirebaseServerAppSettings:zf,_registerComponent:Fn,_removeServiceInstance:_I,_serverApps:Er,deleteApp:Kf,getApp:wI,getApps:vI,initializeApp:Gf,initializeServerApp:EI,onLog:AI,registerVersion:bt,setLogLevel:RI},Symbol.toStringTag,{value:"Module"})),YR={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},XR={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZR=MI,LI=Qf,Jf=new ls("auth","Firebase",Qf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Zc("@firebase/auth");function FI(r,...e){vo.logLevel<=W.WARN&&vo.warn(`Auth (${Hn}): ${r}`,...e)}function ro(r,...e){vo.logLevel<=W.ERROR&&vo.error(`Auth (${Hn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(r,...e){throw ru(r,...e)}function $e(r,...e){return ru(r,...e)}function nu(r,e,t){const n={...LI(),[e]:t};return new ls("auth","Firebase",n).create(e,{appName:r.name})}function Ce(r){return nu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zr(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&et(r,"argument-error"),nu(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Jf.create(r,...e)}function x(r,e,...t){if(!r)throw ru(e,...t)}function lt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ro(e),new Error(e)}function Ct(r,e){r||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return typeof self<"u"&&self.location?.href||""}function iu(){return Mh()==="http:"||Mh()==="https:"}function Mh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iu()||ly()||"connection"in navigator)?navigator.onLine:!0}function BI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=ay()||hy()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(r,e){Ct(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zI=new hs(3e4,6e4);function ge(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function _e(r,e,t,n,i={}){return Xf(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=jr({key:r.config.apiKey,...o}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h={method:e,headers:u,...s};return uy()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&qr(r.emulatorConfig.host)&&(h.credentials="include"),Yf.fetch()(await Zf(r,r.config.apiHost,t,c),h)})}async function Xf(r,e,t){r._canInitEmulator=!1;const n={...qI,...e};try{const i=new GI(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ri(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ri(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ri(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nu(r,f,h);et(r,f)}}catch(i){if(i instanceof It)throw i;et(r,"network-request-failed",{message:String(i)})}}async function Ot(r,e,t,n,i={}){const s=await _e(r,e,t,n,i);return"mfaPendingCredential"in s&&et(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function Zf(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?su(r.config,i):`${r.config.apiScheme}://${i}`;return jI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function $I(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n($e(this.auth,"network-request-failed")),zI.get())})}}function Ri(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=$e(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(r){return r!==void 0&&r.getResponse!==void 0}function Fh(r){return r!==void 0&&r.enterprise!==void 0}class ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $I(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(r){return(await _e(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tp(r,e){return _e(r,"GET","/v2/recaptchaConfig",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(r,e){return _e(r,"POST","/v1/accounts:delete",e)}async function HI(r,e){return _e(r,"POST","/v1/accounts:update",e)}async function Ao(r,e){return _e(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QI(r,e=!1){const t=$(r),n=await t.getIdToken(e),i=$o(n);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:n,authTime:Di(ec(i.auth_time)),issuedAtTime:Di(ec(i.iat)),expirationTime:Di(ec(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ec(r){return Number(r)*1e3}function $o(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qc(t);return i?JSON.parse(i):(ro("Failed to decode base64 JWT payload"),null)}catch(i){return ro("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Uh(r){const e=$o(r);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof It&&JI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function JI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(r){const e=r.auth,t=await r.getIdToken(),n=await kt(r,Ao(e,{idToken:t}));x(n?.users.length,e,"internal-error");const i=n.users[0];r._notifyReloadListener(i);const s=i.providerUserInfo?.length?np(i.providerUserInfo):[],o=ZI(r.providerData,s),c=r.isAnonymous,u=!(r.email&&i.passwordHash)&&!o?.length,h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function XI(r){const e=$(r);await Wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function np(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(r,e){const t=await Xf(r,{},async()=>{const n=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await Zf(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&qr(r.emulatorConfig.host)&&(u.credentials="include"),Yf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tT(r,e){return _e(r,"POST","/v2/accounts:revokeToken",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Uh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await eT(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new gr;return n&&(x(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(r,e){x(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new YI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await kt(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QI(this,e)}reload(){return XI(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Wi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(Ce(this.auth));const e=await this.getIdToken();return await kt(this,WI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:b,providerData:C,stsTokenManager:N}=t;x(m&&N,e,"internal-error");const D=gr.fromJSON(this.name,N);x(typeof m=="string",e,"internal-error"),Gt(n,e.name),Gt(i,e.name),x(typeof g=="boolean",e,"internal-error"),x(typeof b=="boolean",e,"internal-error"),Gt(s,e.name),Gt(o,e.name),Gt(c,e.name),Gt(u,e.name),Gt(h,e.name),Gt(f,e.name);const z=new st({uid:m,auth:e,email:i,emailVerified:g,displayName:n,isAnonymous:b,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(z.providerData=C.map(j=>({...j}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,n=!1){const i=new gr;i.updateFromServerResponse(t);const s=new st({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Wi(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?np(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new gr;c.updateFromIdToken(n);const u=new st({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Map;function vt(r){Ct(r instanceof Function,"Expected a class definition");let e=Bh.get(r);return e?(Ct(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const qh=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(r,e,t){return`firebase:${r}:${e}:${t}`}class _r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=io(this.userKey,i.apiKey,s),this.fullPersistenceKey=io("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ao(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _r(vt(qh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vt(qh);const o=io(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await Ao(e,{idToken:f}).catch(()=>{});if(!g)break;m=await st._fromGetAccountInfoResponse(e,g,f)}else m=st._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _r(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new _r(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(up(e))return"Blackberry";if(lp(e))return"Webos";if(sp(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(cp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function ip(r=Ae()){return/firefox\//i.test(r)}function sp(r=Ae()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(r=Ae()){return/crios\//i.test(r)}function ap(r=Ae()){return/iemobile/i.test(r)}function cp(r=Ae()){return/android/i.test(r)}function up(r=Ae()){return/blackberry/i.test(r)}function lp(r=Ae()){return/webos/i.test(r)}function ou(r=Ae()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function eb(r=Ae()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function nT(r=Ae()){return ou(r)&&!!window.navigator?.standalone}function rT(){return dy()&&document.documentMode===10}function hp(r=Ae()){return ou(r)||cp(r)||lp(r)||up(r)||/windows phone/i.test(r)||ap(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(r,e=[]){let t;switch(r){case"Browser":t=jh(Ae());break;case"Worker":t=`${jh(Ae())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(r,e={}){return _e(r,"GET","/v2/passwordPolicy",ge(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=6;class aT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??oT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new iT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ao(this,{idToken:e}),n=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(le(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=n?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===o)&&c?.user&&(n=c.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(Ce(this));const t=e?$(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(Ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(Ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sT(this),t=new aT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await tT(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Re(r){return $(r)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=yy(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uT(r){ds=r}function au(r){return ds.loadJS(r)}function lT(){return ds.recaptchaV2Script}function hT(){return ds.recaptchaEnterpriseScript}function dT(){return ds.gapiScript}function fp(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=500,pT=6e4,Qs=1e12;class mT{constructor(e){this.auth=e,this.counter=Qs,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new yT(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||Qs;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Qs;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Qs;return this._widgets.get(t)?.execute(),""}}class gT{constructor(){this.enterprise=new _T}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _T{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yT{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=IT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},pT)},fT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function IT(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const TT="recaptcha-enterprise",Ni="NO_RECAPTCHA";class pp{constructor(e){this.type=TT,this.auth=Re(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{tp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ep(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;Fh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ni)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&Fh(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hT();u.length!==0&&(u+=c),au(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function _i(r,e,t,n=!1,i=!1){const s=new pp(r);let o;if(i)o=Ni;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function rn(r,e,t,n,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _i(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _i(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(r._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await _i(r,e,t);return n(r,s).catch(async o=>{if(r._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const c=await _i(r,e,t,!1,!0);return n(r,c)}return Promise.reject(o)})}else{const s=await _i(r,e,t,!1,!0);return n(r,s)}else return Promise.reject(i+" provider is not supported.")}async function ET(r){const e=Re(r),t=await tp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ep(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new pp(e).verify()}function wT(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(vt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function tb(r,e,t){const n=Re(r);x(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=mp(e),{host:o,port:c}=vT(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){x(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),x(an(h,n.config.emulator)&&an(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,qr(o)?(Vf(`${s}//${o}${u}`),Df("Auth",!0)):i||AT()}function mp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function vT(r){const e=mp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:$h(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:$h(o)}}}function $h(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function AT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(r,e){return _e(r,"POST","/v1/accounts:resetPassword",ge(r,e))}async function RT(r,e){return _e(r,"POST","/v1/accounts:update",e)}async function bT(r,e){return _e(r,"POST","/v1/accounts:signUp",e)}async function PT(r,e){return _e(r,"POST","/v1/accounts:update",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(r,e){return Ot(r,"POST","/v1/accounts:signInWithPassword",ge(r,e))}async function Go(r,e){return _e(r,"POST","/v1/accounts:sendOobCode",ge(r,e))}async function CT(r,e){return Go(r,e)}async function kT(r,e){return Go(r,e)}async function VT(r,e){return Go(r,e)}async function DT(r,e){return Go(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(r,e){return Ot(r,"POST","/v1/accounts:signInWithEmailLink",ge(r,e))}async function xT(r,e){return Ot(r,"POST","/v1/accounts:signInWithEmailLink",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends fs{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Hi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Hi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rn(e,t,"signInWithPassword",ST,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return NT(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rn(e,n,"signUpPassword",bT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xT(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(r,e){return Ot(r,"POST","/v1/accounts:signInWithIdp",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="http://localhost";class Vt extends fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...s}=t;if(!n||!i)return null;const o=new Vt(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pt(e,t)}buildRequest(){const e={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(r,e){return _e(r,"POST","/v1/accounts:sendVerificationCode",ge(r,e))}async function MT(r,e){return Ot(r,"POST","/v1/accounts:signInWithPhoneNumber",ge(r,e))}async function LT(r,e){const t=await Ot(r,"POST","/v1/accounts:signInWithPhoneNumber",ge(r,e));if(t.temporaryProof)throw Ri(r,"account-exists-with-different-credential",t);return t}const FT={USER_NOT_FOUND:"user-not-found"};async function UT(r,e){const t={...e,operation:"REAUTH"};return Ot(r,"POST","/v1/accounts:signInWithPhoneNumber",ge(r,t),FT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends fs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new On({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new On({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return MT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return LT(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return UT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new On({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qT(r){const e=vi(Ai(r)).link,t=e?vi(Ai(e)).deep_link_id:null,n=vi(Ai(r)).deep_link_id;return(n?vi(Ai(n)).link:null)||n||t||e||r}class Ko{constructor(e){const t=vi(Ai(e)),n=t.apiKey??null,i=t.oobCode??null,s=BT(t.mode??null);x(n&&i&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=qT(e);try{return new Ko(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ko.parseLink(t);return x(n,"argument-error"),Hi._fromEmailAndCode(e,n.code,n.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Mt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class so extends $r{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return x("providerId"in t&&"signInMethod"in t,"argument-error"),Vt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),Vt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return so.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return so.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!s||!c)return null;try{return new so(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends $r{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Jt.credential(t,n)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends $r{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="http://localhost";class Qi extends fs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Pt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return!n||!i||!s||n!==i?null:new Qi(n,s)}static _create(e,t){return new Qi(e,t)}buildRequest(){return{requestUri:jT,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="saml.";class Ic extends Mt{constructor(e){x(e.startsWith(zT),"argument-error"),super(e)}static credentialFromResult(e){return Ic.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ic.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Qi.fromJSON(e);return x(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Qi._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends $r{constructor(){super("twitter.com")}static credential(e,t){return Vt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xt.credential(t,n)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(r,e){return Ot(r,"POST","/v1/accounts:signUp",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await st._fromIdTokenResponse(e,n,i),o=Kh(n);return new nt({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Kh(n);return new nt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Kh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(r){if(le(r.app))return Promise.reject(Ce(r));const e=Re(r);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new nt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await _p(e,{returnSecureToken:!0}),n=await nt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends It{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ro(e,t,n,i)}}function yp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(r,s,e,n):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(r,e){const t=$(r);await Wo(!0,t,e);const{providerUserInfo:n}=await HI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Ip(n||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function cu(r,e,t=!1){const n=await kt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return nt._forOperation(r,"link",n)}async function Wo(r,e,t){await Wi(e);const n=Ip(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";x(n.has(t)===r,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(r,e,t=!1){const{auth:n}=r;if(le(n.app))return Promise.reject(Ce(n));const i="reauthenticate";try{const s=await kt(r,yp(n,i,e,r),t);x(s.idToken,n,"internal-error");const o=$o(s.idToken);x(o,n,"internal-error");const{sub:c}=o;return x(r.uid===c,n,"user-mismatch"),nt._forOperation(r,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&et(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(r,e,t=!1){if(le(r.app))return Promise.reject(Ce(r));const n="signIn",i=await yp(r,n,e),s=await nt._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function uu(r,e){return Ep(Re(r),e)}async function $T(r,e){const t=$(r);return await Wo(!1,t,e.providerId),cu(t,e)}async function GT(r,e){return Tp($(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(r,e){return Ot(r,"POST","/v1/accounts:signInWithCustomToken",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(r,e){if(le(r.app))return Promise.reject(Ce(r));const t=Re(r),n=await KT(t,{token:e,returnSecureToken:!0}),i=await nt._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?lu._fromServerResponse(e,t):"totpInfo"in t?hu._fromServerResponse(e,t):et(e,"internal-error")}}class lu extends ps{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new lu(t)}}class hu extends ps{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new hu(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(r,e,t){x(t.url?.length>0,r,"invalid-continue-uri"),x(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),x(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(x(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(x(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(r){const e=Re(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sb(r,e,t){const n=Re(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ho(n,i,t),await rn(n,i,"getOobCode",kT,"EMAIL_PASSWORD_PROVIDER")}async function ob(r,e,t){await gp($(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&du(r),n})}async function ab(r,e){await PT($(r),{oobCode:e})}async function WT(r,e){const t=$(r),n=await gp(t,{oobCode:e}),i=n.requestType;switch(x(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(n.mfaInfo,t,"internal-error");default:x(n.email,t,"internal-error")}let s=null;return n.mfaInfo&&(s=ps._fromServerResponse(Re(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function cb(r,e){const{data:t}=await WT($(r),e);return t.email}async function ub(r,e,t){if(le(r.app))return Promise.reject(Ce(r));const n=Re(r),o=await rn(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_p,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&du(r),u}),c=await nt._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function lb(r,e,t){return le(r.app)?Promise.reject(Ce(r)):uu($(r),Qn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&du(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(r,e,t){const n=Re(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){x(c.handleCodeInApp,n,"argument-error"),c&&Ho(n,o,c)}s(i,t),await rn(n,i,"getOobCode",VT,"EMAIL_PASSWORD_PROVIDER")}function db(r,e){return Ko.parseLink(e)?.operation==="EMAIL_SIGNIN"}async function fb(r,e,t){if(le(r.app))return Promise.reject(Ce(r));const n=$(r),i=Qn.credentialWithLink(e,t||Ki());return x(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),uu(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(r,e){return _e(r,"POST","/v1/accounts:createAuthUri",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(r,e){const t=iu()?Ki():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await HT($(r),n);return i||[]}async function mb(r,e){const t=$(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Ho(t.auth,i,e);const{email:s}=await CT(t.auth,i);s!==r.email&&await r.reload()}async function gb(r,e,t){const n=$(r),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Ho(n.auth,s,t);const{email:o}=await DT(n.auth,s);o!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(r,e){return _e(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=$(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await kt(n,QT(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function yb(r,e){const t=$(r);return le(t.auth.app)?Promise.reject(Ce(t.auth)):wp(t,e,null)}function Ib(r,e){return wp($(r),null,e)}async function wp(r,e,t){const{auth:n}=r,s={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await kt(r,RT(n,s));await r._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(r){if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},n=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&r?.idToken){const i=$o(r.idToken)?.firebase?.sign_in_provider;if(i){const s=i!=="anonymous"&&i!=="custom"?i:null;return new yr(n,s)}}if(!e)return null;switch(e){case"facebook.com":return new YT(n,t);case"github.com":return new XT(n,t);case"google.com":return new ZT(n,t);case"twitter.com":return new eE(n,t,r.screenName||null);case"custom":case"anonymous":return new yr(n,null);default:return new yr(n,e,t)}}class yr{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class vp extends yr{constructor(e,t,n,i){super(e,t,n),this.username=i}}class YT extends yr{constructor(e,t){super(e,"facebook.com",t)}}class XT extends vp{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class ZT extends yr{constructor(e,t){super(e,"google.com",t)}}class eE extends vp{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Tb(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:JT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Dn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Dn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return Dn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return Dn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>ps._fromServerResponse(n,c));x(i.mfaPendingCredential,n,"internal-error");const o=Dn._fromMfaPendingCredential(i.mfaPendingCredential);return new fu(o,s,async c=>{const u=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const h={...i,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const f=await nt._fromIdTokenResponse(n,t.operationType,h);return await n._updateCurrentUser(f.user),f;case"reauthenticate":return x(t.user,n,"internal-error"),nt._forOperation(t.user,t.operationType,h);default:et(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Eb(r,e){const t=$(r),n=e;return x(e.customData.operationType,t,"argument-error"),x(n.customData._serverResponse?.mfaPendingCredential,t,"argument-error"),fu._fromError(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(r,e){return _e(r,"POST","/v2/accounts/mfaEnrollment:start",ge(r,e))}function tE(r,e){return _e(r,"POST","/v2/accounts/mfaEnrollment:finalize",ge(r,e))}function nE(r,e){return _e(r,"POST","/v2/accounts/mfaEnrollment:withdraw",ge(r,e))}class pu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>ps._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new pu(e)}async getSession(){return Dn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),s=await kt(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await kt(this.user,nE(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const tc=new WeakMap;function wb(r){const e=$(r);return tc.has(e)||tc.set(e,pu._fromUser(e)),tc.get(e)}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=1e3,iE=10;class Rp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);rT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iE):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},rE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rp.type="LOCAL";const vb=Rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bp.type="SESSION";const sE=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Qo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await oE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Jo("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function cE(r){we().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){return typeof we().WorkerGlobalScope<"u"&&typeof we().importScripts=="function"}async function uE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lE(){return navigator?.serviceWorker?.controller||null}function hE(){return mu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebaseLocalStorageDb",dE=1,Po="firebaseLocalStorage",Sp="fbase_key";class ms{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yo(r,e){return r.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function fE(){const r=indexedDB.deleteDatabase(Pp);return new ms(r).toPromise()}function Tc(){const r=indexedDB.open(Pp,dE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Po,{keyPath:Sp})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Po)?e(n):(n.close(),await fE(),e(await Tc()))})})}async function Hh(r,e,t){const n=Yo(r,!0).put({[Sp]:e,value:t});return new ms(n).toPromise()}async function pE(r,e){const t=Yo(r,!1).get(e),n=await new ms(t).toPromise();return n===void 0?null:n.value}function Qh(r,e){const t=Yo(r,!0).delete(e);return new ms(t).toPromise()}const mE=800,gE=3;class Cp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>gE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(hE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await uE(),!this.activeServiceWorker)return;this.sender=new aE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await Hh(e,bo,"1"),await Qh(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>pE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yo(i,!1).getAll();return new ms(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cp.type="LOCAL";const Ab=Cp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(r,e){return _e(r,"POST","/v2/accounts/mfaSignIn:start",ge(r,e))}function _E(r,e){return _e(r,"POST","/v2/accounts/mfaSignIn:finalize",ge(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=fp("rcb"),yE=new hs(3e4,6e4);class IE{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!we().grecaptcha?.render}load(e,t=""){return x(TE(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Lh(we().grecaptcha)?Promise.resolve(we().grecaptcha):new Promise((n,i)=>{const s=we().setTimeout(()=>{i($e(e,"network-request-failed"))},yE.get());we()[nc]=()=>{we().clearTimeout(s),delete we()[nc];const c=we().grecaptcha;if(!c||!Lh(c)){i($e(e,"internal-error"));return}const u=c.render;c.render=(h,f)=>{const m=u(h,f);return this.counter++,m},this.hostLanguage=t,n(c)};const o=`${lT()}?${jr({onload:nc,render:"explicit",hl:t})}`;au(o).catch(()=>{clearTimeout(s),i($e(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!we().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function TE(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class EE{async load(e){return new mT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="recaptcha",wE={theme:"light",type:"image"};let Rb=class{constructor(e,t,n={...wE}){this.parameters=n,this.type=xi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(e),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new EE:new IE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=we()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(iu()&&!mu(),this.auth,"internal-error"),await vE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await KI(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function vE(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=On._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Pb(r,e,t){if(le(r.app))return Promise.reject(Ce(r));const n=Re(r),i=await Xo(n,e,$(t));return new gu(i,s=>uu(n,s))}async function Sb(r,e,t){const n=$(r);await Wo(!1,n,"phone");const i=await Xo(n.auth,e,$(t));return new gu(i,s=>$T(n,s))}async function Cb(r,e,t){const n=$(r);if(le(n.auth.app))return Promise.reject(Ce(n.auth));const i=await Xo(n.auth,e,$(t));return new gu(i,s=>GT(n,s))}async function Xo(r,e,t){if(!r._getRecaptchaConfig())try{await ET(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(typeof e=="string"?n={phoneNumber:e}:n=e,"session"in n){const i=n.session;if("phoneNumber"in n){x(i.type==="enroll",r,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await rn(r,s,"mfaSmsEnrollment",async(h,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Ni){x(t?.type===xi,h,"argument-error");const m=await rc(h,f,t);return Wh(h,m)}return Wh(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{x(i.type==="signin",r,"internal-error");const s=n.multiFactorHint?.uid||n.multiFactorUid;x(s,r,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await rn(r,o,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===Ni){x(t?.type===xi,f,"argument-error");const g=await rc(f,m,t);return Jh(f,g)}return Jh(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await rn(r,i,"sendVerificationCode",async(u,h)=>{if(h.captchaResponse===Ni){x(t?.type===xi,u,"argument-error");const f=await rc(u,h,t);return Gh(u,f)}return Gh(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t?._reset()}}async function kb(r,e){const t=$(r);if(le(t.auth.app))return Promise.reject(Ce(t.auth));await cu(t,e)}async function rc(r,e,t){x(t.type===xi,r,"argument-error");const n=await t.verify();x(typeof n=="string",r,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:n,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:n}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp=class oo{constructor(e){this.providerId=oo.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Xo(this.auth,e,$(t))}static credential(e,t){return On._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oo.credentialFromTaggedObject(t)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?On._fromTokenResponse(t,n):null}};kp.PROVIDER_ID="phone";kp.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(r,e){return e?vt(e):(x(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AE(r){return Ep(r.auth,new _u(r),r.bypassAuthState)}function RE(r){const{auth:e,user:t}=r;return x(t,e,"internal-error"),Tp(t,new _u(r),r.bypassAuthState)}async function bE(r){const{auth:e,user:t}=r;return x(t,e,"internal-error"),cu(t,new _u(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return bE;case"reauthViaPopup":case"reauthViaRedirect":return RE;default:et(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new hs(2e3,1e4);async function Vb(r,e,t){if(le(r.app))return Promise.reject($e(r,"operation-not-supported-in-this-environment"));const n=Re(r);zr(r,e,Mt);const i=Jn(n,t);return new At(n,"signInViaPopup",e,i).executeNotNull()}async function Db(r,e,t){const n=$(r);if(le(n.auth.app))return Promise.reject($e(n.auth,"operation-not-supported-in-this-environment"));zr(n.auth,e,Mt);const i=Jn(n.auth,t);return new At(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function Nb(r,e,t){const n=$(r);zr(n.auth,e,Mt);const i=Jn(n.auth,t);return new At(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class At extends Vp{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PE.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="pendingRedirect",Oi=new Map;class CE extends Vp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const n=await kE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kE(r,e){const t=Np(e),n=Dp(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function yu(r,e){return Dp(r)._set(Np(e),"true")}function xb(){Oi.clear()}function VE(r,e){Oi.set(r._key(),e)}function Dp(r){return vt(r._redirectPersistence)}function Np(r){return io(SE,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(r,e,t){return DE(r,e,t)}async function DE(r,e,t){if(le(r.app))return Promise.reject(Ce(r));const n=Re(r);zr(r,e,Mt),await n._initializationPromise;const i=Jn(n,t);return await yu(i,n),i._openRedirect(n,e,"signInViaRedirect")}function Mb(r,e,t){return NE(r,e,t)}async function NE(r,e,t){const n=$(r);if(zr(n.auth,e,Mt),le(n.auth.app))return Promise.reject(Ce(n.auth));await n.auth._initializationPromise;const i=Jn(n.auth,t);await yu(i,n.auth);const s=await Op(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function Lb(r,e,t){return xE(r,e,t)}async function xE(r,e,t){const n=$(r);zr(n.auth,e,Mt),await n.auth._initializationPromise;const i=Jn(n.auth,t);await Wo(!1,n,e.providerId),await yu(i,n.auth);const s=await Op(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function Fb(r,e){return await Re(r)._initializationPromise,xp(r,e,!1)}async function xp(r,e,t=!1){if(le(r.app))return Promise.reject(Ce(r));const n=Re(r),i=Jn(n,e),o=await new CE(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function Op(r){const e=Jo(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=600*1e3;class ME{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Mp(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError($e(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Mp({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function LE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mp(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(r,e={}){return _e(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BE=/^https?/;async function qE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await FE(r);for(const t of e)try{if(jE(t))return}catch{}et(r,"unauthorized-domain")}function jE(r){const e=Ki(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!BE.test(t))return!1;if(UE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=new hs(3e4,6e4);function Xh(){const r=we().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function $E(r){return new Promise((e,t)=>{function n(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),t($e(r,"network-request-failed"))},timeout:zE.get()})}if(we().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(we().gapi?.load)n();else{const i=fp("iframefcb");return we()[i]=()=>{gapi.load?n():t($e(r,"network-request-failed"))},au(`${dT()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw ao=null,e})}let ao=null;function GE(r){return ao=ao||$E(r),ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new hs(5e3,15e3),WE="__/auth/iframe",HE="emulator/auth/iframe",QE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YE(r){const e=r.config;x(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?su(e,HE):`https://${r.config.authDomain}/${WE}`,n={apiKey:e.apiKey,appName:r.name,v:Hn},i=JE.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${jr(n).slice(1)}`}async function XE(r){const e=await GE(r),t=we().gapi;return x(t,r,"internal-error"),e.open({where:document.body,url:YE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=$e(r,"network-request-failed"),c=we().setTimeout(()=>{s(o)},KE.get());function u(){we().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ew=500,tw=600,nw="_blank",rw="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iw(r,e,t,n=ew,i=tw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u={...ZE,width:n.toString(),height:i.toString(),top:s,left:o},h=Ae().toLowerCase();t&&(c=op(h)?nw:t),ip(h)&&(e=e||rw,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[b,C])=>`${g}${b}=${C},`,"");if(nT(h)&&c!=="_self")return sw(e||"",c),new Zh(null);const m=window.open(e||"",c,f);x(m,r,"popup-blocked");try{m.focus()}catch{}return new Zh(m)}function sw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="__/auth/handler",aw="emulator/auth/handler",cw=encodeURIComponent("fac");async function ed(r,e,t,n,i,s){x(r.config.authDomain,r,"auth-domain-config-required"),x(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Hn,eventId:i};if(e instanceof Mt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",_y(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof $r){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${cw}=${encodeURIComponent(u)}`:"";return`${uw(r)}?${jr(c).slice(1)}${h}`}function uw({config:r}){return r.emulator?su(r,aw):`https://${r.authDomain}/${ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class lw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sE,this._completeRedirectFn=xp,this._overrideRedirectResult=VE}async _openPopup(e,t,n,i){Ct(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await ed(e,t,n,Ki(),i);return iw(e,s,Jo())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await ed(e,t,n,Ki(),i);return cE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ct(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await XE(e),n=new ME(e);return t.register("authEvent",i=>(x(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ic,{type:ic},i=>{const s=i?.[0]?.[ic];s!==void 0&&t(!!s),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hp()||sp()||ou()}}const Ub=lw;class hw{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return lt("unexpected MultiFactorSessionType")}}}class Iu extends hw{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Iu(e)}_finalizeEnroll(e,t,n){return tE(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _E(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class dw{constructor(){}static assertion(e){return Iu._fromCredential(e)}}dw.FACTOR_ID="phone";var td="@firebase/auth",nd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mw(r){Fn(new Ln("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(r)},h=new cT(n,i,s,u);return wT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Fn(new Ln("auth-internal",e=>{const t=Re(e.getProvider("auth").getImmediate());return(n=>new fw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(td,nd,pw(r)),bt(td,nd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=300;ny("authIdTokenMaxAge");function _w(){return document.getElementsByTagName("head")?.[0]??document}uT({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=$e("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",_w().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mw("Browser");var rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sn,Lp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.D=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,w,R){for(var y=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)y[Tt-2]=arguments[Tt];return _.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var w=0;16>w;++w)E[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;16>w;++w)E[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],w=T.g[2];var R=T.g[3],y=_+(R^I&(w^R))+E[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[1]+3905402710&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[5]+1200080426&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[9]+2336552879&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[13]+4254626195&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^R&(I^w))+E[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[6]+3225465664&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[10]+38016083&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[14]+3275163606&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[2]+4243563512&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^R)+E[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[8]+2272392833&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[4]+1272893353&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[0]+3936430074&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[12]+3873151461&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~R))+E[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[7]+1126891415&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[3]+2399980690&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[15]+4264355552&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[11]+3174756917&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var I=_-this.blockSize,E=this.B,w=this.h,R=0;R<_;){if(w==0)for(;R<=I;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(E[w++]=T.charCodeAt(R++),w==this.blockSize){i(this,E),w=0;break}}else for(;R<_;)if(E[w++]=T[R++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=_},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var I=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=I&255,I/=256;for(this.u(T),T=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)T[I++]=this.g[_]>>>E&255;return T};function s(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;for(var I=[],E=!0,w=T.length-1;0<=w;w--){var R=T[w]|0;E&&R==_||(I[w]=R,E=!1)}this.g=I}var c={};function u(T){return-128<=T&&128>T?s(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(h(-T));for(var _=[],I=1,E=0;T>=I;E++)_[E]=T/I|0,I*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),E=m,w=0;w<T.length;w+=8){var R=Math.min(8,T.length-w),y=parseInt(T.substring(w,w+R),_);8>R?(R=h(Math.pow(_,R)),E=E.j(R).add(h(y))):(E=E.j(I),E=E.add(h(y)))}return E}var m=u(0),g=u(1),b=u(16777216);r=o.prototype,r.m=function(){if(N(this))return-D(this).m();for(var T=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(N(this))return"-"+D(this).toString(T);for(var _=h(Math.pow(T,6)),I=this,E="";;){var w=ee(I,_).g;I=z(I,w.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=w,C(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=z(this,T),N(T)?-1:C(T)?0:1};function D(T){for(var _=T.g.length,I=[],E=0;E<_;E++)I[E]=~T.g[E];return new o(I,~T.h).add(g)}r.abs=function(){return N(this)?D(this):this},r.add=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0,w=0;w<=_;w++){var R=E+(this.i(w)&65535)+(T.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,R&=65535,y&=65535,I[w]=y<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function z(T,_){return T.add(D(_))}r.j=function(T){if(C(this)||C(T))return m;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var R=this.i(E)>>>16,y=this.i(E)&65535,Tt=T.i(w)>>>16,ei=T.i(w)&65535;I[2*E+2*w]+=y*ei,j(I,2*E+2*w),I[2*E+2*w+1]+=R*ei,j(I,2*E+2*w+1),I[2*E+2*w+1]+=y*Tt,j(I,2*E+2*w+1),I[2*E+2*w+2]+=R*Tt,j(I,2*E+2*w+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function q(T,_){this.g=T,this.h=_}function ee(T,_){if(C(_))throw Error("division by zero");if(C(T))return new q(m,m);if(N(T))return _=ee(D(T),_),new q(D(_.g),D(_.h));if(N(_))return _=ee(T,D(_)),new q(D(_.g),_.h);if(30<T.g.length){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,E=_;0>=E.l(T);)I=ie(I),E=ie(E);var w=Y(I,1),R=Y(E,1);for(E=Y(E,2),I=Y(I,2);!C(E);){var y=R.add(E);0>=y.l(T)&&(w=w.add(I),R=y),E=Y(E,1),I=Y(I,1)}return _=z(T,w.j(_)),new q(w,_)}for(w=m;0<=T.l(_);){for(I=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(I),y=R.j(_);N(y)||0<y.l(T);)I-=E,R=h(I),y=R.j(_);C(R)&&(R=g),w=w.add(R),T=z(T,y)}return new q(w,T)}r.A=function(T){return ee(this,T).h},r.and=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&T.i(E);return new o(I,this.h&T.h)},r.or=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|T.i(E);return new o(I,this.h|T.h)},r.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^T.i(E);return new o(I,this.h^T.h)};function ie(T){for(var _=T.g.length+1,I=[],E=0;E<_;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(I,T.h)}function Y(T,_){var I=_>>5;_%=32;for(var E=T.g.length-I,w=[],R=0;R<E;R++)w[R]=0<_?T.i(R+I)>>>_|T.i(R+I+1)<<32-_:T.i(R+I);return new o(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Lp=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,sn=o}).apply(typeof rd<"u"?rd:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fp,bi,Up,co,Ec,Bp,qp,jp;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in d))break e;d=d[A]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,A={next:function(){if(!p&&d<a.length){var S=d++;return{value:l(S,a[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(l,A)}}return function(){return a.apply(l,arguments)}}function g(a,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function b(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,A,S){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return l.prototype[A].apply(p,O)}}function N(a){const l=a.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function D(a,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=a.length||0,S=p.length||0;a.length=A+S;for(let O=0;O<S;O++)a[A+O]=p[O]}else a.push(p)}}class z{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function ee(a){return ee[" "](a),a}ee[" "]=function(){};var ie=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function Y(a,l,d){for(const p in a)l.call(d,a[p],p,a)}function T(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)a[d]=p[d];for(let S=0;S<I.length;S++)d=I[S],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function w(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Ra;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class Tt{constructor(){this.h=this.g=null}add(l,d){const p=ei.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ei=new z(()=>new d_,a=>a.reset());class d_{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ti,ni=!1,Ra=new Tt,bl=()=>{const a=c.Promise.resolve(void 0);ti=()=>{a.then(f_)}};var f_=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){R(d)}var l=ei;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}ni=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var p_=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a})();function ri(a,l){if(Oe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(ie){e:{try{ee(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:m_[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ri.aa.h.call(this)}}C(ri,Oe);var m_={2:"touch",3:"pen",4:"mouse"};ri.prototype.h=function(){ri.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),g_=0;function __(a,l,d,p,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++g_,this.da=this.fa=!1}function Vs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ds(a){this.src=a,this.g={},this.h=0}Ds.prototype.add=function(a,l,d,p,A){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var O=Pa(a,l,p,A);return-1<O?(l=a[O],d||(l.fa=!1)):(l=new __(l,this.src,S,!!p,A),l.fa=d,a.push(l)),l};function ba(a,l){var d=l.type;if(d in a.g){var p=a.g[d],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(p,A,1),S&&(Vs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Pa(a,l,d,p){for(var A=0;A<a.length;++A){var S=a[A];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==p)return A}return-1}var Sa="closure_lm_"+(1e6*Math.random()|0),Ca={};function Pl(a,l,d,p,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Pl(a,l[S],d,p,A);return null}return d=kl(d),a&&a[ks]?a.K(l,d,h(p)?!!p.capture:!1,A):y_(a,l,d,!1,p,A)}function y_(a,l,d,p,A,S){if(!l)throw Error("Invalid event type");var O=h(A)?!!A.capture:!!A,se=Va(a);if(se||(a[Sa]=se=new Ds(a)),d=se.add(l,d,p,O,S),d.proxy)return d;if(p=I_(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)p_||(A=O),A===void 0&&(A=!1),a.addEventListener(l.toString(),p,A);else if(a.attachEvent)a.attachEvent(Cl(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function I_(){function a(d){return l.call(a.src,a.listener,d)}const l=T_;return a}function Sl(a,l,d,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Sl(a,l[S],d,p,A);else p=h(p)?!!p.capture:!!p,d=kl(d),a&&a[ks]?(a=a.i,l=String(l).toString(),l in a.g&&(S=a.g[l],d=Pa(S,d,p,A),-1<d&&(Vs(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete a.g[l],a.h--)))):a&&(a=Va(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Pa(l,d,p,A)),(d=-1<a?l[a]:null)&&ka(d))}function ka(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[ks])ba(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(Cl(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Va(l))?(ba(d,a),d.h==0&&(d.src=null,l[Sa]=null)):Vs(a)}}}function Cl(a){return a in Ca?Ca[a]:Ca[a]="on"+a}function T_(a,l){if(a.da)a=!0;else{l=new ri(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&ka(a),a=d.call(p,l)}return a}function Va(a){return a=a[Sa],a instanceof Ds?a:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function kl(a){return typeof a=="function"?a:(a[Da]||(a[Da]=function(l){return a.handleEvent(l)}),a[Da])}function Me(){qt.call(this),this.i=new Ds(this),this.M=this,this.F=null}C(Me,qt),Me.prototype[ks]=!0,Me.prototype.removeEventListener=function(a,l,d,p){Sl(this,a,l,d,p)};function je(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Oe(l,a);else if(l instanceof Oe)l.target=l.target||a;else{var A=l;l=new Oe(p,a),E(l,A)}if(A=!0,d)for(var S=d.length-1;0<=S;S--){var O=l.g=d[S];A=Ns(O,p,!0,l)&&A}if(O=l.g=a,A=Ns(O,p,!0,l)&&A,A=Ns(O,p,!1,l)&&A,d)for(S=0;S<d.length;S++)O=l.g=d[S],A=Ns(O,p,!1,l)&&A}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)Vs(d[p]);delete a.g[l],a.h--}}this.F=null},Me.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Me.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function Ns(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var O=l[S];if(O&&!O.da&&O.capture==d){var se=O.listener,ke=O.ha||O.src;O.fa&&ba(a.i,O),A=se.call(ke,p)!==!1&&A}}return A&&!p.defaultPrevented}function Vl(a,l,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function Dl(a){a.g=Vl(()=>{a.g=null,a.i&&(a.i=!1,Dl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class E_ extends qt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Dl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(a){qt.call(this),this.h=a,this.g={}}C(ii,qt);var Nl=[];function xl(a){Y(a.g,function(l,d){this.g.hasOwnProperty(d)&&ka(l)},a),a.g={}}ii.prototype.N=function(){ii.aa.N.call(this),xl(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Na=c.JSON.stringify,w_=c.JSON.parse,v_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function xa(){}xa.prototype.h=null;function Ol(a){return a.h||(a.h=a.i())}function Ml(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){Oe.call(this,"d")}C(Oa,Oe);function Ma(){Oe.call(this,"c")}C(Ma,Oe);var Tn={},Ll=null;function xs(){return Ll=Ll||new Me}Tn.La="serverreachability";function Fl(a){Oe.call(this,Tn.La,a)}C(Fl,Oe);function oi(a){const l=xs();je(l,new Fl(l))}Tn.STAT_EVENT="statevent";function Ul(a,l){Oe.call(this,Tn.STAT_EVENT,a),this.stat=l}C(Ul,Oe);function ze(a){const l=xs();je(l,new Ul(l,a))}Tn.Ma="timingevent";function Bl(a,l){Oe.call(this,Tn.Ma,a),this.size=l}C(Bl,Oe);function ai(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function A_(a,l,d,p,A,S){a.info(function(){if(a.g)if(S)for(var O="",se=S.split("&"),ke=0;ke<se.length;ke++){var X=se[ke].split("=");if(1<X.length){var Le=X[0];X=X[1];var Fe=Le.split("_");O=2<=Fe.length&&Fe[1]=="type"?O+(Le+"="+X+"&"):O+(Le+"=redacted&")}}else O=null;else O=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+O})}function R_(a,l,d,p,A,S,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+S+" "+O})}function tr(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+P_(a,d)+(p?" "+p:"")})}function b_(a,l){a.info(function(){return"TIMEOUT: "+l})}ci.prototype.info=function(){};function P_(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Na(d)}catch{return l}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function Ms(){}C(Ms,xa),Ms.prototype.g=function(){return new XMLHttpRequest},Ms.prototype.i=function(){return{}},La=new Ms;function jt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var zl={},Fa={};function Ua(a,l,d){a.L=1,a.v=Bs(Et(l)),a.m=d,a.P=!0,$l(a,null)}function $l(a,l){a.F=Date.now(),Ls(a),a.A=Et(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ih(d.i,"t",p),a.C=0,d=a.j.J,a.h=new jl,a.g=wh(a.j,d?l:null,!a.m),0<a.O&&(a.M=new E_(g(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Nl[0]=A.toString()),A=Nl);for(var S=0;S<A.length;S++){var O=Pl(d,A[S],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),oi(),A_(a.i,a.u,a.A,a.l,a.R,a.m)}jt.prototype.ca=function(a){a=a.target;const l=this.M;l&&wt(a)==3?l.j():this.Y(a)},jt.prototype.Y=function(a){try{if(a==this.g)e:{const Fe=wt(this.g);var l=this.g.Ba();const ir=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||hh(this.g)))){this.J||Fe!=4||l==7||(l==8||0>=ir?oi(3):oi(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(Gl(this)){var p=hh(this.g);a="";var A=p.length,S=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ui(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(S&&l==A-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,R_(this.i,this.u,this.A,this.l,this.R,Fe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,ke=this.g;if((se=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(se)){var X=se;break t}}X=null}if(d=X)tr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,d);else{this.o=!1,this.s=3,ze(12),En(this),ui(this);break e}}if(this.P){d=!0;let rt;for(;!this.J&&this.C<O.length;)if(rt=S_(this,O),rt==Fa){Fe==4&&(this.s=4,ze(14),d=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==zl){this.s=4,ze(15),tr(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else tr(this.i,this.l,rt,null),qa(this,rt);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||O.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)tr(this.i,this.l,O,"[Invalid Chunked Response]"),En(this),ui(this);else if(0<O.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Wa(Le),Le.M=!0,ze(11))}}else tr(this.i,this.l,O,null),qa(this,O);Fe==4&&En(this),this.o&&!this.J&&(Fe==4?yh(this.j,this):(this.o=!1,Ls(this)))}else G_(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),En(this),ui(this)}}}catch{}finally{}};function Gl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function S_(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?Fa:(d=Number(l.substring(d,p)),isNaN(d)?zl:(p+=1,p+d>l.length?Fa:(l=l.slice(p,p+d),a.C=p+d,l)))}jt.prototype.cancel=function(){this.J=!0,En(this)};function Ls(a){a.S=Date.now()+a.I,Kl(a,a.I)}function Kl(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ai(g(a.ba,a),l)}function Ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}jt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(b_(this.i,this.A),this.L!=2&&(oi(),ze(17)),En(this),this.s=2,ui(this)):Kl(this,this.S-a)};function ui(a){a.j.G==0||a.J||yh(a.j,a)}function En(a){Ba(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,xl(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function qa(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||ja(d.h,a))){if(!a.K&&ja(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ks(d),$s(d);else break e;Ka(d),ze(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=ai(g(d.Za,d),6e3));if(1>=Ql(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vn(d,11)}else if((a.K||d.g==a)&&Ks(d),!j(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const Le=X[3];Le!=null&&(d.la=Le,d.j.info("VER="+d.la));const Fe=X[4];Fe!=null&&(d.Aa=Fe,d.j.info("SVER="+d.Aa));const ir=X[5];ir!=null&&typeof ir=="number"&&0<ir&&(p=1.5*ir,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const rt=a.g;if(rt){const Hs=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var S=p.h;S.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(za(S,S.h),S.h=null))}if(p.D){const Ha=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(p.ya=Ha,ae(p.I,p.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=Eh(p,p.J?p.ia:null,p.W),O.K){Jl(p.h,O);var se=O,ke=p.L;ke&&(se.I=ke),se.B&&(Ba(se),Ls(se)),p.g=O}else gh(p);0<d.i.length&&Gs(d)}else X[0]!="stop"&&X[0]!="close"||vn(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?vn(d,7):Ga(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}oi(4)}catch{}}var C_=class{constructor(a,l){this.g=a,this.map=l}};function Wl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ql(a){return a.h?1:a.g?a.g.size:0}function ja(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function za(a,l){a.g?a.g.add(l):a.h=l}function Jl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Wl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return N(a.i)}function k_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function V_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const p in a)l[d++]=p;return l}}}function Xl(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=V_(a),p=k_(a),A=p.length,S=0;S<A;S++)l.call(void 0,p[S],d&&d[S],a)}var Zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),A=null;if(0<=p){var S=a[d].substring(0,p);A=a[d].substring(p+1)}else S=a[d];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wn){this.h=a.h,Fs(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.s),this.l=a.l;var l=a.i,d=new di;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),eh(this,d),this.m=a.m}else a&&(l=String(a).match(Zl))?(this.h=!1,Fs(this,l[1]||"",!0),this.o=li(l[2]||""),this.g=li(l[3]||"",!0),Us(this,l[4]),this.l=li(l[5]||"",!0),eh(this,l[6]||"",!0),this.m=li(l[7]||"")):(this.h=!1,this.i=new di(null,this.h))}wn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(hi(l,th,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(hi(l,th,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(hi(d,d.charAt(0)=="/"?O_:x_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",hi(d,L_)),a.join("")};function Et(a){return new wn(a)}function Fs(a,l,d){a.j=d?li(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function eh(a,l,d){l instanceof di?(a.i=l,F_(a.i,a.h)):(d||(l=hi(l,M_)),a.i=new di(l,a.h))}function ae(a,l,d){a.i.set(l,d)}function Bs(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function li(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hi(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,N_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function N_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var th=/[#\/\?@]/g,x_=/[#\?:]/g,O_=/[#\?]/g,M_=/[#\?@]/g,L_=/#/g;function di(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function zt(a){a.g||(a.g=new Map,a.h=0,a.i&&D_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=di.prototype,r.add=function(a,l){zt(this),this.i=null,a=nr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function nh(a,l){zt(a),l=nr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function rh(a,l){return zt(a),l=nr(a,l),a.g.has(l)}r.forEach=function(a,l){zt(this),this.g.forEach(function(d,p){d.forEach(function(A){a.call(l,A,p,this)},this)},this)},r.na=function(){zt(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const A=a[p];for(let S=0;S<A.length;S++)d.push(l[p])}return d},r.V=function(a){zt(this);let l=[];if(typeof a=="string")rh(this,a)&&(l=l.concat(this.g.get(nr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return zt(this),this.i=null,a=nr(this,a),rh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function ih(a,l,d){nh(a,l),0<d.length&&(a.i=null,a.g.set(nr(a,l),N(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const S=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=S;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),a.push(A)}}return this.i=a.join("&")};function nr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function F_(a,l){l&&!a.j&&(zt(a),a.i=null,a.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(nh(this,p),ih(this,A,d))},a)),a.j=l}function U_(a,l){const d=new ci;if(c.Image){const p=new Image;p.onload=b($t,d,"TestLoadImage: loaded",!0,l,p),p.onerror=b($t,d,"TestLoadImage: error",!1,l,p),p.onabort=b($t,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=b($t,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function B_(a,l){const d=new ci,p=new AbortController,A=setTimeout(()=>{p.abort(),$t(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?$t(d,"TestPingServer: ok",!0,l):$t(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),$t(d,"TestPingServer: error",!1,l)})}function $t(a,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function q_(){this.g=new v_}function j_(a,l,d){const p=d||"";try{Xl(a,function(A,S){let O=A;h(A)&&(O=Na(A)),l.push(p+S+"="+encodeURIComponent(O))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function qs(a){this.l=a.Ub||null,this.j=a.eb||!1}C(qs,xa),qs.prototype.g=function(){return new js(this.l,this.j)},qs.prototype.i=(function(a){return function(){return a}})({});function js(a,l){Me.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(js,Me),r=js.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,pi(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?fi(this):pi(this),this.readyState==3&&sh(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,fi(this))},r.Qa=function(a){this.g&&(this.response=a,fi(this))},r.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pi(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function oh(a){let l="";return Y(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function $a(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=oh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,l,d))}function fe(a){Me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(fe,Me);var z_=/^https?$/i,$_=["POST","PUT"];r=fe.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?Ol(this.o):Ol(La),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){ah(this,S);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call($_,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){ah(this,S)}};function ah(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,ch(a),zs(a)}function ch(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,je(this,"complete"),je(this,"abort"),zs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},r.bb=function(){uh(this)};function uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wt(a)!=4||a.Z()!=2)){if(a.u&&wt(a)==4)Vl(a.Ea,0,a);else if(je(a,"readystatechange"),wt(a)==4){a.h=!1;try{const O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var A=String(a.D).match(Zl)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!z_.test(A?A.toLowerCase():"")}d=p}if(d)je(a,"complete"),je(a,"success");else{a.m=6;try{var S=2<wt(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",ch(a)}}finally{zs(a)}}}}function zs(a,l){if(a.g){lh(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||je(a,"ready");try{d.onreadystatechange=p}catch{}}}function lh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function wt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),w_(l)}};function hh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function G_(a){const l={};a=(a.g&&2<=wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(j(a[p]))continue;var d=w(a[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[A]||[];l[A]=S,S.push(d)}T(l,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function dh(a){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,a),this.cb=mi("retryDelaySeedMs",1e4,a),this.Wa=mi("forwardChannelMaxRetries",2,a),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wl(a&&a.concurrentRequestLimit),this.Da=new q_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=dh.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,p){ze(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Eh(this,null,this.W),Gs(this)};function Ga(a){if(fh(a),a.G==3){var l=a.U++,d=Et(a.I);if(ae(d,"SID",a.K),ae(d,"RID",l),ae(d,"TYPE","terminate"),gi(a,d),l=new jt(a,a.j,l),l.L=2,l.v=Bs(Et(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=wh(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ls(l)}Th(a)}function $s(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function fh(a){$s(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Gs(a){if(!Hl(a.h)&&!a.s){a.s=!0;var l=a.Ga;ti||bl(),ni||(ti(),ni=!0),Ra.add(l,a),a.B=0}}function K_(a,l){return Ql(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ai(g(a.Ga,a,l),Ih(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new jt(this,this.j,a);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=mh(this,A,l),d=Et(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),gi(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(oh(S)))+"&"+l:this.m&&$a(d,this.m,S)),za(this.h,A),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",l),ae(d,"SID","null"),A.T=!0,Ua(A,d,null)):Ua(A,d,l),this.G=2}}else this.G==3&&(a?ph(this,a):this.i.length==0||Hl(this.h)||ph(this))};function ph(a,l){var d;l?d=l.l:d=a.U++;const p=Et(a.I);ae(p,"SID",a.K),ae(p,"RID",d),ae(p,"AID",a.T),gi(a,p),a.m&&a.o&&$a(p,a.m,a.o),d=new jt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=mh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),za(a.h,d),Ua(d,p,l)}function gi(a,l){a.H&&Y(a.H,function(d,p){ae(l,p,d)}),a.l&&Xl({},function(d,p){ae(l,p,d)})}function mh(a,l,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let S=-1;for(;;){const O=["count="+d];S==-1?0<d?(S=A[0].g,O.push("ofs="+S)):S=0:O.push("ofs="+S);let se=!0;for(let ke=0;ke<d;ke++){let X=A[ke].g;const Le=A[ke].map;if(X-=S,0>X)S=Math.max(0,A[ke].g-100),se=!1;else try{j_(Le,O,"req"+X+"_")}catch{p&&p(Le)}}if(se){p=O.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function gh(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;ti||bl(),ni||(ti(),ni=!0),Ra.add(l,a),a.v=0}}function Ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ai(g(a.Fa,a),Ih(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,_h(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ai(g(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),$s(this),_h(this))};function Wa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function _h(a){a.g=new jt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=Et(a.qa);ae(l,"RID","rpc"),ae(l,"SID",a.K),ae(l,"AID",a.T),ae(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(l,"TO",a.ja),ae(l,"TYPE","xmlhttp"),gi(a,l),a.m&&a.o&&$a(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Bs(Et(l)),d.m=null,d.P=!0,$l(d,a)}r.Za=function(){this.C!=null&&(this.C=null,$s(this),Ka(this),ze(19))};function Ks(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function yh(a,l){var d=null;if(a.g==l){Ks(a),Wa(a),a.g=null;var p=2}else if(ja(a.h,l))d=l.D,Jl(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=a.B;p=xs(),je(p,new Bl(p,d)),Gs(a)}else gh(a);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&K_(a,l)||p==2&&Ka(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),A){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function Ih(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function vn(a,l){if(a.j.info("Error code "+l),l==2){var d=g(a.fb,a),p=a.Xa;const A=!p;p=new wn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fs(p,"https"),Bs(p),A?U_(p.toString(),d):B_(p.toString(),d)}else ze(2);a.G=0,a.l&&a.l.sa(l),Th(a),fh(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Th(a){if(a.G=0,a.ka=[],a.l){const l=Yl(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ka,l),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Eh(a,l,d){var p=d instanceof wn?Et(d):new wn(d);if(p.g!="")l&&(p.g=l+"."+p.g),Us(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new wn(null);p&&Fs(S,p),l&&(S.g=l),A&&Us(S,A),d&&(S.l=d),p=S}return d=a.D,l=a.ya,d&&l&&ae(p,d,l),ae(p,"VER",a.la),gi(a,p),p}function wh(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new fe(new qs({eb:d})):new fe(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function vh(){}r=vh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ws(){}Ws.prototype.g=function(a,l){return new Je(a,l)};function Je(a,l){Me.call(this),this.g=new dh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!j(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new rr(this)}C(Je,Me),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){Ga(this.g)},Je.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Na(a),a=d);l.i.push(new C_(l.Ya++,a)),l.G==3&&Gs(l)},Je.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,Je.aa.N.call(this)};function Ah(a){Oa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(Ah,Oa);function Rh(){Ma.call(this),this.status=1}C(Rh,Ma);function rr(a){this.g=a}C(rr,vh),rr.prototype.ua=function(){je(this.g,"a")},rr.prototype.ta=function(a){je(this.g,new Ah(a))},rr.prototype.sa=function(a){je(this.g,new Rh)},rr.prototype.ra=function(){je(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,jp=function(){return new Ws},qp=function(){return xs()},Bp=Tn,Ec={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,co=Os,ql.COMPLETE="complete",Up=ql,Ml.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Me.prototype.listen=Me.prototype.K,bi=Ml,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,Fp=fe}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore",sd="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Zc("@firebase/firestore");function hr(){return un.logLevel}function Bb(r){un.setLogLevel(r)}function V(r,...e){if(un.logLevel<=W.DEBUG){const t=e.map(Tu);un.debug(`Firestore (${Gr}): ${r}`,...t)}}function ye(r,...e){if(un.logLevel<=W.ERROR){const t=e.map(Tu);un.error(`Firestore (${Gr}): ${r}`,...t)}}function Dt(r,...e){if(un.logLevel<=W.WARN){const t=e.map(Tu);un.warn(`Firestore (${Gr}): ${r}`,...t)}}function Tu(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,zp(r,n,t)}function zp(r,e,t){let n=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ye(n),new Error(n)}function U(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||zp(e,i,n)}function qb(r,e){r||F(57014,e)}function L(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class Iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Tw{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ne,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ne)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new $p(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class Ew{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ww{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Ew(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){U(this.o===void 0,3512);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new od(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Aw(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function G(r,e){return r<e?-1:r>e?1:0}function wc(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const i=r.charAt(n),s=e.charAt(n);if(i!==s)return sc(i)===sc(s)?G(i,s):sc(i)?1:-1}return G(r.length,e.length)}const Rw=55296,bw=57343;function sc(r){const e=r.charCodeAt(0);return e>=Rw&&e<=bw}function vr(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}function Gp(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="__name__";class ct{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ct?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=ct.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return G(e.length,t.length)}static compareSegments(e,t){const n=ct.isNumericId(e),i=ct.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?ct.extractNumericId(e).compare(ct.extractNumericId(t)):wc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sn.fromString(e.substring(4,e.length-2))}}class H extends ct{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new H(t)}static emptyPath(){return new H([])}}const Pw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends ct{construct(e,t,n){return new de(e,t,n)}static isValidIdentifier(e){return Pw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ad}static keyField(){return new de([ad])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(H.fromString(e))}static fromName(e){return new M(H.fromString(e).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new H(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(r,e,t){if(!t)throw new k(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Sw(r,e,t,n){if(e===!0&&n===!0)throw new k(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function cd(r){if(!M.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ud(r){if(M.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Kp(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Zo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Z(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zo(r);throw new k(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Wp(r,e){if(e<=0)throw new k(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e){const t={typeString:r};return e&&(t.value=e),t}function gs(r,e){if(!Kp(r))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new k(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=-62135596800,hd=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*hd);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ld)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hd}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gs(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ld;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ve("string",te._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new te(0,0))}static max(){return new B(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=-1;class So{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function vc(r){return r.fields.find((e=>e.kind===2))}function bn(r){return r.fields.filter((e=>e.kind!==2))}So.UNKNOWN_ID=-1;class uo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ji{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ji(0,tt.min())}}function Hp(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new tt(i,M.empty(),e)}function Qp(r){return new tt(r.readTime,r.key,Ar)}class tt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new tt(B.min(),M.empty(),Ar)}static max(){return new tt(B.max(),M.empty(),Ar)}}function vu(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(r.documentKey,e.documentKey),t!==0?t:G(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Jp)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):v.reject(t)}static resolve(e){return new v(((t,n)=>{t(e)}))}static reject(e){return new v(((t,n)=>{n(e)}))}static waitFor(e){return new v(((t,n)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(u=>n(u)))})),o=!0,s===i&&t()}))}static or(e){let t=v.resolve(!1);for(const n of e)t=t.next((i=>i?v.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new v(((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((f=>{o[h]=f,++c,c===s&&n(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new v(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="SimpleDb";class ea{static open(e,t,n,i){try{return new ea(t,e.transaction(i,n))}catch(s){throw new Mi(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ne,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Mi(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Au(n.target.error);this.S.reject(new Mi(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Ye,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new kw(t)}}class ft{static delete(e){return V(Ye,"Removing database:",e),Sn(kf().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Lf())return!1;if(ft.F())return!0;const e=Ae(),t=ft.M(e),n=0<t&&t<10,i=Xp(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,ft.M(Ae())===12.2&&ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(V(Ye,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Mi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new k(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new k(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Mi(e,o))},i.onupgradeneeded=s=>{V(Ye,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next((()=>{V(Ye,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=ea.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next((h=>(c.C(),h))).catch((h=>(c.abort(h),v.reject(h)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(V(Ye,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Xp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Cw{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Sn(this.U.delete())}}class Mi extends k{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function gn(r){return r.name==="IndexedDbTransactionError"}class kw{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Ye,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Ye,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Sn(n)}add(e){return V(Ye,"ADD",this.store.name,e,e),Sn(this.store.add(e))}get(e){return Sn(this.store.get(e)).next((t=>(t===void 0&&(t=null),V(Ye,"GET",this.store.name,e,t),t)))}delete(e){return V(Ye,"DELETE",this.store.name,e),Sn(this.store.delete(e))}count(){return V(Ye,"COUNT",this.store.name),Sn(this.store.count())}J(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new v(((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}}))}{const s=this.cursor(n),o=[];return this.H(s,((c,u)=>{o.push(u)})).next((()=>o))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new v(((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}}))}Z(e,t){V(Ye,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const i=this.cursor(n);return this.H(i,((s,o,c)=>c.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.H(i,t)}te(e){const t=this.cursor({});return new v(((n,i)=>{t.onerror=s=>{const o=Au(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():n()})):n()}}))}H(e,t){const n=[];return new v(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new Cw(c),h=t(c.primaryKey,c.value,u);if(h instanceof v){const f=h.catch((m=>(u.done(),v.reject(m))));n.push(f)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}})).next((()=>v.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Sn(r){return new v(((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Au(n.target.error);t(i)}}))}let dd=!1;function Au(r){const e=ft.M(Ae());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dd||(dd=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Li="IndexBackfiller";class Vw{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){V(Li,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();V(Li,`Documents written: ${t}`)}catch(t){gn(t)?V(Li,"Ignoring IndexedDB error during index backfill: ",t):await mn(t)}await this.re(6e4)}))}}class Dw{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let i=t,s=!0;return v.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return V(Li,`Processing collection: ${o}`),this.oe(e,o,i).next((c=>{i-=c,n.add(o)}));s=!1})))).next((()=>t-i))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(i,s))).next((c=>(V(Li,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((i,s)=>{const o=Qp(s);vu(o,n)>0&&(n=o)})),new tt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}We.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=-1;function _s(r){return r==null}function Yi(r){return r===0&&1/r==-1/0}function Zp(r){return typeof r=="number"&&Number.isInteger(r)&&!Yi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="";function qe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=fd(e)),e=Nw(r.get(t),e);return fd(e)}function Nw(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case Co:t+="";break;default:t+=s}}return t}function fd(r){return r+Co+""}function ht(r){const e=r.length;if(U(e>=2,64408,{path:r}),e===2)return U(r.charAt(0)===Co&&r.charAt(1)==="",56145,{path:r}),H.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf(Co,s);switch((o<0||o>t)&&F(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:F(61167,{path:r})}s=o+2}return new H(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="remoteDocuments",ys="owner",sr="owner",Xi="mutationQueues",xw="userId",it="mutations",pd="batchId",Nn="userMutationsIndex",md=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(r,e){return[r,qe(e)]}function em(r,e,t){return[r,qe(e),t]}const Ow={},Rr="documentMutations",ko="remoteDocumentsV14",Mw=["prefixPath","collectionGroup","readTime","documentId"],ho="documentKeyIndex",Lw=["prefixPath","collectionGroup","documentId"],tm="collectionGroupIndex",Fw=["collectionGroup","readTime","prefixPath","documentId"],Zi="remoteDocumentGlobal",Ac="remoteDocumentGlobalKey",br="targets",nm="queryTargetsIndex",Uw=["canonicalId","targetId"],Pr="targetDocuments",Bw=["targetId","path"],Ru="documentTargetsIndex",qw=["path","targetId"],Vo="targetGlobalKey",Mn="targetGlobal",es="collectionParents",jw=["collectionId","parent"],Sr="clientMetadata",zw="clientId",ta="bundles",$w="bundleId",na="namedQueries",Gw="name",bu="indexConfiguration",Kw="indexId",Rc="collectionGroupIndex",Ww="collectionGroup",Fi="indexState",Hw=["indexId","uid"],rm="sequenceNumberIndex",Qw=["uid","sequenceNumber"],Ui="indexEntries",Jw=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],im="documentKeyIndex",Yw=["indexId","uid","orderedDocumentKey"],ra="documentOverlays",Xw=["userId","collectionPath","documentId"],bc="collectionPathOverlayIndex",Zw=["userId","collectionPath","largestBatchId"],sm="collectionGroupOverlayIndex",ev=["userId","collectionGroup","largestBatchId"],Pu="globals",tv="name",om=[Xi,it,Rr,Pn,br,ys,Mn,Pr,Sr,Zi,es,ta,na],nv=[...om,ra],am=[Xi,it,Rr,ko,br,ys,Mn,Pr,Sr,Zi,es,ta,na,ra],cm=am,Su=[...cm,bu,Fi,Ui],rv=Su,um=[...Su,Pu],iv=um;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Yp{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function be(r,e){const t=L(r);return ft.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function _n(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function lm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ve(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function or(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new He([])}unionWith(e){let t=new re(de.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hm("Invalid base64 string: "+s):s}})(e);return new me(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const sv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(r){if(U(!!r,39018),typeof r=="string"){let e=0;const t=sv.exec(r);if(U(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ue(r.seconds),nanos:ue(r.nanos)}}function ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xt(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="server_timestamp",fm="__type__",pm="__previous_value__",mm="__local_write_time__";function ia(r){return(r?.mapValue?.fields||{})[fm]?.stringValue===dm}function sa(r){const e=r.mapValue.fields[pm];return ia(e)?sa(e):e}function ts(r){const e=Nt(r.mapValue.fields[mm].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t,n,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Sc="(default)";class Un{constructor(e,t){this.projectId=e,this.database=t||Sc}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database===Sc}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="__type__",gm="__max__",en={mapValue:{fields:{__type__:{stringValue:gm}}}},ku="__vector__",Cr="value",fo={nullValue:"NULL_VALUE"};function ln(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ia(r)?4:_m(r)?9007199254740991:oa(r)?10:11:F(28295,{value:r})}function yt(r,e){if(r===e)return!0;const t=ln(r);if(t!==ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ts(r).isEqual(ts(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nt(i.timestampValue),c=Nt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return xt(i.bytesValue).isEqual(xt(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ue(i.doubleValue),c=ue(s.doubleValue);return o===c?Yi(o)===Yi(c):isNaN(o)&&isNaN(c)}return!1})(r,e);case 9:return vr(r.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(gd(o)!==gd(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!yt(o[u],c[u])))return!1;return!0})(r,e);default:return F(52216,{left:r})}}function ns(r,e){return(r.values||[]).find((t=>yt(t,e)))!==void 0}function hn(r,e){if(r===e)return 0;const t=ln(r),n=ln(e);if(t!==n)return G(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=ue(s.integerValue||s.doubleValue),u=ue(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(r,e);case 3:return yd(r.timestampValue,e.timestampValue);case 4:return yd(ts(r),ts(e));case 5:return wc(r.stringValue,e.stringValue);case 6:return(function(s,o){const c=xt(s),u=xt(o);return c.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=G(c[h],u[h]);if(f!==0)return f}return G(c.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=G(ue(s.latitude),ue(o.latitude));return c!==0?c:G(ue(s.longitude),ue(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Id(r.arrayValue,e.arrayValue);case 10:return(function(s,o){const c=s.fields||{},u=o.fields||{},h=c[Cr]?.arrayValue,f=u[Cr]?.arrayValue,m=G(h?.values?.length||0,f?.values?.length||0);return m!==0?m:Id(h,f)})(r.mapValue,e.mapValue);case 11:return(function(s,o){if(s===en.mapValue&&o===en.mapValue)return 0;if(s===en.mapValue)return 1;if(o===en.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=wc(u[m],f[m]);if(g!==0)return g;const b=hn(c[u[m]],h[f[m]]);if(b!==0)return b}return G(u.length,f.length)})(r.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function yd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return G(r,e);const t=Nt(r),n=Nt(e),i=G(t.seconds,n.seconds);return i!==0?i:G(t.nanos,n.nanos)}function Id(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=hn(t[i],n[i]);if(s)return s}return G(t.length,n.length)}function kr(r){return Cc(r)}function Cc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Nt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return xt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return M.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Cc(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Cc(t.fields[o])}`;return i+"}"})(r.mapValue):F(61005,{value:r})}function po(r){switch(ln(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sa(r);return e?16+po(e):16;case 5:return 2*r.stringValue.length;case 6:return xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+po(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return _n(n.fields,((s,o)=>{i+=s.length+po(o)})),i})(r.mapValue);default:throw F(13486,{value:r})}}function Bn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function kc(r){return!!r&&"integerValue"in r}function rs(r){return!!r&&"arrayValue"in r}function Td(r){return!!r&&"nullValue"in r}function Ed(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mo(r){return!!r&&"mapValue"in r}function oa(r){return(r?.mapValue?.fields||{})[Cu]?.stringValue===ku}function Bi(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return _n(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Bi(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bi(r.arrayValue.values[t]);return e}return{...r}}function _m(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===gm}const ym={mapValue:{fields:{[Cu]:{stringValue:ku},[Cr]:{arrayValue:{}}}}};function av(r){return"nullValue"in r?fo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Bn(Un.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?oa(r)?ym:{mapValue:{}}:F(35942,{value:r})}function cv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Bn(Un.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?ym:"mapValue"in r?oa(r)?{mapValue:{}}:en:F(61959,{value:r})}function wd(r,e){const t=hn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function vd(r,e){const t=hn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bi(t)}setAll(e){let t=de.emptyPath(),n={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Bi(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];mo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){_n(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new De(Bi(this.value))}}function Im(r){const e=[];return _n(r.fields,((t,n)=>{const i=new de([t]);if(mo(n)){const s=Im(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ce(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,n,i){return new ce(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new ce(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.position=e,this.inclusive=t}}function Ad(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=M.comparator(M.fromName(o.referenceValue),t.key):n=hn(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Rd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!yt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t="asc"){this.field=e,this.dir=t}}function uv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{}class Q extends Tm{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new lv(e,t,n):t==="array-contains"?new fv(e,n):t==="in"?new bm(e,n):t==="not-in"?new pv(e,n):t==="array-contains-any"?new mv(e,n):new Q(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new hv(e,n):new dv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hn(t,this.value)):t!==null&&ln(this.value)===ln(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Tm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ne(e,t)}matches(e){return Vr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vr(r){return r.op==="and"}function Vc(r){return r.op==="or"}function Vu(r){return Em(r)&&Vr(r)}function Em(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function Dc(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+kr(r.value);if(Vu(r))return r.filters.map((e=>Dc(e))).join(",");{const e=r.filters.map((t=>Dc(t))).join(",");return`${r.op}(${e})`}}function wm(r,e){return r instanceof Q?(function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&yt(n.value,i.value)})(r,e):r instanceof ne?(function(n,i){return i instanceof ne&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,o,c)=>s&&wm(o,i.filters[c])),!0):!1})(r,e):void F(19439)}function vm(r,e){const t=r.filters.concat(e);return ne.create(t,r.op)}function Am(r){return r instanceof Q?(function(t){return`${t.field.canonicalString()} ${t.op} ${kr(t.value)}`})(r):r instanceof ne?(function(t){return t.op.toString()+" {"+t.getFilters().map(Am).join(" ,")+"}"})(r):"Filter"}class lv extends Q{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class hv extends Q{constructor(e,t){super(e,"in",t),this.keys=Rm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dv extends Q{constructor(e,t){super(e,"not-in",t),this.keys=Rm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rm(r,e){return(e.arrayValue?.values||[]).map((t=>M.fromName(t.referenceValue)))}class fv extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rs(t)&&ns(t.arrayValue,this.value)}}class bm extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class pv extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ns(this.value.arrayValue,t)}}class mv extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ns(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function Nc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new gv(r,e,t,n,i,s,o)}function qn(r){const e=L(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Dc(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>kr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>kr(n))).join(",")),e.Te=t}return e.Te}function Is(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!uv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!wm(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Rd(r.startAt,e.startAt)&&Rd(r.endAt,e.endAt)}function Do(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function No(r,e){return r.filters.filter((t=>t instanceof Q&&t.field.isEqual(e)))}function bd(r,e,t){let n=fo,i=!0;for(const s of No(r,e)){let o=fo,c=!0;switch(s.op){case"<":case"<=":o=av(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=fo}wd({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];wd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Pd(r,e,t){let n=en,i=!0;for(const s of No(r,e)){let o=en,c=!0;switch(s.op){case">=":case">":o=cv(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=en}vd({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];vd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Pm(r,e,t,n,i,s,o,c){return new Lt(r,e,t,n,i,s,o,c)}function Kr(r){return new Lt(r)}function Sd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Du(r){return r.collectionGroup!==null}function Ir(r){const e=L(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new re(de.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new is(s,n))})),t.has(de.keyField().canonicalString())||e.Ie.push(new is(de.keyField(),n))}return e.Ie}function Ge(r){const e=L(r);return e.Ee||(e.Ee=_v(e,Ir(r))),e.Ee}function _v(r,e){if(r.limitType==="F")return Nc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new is(i.field,s)}));const t=r.endAt?new dn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dn(r.startAt.position,r.startAt.inclusive):null;return Nc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function xc(r,e){const t=r.filters.concat([e]);return new Lt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function xo(r,e,t){return new Lt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ts(r,e){return Is(Ge(r),Ge(e))&&r.limitType===e.limitType}function Sm(r){return`${qn(Ge(r))}|lt:${r.limitType}`}function dr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>Am(i))).join(", ")}]`),_s(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>kr(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>kr(i))).join(",")),`Target(${n})`})(Ge(r))}; limitType=${r.limitType})`}function Es(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):M.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of Ir(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(o,c,u){const h=Ad(o,c,u);return o.inclusive?h<=0:h<0})(n.startAt,Ir(n),i)||n.endAt&&!(function(o,c,u){const h=Ad(o,c,u);return o.inclusive?h>=0:h>0})(n.endAt,Ir(n),i))})(r,e)}function Cm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function km(r){return(e,t)=>{let n=!1;for(const i of Ir(r)){const s=yv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function yv(r,e,t){const n=r.field.isKeyField()?M.comparator(e.key,t.key):(function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?hn(u,h):F(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new oe(M.comparator);function Qe(){return Iv}const Vm=new oe(M.comparator);function Pi(...r){let e=Vm;for(const t of r)e=e.insert(t.key,t);return e}function Dm(r){let e=Vm;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function dt(){return qi()}function Nm(){return qi()}function qi(){return new Ft((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Tv=new oe(M.comparator),Ev=new re(M.comparator);function K(...r){let e=Ev;for(const t of r)e=e.add(t);return e}const wv=new re(G);function Nu(){return wv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function xm(r){return{integerValue:""+r}}function Om(r,e){return Zp(e)?xm(e):xu(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._=void 0}}function vv(r,e,t){return r instanceof Dr?(function(i,s){const o={fields:{[fm]:{stringValue:dm},[mm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ia(s)&&(s=sa(s)),s&&(o.fields[pm]=s),{mapValue:o}})(t,e):r instanceof jn?Lm(r,e):r instanceof zn?Fm(r,e):(function(i,s){const o=Mm(i,s),c=Cd(o)+Cd(i.Ae);return kc(o)&&kc(i.Ae)?xm(c):xu(i.serializer,c)})(r,e)}function Av(r,e,t){return r instanceof jn?Lm(r,e):r instanceof zn?Fm(r,e):t}function Mm(r,e){return r instanceof Nr?(function(n){return kc(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Dr extends aa{}class jn extends aa{constructor(e){super(),this.elements=e}}function Lm(r,e){const t=Um(e);for(const n of r.elements)t.some((i=>yt(i,n)))||t.push(n);return{arrayValue:{values:t}}}class zn extends aa{constructor(e){super(),this.elements=e}}function Fm(r,e){let t=Um(e);for(const n of r.elements)t=t.filter((i=>!yt(i,n)));return{arrayValue:{values:t}}}class Nr extends aa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cd(r){return ue(r.integerValue||r.doubleValue)}function Um(r){return rs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.field=e,this.transform=t}}function Rv(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof jn&&i instanceof jn||n instanceof zn&&i instanceof zn?vr(n.elements,i.elements,yt):n instanceof Nr&&i instanceof Nr?yt(n.Ae,i.Ae):n instanceof Dr&&i instanceof Dr})(r.transform,e.transform)}class bv{constructor(e,t){this.version=e,this.transformResults=t}}class he{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new he}static exists(e){return new he(void 0,e)}static updateTime(e){return new he(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ca{}function Bm(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Hr(r.key,he.none()):new Wr(r.key,r.data,he.none());{const t=r.data,n=De.empty();let i=new re(de.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Ut(r.key,n,new He(i.toArray()),he.none())}}function Pv(r,e,t){r instanceof Wr?(function(i,s,o){const c=i.value.clone(),u=Vd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):r instanceof Ut?(function(i,s,o){if(!go(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Vd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qm(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ji(r,e,t,n){return r instanceof Wr?(function(s,o,c,u){if(!go(s.precondition,o))return c;const h=s.value.clone(),f=Dd(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof Ut?(function(s,o,c,u){if(!go(s.precondition,o))return c;const h=Dd(s.fieldTransforms,u,o),f=o.data;return f.setAll(qm(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(s,o,c){return go(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(r,e,t)}function Sv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Mm(n.transform,i||null);s!=null&&(t===null&&(t=De.empty()),t.set(n.field,s))}return t||null}function kd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&vr(n,i,((s,o)=>Rv(s,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Wr extends ca{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends ca{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qm(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Vd(r,e,t){const n=new Map;U(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Av(o,c,t[i]))}return n}function Dd(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,vv(s,o,e))}return n}class Hr extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ou extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Pv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ji(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ji(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Nm();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Bm(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,((t,n)=>kd(t,n)))&&vr(this.baseMutations,e.baseMutations,((t,n)=>kd(t,n)))}}class Lu{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){U(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=(function(){return Tv})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Lu(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,J;function jm(r){switch(r){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function zm(r){if(r===void 0)return ye("GRPC error has no .code"),P.UNKNOWN;switch(r){case Ee.OK:return P.OK;case Ee.CANCELLED:return P.CANCELLED;case Ee.UNKNOWN:return P.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return P.INTERNAL;case Ee.UNAVAILABLE:return P.UNAVAILABLE;case Ee.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ee.NOT_FOUND:return P.NOT_FOUND;case Ee.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ee.ABORTED:return P.ABORTED;case Ee.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ee.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:r})}}(J=Ee||(Ee={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new sn([4294967295,4294967295],0);function Nd(r){const e=$m().encode(r),t=new Lp;return t.update(e),new Uint8Array(t.digest())}function xd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new sn([t,n],0),new sn([i,s],0)]}class Uu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Si(`Invalid padding: ${t}`);if(n<0)throw new Si(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=sn.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(sn.fromNumber(n)));return i.compare(kv)===1&&(i=new sn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nd(e),[n,i]=xd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,i,s);if(!this.we(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uu(s,i,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Nd(e),[n,i]=xd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new vs(B.min(),i,new oe(G),Qe(),K())}}class As{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new As(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class Gm{constructor(e,t){this.targetId=e,this.Ce=t}}class Km{constructor(e,t,n=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Od{constructor(){this.ve=0,this.Fe=Md(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),n=K();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F(38017,{changeType:s})}})),new As(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Md()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Vv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qe(),this.Je=Xs(),this.He=Xs(),this.Ye=new oe(G)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Do(s))if(n===0){const o=new M(s.path);this.et(t,o,ce.newNoDocument(o,B.min()))}else U(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=xt(n).toUint8Array()}catch(u){if(u instanceof hm)return Dt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Uu(o,i,s)}catch(u){return Dt(u instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const c=this.ot(o);if(c){if(s.current&&Do(c.target)){const u=new M(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ce.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}}));let n=K();this.He.forEach(((s,o)=>{let c=!0;o.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new vs(e,t,this.Ye,this.je,n);return this.je=Qe(),this.Je=Xs(),this.He=Xs(),this.Ye=new oe(G),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Od,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new re(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new re(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Od),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xs(){return new oe(M.comparator)}function Md(){return new oe(M.comparator)}const Dv={asc:"ASCENDING",desc:"DESCENDING"},Nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xv={and:"AND",or:"OR"};class Ov{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oc(r,e){return r.useProto3Json||_s(e)?e:{value:e}}function xr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Mv(r,e){return xr(r,e.toTimestamp())}function Ie(r){return U(!!r,49232),B.fromTimestamp((function(t){const n=Nt(t);return new te(n.seconds,n.nanos)})(r))}function Bu(r,e){return Mc(r,e).canonicalString()}function Mc(r,e){const t=(function(i){return new H(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Hm(r){const e=H.fromString(r);return U(ig(e),10190,{key:e.toString()}),e}function ss(r,e){return Bu(r.databaseId,e.path)}function pt(r,e){const t=Hm(e);if(t.get(1)!==r.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new M(Ym(t))}function Qm(r,e){return Bu(r.databaseId,e)}function Jm(r){const e=Hm(r);return e.length===4?H.emptyPath():Ym(e)}function Lc(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ym(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ld(r,e,t){return{name:ss(r,e),fields:t.value.mapValue.fields}}function Xm(r,e,t){const n=pt(r,e.name),i=Ie(e.updateTime),s=e.createTime?Ie(e.createTime):B.min(),o=new De({mapValue:{fields:e.fields}}),c=ce.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Lv(r,e){return"found"in e?(function(n,i){U(!!i.found,43571),i.found.name,i.found.updateTime;const s=pt(n,i.found.name),o=Ie(i.found.updateTime),c=i.found.createTime?Ie(i.found.createTime):B.min(),u=new De({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,c,u)})(r,e):"missing"in e?(function(n,i){U(!!i.missing,3894),U(!!i.readTime,22933);const s=pt(n,i.missing),o=Ie(i.readTime);return ce.newNoDocument(s,o)})(r,e):F(7234,{result:e})}function Fv(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?P.UNKNOWN:zm(h.code);return new k(f,h.message||"")})(o);t=new Km(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=pt(r,n.document.name),s=Ie(n.document.updateTime),o=n.document.createTime?Ie(n.document.createTime):B.min(),c=new De({mapValue:{fields:n.document.fields}}),u=ce.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new _o(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=pt(r,n.document),s=n.readTime?Ie(n.readTime):B.min(),o=ce.newNoDocument(i,s),c=n.removedTargetIds||[];t=new _o([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=pt(r,n.document),s=n.removedTargetIds||[];t=new _o([],s,i,null)}else{if(!("filter"in e))return F(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Cv(i,s),c=n.targetId;t=new Gm(c,o)}}return t}function os(r,e){let t;if(e instanceof Wr)t={update:Ld(r,e.key,e.value)};else if(e instanceof Hr)t={delete:ss(r,e.key)};else if(e instanceof Ut)t={update:Ld(r,e.key,e.data),updateMask:$v(e.fieldMask)};else{if(!(e instanceof Ou))return F(16599,{Vt:e.type});t={verify:ss(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const c=o.transform;if(c instanceof Dr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Nr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Mv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F(27497)})(r,e.precondition)),t}function Fc(r,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?he.updateTime(Ie(s.updateTime)):s.exists!==void 0?he.exists(s.exists):he.none()})(e.currentDocument):he.none(),n=e.updateTransforms?e.updateTransforms.map((i=>(function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Dr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new jn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new zn(f)}else"increment"in c?u=new Nr(o,c.increment):F(16584,{proto:c});const h=de.fromServerFormat(c.fieldPath);return new ws(h,u)})(r,i))):[];if(e.update){e.update.name;const i=pt(r,e.update.name),s=new De({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const h=u.fieldPaths||[];return new He(h.map((f=>de.fromServerFormat(f))))})(e.updateMask);return new Ut(i,s,o,t,n)}return new Wr(i,s,t,n)}if(e.delete){const i=pt(r,e.delete);return new Hr(i,t)}if(e.verify){const i=pt(r,e.verify);return new Ou(i,t)}return F(1463,{proto:e})}function Uv(r,e){return r&&r.length>0?(U(e!==void 0,14353),r.map((t=>(function(i,s){let o=i.updateTime?Ie(i.updateTime):Ie(s);return o.isEqual(B.min())&&(o=Ie(s)),new bv(o,i.transformResults||[])})(t,e)))):[]}function Zm(r,e){return{documents:[Qm(r,e.path)]}}function eg(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Qm(r,i);const s=(function(h){if(h.length!==0)return rg(ne.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:fr(g.field),direction:qv(g.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Oc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:i}}function tg(r){let e=Jm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){U(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(m){const g=ng(m);return g instanceof ne&&Vu(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((g=>(function(C){return new is(pr(C.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,_s(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(m){const g=!!m.before,b=m.values||[];return new dn(b,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const g=!m.before,b=m.values||[];return new dn(b,g)})(t.endAt)),Pm(e,i,o,s,c,"F",u,h)}function Bv(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ng(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=pr(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=pr(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pr(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pr(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Q.create(pr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ne.create(t.compositeFilter.filters.map((n=>ng(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(r):F(30097,{filter:r})}function qv(r){return Dv[r]}function jv(r){return Nv[r]}function zv(r){return xv[r]}function fr(r){return{fieldPath:r.canonicalString()}}function pr(r){return de.fromServerFormat(r.fieldPath)}function rg(r){return r instanceof Q?(function(t){if(t.op==="=="){if(Ed(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NAN"}};if(Td(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ed(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NAN"}};if(Td(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(t.field),op:jv(t.op),value:t.value}}})(r):r instanceof ne?(function(t){const n=t.getFilters().map((i=>rg(i)));return n.length===1?n[0]:{compositeFilter:{op:zv(t.op),filters:n}}})(r):F(54877,{filter:r})}function $v(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ig(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,n,i,s=B.min(),o=B.min(),c=me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.yt=e}}function Gv(r,e){let t;if(e.document)t=Xm(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=M.fromSegments(e.noDocument.path),i=Gn(e.noDocument.readTime);t=ce.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=M.fromSegments(e.unknownDocument.path),i=Gn(e.unknownDocument.version);t=ce.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime((function(i){const s=new te(i[0],i[1]);return B.fromTimestamp(s)})(e.readTime)),t}function Fd(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Oo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(s,o){return{name:ss(s,o.key),fields:o.data.value.mapValue.fields,updateTime:xr(s,o.version.toTimestamp()),createTime:xr(s,o.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:$n(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:$n(e.version)}}return n}function Oo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function $n(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Gn(r){const e=new te(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function Cn(r,e){const t=(e.baseMutations||[]).map((s=>Fc(r.yt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map((s=>Fc(r.yt,s))),i=te.fromMillis(e.localWriteTimeMs);return new Mu(e.batchId,i,t,n)}function Ci(r){const e=Gn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Gn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=(function(s){return s.documents!==void 0})(r.query)?(function(s){const o=s.documents.length;return U(o===1,1966,{count:o}),Ge(Kr(Jm(s.documents[0])))})(r.query):(function(s){return Ge(tg(s))})(r.query),new Rt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function og(r,e){const t=$n(e.snapshotVersion),n=$n(e.lastLimboFreeSnapshotVersion);let i;i=Do(e.target)?Zm(r.yt,e.target):eg(r.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function qu(r){const e=tg({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?xo(e,e.limit,"L"):e}function oc(r,e){return new Fu(e.largestBatchId,Fc(r.yt,e.overlayMutation))}function Ud(r,e){const t=e.path.lastSegment();return[r,qe(e.path.popLast()),t]}function Bd(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:$n(n.readTime),documentKey:qe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{getBundleMetadata(e,t){return qd(e).get(t).next((n=>{if(n)return(function(s){return{id:s.bundleId,createTime:Gn(s.createTime),version:s.version}})(n)}))}saveBundleMetadata(e,t){return qd(e).put((function(i){return{bundleId:i.id,createTime:$n(Ie(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return jd(e).get(t).next((n=>{if(n)return(function(s){return{name:s.name,query:qu(s.bundledQuery),readTime:Gn(s.readTime)}})(n)}))}saveNamedQuery(e,t){return jd(e).put((function(i){return{name:i.name,readTime:$n(Ie(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function qd(r){return be(r,ta)}function jd(r){return be(r,na)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new ua(e,n)}getOverlay(e,t){return yi(e).get(Ud(this.userId,t)).next((n=>n?oc(this.serializer,n):null))}getOverlays(e,t){const n=dt();return v.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((s,o)=>{const c=new Fu(t,o);i.push(this.St(e,c))})),v.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((o=>i.add(qe(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(yi(e).Z(bc,c))})),v.waitFor(s)}getOverlaysForCollection(e,t,n){const i=dt(),s=qe(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return yi(e).J(bc,o).next((c=>{for(const u of c){const h=oc(this.serializer,u);i.set(h.getKey(),h)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const s=dt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return yi(e).ee({index:sm,range:c},((u,h,f)=>{const m=oc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()})).next((()=>s))}St(e,t){return yi(e).put((function(i,s,o){const[c,u,h]=Ud(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:os(i.yt,o.mutation)}})(this.serializer,this.userId,t))}}function yi(r){return be(r,ra)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{bt(e){return be(e,Pu)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t?.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ue(e.integerValue));else if("doubleValue"in e){const n=ue(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Yi(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=Nt(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(xt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?_m(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):oa(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):F(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const i of Object.keys(n))this.Ot(i,t),this.Ct(n[i],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const i=Cr,s=n[i].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(ue(s)),this.Ot(i,t),this.Ct(n[i],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const i of n)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),M.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}kn.Kt=new kn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=255;function Hv(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function zd(r){const e=64-(function(n){let i=0;for(let s=0;s<8;++s){const o=Hv(255&n[s]);if(i+=o,o!==8)break}return i})(r);return Math.ceil(e/8)}class Qv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const t=this.en(e),n=zd(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),n=zd(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(ar),this.sn(255)}_n(){this.an(ar),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===ar?(this.sn(ar),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===ar?(this.an(ar),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class Jv{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class Yv{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ii{constructor(){this.cn=new Qv,this.ln=new Jv(this.cn),this.hn=new Yv(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,n,i){this.Tn=e,this.In=t,this.En=n,this.dn=i}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Vn(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:yo(this.En),directionalValue:yo(this.dn),orderedDocumentKey:yo(t),documentKey:n.path.toArray()}}Vn(e,t,n){const i=this.Rn(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Kt(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=$d(r.En,e.En),t!==0?t:(t=$d(r.dn,e.dn),t!==0?t:M.comparator(r.In,e.In)))}function $d(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function yo(r){return Mf()?(function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n})(r):r}function Gd(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(r)}class Kd{constructor(e){this.mn=new re(((t,n)=>de.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(U(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=vc(e);if(t!==void 0&&!this.wn(t))return!1;const n=bn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.wn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.Sn(c,u)||!this.bn(this.fn[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.fn.length||!this.bn(this.fn[o++],c))return!1}return!0}Dn(){if(this.pn)return null;let e=new re(de.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new uo(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new uo(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new uo(n.field,n.dir==="asc"?0:1)));return new So(So.UNKNOWN_ID,this.collectionId,t,Ji.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(r){if(U(r instanceof Q||r instanceof ne,20012),r instanceof Q){if(r instanceof bm){const t=r.value.arrayValue?.values?.map((n=>Q.create(r.field,"==",n)))||[];return ne.create(t,"or")}return r}const e=r.filters.map((t=>ag(t)));return ne.create(e,r.op)}function Xv(r){if(r.getFilters().length===0)return[];const e=qc(ag(r));return U(cg(e),7391),Uc(e)||Bc(e)?[e]:e.getFilters()}function Uc(r){return r instanceof Q}function Bc(r){return r instanceof ne&&Vu(r)}function cg(r){return Uc(r)||Bc(r)||(function(t){if(t instanceof ne&&Vc(t)){for(const n of t.getFilters())if(!Uc(n)&&!Bc(n))return!1;return!0}return!1})(r)}function qc(r){if(U(r instanceof Q||r instanceof ne,34018),r instanceof Q)return r;if(r.filters.length===1)return qc(r.filters[0]);const e=r.filters.map((n=>qc(n)));let t=ne.create(e,r.op);return t=Mo(t),cg(t)?t:(U(t instanceof ne,64498),U(Vr(t),40251),U(t.filters.length>1,57927),t.filters.reduce(((n,i)=>ju(n,i))))}function ju(r,e){let t;return U(r instanceof Q||r instanceof ne,38388),U(e instanceof Q||e instanceof ne,25473),t=r instanceof Q?e instanceof Q?(function(i,s){return ne.create([i,s],"and")})(r,e):Wd(r,e):e instanceof Q?Wd(e,r):(function(i,s){if(U(i.filters.length>0&&s.filters.length>0,48005),Vr(i)&&Vr(s))return vm(i,s.getFilters());const o=Vc(i)?i:s,c=Vc(i)?s:i,u=o.filters.map((h=>ju(h,c)));return ne.create(u,"or")})(r,e),Mo(t)}function Wd(r,e){if(Vr(e))return vm(e,r.getFilters());{const t=e.filters.map((n=>ju(r,n)));return ne.create(t,"or")}}function Mo(r){if(U(r instanceof Q||r instanceof ne,11850),r instanceof Q)return r;const e=r.getFilters();if(e.length===1)return Mo(e[0]);if(Em(r))return r;const t=e.map((i=>Mo(i))),n=[];return t.forEach((i=>{i instanceof Q?n.push(i):i instanceof ne&&(i.op===r.op?n.push(...i.filters):n.push(i))})),n.length===1?n[0]:ne.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.Cn=new zu}addToCollectionParentIndex(e,t){return this.Cn.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(tt.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(tt.min())}updateCollectionGroup(e,t,n){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class zu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new re(H.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new re(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="IndexedDbIndexManager",Zs=new Uint8Array(0);class eA{constructor(e,t){this.databaseId=t,this.vn=new zu,this.Fn=new Ft((n=>qn(n)),((n,i)=>Is(n,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const s={collectionId:n,parent:qe(i)};return Qd(e).put(s)}return v.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Gp(t),""],!1,!0);return Qd(e).J(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;n.push(ht(o.parent))}return n}))}addFieldIndex(e,t){const n=Ti(e),i=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=ur(e);return s.next((c=>{o.put(Bd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=Ti(e),i=ur(e),s=cr(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ti(e),n=cr(e),i=ur(e);return t.Z().next((()=>n.Z())).next((()=>i.Z()))}createTargetIndexes(e,t){return v.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((i=>{if(i===0||i===1){const s=new Kd(n).Dn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const n=cr(e);let i=!0;const s=new Map;return v.forEach(this.Mn(t),(o=>this.xn(e,o).next((c=>{i&&(i=!!c),s.set(o,c)})))).next((()=>{if(i){let o=K();const c=[];return v.forEach(s,((u,h)=>{V(Hd,`Using index ${(function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map((ee=>`${ee.fieldPath}:${ee.kind}`)).join(",")}`})(u)} to execute ${qn(t)}`);const f=(function(q,ee){const ie=vc(ee);if(ie===void 0)return null;for(const Y of No(q,ie.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null})(h,u),m=(function(q,ee){const ie=new Map;for(const Y of bn(ee))for(const T of No(q,Y.fieldPath))switch(T.op){case"==":case"in":ie.set(Y.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return ie.set(Y.fieldPath.canonicalString(),T.value),Array.from(ie.values())}return null})(h,u),g=(function(q,ee){const ie=[];let Y=!0;for(const T of bn(ee)){const _=T.kind===0?bd(q,T.fieldPath,q.startAt):Pd(q,T.fieldPath,q.startAt);ie.push(_.value),Y&&(Y=_.inclusive)}return new dn(ie,Y)})(h,u),b=(function(q,ee){const ie=[];let Y=!0;for(const T of bn(ee)){const _=T.kind===0?Pd(q,T.fieldPath,q.endAt):bd(q,T.fieldPath,q.endAt);ie.push(_.value),Y&&(Y=_.inclusive)}return new dn(ie,Y)})(h,u),C=this.On(u,h,g),N=this.On(u,h,b),D=this.Nn(u,h,m),z=this.Bn(u.indexId,f,C,g.inclusive,N,b.inclusive,D);return v.forEach(z,(j=>n.Y(j,t.limit).next((q=>{q.forEach((ee=>{const ie=M.fromSegments(ee.documentKey);o.has(ie)||(o=o.add(ie),c.push(ie))}))}))))})).next((()=>c))}return v.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=Xv(ne.create(e.filters,"and")).map((n=>Nc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const g=t?this.Ln(t[m/h]):Zs,b=this.kn(e,g,n[m%h],i),C=this.qn(e,g,s[m%h],o),N=c.map((D=>this.kn(e,g,D,!0)));f.push(...this.createRange(b,C,N))}return f}kn(e,t,n,i){const s=new Vn(e,M.empty(),t,n);return i?s:s.An()}qn(e,t,n,i){const s=new Vn(e,M.empty(),t,n);return i?s.An():s}xn(e,t){const n=new Kd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const c of s)n.yn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let n=2;const i=this.Mn(t);return v.forEach(i,(s=>this.xn(e,s).next((o=>{o?n!==0&&o.fields.length<(function(u){let h=new re(de.comparator),f=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(s)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&n===2?1:n))}Qn(e,t){const n=new Ii;for(const i of bn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Pn(i.kind);kn.Kt.Dt(s,o)}return n.un()}Ln(e){const t=new Ii;return kn.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Ii;return kn.Kt.Dt(Bn(this.databaseId,t),n.Pn((function(s){const o=bn(s);return o.length===0?0:o[o.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let i=[];i.push(new Ii);let s=0;for(const o of bn(e)){const c=n[s++];for(const u of i)if(this.Un(t,o.fieldPath)&&rs(c))i=this.Kn(i,o,c);else{const h=u.Pn(o.kind);kn.Kt.Dt(c,h)}}return this.Wn(i)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new Ii;u.seed(c.un()),kn.Kt.Dt(o,u.Pn(t.kind)),s.push(u)}return s}Un(e,t){return!!e.filters.find((n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Ti(e),i=ur(e);return(t?n.J(Rc,IDBKeyRange.bound(t,t)):n.J()).next((s=>{const o=[];return v.forEach(s,(c=>i.get([c.indexId,this.uid]).next((u=>{o.push((function(f,m){const g=m?new Ji(m.sequenceNumber,new tt(Gn(m.readTime),new M(ht(m.documentKey)),m.largestBatchId)):Ji.empty(),b=f.fields.map((([C,N])=>new uo(de.fromServerFormat(C),N)));return new So(f.indexId,f.collectionGroup,b,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:G(n.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=Ti(e),s=ur(e);return this.Gn(e).next((o=>i.J(Rc,IDBKeyRange.bound(t,t)).next((c=>v.forEach(c,(u=>s.put(Bd(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return v.forEach(t,((i,s)=>{const o=n.get(i.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((c=>(n.set(i.collectionGroup,c),v.forEach(c,(u=>this.zn(e,i,u).next((h=>{const f=this.jn(s,u);return h.isEqual(f)?v.resolve():this.Jn(e,s,u,h,f)})))))))}))}Hn(e,t,n,i){return cr(e).put(i.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,i){return cr(e).delete(i.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const i=cr(e);let s=new re(Kt);return i.ee({index:im,range:IDBKeyRange.only([n.indexId,this.uid,yo(this.$n(n,t))])},((o,c)=>{s=s.add(new Vn(n.indexId,t,Gd(c.arrayValue),Gd(c.directionalValue)))})).next((()=>s))}jn(e,t){let n=new re(Kt);const i=this.Qn(t,e);if(i==null)return n;const s=vc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(rs(o))for(const c of o.arrayValue.values||[])n=n.add(new Vn(t.indexId,e.key,this.Ln(c),i))}else n=n.add(new Vn(t.indexId,e.key,Zs,i));return n}Jn(e,t,n,i,s){V(Hd,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,h,f,m,g){const b=u.getIterator(),C=h.getIterator();let N=or(b),D=or(C);for(;N||D;){let z=!1,j=!1;if(N&&D){const q=f(N,D);q<0?j=!0:q>0&&(z=!0)}else N!=null?j=!0:z=!0;z?(m(D),D=or(C)):j?(g(N),N=or(b)):(N=or(b),D=or(C))}})(i,s,Kt,(c=>{o.push(this.Hn(e,t,n,c))}),(c=>{o.push(this.Yn(e,t,n,c))})),v.waitFor(o)}Gn(e){let t=1;return ur(e).ee({index:rm,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,c)=>Kt(o,c))).filter(((o,c,u)=>!c||Kt(o,u[c-1])!==0));const i=[];i.push(e);for(const o of n){const c=Kt(o,e),u=Kt(o,t);if(c===0)i[0]=e.An();else if(c>0&&u<0)i.push(o),i.push(o.An());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Zn(i[o],i[o+1]))return[];const c=i[o].Vn(this.uid,Zs,M.empty()),u=i[o+1].Vn(this.uid,Zs,M.empty());s.push(IDBKeyRange.bound(c,u))}return s}Zn(e,t){return Kt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jd)}getMinOffset(e,t){return v.mapArray(this.Mn(t),(n=>this.xn(e,n).next((i=>i||F(44426))))).next(Jd)}}function Qd(r){return be(r,es)}function cr(r){return be(r,Ui)}function Ti(r){return be(r,bu)}function ur(r){return be(r,Fi)}function Jd(r){U(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;vu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new tt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ug=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r,e,t){const n=r.store(it),i=r.store(Rr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.ee({range:o},((f,m,g)=>(c++,g.delete())));s.push(u.next((()=>{U(c===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const m=em(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return v.waitFor(s).next((()=>h))}function Lo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(ug,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);class la{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Xn={}}static wt(e,t,n,i){U(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new la(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).ee({index:Nn,range:n},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const s=mr(e),o=Wt(e);return o.add({}).next((c=>{U(typeof c=="number",49019);const u=new Mu(c,t,n,i),h=(function(b,C,N){const D=N.baseMutations.map((j=>os(b.yt,j))),z=N.mutations.map((j=>os(b.yt,j)));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:D,mutations:z}})(this.serializer,this.userId,u),f=[];let m=new re(((g,b)=>G(g.canonicalString(),b.canonicalString())));for(const g of i){const b=em(this.userId,g.key.path,c);m=m.add(g.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,Ow))}return m.forEach((g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.Xn[c]=u.keys()})),v.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return Wt(e).get(t).next((n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Cn(this.serializer,n)):null))}er(e,t){return this.Xn[t]?v.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const i=n.keys();return this.Xn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Wt(e).ee({index:Nn,range:i},((o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=n,47524,{tr:n}),s=Cn(this.serializer,c)),u.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=on;return Wt(e).ee({index:Nn,range:t,reverse:!0},((i,s,o)=>{n=s.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,on],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).J(Nn,t).next((n=>n.map((i=>Cn(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=lo(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return mr(e).ee({range:i},((o,c,u)=>{const[h,f,m]=o,g=ht(f);if(h===this.userId&&t.path.isEqual(g))return Wt(e).get(m).next((b=>{if(!b)throw F(61480,{nr:o,batchId:m});U(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:m}),s.push(Cn(this.serializer,b))}));u.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(G);const i=[];return t.forEach((s=>{const o=lo(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=mr(e).ee({range:c},((h,f,m)=>{const[g,b,C]=h,N=ht(b);g===this.userId&&s.path.isEqual(N)?n=n.add(C):m.done()}));i.push(u)})),v.waitFor(i).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=lo(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new re(G);return mr(e).ee({range:o},((u,h,f)=>{const[m,g,b]=u,C=ht(g);m===this.userId&&n.isPrefixOf(C)?C.length===i&&(c=c.add(b)):f.done()})).next((()=>this.rr(e,c)))}rr(e,t){const n=[],i=[];return t.forEach((s=>{i.push(Wt(e).get(s).next((o=>{if(o===null)throw F(35274,{batchId:s});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),n.push(Cn(this.serializer,o))})))})),v.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return lg(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),v.forEach(n,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return v.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return mr(e).ee({range:n},((s,o,c)=>{if(s[0]===this.userId){const u=ht(s[1]);i.push(u)}else c.done()})).next((()=>{U(i.length===0,56720,{sr:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return hg(e,this.userId,t)}_r(e){return dg(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:on,lastStreamToken:""}))}}function hg(r,e,t){const n=lo(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return mr(r).ee({range:s,X:!0},((c,u,h)=>{const[f,m,g]=c;f===e&&m===i&&(o=!0),h.done()})).next((()=>o))}function Wt(r){return be(r,it)}function mr(r){return be(r,Rr)}function dg(r){return be(r,Xi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Kn(0)}static cr(){return new Kn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new Kn(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>B.fromTimestamp(new te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.hr(e,i))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>lr(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let i=0;const s=[];return lr(e).ee(((o,c)=>{const u=Ci(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))})).next((()=>v.waitFor(s))).next((()=>i))}forEachTarget(e,t){return lr(e).ee(((n,i)=>{const s=Ci(i);t(s)}))}lr(e){return Xd(e).get(Vo).next((t=>(U(t!==null,2888),t)))}hr(e,t){return Xd(e).put(Vo,t)}Pr(e,t){return lr(e).put(og(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=qn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return lr(e).ee({range:i,index:nm},((o,c,u)=>{const h=Ci(c);Is(t,h.target)&&(s=h,u.done())})).next((()=>s))}addMatchingKeys(e,t,n){const i=[],s=Zt(e);return t.forEach((o=>{const c=qe(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))})),v.waitFor(i)}removeMatchingKeys(e,t,n){const i=Zt(e);return v.forEach(t,(s=>{const o=qe(s.path);return v.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])}))}removeMatchingKeysForTargetId(e,t){const n=Zt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Zt(e);let s=K();return i.ee({range:n,X:!0},((o,c,u)=>{const h=ht(o[1]),f=new M(h);s=s.add(f)})).next((()=>s))}containsKey(e,t){const n=qe(t.path),i=IDBKeyRange.bound([n],[Gp(n)],!1,!0);let s=0;return Zt(e).ee({index:Ru,X:!0,range:i},(([o,c],u,h)=>{o!==0&&(s++,h.done())})).next((()=>s>0))}At(e,t){return lr(e).get(t).next((n=>n?Ci(n):null))}}function lr(r){return be(r,br)}function Xd(r){return be(r,Mn)}function Zt(r){return be(r,Pr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="LruGarbageCollector",nA=1048576;function ef([r,e],[t,n]){const i=G(r,t);return i===0?G(e,n):i}class rA{constructor(e){this.Ir=e,this.buffer=new re(ef),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ef(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fg{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(Zd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?V(Zd,"Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Vr(3e5)}))}}class iA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return v.resolve(We.ce);const n=new rA(t);return this.mr.forEachTarget(e,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Yd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yd):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(n=m,c=Date.now(),this.removeTargets(e,n,t)))).next((m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),hr()<=W.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m}))))}}function pg(r,e){return new iA(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.db=e,this.garbageCollector=pg(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,i)=>t(i)))}addReference(e,t,n){return eo(e,n)}removeReference(e,t,n){return eo(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return eo(e,t)}br(e,t){return(function(i,s){let o=!1;return dg(i).te((c=>hg(i,c,s).next((u=>(u&&(o=!0),v.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Sr(e,((o,c)=>{if(c<=t){const u=this.br(e,o).next((h=>{if(!h)return s++,n.getEntry(e,o).next((()=>(n.removeEntry(o,B.min()),Zt(e).delete((function(m){return[0,qe(m.path)]})(o)))))}));i.push(u)}})).next((()=>v.waitFor(i))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return eo(e,t)}Sr(e,t){const n=Zt(e);let i,s=We.ce;return n.ee({index:Ru},(([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==We.ce&&t(new M(ht(i)),s),s=h,i=u):s=We.ce})).next((()=>{s!==We.ce&&t(new M(ht(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function eo(r,e){return Zt(r).put((function(n,i){return{targetId:0,path:qe(n.path),sequenceNumber:i}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.changes=new Ft((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?v.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return An(e).put(n)}removeEntry(e,t,n){return An(e).delete((function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Oo(o),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ce.newInvalidDocument(t);return An(e).ee({index:ho,range:IDBKeyRange.only(Ei(t))},((i,s)=>{n=this.Cr(t,s)})).next((()=>n))}vr(e,t){let n={size:0,document:ce.newInvalidDocument(t)};return An(e).ee({index:ho,range:IDBKeyRange.only(Ei(t))},((i,s)=>{n={document:this.Cr(t,s),size:Lo(s)}})).next((()=>n))}getEntries(e,t){let n=Qe();return this.Fr(e,t,((i,s)=>{const o=this.Cr(i,s);n=n.insert(i,o)})).next((()=>n))}Mr(e,t){let n=Qe(),i=new oe(M.comparator);return this.Fr(e,t,((s,o)=>{const c=this.Cr(s,o);n=n.insert(s,c),i=i.insert(s,Lo(o))})).next((()=>({documents:n,Or:i})))}Fr(e,t,n){if(t.isEmpty())return v.resolve();let i=new re(rf);t.forEach((u=>i=i.add(u)));const s=IDBKeyRange.bound(Ei(i.first()),Ei(i.last())),o=i.getIterator();let c=o.getNext();return An(e).ee({index:ho,range:s},((u,h,f)=>{const m=M.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&rf(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.j(Ei(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Oo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return An(e).J(IDBKeyRange.bound(c,u,!0)).next((h=>{s?.incrementDocumentReadCount(h.length);let f=Qe();for(const m of h){const g=this.Cr(M.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&(Es(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f}))}getAllFromCollectionGroup(e,t,n,i){let s=Qe();const o=nf(t,n),c=nf(t,tt.max());return An(e).ee({index:tm,range:IDBKeyRange.bound(o,c,!0)},((u,h,f)=>{const m=this.Cr(M.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()})).next((()=>s))}newChangeBuffer(e){return new aA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return tf(e).get(Ac).next((t=>(U(!!t,20021),t)))}Dr(e,t){return tf(e).put(Ac,t)}Cr(e,t){if(t){const n=Gv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ce.newInvalidDocument(e)}}function gg(r){return new oA(r)}class aA extends mg{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Ft((n=>n.toString()),((n,i)=>n.isEqual(i)))}applyChanges(e){const t=[];let n=0,i=new re(((s,o)=>G(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const c=this.Br.get(s);if(t.push(this.Nr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=Fd(this.Nr.serializer,o);i=i.add(s.path.popLast());const h=Lo(u);n+=h-c.size,t.push(this.Nr.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=Fd(this.Nr.serializer,o.convertToNoDocument(B.min()));t.push(this.Nr.addEntry(e,s,u))}})),i.forEach((s=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Nr.updateMetadata(e,n)),v.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:i})=>(i.forEach(((s,o)=>{this.Br.set(s,{size:o,readTime:n.get(s).readTime})})),n)))}}function tf(r){return be(r,Zi)}function An(r){return be(r,ko)}function Ei(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function nf(r,e){const t=e.documentKey.path.toArray();return[r,Oo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function rf(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=G(t[s],n[s]),i)return i;return i=G(t.length,n.length),i||(i=G(t[t.length-2],n[n.length-2]),i||G(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&ji(n.mutation,i,He.empty(),te.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const i=dt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let o=Pi();return s.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=dt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,i){let s=Qe();const o=qi(),c=(function(){return qi()})();return t.forEach(((u,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ut)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ji(f.mutation,h,f.mutation.getFieldMask(),te.now())):o.set(h.key,He.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>c.set(h,new cA(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=qi();let i=new oe(((o,c)=>o-c)),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||He.empty();f=c.applyToLocalView(h,f),n.set(u,f);const m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Nm();f.forEach((g=>{if(!s.has(g)){const b=Bm(t.get(g),n.get(g));b!==null&&m.set(g,b),s=s.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return v.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Du(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):v.resolve(dt());let c=Ar,u=s;return o.next((h=>v.forEach(h,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?v.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,K()))).next((f=>({batchId:c,changes:Dm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((n=>{let i=Pi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Pi();return this.indexManager.getCollectionParents(e,s).next((c=>v.forEach(c,(u=>{const h=(function(m,g){return new Lt(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next((f=>{f.forEach(((m,g)=>{o=o.insert(m,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((o=>{s.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ce.newInvalidDocument(f)))}));let c=Pi();return o.forEach(((u,h)=>{const f=s.get(u);f!==void 0&&ji(f.mutation,h,He.empty(),te.now()),Es(t,h)&&(c=c.insert(u,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return v.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}})(t)),v.resolve()}getNamedQuery(e,t){return v.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:qu(i.bundledQuery),readTime:Ie(i.readTime)}})(t)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.overlays=new oe(M.comparator),this.qr=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const n=dt();return v.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.St(e,t,s)})),v.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.qr.delete(n)),v.resolve()}getOverlaysForCollection(e,t,n){const i=dt(),s=t.length+1,o=new M(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return v.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new oe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=dt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=dt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=i)););return v.resolve(c)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Fu(t,n));let s=this.qr.get(t);s===void 0&&(s=K(),this.qr.set(t,s)),this.qr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return v.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,v.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.Qr=new re(Pe.$r),this.Ur=new re(Pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Pe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Pe(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new M(new H([])),n=new Pe(t,e),i=new Pe(t,e+1),s=[];return this.Ur.forEachInRange([n,i],(o=>{this.Gr(o),s.push(o.key)})),s}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new H([])),n=new Pe(t,e),i=new Pe(t,e+1);let s=K();return this.Ur.forEachInRange([n,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Pe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||G(e.Yr,t.Yr)}static Kr(e,t){return G(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new re(Pe.$r)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mu(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.Zr=this.Zr.add(new Pe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,t){return v.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?on:this.tr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Pe(t,0),i=new Pe(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([n,i],(o=>{const c=this.Xr(o.Yr);s.push(c)})),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(G);return t.forEach((i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],(c=>{n=n.add(c.Yr)}))})),v.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;M.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new M(s),0);let c=new re(G);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Yr)),!0)}),o),v.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((n=>{const i=this.Xr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){U(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return v.forEach(t.mutations,(i=>{const s=new Pe(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Pe(t,0),i=this.Zr.firstAfterOrEqual(n);return v.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.ri=e,this.docs=(function(){return new oe(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return v.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let n=Qe();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))})),v.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Qe();const o=t.path,c=new M(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vu(Qp(f),n)<=0||(i.has(f.key)||Es(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,t,n,i){F(9500)}ii(e,t){return v.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new pA(this)}getSize(e){return v.resolve(this.size)}}class pA extends mg{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)})),v.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.persistence=e,this.si=new Ft((t=>qn(t)),Is),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new $u,this.targetCount=0,this.ai=Kn.ur()}forEachTarget(e,t){return this.si.forEach(((n,i)=>t(i))),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),v.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.Pr(t),v.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),v.waitFor(s).next((()=>i))}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return v.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),v.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),v.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),v.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return v.resolve(n)}containsKey(e,t){return v.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.ui={},this.overlays={},this.ci=new We(0),this.li=!1,this.li=!0,this.hi=new hA,this.referenceDelegate=e(this),this.Pi=new mA(this),this.indexManager=new Zv,this.remoteDocumentCache=(function(i){return new fA(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new sg(t),this.Ii=new uA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new dA(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new gA(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ai(e,t){return v.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class gA extends Yp{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Ri=new $u,this.Vi=null}static mi(e){return new ha(e)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),v.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),v.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.fi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.fi,(n=>{const i=M.fromPath(n);return this.gi(e,i).next((s=>{s||t.removeEntry(i,B.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return v.or([()=>v.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Fo{constructor(e,t){this.persistence=e,this.pi=new Ft((n=>qe(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=pg(this,t)}static mi(e,t){return new Fo(e,t)}Ei(){}di(e){return v.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return v.forEach(this.pi,((n,i)=>this.br(e,n,i).next((s=>s?v.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((c=>{c||(n++,s.removeEntry(o,B.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),v.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),v.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),v.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),v.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=po(e.data.value)),t}br(e,t,n){return v.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return v.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.serializer=e}k(e,t,n,i){const s=new ea("createOrUpgrade",t);n<1&&i>=1&&((function(u){u.createObjectStore(ys)})(e),(function(u){u.createObjectStore(Xi,{keyPath:xw}),u.createObjectStore(it,{keyPath:pd,autoIncrement:!0}).createIndex(Nn,md,{unique:!0}),u.createObjectStore(Rr)})(e),sf(e),(function(u){u.createObjectStore(Pn)})(e));let o=v.resolve();return n<3&&i>=3&&(n!==0&&((function(u){u.deleteObjectStore(Pr),u.deleteObjectStore(br),u.deleteObjectStore(Mn)})(e),sf(e)),o=o.next((()=>(function(u){const h=u.store(Mn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(Vo,f)})(s)))),n<4&&i>=4&&(n!==0&&(o=o.next((()=>(function(u,h){return h.store(it).J().next((m=>{u.deleteObjectStore(it),u.createObjectStore(it,{keyPath:pd,autoIncrement:!0}).createIndex(Nn,md,{unique:!0});const g=h.store(it),b=m.map((C=>g.put(C)));return v.waitFor(b)}))})(e,s)))),o=o.next((()=>{(function(u){u.createObjectStore(Sr,{keyPath:zw})})(e)}))),n<5&&i>=5&&(o=o.next((()=>this.yi(s)))),n<6&&i>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Zi)})(e),this.wi(s))))),n<7&&i>=7&&(o=o.next((()=>this.Si(s)))),n<8&&i>=8&&(o=o.next((()=>this.bi(e,s)))),n<9&&i>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&i>=10&&(o=o.next((()=>this.Di(s)))),n<11&&i>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(ta,{keyPath:$w})})(e),(function(u){u.createObjectStore(na,{keyPath:Gw})})(e)}))),n<12&&i>=12&&(o=o.next((()=>{(function(u){const h=u.createObjectStore(ra,{keyPath:Xw});h.createIndex(bc,Zw,{unique:!1}),h.createIndex(sm,ev,{unique:!1})})(e)}))),n<13&&i>=13&&(o=o.next((()=>(function(u){const h=u.createObjectStore(ko,{keyPath:Mw});h.createIndex(ho,Lw),h.createIndex(tm,Fw)})(e))).next((()=>this.Ci(e,s))).next((()=>e.deleteObjectStore(Pn)))),n<14&&i>=14&&(o=o.next((()=>this.Fi(e,s)))),n<15&&i>=15&&(o=o.next((()=>(function(u){u.createObjectStore(bu,{keyPath:Kw,autoIncrement:!0}).createIndex(Rc,Ww,{unique:!1}),u.createObjectStore(Fi,{keyPath:Hw}).createIndex(rm,Qw,{unique:!1}),u.createObjectStore(Ui,{keyPath:Jw}).createIndex(im,Yw,{unique:!1})})(e)))),n<16&&i>=16&&(o=o.next((()=>{t.objectStore(Fi).clear()})).next((()=>{t.objectStore(Ui).clear()}))),n<17&&i>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Pu,{keyPath:tv})})(e)}))),n<18&&i>=18&&Mf()&&(o=o.next((()=>{t.objectStore(Fi).clear()})).next((()=>{t.objectStore(Ui).clear()}))),o}wi(e){let t=0;return e.store(Pn).ee(((n,i)=>{t+=Lo(i)})).next((()=>{const n={byteSize:t};return e.store(Zi).put(Ac,n)}))}yi(e){const t=e.store(Xi),n=e.store(it);return t.J().next((i=>v.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,on],[s.userId,s.lastAcknowledgedBatchId]);return n.J(Nn,o).next((c=>v.forEach(c,(u=>{U(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Cn(this.serializer,u);return lg(e,s.userId,h).next((()=>{}))}))))}))))}Si(e){const t=e.store(Pr),n=e.store(Pn);return e.store(Mn).get(Vo).next((i=>{const s=[];return n.ee(((o,c)=>{const u=new H(o),h=(function(m){return[0,qe(m)]})(u);s.push(t.get(h).next((f=>f?v.resolve():(m=>t.put({targetId:0,path:qe(m),sequenceNumber:i.highestListenSequenceNumber}))(u))))})).next((()=>v.waitFor(s)))}))}bi(e,t){e.createObjectStore(es,{keyPath:jw});const n=t.store(es),i=new zu,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:qe(u)})}};return t.store(Pn).ee({X:!0},((o,c)=>{const u=new H(o);return s(u.popLast())})).next((()=>t.store(Rr).ee({X:!0},(([o,c,u],h)=>{const f=ht(c);return s(f.popLast())}))))}Di(e){const t=e.store(br);return t.ee(((n,i)=>{const s=Ci(i),o=og(this.serializer,s);return t.put(o)}))}Ci(e,t){const n=t.store(Pn),i=[];return n.ee(((s,o)=>{const c=t.store(ko),u=(function(m){return m.document?new M(H.fromString(m.document.name).popFirst(5)):m.noDocument?M.fromSegments(m.noDocument.path):m.unknownDocument?M.fromSegments(m.unknownDocument.path):F(36783)})(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))})).next((()=>v.waitFor(i)))}Fi(e,t){const n=t.store(it),i=gg(this.serializer),s=new Gu(ha.mi,this.serializer.yt);return n.J().next((o=>{const c=new Map;return o.forEach((u=>{let h=c.get(u.userId)??K();Cn(this.serializer,u).keys().forEach((f=>h=h.add(f))),c.set(u.userId,h)})),v.forEach(c,((u,h)=>{const f=new Se(h),m=ua.wt(this.serializer,f),g=s.getIndexManager(f),b=la.wt(f,this.serializer,g,s.referenceDelegate);return new _g(i,b,m,g).recalculateAndSaveOverlaysForDocumentKeys(new Pc(t,We.ce),u).next()}))}))}}function sf(r){r.createObjectStore(Pr,{keyPath:Bw}).createIndex(Ru,qw,{unique:!0}),r.createObjectStore(br,{keyPath:"targetId"}).createIndex(nm,Uw,{unique:!0}),r.createObjectStore(Mn)}const Ht="IndexedDbPersistence",ac=18e5,cc=5e3,uc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",yg="main";class Ku{constructor(e,t,n,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=s,this.window=o,this.document=c,this.xi=h,this.Oi=f,this.Ni=m,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=g=>Promise.resolve(),!Ku.v())throw new k(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sA(this,i),this.$i=t+yg,this.serializer=new sg(u),this.Ui=new ft(this.$i,this.Ni,new _A(this.serializer)),this.hi=new Wv,this.Pi=new tA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gg(this.serializer),this.Ii=new Kv,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&ye(Ht,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,uc);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new We(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>to(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(gn(e))return V(Ht,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(Ht,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return wi(e).get(sr).next((t=>v.resolve(this.es(t))))}ts(e){return to(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,ac)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=be(t,Sr);return n.J().next((i=>{const s=this.ss(i,ac),o=i.filter((c=>s.indexOf(c)===-1));return v.forEach(o,(c=>n.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?v.resolve(!0):wi(e).get(sr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,cc)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,uc);return!1}}return!(!this.networkEnabled||!this.inForeground)||to(e).J().next((n=>this.ss(n,cc).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&V(Ht,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[ys,Sr],(e=>{const t=new Pc(e,We.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>to(e).J().next((t=>this.ss(t,ac).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return la.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new eA(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ua.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){V(Ht,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(u){return u===18?iv:u===17?um:u===16?rv:u===15?Su:u===14?cm:u===13?am:u===12?nv:u===11?om:void F(60245)})(this.Ni);let o;return this.Ui.runTransaction(e,i,s,(c=>(o=new Pc(c,this.ci?this.ci.next():We.ce),t==="readwrite-primary"?this.Hi(o).next((u=>!!u||this.Yi(o))).next((u=>{if(!u)throw ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new k(P.FAILED_PRECONDITION,Jp);return n(o)})).next((u=>this.Xi(o).next((()=>u)))):this.Is(o).next((()=>n(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Is(e){return wi(e).get(sr).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,cc)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(P.FAILED_PRECONDITION,uc)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wi(e).put(sr,t)}static v(){return ft.v()}Zi(e){const t=wi(e);return t.get(sr).next((n=>this.es(n)?(V(Ht,"Releasing primary lease."),t.delete(sr)):v.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ye(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Of()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return V(Ht,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return ye(Ht,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){ye("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wi(r){return be(r,ys)}function to(r){return be(r,Sr)}function Wu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hu(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Of()?8:Xp(Ae())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ys(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ws(e,t,i,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new yA;return this.Ss(e,t,o).next((c=>{if(s.result=c,this.Vs)return this.bs(e,t,o,c.size)}))})).next((()=>s.result))}bs(e,t,n,i){return n.documentReadCount<this.fs?(hr()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),v.resolve()):(hr()<=W.DEBUG&&V("QueryEngine","Query:",dr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(hr()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):v.resolve())}ys(e,t){if(Sd(t))return v.resolve(null);let n=Ge(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=xo(t,null,"F"),n=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=K(...s);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,n).next((u=>{const h=this.Ds(t,c);return this.Cs(t,h,o,u.readTime)?this.ys(e,xo(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,n,i){return Sd(t)||i.isEqual(B.min())?v.resolve(null):this.ps.getDocuments(e,n).next((s=>{const o=this.Ds(t,s);return this.Cs(t,o,n,i)?v.resolve(null):(hr()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dr(t)),this.vs(e,o,t,Hp(i,Ar)).next((c=>c)))}))}Ds(e,t){let n=new re(km(e));return t.forEach(((i,s)=>{Es(e,s)&&(n=n.add(s))})),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,n){return hr()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dr(t)),this.ps.getDocumentsMatchingQuery(e,t,tt.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="LocalStore",IA=3e8;class TA{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new oe(G),this.xs=new Ft((s=>qn(s)),Is),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _g(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Tg(r,e,t,n){return new TA(r,e,t,n)}async function Eg(r,e){const t=L(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],c=[];let u=K();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((h=>({Ls:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function EA(r,e){const t=L(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const m=h.batch,g=m.keys();let b=v.resolve();return g.forEach((C=>{b=b.next((()=>f.getEntry(u,C))).next((N=>{const D=h.docVersions.get(C);U(D!==null,48541),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function wg(r){const e=L(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function wA(r,e){const t=L(r),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const c=[];e.targetChanges.forEach(((f,m)=>{const g=i.get(m);if(!g)return;c.push(t.Pi.removeMatchingKeys(s,f.removedDocuments,m).next((()=>t.Pi.addMatchingKeys(s,f.addedDocuments,m))));let b=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),i=i.insert(m,b),(function(N,D,z){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=IA?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(g,b,f)&&c.push(t.Pi.updateTargetData(s,b))}));let u=Qe(),h=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),c.push(vg(s,o,e.documentUpdates).next((f=>{u=f.ks,h=f.qs}))),!n.isEqual(B.min())){const f=t.Pi.getLastRemoteSnapshotVersion(s).next((m=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,n)));c.push(f)}return v.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Ms=i,s)))}function vg(r,e,t){let n=K(),i=K();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let o=Qe();return t.forEach(((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):V(Qu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{ks:o,qs:i}}))}function vA(r,e){const t=L(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=on),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Or(r,e){const t=L(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.Pi.getTargetData(n,e).next((s=>s?(i=s,v.resolve(i)):t.Pi.allocateTargetId(n).next((o=>(i=new Rt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function Mr(r,e,t){const n=L(r),i=n.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!gn(o))throw o;V(Qu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function Uo(r,e,t){const n=L(r);let i=B.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const m=L(u),g=m.xs.get(f);return g!==void 0?v.resolve(m.Ms.get(g)):m.Pi.getTargetData(h,f)})(n,o,Ge(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,c.targetId).next((u=>{s=u}))})).next((()=>n.Fs.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?s:K()))).next((c=>(bg(n,Cm(e),c),{documents:c,Qs:s})))))}function Ag(r,e){const t=L(r),n=L(t.Pi),i=t.Ms.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>n.At(s,e).next((o=>o?o.target:null))))}function Rg(r,e){const t=L(r),n=t.Os.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.Ns.getAllFromCollectionGroup(i,e,Hp(n,Ar),Number.MAX_SAFE_INTEGER))).then((i=>(bg(t,e,i),i)))}function bg(r,e,t){let n=r.Os.get(e)||B.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.Os.set(e,n)}async function AA(r,e,t,n){const i=L(r);let s=K(),o=Qe();for(const h of t){const f=e.$s(h.metadata.name);h.document&&(s=s.add(f));const m=e.Us(h);m.setReadTime(e.Ks(h.metadata.readTime)),o=o.insert(f,m)}const c=i.Ns.newChangeBuffer({trackRemovals:!0}),u=await Or(i,(function(f){return Ge(Kr(H.fromString(`__bundle__/docs/${f}`)))})(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",(h=>vg(h,c,o).next((f=>(c.apply(h),f))).next((f=>i.Pi.removeMatchingKeysForTargetId(h,u.targetId).next((()=>i.Pi.addMatchingKeys(h,s,u.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(h,f.ks,f.qs))).next((()=>f.ks))))))}async function RA(r,e,t=K()){const n=await Or(r,Ge(qu(e.bundledQuery))),i=L(r);return i.persistence.runTransaction("Save named query","readwrite",(s=>{const o=Ie(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Ii.saveNamedQuery(s,e);const c=n.withResumeToken(me.EMPTY_BYTE_STRING,o);return i.Ms=i.Ms.insert(c.targetId,c),i.Pi.updateTargetData(s,c).next((()=>i.Pi.removeMatchingKeysForTargetId(s,n.targetId))).next((()=>i.Pi.addMatchingKeys(s,t,n.targetId))).next((()=>i.Ii.saveNamedQuery(s,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firestore_clients";function of(r,e){return`${Pg}_${r}_${e}`}const Sg="firestore_mutations";function af(r,e,t){let n=`${Sg}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Cg="firestore_targets";function lc(r,e){return`${Cg}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="SharedClientState";class Bo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ws(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new Bo(e,t,i.state,s):(ye(ut,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zi{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new k(n.error.code,n.error.message))),s?new zi(e,n.state,i):(ye(ut,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Nu();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=Zp(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new qo(e,s):(ye(ut,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ju{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ju(t.clientId,t.onlineState):(ye(ut,`Failed to parse online state: ${e}`),null)}}class jc{constructor(){this.activeTargetIds=Nu()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hc{constructor(e,t,n,i,s){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new oe(G),this.started=!1,this.Xs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.eo=of(this.persistenceKey,this.Js),this.no=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new jc),this.ro=new RegExp(`^${Pg}_${o}_([^_]*)$`),this.io=new RegExp(`^${Sg}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${Cg}_${o}_(\\d+)$`),this.oo=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this._o=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const n of e){if(n===this.Js)continue;const i=this.getItem(of(this.persistenceKey,n));if(i){const s=qo.Ws(n,i);s&&(this.Zs=this.Zs.insert(s.clientId,s))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const n=this.uo(t);n&&this.co(n)}for(const n of this.Xs)this.Ys(n);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(lc(this.persistenceKey,e));if(i){const s=zi.Ws(e,i);s&&(n=s.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lc(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach((i=>{this.Po(i)})),this.currentUser=e,n.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V(ut,"READ",e,t),t}setItem(e,t){V(ut,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){V(ut,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(V(ut,"EVENT",t.key,t.newValue),t.key===this.eo)return void ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const n=this.Ro(t.key);return this.Vo(n,null)}{const n=this.mo(t.key,t.newValue);if(n)return this.Vo(n.clientId,n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.yo(t.key,t.newValue);if(n)return this.wo(n)}}else if(t.key===this.oo){if(t.newValue!==null){const n=this.uo(t.newValue);if(n)return this.co(n)}}else if(t.key===this.no){const n=(function(s){let o=We.ce;if(s!=null)try{const c=JSON.parse(s);U(typeof c=="number",30636,{So:s}),o=c}catch(c){ye(ut,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);n!==We.ce&&this.sequenceNumberHandler(n)}else if(t.key===this._o){const n=this.bo(t.newValue);await Promise.all(n.map((i=>this.syncEngine.Do(i))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const i=new Bo(this.currentUser,e,t,n),s=af(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Gs())}Po(e){const t=af(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const i=lc(this.persistenceKey,e),s=new zi(e,t,n);this.setItem(i,s.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const n=this.Ro(e);return qo.Ws(n,t)}fo(e,t){const n=this.io.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Bo.Ws(new Se(s),i,t)}yo(e,t){const n=this.so.exec(e),i=Number(n[1]);return zi.Ws(i,t)}uo(e){return Ju.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);V(ut,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),i=this.lo(this.Zs),s=this.lo(n),o=[],c=[];return s.forEach((u=>{i.has(u)||o.push(u)})),i.forEach((u=>{s.has(u)||c.push(u)})),this.syncEngine.Fo(o,c).then((()=>{this.Zs=n}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=Nu();return e.forEach(((n,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class kg{constructor(){this.Mo=new jc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new jc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="ConnectivityMonitor";class uf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(cf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function zc(){return no===null?no=(function(){return 268435456+Math.round(2147483648*Math.random())})():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="RestConnection",PA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class SA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Sc?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,s){const o=zc(),c=this.zo(e,t.toUriEncodedString());V(dc,`Sending RPC '${e}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(c),f=qr(h);return this.Jo(e,c,u,n,f).then((m=>(V(dc,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw Dt(dc,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",n),m}))}Ho(e,t,n,i,s,o){return this.Go(e,t,n,i,s)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}zo(e,t){const n=PA[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class kA extends SA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,s){const o=zc();return new Promise(((c,u)=>{const h=new Fp;h.setWithCredentials(!0),h.listenOnce(Up.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case co.NO_ERROR:const m=h.getResponseJson();V(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case co.TIMEOUT:V(Ue,`RPC '${e}' ${o} timed out`),u(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const g=h.getStatus();if(V(Ue,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b?.error;if(C&&C.status&&C.message){const N=(function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN})(C.status);u(new k(N,C.message))}else u(new k(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new k(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{V(Ue,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);V(Ue,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,n,15)}))}T_(e,t,n){const i=zc(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jp(),c=qp(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");V(Ue,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let g=!1,b=!1;const C=new CA({Yo:D=>{b?V(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(V(Ue,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),V(Ue,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Zo:()=>m.close()}),N=(D,z,j)=>{D.listen(z,(q=>{try{j(q)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return N(m,bi.EventType.OPEN,(()=>{b||(V(Ue,`RPC '${e}' stream ${i} transport opened.`),C.o_())})),N(m,bi.EventType.CLOSE,(()=>{b||(b=!0,V(Ue,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(m))})),N(m,bi.EventType.ERROR,(D=>{b||(b=!0,Dt(Ue,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.a_(new k(P.UNAVAILABLE,"The operation could not be completed")))})),N(m,bi.EventType.MESSAGE,(D=>{if(!b){const z=D.data[0];U(!!z,16349);const j=z,q=j?.error||j[0]?.error;if(q){V(Ue,`RPC '${e}' stream ${i} received error:`,q);const ee=q.status;let ie=(function(_){const I=Ee[_];if(I!==void 0)return zm(I)})(ee),Y=q.message;ie===void 0&&(ie=P.INTERNAL,Y="Unknown error status: "+ee+" with message "+q.message),b=!0,C.a_(new k(ie,Y)),m.close()}else V(Ue,`RPC '${e}' stream ${i} received:`,z),C.u_(z)}})),N(c,Bp.STAT_EVENT,(D=>{D.stat===Ec.PROXY?V(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Ec.NOPROXY&&V(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof window<"u"?window:null}function Io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){return new Ov(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="PersistentStream";class Dg{constructor(e,t,n,i,s,o,c,u){this.Mi=e,this.S_=n,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ye(t.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===t&&this.G_(n,i)}),(n=>{e((()=>{const i=new k(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VA extends Dg{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Fv(this.serializer,e),n=(function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Ie(o.readTime):B.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Lc(this.serializer),t.addTarget=(function(s,o){let c;const u=o.target;if(c=Do(u)?{documents:Zm(s,u)}:{query:eg(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Wm(s,o.resumeToken);const h=Oc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=xr(s,o.snapshotVersion.toTimestamp());const h=Oc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const n=Bv(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Lc(this.serializer),t.removeTarget=e,this.q_(t)}}class DA extends Dg{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Uv(e.writeResults,e.commitTime),n=Ie(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Lc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>os(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{}class xA extends NA{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Go(e,Mc(t,n),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(P.UNKNOWN,s.toString())}))}Ho(e,t,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Mc(t,n),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class OA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ye(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="RemoteStore";class MA{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo((o=>{n.enqueueAndForget((async()=>{yn(this)&&(V(Wn,"Restarting streams for network reachability change."),await(async function(u){const h=L(u);h.Ea.add(4),await Qr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await bs(h)})(this))}))})),this.Ra=new OA(n,i)}}async function bs(r){if(yn(r))for(const e of r.da)await e(!0)}async function Qr(r){for(const e of r.da)await e(!1)}function da(r,e){const t=L(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),el(t)?Zu(t):Yr(t).O_()&&Xu(t,e))}function Lr(r,e){const t=L(r),n=Yr(t);t.Ia.delete(e),n.O_()&&Ng(t,e),t.Ia.size===0&&(n.O_()?n.L_():yn(t)&&t.Ra.set("Unknown"))}function Xu(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yr(r).Y_(e)}function Ng(r,e){r.Va.Ue(e),Yr(r).Z_(e)}function Zu(r){r.Va=new Vv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Yr(r).start(),r.Ra.ua()}function el(r){return yn(r)&&!Yr(r).x_()&&r.Ia.size>0}function yn(r){return L(r).Ea.size===0}function xg(r){r.Va=void 0}async function LA(r){r.Ra.set("Online")}async function FA(r){r.Ia.forEach(((e,t)=>{Xu(r,e)}))}async function UA(r,e){xg(r),el(r)?(r.Ra.ha(e),Zu(r)):r.Ra.set("Unknown")}async function BA(r,e,t){if(r.Ra.set("Online"),e instanceof Km&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.Va.removeTarget(c))})(r,e)}catch(n){V(Wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await jo(r,n)}else if(e instanceof _o?r.Va.Ze(e):e instanceof Gm?r.Va.st(e):r.Va.tt(e),!t.isEqual(B.min()))try{const n=await wg(r.localStore);t.compareTo(n)>=0&&await(function(s,o){const c=s.Va.Tt(o);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),Ng(s,u);const m=new Rt(f.target,u,h,f.sequenceNumber);Xu(s,m)})),s.remoteSyncer.applyRemoteEvent(c)})(r,t)}catch(n){V(Wn,"Failed to raise snapshot:",n),await jo(r,n)}}async function jo(r,e,t){if(!gn(e))throw e;r.Ea.add(1),await Qr(r),r.Ra.set("Offline"),t||(t=()=>wg(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(Wn,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await bs(r)}))}function Og(r,e){return e().catch((t=>jo(r,t,e)))}async function Jr(r){const e=L(r),t=fn(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:on;for(;qA(e);)try{const i=await vA(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,jA(e,i)}catch(i){await jo(e,i)}Mg(e)&&Lg(e)}function qA(r){return yn(r)&&r.Ta.length<10}function jA(r,e){r.Ta.push(e);const t=fn(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Mg(r){return yn(r)&&!fn(r).x_()&&r.Ta.length>0}function Lg(r){fn(r).start()}async function zA(r){fn(r).ra()}async function $A(r){const e=fn(r);for(const t of r.Ta)e.ea(t.mutations)}async function GA(r,e,t){const n=r.Ta.shift(),i=Lu.from(n,e,t);await Og(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Jr(r)}async function KA(r,e){e&&fn(r).X_&&await(async function(n,i){if((function(o){return jm(o)&&o!==P.ABORTED})(i.code)){const s=n.Ta.shift();fn(n).B_(),await Og(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Jr(n)}})(r,e),Mg(r)&&Lg(r)}async function hf(r,e){const t=L(r);t.asyncQueue.verifyOperationInProgress(),V(Wn,"RemoteStore received new credentials");const n=yn(t);t.Ea.add(3),await Qr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await bs(t)}async function $c(r,e){const t=L(r);e?(t.Ea.delete(2),await bs(t)):e||(t.Ea.add(2),await Qr(t),t.Ra.set("Unknown"))}function Yr(r){return r.ma||(r.ma=(function(t,n,i){const s=L(t);return s.sa(),new VA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Xo:LA.bind(null,r),t_:FA.bind(null,r),r_:UA.bind(null,r),H_:BA.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),el(r)?Zu(r):r.Ra.set("Unknown")):(await r.ma.stop(),xg(r))}))),r.ma}function fn(r){return r.fa||(r.fa=(function(t,n,i){const s=L(t);return s.sa(),new DA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:zA.bind(null,r),r_:KA.bind(null,r),ta:$A.bind(null,r),na:GA.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Jr(r)):(await r.fa.stop(),r.Ta.length>0&&(V(Wn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new tl(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xr(r,e){if(ye("AsyncQueue",`${e}: ${r}`),gn(r))return new k(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{static emptySet(e){return new Tr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=Pi(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Tr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.ga=new oe(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Fr{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Fr(e,t,Tr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class HA{constructor(){this.queries=ff(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=L(t),s=i.queries;i.queries=ff(),s.forEach(((o,c)=>{for(const u of c.Sa)u.onError(n)}))})(this,new k(P.ABORTED,"Firestore shutting down"))}}function ff(){return new Ft((r=>Sm(r)),Ts)}async function nl(r,e){const t=L(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(n=2):(s=new WA,n=e.Da()?0:1);try{switch(n){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Xr(o,`Initialization of query '${dr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&il(t)}async function rl(r,e){const t=L(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function QA(r,e){const t=L(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(i)&&(n=!0);o.wa=i}}n&&il(t)}function JA(r,e,t){const n=L(r),i=n.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);n.queries.delete(e)}function il(r){r.Ca.forEach((e=>{e.next()}))}var Gc,pf;(pf=Gc||(Gc={})).Ma="default",pf.Cache="cache";class sl{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Fr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Gc.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.serializer=e}$s(e){return pt(this.serializer,e)}Us(e){return e.metadata.exists?Xm(this.serializer,e.document,!1):ce.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Ie(e)}}class XA{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=Fg(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const n=H.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new mf(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.$s(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||K()).add(s);t.set(o,c)}}return t}async ja(e){const t=await AA(e,new mf(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents);for(const i of this.Ka)await RA(e,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function Fg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.key=e}}class Bg{constructor(e){this.key=e}}class qg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=km(e),this.tu=new Tr(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new df,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,m)=>{const g=i.get(f),b=Es(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;g&&b?g.data.isEqual(b.data)?C!==N&&(n.track({type:3,doc:b}),D=!0):this.su(g,b)||(n.track({type:2,doc:b}),D=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(c=!0)):!g&&b?(n.track({type:0,doc:b}),D=!0):g&&!b&&(n.track({type:1,doc:g}),D=!0,(u||h)&&(c=!0)),D&&(b?(o=o.add(b),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,Cs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,m)=>(function(b,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Rt:D})}};return N(b)-N(C)})(f.type,m.type)||this.eu(f.doc,m.doc))),this.ou(n),i=i??!1;const c=t&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Fr(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new df,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Bg(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new Ug(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Fr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const In="SyncEngine";class ZA{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class eR{constructor(e){this.key=e,this.hu=!1}}class tR{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ft((c=>Sm(c)),Ts),this.Iu=new Map,this.Eu=new Set,this.du=new oe(M.comparator),this.Au=new Map,this.Ru=new $u,this.Vu={},this.mu=new Map,this.fu=Kn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nR(r,e,t=!0){const n=fa(r);let i;const s=n.Tu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await jg(n,e,t,!0),i}async function rR(r,e){const t=fa(r);await jg(t,e,!0,!1)}async function jg(r,e,t,n){const i=await Or(r.localStore,Ge(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await ol(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&da(r.remoteStore,i),c}async function ol(r,e,t,n,i){r.pu=(m,g,b)=>(async function(N,D,z,j){let q=D.view.ru(z);q.Cs&&(q=await Uo(N.localStore,D.query,!1).then((({documents:T})=>D.view.ru(T,q))));const ee=j&&j.targetChanges.get(D.targetId),ie=j&&j.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(q,N.isPrimaryClient,ee,ie);return Kc(N,D.targetId,Y.au),Y.snapshot})(r,m,g,b);const s=await Uo(r.localStore,e,!0),o=new qg(e,s.Qs),c=o.ru(s.documents),u=As.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);Kc(r,t,h.au);const f=new ZA(e,t,o);return r.Tu.set(e,f),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),h.snapshot}async function iR(r,e,t){const n=L(r),i=n.Tu.get(e),s=n.Iu.get(i.targetId);if(s.length>1)return n.Iu.set(i.targetId,s.filter((o=>!Ts(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Mr(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Lr(n.remoteStore,i.targetId),Ur(n,i.targetId)})).catch(mn)):(Ur(n,i.targetId),await Mr(n.localStore,i.targetId,!0))}async function sR(r,e){const t=L(r),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Lr(t.remoteStore,n.targetId))}async function oR(r,e,t){const n=ll(r);try{const i=await(function(o,c){const u=L(o),h=te.now(),f=c.reduce(((b,C)=>b.add(C.key)),K());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let C=Qe(),N=K();return u.Ns.getEntries(b,f).next((D=>{C=D,C.forEach(((z,j)=>{j.isValidDocument()||(N=N.add(z))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,C))).next((D=>{m=D;const z=[];for(const j of c){const q=Sv(j,m.get(j.key).overlayedDocument);q!=null&&z.push(new Ut(j.key,q,Im(q.value.mapValue),he.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,z,c)})).next((D=>{g=D;const z=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(b,D.batchId,z)}))})).then((()=>({batchId:g.batchId,changes:Dm(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(o,c,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new oe(G)),h=h.insert(c,u),o.Vu[o.currentUser.toKey()]=h})(n,i.batchId,t),await Bt(n,i.changes),await Jr(n.remoteStore)}catch(i){const s=Xr(i,"Failed to persist write");t.reject(s)}}async function zg(r,e){const t=L(r);try{const n=await wA(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?U(o.hu,14607):i.removedDocuments.size>0&&(U(o.hu,42227),o.hu=!1))})),await Bt(t,n,e)}catch(n){await mn(n)}}function gf(r,e,t){const n=L(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=L(o);u.onlineState=c;let h=!1;u.queries.forEach(((f,m)=>{for(const g of m.Sa)g.va(c)&&(h=!0)})),h&&il(u)})(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function aR(r,e,t){const n=L(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),s=i&&i.key;if(s){let o=new oe(M.comparator);o=o.insert(s,ce.newNoDocument(s,B.min()));const c=K().add(s),u=new vs(B.min(),new Map,new oe(G),o,c);await zg(n,u),n.du=n.du.remove(s),n.Au.delete(e),ul(n)}else await Mr(n.localStore,e,!1).then((()=>Ur(n,e,t))).catch(mn)}async function cR(r,e){const t=L(r),n=e.batch.batchId;try{const i=await EA(t.localStore,e);cl(t,n,null),al(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Bt(t,i)}catch(i){await mn(i)}}async function uR(r,e,t){const n=L(r);try{const i=await(function(o,c){const u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((m=>(U(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);cl(n,e,t),al(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Bt(n,i)}catch(i){await mn(i)}}async function lR(r,e){const t=L(r);yn(t.remoteStore)||V(In,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const c=L(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(n===on)return void e.resolve();const i=t.mu.get(n)||[];i.push(e),t.mu.set(n,i)}catch(n){const i=Xr(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function al(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function cl(r,e,t){const n=L(r);let i=n.Vu[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function Ur(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((n=>{r.Ru.containsKey(n)||$g(r,n)}))}function $g(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Lr(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),ul(r))}function Kc(r,e,t){for(const n of t)n instanceof Ug?(r.Ru.addReference(n.key,e),hR(r,n)):n instanceof Bg?(V(In,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||$g(r,n.key)):F(19791,{wu:n})}function hR(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(V(In,"New document in limbo: "+t),r.Eu.add(n),ul(r))}function ul(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new M(H.fromString(e)),n=r.fu.next();r.Au.set(n,new eR(t)),r.du=r.du.insert(t,n),da(r.remoteStore,new Rt(Ge(Kr(t.path)),n,"TargetPurposeLimboResolution",We.ce))}}async function Bt(r,e,t){const n=L(r),i=[],s=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,u)=>{o.push(n.pu(u,e,t).then((h=>{if((h||t)&&n.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){i.push(h);const f=Hu.As(u.targetId,h);s.push(f)}})))})),await Promise.all(o),n.Pu.H_(i),await(async function(u,h){const f=L(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>v.forEach(h,(g=>v.forEach(g.Es,(b=>f.persistence.referenceDelegate.addReference(m,g.targetId,b))).next((()=>v.forEach(g.ds,(b=>f.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))))))}catch(m){if(!gn(m))throw m;V(Qu,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const b=f.Ms.get(g),C=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(g,N)}}})(n.localStore,s))}async function dR(r,e){const t=L(r);if(!t.currentUser.isEqual(e)){V(In,"User change. New user:",e.toKey());const n=await Eg(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((c=>{c.forEach((u=>{u.reject(new k(P.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Bt(t,n.Ls)}}function fR(r,e){const t=L(r),n=t.Au.get(e);if(n&&n.hu)return K().add(n.key);{let i=K();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}async function pR(r,e){const t=L(r),n=await Uo(t.localStore,e.query,!0),i=e.view.cu(n);return t.isPrimaryClient&&Kc(t,e.targetId,i.au),i}async function mR(r,e){const t=L(r);return Rg(t.localStore,e).then((n=>Bt(t,n)))}async function gR(r,e,t,n){const i=L(r),s=await(function(c,u){const h=L(c),f=L(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.er(m,u).next((g=>g?h.localDocuments.getDocuments(m,g):v.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?await Jr(i.remoteStore):t==="acknowledged"||t==="rejected"?(cl(i,e,n||null),al(i,e),(function(c,u){L(L(c).mutationQueue).ir(u)})(i.localStore,e)):F(6720,"Unknown batchState",{Su:t}),await Bt(i,s)):V(In,"Cannot apply mutation batch with id: "+e)}async function _R(r,e){const t=L(r);if(fa(t),ll(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await _f(t,n.toArray());t.gu=!0,await $c(t.remoteStore,!0);for(const s of i)da(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const n=[];let i=Promise.resolve();t.Iu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then((()=>(Ur(t,o),Mr(t.localStore,o,!0)))),Lr(t.remoteStore,o)})),await i,await _f(t,n),(function(o){const c=L(o);c.Au.forEach(((u,h)=>{Lr(c.remoteStore,h)})),c.Ru.Jr(),c.Au=new Map,c.du=new oe(M.comparator)})(t),t.gu=!1,await $c(t.remoteStore,!1)}}async function _f(r,e,t){const n=L(r),i=[],s=[];for(const o of e){let c;const u=n.Iu.get(o);if(u&&u.length!==0){c=await Or(n.localStore,Ge(u[0]));for(const h of u){const f=n.Tu.get(h),m=await pR(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await Ag(n.localStore,o);c=await Or(n.localStore,h),await ol(n,Gg(h),o,!1,c.resumeToken)}i.push(c)}return n.Pu.H_(s),i}function Gg(r){return Pm(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function yR(r){return(function(t){return L(L(t).persistence).Ts()})(L(r).localStore)}async function IR(r,e,t,n){const i=L(r);if(i.gu)return void V(In,"Ignoring unexpected query state notification.");const s=i.Iu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Rg(i.localStore,Cm(s[0])),c=vs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Bt(i,o,c);break}case"rejected":await Mr(i.localStore,e,!0),Ur(i,e,n);break;default:F(64155,t)}}async function TR(r,e,t){const n=fa(r);if(n.gu){for(const i of e){if(n.Iu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){V(In,"Adding an already active target "+i);continue}const s=await Ag(n.localStore,i),o=await Or(n.localStore,s);await ol(n,Gg(s),o.targetId,!1,o.resumeToken),da(n.remoteStore,o)}for(const i of t)n.Iu.has(i)&&await Mr(n.localStore,i,!1).then((()=>{Lr(n.remoteStore,i),Ur(n,i)})).catch(mn)}}function fa(r){const e=L(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=zg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aR.bind(null,e),e.Pu.H_=QA.bind(null,e.eventManager),e.Pu.yu=JA.bind(null,e.eventManager),e}function ll(r){const e=L(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}function ER(r,e,t){const n=L(r);(async function(s,o,c){try{const u=await o.getMetadata();if(await(function(b,C){const N=L(b),D=Ie(C.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(z=>N.Ii.getBundleMetadata(z,C.id))).then((z=>!!z&&z.createTime.compareTo(D)>=0))})(s.localStore,u))return await o.close(),c._completeWith((function(b){return{taskState:"Success",documentsLoaded:b.totalDocuments,bytesLoaded:b.totalBytes,totalDocuments:b.totalDocuments,totalBytes:b.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(Fg(u));const h=new XA(u,o.serializer);let f=await o.bu();for(;f;){const g=await h.Ga(f);g&&c._updateProgress(g),f=await o.bu()}const m=await h.ja(s.localStore);return await Bt(s,m.Ha,void 0),await(function(b,C){const N=L(b);return N.persistence.runTransaction("Save bundle","readwrite",(D=>N.Ii.saveBundleMetadata(D,C)))})(s.localStore,u),c._completeWith(m.progress),Promise.resolve(m.Ja)}catch(u){return Dt(In,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(n,e,t).then((i=>{n.sharedClientState.notifyBundleLoaded(i)}))}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Tg(this.persistence,new Ig,e.initialUser,this.serializer)}Cu(e){return new Gu(ha.mi,this.serializer)}Du(e){return new kg}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class wR extends as{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){U(this.persistence.referenceDelegate instanceof Fo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new fg(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new Gu((n=>Fo.mi(n,t)),this.serializer)}}class Kg extends as{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await ll(this.xu.syncEngine),await Jr(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Tg(this.persistence,new Ig,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new fg(n,e.asyncQueue,t)}Mu(e,t){const n=new Dw(t,this.persistence);return new Vw(e.asyncQueue,n)}Cu(e){const t=Wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new Ku(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Vg(),Io(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new kg}}class vR extends Kg{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof hc&&(this.sharedClientState.syncEngine={Co:gR.bind(null,t),vo:IR.bind(null,t),Fo:TR.bind(null,t),Ts:yR.bind(null,t),Do:mR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async n=>{await _R(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=Vg();if(!hc.v(t))throw new k(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class cs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await $c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HA})()}createDatastore(e){const t=Rs(e.databaseInfo.databaseId),n=(function(s){return new kA(s)})(e.databaseInfo);return(function(s,o,c,u){return new xA(s,o,c,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,o,c){return new MA(n,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>gf(this.syncEngine,t,0)),(function(){return uf.v()?new uf:new bA})())}createSyncEngine(e,t){return(function(i,s,o,c,u,h,f){const m=new tR(i,s,o,c,u,h);return f&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=L(t);V(Wn,"RemoteStore shutting down."),n.Ea.add(5),await Qr(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cs.provider={build:()=>new cs};function yf(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ye("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Ne,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.$a()?this.metadata.resolve(n.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n?.Qa)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Qu(`length string (${t}) is not valid number`);const i=await this.$u(n);return new YA(JSON.parse(i),e.length+n)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const o=L(i),c={documents:s.map((m=>ss(o.serializer,m)))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,H.emptyPath(),c,s.length),h=new Map;u.forEach((m=>{const g=Lv(o.serializer,m);h.set(g.key.toString(),g)}));const f=[];return s.forEach((m=>{const g=h.get(m.toString());U(!!g,55234,{key:m}),f.push(g)})),f})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const i=M.fromPath(n);this.mutations.push(new Ou(i,this.precondition(i)))})),await(async function(n,i){const s=L(n),o={writes:i.map((c=>os(s.serializer,c)))};await s.Go("Commit",s.serializer.databaseId,H.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{Gu:e.constructor.name});t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new k(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?he.exists(!1):he.updateTime(t):he.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new k(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return he.updateTime(t)}return he.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.zu=n.maxAttempts,this.M_=new Yu(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new RR(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((i=>{this.Yu(i)}))))})).catch((n=>{this.Yu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!_s(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!jm(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="FirestoreClient";class PR{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=Eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{V(pn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(V(pn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xr(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function fc(r,e){r.asyncQueue.verifyOperationInProgress(),V(pn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Eg(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function If(r,e){r.asyncQueue.verifyOperationInProgress();const t=await hl(r);V(pn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>hf(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>hf(e.remoteStore,i))),r._onlineComponents=e}async function hl(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(pn,"Using user provided OfflineComponentProvider");try{await fc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Dt("Error using user provided cache. Falling back to memory cache: "+t),await fc(r,new as)}}else V(pn,"Using default OfflineComponentProvider"),await fc(r,new wR(void 0));return r._offlineComponents}async function ma(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(pn,"Using user provided OnlineComponentProvider"),await If(r,r._uninitializedComponentsProvider._online)):(V(pn,"Using default OnlineComponentProvider"),await If(r,new cs))),r._onlineComponents}function Wg(r){return hl(r).then((e=>e.persistence))}function dl(r){return hl(r).then((e=>e.localStore))}function Hg(r){return ma(r).then((e=>e.remoteStore))}function fl(r){return ma(r).then((e=>e.syncEngine))}function SR(r){return ma(r).then((e=>e.datastore))}async function Br(r){const e=await ma(r),t=e.eventManager;return t.onListen=nR.bind(null,e.syncEngine),t.onUnlisten=iR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sR.bind(null,e.syncEngine),t}function CR(r){return r.asyncQueue.enqueue((async()=>{const e=await Wg(r),t=await Hg(r);return e.setNetworkEnabled(!0),(function(i){const s=L(i);return s.Ea.delete(0),bs(s)})(t)}))}function kR(r){return r.asyncQueue.enqueue((async()=>{const e=await Wg(r),t=await Hg(r);return e.setNetworkEnabled(!1),(async function(i){const s=L(i);s.Ea.add(0),await Qr(s),s.Ra.set("Offline")})(t)}))}function VR(r,e){const t=new Ne;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await(function(h,f){const m=L(h);return m.persistence.runTransaction("read document","readonly",(g=>m.localDocuments.getDocument(g,f)))})(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new k(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Xr(c,`Failed to get document '${s} from cache`);o.reject(u)}})(await dl(r),e,t))),t.promise}function Qg(r,e,t={}){const n=new Ne;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new pa({next:g=>{f.Nu(),o.enqueueAndForget((()=>rl(s,m)));const b=g.docs.has(c);!b&&g.fromCache?h.reject(new k(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&u&&u.source==="server"?h.reject(new k(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new sl(Kr(c.path),f,{includeMetadataChanges:!0,qa:!0});return nl(s,m)})(await Br(r),r.asyncQueue,e,t,n))),n.promise}function DR(r,e){const t=new Ne;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await Uo(i,s,!0),u=new qg(s,c.Qs),h=u.ru(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const u=Xr(c,`Failed to execute query '${s} against cache`);o.reject(u)}})(await dl(r),e,t))),t.promise}function Jg(r,e,t={}){const n=new Ne;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new pa({next:g=>{f.Nu(),o.enqueueAndForget((()=>rl(s,m))),g.fromCache&&u.source==="server"?h.reject(new k(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new sl(c,f,{includeMetadataChanges:!0,qa:!0});return nl(s,m)})(await Br(r),r.asyncQueue,e,t,n))),n.promise}function NR(r,e){const t=new pa(e);return r.asyncQueue.enqueueAndForget((async()=>(function(i,s){L(i).Ca.add(s),s.next()})(await Br(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(i,s){L(i).Ca.delete(s)})(await Br(r),t)))}}function xR(r,e,t,n){const i=(function(o,c){let u;return u=typeof o=="string"?$m().encode(o):o,(function(f,m){return new AR(f,m)})((function(f,m){if(f instanceof Uint8Array)return yf(f,m);if(f instanceof ArrayBuffer)return yf(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,Rs(e));r.asyncQueue.enqueueAndForget((async()=>{ER(await fl(r),i,n)}))}function OR(r,e){return r.asyncQueue.enqueue((async()=>(function(n,i){const s=L(n);return s.persistence.runTransaction("Get named query","readonly",(o=>s.Ii.getNamedQuery(o,i)))})(await dl(r),e)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="firestore.googleapis.com",Ef=!0;class wf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xg,this.ssl=Ef}else this.host=e.host,this.ssl=e.ssl??Ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ug;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nA)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yg(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ps{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new yw;switch(n.type){case"firstParty":return new ww(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Tf.get(t);n&&(V("ComponentProvider","Removing Datastore"),Tf.delete(t),n.terminate())})(this),Promise.resolve()}}function $b(r,e,t,n={}){r=Z(r,Ps);const i=qr(e),s=r._getSettings(),o={...s,emulatorOptions:r._getEmulatorOptions()},c=`${e}:${t}`;i&&(Vf(`https://${c}`),Df("Firestore",!0)),s.host!==Xg&&s.host!==c&&Dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:n};if(!an(u,o)&&(r._setSettings(u),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Se.MOCK_USER;else{h=iy(n.mockUserToken,r._app?.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Se(m)}r._authCredentials=new Iw(new $p(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xe(this.firestore,e,this._query)}}let pe=class ki{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ki(this.firestore,e,this._key)}toJSON(){return{type:ki._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(gs(t,ki._jsonSchema))return new ki(e,n||null,new M(H.fromString(t.referencePath)))}};pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:ve("string",pe._jsonSchemaVersion),referencePath:ve("string")};class mt extends xe{constructor(e,t,n){super(e,t,Kr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new M(e))}withConverter(e){return new mt(this.firestore,e,this._path)}}function Gb(r,e,...t){if(r=$(r),wu("collection","path",e),r instanceof Ps){const n=H.fromString(e,...t);return ud(n),new mt(r,null,n)}{if(!(r instanceof pe||r instanceof mt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(e,...t));return ud(n),new mt(r.firestore,null,n)}}function Kb(r,e){if(r=Z(r,Ps),wu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xe(r,null,(function(n){return new Lt(H.emptyPath(),n)})(e))}function MR(r,e,...t){if(r=$(r),arguments.length===1&&(e=Eu.newId()),wu("doc","path",e),r instanceof Ps){const n=H.fromString(e,...t);return cd(n),new pe(r,null,new M(n))}{if(!(r instanceof pe||r instanceof mt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(e,...t));return cd(n),new pe(r.firestore,r instanceof mt?r.converter:null,new M(n))}}function Wb(r,e){return r=$(r),e=$(e),(r instanceof pe||r instanceof mt)&&(e instanceof pe||e instanceof mt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function LR(r,e){return r=$(r),e=$(e),r instanceof xe&&e instanceof xe&&r.firestore===e.firestore&&Ts(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="AsyncQueue";class Af{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yu(this,"async_queue_retry"),this._c=()=>{const n=Io();n&&V(vf,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ne;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gn(e))throw e;V(vf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,ye("INTERNAL UNHANDLED ERROR: ",Rf(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=tl.createAndSchedule(this,e,t,n,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:Rf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Rf(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1})(r,["next","error","complete"])}class FR{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ne,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=-1;class Te extends Ps{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Af,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Af(e),this._firestoreClient=void 0,await e}}}function Ke(r){if(r._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Zg(r),r._firestoreClient}function Zg(r){const e=r._freezeSettings(),t=(function(i,s,o,c){return new ov(i,s,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Yg(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new PR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}})(r._componentsProvider))}function Qb(r,e){Dt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return e_(r,cs.provider,{build:n=>new Kg(n,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function Jb(r){Dt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();e_(r,cs.provider,{build:t=>new vR(t,e.cacheSizeBytes)})}function e_(r,e,t){if((r=Z(r,Te))._firestoreClient||r._terminated)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new k(P.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Zg(r)}function Yb(r){if(r._initialized&&!r._terminated)throw new k(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ne;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!ft.v())return Promise.resolve();const i=n+yg;await ft.delete(i)})(Wu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function Xb(r){return(function(t){const n=new Ne;return t.asyncQueue.enqueueAndForget((async()=>lR(await fl(t),n))),n.promise})(Ke(r=Z(r,Te)))}function Zb(r){return CR(Ke(r=Z(r,Te)))}function eP(r){return kR(Ke(r=Z(r,Te)))}function tP(r,e){const t=Ke(r=Z(r,Te)),n=new FR;return xR(t,r._databaseId,e,n),n}function nP(r,e){return OR(Ke(r=Z(r,Te)),e).then((t=>t?new xe(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(me.fromBase64String(e))}catch(t){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gs(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:ve("string",Xe._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gt._jsonSchemaVersion}}static fromJSON(e){if(gs(e,gt._jsonSchema))return new gt(e.latitude,e.longitude)}}gt._jsonSchemaVersion="firestore/geoPoint/1.0",gt._jsonSchema={type:ve("string",gt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gs(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _t(e.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:ve("string",_t._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^__.*__$/;class BR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wr(e,this.data,t,this.fieldTransforms)}}class t_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function n_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ac:r})}}class ga{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ga({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return zo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(n_(this.Ac)&&UR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class qR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rs(e)}Cc(e,t,n,i=!1){return new ga({Ac:e,methodName:t,Dc:n,path:de.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xn(r){const e=r._freezeSettings(),t=Rs(r._databaseId);return new qR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _a(r,e,t,n,i,s={}){const o=r.Cc(s.merge||s.mergeFields?2:0,e,t,i);Tl("Data must be an object, but it was:",o,n);const c=s_(n,o);let u,h;if(s.merge)u=new He(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Hc(e,m,t);if(!o.contains(g))throw new k(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);a_(f,g)||f.push(g)}u=new He(f),h=o.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,h=o.fieldTransforms;return new BR(new De(c),u,h)}class Ss extends Yn{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ss}}function r_(r,e,t){return new ga({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pl extends Yn{_toFieldTransform(e){return new ws(e.path,new Dr)}isEqual(e){return e instanceof pl}}class ml extends Yn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=r_(this,e,!0),n=this.vc.map((s=>Zn(s,t))),i=new jn(n);return new ws(e.path,i)}isEqual(e){return e instanceof ml&&an(this.vc,e.vc)}}class gl extends Yn{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=r_(this,e,!0),n=this.vc.map((s=>Zn(s,t))),i=new zn(n);return new ws(e.path,i)}isEqual(e){return e instanceof gl&&an(this.vc,e.vc)}}class _l extends Yn{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Nr(e.serializer,Om(e.serializer,this.Fc));return new ws(e.path,t)}isEqual(e){return e instanceof _l&&this.Fc===e.Fc}}function yl(r,e,t,n){const i=r.Cc(1,e,t);Tl("Data must be an object, but it was:",i,n);const s=[],o=De.empty();_n(n,((u,h)=>{const f=El(e,u,t);h=$(h);const m=i.yc(f);if(h instanceof Ss)s.push(f);else{const g=Zn(h,m);g!=null&&(s.push(f),o.set(f,g))}}));const c=new He(s);return new t_(o,c,i.fieldTransforms)}function Il(r,e,t,n,i,s){const o=r.Cc(1,e,t),c=[Hc(e,n,t)],u=[i];if(s.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(Hc(e,s[g])),u.push(s[g+1]);const h=[],f=De.empty();for(let g=c.length-1;g>=0;--g)if(!a_(h,c[g])){const b=c[g];let C=u[g];C=$(C);const N=o.yc(b);if(C instanceof Ss)h.push(b);else{const D=Zn(C,N);D!=null&&(h.push(b),f.set(b,D))}}const m=new He(h);return new t_(f,m,o.fieldTransforms)}function i_(r,e,t,n=!1){return Zn(t,r.Cc(n?4:3,e))}function Zn(r,e){if(o_(r=$(r)))return Tl("Unsupported field value:",e,r),s_(r,e);if(r instanceof Yn)return(function(n,i){if(!n_(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,i){const s=[];let o=0;for(const c of n){let u=Zn(c,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=$(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Om(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=te.fromDate(n);return{timestampValue:xr(i.serializer,s)}}if(n instanceof te){const s=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xr(i.serializer,s)}}if(n instanceof gt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xe)return{bytesValue:Wm(i.serializer,n._byteString)};if(n instanceof pe){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bu(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof _t)return(function(o,c){return{mapValue:{fields:{[Cu]:{stringValue:ku},[Cr]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return xu(c.serializer,h)}))}}}}}})(n,i);throw i.Sc(`Unsupported field value: ${Zo(n)}`)})(r,e)}function s_(r,e){const t={};return lm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(r,((n,i)=>{const s=Zn(i,e.mc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function o_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof gt||r instanceof Xe||r instanceof pe||r instanceof Yn||r instanceof _t)}function Tl(r,e,t){if(!o_(t)||!Kp(t)){const n=Zo(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function Hc(r,e,t){if((e=$(e))instanceof Zr)return e._internalPath;if(typeof e=="string")return El(r,e);throw zo("Field path arguments must be of type string or ",r,!1,void 0,t)}const jR=new RegExp("[~\\*/\\[\\]]");function El(r,e,t){if(e.search(jR)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Zr(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function zo(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new k(P.INVALID_ARGUMENT,c+r+u)}function a_(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ya("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zR extends us{data(){return super.data()}}function ya(r,e){return typeof e=="string"?El(r,e):e instanceof Zr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wl{}class Cs extends wl{}function iP(r,e,...t){let n=[];e instanceof wl&&n.push(e),n=n.concat(t),(function(s){const o=s.filter((u=>u instanceof vl)).length,c=s.filter((u=>u instanceof Ia)).length;if(o>1||o>0&&c>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Ia extends Cs{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ia(e,t,n)}_apply(e){const t=this._parse(e);return l_(e._query,t),new xe(e.firestore,e.converter,xc(e._query,t))}_parse(e){const t=Xn(e.firestore);return(function(s,o,c,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Pf(m,f);const C=[];for(const N of m)C.push(bf(u,s,N));g={arrayValue:{values:C}}}else g=bf(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Pf(m,f),g=i_(c,o,m,f==="in"||f==="not-in");return Q.create(h,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sP(r,e,t){const n=e,i=ya("where",r);return Ia._create(i,n,t)}class vl extends wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vl(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)l_(o,u),o=xc(o,u)})(e._query,t),new xe(e.firestore,e.converter,xc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Al extends Cs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Al(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new is(s,o)})(e._query,this._field,this._direction);return new xe(e.firestore,e.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new Lt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function oP(r,e="asc"){const t=e,n=ya("orderBy",r);return Al._create(n,t)}class Ta extends Cs{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ta(e,t,n)}_apply(e){return new xe(e.firestore,e.converter,xo(e._query,this._limit,this._limitType))}}function aP(r){return Wp("limit",r),Ta._create("limit",r,"F")}function cP(r){return Wp("limitToLast",r),Ta._create("limitToLast",r,"L")}class Ea extends Cs{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ea(e,t,n)}_apply(e){const t=u_(e,this.type,this._docOrFields,this._inclusive);return new xe(e.firestore,e.converter,(function(i,s){return new Lt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function uP(...r){return Ea._create("startAt",r,!0)}function lP(...r){return Ea._create("startAfter",r,!1)}class wa extends Cs{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new wa(e,t,n)}_apply(e){const t=u_(e,this.type,this._docOrFields,this._inclusive);return new xe(e.firestore,e.converter,(function(i,s){return new Lt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)})(e._query,t))}}function hP(...r){return wa._create("endBefore",r,!1)}function dP(...r){return wa._create("endAt",r,!0)}function u_(r,e,t,n){if(t[0]=$(t[0]),t[0]instanceof us)return(function(s,o,c,u,h){if(!u)throw new k(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const m of Ir(s))if(m.field.isKeyField())f.push(Bn(o,u.key));else{const g=u.data.field(m.field);if(ia(g))throw new k(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const b=m.field.canonicalString();throw new k(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}f.push(g)}return new dn(f,h)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=Xn(r.firestore);return(function(o,c,u,h,f,m){const g=o.explicitOrderBy;if(f.length>g.length)throw new k(P.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let C=0;C<f.length;C++){const N=f[C];if(g[C].field.isKeyField()){if(typeof N!="string")throw new k(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Du(o)&&N.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const D=o.path.child(H.fromString(N));if(!M.isDocumentKey(D))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const z=new M(D);b.push(Bn(c,z))}else{const D=i_(u,h,N);b.push(D)}}return new dn(b,m)})(r._query,r.firestore._databaseId,i,e,t,n)}}function bf(r,e,t){if(typeof(t=$(t))=="string"){if(t==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Du(e)&&t.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(H.fromString(t));if(!M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Bn(r,new M(n))}if(t instanceof pe)return Bn(r,t._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zo(t)}.`)}function Pf(r,e){if(!Array.isArray(r)||r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l_(r,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h_{convertValue(e,t="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return _n(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){const t=e.fields?.[Cr].arrayValue?.values?.map((n=>ue(n.doubleValue)));return new _t(t)}convertGeoPoint(e){return new gt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=sa(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ts(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=H.fromString(e);U(ig(n),9688,{name:e});const i=new Un(n.get(1),n.get(3)),s=new M(n.popFirst(5));return i.isEqual(t)||ye(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class $R extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}class xn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ot extends us{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ot._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ot._jsonSchemaVersion="firestore/documentSnapshot/1.0",ot._jsonSchema={type:ve("string",ot._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class To extends ot{data(e={}){return super.data(e)}}class at{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new To(this._firestore,this._userDataWriter,n.key,n,new xn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new To(i._firestore,i._userDataWriter,c.doc.key,c.doc,new xn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new To(i._firestore,i._userDataWriter,c.doc.key,c.doc,new xn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:GR(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=at._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Eu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function fP(r,e){return r instanceof ot&&e instanceof ot?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof at&&e instanceof at&&r._firestore===e._firestore&&LR(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(r){r=Z(r,pe);const e=Z(r.firestore,Te);return Qg(Ke(e),r._key).then((t=>Rl(e,r,t)))}at._jsonSchemaVersion="firestore/querySnapshot/1.0",at._jsonSchema={type:ve("string",at._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};class er extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function mP(r){r=Z(r,pe);const e=Z(r.firestore,Te),t=Ke(e),n=new er(e);return VR(t,r._key).then((i=>new ot(e,n,r._key,i,new xn(i!==null&&i.hasLocalMutations,!0),r.converter)))}function gP(r){r=Z(r,pe);const e=Z(r.firestore,Te);return Qg(Ke(e),r._key,{source:"server"}).then((t=>Rl(e,r,t)))}function _P(r){r=Z(r,xe);const e=Z(r.firestore,Te),t=Ke(e),n=new er(e);return c_(r._query),Jg(t,r._query).then((i=>new at(e,n,r,i)))}function yP(r){r=Z(r,xe);const e=Z(r.firestore,Te),t=Ke(e),n=new er(e);return DR(t,r._query).then((i=>new at(e,n,r,i)))}function IP(r){r=Z(r,xe);const e=Z(r.firestore,Te),t=Ke(e),n=new er(e);return Jg(t,r._query,{source:"server"}).then((i=>new at(e,n,r,i)))}function TP(r,e,t){r=Z(r,pe);const n=Z(r.firestore,Te),i=va(r.converter,e,t);return Aa(n,[_a(Xn(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,he.none())])}function EP(r,e,t,...n){r=Z(r,pe);const i=Z(r.firestore,Te),s=Xn(i);let o;return o=typeof(e=$(e))=="string"||e instanceof Zr?Il(s,"updateDoc",r._key,e,t,n):yl(s,"updateDoc",r._key,e),Aa(i,[o.toMutation(r._key,he.exists(!0))])}function wP(r){return Aa(Z(r.firestore,Te),[new Hr(r._key,he.none())])}function vP(r,e){const t=Z(r.firestore,Te),n=MR(r),i=va(r.converter,e);return Aa(t,[_a(Xn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,he.exists(!1))]).then((()=>n))}function AP(r,...e){r=$(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Wc(e[n])||(t=e[n++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Wc(e[n])){const u=e[n];e[n]=u.next?.bind(u),e[n+1]=u.error?.bind(u),e[n+2]=u.complete?.bind(u)}let s,o,c;if(r instanceof pe)o=Z(r.firestore,Te),c=Kr(r._key.path),s={next:u=>{e[n]&&e[n](Rl(o,r,u))},error:e[n+1],complete:e[n+2]};else{const u=Z(r,xe);o=Z(u.firestore,Te),c=u._query;const h=new er(o);s={next:f=>{e[n]&&e[n](new at(o,h,u,f))},error:e[n+1],complete:e[n+2]},c_(r._query)}return(function(h,f,m,g){const b=new pa(g),C=new sl(f,b,m);return h.asyncQueue.enqueueAndForget((async()=>nl(await Br(h),C))),()=>{b.Nu(),h.asyncQueue.enqueueAndForget((async()=>rl(await Br(h),C)))}})(Ke(o),c,i,s)}function RP(r,e){return NR(Ke(r=Z(r,Te)),Wc(e)?e:{next:e})}function Aa(r,e){return(function(n,i){const s=new Ne;return n.asyncQueue.enqueueAndForget((async()=>oR(await fl(n),i,s))),s.promise})(Ke(r),e)}function Rl(r,e,t){const n=t.docs.get(e._key),i=new er(r);return new ot(r,i,e._key,n,new xn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Xn(e)}set(e,t,n){this._verifyNotCommitted();const i=tn(e,this._firestore),s=va(i.converter,t,n),o=_a(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,he.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=tn(e,this._firestore);let o;return o=typeof(t=$(t))=="string"||t instanceof Zr?Il(this._dataReader,"WriteBatch.update",s._key,t,n,i):yl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,he.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tn(e,this._firestore);return this._mutations=this._mutations.concat(new Hr(t._key,he.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tn(r,e){if((r=$(r)).firestore!==e)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Xn(e)}get(e){const t=tn(e,this._firestore),n=new $R(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return F(24041);const s=i[0];if(s.isFoundDocument())return new us(this._firestore,n,s.key,s,t.converter);if(s.isNoDocument())return new us(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:s})}))}set(e,t,n){const i=tn(e,this._firestore),s=va(i.converter,t,n),o=_a(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,o),this}update(e,t,n,...i){const s=tn(e,this._firestore);let o;return o=typeof(t=$(t))=="string"||t instanceof Zr?Il(this._dataReader,"Transaction.update",s._key,t,n,i):yl(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=tn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends WR{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tn(e,this._firestore),n=new er(this._firestore);return super.get(e).then((i=>new ot(this._firestore,n,t._key,i._document,new xn(!1,!1),t.converter)))}}function PP(r,e,t){r=Z(r,Te);const n={...KR,...t};return(function(s){if(s.maxAttempts<1)throw new k(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(s,o,c){const u=new Ne;return s.asyncQueue.enqueueAndForget((async()=>{const h=await SR(s);new bR(s.asyncQueue,h,c,o,u).ju()})),u.promise})(Ke(r),(i=>e(new HR(r,i))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){return new Ss("deleteField")}function CP(){return new pl("serverTimestamp")}function kP(...r){return new ml("arrayUnion",r)}function VP(...r){return new gl("arrayRemove",r)}function DP(r){return new _l("increment",r)}(function(e,t=!0){(function(i){Gr=i})(Hn),Fn(new Ln("firestore",((n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new Te(new Tw(n.getProvider("auth-internal")),new vw(o,n.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(h.options.projectId,f)})(o,i),o);return s={useFetchStreams:t,...s},c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),bt(id,sd,e),bt(id,sd,"esm2020")})();export{lb as $,ME as A,vt as B,Ln as C,$i as D,ls as E,vb as F,io as G,vi as H,ZR as I,tb as J,ab as K,Zc as L,WT as M,ob as N,ub as O,kp as P,pb as Q,db as R,Hn as S,Fb as T,hb as U,sb as V,Ab as W,nb as X,uu as Y,ib as Z,Fn as _,QR as a,qb as a$,fb as a0,Pb as a1,Vb as a2,Ob as a3,cb as a4,It as a5,fs as a6,Xt as a7,dw as a8,Ic as a9,Ae as aA,hy as aB,Nf as aC,Lf as aD,Rb as aE,Eb as aF,Jo as aG,YR as aH,Qi as aI,Vt as aJ,dy as aK,Hb as aL,te as aM,gt as aN,Bb as aO,CP as aP,SP as aQ,kP as aR,VP as aS,DP as aT,Zr as aU,de as aV,$ as aW,MR as aX,vP as aY,Wb as aZ,fP as a_,so as aa,Jt as ab,Yt as ac,Qt as ad,Qn as ae,XR as af,qh as ag,Ub as ah,wb as ai,$T as aj,Sb as ak,Nb as al,Lb as am,GT as an,Cb as ao,Db as ap,Mb as aq,mb as ar,rb as as,yb as at,Ib as au,kb as av,_b as aw,gb as ax,Tb as ay,ly as az,_c as b,iP as b0,sP as b1,oP as b2,aP as b3,cP as b4,uP as b5,lP as b6,hP as b7,dP as b8,LR as b9,PP as bA,Ke as bB,bP as bC,Aa as bD,tP as bE,nP as bF,To as bG,h_ as bH,Z as bI,zb as bJ,Qb as bK,Jb as bL,Yb as bM,yP as ba,IP as bb,_P as bc,at as bd,AP as be,k as bf,pe as bg,M as bh,Gb as bi,TP as bj,EP as bk,wP as bl,mP as bm,gP as bn,pP as bo,ot as bp,Xe as bq,Un as br,Dt as bs,$b as bt,Zb as bu,eP as bv,Sw as bw,Xb as bx,RP as by,Kb as bz,yy as c,Y_ as d,Kf as e,gI as f,kf as g,Re as h,Gf as i,sE as j,xp as k,VE as l,JR as m,et as n,AI as o,xb as p,x as q,bt as r,RI as s,$e as t,Ct as u,ou as v,cp as w,ed as x,eb as y,FE as z};
