let x=[],ht=(s,c)=>{let r=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},l:0,lc:0,listen(a,h){return t.lc=r.push(a,h||t.l)/2,()=>{let u=r.indexOf(a);~u&&(r.splice(u,2),--t.lc||t.off())}},notify(a){let h=!x.length;for(let u=0;u<r.length;u+=2)x.push(r[u],r[u+1],t.value,a);if(h){for(let u=0;u<x.length;u+=4){let e;for(let o=u+1;!e&&(o+=4)<x.length;)x[o]<x[u+1]&&(e=x.push(x[u],x[u+1],x[u+2],x[u+3]));e||x[u](x[u+2],x[u+3])}x.length=0}},off(){},set(a){t.value!==a&&(t.value=a,t.notify())},subscribe(a,h){let u=t.listen(a,h);return a(t.value),u},value:s};return t};function $t(s,c){let r=Gt(c),t=s;for(let a of r){if(t===void 0)break;t=t[a]}return t}function jt(s,c,r){return Ft(s??{},Gt(c),r)}function Ft(s,c,r){let t=c[0];_t(s,t,c[1]);let a=Array.isArray(s)?[...s]:{...s};if(c.length===1)return r===void 0?Array.isArray(s)?a.splice(t,1):delete a[t]:a[t]=r,a;let h=Ft(s[t],c.slice(1),r);return s[t]=h,s}const lt=/(.*)\[(\d+)\]/;function Gt(s){return s.split(".").flatMap(c=>Lt(c))}function Lt(s){if(lt.test(s)){let[,c,r]=s.match(lt);return[...Lt(c),r]}return[s]}function _t(s,c,r){if(c in s)return;let t=parseInt(r??"");Number.isNaN(t)?s[c]={}:s[c]=Array(t+1).fill(void 0)}function Qt(s={}){let c=ht(s);return c.setKey=(r,t)=>{$t(c.value,r)!==t&&(c.value={...jt(c.value,r,t)},c.notify(r))},c}let Jt=(s={})=>{let c=ht(s);return c.setKey=function(r,t){typeof t>"u"?r in c.value&&(c.value={...c.value},delete c.value[r],c.notify(r)):c.value[r]!==t&&(c.value={...c.value,[r]:t},c.notify(r))},c};const L=ht("default");function Ot(){L.value==="default"?L.set("dark"):L.set("default")}function Zt(){document.documentElement.getAttribute("theme")==="default"?ot("dark"):ot("default")}function ot(s){document.documentElement.setAttribute("theme",s.trim()),localStorage.setItem("theme",s.trim())}window.addEventListener("load",()=>{const s=localStorage.getItem("theme")??"default";s&&L.set(s)});L.listen(s=>{s?ot(s):Zt()});const ut=s=>{document.getElementById(s.split("#").pop()).scrollIntoView({behavior:"smooth"})},te=document.getElementById("contactButton");te.addEventListener("click",()=>ut("contacts"));const st=Qt({loadingDictionary:{}});Jt({success:!0,text:"",active:!1});class ee extends HTMLElement{constructor(){super()}}customElements.define("section-contacts",ee);const re=document.getElementById("contact-form"),ne=document.querySelector("section-contacts");re.addEventListener("submit",s=>{ie(),s.preventDefault()});const ie=async()=>{const s=ne.dataset.buttonid;st.setKey("loadingDictionary",{[s]:!0});const c=new FormData(document.forms[0]),r=Object.fromEntries(c),t={...r,from:r.email,subject:"Work email",body:`Name: ${r.name}
Message: ${r.message}
From:${r.email}`,addresses:"betankore@yahoo.com"};let a=null;try{a=await fetch("https://portfolio-mailer-uksq.onrender.comsend-email",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}catch{M("error-message");return}if(a.error){M("error-message");return}M("success-message"),st.setKey("loadingDictionary",{[s]:!1})},M=s=>{const c=document.getElementById(s);c.style.display="block"};var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mt={exports:{}},D={exports:{}};/*!
 * Zdog v1.1.3
 * Round, flat, designer-friendly pseudo-3D engine
 * Licensed MIT
 * https://zzz.dog
 * Copyright 2020 Metafizzy
 */var dt;function S(){return dt||(dt=1,function(s){(function(c,r){s.exports?s.exports=r():c.Zdog=r()})(m,function(){var r={};r.TAU=Math.PI*2,r.extend=function(a,h){for(var u in h)a[u]=h[u];return a},r.lerp=function(a,h,u){return(h-a)*u+a},r.modulo=function(a,h){return(a%h+h)%h};var t={2:function(a){return a*a},3:function(a){return a*a*a},4:function(a){return a*a*a*a},5:function(a){return a*a*a*a*a}};return r.easeInOut=function(a,h){if(h==1)return a;a=Math.max(0,Math.min(1,a));var u=a<.5,e=u?a:1-a;e/=.5;var o=t[h]||t[2],i=o(e);return i/=2,u?i:1-i},r})}(D)),D.exports}var I={exports:{}},ft;function Dt(){return ft||(ft=1,function(s){(function(c,r){s.exports?s.exports=r():c.Zdog.CanvasRenderer=r()})(m,function(){var r={isCanvas:!0};return r.begin=function(t){t.beginPath()},r.move=function(t,a,h){t.moveTo(h.x,h.y)},r.line=function(t,a,h){t.lineTo(h.x,h.y)},r.bezier=function(t,a,h,u,e){t.bezierCurveTo(h.x,h.y,u.x,u.y,e.x,e.y)},r.closePath=function(t){t.closePath()},r.setPath=function(){},r.renderPath=function(t,a,h,u){this.begin(t,a),h.forEach(function(e){e.render(t,a,r)}),u&&this.closePath(t,a)},r.stroke=function(t,a,h,u,e){h&&(t.strokeStyle=u,t.lineWidth=e,t.stroke())},r.fill=function(t,a,h,u){h&&(t.fillStyle=u,t.fill())},r.end=function(){},r})}(I)),I.exports}var U={exports:{}},pt;function It(){return pt||(pt=1,function(s){(function(c,r){s.exports?s.exports=r():c.Zdog.SvgRenderer=r()})(m,function(){var r={isSvg:!0},t=r.round=function(h){return Math.round(h*1e3)/1e3};function a(h){return t(h.x)+","+t(h.y)+" "}return r.begin=function(){},r.move=function(h,u,e){return"M"+a(e)},r.line=function(h,u,e){return"L"+a(e)},r.bezier=function(h,u,e,o,i){return"C"+a(e)+a(o)+a(i)},r.closePath=function(){return"Z"},r.setPath=function(h,u,e){u.setAttribute("d",e)},r.renderPath=function(h,u,e,o){var i="";e.forEach(function(n){i+=n.render(h,u,r)}),o&&(i+=this.closePath(h,u)),this.setPath(h,u,i)},r.stroke=function(h,u,e,o,i){e&&(u.setAttribute("stroke",o),u.setAttribute("stroke-width",i))},r.fill=function(h,u,e,o){var i=e?o:"none";u.setAttribute("fill",i)},r.end=function(h,u){h.appendChild(u)},r})}(U)),U.exports}var V={exports:{}},vt;function T(){return vt||(vt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S());else{var t=c.Zdog;t.Vector=r(t)}})(m,function(r){function t(e){this.set(e)}var a=r.TAU;t.prototype.set=function(e){return this.x=e&&e.x||0,this.y=e&&e.y||0,this.z=e&&e.z||0,this},t.prototype.write=function(e){return e?(this.x=e.x!=null?e.x:this.x,this.y=e.y!=null?e.y:this.y,this.z=e.z!=null?e.z:this.z,this):this},t.prototype.rotate=function(e){if(e)return this.rotateZ(e.z),this.rotateY(e.y),this.rotateX(e.x),this},t.prototype.rotateZ=function(e){h(this,e,"x","y")},t.prototype.rotateX=function(e){h(this,e,"y","z")},t.prototype.rotateY=function(e){h(this,e,"x","z")};function h(e,o,i,n){if(!(!o||o%a===0)){var l=Math.cos(o),d=Math.sin(o),p=e[i],f=e[n];e[i]=p*l-f*d,e[n]=f*l+p*d}}t.prototype.isSame=function(e){return e?this.x===e.x&&this.y===e.y&&this.z===e.z:!1},t.prototype.add=function(e){return e?(this.x+=e.x||0,this.y+=e.y||0,this.z+=e.z||0,this):this},t.prototype.subtract=function(e){return e?(this.x-=e.x||0,this.y-=e.y||0,this.z-=e.z||0,this):this},t.prototype.multiply=function(e){return e==null?this:(typeof e=="number"?(this.x*=e,this.y*=e,this.z*=e):(this.x*=e.x!=null?e.x:1,this.y*=e.y!=null?e.y:1,this.z*=e.z!=null?e.z:1),this)},t.prototype.transform=function(e,o,i){return this.multiply(i),this.rotate(o),this.add(e),this},t.prototype.lerp=function(e,o){return this.x=r.lerp(this.x,e.x||0,o),this.y=r.lerp(this.y,e.y||0,o),this.z=r.lerp(this.z,e.z||0,o),this},t.prototype.magnitude=function(){var e=this.x*this.x+this.y*this.y+this.z*this.z;return u(e)};function u(e){return Math.abs(e-1)<1e-8?1:Math.sqrt(e)}return t.prototype.magnitude2d=function(){var e=this.x*this.x+this.y*this.y;return u(e)},t.prototype.copy=function(){return new t(this)},t})}(V)),V.exports}var N={exports:{}},yt;function A(){return yt||(yt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),T(),Dt(),It());else{var t=c.Zdog;t.Anchor=r(t,t.Vector,t.CanvasRenderer,t.SvgRenderer)}})(m,function(r,t,a,h){var u=r.TAU,e={x:1,y:1,z:1};function o(n){this.create(n||{})}o.prototype.create=function(n){this.children=[],r.extend(this,this.constructor.defaults),this.setOptions(n),this.translate=new t(n.translate),this.rotate=new t(n.rotate),this.scale=new t(e).multiply(this.scale),this.origin=new t,this.renderOrigin=new t,this.addTo&&this.addTo.addChild(this)},o.defaults={},o.optionKeys=Object.keys(o.defaults).concat(["rotate","translate","scale","addTo"]),o.prototype.setOptions=function(n){var l=this.constructor.optionKeys;for(var d in n)l.indexOf(d)!=-1&&(this[d]=n[d])},o.prototype.addChild=function(n){this.children.indexOf(n)==-1&&(n.remove(),n.addTo=this,this.children.push(n))},o.prototype.removeChild=function(n){var l=this.children.indexOf(n);l!=-1&&this.children.splice(l,1)},o.prototype.remove=function(){this.addTo&&this.addTo.removeChild(this)},o.prototype.update=function(){this.reset(),this.children.forEach(function(n){n.update()}),this.transform(this.translate,this.rotate,this.scale)},o.prototype.reset=function(){this.renderOrigin.set(this.origin)},o.prototype.transform=function(n,l,d){this.renderOrigin.transform(n,l,d),this.children.forEach(function(p){p.transform(n,l,d)})},o.prototype.updateGraph=function(){this.update(),this.updateFlatGraph(),this.flatGraph.forEach(function(n){n.updateSortValue()}),this.flatGraph.sort(o.shapeSorter)},o.shapeSorter=function(n,l){return n.sortValue-l.sortValue},Object.defineProperty(o.prototype,"flatGraph",{get:function(){return this._flatGraph||this.updateFlatGraph(),this._flatGraph},set:function(n){this._flatGraph=n}}),o.prototype.updateFlatGraph=function(){this.flatGraph=this.getFlatGraph()},o.prototype.getFlatGraph=function(){var n=[this];return this.addChildFlatGraph(n)},o.prototype.addChildFlatGraph=function(n){return this.children.forEach(function(l){var d=l.getFlatGraph();Array.prototype.push.apply(n,d)}),n},o.prototype.updateSortValue=function(){this.sortValue=this.renderOrigin.z},o.prototype.render=function(){},o.prototype.renderGraphCanvas=function(n){if(!n)throw new Error("ctx is "+n+". Canvas context required for render. Check .renderGraphCanvas( ctx ).");this.flatGraph.forEach(function(l){l.render(n,a)})},o.prototype.renderGraphSvg=function(n){if(!n)throw new Error("svg is "+n+". SVG required for render. Check .renderGraphSvg( svg ).");this.flatGraph.forEach(function(l){l.render(n,h)})},o.prototype.copy=function(n){var l={},d=this.constructor.optionKeys;d.forEach(function(f){l[f]=this[f]},this),r.extend(l,n);var p=this.constructor;return new p(l)},o.prototype.copyGraph=function(n){var l=this.copy(n);return this.children.forEach(function(d){d.copyGraph({addTo:l})}),l},o.prototype.normalizeRotate=function(){this.rotate.x=r.modulo(this.rotate.x,u),this.rotate.y=r.modulo(this.rotate.y,u),this.rotate.z=r.modulo(this.rotate.z,u)};function i(n){return function(l){function d(p){this.create(p||{})}return d.prototype=Object.create(n.prototype),d.prototype.constructor=d,d.defaults=r.extend({},n.defaults),r.extend(d.defaults,l),d.optionKeys=n.optionKeys.slice(0),Object.keys(d.defaults).forEach(function(p){!d.optionKeys.indexOf(p)!=1&&d.optionKeys.push(p)}),d.subclass=i(d),d}}return o.subclass=i(o),o})}(N)),N.exports}var W={exports:{}},gt;function Ut(){return gt||(gt=1,function(s){(function(c,r){s.exports?s.exports=r():c.Zdog.Dragger=r()})(m,function(){var r=typeof window<"u",t="mousedown",a="mousemove",h="mouseup";r&&(window.PointerEvent?(t="pointerdown",a="pointermove",h="pointerup"):"ontouchstart"in window&&(t="touchstart",a="touchmove",h="touchend"));function u(){}function e(o){this.create(o||{})}return e.prototype.create=function(o){this.onDragStart=o.onDragStart||u,this.onDragMove=o.onDragMove||u,this.onDragEnd=o.onDragEnd||u,this.bindDrag(o.startElement)},e.prototype.bindDrag=function(o){o=this.getQueryElement(o),o&&(o.style.touchAction="none",o.addEventListener(t,this))},e.prototype.getQueryElement=function(o){return typeof o=="string"&&(o=document.querySelector(o)),o},e.prototype.handleEvent=function(o){var i=this["on"+o.type];i&&i.call(this,o)},e.prototype.onmousedown=e.prototype.onpointerdown=function(o){this.dragStart(o,o)},e.prototype.ontouchstart=function(o){this.dragStart(o,o.changedTouches[0])},e.prototype.dragStart=function(o,i){o.preventDefault(),this.dragStartX=i.pageX,this.dragStartY=i.pageY,r&&(window.addEventListener(a,this),window.addEventListener(h,this)),this.onDragStart(i)},e.prototype.ontouchmove=function(o){this.dragMove(o,o.changedTouches[0])},e.prototype.onmousemove=e.prototype.onpointermove=function(o){this.dragMove(o,o)},e.prototype.dragMove=function(o,i){o.preventDefault();var n=i.pageX-this.dragStartX,l=i.pageY-this.dragStartY;this.onDragMove(i,n,l)},e.prototype.onmouseup=e.prototype.onpointerup=e.prototype.ontouchend=e.prototype.dragEnd=function(){window.removeEventListener(a,this),window.removeEventListener(h,this),this.onDragEnd()},e})}(W)),W.exports}var H={exports:{}},mt;function oe(){return mt||(mt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),A(),Ut());else{var t=c.Zdog;t.Illustration=r(t,t.Anchor,t.Dragger)}})(m,function(r,t,a){function h(){}var u=r.TAU,e=t.subclass({element:void 0,centered:!0,zoom:1,dragRotate:!1,resize:!1,onPrerender:h,onDragStart:h,onDragMove:h,onDragEnd:h,onResize:h});r.extend(e.prototype,a.prototype),e.prototype.create=function(i){t.prototype.create.call(this,i),a.prototype.create.call(this,i),this.setElement(this.element),this.setDragRotate(this.dragRotate),this.setResize(this.resize)},e.prototype.setElement=function(i){if(i=this.getQueryElement(i),!i)throw new Error("Zdog.Illustration element required. Set to "+i);var n=i.nodeName.toLowerCase();n=="canvas"?this.setCanvas(i):n=="svg"&&this.setSvg(i)},e.prototype.setSize=function(i,n){i=Math.round(i),n=Math.round(n),this.isCanvas?this.setSizeCanvas(i,n):this.isSvg&&this.setSizeSvg(i,n)},e.prototype.setResize=function(i){this.resize=i,this.resizeListener||(this.resizeListener=this.onWindowResize.bind(this)),i?(window.addEventListener("resize",this.resizeListener),this.onWindowResize()):window.removeEventListener("resize",this.resizeListener)},e.prototype.onWindowResize=function(){this.setMeasuredSize(),this.onResize(this.width,this.height)},e.prototype.setMeasuredSize=function(){var i,n,l=this.resize=="fullscreen";if(l)i=window.innerWidth,n=window.innerHeight;else{var d=this.element.getBoundingClientRect();i=d.width,n=d.height}this.setSize(i,n)},e.prototype.renderGraph=function(i){this.isCanvas?this.renderGraphCanvas(i):this.isSvg&&this.renderGraphSvg(i)},e.prototype.updateRenderGraph=function(i){this.updateGraph(),this.renderGraph(i)},e.prototype.setCanvas=function(i){this.element=i,this.isCanvas=!0,this.ctx=this.element.getContext("2d"),this.setSizeCanvas(i.width,i.height)},e.prototype.setSizeCanvas=function(i,n){this.width=i,this.height=n;var l=this.pixelRatio=window.devicePixelRatio||1;this.element.width=this.canvasWidth=i*l,this.element.height=this.canvasHeight=n*l;var d=l>1&&!this.resize;d&&(this.element.style.width=i+"px",this.element.style.height=n+"px")},e.prototype.renderGraphCanvas=function(i){i=i||this,this.prerenderCanvas(),t.prototype.renderGraphCanvas.call(i,this.ctx),this.postrenderCanvas()},e.prototype.prerenderCanvas=function(){var i=this.ctx;if(i.lineCap="round",i.lineJoin="round",i.clearRect(0,0,this.canvasWidth,this.canvasHeight),i.save(),this.centered){var n=this.width/2*this.pixelRatio,l=this.height/2*this.pixelRatio;i.translate(n,l)}var d=this.pixelRatio*this.zoom;i.scale(d,d),this.onPrerender(i)},e.prototype.postrenderCanvas=function(){this.ctx.restore()},e.prototype.setSvg=function(i){this.element=i,this.isSvg=!0,this.pixelRatio=1;var n=i.getAttribute("width"),l=i.getAttribute("height");this.setSizeSvg(n,l)},e.prototype.setSizeSvg=function(i,n){this.width=i,this.height=n;var l=i/this.zoom,d=n/this.zoom,p=this.centered?-l/2:0,f=this.centered?-d/2:0;this.element.setAttribute("viewBox",p+" "+f+" "+l+" "+d),this.resize?(this.element.removeAttribute("width"),this.element.removeAttribute("height")):(this.element.setAttribute("width",i),this.element.setAttribute("height",n))},e.prototype.renderGraphSvg=function(i){i=i||this,o(this.element),this.onPrerender(this.element),t.prototype.renderGraphSvg.call(i,this.element)};function o(i){for(;i.firstChild;)i.removeChild(i.firstChild)}return e.prototype.setDragRotate=function(i){if(i)i===!0&&(i=this);else return;this.dragRotate=i,this.bindDrag(this.element)},e.prototype.dragStart=function(){this.dragStartRX=this.dragRotate.rotate.x,this.dragStartRY=this.dragRotate.rotate.y,a.prototype.dragStart.apply(this,arguments)},e.prototype.dragMove=function(i,n){var l=n.pageX-this.dragStartX,d=n.pageY-this.dragStartY,p=Math.min(this.width,this.height),f=l/p*u,v=d/p*u;this.dragRotate.rotate.x=this.dragStartRX-v,this.dragRotate.rotate.y=this.dragStartRY-f,a.prototype.dragMove.apply(this,arguments)},e})}(H)),H.exports}var X={exports:{}},xt;function O(){return xt||(xt=1,function(s){(function(c,r){if(s.exports)s.exports=r(T());else{var t=c.Zdog;t.PathCommand=r(t.Vector)}})(m,function(r){function t(e,o,i){this.method=e,this.points=o.map(a),this.renderPoints=o.map(h),this.previousPoint=i,this.endRenderPoint=this.renderPoints[this.renderPoints.length-1],e=="arc"&&(this.controlPoints=[new r,new r])}function a(e){return e instanceof r?e:new r(e)}function h(e){return new r(e)}t.prototype.reset=function(){var e=this.points;this.renderPoints.forEach(function(o,i){var n=e[i];o.set(n)})},t.prototype.transform=function(e,o,i){this.renderPoints.forEach(function(n){n.transform(e,o,i)})},t.prototype.render=function(e,o,i){return this[this.method](e,o,i)},t.prototype.move=function(e,o,i){return i.move(e,o,this.renderPoints[0])},t.prototype.line=function(e,o,i){return i.line(e,o,this.renderPoints[0])},t.prototype.bezier=function(e,o,i){var n=this.renderPoints[0],l=this.renderPoints[1],d=this.renderPoints[2];return i.bezier(e,o,n,l,d)};var u=9/16;return t.prototype.arc=function(e,o,i){var n=this.previousPoint,l=this.renderPoints[0],d=this.renderPoints[1],p=this.controlPoints[0],f=this.controlPoints[1];return p.set(n).lerp(l,u),f.set(d).lerp(l,u),i.bezier(e,o,p,f,d)},t})}(X)),X.exports}var K={exports:{}},wt;function k(){return wt||(wt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),T(),O(),A());else{var t=c.Zdog;t.Shape=r(t,t.Vector,t.PathCommand,t.Anchor)}})(m,function(r,t,a,h){var u=h.subclass({stroke:1,fill:!1,color:"#333",closed:!0,visible:!0,path:[{}],front:{z:1},backface:!0});u.prototype.create=function(n){h.prototype.create.call(this,n),this.updatePath(),this.front=new t(n.front||this.front),this.renderFront=new t(this.front),this.renderNormal=new t};var e=["move","line","bezier","arc"];u.prototype.updatePath=function(){this.setPath(),this.updatePathCommands()},u.prototype.setPath=function(){},u.prototype.updatePathCommands=function(){var n;this.pathCommands=this.path.map(function(l,d){var p=Object.keys(l),f=p[0],v=l[f],y=p.length==1&&e.indexOf(f)!=-1;y||(f="line",v=l);var g=f=="line"||f=="move",w=Array.isArray(v);g&&!w&&(v=[v]),f=d===0?"move":f;var b=new a(f,v,n);return n=b.endRenderPoint,b})},u.prototype.reset=function(){this.renderOrigin.set(this.origin),this.renderFront.set(this.front),this.pathCommands.forEach(function(n){n.reset()})},u.prototype.transform=function(n,l,d){this.renderOrigin.transform(n,l,d),this.renderFront.transform(n,l,d),this.renderNormal.set(this.renderOrigin).subtract(this.renderFront),this.pathCommands.forEach(function(p){p.transform(n,l,d)}),this.children.forEach(function(p){p.transform(n,l,d)})},u.prototype.updateSortValue=function(){var n=this.pathCommands.length,l=this.pathCommands[0].endRenderPoint,d=this.pathCommands[n-1].endRenderPoint,p=n>2&&l.isSame(d);p&&(n-=1);for(var f=0,v=0;v<n;v++)f+=this.pathCommands[v].endRenderPoint.z;this.sortValue=f/n},u.prototype.render=function(n,l){var d=this.pathCommands.length;if(!(!this.visible||!d)&&(this.isFacingBack=this.renderNormal.z>0,!(!this.backface&&this.isFacingBack))){if(!l)throw new Error("Zdog renderer required. Set to "+l);var p=d==1;l.isCanvas&&p?this.renderCanvasDot(n,l):this.renderPath(n,l)}};var o=r.TAU;u.prototype.renderCanvasDot=function(n){var l=this.getLineWidth();if(l){n.fillStyle=this.getRenderColor();var d=this.pathCommands[0].endRenderPoint;n.beginPath();var p=l/2;n.arc(d.x,d.y,p,0,o),n.fill()}},u.prototype.getLineWidth=function(){return this.stroke?this.stroke==!0?1:this.stroke:0},u.prototype.getRenderColor=function(){var n=typeof this.backface=="string"&&this.isFacingBack,l=n?this.backface:this.color;return l},u.prototype.renderPath=function(n,l){var d=this.getRenderElement(n,l),p=this.pathCommands.length==2&&this.pathCommands[1].method=="line",f=!p&&this.closed,v=this.getRenderColor();l.renderPath(n,d,this.pathCommands,f),l.stroke(n,d,this.stroke,v,this.getLineWidth()),l.fill(n,d,this.fill,v),l.end(n,d)};var i="http://www.w3.org/2000/svg";return u.prototype.getRenderElement=function(n,l){if(l.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(i,"path"),this.svgElement.setAttribute("stroke-linecap","round"),this.svgElement.setAttribute("stroke-linejoin","round")),this.svgElement},u})}(K)),K.exports}var Y={exports:{}},bt;function Vt(){return bt||(bt=1,function(s){(function(c,r){if(s.exports)s.exports=r(A());else{var t=c.Zdog;t.Group=r(t.Anchor)}})(m,function(r){var t=r.subclass({updateSort:!1,visible:!0});return t.prototype.updateSortValue=function(){var a=0;this.flatGraph.forEach(function(h){h.updateSortValue(),a+=h.sortValue}),this.sortValue=a/this.flatGraph.length,this.updateSort&&this.flatGraph.sort(r.shapeSorter)},t.prototype.render=function(a,h){this.visible&&this.flatGraph.forEach(function(u){u.render(a,h)})},t.prototype.updateFlatGraph=function(){var a=[];this.flatGraph=this.addChildFlatGraph(a)},t.prototype.getFlatGraph=function(){return[this]},t})}(Y)),Y.exports}var $={exports:{}},St;function Nt(){return St||(St=1,function(s){(function(c,r){if(s.exports)s.exports=r(k());else{var t=c.Zdog;t.Rect=r(t.Shape)}})(m,function(r){var t=r.subclass({width:1,height:1});return t.prototype.setPath=function(){var a=this.width/2,h=this.height/2;this.path=[{x:-a,y:-h},{x:a,y:-h},{x:a,y:h},{x:-a,y:h}]},t})}($)),$.exports}var j={exports:{}},Ct;function se(){return Ct||(Ct=1,function(s){(function(c,r){if(s.exports)s.exports=r(k());else{var t=c.Zdog;t.RoundedRect=r(t.Shape)}})(m,function(r){var t=r.subclass({width:1,height:1,cornerRadius:.25,closed:!1});return t.prototype.setPath=function(){var a=this.width/2,h=this.height/2,u=Math.min(a,h),e=Math.min(this.cornerRadius,u),o=a-e,i=h-e,n=[{x:o,y:-h},{arc:[{x:a,y:-h},{x:a,y:-i}]}];i&&n.push({x:a,y:i}),n.push({arc:[{x:a,y:h},{x:o,y:h}]}),o&&n.push({x:-o,y:h}),n.push({arc:[{x:-a,y:h},{x:-a,y:i}]}),i&&n.push({x:-a,y:-i}),n.push({arc:[{x:-a,y:-h},{x:-o,y:-h}]}),o&&n.push({x:o,y:-h}),this.path=n},t})}(j)),j.exports}var _={exports:{}},Et;function q(){return Et||(Et=1,function(s){(function(c,r){if(s.exports)s.exports=r(k());else{var t=c.Zdog;t.Ellipse=r(t.Shape)}})(m,function(r){var t=r.subclass({diameter:1,width:void 0,height:void 0,quarters:4,closed:!1});return t.prototype.setPath=function(){var a=this.width!=null?this.width:this.diameter,h=this.height!=null?this.height:this.diameter,u=a/2,e=h/2;this.path=[{x:0,y:-e},{arc:[{x:u,y:-e},{x:u,y:0}]}],this.quarters>1&&this.path.push({arc:[{x:u,y:e},{x:0,y:e}]}),this.quarters>2&&this.path.push({arc:[{x:-u,y:e},{x:-u,y:0}]}),this.quarters>3&&this.path.push({arc:[{x:-u,y:-e},{x:0,y:-e}]})},t})}(_)),_.exports}var Q={exports:{}},Rt;function ae(){return Rt||(Rt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),k());else{var t=c.Zdog;t.Polygon=r(t,t.Shape)}})(m,function(r,t){var a=t.subclass({sides:3,radius:.5}),h=r.TAU;return a.prototype.setPath=function(){this.path=[];for(var u=0;u<this.sides;u++){var e=u/this.sides*h-h/4,o=Math.cos(e)*this.radius,i=Math.sin(e)*this.radius;this.path.push({x:o,y:i})}},a})}(Q)),Q.exports}var J={exports:{}},zt;function he(){return zt||(zt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),T(),A(),q());else{var t=c.Zdog;t.Hemisphere=r(t,t.Vector,t.Anchor,t.Ellipse)}})(m,function(r,t,a,h){var u=h.subclass({fill:!0}),e=r.TAU;u.prototype.create=function(){h.prototype.create.apply(this,arguments),this.apex=new a({addTo:this,translate:{z:this.diameter/2}}),this.renderCentroid=new t},u.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,3/8),this.sortValue=this.renderCentroid.z},u.prototype.render=function(i,n){this.renderDome(i,n),h.prototype.render.apply(this,arguments)},u.prototype.renderDome=function(i,n){if(this.visible){var l=this.getDomeRenderElement(i,n),d=Math.atan2(this.renderNormal.y,this.renderNormal.x),p=this.diameter/2*this.renderNormal.magnitude(),f=this.renderOrigin.x,v=this.renderOrigin.y;if(n.isCanvas){var y=d+e/4,g=d-e/4;i.beginPath(),i.arc(f,v,p,y,g)}else n.isSvg&&(d=(d-e/4)/e*360,this.domeSvgElement.setAttribute("d","M "+-p+",0 A "+p+","+p+" 0 0 1 "+p+",0"),this.domeSvgElement.setAttribute("transform","translate("+f+","+v+" ) rotate("+d+")"));n.stroke(i,l,this.stroke,this.color,this.getLineWidth()),n.fill(i,l,this.fill,this.color),n.end(i,l)}};var o="http://www.w3.org/2000/svg";return u.prototype.getDomeRenderElement=function(i,n){if(n.isSvg)return this.domeSvgElement||(this.domeSvgElement=document.createElementNS(o,"path"),this.domeSvgElement.setAttribute("stroke-linecap","round"),this.domeSvgElement.setAttribute("stroke-linejoin","round")),this.domeSvgElement},u})}(J)),J.exports}var Z={exports:{}},Pt;function ue(){return Pt||(Pt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),O(),k(),Vt(),q());else{var t=c.Zdog;t.Cylinder=r(t,t.PathCommand,t.Shape,t.Group,t.Ellipse)}})(m,function(r,t,a,h,u){function e(){}var o=h.subclass({color:"#333",updateSort:!0});o.prototype.create=function(){h.prototype.create.apply(this,arguments),this.pathCommands=[new t("move",[{}]),new t("line",[{}])]},o.prototype.render=function(f,v){this.renderCylinderSurface(f,v),h.prototype.render.apply(this,arguments)},o.prototype.renderCylinderSurface=function(f,v){if(this.visible){var y=this.getRenderElement(f,v),g=this.frontBase,w=this.rearBase,b=g.renderNormal.magnitude(),C=g.diameter*b+g.getLineWidth();this.pathCommands[0].renderPoints[0].set(g.renderOrigin),this.pathCommands[1].renderPoints[0].set(w.renderOrigin),v.isCanvas&&(f.lineCap="butt"),v.renderPath(f,y,this.pathCommands),v.stroke(f,y,!0,this.color,C),v.end(f,y),v.isCanvas&&(f.lineCap="round")}};var i="http://www.w3.org/2000/svg";o.prototype.getRenderElement=function(f,v){if(v.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(i,"path")),this.svgElement},o.prototype.copyGraph=e;var n=u.subclass();n.prototype.copyGraph=e;var l=a.subclass({diameter:1,length:1,frontFace:void 0,fill:!0}),d=r.TAU;l.prototype.create=function(){a.prototype.create.apply(this,arguments),this.group=new o({addTo:this,color:this.color,visible:this.visible});var f=this.length/2,v=this.backface||!0;this.frontBase=this.group.frontBase=new u({addTo:this.group,diameter:this.diameter,translate:{z:f},rotate:{y:d/2},color:this.color,stroke:this.stroke,fill:this.fill,backface:this.frontFace||v,visible:this.visible}),this.rearBase=this.group.rearBase=this.frontBase.copy({translate:{z:-f},rotate:{y:0},backface:v})},l.prototype.render=function(){};var p=["stroke","fill","color","visible"];return p.forEach(function(f){var v="_"+f;Object.defineProperty(l.prototype,f,{get:function(){return this[v]},set:function(y){this[v]=y,this.frontBase&&(this.frontBase[f]=y,this.rearBase[f]=y,this.group[f]=y)}})}),l})}(Z)),Z.exports}var tt={exports:{}},At;function ce(){return At||(At=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),T(),O(),A(),q());else{var t=c.Zdog;t.Cone=r(t,t.Vector,t.PathCommand,t.Anchor,t.Ellipse)}})(m,function(r,t,a,h,u){var e=u.subclass({length:1,fill:!0}),o=r.TAU;e.prototype.create=function(){u.prototype.create.apply(this,arguments),this.apex=new h({addTo:this,translate:{z:this.length}}),this.renderApex=new t,this.renderCentroid=new t,this.tangentA=new t,this.tangentB=new t,this.surfacePathCommands=[new a("move",[{}]),new a("line",[{}]),new a("line",[{}])]},e.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,1/3),this.sortValue=this.renderCentroid.z},e.prototype.render=function(n,l){this.renderConeSurface(n,l),u.prototype.render.apply(this,arguments)},e.prototype.renderConeSurface=function(n,l){if(this.visible){this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);var d=this.renderNormal.magnitude(),p=this.renderApex.magnitude2d(),f=this.renderNormal.magnitude2d(),v=Math.acos(f/d),y=Math.sin(v),g=this.diameter/2*d,w=g*y<p;if(w){var b=Math.atan2(this.renderNormal.y,this.renderNormal.x)+o/2,C=p/y,B=Math.acos(g/C),R=this.tangentA,E=this.tangentB;R.x=Math.cos(B)*g*y,R.y=Math.sin(B)*g,E.set(this.tangentA),E.y*=-1,R.rotateZ(b),E.rotateZ(b),R.add(this.renderOrigin),E.add(this.renderOrigin),this.setSurfaceRenderPoint(0,R),this.setSurfaceRenderPoint(1,this.apex.renderOrigin),this.setSurfaceRenderPoint(2,E);var z=this.getSurfaceRenderElement(n,l);l.renderPath(n,z,this.surfacePathCommands),l.stroke(n,z,this.stroke,this.color,this.getLineWidth()),l.fill(n,z,this.fill,this.color),l.end(n,z)}}};var i="http://www.w3.org/2000/svg";return e.prototype.getSurfaceRenderElement=function(n,l){if(l.isSvg)return this.surfaceSvgElement||(this.surfaceSvgElement=document.createElementNS(i,"path"),this.surfaceSvgElement.setAttribute("stroke-linecap","round"),this.surfaceSvgElement.setAttribute("stroke-linejoin","round")),this.surfaceSvgElement},e.prototype.setSurfaceRenderPoint=function(n,l){var d=this.surfacePathCommands[n].renderPoints[0];d.set(l)},e})}(tt)),tt.exports}var et={exports:{}},kt;function le(){return kt||(kt=1,function(s){(function(c,r){if(s.exports)s.exports=r(S(),A(),k(),Nt());else{var t=c.Zdog;t.Box=r(t,t.Anchor,t.Shape,t.Rect)}})(m,function(r,t,a,h){var u=h.subclass();u.prototype.copyGraph=function(){};var e=r.TAU,o=["frontFace","rearFace","leftFace","rightFace","topFace","bottomFace"],i=r.extend({},a.defaults);delete i.path,o.forEach(function(d){i[d]=!0}),r.extend(i,{width:1,height:1,depth:1,fill:!0});var n=t.subclass(i);n.prototype.create=function(d){t.prototype.create.call(this,d),this.updatePath(),this.fill=this.fill},n.prototype.updatePath=function(){o.forEach(function(d){this[d]=this[d]},this)},o.forEach(function(d){var p="_"+d;Object.defineProperty(n.prototype,d,{get:function(){return this[p]},set:function(f){this[p]=f,this.setFace(d,f)}})}),n.prototype.setFace=function(d,p){var f=d+"Rect",v=this[f];if(!p){this.removeChild(v);return}var y=this.getFaceOptions(d);y.color=typeof p=="string"?p:this.color,v?v.setOptions(y):v=this[f]=new u(y),v.updatePath(),this.addChild(v)},n.prototype.getFaceOptions=function(d){return{frontFace:{width:this.width,height:this.height,translate:{z:this.depth/2}},rearFace:{width:this.width,height:this.height,translate:{z:-this.depth/2},rotate:{y:e/2}},leftFace:{width:this.depth,height:this.height,translate:{x:-this.width/2},rotate:{y:-e/4}},rightFace:{width:this.depth,height:this.height,translate:{x:this.width/2},rotate:{y:e/4}},topFace:{width:this.width,height:this.depth,translate:{y:-this.height/2},rotate:{x:-e/4}},bottomFace:{width:this.width,height:this.depth,translate:{y:this.height/2},rotate:{x:e/4}}}[d]};var l=["color","stroke","fill","backface","front","visible"];return l.forEach(function(d){var p="_"+d;Object.defineProperty(n.prototype,d,{get:function(){return this[p]},set:function(f){this[p]=f,o.forEach(function(v){var y=this[v+"Rect"],g=typeof this[v]=="string",w=d=="color"&&g;y&&!w&&(y[d]=f)},this)}})}),n})}(et)),et.exports}(function(s){(function(c,r){s.exports&&(s.exports=r(S(),Dt(),It(),T(),A(),Ut(),oe(),O(),k(),Vt(),Nt(),se(),q(),ae(),he(),ue(),ce(),le()))})(m,function(r,t,a,h,u,e,o,i,n,l,d,p,f,v,y,g,w,b){return r.CanvasRenderer=t,r.SvgRenderer=a,r.Vector=h,r.Anchor=u,r.Dragger=e,r.Illustration=o,r.PathCommand=i,r.Shape=n,r.Group=l,r.Rect=d,r.RoundedRect=p,r.Ellipse=f,r.Polygon=v,r.Hemisphere=y,r.Cylinder=g,r.Cone=w,r.Box=b,r})})(Mt);var de=Mt.exports;const P=qt(de);let Tt;var fe=function(c,r){clearTimeout(Tt),Tt=setTimeout(()=>{c()},r||200)};const Wt=qt(fe),Bt=document.getElementById("zdog-container");let F;const Ht=()=>{const s=document.getElementById("zdog");let c=64,r=Math.min(Bt.offsetWidth,window.innerHeight),t=Math.floor(r/c);s.setAttribute("width",`${c*t}`),s.setAttribute("height",`${c*t}`);let a=!0,h=P.TAU;F=new P.Illustration({element:s,zoom:t,dragRotate:Bt.offsetWidth>600,onDragStart:function(){a=!1}});const u=[{x:9,y:0,z:0},{x:0,y:9,z:0},{x:0,y:0,z:9},{x:9,y:9,z:0},{x:0,y:9,z:9},{x:9,y:0,z:9},{x:9,y:9,z:9},{x:9,y:9,z:9},{x:-9,y:0,z:0},{x:0,y:-9,z:0},{x:0,y:0,z:-9},{x:-9,y:-9,z:0},{x:0,y:-9,z:-9},{x:-9,y:0,z:-9},{x:-9,y:-9,z:-9},{x:9,y:-9,z:0},{x:9,y:0,z:-9},{x:9,y:-9,z:-9},{x:-9,y:9,z:0},{x:-9,y:9,z:-9},{x:0,y:9,z:-9},{x:-9,y:0,z:9},{x:-9,y:-9,z:9},{x:9,y:9,z:-9},{x:9,y:-9,z:9},{x:-9,y:9,z:9},{x:0,y:-9,z:9}];let e="#33bebc",o="#cc925c",i="#D972FF",n="#111827",l="#19297C",d="#AB3428",p=new P.Anchor({addTo:F,rotate:{x:-4,y:10}});var f=new P.Box({addTo:p,width:8,height:8,depth:8,translate:{x:0,y:0,z:0},topFace:e,frontFace:o,leftFace:i,rightFace:n,rearFace:l,bottomFace:d,stroke:!1});u.forEach(C=>{f.copy({translate:C})});let v=[{x:h*0,y:h*0},{x:h*1/2,y:h*-1/2},{x:h*1,y:h*-1}],y=0,g=180;function w(){b(),F.updateRenderGraph(),requestAnimationFrame(w)}w();function b(){if(!a)return;let C=y/g,B=P.easeInOut(C%1,3),R=v.length-1,E=Math.floor(C%R),z=v[E],ct=v[E+1],Yt=P.lerp(z.x,ct.x,B);F.rotate.x=Math.cos(Yt)*h/12,F.rotate.y=P.lerp(z.y,ct.y,B),y++}};function pe(){const s=document.querySelector("#zdog"),c=document.createElement("canvas");c.id="zdog",c.classList.add("my-auto","md:cursor-move"),s.parentNode.replaceChild(c,s)}window.addEventListener("resize",()=>{Wt(()=>{pe(),Ht()},10)});Ht();class ve extends HTMLElement{buttonLoadingOverlay=null;isVisible=!1;constructor(){super(),this.buttonLoadingOverlay=this.querySelector("span#button-loading-overlay"),st.subscribe(c=>{this.isVisible=c.loadingDictionary[this.dataset.id],this.toggleVisibility()})}toggleVisibility(){this.isVisible?this.buttonLoadingOverlay.style.visibility="visible":this.buttonLoadingOverlay.style.visibility="hidden"}}customElements.define("base-button",ve);function Xt(){const s=document.URL.split("/"),c=s.indexOf("portfolio");c!==-1&&s.splice(c,1);const r=s.pop(),t=s.toString().replaceAll(",","/");r==="es"?window.location.assign(t):window.location.assign(`${t}/es`)}let rt=!0;const at=document.getElementById("bottom-nav-links-container"),nt=at.children,ye=document.getElementById("bottom-nav-change-theme-button");ye.addEventListener("click",()=>{Ot()});for(let s=0;s<nt.length;s++)nt[s].addEventListener("click",c=>{c.preventDefault();const r=nt[s].children[0].getAttribute("href");ut(r)});const ge=document.getElementById("links-button");ge.addEventListener("click",()=>{rt=!rt,rt?at.classList.add("translate-y-60"):at.classList.remove("translate-y-60")});const me=document.getElementById("bottom-nav-change-language-button");me.addEventListener("click",Xt);const G=document.getElementById("floating-button");G.addEventListener("click",xe);Kt();window.addEventListener("scroll",()=>{Wt(Kt,10)});function Kt(){document.documentElement.scrollTop>20?(G.classList.add("block"),G.classList.remove("hidden")):(G.classList.add("hidden"),G.classList.remove("block"))}function xe(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const we=document.getElementById("change-language-button"),be=document.getElementById("top-nav-change-theme-button");we.addEventListener("click",Xt);be.addEventListener("click",()=>{Ot()});const Se=document.getElementById("top-nav-links-container"),it=Se.children;for(let s=0;s<it.length;s++)it[s].addEventListener("click",c=>{c.preventDefault();const r=it[s].children[0].getAttribute("href");ut(r)});