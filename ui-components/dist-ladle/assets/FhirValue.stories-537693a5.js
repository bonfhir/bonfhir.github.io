import{S as q,s as M,n as Z,i as P,a as L,t as z,f as H,c as O,r as B,b as Y,d as Q,e as v,u as G,p as J,g as X,h as _,j as $,k as i,F as ee}from"./index-39fdbe32.js";class te extends q{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),N(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const s=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),M(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const a=this.hasListeners();a&&j(this.currentQuery,n,this.options,s)&&this.executeFetch(),this.updateResult(r),a&&(this.currentQuery!==n||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==n||this.options.enabled!==s.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Z)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),P||this.currentResult.isStale||!L(this.options.staleTime))return;const r=z(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(P||this.options.enabled===!1||!L(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||H.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const s=this.currentQuery,n=this.options,a=this.currentResult,l=this.currentResultState,o=this.currentResultOptions,d=e!==s,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:S,error:b,errorUpdatedAt:E,fetchStatus:R,status:h}=c,k=!1,A=!1,m;if(r._optimisticResults){const y=this.hasListeners(),T=!y&&N(e,r),W=y&&j(e,s,r,n);(T||W)&&(R=O(e.options.networkMode)?"fetching":"paused",S||(h="loading")),r._optimisticResults==="isRestoring"&&(R="idle")}if(r.keepPreviousData&&!c.dataUpdatedAt&&p!=null&&p.isSuccess&&h!=="error")m=p.data,S=p.dataUpdatedAt,h=p.status,k=!0;else if(r.select&&typeof c.data<"u")if(a&&c.data===(l==null?void 0:l.data)&&r.select===this.selectFn)m=this.selectResult;else try{this.selectFn=r.select,m=r.select(c.data),m=B(a==null?void 0:a.data,m,r),this.selectResult=m,this.selectError=null}catch(y){this.selectError=y}else m=c.data;if(typeof r.placeholderData<"u"&&typeof m>"u"&&h==="loading"){let y;if(a!=null&&a.isPlaceholderData&&r.placeholderData===(o==null?void 0:o.placeholderData))y=a.data;else if(y=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof y<"u")try{y=r.select(y),this.selectError=null}catch(T){this.selectError=T}typeof y<"u"&&(h="success",m=B(a==null?void 0:a.data,y,r),A=!0)}this.selectError&&(b=this.selectError,m=this.selectResult,E=Date.now(),h="error");const I=R==="fetching",C=h==="loading",x=h==="error";return{status:h,fetchStatus:R,isLoading:C,isSuccess:h==="success",isError:x,isInitialLoading:C&&I,data:m,dataUpdatedAt:S,error:b,errorUpdatedAt:E,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>f.dataUpdateCount||c.errorUpdateCount>f.errorUpdateCount,isFetching:I,isRefetching:I&&!C,isLoadingError:x&&c.dataUpdatedAt===0,isPaused:R==="paused",isPlaceholderData:A,isPreviousData:k,isRefetchError:x&&c.dataUpdatedAt!==0,isStale:U(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,M(s,r))return;this.currentResult=s;const n={cache:!0},a=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const o=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&o.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==r[f]&&o.has(f)})};(e==null?void 0:e.listeners)!==!1&&a()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!Y(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){Q.batch(()=>{if(e.onSuccess){var r,s,n,a;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(n=(a=this.options).onSettled)==null||n.call(a,this.currentResult.data,null)}else if(e.onError){var l,o,d,f;(l=(o=this.options).onError)==null||l.call(o,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(p=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function re(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function N(t,e){return re(t,e)||t.state.dataUpdatedAt>0&&F(t,e,e.refetchOnMount)}function F(t,e,r){if(e.enabled!==!1){const s=typeof r=="function"?r(t):r;return s==="always"||s!==!1&&U(t,e)}return!1}function j(t,e,r,s){return r.enabled!==!1&&(t!==e||s.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&U(t,r)}function U(t,e){return t.isStaleByTime(e.staleTime)}var D={},se={get exports(){return D},set exports(t){D=t}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=v;function ne(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ae=typeof Object.is=="function"?Object.is:ne,ie=g.useState,ue=g.useEffect,le=g.useLayoutEffect,ce=g.useDebugValue;function oe(t,e){var r=e(),s=ie({inst:{value:r,getSnapshot:e}}),n=s[0].inst,a=s[1];return le(function(){n.value=r,n.getSnapshot=e,w(n)&&a({inst:n})},[t,r,e]),ue(function(){return w(n)&&a({inst:n}),t(function(){w(n)&&a({inst:n})})},[t]),ce(r),r}function w(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!ae(t,r)}catch{return!0}}function he(t,e){return e()}var de=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?he:oe;V.useSyncExternalStore=g.useSyncExternalStore!==void 0?g.useSyncExternalStore:de;(function(t){t.exports=V})(se);const fe=D.useSyncExternalStore,K=v.createContext(!1),ye=()=>v.useContext(K);K.Provider;function ve(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const pe=v.createContext(ve()),me=()=>v.useContext(pe);function Re(t,e){return typeof t=="function"?t(...e):!!t}const Se=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},ge=t=>{v.useEffect(()=>{t.clearReset()},[t])},be=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&Re(r,[t.error,s]),Qe=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Ee=(t,e)=>t.isLoading&&t.isFetching&&!e,Ie=(t,e,r)=>(t==null?void 0:t.suspense)&&Ee(e,r),Ce=(t,e,r)=>e.fetchOptimistic(t).then(({data:s})=>{t.onSuccess==null||t.onSuccess(s),t.onSettled==null||t.onSettled(s,null)}).catch(s=>{r.clearReset(),t.onError==null||t.onError(s),t.onSettled==null||t.onSettled(void 0,s)});function xe(t,e){const r=G({context:t.context}),s=ye(),n=me(),a=r.defaultQueryOptions(t);a._optimisticResults=s?"isRestoring":"optimistic",a.onError&&(a.onError=Q.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=Q.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=Q.batchCalls(a.onSettled)),Qe(a),Se(a,n),ge(n);const[l]=v.useState(()=>new e(r,a)),o=l.getOptimisticResult(a);if(fe(v.useCallback(d=>s?()=>{}:l.subscribe(Q.batchCalls(d)),[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),v.useEffect(()=>{l.setOptions(a,{listeners:!1})},[a,l]),Ie(a,o,s))throw Ce(a,l,n);if(be({result:o,errorResetBoundary:n,useErrorBoundary:a.useErrorBoundary,query:l.getCurrentQuery()}))throw o.error;return a.notifyOnChangeProps?o:l.trackResult(o)}function Te(t,e,r){const s=J(t,e,r);return xe(s,te)}const we={read:(t,e,r)=>[t,e,"read",r],vread:(t,e,r,s)=>[t,e,"vread",r,s],history:(t,e,r)=>[t,e,"history",r],search:(t,e,r,s)=>[t,"search",e,r,s],infiniteSearch:(t,e,r)=>[t,"infiniteSearch",e,r],findInSearch:(t,e,r)=>{try{const s=(t.getQueriesData([e,"search"])||[]).flatMap(([,n])=>{var a;return(a=n==null?void 0:n.nav)==null?void 0:a.type(e)}).find(n=>(n==null?void 0:n.id)===r);return s||(t.getQueriesData([e,"infiniteSearch"])||[]).flatMap(([,n])=>(n==null?void 0:n.pages)||[]).flatMap(n=>{var a;return(a=n==null?void 0:n.nav)==null?void 0:a.type(e)}).find(n=>(n==null?void 0:n.id)===r)}catch(s){console.error(s);return}},capabilities:()=>["capabilities"],execute:(t,e,r,s)=>[e,r,"execute",t,s],invalidateQueries:(t,e,r)=>{t.invalidateQueries([e,r]),t.invalidateQueries([e,"search"]),t.invalidateQueries([e,"infiniteSearch"])}};function Fe(t,e,r){const s=X(),n=v.useCallback(()=>s.fhirClient.execute(t,e),[s.fhirClient,t,e==null?void 0:e.type,e==null?void 0:e.id,e==null?void 0:e.parameters]);return Te({...r,queryKey:we.execute(t,e==null?void 0:e.type,e==null?void 0:e.id,e==null?void 0:e.parameters),queryFn:n})}function u(t){var l,o,d,f,p,c,S;const e=_(),[,r]=v.useState(Date.now()),{valueSetExpand:s,...n}=t.options||{},a=Fe("$expand",{type:"ValueSet",parameters:s},{enabled:!!s,cacheTime:1/0});return v.useEffect(()=>{var R,h;if(((R=t.options)==null?void 0:R.dateStyle)!=="relative")return;const b=(h=t.options)==null?void 0:h.refreshInterval,E=setInterval(()=>{r(Date.now())},$(b)?3e4:b);return()=>{clearInterval(E)}},[t.type,(l=t.options)==null?void 0:l.dateStyle,(o=t.options)==null?void 0:o.refreshInterval]),e.renderer.value?e.renderer.value({...t,dataTypeAdapter:e.dataTypeAdapter,valueSetExpandQuery:a,formatted:e.dataTypeAdapter[t.type].format(t.value,{...n,valueSetExpansions:n.valueSetExpansions||((f=(d=a.data)==null?void 0:d.expansion)==null?void 0:f.contains)})}):t.type==="markdown"&&((p=t.options)==null?void 0:p.style)==="html"?i("div",{dangerouslySetInnerHTML:{__html:e.dataTypeAdapter.markdown.format(t.value,t.options)}}):i(ee,{children:e.dataTypeAdapter[t.type].format(t.value,{...n,valueSetExpansions:n.valueSetExpansions||((S=(c=a.data)==null?void 0:c.expansion)==null?void 0:S.contains)})})}const Ae=()=>i(u,{type:"code",value:"C"}),Me=()=>i(u,{type:"code",value:"C",options:{valueSetExpand:{url:"http://hl7.org/fhir/ValueSet/marital-status"}}}),Pe=()=>i(u,{type:"coding",value:{code:"ADMIN",display:"Administrative",system:"http://hl7.org/fhir/ValueSet/contactentity-type"}}),Le=()=>i(u,{type:"codeableConcept",value:{coding:[{code:"ADMIN",display:"Administrative",system:"http://hl7.org/fhir/ValueSet/contactentity-type"}],text:"Administrative"}}),Be=()=>i(u,{type:"boolean",value:!1}),Ne=()=>i(u,{type:"boolean",value:!0,options:{labels:{true:"Yes",false:"No"}}}),je=()=>i(u,{type:"date",value:"2023-01-01"}),Ve=()=>i(u,{type:"date",value:"2023-01-01",options:{dateStyle:"full"}}),Ke=()=>i(u,{type:"dateTime",value:"2023-02-01T01:57:25.336Z"}),We=()=>i(u,{type:"dateTime",value:"2023-02-01T01:57:25.336Z",options:{dateStyle:"full",timeStyle:"full"}}),qe=()=>i(u,{type:"instant",value:"2023-02-01T01:57:25.336Z"}),Ze=()=>i(u,{type:"integer",value:123456789}),ze=()=>i(u,{type:"integer",value:123456789,options:{notation:"scientific"}}),He=()=>i(u,{type:"integer",value:123456789,options:{notation:"compact-long"}}),Oe=()=>i(u,{type:"decimal",value:"12.00"}),Ye=()=>i(u,{type:"uri",value:"https://bonfhir.dev"}),Ge=()=>i(u,{type:"url",value:"https://bonfhir.dev"}),Je=()=>i(u,{type:"canonical",value:"https://bonfhir.dev"}),Xe=()=>i(u,{type:"markdown",value:De,options:{style:"html"}}),_e=()=>i(u,{type:"money",value:{value:50,currency:"USD"}}),$e=()=>i(u,{type:"period",value:{start:"2023-01-01",end:"2023-03-20"}}),et=()=>i(u,{type:"quantity",value:{comparator:">",value:12,unit:"mg"}}),tt=()=>i(u,{type:"range",value:{low:{value:12,unit:"mg"},high:{value:50,unit:"mg"}}}),rt=()=>i(u,{type:"ratio",value:{numerator:{value:5},denominator:{value:12}}}),st=()=>i(u,{type:"ratioRange",value:{lowNumerator:{value:5},highNumerator:{value:8},denominator:{value:12}}}),nt=()=>i(u,{type:"simpleQuantity",value:{value:15,unit:"l",operator:null}}),at=()=>i(u,{type:"age",value:{value:25,code:"y"}}),it=()=>i(u,{type:"count",value:{value:25,code:"cats"}}),ut=()=>i(u,{type:"count",value:{value:25,code:"km"}}),lt=()=>i(u,{type:"count",value:{value:25,code:"min."}}),De=`
An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺
`;typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{at as Age,Be as Boolean,Ne as BooleanWithLabel,Je as Canonical,Ae as CodeSimple,Me as CodeWithExpand,Le as CodeableConcept,Pe as Coding,it as Count,je as Date,Ve as DateFull,Ke as Datetime,We as DatetimeFull,Oe as Decimal,ut as Distance,lt as Duration,qe as Instant,Ze as Integer,He as IntegerCompactLong,ze as IntegerScientific,Xe as Markdown,_e as Money,$e as Period,et as Quantity,tt as Range,rt as Ratio,st as RatioRange,nt as SimpleQuantity,Ye as Uri,Ge as Url};
