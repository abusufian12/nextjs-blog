(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4185],{85816:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/refunds",function(){return n(93279)}])},10361:function(e,t,n){"use strict";var r=n(85893),o=n(94184),a=n.n(o),l=n(20868);let u=e=>{let{className:t,color:n,textColor:o,text:u,style:s}=e,{t:i}=(0,l.$G)(),d={root:"px-3 py-1 rounded-full text-sm",default:"bg-accent",text:"text-light"};return(0,r.jsx)("span",{className:a()(d.root,{[d.default]:!n,[d.text]:!o},n,o,t),style:s,children:i(u)})};t.Z=u},88909:function(e,t,n){"use strict";n.d(t,{Aj:function(){return x},M6:function(){return h},Mc:function(){return b},QE:function(){return w},Rr:function(){return p},U5:function(){return y},pN:function(){return N},rT:function(){return v},yi:function(){return m}});var r=n(88767),o=n(31567),a=n(40782),l=n(17608),u=n(64648),s=n(65927),i=n(91131),d=n(33300),c=n(11163),f=n(87507),g=n(59787);function m(e){var t,n;let{locale:o}=(0,c.useRouter)(),a={...e},{data:l,isLoading:i,error:d,fetchNextPage:f,hasNextPage:m,isFetching:x,isFetchingNextPage:p}=(0,r.useInfiniteQuery)([u.P.ORDERS,a],e=>{let{queryKey:t,pageParam:n}=e;return s.Z.orders.all(Object.assign({},t[1],n))},{getNextPageParam:e=>{let{current_page:t,last_page:n}=e;return n>t&&{page:t+1}}});return{orders:null!==(n=null==l?void 0:null===(t=l.pages)||void 0===t?void 0:t.flatMap(e=>e.data))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null==l?void 0:l.pages)?(0,g.Q)(null==l?void 0:l.pages[l.pages.length-1]):null,isLoading:i,error:d,isFetching:x,isLoadingMore:p,loadMore:function(){f()},hasMore:Boolean(m)}}function x(e){let{tracking_number:t}=e,{data:n,isLoading:o,error:a}=(0,r.useQuery)([u.P.ORDERS,t],()=>s.Z.orders.get(t));return{order:n,isLoading:o,error:a}}function p(e){var t,n;let{locale:o}=(0,c.useRouter)(),a={...e},{data:l,isFetching:i,isFetchingNextPage:d,fetchNextPage:f,hasNextPage:m,error:x}=(0,r.useInfiniteQuery)([u.P.ORDERS_STATUS,a],e=>{let{queryKey:t,pageParam:n}=e;return s.Z.orders.statuses(Object.assign({},t[1],n))},{getNextPageParam:e=>{let{current_page:t,last_page:n}=e;return n>t&&{page:t+1}}});return{orderStatuses:null!==(n=null==l?void 0:null===(t=l.pages)||void 0===t?void 0:t.flatMap(e=>e.data))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null==l?void 0:l.pages)?(0,g.Q)(null==l?void 0:l.pages[l.pages.length-1]):null,isLoading:i,isLoadingMore:d,error:x,loadMore:function(){f()},hasMore:Boolean(m)}}function v(e){var t,n;let{locale:o}=(0,c.useRouter)(),a={...e},{data:l,isLoading:i,isFetchingNextPage:d,fetchNextPage:f,hasNextPage:m,error:x}=(0,r.useInfiniteQuery)([u.P.ORDERS_REFUNDS,a],e=>{let{queryKey:t,pageParam:n}=e;return s.Z.orders.refunds(Object.assign({},t[1],n))},{getNextPageParam:e=>{let{current_page:t,last_page:n}=e;return n>t&&{page:t+1}}});return{refunds:null!==(n=null==l?void 0:null===(t=l.pages)||void 0===t?void 0:t.flatMap(e=>e.data))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null==l?void 0:l.pages)?(0,g.Q)(null==l?void 0:l.pages[l.pages.length-1]):null,isLoading:i,isLoadingMore:d,error:x,loadMore:function(){f()},hasMore:Boolean(m)}}let h=e=>{var t,n;let{locale:o}=(0,c.useRouter)(),a={...e},{data:l,isLoading:i,isFetchingNextPage:d,fetchNextPage:f,hasNextPage:m,error:x}=(0,r.useInfiniteQuery)([u.P.ORDERS_DOWNLOADS,a],e=>{let{queryKey:t,pageParam:n}=e;return s.Z.orders.downloadable(Object.assign({},t[1],n))},{getNextPageParam:e=>{let{current_page:t,last_page:n}=e;return n>t&&{page:t+1}}});return{downloads:null!==(n=null==l?void 0:null===(t=l.pages)||void 0===t?void 0:t.flatMap(e=>e.data))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null==l?void 0:l.pages)?(0,g.Q)(null==l?void 0:l.pages[l.pages.length-1]):null,isLoading:i,isLoadingMore:d,error:x,loadMore:function(){f()},hasMore:Boolean(m)}};function y(){let{t:e}=(0,o.$)(),{locale:t}=(0,c.useRouter)(),{closeModal:n}=(0,l.SO)(),i=(0,r.useQueryClient)(),{mutate:d,isLoading:f}=(0,r.useMutation)(s.Z.orders.createRefund,{onSuccess:()=>{a.Am.success(e("text-refund-request-submitted"))},onError:t=>{let{response:{data:n}}=null!=t?t:{};a.Am.error(e(null==n?void 0:n.message))},onSettled:()=>{i.invalidateQueries(u.P.ORDERS),n()}});return{createRefundRequest:function(e){let t={...e};d(t)},isLoading:f}}function w(){let e=(0,c.useRouter)(),{locale:t}=e,{mutate:n,isLoading:o}=(0,r.useMutation)(s.Z.orders.create,{onSuccess:t=>{(null==t?void 0:t.tracking_number)&&e.push(f.Z.order(null==t?void 0:t.tracking_number))},onError:e=>{let{response:{data:t}}=null!=e?e:{};a.Am.error(null==t?void 0:t.message)}});return{createOrder:function(e){let r={...e,language:t};n(r)},isLoading:o}}function b(){let{mutate:e}=(0,r.useMutation)(s.Z.orders.generateDownloadLink,{onSuccess:e=>{var t;(t=document.createElement("a")).href=e,t.setAttribute("download","record.name"),t.click()}});return{generateDownloadableUrl:function(t){e({digital_file_id:t})}}}function N(){let[e,t]=(0,i.KO)(d.Jb);return(0,r.useMutation)(s.Z.orders.verify,{onSuccess:e=>{e&&t(e)},onError:e=>{let{response:{data:t}}=null!=e?e:{};a.Am.error(null==t?void 0:t.message)}})}},12083:function(e,t,n){"use strict";n.d(t,{ZP:function(){return u}});var r=n(67294),o=n(11163),a=n(74833);function l(e){let{amount:t,currencyCode:n,locale:r}=e,o=new Intl.NumberFormat(r,{style:"currency",currency:n});return o.format(t)}function u(e){let{settings:{currency:t}}=(0,a.rV)(),{amount:n,baseAmount:u,currencyCode:s}={...e,currencyCode:null!=t?t:"USD"},{locale:i}=(0,o.useRouter)(),d=(0,r.useMemo)(()=>{if("number"!=typeof n||!s)return"";let e=i||"en";return u?function(e){let{amount:t,baseAmount:n,currencyCode:r,locale:o}=e,a=n>t,u=new Intl.NumberFormat(o,{style:"percent"}),s=a?u.format((n-t)/n):null,i=l({amount:t,currencyCode:r,locale:o}),d=a?l({amount:n,currencyCode:r,locale:o}):null;return{price:i,basePrice:d,discount:s}}({amount:n,baseAmount:u,currencyCode:s,locale:e}):l({amount:n,currencyCode:s,locale:e})},[n,u,s,i]);return"string"==typeof d?{price:d,basePrice:null,discount:null}:d}},93279:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return k}});var r=n(85893),o=n(5666),a=n(12083),l=n(20868),u=n(23139),s=n(67294),i=n(27484),d=n.n(i),c=n(84110),f=n.n(c),g=n(70178),m=n.n(g),x=n(29387),p=n.n(x),v=n(10361),h=n(49744),y=n(66056),w=n(10758),b=n(87507),N=n(54246),j=n(88909);let R=e=>{let{status:t}=e,{t:n}=(0,l.$G)("common");switch(t.toLowerCase()){case"approved":return(0,r.jsx)(v.Z,{text:n("text-approved"),color:"bg-accent"});case"rejected":return(0,r.jsx)(v.Z,{text:n("text-rejected"),color:"bg-red-500"});case"processing":return(0,r.jsx)(v.Z,{text:n("text-processing"),color:"bg-yellow-500"});default:return(0,r.jsx)(v.Z,{text:n("text-pending"),color:"bg-purple-500"})}},_=()=>{let{t:e}=(0,l.$G)("common"),{alignLeft:t,alignRight:n}=(0,u.S)(),{error:i,refunds:c}=(0,j.rT)({limit:10}),g=(0,s.useMemo)(()=>[{title:e("text-id"),dataIndex:"id",key:"id",align:"center",ellipsis:!0,className:"!text-sm",width:75},{title:e("text-reason"),dataIndex:"title",key:"title",align:t,ellipsis:!0,className:"!text-sm",width:220,render:function(e){return(0,r.jsx)("p",{className:"whitespace-nowrap",children:e})}},{title:e("text-status"),dataIndex:"status",key:"status",align:"center",ellipsis:!0,className:"!text-sm",width:160,render:function(e){return(0,r.jsx)(R,{status:e})}},{title:e("text-tracking-number"),dataIndex:"",key:"pivot",align:"center",className:"!text-sm",width:160,render:function(e){var t;return(0,r.jsx)("p",{children:null==e?void 0:null===(t=e.order)||void 0===t?void 0:t.tracking_number})}},{title:e("text-amount"),dataIndex:"amount",key:"amount",align:n,className:"!text-sm",width:150,render:function(e){let{price:t}=(0,a.ZP)({amount:e});return(0,r.jsx)("p",{children:t})}},{title:e("text-date"),dataIndex:"created_at",key:"created_at",align:"center",className:"!text-sm",width:160,render:e=>(d().extend(f()),d().extend(m()),d().extend(p()),(0,r.jsx)("span",{className:"whitespace-nowrap",children:d().utc(e).tz(d().tz.guess()).fromNow()}))},{title:e("text-details"),dataIndex:"order",key:"order",align:"center",className:"!text-sm",width:100,render:t=>(0,r.jsx)(w.Z,{href:b.Z.order(null==t?void 0:t.tracking_number),className:"inline-block text-body transition duration-200 hover:text-accent-hover focus:text-accent-hover",title:e("text-view-order"),children:(0,r.jsx)(y.b,{width:20})})}],[t,n,e]);return i?(0,r.jsx)(N.default,{message:null==i?void 0:i.message}):(0,r.jsxs)(h.Z,{className:"min-h-screen w-full self-stretch overflow-hidden lg:min-h-0",children:[(0,r.jsx)("h3",{className:"mb-8 text-center text-2xl font-semibold text-heading",children:e("text-my-refunds")}),(0,r.jsx)(o.i,{columns:g,data:c,rowKey:e=>e.created_at,className:"orderDetailsTable w-full border border-gray-200",scroll:{x:500,y:700}})]})};var M=n(54249),Z=n(11018),S=!0;function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.Z,{noindex:!0,nofollow:!0}),(0,r.jsx)(_,{})]})}k.authenticationRequired=!0,k.getLayout=function(e){return(0,r.jsx)(Z.Z,{children:e})}}},function(e){e.O(0,[1238,2090,3139,7849,7214,9774,2888,179],function(){return e(e.s=85816)}),_N_E=e.O()}]);