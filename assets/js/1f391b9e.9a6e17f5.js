"use strict";(self.webpackChunkric_wiki=self.webpackChunkric_wiki||[]).push([[6061],{665:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(7289),s=t(204),l=t(2362),r=t(4848);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,i.A)(n,s.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(c,{...e})]})}},2075:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(4164),a=t(7289),s=t(204),l=t(2362),r=t(4848);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Yh,{}),className:(0,i.A)(n,s.G.common.draftBanner),children:(0,r.jsx)(a.TT,{})})}var o=t(665);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||i.unlisted)&&(0,r.jsx)(o.A,{}),i.draft&&(0,r.jsx)(c,{})]})}},9181:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var i=t(4164),a=t(1082),s=t(204),l=t(1410),r=t(9263),c=t(7959),o=t(2075),d=t(5783);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:v,description:x,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:A,wrapperClassName:b,hide_table_of_contents:L}=g,N=f.image??g.image,C=!!(v||j||p);return(0,u.jsx)(a.e3,{className:(0,i.A)(b??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(a.be,{title:h,description:x,keywords:A,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.A)("col",!L&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),C&&(0,u.jsx)(d.A,{className:(0,i.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:j,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},1021:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(6540),a=t(3115);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(6289),u=t(4848);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const v=(0,a.p)(),x=o??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,i.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[r,c,x,g])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}},7959:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(1021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:r,linkActiveClassName:c})})}},7289:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>l,TT:()=>d,Uh:()=>r,Yh:()=>o});t(6540);var i=t(539),a=t(7143),s=t(4848);function l(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);