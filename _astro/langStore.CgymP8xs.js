import{a as f}from"./formStore.90FpNnsG.js";function U(n){document.documentElement.setAttribute("theme",n),localStorage.setItem("theme",n)}const w=n=>{document.getElementById(n.split("#").pop()).scrollIntoView({behavior:"smooth"})};function c(n){return function(e){return d(n,e)}}function d(n,s){const e=s.split(".");if(e.length===1)return n[s];let u=e.shift(),t=n[u];for(;e.length>0;){const i=e[0];if(typeof t[i]=="string")return t[i];u=e.shift(),t=n[u]}return"No translation found"}function A(){document.URL.split("/").at(-1)==="es"?window.location="/":window.location="/es"}const m=5,r=6,a=10;let g=(n,s,e,u)=>(n.events=n.events||{},n.events[e+a]||(n.events[e+a]=u(t=>{n.events[e].reduceRight((i,l)=>(l(i),i),{shared:{},...t})})),n.events[e]=n.events[e]||[],n.events[e].push(s),()=>{let t=n.events[e],i=t.indexOf(s);t.splice(i,1),t.length||(delete n.events[e],n.events[e+a](),delete n.events[e+a])}),h=1e3,p=(n,s)=>g(n,u=>{let t=s(u);t&&n.events[r].push(t)},m,u=>{let t=n.listen;n.listen=(...l)=>(!n.lc&&!n.active&&(n.active=!0,u()),t(...l));let i=n.off;return n.events[r]=[],n.off=()=>{i(),setTimeout(()=>{if(n.active&&!n.lc){n.active=!1;for(let l of n.events[r])l();n.events[r]=[]}},h)},()=>{n.listen=t,n.off=i}}),v=(n,s)=>{Array.isArray(n)||(n=[n]);let e,u=()=>{let i=n.map(l=>l.get());(e===void 0||i.some((l,o)=>l!==e[o]))&&(e=i,t.set(s(...i)))},t=f(void 0,Math.max(...n.map(i=>i.l))+1);return p(t,()=>{let i=n.map(l=>l.listen(u,t.l));return u(),()=>{for(let l of i)l()}}),t};const T=f(null),E=v(T,n=>n?c(n):function(){});export{w as a,A as c,T as l,U as s,E as t};
