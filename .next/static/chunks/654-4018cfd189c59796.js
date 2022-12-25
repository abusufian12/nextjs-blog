"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654,148],{68117:function(e,r,t){t.d(r,{v:function(){return a}});var l=t(85893);let a=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 7.2",width:12,height:7.2,...e,children:(0,l.jsx)("path",{d:"M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z",fill:"currentColor"})})},20582:function(e,r,t){var l=t(85893);let a=e=>{let{width:r,height:t,strokeWidth:a=2,className:s}=e;return(0,l.jsx)("svg",{width:r,height:t,className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:a,d:"M7 16l-4-4m0 0l4-4m-4 4h18"})})};r.Z=a},91095:function(e,r,t){t.d(r,{W:function(){return a}});var l=t(85893);let a=e=>(0,l.jsx)("svg",{viewBox:"0 0 17.048 18",...e,children:(0,l.jsx)("path",{d:"M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z",transform:"translate(-367.297 -371.285)",fill:"currentColor"})})},654:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var l=t(85893),a=t(6512),s=t(68117),n=t(20868);let o=e=>{let{title:r,children:t,...o}=e,{t:i}=(0,n.$G)("common");return(0,l.jsx)(a.p,{defaultOpen:!0,...o,children:e=>{let{open:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p.Button,{className:"w-full flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-accent focus:ring-opacity-40",children:[(0,l.jsx)("span",{className:"font-bold text-heading",children:i(r)}),(0,l.jsx)(s.v,{className:"w-2.5 h-2.5 ".concat(n?"transform rotate-180":"")})]}),(0,l.jsx)(a.p.Panel,{className:"pt-4",children:t})]})}})};var i=t(60148),c=t(11163),d=t(46663);t(30939);var u=t(96749),m=t(67294),h=t(31567);let{Range:x}=u.ZP,f=[0,1e3],p=()=>{let{t:e}=(0,h.$)("common"),r=(0,c.useRouter)(),t=(0,m.useMemo)(()=>r.query.price?r.query.price.split(","):f,[r.query.price]),[a,s]=(0,m.useState)(t);return(0,m.useEffect)(()=>{s(t)},[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"sr-only",children:e("text-sort-by-price")}),(0,l.jsx)(x,{allowCross:!1,min:0,max:2e3,defaultValue:a,value:a,onChange:e=>s(e),onAfterChange:function(e){r.push({pathname:r.pathname,query:{...r.query,price:e.join(",")}})}}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-3 mt-4",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start p-2 bg-gray-100 border border-gray-200 rounded",children:[(0,l.jsx)("label",{className:"text-sm font-semibold text-gray-400",children:"Min"}),(0,l.jsx)("span",{className:"text-sm font-bold text-heading",children:a[0]})]}),(0,l.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 border border-gray-200 rounded",children:[(0,l.jsx)("label",{className:"text-sm font-semibold text-gray-400",children:"Max"}),(0,l.jsx)("span",{className:"text-sm font-bold text-heading",children:a[1]})]})]})]})},g=e=>{let{children:r,values:t,onChange:a}=e,s=(0,m.useCallback)(e=>{let{value:r}=e.target,l=t.includes(r)?t.filter(e=>e!==r):[...t,r];a(l)},[t,a]);return(0,l.jsx)(l.Fragment,{children:m.Children.map(r,e=>m.isValidElement(e)?m.cloneElement(e,{onChange:s,checked:t.includes(e.props.value)}):e)})};var b=t(51010),y=t(90305),j=t(43386),v=t(54246),w=t(26631);let N=e=>{let{categories:r}=e,{t}=(0,h.$)("common"),a=(0,c.useRouter)(),s=(0,m.useMemo)(()=>a.query.category?a.query.category.split(","):[],[a.query.category]),[n,o]=(0,m.useState)(()=>s);return(0,m.useEffect)(()=>{o(s)},[s]),(0,l.jsx)("div",{className:"relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",children:(0,l.jsxs)(y.Z,{style:{maxHeight:"400px"},className:"pb-6",children:[(0,l.jsx)("span",{className:"sr-only",children:t("text-categories")}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-4",children:(0,l.jsx)(g,{values:n,onChange:function(e){a.push({pathname:a.pathname,query:{...a.query,category:e.join(",")}})},children:r.map(e=>(0,l.jsx)(b.Z,{label:e.name,name:e.slug,value:e.slug,theme:"secondary"},e.id))})})]})})},C=e=>{let{type:r}=e,{query:t,locale:a}=(0,c.useRouter)(),{categories:s,isLoading:n,error:o}=(0,j.L)({...r?{type:r}:{type:t.searchType},limit:1e3});return o?(0,l.jsx)(v.default,{message:o.message}):n?(0,l.jsx)("div",{className:"flex w-full items-center justify-center py-5",children:(0,l.jsx)(w.Z,{className:"h-6 w-6",simple:!0})}):(0,l.jsx)(N,{categories:s})};var R=t(88767),S=t(65927),q=t(64648),k=t(59787);let Z=e=>{var r,t;let{locale:l}=(0,c.useRouter)(),a={...e,language:l},{data:s,isLoading:n,isFetchingNextPage:o,fetchNextPage:i,hasNextPage:d,error:u}=(0,R.useInfiniteQuery)([q.P.TAGS,a],e=>{let{queryKey:r,pageParam:t}=e;return S.Z.tags.all(Object.assign({},r[1],t))},{getNextPageParam:e=>{let{current_page:r,last_page:t}=e;return t>r&&{page:r+1}}});return{tags:null!==(t=null==s?void 0:null===(r=s.pages)||void 0===r?void 0:r.flatMap(e=>e.data))&&void 0!==t?t:[],paginatorInfo:Array.isArray(null==s?void 0:s.pages)?(0,k.Q)(null==s?void 0:s.pages[s.pages.length-1]):null,isLoading:n,isLoadingMore:o,error:u,loadMore:function(){i()},hasMore:Boolean(d)}},F=e=>{let{tags:r}=e,{t}=(0,h.$)("common"),a=(0,c.useRouter)(),s=(0,m.useMemo)(()=>{var e;return a.query.tags?null===(e=a.query.tags)||void 0===e?void 0:e.split(","):[]},[a.query.tags]),[n,o]=(0,m.useState)(s);return(0,m.useEffect)(()=>{o(s)},[s]),(0,l.jsx)("div",{className:"relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",children:(0,l.jsxs)(y.Z,{style:{maxHeight:"400px"},className:"pb-6",children:[(0,l.jsx)("span",{className:"sr-only",children:t("text-tags")}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-4",children:(0,l.jsx)(g,{values:n,onChange:function(e){a.push({pathname:a.pathname,query:{...a.query,tags:e.join(",")}})},children:r.map(e=>(0,l.jsx)(b.Z,{label:e.name,name:e.slug,value:e.slug,theme:"secondary"},e.id))})})]})})},M=()=>{let{tags:e,isLoading:r,error:t}=Z({limit:100});return t?(0,l.jsx)(v.default,{message:null==t?void 0:t.message}):r?(0,l.jsx)("div",{className:"flex items-center justify-center w-full py-5",children:(0,l.jsx)(w.Z,{className:"w-6 h-6",simple:!0})}):(0,l.jsx)(F,{tags:e})};var E=t(61416);let B=e=>{let{manufacturers:r}=e,{t}=(0,h.$)("common"),a=(0,c.useRouter)(),s=(0,m.useMemo)(()=>a.query.manufacturer?a.query.manufacturer.split(","):[],[a.query.manufacturer]),[n,o]=(0,m.useState)(s);return(0,m.useEffect)(()=>{o(s)},[s]),(0,l.jsx)("div",{className:"relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0",children:(0,l.jsxs)(y.Z,{style:{maxHeight:"400px"},className:"pb-6",children:[(0,l.jsx)("span",{className:"sr-only",children:t("text-manufacturers")}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-4",children:(0,l.jsx)(g,{values:n,onChange:function(e){a.push({pathname:a.pathname,query:{...a.query,manufacturer:e.join(",")}})},children:r.map(e=>(0,l.jsx)(b.Z,{label:e.name,name:e.slug,value:e.slug,theme:"secondary"},e.id))})})]})})},P=()=>{let{locale:e}=(0,c.useRouter)(),{manufacturers:r,isLoading:t,error:a}=(0,E.e)({language:e,limit:100});return a?(0,l.jsx)(v.default,{message:a.message}):t?(0,l.jsx)("div",{className:"flex w-full items-center justify-center py-5",children:(0,l.jsx)(w.Z,{className:"h-6 w-6",simple:!0})}):(0,l.jsx)(B,{manufacturers:r})};var A=t(94184),L=t.n(A),_=t(91131),T=t(67246),$=t(20582),z=t(23139),I=t(67896);let O=e=>{let{children:r,title:t}=e;return(0,l.jsx)("div",{className:"border-b border-gray-200 py-7 last:border-0",children:(0,l.jsx)(o,{title:t,children:r})})};function H(){let{t:e}=(0,n.$G)("common"),r=(0,c.useRouter)();return(0,l.jsx)("button",{className:"text-sm font-semibold transition-colors text-body hover:text-red-500 focus:text-red-500 focus:outline-none lg:m-0",onClick:function(){let{price:e,category:t,sortedBy:l,orderBy:a,tags:s,manufacturer:n,text:o,...i}=r.query;r.push({pathname:r.pathname,query:{...i,..."/[searchType]/search"!==r.route&&{manufacturer:n}}})},children:e("text-clear-all")})}let V=e=>{let{type:r,showManufacturers:t=!0,className:a}=e,s=(0,c.useRouter)(),{isRTL:o}=(0,z.S)(),{t:u}=(0,n.$G)("common"),[m,h]=(0,_.KO)(T.P);return(0,l.jsxs)("div",{className:L()("flex bg-white w-full h-full lg:h-auto flex-col lg:border border-gray-200 rounded-xl",a),children:[(0,l.jsxs)("div",{className:"sticky top-0 z-10 flex items-center justify-between px-5 py-6 bg-white border-b border-gray-200 lg:static rounded-tl-xl rounded-tr-xl",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-3 rtl:space-x-reverse lg:space-x-0",children:[(0,l.jsxs)("button",{className:"text-body focus:outline-none lg:hidden",onClick:()=>h({display:!1,view:""}),children:[(0,l.jsx)($.Z,{className:L()("h-7",{"rotate-180":o}),strokeWidth:1.7}),(0,l.jsx)("span",{className:"sr-only",children:u("text-close")})]}),(0,l.jsx)("h3",{className:"text-xl font-semibold lg:text-2xl text-heading",children:u("text-filter")})]}),(0,l.jsx)(H,{})]}),(0,l.jsxs)("div",{className:"flex-1 px-5",children:[(0,l.jsx)(O,{title:"text-search",children:(0,l.jsx)(i.default,{variant:"minimal",label:"search"})}),"/[searchType]/search"!==s.route&&(0,l.jsx)(O,{title:"text-sort",children:(0,l.jsx)(d.Z,{})}),(0,l.jsx)(O,{title:"text-categories",children:(0,l.jsx)(C,{type:r})}),(0,l.jsx)(O,{title:"text-sort-by-price",children:(0,l.jsx)(p,{})}),(0,l.jsx)(O,{title:"text-tags",children:(0,l.jsx)(M,{})}),t&&(0,l.jsx)(O,{title:"text-manufacturers",children:(0,l.jsx)(P,{})})]}),(0,l.jsx)("div",{className:"p-5 bg-white sticky bottom-0 z-10 border-t border-gray-200 mt-auto lg:hidden",children:(0,l.jsx)(I.Z,{className:"w-full",onClick:()=>h({display:!1,view:""}),children:"Show Products"})})]})};var G=V},46663:function(e,r,t){var l=t(85893),a=t(90305),s=t(27499),n=t(40486),o=t(11163),i=t(67294),c=t(31567),d=t(23139);let u=[{id:"1",key:"sorting",label:"New Released",value:"created_at",orderBy:"created_at",sortedBy:"DESC"},{id:"2",key:"sorting",label:"Sort by Price: Low to High",value:"min_price",orderBy:"min_price",sortedBy:"ASC"},{id:"3",key:"sorting",label:"Sort by Price: High to Low",value:"max_price",orderBy:"max_price",sortedBy:"DESC"}],m=e=>{var r;let{variant:t="radio"}=e,m=(0,o.useRouter)(),{t:h}=(0,c.$)("common"),{isRTL:x}=(0,d.S)(),[f,p]=(0,i.useState)(()=>null!==(r=u.find(e=>e.orderBy===m.query.orderBy))&&void 0!==r?r:u[0]);function g(e){let{orderBy:r,sortedBy:t}=e;m.push({pathname:m.pathname,query:{...m.query,orderBy:r,sortedBy:t}}),p(e)}return(0,i.useEffect)(()=>{m.query.orderBy||p(u[0])},[m.query.orderBy]),(0,l.jsxs)(l.Fragment,{children:["dropdown"===t&&(0,l.jsx)(s.Z,{defaultValue:f,isRtl:x,options:u,isSearchable:!1,onChange:g}),"radio"===t&&(0,l.jsx)(a.Z,{style:{maxHeight:"400px"},children:(0,l.jsxs)(n.E,{value:f,onChange:g,children:[(0,l.jsx)(n.E.Label,{className:"sr-only",children:h("text-sort")}),(0,l.jsx)("div",{className:"space-y-4",children:u.map(e=>(0,l.jsx)(n.E.Option,{value:e,children:r=>{let{checked:t}=r;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex items-center w-full cursor-pointer",children:[(0,l.jsx)("span",{className:"h-[18px] w-[18px] rounded-full bg-white ltr:mr-3 rtl:ml-3 ".concat(t?"border-[5px] border-gray-800":"border border-gray-600")}),(0,l.jsx)(n.E.Label,{as:"p",className:"text-sm text-body",children:e.label})]})})}},e.id))})]})})]})};r.Z=m},51010:function(e,r,t){var l=t(85893),a=t(94184),s=t.n(a),n=t(67294);let o=n.forwardRef((e,r)=>{let{className:t,label:a,name:n,error:o,theme:i="primary",...c}=e;return(0,l.jsxs)("div",{className:t,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{id:n,name:n,type:"checkbox",ref:r,className:"checkbox",...c}),(0,l.jsx)("label",{htmlFor:n,className:s()("text-body text-sm",{primary:"primary"===i,secondary:"secondary"===i}),children:a})]}),o&&(0,l.jsx)("p",{className:"my-2 text-xs ltr:text-right rtl:text-left text-red-500",children:o})]})});o.displayName="Checkbox",r.Z=o},69355:function(e,r,t){var l=t(85893),a=t(94184),s=t.n(a),n=t(91095),o=t(18855),i=t(20868);let c={normal:"bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent",minimal:"search-minimal bg-gray-100 ltr:pl-10 rtl:pr-10 ltr:pr-4 rtl:pl-4 ltr:md:pl-14 rtl:md:pr-14 border border-transparent focus:border-accent focus:bg-light",flat:"bg-white ltr:pl-10 rtl:pr-10 ltr:pr-4 rtl:pl-4 ltr:md:pl-14 rtl:md:pr-14 border-0","with-shadow":"search-with-shadow bg-light ltr:pl-10 rtl:pr-10 ltr:pr-12 rtl:pl-12 ltr:md:pl-14 rtl:md:pr-14 focus:bg-light border-0"},d=e=>{let{className:r,label:t,onSubmit:a,onClearSearch:d,variant:u="normal",value:m,...h}=e,{t:x}=(0,i.$G)();return(0,l.jsx)("form",{onSubmit:a,className:s()("w-full",r),children:(0,l.jsxs)("div",{className:s()("relative flex rounded md:rounded-lg",{"h-14 shadow-900":"normal"===u,"h-11 md:h-12":"minimal"===u,"h-auto !rounded-none":"flat"===u,"h-16 shadow-downfall":"with-shadow"===u}),children:[(0,l.jsx)("label",{htmlFor:t,className:"sr-only",children:t}),(0,l.jsx)("input",{id:t,type:"text",value:m,autoComplete:"off",className:s()("search item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-0",{"placeholder:text-slate-400":"flat"===u},c[u]),...h}),m&&(0,l.jsxs)("button",{type:"button",onClick:d,className:s()("absolute flex h-full w-10 cursor-pointer items-center justify-center text-body transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-none md:w-14",{"ltr:right-36 rtl:left-36":"normal"===u,"ltr:right-0 rtl:left-0":"normal"!==u}),children:[(0,l.jsx)("span",{className:"sr-only",children:x("common:text-close")}),(0,l.jsx)(o.T,{className:"h-3.5 w-3.5 md:h-3 md:w-3"})]}),"normal"===u?(0,l.jsxs)("button",{className:"flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none",children:[(0,l.jsx)(n.W,{className:"h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"}),x("common:text-search")]}):(0,l.jsxs)("button",{className:"absolute flex h-full w-10 items-center justify-center text-body transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-none ltr:left-0 rtl:right-0 md:w-14",children:[(0,l.jsx)("span",{className:"sr-only",children:x("common:text-search")}),(0,l.jsx)(n.W,{className:"h-4 w-4"})]})]})})};r.Z=d},60148:function(e,r,t){t.r(r);var l=t(85893),a=t(69355),s=t(11163),n=t(20868),o=t(24815);let i=e=>{let{label:r,variant:t,...i}=e,{t:c}=(0,n.$G)(),d=(0,s.useRouter)(),{searchTerm:u,updateSearchTerm:m}=(0,o.Rx)(),h=e=>{let{value:r}=e.target;m(r)},x=e=>{if(e.preventDefault(),!u)return;let{pathname:r,query:t}=d;d.push({pathname:r,query:{...t,text:u}},void 0,{scroll:!1})};return(0,l.jsx)(a.Z,{label:r,onSubmit:x,onClearSearch:function(){m("");let{pathname:e,query:r}=d,{text:t,...l}=r;t&&d.push({pathname:e,query:{...l}},void 0,{scroll:!1})},onChange:h,value:u,name:"search",placeholder:c("common:text-search-placeholder"),variant:t,...i})};r.default=i},27499:function(e,r,t){t.d(r,{Z:function(){return i}});var l=t(85893),a=t(67294),s=t(56369);let n={option:(e,r)=>({...e,fontSize:"0.875rem",color:"rgb(var(--text-heading))",paddingLeft:16,paddingRight:16,paddingTop:12,paddingBottom:12,cursor:"pointer",borderBottom:"1px solid #E5E7EB",backgroundColor:r.isSelected?"#efefef":r.isFocused?"#F9FAFB":"#ffffff"}),control:(e,r)=>({width:r.selectProps.width,display:"flex",alignItems:"center",minHeight:r.selectProps.isMinimal?0:50,backgroundColor:"#ffffff",borderRadius:5,border:r.selectProps.isMinimal?"none":"1px solid #F1F1F1",borderColor:r.isFocused?"rgb(var(--color-gray-500))":"#F1F1F1",boxShadow:r.menuIsOpen&&!r.selectProps.isMinimal&&"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,r)=>({...e,color:"rgb(var(--text-heading))","&:hover":{color:"rgb(var(--text-heading))"}}),clearIndicator:(e,r)=>({...e,color:r.isFocused?"#9CA3AF":"#cccccc",padding:0,cursor:"pointer","&:hover":{color:"#9CA3AF"}}),menu:(e,r)=>({...e,width:r.selectProps.width,borderRadius:5,border:"1px solid #E5E7EB",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"}),menuList:e=>({...e,paddingTop:0,paddingBottom:0}),valueContainer:(e,r)=>({...e,paddingLeft:r.selectProps.isMinimal?0:r.isRtl?4:16,paddingRight:r.selectProps.isMinimal?0:r.isRtl?16:4}),singleValue:(e,r)=>({...e,fontSize:"0.875rem",fontWeight:600,color:"rgb(var(--text-heading))"}),multiValue:(e,r)=>({...e,backgroundColor:"rgb(var(--color-accent-400))",borderRadius:9999,overflow:"hidden",boxShadow:"0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 0px 2px 0 rgba(0, 0, 0, 0.06)"}),multiValueLabel:(e,r)=>({...e,paddingLeft:10,fontSize:"0.875rem",color:"#ffffff"}),multiValueRemove:(e,r)=>({...e,paddingLeft:0,paddingRight:8,color:"#ffffff",cursor:"pointer","&:hover":{backgroundColor:"rgb(var(--color-accent-300))",color:"#F3F4F6"}}),placeholder:(e,r)=>({...e,fontSize:"0.875rem",color:"rgba(107, 114, 128, 0.7)"}),noOptionsMessage:(e,r)=>({...e,fontSize:"0.875rem",color:"rgba(107, 114, 128, 0.7)"})},o=(0,a.forwardRef)((e,r)=>(0,l.jsx)(s.ZP,{ref:r,styles:n,...e}));o.displayName="Select";var i=o},61416:function(e,r,t){t.d(r,{a:function(){return c},e:function(){return i}});var l=t(88767),a=t(65927),s=t(64648),n=t(59787),o=t(11163);function i(e){var r,t;let{locale:i,query:c}=(0,o.useRouter)(),d={...e,language:i,name:null==c?void 0:c.text},{data:u,isLoading:m,error:h,fetchNextPage:x,hasNextPage:f,isFetching:p,isFetchingNextPage:g}=(0,l.useInfiniteQuery)([s.P.MANUFACTURERS,d],e=>{let{queryKey:r,pageParam:t}=e;return a.Z.manufacturers.all(Object.assign({},r[1],t))},{getNextPageParam:e=>{let{current_page:r,last_page:t}=e;return t>r&&{page:r+1}}});return{manufacturers:null!==(t=null==u?void 0:null===(r=u.pages)||void 0===r?void 0:r.flatMap(e=>e.data))&&void 0!==t?t:[],paginatorInfo:Array.isArray(null==u?void 0:u.pages)?(0,n.Q)(null==u?void 0:u.pages[u.pages.length-1]):null,isLoading:m,error:h,isFetching:p,isLoadingMore:g,loadMore:function(){x()},hasMore:Boolean(f)}}function c(e){let{locale:r}=(0,o.useRouter)(),t={...e,language:r},{data:n,isLoading:i,error:c}=(0,l.useQuery)([s.P.MANUFACTURERS_TOP,t],e=>{let{queryKey:r}=e;return a.Z.manufacturers.top(r[1])});return{manufacturers:null!=n?n:[],isLoading:i,error:c}}}}]);