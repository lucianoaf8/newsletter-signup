import{_ as l,c as s,a as e,F as d,r as u,t as a,b as _,w as p,d as m,o,n as f,e as g}from"./index-B1s9-mEv.js";const h={name:"SuccessPage",data(){return{circles:[{style:{top:"10%",left:"15%",animationDuration:"25s"}},{style:{top:"50%",left:"70%",animationDuration:"30s"}},{style:{top:"80%",left:"30%",animationDuration:"20s"}}]}}},k={class:"success-page"},y={id:"background"},v={id:"container"},$={id:"title"};function b(t,D,S,B,n,N){const c=m("router-link");return o(),s("div",k,[e("div",y,[(o(!0),s(d,null,u(n.circles,(r,i)=>(o(),s("div",{class:"background-circle",key:i,style:f(r.style)},null,4))),128))]),e("div",v,[e("h1",$,a(t.$t("successTitle")),1),e("p",null,a(t.$t("successMessage")),1),_(c,{to:"/",class:"cta-button cta-home"},{default:p(()=>[g(a(t.$t("backToHome")),1)]),_:1})])])}const V=l(h,[["render",b],["__scopeId","data-v-15685d58"]]);export{V as default};
