import{d as l}from"./index.ExJlL1Nd.js";import{a as d}from"./langStore.CgymP8xs.js";import{l as a}from"./formStore.90FpNnsG.js";const o=document.getElementById("floating-button");o.addEventListener("click",m);r();window.addEventListener("scroll",()=>{l(r,10)});function r(){document.documentElement.scrollTop>20?(o.classList.add("block"),o.classList.remove("hidden")):(o.classList.add("hidden"),o.classList.remove("block"))}function m(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const u=document.getElementById("contactButton");u.addEventListener("click",()=>d("contacts"));class f extends HTMLElement{constructor(){super()}}customElements.define("section-contacts",f);const y=document.getElementById("contact-form"),p=document.querySelector("section-contacts");document.getElementById("message-wrapper");y.addEventListener("submit",e=>{g(),e.preventDefault()});const g=async()=>{const e=p.dataset.buttonid;a.setKey("loadingDictionary",{[e]:!0});const s=new FormData(document.forms[0]),t=Object.fromEntries(s),i={...t,from:t.email,subject:"Work email",body:`Name: ${t.name}
Message: ${t.message}
From:${t.email}`,addresses:"betankore@yahoo.com"};let c=null;try{c=await fetch("https://portfolio-mailer-uksq.onrender.comsend-email",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}})}catch{n("error-message");return}if(c.error){n("error-message");return}n("success-message"),a.setKey("loadingDictionary",{[e]:!1})},n=e=>{const s=document.getElementById(e);s.style.display="block"};