import{g as C,u as D,h as u,i as S,_ as E,r as q,o as n,c as l,a as j,t as d,j as p,F,k as N,l as z,n as G,b as H,m as V}from"./app-DC2AytKD.js";const P=C({__name:"CustomBanner",setup(x,{expose:c}){c();const r=D(),e=u(()=>{var t,s,a,o;return(s=(t=r.value)==null?void 0:t.customBanner)!=null&&s.heroImage?S((o=(a=r.value)==null?void 0:a.customBanner)==null?void 0:o.heroImage):null}),h=u(()=>{var t,s;return((s=(t=r.value)==null?void 0:t.customBanner)==null?void 0:s.buttons)||[]}),f=u(()=>r.value.customBanner.heroImageStyle||{}),g=u(()=>{var o;const{bgImageStyle:t,bgImage:s}=((o=r.value)==null?void 0:o.customBanner)||{},a=s?{overflow:"hidden",background:`url(${S(s)}) center/cover no-repeat`}:{};return t?{...a,...t}:a}),i={frontmatter:r,heroImage:e,buttons:h,heroImageStyle:f,bgImageStyle:g};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),X={class:"banner-brand__content"},L={key:0,class:"title"},O={key:1,class:"description"},A={key:2,class:"tagline"},J={key:3,class:"btn-group"};function K(x,c,r,e,h,f){var i,t,s,a,o,_,v,b,y,B,k,I;const g=q("Xicons");return n(),l("section",{class:"banner-brand__wrapper",style:V({...e.bgImageStyle})},[j("div",X,[(t=(i=e.frontmatter)==null?void 0:i.customBanner)!=null&&t.title?(n(),l("h1",L,d((a=(s=e.frontmatter)==null?void 0:s.customBanner)==null?void 0:a.title),1)):p("",!0),(_=(o=e.frontmatter)==null?void 0:o.customBanner)!=null&&_.description?(n(),l("p",O,d((b=(v=e.frontmatter)==null?void 0:v.customBanner)==null?void 0:b.description),1)):p("",!0),(B=(y=e.frontmatter)==null?void 0:y.customBanner)!=null&&B.tagline?(n(),l("p",A,d((I=(k=e.frontmatter)==null?void 0:k.customBanner)==null?void 0:I.tagline),1)):p("",!0),e.buttons.length>0?(n(),l("div",J,[(n(!0),l(F,null,N(e.buttons,(m,w)=>(n(),z(g,{class:G(m.type),key:w,icon:m.icon,text:m.text,link:m.link,"icon-size":"18","text-size":"14"},null,8,["class","icon","text","link"]))),128))])):p("",!0),c[0]||(c[0]=H('<div class="shields-wrapper" data-v-3e4800f4><img alt="GitHub license" src="https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-3e4800f4><img alt="GitHub stars" src="https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-3e4800f4><img alt="GitHub forks" src="https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat-square&amp;logo=github&amp;color=5D67E8" data-v-3e4800f4><img alt="Npm downloads" src="https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat-square&amp;logo=npm&amp;color=5D67E8" data-v-3e4800f4><img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/vuepress-reco/vuepress-theme-reco?filename=packages%2Fvuepress-theme-reco%2Fpackage.json&amp;style=flat-square&amp;color=5D67E8&amp;logo=npm" data-v-3e4800f4><img alt="Npm version" src="https://img.shields.io/badge/tailwindcss-3.1.6-5D67E8?style=flat-square&amp;logo=tailwindcss" data-v-3e4800f4></div>',1))])],4)}const Q=E(P,[["render",K],["__scopeId","data-v-3e4800f4"],["__file","CustomBanner.vue"]]);export{Q as default};
