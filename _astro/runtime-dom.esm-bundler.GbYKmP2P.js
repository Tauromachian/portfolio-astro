import{i as N,g as p,h as x,j as I,k as H,l as K,p as B,q as T,s as _,u as D,v as z,x as G,y as P,z as $}from"./runtime-core.esm-bundler.rw6UFNar.js";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const q="http://www.w3.org/2000/svg",W="http://www.w3.org/1998/Math/MathML",a=typeof document<"u"?document:null,S=a&&a.createElement("template"),j={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?a.createElementNS(q,t):e==="mathml"?a.createElementNS(W,t):a.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{S.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const c=S.content;if(i==="svg"||i==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},U=Symbol("_vtc");function X(t,e,n){const i=t[U];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const F=Symbol("_vod"),V=Symbol("");function J(t,e,n){const i=t.style,r=i.display,o=p(n);if(n&&!o){if(e&&!p(e))for(const s in e)n[s]==null&&h(i,s,"");for(const s in n)h(i,s,n[s])}else if(o){if(e!==n){const s=i[V];s&&(n+=";"+s),i.cssText=n}}else e&&t.removeAttribute("style");F in t&&(i.display=r)}const b=/\s*!important$/;function h(t,e,n){if(T(n))n.forEach(i=>h(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Q(t,e);b.test(n)?t.setProperty(_(i),n.replace(b,""),"important"):t[i]=n}}const A=["Webkit","Moz","ms"],d={};function Q(t,e){const n=d[e];if(n)return n;let i=D(e);if(i!=="filter"&&i in t)return d[e]=i;i=z(i);for(let r=0;r<A.length;r++){const o=A[r]+i;if(o in t)return d[e]=o}return e}const v="http://www.w3.org/1999/xlink";function Y(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const o=G(e);n==null||o&&!P(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Z(t,e,n,i,r,o,s){if(e==="innerHTML"||e==="textContent"){i&&s(i,r,o),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const f=c==="OPTION"?t.getAttribute("value"):t.value,g=n??"";f!==g&&(t.value=g),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=P(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function y(t,e,n,i){t.addEventListener(e,n,i)}function k(t,e,n,i){t.removeEventListener(e,n,i)}const C=Symbol("_vei");function tt(t,e,n,i,r=null){const o=t[C]||(t[C]={}),s=o[e];if(i&&s)s.value=i;else{const[c,l]=et(e);if(i){const f=o[e]=rt(i,r);y(t,c,f,l)}else s&&(k(t,c,s,l),o[e]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function et(t){let e;if(E.test(t)){e={};let i;for(;i=t.match(E);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_(t.slice(2)),e]}let m=0;const nt=Promise.resolve(),it=()=>m||(nt.then(()=>m=0),m=Date.now());function rt(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$(st(i,n.value),e,5,[i])};return n.value=t,n.attached=it(),n}function st(t,e){if(T(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const w=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ot=(t,e,n,i,r,o,s,c,l)=>{const f=r==="svg";e==="class"?X(t,i,f):e==="style"?J(t,n,i):K(e)?B(e)||tt(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ct(t,e,i,f))?Z(t,e,i,o,s,c,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Y(t,e,i,f))};function ct(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&w(e)&&N(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return w(e)&&p(n)?!1:e in t}const lt=["ctrl","shift","alt","meta"],ft={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lt.some(n=>t[`${n}Key`]&&!e.includes(n))},dt=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...o)=>{for(let s=0;s<e.length;s++){const c=ft[e[s]];if(c&&c(r,e))return}return t(r,...o)})},L=H({patchProp:ot},j);let u,M=!1;function at(){return u||(u=x(L))}function ut(){return u=M?u:I(L),M=!0,u}const mt=(...t)=>{const e=at().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=O(i);if(!r)return;const o=e._component;!N(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,R(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e},ht=(...t)=>{const e=ut().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=O(i);if(r)return n(r,!0,R(r))},e};function R(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O(t){return p(t)?document.querySelector(t):t}export{mt as a,ht as c,dt as w};
