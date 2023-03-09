import{S as q,s as M,n as Z,i as P,a as L,t as z,f as H,c as O,r as B,b as Y,d as g,e as p,u as G,p as J,g as X,h as _,j as i,F as $}from"./index-d440388b.js";class ee extends q{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),j(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return T(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return T(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const s=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),M(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const a=this.hasListeners();a&&N(this.currentQuery,n,this.options,s)&&this.executeFetch(),this.updateResult(r),a&&(this.currentQuery!==n||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==n||this.options.enabled!==s.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Z)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),P||this.currentResult.isStale||!L(this.options.staleTime))return;const r=z(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(P||this.options.enabled===!1||!L(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||H.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const s=this.currentQuery,n=this.options,a=this.currentResult,l=this.currentResultState,c=this.currentResultOptions,h=e!==s,d=h?e.state:this.currentQueryInitialState,m=h?this.currentResult:this.previousQueryResult,{state:o}=e;let{dataUpdatedAt:b,error:U,errorUpdatedAt:D,fetchStatus:S,status:v}=o,k=!1,A=!1,y;if(r._optimisticResults){const f=this.hasListeners(),x=!f&&j(e,r),W=f&&N(e,s,r,n);(x||W)&&(S=O(e.options.networkMode)?"fetching":"paused",b||(v="loading")),r._optimisticResults==="isRestoring"&&(S="idle")}if(r.keepPreviousData&&!o.dataUpdatedAt&&m!=null&&m.isSuccess&&v!=="error")y=m.data,b=m.dataUpdatedAt,v=m.status,k=!0;else if(r.select&&typeof o.data<"u")if(a&&o.data===(l==null?void 0:l.data)&&r.select===this.selectFn)y=this.selectResult;else try{this.selectFn=r.select,y=r.select(o.data),y=B(a==null?void 0:a.data,y,r),this.selectResult=y,this.selectError=null}catch(f){this.selectError=f}else y=o.data;if(typeof r.placeholderData<"u"&&typeof y>"u"&&v==="loading"){let f;if(a!=null&&a.isPlaceholderData&&r.placeholderData===(c==null?void 0:c.placeholderData))f=a.data;else if(f=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof f<"u")try{f=r.select(f),this.selectError=null}catch(x){this.selectError=x}typeof f<"u"&&(v="success",y=B(a==null?void 0:a.data,f,r),A=!0)}this.selectError&&(U=this.selectError,y=this.selectResult,D=Date.now(),v="error");const Q=S==="fetching",E=v==="loading",C=v==="error";return{status:v,fetchStatus:S,isLoading:E,isSuccess:v==="success",isError:C,isInitialLoading:E&&Q,data:y,dataUpdatedAt:b,error:U,errorUpdatedAt:D,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>d.dataUpdateCount||o.errorUpdateCount>d.errorUpdateCount,isFetching:Q,isRefetching:Q&&!E,isLoadingError:C&&o.dataUpdatedAt===0,isPaused:S==="paused",isPlaceholderData:A,isPreviousData:k,isRefetchError:C&&o.dataUpdatedAt!==0,isStale:F(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,M(s,r))return;this.currentResult=s;const n={cache:!0},a=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const c=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(h=>{const d=h;return this.currentResult[d]!==r[d]&&c.has(d)})};(e==null?void 0:e.listeners)!==!1&&a()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!Y(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){g.batch(()=>{if(e.onSuccess){var r,s,n,a;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(n=(a=this.options).onSettled)==null||n.call(a,this.currentResult.data,null)}else if(e.onError){var l,c,h,d;(l=(c=this.options).onError)==null||l.call(c,this.currentResult.error),(h=(d=this.options).onSettled)==null||h.call(d,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(m=>{m(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function te(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function j(t,e){return te(t,e)||t.state.dataUpdatedAt>0&&T(t,e,e.refetchOnMount)}function T(t,e,r){if(e.enabled!==!1){const s=typeof r=="function"?r(t):r;return s==="always"||s!==!1&&F(t,e)}return!1}function N(t,e,r,s){return r.enabled!==!1&&(t!==e||s.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&F(t,r)}function F(t,e){return t.isStaleByTime(e.staleTime)}var w={},re={get exports(){return w},set exports(t){w=t}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=p;function se(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:se,ae=R.useState,ie=R.useEffect,ue=R.useLayoutEffect,le=R.useDebugValue;function ce(t,e){var r=e(),s=ae({inst:{value:r,getSnapshot:e}}),n=s[0].inst,a=s[1];return ue(function(){n.value=r,n.getSnapshot=e,I(n)&&a({inst:n})},[t,r,e]),ie(function(){return I(n)&&a({inst:n}),t(function(){I(n)&&a({inst:n})})},[t]),le(r),r}function I(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!ne(t,r)}catch{return!0}}function oe(t,e){return e()}var he=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oe:ce;V.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:he;(function(t){t.exports=V})(re);const de=w.useSyncExternalStore,K=p.createContext(!1),fe=()=>p.useContext(K);K.Provider;function ye(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const ve=p.createContext(ye()),pe=()=>p.useContext(ve);function me(t,e){return typeof t=="function"?t(...e):!!t}const Re=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},Se=t=>{p.useEffect(()=>{t.clearReset()},[t])},ge=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&me(r,[t.error,s]),be=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},Qe=(t,e)=>t.isLoading&&t.isFetching&&!e,Ee=(t,e,r)=>(t==null?void 0:t.suspense)&&Qe(e,r),Ce=(t,e,r)=>e.fetchOptimistic(t).then(({data:s})=>{t.onSuccess==null||t.onSuccess(s),t.onSettled==null||t.onSettled(s,null)}).catch(s=>{r.clearReset(),t.onError==null||t.onError(s),t.onSettled==null||t.onSettled(void 0,s)});function xe(t,e){const r=G({context:t.context}),s=fe(),n=pe(),a=r.defaultQueryOptions(t);a._optimisticResults=s?"isRestoring":"optimistic",a.onError&&(a.onError=g.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=g.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=g.batchCalls(a.onSettled)),be(a),Re(a,n),Se(n);const[l]=p.useState(()=>new e(r,a)),c=l.getOptimisticResult(a);if(de(p.useCallback(h=>s?()=>{}:l.subscribe(g.batchCalls(h)),[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),p.useEffect(()=>{l.setOptions(a,{listeners:!1})},[a,l]),Ee(a,c,s))throw Ce(a,l,n);if(ge({result:c,errorResetBoundary:n,useErrorBoundary:a.useErrorBoundary,query:l.getCurrentQuery()}))throw c.error;return a.notifyOnChangeProps?c:l.trackResult(c)}function Ie(t,e,r){const s=J(t,e,r);return xe(s,ee)}const Te={read:(t,e,r)=>[t,e,"read",r],vread:(t,e,r,s)=>[t,e,"vread",r,s],history:(t,e,r)=>[t,e,"history",r],search:(t,e,r,s)=>[t,"search",e,r,s],infiniteSearch:(t,e,r)=>[t,"infiniteSearch",e,r],findInSearch:(t,e,r)=>{try{const s=(t.getQueriesData([e,"search"])||[]).flatMap(([,n])=>{var a;return(a=n==null?void 0:n.nav)==null?void 0:a.type(e)}).find(n=>(n==null?void 0:n.id)===r);return s||(t.getQueriesData([e,"infiniteSearch"])||[]).flatMap(([,n])=>(n==null?void 0:n.pages)||[]).flatMap(n=>{var a;return(a=n==null?void 0:n.nav)==null?void 0:a.type(e)}).find(n=>(n==null?void 0:n.id)===r)}catch(s){console.error(s);return}},capabilities:()=>["capabilities"],execute:(t,e,r,s)=>[e,r,"execute",t,s],invalidateQueries:(t,e,r)=>{t.invalidateQueries([e,r]),t.invalidateQueries([e,"search"]),t.invalidateQueries([e,"infiniteSearch"])}};function we(t,e,r){const s=X(),n=p.useCallback(()=>s.fhirClient.execute(t,e),[s.fhirClient,t,e==null?void 0:e.type,e==null?void 0:e.id,e==null?void 0:e.parameters]);return Ie({...r,queryKey:Te.execute(t,e==null?void 0:e.type,e==null?void 0:e.id,e==null?void 0:e.parameters),queryFn:n})}function u(t){var a,l,c,h,d;const e=_(),{valueSetExpand:r,...s}=t.options||{},n=we("$expand",{type:"ValueSet",parameters:r},{enabled:!!r,cacheTime:1/0});return e.renderer.value?e.renderer.value({...t,dataTypeAdapter:e.dataTypeAdapter,valueSetExpandQuery:n,formatted:e.dataTypeAdapter[t.type].format(t.value,{...s,valueSetExpansions:s.valueSetExpansions||((l=(a=n.data)==null?void 0:a.expansion)==null?void 0:l.contains)})}):t.type==="markdown"&&((c=t.options)==null?void 0:c.style)==="html"?i("div",{dangerouslySetInnerHTML:{__html:e.dataTypeAdapter.markdown.format(t.value,t.options)}}):i($,{children:e.dataTypeAdapter[t.type].format(t.value,{...s,valueSetExpansions:s.valueSetExpansions||((d=(h=n.data)==null?void 0:h.expansion)==null?void 0:d.contains)})})}const ke=()=>i(u,{type:"code",value:"C"}),Ae=()=>i(u,{type:"code",value:"C",options:{valueSetExpand:{url:"http://hl7.org/fhir/ValueSet/marital-status"}}}),Me=()=>i(u,{type:"coding",value:{code:"ADMIN",display:"Administrative",system:"http://hl7.org/fhir/ValueSet/contactentity-type"}}),Pe=()=>i(u,{type:"codeableConcept",value:{coding:[{code:"ADMIN",display:"Administrative",system:"http://hl7.org/fhir/ValueSet/contactentity-type"}],text:"Administrative"}}),Le=()=>i(u,{type:"boolean",value:!1}),Be=()=>i(u,{type:"boolean",value:!0,options:{labels:{true:"Yes",false:"No"}}}),je=()=>i(u,{type:"date",value:"2023-01-01"}),Ne=()=>i(u,{type:"date",value:"2023-01-01",options:{dateStyle:"full"}}),Ve=()=>i(u,{type:"dateTime",value:"2023-02-01T01:57:25.336Z"}),Ke=()=>i(u,{type:"dateTime",value:"2023-02-01T01:57:25.336Z",options:{dateStyle:"full",timeStyle:"full"}}),We=()=>i(u,{type:"instant",value:"2023-02-01T01:57:25.336Z"}),qe=()=>i(u,{type:"integer",value:123456789}),Ze=()=>i(u,{type:"integer",value:123456789,options:{notation:"scientific"}}),ze=()=>i(u,{type:"integer",value:123456789,options:{notation:"compact-long"}}),He=()=>i(u,{type:"decimal",value:"12.00"}),Oe=()=>i(u,{type:"uri",value:"https://bonfhir.dev"}),Ye=()=>i(u,{type:"url",value:"https://bonfhir.dev"}),Ge=()=>i(u,{type:"canonical",value:"https://bonfhir.dev"}),Je=()=>i(u,{type:"markdown",value:Fe,options:{style:"html"}}),Xe=()=>i(u,{type:"money",value:{value:50,currency:"USD"}}),_e=()=>i(u,{type:"period",value:{start:"2023-01-01",end:"2023-03-20"}}),$e=()=>i(u,{type:"quantity",value:{comparator:">",value:12,unit:"mg"}}),et=()=>i(u,{type:"range",value:{low:{value:12,unit:"mg"},high:{value:50,unit:"mg"}}}),tt=()=>i(u,{type:"ratio",value:{numerator:{value:5},denominator:{value:12}}}),rt=()=>i(u,{type:"ratioRange",value:{lowNumerator:{value:5},highNumerator:{value:8},denominator:{value:12}}}),st=()=>i(u,{type:"simpleQuantity",value:{value:15,unit:"l",operator:null}}),nt=()=>i(u,{type:"age",value:{value:25,code:"y"}}),at=()=>i(u,{type:"count",value:{value:25,code:"cats"}}),it=()=>i(u,{type:"count",value:{value:25,code:"km"}}),ut=()=>i(u,{type:"count",value:{value:25,code:"min."}}),Fe=`
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
`;typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{nt as Age,Le as Boolean,Be as BooleanWithLabel,Ge as Canonical,ke as CodeSimple,Ae as CodeWithExpand,Pe as CodeableConcept,Me as Coding,at as Count,je as Date,Ne as DateFull,Ve as Datetime,Ke as DatetimeFull,He as Decimal,it as Distance,ut as Duration,We as Instant,qe as Integer,ze as IntegerCompactLong,Ze as IntegerScientific,Je as Markdown,Xe as Money,_e as Period,$e as Quantity,et as Range,tt as Ratio,rt as RatioRange,st as SimpleQuantity,Oe as Uri,Ye as Url};