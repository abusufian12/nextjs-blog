"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5711,2008],{55711:function(t,n,e){e.r(n);var r=e(85893),l=e(57453),a=e(93069),c=e(12083),o=e(67246),s=e(74249),u=e(91131),i=e(20868);let d=()=>{let{t}=(0,i.$G)(),{totalUniqueItems:n,total:e}=(0,s.jD)(),[d,f]=(0,u.KO)(o.P),{price:m}=(0,c.ZP)({amount:e});return(0,r.jsxs)("button",{className:"hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 ltr:right-0 rtl:left-0 z-40 shadow-900 rounded ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover",onClick:function(){f({display:!0,view:"cart"})},children:[(0,r.jsxs)("span",{className:"flex pb-0.5",children:[(0,r.jsx)(l.Z,{className:"shrink-0",width:14,height:16}),(0,r.jsx)("span",{className:"flex ltr:ml-2 rtl:mr-2",children:(0,a.U)(n,t("common:text-item"))})]}),(0,r.jsx)("span",{className:"bg-light rounded w-full py-2 px-2 text-accent mt-3",children:m})]})};n.default=d},57453:function(t,n,e){var r=e(85893);e(67294);let l=t=>{let{width:n,height:e,className:l}=t;return(0,r.jsx)("svg",{width:n,height:e,className:l,viewBox:"0 0 12.686 16",children:(0,r.jsxs)("g",{transform:"translate(-27.023 -2)",children:[(0,r.jsx)("g",{transform:"translate(27.023 5.156)",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",transform:"translate(-53.023 -101.005)",fill:"currentColor"})})}),(0,r.jsx)("g",{transform:"translate(30.274 2)",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",transform:"translate(-157.039)",fill:"currentColor"})})})]})})};n.Z=l},93069:function(t,n,e){e.d(n,{U:function(){return r}});function r(t,n){return t&&t>1?"".concat(t," ").concat(n,"s"):"".concat(t," ").concat(n)}},12083:function(t,n,e){e.d(n,{ZP:function(){return o}});var r=e(67294),l=e(11163),a=e(74833);function c(t){let{amount:n,currencyCode:e,locale:r}=t,l=new Intl.NumberFormat(r,{style:"currency",currency:e});return l.format(n)}function o(t){let{settings:{currency:n}}=(0,a.rV)(),{amount:e,baseAmount:o,currencyCode:s}={...t,currencyCode:null!=n?n:"USD"},{locale:u}=(0,l.useRouter)(),i=(0,r.useMemo)(()=>{if("number"!=typeof e||!s)return"";let t=u||"en";return o?function(t){let{amount:n,baseAmount:e,currencyCode:r,locale:l}=t,a=e>n,o=new Intl.NumberFormat(l,{style:"percent"}),s=a?o.format((e-n)/e):null,u=c({amount:n,currencyCode:r,locale:l}),i=a?c({amount:e,currencyCode:r,locale:l}):null;return{price:u,basePrice:i,discount:s}}({amount:e,baseAmount:o,currencyCode:s,locale:t}):c({amount:e,currencyCode:s,locale:t})},[e,o,s,u]);return"string"==typeof i?{price:i,basePrice:null,discount:null}:i}}}]);