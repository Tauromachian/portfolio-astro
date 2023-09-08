import{w as g}from"./runtime-dom.esm-bundler.28dbabb9.js";import{s as u,a as x}from"./scrollToPosition.14140e93.js";import{t as d,c as v}from"./langStore.a50d4f6f.js";import{B,S}from"./BaseButton.17e9d12b.js";import{B as T,T as k}from"./ThemeSelector.ac27ced4.js";/* empty css                       */import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";import{u as f}from"./index.bbb2ce69.js";import{r as h,o as p,c as i,a as o,F as y,b,d as a,w as n,e as c,t as w,m as C,f as L,p as P,g as M}from"./runtime-core.esm-bundler.a36be885.js";const N={__name:"TopNav",props:{links:{type:Array,default:()=>[]},themes:{type:Array,default:()=>[]}},setup(s,{expose:m}){m();const r=f(d),e=h("default"),_=t=>{e.value=t,u(t)};p(()=>{const t=localStorage.getItem("theme")??"default";e.value=t});const l={$t:r,theme:e,saveTheme:_,onMounted:p,ref:h,get setTheme(){return u},get scrollToPosition(){return x},get changeLanguage(){return v},BaseButton:B,BaseMenu:T,ThemeSelector:k,SocialIconsBase:S,get useStore(){return f},get t(){return d}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},j=s=>(P("data-v-a7c305f9"),s=s(),M(),s),A={class:"flex bg-primary"},F={class:"container ml-auto mr-auto flex justify-center text-2xl ml-14 z-50 px-3"},V=j(()=>o("div",{class:"flex items-center"},[o("img",{class:"w-16 h-full",src:"/logo-extra-compressed.png",alt:"Logo of the portfolio"}),o("h4",{class:"text-3xl ml-5"},"José García")],-1)),z={class:"flex items-center text-xl mx-auto"},D=["href","onClick"],E={class:"flex items-center"};function G(s,m,r,e,_,l){return c(),i("nav",A,[o("div",F,[V,o("ul",z,[(c(!0),i(y,null,b(r.links,t=>(c(),i("li",{key:t.link+t.text,class:"px-3 relative mx-0 transition-colors transition-200 navbar__link"},[o("a",{href:t.link,onClick:g(H=>e.scrollToPosition(t.link),["prevent"])},w(e.$t(t.text)),9,D)]))),128))]),o("div",E,[a(e.BaseButton,{title:"Translate",class:"relative mx-0 transition-colors transition-200 navbar__link",onClick:e.changeLanguage,icon:""},{default:n(()=>[a(e.SocialIconsBase,{icon:"mdiTranslate"})]),_:1},8,["onClick"]),a(e.BaseMenu,{bottom:"initial",top:"3rem"},{activator:n(({on:t})=>[a(e.BaseButton,C({title:"Theme changer",class:"relative mx-0 transition-colors transition-200 navbar__link",icon:""},L(t)),{default:n(()=>[a(e.SocialIconsBase,{icon:"mdiInvertColors"})]),_:2},1040)]),default:n(()=>[a(e.ThemeSelector,{themes:r.themes,value:e.theme,onInput:e.saveTheme},null,8,["themes","value"])]),_:1})])])])}const Y=I(N,[["render",G],["__scopeId","data-v-a7c305f9"]]);export{Y as default};
