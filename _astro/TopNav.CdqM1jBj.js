import{w as g}from"./runtime-dom.esm-bundler.GbYKmP2P.js";import{t as d,s as h,a as x,c as v}from"./langStore.CgymP8xs.js";import{u,B,S as T}from"./BaseButton.8kVGwJM_.js";import{B as S,T as k}from"./ThemeSelector.5fzLkYZa.js";/* empty css                       */import{_ as y}from"./_plugin-vue_export-helper.x3n3nnut.js";import{r as f,o as p,a as c,c as l,b as o,F as I,d as C,e as a,w as n,t as b,m as L,f as w,A as P,B as E}from"./runtime-core.esm-bundler.rw6UFNar.js";import"./formStore.90FpNnsG.js";const M={src:"/_astro/logo-extra-compressed.iy1m4T8U.png",width:220,height:282,format:"png"},N={__name:"TopNav",props:{links:{type:Array,default:()=>[]},themes:{type:Array,default:()=>[]}},setup(s,{expose:m}){m();const r=u(d),e=f("default"),_=t=>{e.value=t,h(t)};p(()=>{const t=localStorage.getItem("theme")??"default";e.value=t});const i={$t:r,theme:e,saveTheme:_,onMounted:p,ref:f,get setTheme(){return h},get scrollToPosition(){return x},get changeLanguage(){return v},BaseButton:B,BaseMenu:S,ThemeSelector:k,SocialIconsBase:T,get LogoExtraCompressed(){return M},get useStore(){return u},get t(){return d}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},A=s=>(P("data-v-889a4297"),s=s(),E(),s),j={class:"bg-primary"},F={class:"container mx-auto flex justify-center z-50 px-3"},V={class:"flex items-center"},z=["src"],D=A(()=>o("h4",{class:"text-3xl ml-5"},"José García",-1)),G={class:"flex items-center text-xl mx-auto"},H=["href","onClick"],J={class:"flex items-center text-2xl"};function O(s,m,r,e,_,i){return c(),l("nav",j,[o("div",F,[o("div",V,[o("img",{class:"w-16 h-full",src:e.LogoExtraCompressed.src,alt:"Logo of the portfolio"},null,8,z),D]),o("ul",G,[(c(!0),l(I,null,C(r.links,t=>(c(),l("li",{key:t.link+t.text,class:"px-3 relative mx-0 transition-colors transition-200 navbar__link"},[o("a",{href:t.link,onClick:g(U=>e.scrollToPosition(t.link),["prevent"])},b(e.$t(t.text)),9,H)]))),128))]),o("div",J,[a(e.BaseButton,{title:"Translate",class:"relative mx-0 transition-colors transition-200 navbar__link",onClick:e.changeLanguage,icon:""},{default:n(()=>[a(e.SocialIconsBase,{icon:"mdiTranslate"})]),_:1},8,["onClick"]),a(e.BaseMenu,{bottom:"initial",top:"3rem"},{activator:n(({on:t})=>[a(e.BaseButton,L({title:"Theme changer",class:"relative mx-0 transition-colors transition-200 navbar__link",icon:""},w(t)),{default:n(()=>[a(e.SocialIconsBase,{icon:"mdiInvertColors"})]),_:2},1040)]),default:n(()=>[a(e.ThemeSelector,{themes:r.themes,value:e.theme,onInput:e.saveTheme},null,8,["themes","value"])]),_:1})])])])}const $=y(N,[["render",O],["__scopeId","data-v-889a4297"]]);export{$ as default};
