"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5128],{75128:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var s=t(85893),l=t(11163),n=t(33830),a=t(25788),i=t(4003),m=t(67896),o=t(20868),c=t(17608),d=t(24197),x=t(74231),u=t(29222);let h=x.Ry().shape({name:x.Z_().required("error-name-required"),email:x.Z_().email("error-email-format").required("error-email-required"),password:x.Z_().required("error-password-required")});function p(){let{t:e}=(0,o.$G)("common"),{openModal:r}=(0,c.SO)(),{mutate:t,isLoading:l,formError:n}=(0,u.mr)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.l,{onSubmit:function(e){let{name:r,email:s,password:l}=e;t({name:r,email:s,password:l})},validationSchema:h,serverError:n,children:r=>{var t,n,o;let{register:c,formState:{errors:d}}=r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{label:e("text-name"),...c("name"),variant:"outline",className:"mb-5",error:e(null===(t=d.name)||void 0===t?void 0:t.message)}),(0,s.jsx)(a.Z,{label:e("text-email"),...c("email"),type:"email",variant:"outline",className:"mb-5",error:e(null===(n=d.email)||void 0===n?void 0:n.message)}),(0,s.jsx)(i.Z,{label:e("text-password"),...c("password"),error:e(null===(o=d.password)||void 0===o?void 0:o.message),variant:"outline",className:"mb-5"}),(0,s.jsx)("div",{className:"mt-8",children:(0,s.jsx)(m.Z,{className:"h-12 w-full",loading:l,disabled:l,children:e("text-register")})})]})}}),(0,s.jsxs)("div",{className:"relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8",children:[(0,s.jsx)("hr",{className:"w-full"}),(0,s.jsx)("span",{className:"absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4",children:e("text-or")})]}),(0,s.jsxs)("div",{className:"text-center text-sm text-body sm:text-base",children:[e("text-already-account")," ",(0,s.jsx)("button",{onClick:()=>r("LOGIN_VIEW"),className:"font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1",children:e("text-login")})]})]})}function f(){let{t:e}=(0,o.$G)("common"),r=(0,l.useRouter)(),{closeModal:t}=(0,c.SO)();function a(e){r.push("/".concat(e)),t()}return(0,s.jsxs)("div",{className:"flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",children:[(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(n.Z,{})}),(0,s.jsxs)("p",{className:"mt-4 mb-7 px-2 text-center text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base",children:[e("registration-helper"),(0,s.jsx)("span",{onClick:()=>a("terms"),className:"mx-1 cursor-pointer text-accent underline hover:no-underline",children:e("text-terms")}),"&",(0,s.jsx)("span",{onClick:()=>a("privacy"),className:"cursor-pointer text-accent underline hover:no-underline ltr:ml-1 rtl:mr-1",children:e("text-policy")})]}),(0,s.jsx)(p,{})]})}}}]);