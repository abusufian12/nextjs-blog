"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4207],{87710:function(e,t,l){var s=l(85893),a=l(12083),r=l(94184),n=l.n(r),i=l(20868),d=l(82921),x=l(28609);let c=e=>{var t;let{item:l,notAvailable:r}=e,{t:c}=(0,i.$G)("common"),{price:o}=(0,a.ZP)({amount:l.itemTotal});return(0,s.jsxs)("div",{className:n()("flex w-full space-x-3 rtl:space-x-reverse py-3 first:pt-0 last:pb-0"),children:[(0,s.jsx)("div",{className:"w-[42px] h-[42px] flex-shrink-0 bg-gray-100",children:(0,s.jsx)(d.E,{src:null!==(t=null==l?void 0:l.image)&&void 0!==t?t:x.Hb,alt:l.name,layout:"responsive",width:42,height:42,className:"product-image rounded-md"})}),(0,s.jsxs)("div",{className:"flex w-full justify-between",children:[(0,s.jsxs)("p",{className:"flex flex-col text-sm",children:[(0,s.jsx)("span",{className:n()(r?"text-red-500":"text-gray-800"),children:l.name}),(0,s.jsxs)("span",{className:n()("text-xs font-semibold mt-1.5",r?"text-red-500":"text-gray-500"),children:["X ",l.quantity]})]}),(0,s.jsx)("span",{className:n()("text-sm font-semibold",r?"text-red-500":"text-gray-800"),children:r?c("text-unavailable"):o})]})]},l.id)};t.Z=c},88608:function(e,t,l){l.d(t,{m:function(){return a}});var s=l(85893);let a=e=>{let{title:t,value:l}=e;return(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("p",{className:"text-sm text-gray-800",children:t}),(0,s.jsx)("span",{className:"text-sm text-gray-800 font-semibold ltr:text-right rtl:text-left",children:l})]})}},44207:function(e,t,l){l.r(t);var s=l(85893),a=l(52987),r=l(12083),n=l(59119),i=l(18855),d=l(20868),x=l(74249),c=l(1483),o=l(91131),m=l(33300),u=l(88608),h=l(86810),p=l(3686),b=l(28612),v=l(87710);let f=e=>{var t,l;let{className:f}=e,{t:j}=(0,d.$G)("common"),{items:g,isEmpty:N}=(0,x.jD)(),[y]=(0,o.KO)(m.Jb),[w,_]=(0,o.KO)(m.GO),[Z]=(0,o.KO)(m.yw),[k]=(0,o.KO)(m.y2),[P]=(0,o.KO)(m.xc),O=null==g?void 0:g.filter(e=>{var t;return!(null==y?void 0:null===(t=y.unavailable_products)||void 0===t?void 0:t.includes(e.id))}),{price:K}=(0,r.ZP)(y&&{amount:null!==(t=y.total_tax)&&void 0!==t?t:0}),{price:A}=(0,r.ZP)(y&&{amount:null!==(l=y.shipping_charge)&&void 0!==l?l:0}),C=(0,c.tf)(O),{price:E}=(0,r.ZP)(y&&{amount:C}),{price:G}=(0,r.ZP)(Z&&{amount:Number(Z)}),T=y?(0,c.eA)({totalAmount:C,tax:null==y?void 0:y.total_tax,shipping_charge:null==y?void 0:y.shipping_charge},Number(Z)):0,{price:$}=(0,r.ZP)(y&&{amount:T});return(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)("div",{className:"flex flex-col pb-2 border-b border-border-200",children:N?(0,s.jsx)(n.Z,{}):null==g?void 0:g.map(e=>{var t;let l=null==y?void 0:null===(t=y.unavailable_products)||void 0===t?void 0:t.find(t=>t===e.id);return(0,s.jsx)(v.Z,{item:e,notAvailable:!!l},e.id)})}),(0,s.jsxs)("div",{className:"mt-4 space-y-3",children:[(0,s.jsx)(u.m,{title:j("text-sub-total"),value:E}),(0,s.jsx)(u.m,{title:j("text-tax"),value:K}),(0,s.jsx)(u.m,{title:j("text-shipping"),value:A}),Z&&w?(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{className:"text-sm text-gray-800 ltr:mr-4 rtl:ml-4",children:j("text-discount")}),(0,s.jsxs)("span",{className:"flex items-center text-xs font-semibold text-red-500 ltr:mr-auto rtl:ml-auto",children:["(",null==w?void 0:w.code,")",(0,s.jsx)("button",{onClick:()=>_(null),children:(0,s.jsx)(i.T,{className:"w-3 h-3 ltr:ml-2 rtl:mr-2"})})]}),(0,s.jsx)("span",{className:"text-sm font-semibold text-gray-800",children:G})]}):(0,s.jsx)("div",{className:"flex justify-between !mt-5 !mb-4",children:(0,s.jsx)(a.Z,{theme:"dark"})}),(0,s.jsxs)("div",{className:"flex justify-between pt-3 border-t-4 border-double border-border-200",children:[(0,s.jsx)("p",{className:"text-base font-semibold text-heading",children:j("text-total")}),(0,s.jsx)("span",{className:"text-base font-semibold text-heading",children:$})]})]}),y&&(0,s.jsx)(b.Z,{totalPrice:T,walletAmount:y.wallet_amount,walletCurrency:y.wallet_currency}),P&&!Boolean(k)?null:(0,s.jsx)(h.Z,{theme:"bw",className:"p-5 mt-10 border border-gray-200 bg-light"}),(0,s.jsx)(p.T,{className:"w-full mt-8 font-normal h-[50px] !bg-gray-800 transition-colors hover:!bg-gray-900",children:j("text-place-order")})]})};t.default=f}}]);