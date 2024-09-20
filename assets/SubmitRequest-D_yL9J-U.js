import{_ as c,c as d,a as o,t as r,f as a,v as n,g as p,b,w as h,d as q,o as f,e as S}from"./index-DpPvdmkO.js";const g={name:"SubmitRequest",data(){return{isSubmitting:!1,email:"",requestSubject:"",requestDescription:"",attachment:null}},methods:{handleFileUpload(e){this.attachment=e.target.files[0]},async handleRequestSubmit(){this.isSubmitting=!0;try{const e=new FormData;e.append("email",this.email),e.append("requestSubject",this.requestSubject),e.append("requestDescription",this.requestDescription),this.attachment&&e.append("attachment",this.attachment),e.append("_subject","New Request Submission"),e.append("_template","table"),e.append("_captcha","false");const t=await fetch("https://formsubmit.co/ajax/ae13ee8bbcd4e22acd6e07e9e275bd47",{method:"POST",body:e});if(t.ok)this.$router.push("/success-page");else{const u=await t.text();console.error("Form submission failed:",u),alert("Form submission failed. Please try again.")}}catch(e){console.error("Form submission error:",e),alert("An error occurred while submitting the form. Please try again.")}finally{this.isSubmitting=!1}}}},_={class:"submit-request"},D={class:"title"},y=["placeholder"],j=["placeholder"],w=["placeholder"],R=["disabled"];function k(e,t,u,v,s,l){const m=q("router-link");return f(),d("div",_,[o("h2",D,r(e.$t("submitRequestTitle")),1),o("form",{id:"submitRequestForm",onSubmit:t[3]||(t[3]=p((...i)=>l.handleRequestSubmit&&l.handleRequestSubmit(...i),["prevent"])),class:"request-form"},[a(o("input",{type:"email",id:"subscribeEmail",name:"email",required:"",placeholder:e.$t("subscribePlaceholder"),"onUpdate:modelValue":t[0]||(t[0]=i=>s.email=i),class:"neon-input"},null,8,y),[[n,s.email]]),a(o("input",{type:"text",name:"requestSubject",placeholder:e.$t("subjectPlaceholder"),required:"",class:"neon-input","onUpdate:modelValue":t[1]||(t[1]=i=>s.requestSubject=i)},null,8,j),[[n,s.requestSubject]]),a(o("textarea",{name:"requestDescription",placeholder:e.$t("requestDescriptionPlaceholder"),required:"",class:"neon-textarea","onUpdate:modelValue":t[2]||(t[2]=i=>s.requestDescription=i)},null,8,w),[[n,s.requestDescription]]),o("button",{type:"submit",class:"submit-button neon-button",disabled:s.isSubmitting},r(s.isSubmitting?e.$t("submitting"):e.$t("submitRequest")),9,R)],32),b(m,{to:"/",class:"cta-button cta-home"},{default:h(()=>[S(r(e.$t("backToHome")),1)]),_:1})])}const P=c(g,[["render",k]]);export{P as default};
