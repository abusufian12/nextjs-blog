(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6053],{99828:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return r(80601)}])},52381:function(e,t){"use strict";t.Z={src:"/_next/static/media/no-result.b574bcc9.svg",height:453,width:600}},82732:function(e,t,r){"use strict";var n=r(85893),a=r(94184),l=r.n(a),i=r(20868),s=r(82921),o=r(52381);let c=e=>{let{className:t,text:r}=e,{t:a}=(0,i.$G)("common");return(0,n.jsxs)("div",{className:l()("flex flex-col items-center",t),children:[(0,n.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,n.jsx)(s.E,{src:o.Z,alt:a(r||"text-no-result-found"),className:"w-full h-full object-contain"})}),r&&(0,n.jsx)("h3",{className:"w-full text-center text-xl font-semibold text-body my-7",children:a(r)})]})};t.Z=c},80601:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return P},default:function(){return Z}});var n=r(85893),a=r(49744),l=r(54249),i=r(11018),s=r(54246),o=r(20868),c=r(82732),d=r(88767),u=r(65927),f=r(64648),m=r(59787),x=r(23139),h=r(27484),g=r.n(h),y=r(84110),p=r.n(y),b=r(70178),w=r.n(b),j=r(29387),v=r.n(j),N=r(5666),E=r(24561);let O=e=>(0,n.jsxs)(E.ZP,{speed:2,width:"100%",height:300,viewBox:"0 0 875 300",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",...e,children:[(0,n.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"900",height:"35"}),(0,n.jsx)("rect",{x:"0",y:"55",rx:"0",ry:"0",width:"80",height:"245"}),(0,n.jsx)("rect",{x:"105",y:"55",rx:"0",ry:"0",width:"250",height:"245"}),(0,n.jsx)("rect",{x:"380",y:"55",rx:"0",ry:"0",width:"120",height:"245"}),(0,n.jsx)("rect",{x:"525",y:"55",rx:"0",ry:"0",width:"120",height:"245"}),(0,n.jsx)("rect",{x:"670",y:"55",rx:"0",ry:"0",width:"100",height:"245"}),(0,n.jsx)("rect",{x:"795",y:"55",rx:"0",ry:"0",width:"80",height:"245"})]});var k=r(11163);let _=()=>{let{t:e}=(0,o.$G)("common"),{alignLeft:t}=(0,x.S)(),{locale:r}=(0,k.useRouter)(),{reports:a,isLoading:l,isLoadingMore:i,error:h,hasMore:y,loadMore:b}=function(e){var t,r;let{data:n,isLoading:a,error:l,fetchNextPage:i,hasNextPage:s,isFetching:o,isFetchingNextPage:c}=(0,d.useInfiniteQuery)([f.P.MY_REPORTS,e],e=>{let{queryKey:t,pageParam:r}=e;return u.Z.myReports.all(Object.assign({},t[1],r))},{getNextPageParam:e=>{let{current_page:t,last_page:r}=e;return r>t&&{page:t+1}}});return{reports:null!==(r=null==n?void 0:null===(t=n.pages)||void 0===t?void 0:t.flatMap(e=>e.data))&&void 0!==r?r:[],paginatorInfo:Array.isArray(null==n?void 0:n.pages)?(0,m.Q)(null==n?void 0:n.pages[n.pages.length-1]):null,isLoading:a,error:l,isFetching:o,isLoadingMore:c,loadMore:function(){i()},hasMore:Boolean(s)}}({language:r,limit:50});if(h)return(0,n.jsx)(s.default,{message:h.message});let j=[{title:e("text-id"),dataIndex:"id",key:"id",align:"center",className:"!text-sm",width:80},{title:e("text-message"),dataIndex:"message",key:"message",align:t,className:"!text-sm min-w-fit"},{title:e("text-date"),dataIndex:"created_at",key:"created_at",align:"center",className:"!text-sm",width:160,render:e=>(g().extend(p()),g().extend(w()),g().extend(v()),(0,n.jsx)("span",{className:"whitespace-nowrap",children:g().utc(e).tz(g().tz.guess()).fromNow()}))}];return!a.length&&l?(0,n.jsxs)("div",{className:"flex w-full flex-col",children:[(0,n.jsx)("div",{className:"mb-8 flex items-center justify-center sm:mb-10",children:(0,n.jsx)("h1",{className:"text-center text-lg font-semibold text-heading sm:text-xl",children:e("profile-sidebar-my-reports")})}),(0,n.jsx)(O,{uniqueKey:"table-loader"})]}):a.length||l?(0,n.jsxs)("div",{className:"flex w-full flex-col",children:[(0,n.jsx)("h3",{className:"mb-8 text-center text-2xl font-semibold text-heading",children:e("profile-sidebar-my-reports")}),(0,n.jsx)(N.i,{columns:j,data:a,rowKey:e=>e.created_at,className:"w-full border border-gray-200",rowClassName:"!cursor-auto",scroll:{x:350,y:500}})]}):(0,n.jsxs)("div",{className:"flex w-full flex-col",children:[(0,n.jsx)("div",{className:"mb-8 flex items-center justify-between sm:mb-10",children:(0,n.jsx)("h1",{className:"ml-auto text-center text-lg font-semibold text-heading sm:text-xl",children:e("profile-sidebar-my-reports")})}),(0,n.jsx)(c.Z,{text:"text-no-download",className:"mx-auto w-full md:w-7/12"})]})},C=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{noindex:!0,nofollow:!0}),(0,n.jsx)(a.Z,{className:"w-full self-stretch shadow-none sm:shadow",children:(0,n.jsx)(_,{})})]});C.authenticationRequired=!0,C.getLayout=function(e){return(0,n.jsx)(i.Z,{children:e})};var P=!0,Z=C},24561:function(e,t,r){"use strict";var n=r(67294),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e){var t=e.animate,r=e.animateBegin,l=e.backgroundColor,i=e.backgroundOpacity,s=e.baseUrl,o=e.children,c=e.foregroundColor,d=e.foregroundOpacity,u=e.gradientRatio,f=e.gradientDirection,m=e.uniqueKey,x=e.interval,h=e.rtl,g=e.speed,y=e.style,p=e.title,b=e.beforeMask,w=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=m||Math.random().toString(36).substring(6),v=j+"-diff",N=j+"-animated-diff",E=j+"-aria",O="0; "+x+"; 1",k=g+"s";return(0,n.createElement)("svg",a({"aria-labelledby":E,role:"img",style:a(a({},y),h?{transform:"scaleX(-1)"}:null)},w),p?(0,n.createElement)("title",{id:E},p):null,b&&(0,n.isValidElement)(b)?b:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+v+")",style:{fill:"url("+s+"#"+N+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:v},o),(0,n.createElement)("linearGradient",{id:N,gradientTransform:"top-bottom"===f?"rotate(90)":void 0},(0,n.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:O,dur:k,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:d},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:O,dur:k,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:O,dur:k,repeatCount:"indefinite",begin:r})))))};l.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var i=function(e){return e.children?(0,n.createElement)(l,a({},e)):(0,n.createElement)(s,a({},e))},s=function(e){return(0,n.createElement)(i,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=i}},function(e){e.O(0,[1238,2090,3139,7849,7214,9774,2888,179],function(){return e(e.s=99828)}),_N_E=e.O()}]);