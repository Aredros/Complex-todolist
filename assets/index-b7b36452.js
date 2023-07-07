(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fo={},VT={get exports(){return fo},set exports(t){fo=t}},Wu={},_={},BT={get exports(){return _},set exports(t){_=t}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),jT=Symbol.for("react.portal"),HT=Symbol.for("react.fragment"),WT=Symbol.for("react.strict_mode"),qT=Symbol.for("react.profiler"),GT=Symbol.for("react.provider"),KT=Symbol.for("react.context"),QT=Symbol.for("react.forward_ref"),YT=Symbol.for("react.suspense"),XT=Symbol.for("react.memo"),JT=Symbol.for("react.lazy"),yg=Symbol.iterator;function ZT(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function ls(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||b0}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=ls.prototype;function Wf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||b0}var qf=Wf.prototype=new D0;qf.constructor=Wf;R0(qf,ls.prototype);qf.isPureReactComponent=!0;var wg=Array.isArray,O0=Object.prototype.hasOwnProperty,Gf={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zo,type:t,key:s,ref:o,props:i,_owner:Gf.current}}function eS(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function tS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eg=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tS(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case jT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qc(o,0):r,wg(i)?(n="",t!=null&&(n=t.replace(Eg,"$&/")+"/"),wl(i,e,n,"",function(u){return u})):i!=null&&(Kf(i)&&(i=eS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Eg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",wg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Qc(s,a);o+=wl(s,e,n,l,i)}else if(l=ZT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Qc(s,a++),o+=wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},El={transition:null},rS={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:El,ReactCurrentOwner:Gf};X.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=ls;X.Fragment=HT;X.Profiler=qT;X.PureComponent=Wf;X.StrictMode=WT;X.Suspense=YT;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!L0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zo,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:KT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GT,_context:t},t.Consumer=t};X.createElement=M0;X.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:QT,render:t}};X.isValidElement=Kf;X.lazy=function(t){return{$$typeof:JT,_payload:{_status:-1,_result:t},_init:nS}};X.memo=function(t,e){return{$$typeof:XT,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return dt.current.useCallback(t,e)};X.useContext=function(t){return dt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};X.useEffect=function(t,e){return dt.current.useEffect(t,e)};X.useId=function(){return dt.current.useId()};X.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return dt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};X.useRef=function(t){return dt.current.useRef(t)};X.useState=function(t){return dt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return dt.current.useTransition()};X.version="18.2.0";(function(t){t.exports=X})(BT);const Me=zT(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=_,sS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),aS=Object.prototype.hasOwnProperty,lS=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)aS.call(e,r)&&!uS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:sS,type:t,key:s,ref:o,props:i,_owner:lS.current}}Wu.Fragment=oS;Wu.jsx=$0;Wu.jsxs=$0;(function(t){t.exports=Wu})(VT);const Yh=fo.Fragment,w=fo.jsx,N=fo.jsxs;var Xh={},Jh={},cS={get exports(){return Jh},set exports(t){Jh=t}},xt={},Zh={},hS={get exports(){return Zh},set exports(t){Zh=t}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var K=L.length;L.push(q);e:for(;0<K;){var _e=K-1>>>1,Le=L[_e];if(0<i(Le,q))L[_e]=q,L[K]=Le,K=_e;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],K=L.pop();if(K!==q){L[0]=K;e:for(var _e=0,Le=L.length,Da=Le>>>1;_e<Da;){var Cr=2*(_e+1)-1,Kc=L[Cr],xr=Cr+1,Oa=L[xr];if(0>i(Kc,K))xr<Le&&0>i(Oa,Kc)?(L[_e]=Oa,L[xr]=K,_e=xr):(L[_e]=Kc,L[Cr]=K,_e=Cr);else if(xr<Le&&0>i(Oa,K))L[_e]=Oa,L[xr]=K,_e=xr;else break e}}return q}function i(L,q){var K=L.sortIndex-q.sortIndex;return K!==0?K:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=L)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function k(L){if(y=!1,v(L),!g)if(n(l)!==null)g=!0,qc(T);else{var q=n(u);q!==null&&Gc(k,q.startTime-L)}}function T(L,q){g=!1,y&&(y=!1,m(R),R=-1),p=!0;var K=d;try{for(v(q),h=n(l);h!==null&&(!(h.expirationTime>q)||L&&!ne());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var Le=_e(h.expirationTime<=q);q=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(l)&&r(l),v(q)}else r(l);h=n(l)}if(h!==null)var Da=!0;else{var Cr=n(u);Cr!==null&&Gc(k,Cr.startTime-q),Da=!1}return Da}finally{h=null,d=K,p=!1}}var x=!1,A=null,R=-1,Q=5,U=-1;function ne(){return!(t.unstable_now()-U<Q)}function P(){if(A!==null){var L=t.unstable_now();U=L;var q=!0;try{q=A(!0,L)}finally{q?Ln():(x=!1,A=null)}}else x=!1}var Ln;if(typeof f=="function")Ln=function(){f(P)};else if(typeof MessageChannel<"u"){var Pa=new MessageChannel,UT=Pa.port2;Pa.port1.onmessage=P,Ln=function(){UT.postMessage(null)}}else Ln=function(){E(P,0)};function qc(L){A=L,x||(x=!0,Ln())}function Gc(L,q){R=E(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,qc(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var K=d;d=q;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return q()}finally{d=K}},t.unstable_scheduleCallback=function(L,q,K){var _e=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_e+K:_e):K=_e,L){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=K+Le,L={id:c++,callback:q,priorityLevel:L,startTime:K,expirationTime:Le,sortIndex:-1},K>_e?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(y?(m(R),R=-1):y=!0,Gc(k,K-_e))):(L.sortIndex=Le,e(l,L),g||p||(g=!0,qc(T))),L},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(L){var q=d;return function(){var K=d;d=q;try{return L.apply(this,arguments)}finally{d=K}}}})(F0);(function(t){t.exports=F0})(hS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=_,It=Zh;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,po={};function ii(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(po[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,dS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},_g={};function fS(t){return ed.call(_g,t)?!0:ed.call(kg,t)?!1:dS.test(t)?_g[t]=!0:(kg[t]=!0,!1)}function pS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mS(t,e,n,r){if(e===null||typeof e>"u"||pS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,Yf);Qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,Yf);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,Yf);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xf(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mS(e,n,i,r)&&(n=null),r||i===null?fS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),gi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),ep=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Yc;function Ms(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var Xc=!1;function Jc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function gS(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case gi:return"Portal";case td:return"Profiler";case Jf:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ep:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yS(t){var e=H0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=yS(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&Xf(t,"checked",e,!1)}function od(t,e){q0(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if($s(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function G0(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function K0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?K0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){wS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Y0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ES=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(ES[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,Di=null,Oi=null;function Ag(t){if(t=na(t)){if(typeof fd!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Yu(e),fd(t.stateNode,t.type,e))}}function J0(t){Di?Oi?Oi.push(t):Oi=[t]:Di=t}function Z0(){if(Di){var t=Di,e=Oi;if(Oi=Di=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function e1(t,e){return t(e)}function t1(){}var Zc=!1;function n1(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return e1(t,e,n)}finally{Zc=!1,(Di!==null||Oi!==null)&&(t1(),Z0())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var pd=!1;if(wn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){pd=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{pd=!1}function kS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ks=!1,Hl=null,Wl=!1,md=null,_S={onError:function(t){Ks=!0,Hl=t}};function TS(t,e,n,r,i,s,o,a,l){Ks=!1,Hl=null,kS.apply(_S,arguments)}function SS(t,e,n,r,i,s,o,a,l){if(TS.apply(this,arguments),Ks){if(Ks){var u=Hl;Ks=!1,Hl=null}else throw Error(I(198));Wl||(Wl=!0,md=u)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ng(t){if(si(t)!==t)throw Error(I(188))}function IS(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ng(i),t;if(s===r)return Ng(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function i1(t){return t=IS(t),t!==null?s1(t):null}function s1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s1(t);if(e!==null)return e;t=t.sibling}return null}var o1=It.unstable_scheduleCallback,bg=It.unstable_cancelCallback,CS=It.unstable_shouldYield,xS=It.unstable_requestPaint,Te=It.unstable_now,AS=It.unstable_getCurrentPriorityLevel,np=It.unstable_ImmediatePriority,a1=It.unstable_UserBlockingPriority,ql=It.unstable_NormalPriority,NS=It.unstable_LowPriority,l1=It.unstable_IdlePriority,qu=null,nn=null;function bS(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:DS,RS=Math.log,PS=Math.LN2;function DS(t){return t>>>=0,t===0?32:31-(RS(t)/PS|0)|0}var Ua=64,za=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fs(a):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function OS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=OS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u1(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function MS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function c1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h1,ip,d1,f1,p1,vd=!1,Va=[],Xn=null,Jn=null,Zn=null,vo=new Map,yo=new Map,Vn=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rg(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FS(t,e,n,r,i){switch(e){case"focusin":return Xn=As(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=As(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=As(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,As(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,As(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function m1(t){var e=Rr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=r1(n),e!==null){t.blockedOn=e,p1(t.priority,function(){d1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=na(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function Pg(t,e,n){kl(t)&&n.delete(e)}function US(){vd=!1,Xn!==null&&kl(Xn)&&(Xn=null),Jn!==null&&kl(Jn)&&(Jn=null),Zn!==null&&kl(Zn)&&(Zn=null),vo.forEach(Pg),yo.forEach(Pg)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,US)))}function wo(t){function e(i){return Ns(i,t)}if(0<Va.length){Ns(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&Ns(Xn,t),Jn!==null&&Ns(Jn,t),Zn!==null&&Ns(Zn,t),vo.forEach(e),yo.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)m1(n),n.blockedOn===null&&Vn.shift()}var Li=Pn.ReactCurrentBatchConfig,Kl=!0;function zS(t,e,n,r){var i=re,s=Li.transition;Li.transition=null;try{re=1,sp(t,e,n,r)}finally{re=i,Li.transition=s}}function VS(t,e,n,r){var i=re,s=Li.transition;Li.transition=null;try{re=4,sp(t,e,n,r)}finally{re=i,Li.transition=s}}function sp(t,e,n,r){if(Kl){var i=yd(t,e,n,r);if(i===null)ch(t,e,r,Ql,n),Rg(t,r);else if(FS(i,t,e,n,r))r.stopPropagation();else if(Rg(t,r),e&4&&-1<$S.indexOf(t)){for(;i!==null;){var s=na(i);if(s!==null&&h1(s),s=yd(t,e,n,r),s===null&&ch(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ch(t,e,r,null,n)}}var Ql=null;function yd(t,e,n,r){if(Ql=null,t=tp(r),t=Rr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function g1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case np:return 1;case a1:return 4;case ql:case NS:return 16;case l1:return 536870912;default:return 16}default:return 16}}var qn=null,op=null,_l=null;function v1(){if(_l)return _l;var t,e=op,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _l=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Dg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:Dg,this.isPropagationStopped=Dg,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ap=At(us),ta=ve({},us,{view:0,detail:0}),BS=At(ta),th,nh,bs,Gu=ve({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(th=t.screenX-bs.screenX,nh=t.screenY-bs.screenY):nh=th=0,bs=t),th)},movementY:function(t){return"movementY"in t?t.movementY:nh}}),Og=At(Gu),jS=ve({},Gu,{dataTransfer:0}),HS=At(jS),WS=ve({},ta,{relatedTarget:0}),rh=At(WS),qS=ve({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=At(qS),KS=ve({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QS=At(KS),YS=ve({},us,{data:0}),Lg=At(YS),XS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZS[t])?!!e[t]:!1}function lp(){return eI}var tI=ve({},ta,{key:function(t){if(t.key){var e=XS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lp,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nI=At(tI),rI=ve({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mg=At(rI),iI=ve({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lp}),sI=At(iI),oI=ve({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),aI=At(oI),lI=ve({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uI=At(lI),cI=[9,13,27,32],up=wn&&"CompositionEvent"in window,Qs=null;wn&&"documentMode"in document&&(Qs=document.documentMode);var hI=wn&&"TextEvent"in window&&!Qs,y1=wn&&(!up||Qs&&8<Qs&&11>=Qs),$g=String.fromCharCode(32),Fg=!1;function w1(t,e){switch(t){case"keyup":return cI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function dI(t,e){switch(t){case"compositionend":return E1(e);case"keypress":return e.which!==32?null:(Fg=!0,$g);case"textInput":return t=e.data,t===$g&&Fg?null:t;default:return null}}function fI(t,e){if(yi)return t==="compositionend"||!up&&w1(t,e)?(t=v1(),_l=op=qn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y1&&e.locale!=="ko"?null:e.data;default:return null}}var pI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pI[t.type]:e==="textarea"}function k1(t,e,n,r){J0(r),e=Yl(e,"onChange"),0<e.length&&(n=new ap("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,Eo=null;function mI(t){P1(t,0)}function Ku(t){var e=ki(t);if(W0(e))return t}function gI(t,e){if(t==="change")return e}var _1=!1;if(wn){var ih;if(wn){var sh="oninput"in document;if(!sh){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),sh=typeof zg.oninput=="function"}ih=sh}else ih=!1;_1=ih&&(!document.documentMode||9<document.documentMode)}function Vg(){Ys&&(Ys.detachEvent("onpropertychange",T1),Eo=Ys=null)}function T1(t){if(t.propertyName==="value"&&Ku(Eo)){var e=[];k1(e,Eo,t,tp(t)),n1(mI,e)}}function vI(t,e,n){t==="focusin"?(Vg(),Ys=e,Eo=n,Ys.attachEvent("onpropertychange",T1)):t==="focusout"&&Vg()}function yI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Eo)}function wI(t,e){if(t==="click")return Ku(e)}function EI(t,e){if(t==="input"||t==="change")return Ku(e)}function kI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:kI;function ko(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function Bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jg(t,e){var n=Bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function S1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I1(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _I(t){var e=I1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S1(n.ownerDocument.documentElement,n)){if(r!==null&&cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jg(n,s);var o=jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TI=wn&&"documentMode"in document&&11>=document.documentMode,wi=null,wd=null,Xs=null,Ed=!1;function Hg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ed||wi==null||wi!==jl(r)||(r=wi,"selectionStart"in r&&cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&ko(Xs,r)||(Xs=r,r=Yl(wd,"onSelect"),0<r.length&&(e=new ap("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},oh={},C1={};wn&&(C1=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function Qu(t){if(oh[t])return oh[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C1)return oh[t]=e[n];return t}var x1=Qu("animationend"),A1=Qu("animationiteration"),N1=Qu("animationstart"),b1=Qu("transitionend"),R1=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){R1.set(t,e),ii(e,[t])}for(var ah=0;ah<Wg.length;ah++){var lh=Wg[ah],SI=lh.toLowerCase(),II=lh[0].toUpperCase()+lh.slice(1);wr(SI,"on"+II)}wr(x1,"onAnimationEnd");wr(A1,"onAnimationIteration");wr(N1,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(b1,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SS(r,e,void 0,t),t.currentTarget=null}function P1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}}}if(Wl)throw t=md,Wl=!1,md=null,t}function oe(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var r=t+"__bubble";n.has(r)||(D1(e,t,2,!1),n.add(r))}function uh(t,e,n){var r=0;e&&(r|=4),D1(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Ha]){t[Ha]=!0,z0.forEach(function(n){n!=="selectionchange"&&(CI.has(n)||uh(n,!1,t),uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,uh("selectionchange",!1,e))}}function D1(t,e,n,r){switch(g1(e)){case 1:var i=zS;break;case 4:i=VS;break;default:i=sp}n=i.bind(null,e,n,t),i=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ch(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n1(function(){var u=s,c=tp(n),h=[];e:{var d=R1.get(t);if(d!==void 0){var p=ap,g=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":p=nI;break;case"focusin":g="focus",p=rh;break;case"focusout":g="blur",p=rh;break;case"beforeblur":case"afterblur":p=rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sI;break;case x1:case A1:case N1:p=GS;break;case b1:p=aI;break;case"scroll":p=BS;break;case"wheel":p=uI;break;case"copy":case"cut":case"paste":p=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mg}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,m!==null&&(k=go(f,m),k!=null&&y.push(To(f,k,v)))),E)break;f=f.return}0<y.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==dd&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[En]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Rr(g):null,g!==null&&(E=si(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Og,k="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Mg,k="onPointerLeave",m="onPointerEnter",f="pointer"),E=p==null?d:ki(p),v=g==null?d:ki(g),d=new y(k,f+"leave",p,n,c),d.target=E,d.relatedTarget=v,k=null,Rr(c)===u&&(y=new y(m,f+"enter",g,n,c),y.target=v,y.relatedTarget=E,k=y),E=k,p&&g)t:{for(y=p,m=g,f=0,v=y;v;v=di(v))f++;for(v=0,k=m;k;k=di(k))v++;for(;0<f-v;)y=di(y),f--;for(;0<v-f;)m=di(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=di(y),m=di(m)}y=null}else y=null;p!==null&&Gg(h,d,p,y,!1),g!==null&&E!==null&&Gg(h,E,g,y,!0)}}e:{if(d=u?ki(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=gI;else if(Ug(d))if(_1)T=EI;else{T=yI;var x=vI}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=wI);if(T&&(T=T(t,u))){k1(h,T,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&ad(d,"number",d.value)}switch(x=u?ki(u):window,t){case"focusin":(Ug(x)||x.contentEditable==="true")&&(wi=x,wd=u,Xs=null);break;case"focusout":Xs=wd=wi=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,Hg(h,n,c);break;case"selectionchange":if(TI)break;case"keydown":case"keyup":Hg(h,n,c)}var A;if(up)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else yi?w1(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(y1&&n.locale!=="ko"&&(yi||R!=="onCompositionStart"?R==="onCompositionEnd"&&yi&&(A=v1()):(qn=c,op="value"in qn?qn.value:qn.textContent,yi=!0)),x=Yl(u,R),0<x.length&&(R=new Lg(R,t,null,n,c),h.push({event:R,listeners:x}),A?R.data=A:(A=E1(n),A!==null&&(R.data=A)))),(A=hI?dI(t,n):fI(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Lg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}P1(h,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(To(t,s,i)),s=go(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=go(n,s),l!=null&&o.unshift(To(n,l,a))):i||(l=go(n,s),l!=null&&o.push(To(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xI=/\r\n?/g,AI=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(xI,`
`).replace(AI,"")}function Wa(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(I(425))}function Xl(){}var kd=null,_d=null;function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,NI=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,bI=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(RI)}:Sd;function RI(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),Jt="__reactFiber$"+cs,So="__reactProps$"+cs,En="__reactContainer$"+cs,Id="__reactEvents$"+cs,PI="__reactListeners$"+cs,DI="__reactHandles$"+cs;function Rr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yg(t);t!==null;){if(n=t[Jt])return n;t=Yg(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[Jt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Yu(t){return t[So]||null}var Cd=[],_i=-1;function Er(t){return{current:t}}function ue(t){0>_i||(t.current=Cd[_i],Cd[_i]=null,_i--)}function se(t,e){_i++,Cd[_i]=t.current,t.current=e}var dr={},ot=Er(dr),vt=Er(!1),Hr=dr;function qi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Jl(){ue(vt),ue(ot)}function Xg(t,e,n){if(ot.current!==dr)throw Error(I(168));se(ot,e),se(vt,n)}function O1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,vS(t)||"Unknown",i));return ve({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Hr=ot.current,se(ot,t),se(vt,vt.current),!0}function Jg(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=O1(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,ue(vt),ue(ot),se(ot,t)):ue(vt),se(vt,n)}var cn=null,Xu=!1,dh=!1;function L1(t){cn===null?cn=[t]:cn.push(t)}function OI(t){Xu=!0,L1(t)}function kr(){if(!dh&&cn!==null){dh=!0;var t=0,e=re;try{var n=cn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,Xu=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),o1(np,kr),i}finally{re=e,dh=!1}}return null}var Ti=[],Si=0,eu=null,tu=0,bt=[],Rt=0,Wr=null,dn=1,fn="";function Ar(t,e){Ti[Si++]=tu,Ti[Si++]=eu,eu=t,tu=e}function M1(t,e,n){bt[Rt++]=dn,bt[Rt++]=fn,bt[Rt++]=Wr,Wr=t;var r=dn;t=fn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dn=1<<32-jt(e)+i|n<<i|r,fn=s+t}else dn=1<<s|n<<i|r,fn=t}function hp(t){t.return!==null&&(Ar(t,1),M1(t,1,0))}function dp(t){for(;t===eu;)eu=Ti[--Si],Ti[Si]=null,tu=Ti[--Si],Ti[Si]=null;for(;t===Wr;)Wr=bt[--Rt],bt[Rt]=null,fn=bt[--Rt],bt[Rt]=null,dn=bt[--Rt],bt[Rt]=null}var Tt=null,kt=null,de=!1,Vt=null;function $1(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,kt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,kt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(de){var e=kt;if(e){var n=e;if(!Zg(t,e)){if(xd(t))throw Error(I(418));e=er(n.nextSibling);var r=Tt;e&&Zg(t,e)?$1(r,n):(t.flags=t.flags&-4097|2,de=!1,Tt=t)}}else{if(xd(t))throw Error(I(418));t.flags=t.flags&-4097|2,de=!1,Tt=t}}}function ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function qa(t){if(t!==Tt)return!1;if(!de)return ev(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Td(t.type,t.memoizedProps)),e&&(e=kt)){if(xd(t))throw F1(),Error(I(418));for(;e;)$1(t,e),e=er(e.nextSibling)}if(ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Tt?er(t.stateNode.nextSibling):null;return!0}function F1(){for(var t=kt;t;)t=er(t.nextSibling)}function Gi(){kt=Tt=null,de=!1}function fp(t){Vt===null?Vt=[t]:Vt.push(t)}var LI=Pn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nu=Er(null),ru=null,Ii=null,pp=null;function mp(){pp=Ii=ru=null}function gp(t){var e=nu.current;ue(nu),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){ru=t,pp=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(pp!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(ru===null)throw Error(I(308));Ii=t,ru.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Pr=null;function vp(t){Pr===null?Pr=[t]:Pr.push(t)}function U1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vp(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,vp(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rp(t,n)}}function tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=ve({},h,d);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=h}}function nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var V1=new U0.Component().refs;function bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=rr(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ht(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=rr(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ht(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=rr(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Ht(e,t,r,n),Sl(e,t,r))}};function rv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function B1(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=yt(e)?Hr:ot.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=V1,yp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=yt(e)?Hr:ot.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===V1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ga(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sv(t){var e=t._init;return e(t._payload)}function j1(t){function e(m,f){if(t){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=ir(m,f),m.index=0,m.sibling=null,m}function s(m,f,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,k){return f===null||f.tag!==6?(f=wh(v,m.mode,k),f.return=m,f):(f=i(f,v),f.return=m,f)}function l(m,f,v,k){var T=v.type;return T===vi?c(m,f,v.props.children,k,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Un&&sv(T)===f.type)?(k=i(f,v.props),k.ref=Rs(m,f,v),k.return=m,k):(k=bl(v.type,v.key,v.props,null,m.mode,k),k.ref=Rs(m,f,v),k.return=m,k)}function u(m,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Eh(v,m.mode,k),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,k,T){return f===null||f.tag!==7?(f=Vr(v,m.mode,k,T),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wh(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ma:return v=bl(f.type,f.key,f.props,null,m.mode,v),v.ref=Rs(m,null,f),v.return=m,v;case gi:return f=Eh(f,m.mode,v),f.return=m,f;case Un:var k=f._init;return h(m,k(f._payload),v)}if($s(f)||Cs(f))return f=Vr(f,m.mode,v,null),f.return=m,f;Ga(m,f)}return null}function d(m,f,v,k){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===T?l(m,f,v,k):null;case gi:return v.key===T?u(m,f,v,k):null;case Un:return T=v._init,d(m,f,T(v._payload),k)}if($s(v)||Cs(v))return T!==null?null:c(m,f,v,k,null);Ga(m,v)}return null}function p(m,f,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(v)||null,a(f,m,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ma:return m=m.get(k.key===null?v:k.key)||null,l(f,m,k,T);case gi:return m=m.get(k.key===null?v:k.key)||null,u(f,m,k,T);case Un:var x=k._init;return p(m,f,v,x(k._payload),T)}if($s(k)||Cs(k))return m=m.get(v)||null,c(f,m,k,T,null);Ga(f,k)}return null}function g(m,f,v,k){for(var T=null,x=null,A=f,R=f=0,Q=null;A!==null&&R<v.length;R++){A.index>R?(Q=A,A=null):Q=A.sibling;var U=d(m,A,v[R],k);if(U===null){A===null&&(A=Q);break}t&&A&&U.alternate===null&&e(m,A),f=s(U,f,R),x===null?T=U:x.sibling=U,x=U,A=Q}if(R===v.length)return n(m,A),de&&Ar(m,R),T;if(A===null){for(;R<v.length;R++)A=h(m,v[R],k),A!==null&&(f=s(A,f,R),x===null?T=A:x.sibling=A,x=A);return de&&Ar(m,R),T}for(A=r(m,A);R<v.length;R++)Q=p(A,m,R,v[R],k),Q!==null&&(t&&Q.alternate!==null&&A.delete(Q.key===null?R:Q.key),f=s(Q,f,R),x===null?T=Q:x.sibling=Q,x=Q);return t&&A.forEach(function(ne){return e(m,ne)}),de&&Ar(m,R),T}function y(m,f,v,k){var T=Cs(v);if(typeof T!="function")throw Error(I(150));if(v=T.call(v),v==null)throw Error(I(151));for(var x=T=null,A=f,R=f=0,Q=null,U=v.next();A!==null&&!U.done;R++,U=v.next()){A.index>R?(Q=A,A=null):Q=A.sibling;var ne=d(m,A,U.value,k);if(ne===null){A===null&&(A=Q);break}t&&A&&ne.alternate===null&&e(m,A),f=s(ne,f,R),x===null?T=ne:x.sibling=ne,x=ne,A=Q}if(U.done)return n(m,A),de&&Ar(m,R),T;if(A===null){for(;!U.done;R++,U=v.next())U=h(m,U.value,k),U!==null&&(f=s(U,f,R),x===null?T=U:x.sibling=U,x=U);return de&&Ar(m,R),T}for(A=r(m,A);!U.done;R++,U=v.next())U=p(A,m,R,U.value,k),U!==null&&(t&&U.alternate!==null&&A.delete(U.key===null?R:U.key),f=s(U,f,R),x===null?T=U:x.sibling=U,x=U);return t&&A.forEach(function(P){return e(m,P)}),de&&Ar(m,R),T}function E(m,f,v,k){if(typeof v=="object"&&v!==null&&v.type===vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var T=v.key,x=f;x!==null;){if(x.key===T){if(T=v.type,T===vi){if(x.tag===7){n(m,x.sibling),f=i(x,v.props.children),f.return=m,m=f;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Un&&sv(T)===x.type){n(m,x.sibling),f=i(x,v.props),f.ref=Rs(m,x,v),f.return=m,m=f;break e}n(m,x);break}else e(m,x);x=x.sibling}v.type===vi?(f=Vr(v.props.children,m.mode,k,v.key),f.return=m,m=f):(k=bl(v.type,v.key,v.props,null,m.mode,k),k.ref=Rs(m,f,v),k.return=m,m=k)}return o(m);case gi:e:{for(x=v.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Eh(v,m.mode,k),f.return=m,m=f}return o(m);case Un:return x=v._init,E(m,f,x(v._payload),k)}if($s(v))return g(m,f,v,k);if(Cs(v))return y(m,f,v,k);Ga(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=wh(v,m.mode,k),f.return=m,m=f),o(m)):n(m,f)}return E}var Ki=j1(!0),H1=j1(!1),ra={},rn=Er(ra),Io=Er(ra),Co=Er(ra);function Dr(t){if(t===ra)throw Error(I(174));return t}function wp(t,e){switch(se(Co,e),se(Io,t),se(rn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}ue(rn),se(rn,e)}function Qi(){ue(rn),ue(Io),ue(Co)}function W1(t){Dr(Co.current);var e=Dr(rn.current),n=ud(e,t.type);e!==n&&(se(Io,t),se(rn,n))}function Ep(t){Io.current===t&&(ue(rn),ue(Io))}var me=Er(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fh=[];function kp(){for(var t=0;t<fh.length;t++)fh[t]._workInProgressVersionPrimary=null;fh.length=0}var Il=Pn.ReactCurrentDispatcher,ph=Pn.ReactCurrentBatchConfig,qr=0,ge=null,be=null,Fe=null,ou=!1,Js=!1,xo=0,MI=0;function Ye(){throw Error(I(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function Tp(t,e,n,r,i,s){if(qr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?zI:VI,t=n(r,i),Js){s=0;do{if(Js=!1,xo=0,25<=s)throw Error(I(301));s+=1,Fe=be=null,e.updateQueue=null,Il.current=BI,t=n(r,i)}while(Js)}if(Il.current=au,e=be!==null&&be.next!==null,qr=0,Fe=be=ge=null,ou=!1,e)throw Error(I(300));return t}function Sp(){var t=xo!==0;return xo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(be===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Fe===null?ge.memoizedState:Fe.next;if(e!==null)Fe=e,be=t;else{if(t===null)throw Error(I(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ao(t,e){return typeof e=="function"?e(t):e}function mh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,qt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q1(){}function G1(t,e){var n=ge,r=Mt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Ip(Y1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,No(9,Q1.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(I(349));qr&30||K1(n,e,i)}return i}function K1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q1(t,e,n,r){e.value=n,e.getSnapshot=r,X1(e)&&J1(t)}function Y1(t,e,n){return n(function(){X1(e)&&J1(t)})}function X1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function J1(t){var e=kn(t,1);e!==null&&Ht(e,t,1,-1)}function ov(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=UI.bind(null,ge,t),[e.memoizedState,t]}function No(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z1(){return Mt().memoizedState}function Cl(t,e,n,r){var i=Xt();ge.flags|=t,i.memoizedState=No(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=No(e,n,s,r);return}}ge.flags|=t,i.memoizedState=No(1|e,n,s,r)}function av(t,e){return Cl(8390656,8,t,e)}function Ip(t,e){return Zu(2048,8,t,e)}function ew(t,e){return Zu(4,2,t,e)}function tw(t,e){return Zu(4,4,t,e)}function nw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rw(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,nw.bind(null,e,t),n)}function Cp(){}function iw(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sw(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ow(t,e,n){return qr&21?(qt(n,e)||(n=u1(),ge.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function $I(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=ph.transition;ph.transition={};try{t(!1),e()}finally{re=n,ph.transition=r}}function aw(){return Mt().memoizedState}function FI(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lw(t))uw(e,n);else if(n=U1(t,e,n,r),n!==null){var i=ht();Ht(n,t,r,i),cw(n,e,r)}}function UI(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lw(t))uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qt(a,o)){var l=e.interleaved;l===null?(i.next=i,vp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=U1(t,e,i,r),n!==null&&(i=ht(),Ht(n,t,r,i),cw(n,e,r))}}function lw(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function uw(t,e){Js=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rp(t,n)}}var au={readContext:Lt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},zI={readContext:Lt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,nw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:ov,useDebugValue:Cp,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=ov(!1),e=t[0];return t=$I.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Xt();if(de){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ue===null)throw Error(I(349));qr&30||K1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,av(Y1.bind(null,r,s,t),[t]),r.flags|=2048,No(9,Q1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Ue.identifierPrefix;if(de){var n=fn,r=dn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VI={readContext:Lt,useCallback:iw,useContext:Lt,useEffect:Ip,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:mh,useRef:Z1,useState:function(){return mh(Ao)},useDebugValue:Cp,useDeferredValue:function(t){var e=Mt();return ow(e,be.memoizedState,t)},useTransition:function(){var t=mh(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:q1,useSyncExternalStore:G1,useId:aw,unstable_isNewReconciler:!1},BI={readContext:Lt,useCallback:iw,useContext:Lt,useEffect:Ip,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:gh,useRef:Z1,useState:function(){return gh(Ao)},useDebugValue:Cp,useDeferredValue:function(t){var e=Mt();return be===null?e.memoizedState=t:ow(e,be.memoizedState,t)},useTransition:function(){var t=gh(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:q1,useSyncExternalStore:G1,useId:aw,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=gS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function hw(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Bd=r),Pd(t,e)},n}function dw(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pd(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=r2.bind(null,t,e,n),e.then(t,t))}function uv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var HI=Pn.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?H1(e,null,n,r):Ki(e,t.child,n,r)}function hv(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=Tp(t,e,n,r,s,i),n=Sp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(de&&n&&hp(e),e.flags|=1,ut(t,e,r,i),e.child)}function dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fw(t,e,s,r,i)):(t=bl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function fw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,_n(t,e,i)}return Dd(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(xi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(xi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(xi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(xi,Et),Et|=r;return ut(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dd(t,e,n,r,i){var s=yt(n)?Hr:ot.current;return s=qi(e,s),Mi(e,i),n=Tp(t,e,n,r,s,i),r=Sp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(de&&r&&hp(e),e.flags|=1,ut(t,e,n,i),e.child)}function fv(t,e,n,r,i){if(yt(n)){var s=!0;Zl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)xl(t,e),B1(e,n,r),Rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=yt(n)?Hr:ot.current,u=qi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&iv(e,o,r,u),zn=!1;var d=e.memoizedState;o.state=d,iu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||vt.current||zn?(typeof c=="function"&&(bd(e,n,c,r),l=e.memoizedState),(a=zn||rv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=yt(n)?Hr:ot.current,l=qi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&iv(e,o,r,l),zn=!1,d=e.memoizedState,o.state=d,iu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||vt.current||zn?(typeof p=="function"&&(bd(e,n,p,r),g=e.memoizedState),(u=zn||rv(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Od(t,e,n,r,s,i)}function Od(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jg(e,n,!1),_n(t,e,s);r=e.stateNode,HI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&Jg(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),wp(t,e.containerInfo)}function pv(t,e,n,r,i){return Gi(),fp(i),e.flags|=256,ut(t,e,n,r),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function vw(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Ld,t):xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return WI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ld,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xp(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,r){return r!==null&&fp(r),Ki(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vh(Error(I(422))),Ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nc({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=Ld,s);if(!(e.mode&1))return Ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=vh(s,r,void 0),Ka(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Ht(r,t,i,-1))}return Dp(),r=vh(Error(I(421))),Ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=i2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=er(i.nextSibling),Tt=e,de=!0,Vt=null,t!==null&&(bt[Rt++]=dn,bt[Rt++]=fn,bt[Rt++]=Wr,dn=t.id,fn=t.overflow,Wr=e),e=xp(e,r.children),e.flags|=4096,e)}function mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nd(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mv(t,n,e);else if(t.tag===19)mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qI(t,e,n){switch(e.tag){case 3:gw(e),Gi();break;case 5:W1(e);break;case 1:yt(e.type)&&Zl(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?vw(t,e,n):(se(me,me.current&1),t=_n(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return _n(t,e,n)}var ww,$d,Ew,kw;ww=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};Ew=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(rn.current);var s=null;switch(n){case"input":i=sd(t,i),r=sd(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=ld(t,i),r=ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}cd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GI(t,e,n){var r=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&Jl(),Xe(e),null;case 3:return r=e.stateNode,Qi(),ue(vt),ue(ot),kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vt!==null&&(Wd(Vt),Vt=null))),$d(t,e),Xe(e),null;case 5:Ep(e);var i=Dr(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)Ew(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Xe(e),null}if(t=Dr(rn.current),qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[So]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)oe(Us[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Sg(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":Cg(r,s),oe("invalid",r)}cd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,a,t),i=["children",""+a]):po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":$a(r),Ig(r,s,!0);break;case"textarea":$a(r),xg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=K0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[So]=r,ww(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)oe(Us[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":Sg(t,r),i=sd(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),oe("invalid",t);break;case"textarea":Cg(t,r),i=ld(t,r),oe("invalid",t);break;default:i=r}cd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mo(t,l):typeof l=="number"&&mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&Xf(t,s,l,o))}switch(n){case"input":$a(t),Ig(t,r,!1);break;case"textarea":$a(t),xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)kw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Dr(Co.current),Dr(rn.current),qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Xe(e),null;case 13:if(ue(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&kt!==null&&e.mode&1&&!(e.flags&128))F1(),Gi(),e.flags|=98560,s=!1;else if(s=qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Jt]=e}else Gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Vt!==null&&(Wd(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Pe===0&&(Pe=3):Dp())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Qi(),$d(t,e),t===null&&_o(e.stateNode.containerInfo),Xe(e),null;case 10:return gp(e.type._context),Xe(e),null;case 17:return yt(e.type)&&Jl(),Xe(e),null;case 19:if(ue(me),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Xi&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Xe(e),null}else 2*Te()-s.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function KI(t,e){switch(dp(e),e.tag){case 1:return yt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),ue(vt),ue(ot),kp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(ue(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(me),null;case 4:return Qi(),null;case 10:return gp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Qa=!1,et=!1,QI=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Fd(t,e,n){try{n()}catch(r){we(t,e,r)}}var gv=!1;function YI(t,e){if(kd=Kl,t=I1(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Kl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ut(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(k){we(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return g=gv,gv=!1,g}function Zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _w(t){var e=t.alternate;e!==null&&(t.alternate=null,_w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[So],delete e[Id],delete e[PI],delete e[DI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tw(t){return t.tag===5||t.tag===3||t.tag===4}function vv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var He=null,zt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)Sw(t,e,n),n=n.sibling}function Sw(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:et||Ci(n,e);case 6:var r=He,i=zt;He=null,Mn(t,e,n),He=r,zt=i,He!==null&&(zt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(zt?(t=He,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),wo(t)):hh(He,n.stateNode));break;case 4:r=He,i=zt,He=n.stateNode.containerInfo,zt=!0,Mn(t,e,n),He=r,zt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!et&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Mn(t,e,n),et=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function yv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QI),e.forEach(function(r){var i=s2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,zt=!1;break e;case 3:He=a.stateNode.containerInfo,zt=!0;break e;case 4:He=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(He===null)throw Error(I(160));Sw(s,o,i),He=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iw(e,t),e=e.sibling}function Iw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Yt(t),r&4){try{Zs(3,t,t.return),ec(3,t)}catch(y){we(t,t.return,y)}try{Zs(5,t,t.return)}catch(y){we(t,t.return,y)}}break;case 1:Ft(e,t),Yt(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Ft(e,t),Yt(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(y){we(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q0(i,s),hd(a,o);var u=hd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?X0(i,h):c==="dangerouslySetInnerHTML"?Q0(i,h):c==="children"?mo(i,h):Xf(i,c,h,u)}switch(a){case"input":od(i,s);break;case"textarea":G0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Pi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[So]=s}catch(y){we(t,t.return,y)}}break;case 6:if(Ft(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){we(t,t.return,y)}}break;case 3:if(Ft(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(y){we(t,t.return,y)}break;case 4:Ft(e,t),Yt(t);break;case 13:Ft(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bp=Te())),r&4&&yv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||c,Ft(e,t),et=u):Ft(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,p=d.child,d.tag){case 0:case 11:case 14:case 15:Zs(4,d,d.return);break;case 1:Ci(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){we(r,n,y)}}break;case 5:Ci(d,d.return);break;case 22:if(d.memoizedState!==null){Ev(h);continue}}p!==null?(p.return=d,O=p):Ev(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y0("display",o))}catch(y){we(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){we(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),Yt(t),r&4&&yv(t);break;case 21:break;default:Ft(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tw(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=vv(t);Vd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vv(t);zd(t,a,o);break;default:throw Error(I(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XI(t,e,n){O=t,Cw(t)}function Cw(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=Qa;var u=et;if(Qa=o,(et=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?kv(i):l!==null?(l.return=o,O=l):kv(i);for(;s!==null;)O=s,Cw(s),s=s.sibling;O=i,Qa=a,et=u}wv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):wv(t)}}function wv(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}et||e.flags&512&&Ud(e)}catch(d){we(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Ev(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function kv(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Ud(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var JI=Math.ceil,lu=Pn.ReactCurrentDispatcher,Ap=Pn.ReactCurrentOwner,Ot=Pn.ReactCurrentBatchConfig,Z=0,Ue=null,xe=null,Ge=0,Et=0,xi=Er(0),Pe=0,bo=null,Gr=0,tc=0,Np=0,eo=null,pt=null,bp=0,Xi=1/0,un=null,uu=!1,Bd=null,nr=null,Ya=!1,Gn=null,cu=0,to=0,jd=null,Al=-1,Nl=0;function ht(){return Z&6?Te():Al!==-1?Al:Al=Te()}function rr(t){return t.mode&1?Z&2&&Ge!==0?Ge&-Ge:LI.transition!==null?(Nl===0&&(Nl=u1()),Nl):(t=re,t!==0||(t=window.event,t=t===void 0?16:g1(t.type)),t):1}function Ht(t,e,n,r){if(50<to)throw to=0,jd=null,Error(I(185));ea(t,n,r),(!(Z&2)||t!==Ue)&&(t===Ue&&(!(Z&2)&&(tc|=n),Pe===4&&Bn(t,Ge)),wt(t,r),n===1&&Z===0&&!(e.mode&1)&&(Xi=Te()+500,Xu&&kr()))}function wt(t,e){var n=t.callbackNode;LS(t,e);var r=Gl(t,t===Ue?Ge:0);if(r===0)n!==null&&bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bg(n),e===1)t.tag===0?OI(_v.bind(null,t)):L1(_v.bind(null,t)),bI(function(){!(Z&6)&&kr()}),n=null;else{switch(c1(r)){case 1:n=np;break;case 4:n=a1;break;case 16:n=ql;break;case 536870912:n=l1;break;default:n=ql}n=Ow(n,xw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xw(t,e){if(Al=-1,Nl=0,Z&6)throw Error(I(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=Gl(t,t===Ue?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var i=Z;Z|=2;var s=Nw();(Ue!==t||Ge!==e)&&(un=null,Xi=Te()+500,zr(t,e));do try{t2();break}catch(a){Aw(t,a)}while(1);mp(),lu.current=s,Z=i,xe!==null?e=0:(Ue=null,Ge=0,e=Pe)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Hd(t,i))),e===1)throw n=bo,zr(t,0),Bn(t,r),wt(t,Te()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ZI(i)&&(e=hu(t,r),e===2&&(s=gd(t),s!==0&&(r=s,e=Hd(t,s))),e===1))throw n=bo,zr(t,0),Bn(t,r),wt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Nr(t,pt,un);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=bp+500-Te(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sd(Nr.bind(null,t,pt,un),e);break}Nr(t,pt,un);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JI(r/1960))-r,10<r){t.timeoutHandle=Sd(Nr.bind(null,t,pt,un),r);break}Nr(t,pt,un);break;case 5:Nr(t,pt,un);break;default:throw Error(I(329))}}}return wt(t,Te()),t.callbackNode===n?xw.bind(null,t):null}function Hd(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=hu(t,e),t!==2&&(e=pt,pt=n,e!==null&&Wd(e)),t}function Wd(t){pt===null?pt=t:pt.push.apply(pt,t)}function ZI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Np,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function _v(t){if(Z&6)throw Error(I(327));$i();var e=Gl(t,0);if(!(e&1))return wt(t,Te()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Hd(t,r))}if(n===1)throw n=bo,zr(t,0),Bn(t,e),wt(t,Te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,pt,un),wt(t,Te()),null}function Rp(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Xi=Te()+500,Xu&&kr())}}function Kr(t){Gn!==null&&Gn.tag===0&&!(Z&6)&&$i();var e=Z;Z|=1;var n=Ot.transition,r=re;try{if(Ot.transition=null,re=1,t)return t()}finally{re=r,Ot.transition=n,Z=e,!(Z&6)&&kr()}}function Pp(){Et=xi.current,ue(xi)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NI(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:Qi(),ue(vt),ue(ot),kp();break;case 5:Ep(r);break;case 4:Qi();break;case 13:ue(me);break;case 19:ue(me);break;case 10:gp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(Ue=t,xe=t=ir(t.current,null),Ge=Et=e,Pe=0,bo=null,Np=tc=Gr=0,pt=eo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function Aw(t,e){do{var n=xe;try{if(mp(),Il.current=au,ou){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(qr=0,Fe=be=ge=null,Js=!1,xo=0,Ap.current=null,n===null||n.return===null){Pe=1,bo=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=uv(o);if(p!==null){p.flags&=-257,cv(p,o,a,s,e),p.mode&1&&lv(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){lv(s,u,e),Dp();break e}l=Error(I(426))}}else if(de&&a.mode&1){var E=uv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),cv(E,o,a,s,e),fp(Yi(l,a));break e}}s=l=Yi(l,a),Pe!==4&&(Pe=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=hw(s,l,e);tv(s,m);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=dw(s,a,e);tv(s,k);break e}}s=s.return}while(s!==null)}Rw(n)}catch(T){e=T,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Nw(){var t=lu.current;return lu.current=au,t===null?au:t}function Dp(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ue===null||!(Gr&268435455)&&!(tc&268435455)||Bn(Ue,Ge)}function hu(t,e){var n=Z;Z|=2;var r=Nw();(Ue!==t||Ge!==e)&&(un=null,zr(t,e));do try{e2();break}catch(i){Aw(t,i)}while(1);if(mp(),Z=n,lu.current=r,xe!==null)throw Error(I(261));return Ue=null,Ge=0,Pe}function e2(){for(;xe!==null;)bw(xe)}function t2(){for(;xe!==null&&!CS();)bw(xe)}function bw(t){var e=Dw(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?Rw(t):xe=e,Ap.current=null}function Rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KI(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,xe=null;return}}else if(n=GI(n,e,Et),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Pe===0&&(Pe=5)}function Nr(t,e,n){var r=re,i=Ot.transition;try{Ot.transition=null,re=1,n2(t,e,n,r)}finally{Ot.transition=i,re=r}return null}function n2(t,e,n,r){do $i();while(Gn!==null);if(Z&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(MS(t,s),t===Ue&&(xe=Ue=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,Ow(ql,function(){return $i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=re;re=1;var a=Z;Z|=4,Ap.current=null,YI(t,n),Iw(n,t),_I(_d),Kl=!!kd,_d=kd=null,t.current=n,XI(n),xS(),Z=a,re=o,Ot.transition=s}else t.current=n;if(Ya&&(Ya=!1,Gn=t,cu=i),s=t.pendingLanes,s===0&&(nr=null),bS(n.stateNode),wt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Bd,Bd=null,t;return cu&1&&t.tag!==0&&$i(),s=t.pendingLanes,s&1?t===jd?to++:(to=0,jd=t):to=0,kr(),null}function $i(){if(Gn!==null){var t=c1(cu),e=Ot.transition,n=re;try{if(Ot.transition=null,re=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,cu=0,Z&6)throw Error(I(331));var i=Z;for(Z|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Zs(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,p=c.return;if(_w(c),c===u){O=null;break}if(d!==null){d.return=p,O=d;break}O=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,O=v;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(T){we(a,a.return,T)}if(a===o){O=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,O=k;break e}O=a.return}}if(Z=i,kr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{re=n,Ot.transition=e}}return!1}function Tv(t,e,n){e=Yi(n,e),e=hw(t,e,1),t=tr(t,e,1),e=ht(),t!==null&&(ea(t,1,e),wt(t,e))}function we(t,e,n){if(t.tag===3)Tv(t,t,n);else for(;e!==null;){if(e.tag===3){Tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Yi(n,t),t=dw(e,t,1),e=tr(e,t,1),t=ht(),e!==null&&(ea(e,1,t),wt(e,t));break}}e=e.return}}function r2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(Ge&n)===n&&(Pe===4||Pe===3&&(Ge&130023424)===Ge&&500>Te()-bp?zr(t,0):Np|=n),wt(t,e)}function Pw(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=ht();t=kn(t,e),t!==null&&(ea(t,e,n),wt(t,n))}function i2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pw(t,n)}function s2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Pw(t,n)}var Dw;Dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,qI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,de&&e.flags&1048576&&M1(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xl(t,e),t=e.pendingProps;var i=qi(e,ot.current);Mi(e,n),i=Tp(null,e,r,t,i,n);var s=Sp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yp(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Rd(e,r,t,n),e=Od(null,e,r,!0,s,n)):(e.tag=0,de&&s&&hp(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=a2(r),t=Ut(r,t),i){case 0:e=Dd(null,e,r,t,n);break e;case 1:e=fv(null,e,r,t,n);break e;case 11:e=hv(null,e,r,t,n);break e;case 14:e=dv(null,e,r,Ut(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),fv(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z1(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(I(423)),e),e=pv(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(I(424)),e),e=pv(t,e,r,n,i);break e}else for(kt=er(e.stateNode.containerInfo.firstChild),Tt=e,de=!0,Vt=null,n=H1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){e=_n(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return W1(e),t===null&&Ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Td(r,i)?o=null:s!==null&&Td(r,s)&&(e.flags|=32),mw(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return vw(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),hv(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(nu,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!vt.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Lt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),dv(t,e,r,i,n);case 15:return fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),xl(t,e),e.tag=1,yt(r)?(t=!0,Zl(e)):t=!1,Mi(e,n),B1(e,r,i),Rd(e,r,i,n),Od(null,e,r,!0,t,n);case 19:return yw(t,e,n);case 22:return pw(t,e,n)}throw Error(I(156,e.tag))};function Ow(t,e){return o1(t,e)}function o2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new o2(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a2(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===ep)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return Vr(n.children,i,s,e);case Jf:o=8,i|=8;break;case td:return t=Dt(12,n,e,i|2),t.elementType=td,t.lanes=s,t;case nd:return t=Dt(13,n,e,i),t.elementType=nd,t.lanes=s,t;case rd:return t=Dt(19,n,e,i),t.elementType=rd,t.lanes=s,t;case j0:return nc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:o=10;break e;case B0:o=9;break e;case Zf:o=11;break e;case ep:o=14;break e;case Un:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function nc(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=j0,t.lanes=n,t.stateNode={isHidden:!1},t}function wh(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eh(0),this.expirationTimes=eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,r,i,s,o,a,l){return t=new l2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),t}function u2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lw(t){if(!t)return dr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(yt(n))return O1(t,n,e)}return e}function Mw(t,e,n,r,i,s,o,a,l){return t=Lp(n,r,!0,t,i,s,o,a,l),t.context=Lw(null),n=t.current,r=ht(),i=rr(n),s=yn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,ea(t,i,r),wt(t,r),t}function rc(t,e,n,r){var i=e.current,s=ht(),o=rr(i);return n=Lw(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Ht(t,i,o,s),Sl(t,i,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mp(t,e){Sv(t,e),(t=t.alternate)&&Sv(t,e)}function c2(){return null}var $w=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}ic.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));rc(t,e,null,null)};ic.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){rc(null,t,null,null)}),e[En]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=f1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&m1(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iv(){}function h2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=du(o);s.call(u)}}var o=Mw(e,r,t,0,null,!1,!1,"",Iv);return t._reactRootContainer=o,t[En]=o.current,_o(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=du(l);a.call(u)}}var l=Lp(t,0,!1,null,null,!1,!1,"",Iv);return t._reactRootContainer=l,t[En]=l.current,_o(t.nodeType===8?t.parentNode:t),Kr(function(){rc(e,l,n,r)}),l}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=du(o);a.call(l)}}rc(e,o,t,i)}else o=h2(n,e,t,i,r);return du(o)}h1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(rp(e,n|1),wt(e,Te()),!(Z&6)&&(Xi=Te()+500,kr()))}break;case 13:Kr(function(){var r=kn(t,1);if(r!==null){var i=ht();Ht(r,t,1,i)}}),Mp(t,1)}};ip=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ht();Ht(e,t,134217728,n)}Mp(t,134217728)}};d1=function(t){if(t.tag===13){var e=rr(t),n=kn(t,e);if(n!==null){var r=ht();Ht(n,t,e,r)}Mp(t,e)}};f1=function(){return re};p1=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(I(90));W0(r),od(r,i)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};e1=Rp;t1=Kr;var d2={usingClientEntryPoint:!1,Events:[na,ki,Yu,J0,Z0,Rp]},Ds={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f2={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||c2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{qu=Xa.inject(f2),nn=Xa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d2;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(I(200));return u2(t,e,null,n)};xt.createRoot=function(t,e){if(!Fp(t))throw Error(I(299));var n=!1,r="",i=$w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,_o(t.nodeType===8?t.parentNode:t),new $p(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=i1(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Kr(t)};xt.hydrate=function(t,e,n){if(!sc(e))throw Error(I(200));return oc(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mw(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};xt.render=function(t,e,n){if(!sc(e))throw Error(I(200));return oc(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!sc(t))throw Error(I(40));return t._reactRootContainer?(Kr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};xt.unstable_batchedUpdates=Rp;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return oc(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=xt})(cS);var Cv=Jh;Xh.createRoot=Cv.createRoot,Xh.hydrateRoot=Cv.hydrateRoot;var Ja,p2=new Uint8Array(16);function m2(){if(!Ja&&(Ja=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ja))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ja(p2)}const g2=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function v2(t){return typeof t=="string"&&g2.test(t)}var je=[];for(var kh=0;kh<256;++kh)je.push((kh+256).toString(16).substr(1));function y2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(je[t[e+0]]+je[t[e+1]]+je[t[e+2]]+je[t[e+3]]+"-"+je[t[e+4]]+je[t[e+5]]+"-"+je[t[e+6]]+je[t[e+7]]+"-"+je[t[e+8]]+je[t[e+9]]+"-"+je[t[e+10]]+je[t[e+11]]+je[t[e+12]]+je[t[e+13]]+je[t[e+14]]+je[t[e+15]]).toLowerCase();if(!v2(n))throw TypeError("Stringified UUID is invalid");return n}function Fw(t,e,n){t=t||{};var r=t.random||(t.rng||m2)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return y2(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},w2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new E2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class E2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k2=function(t){const e=Uw(t);return zw.encodeByteArray(e,!0)},fu=function(t){return k2(t).replace(/\./g,"")},Vw=function(t){try{return zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=()=>_2().__FIREBASE_DEFAULTS__,S2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},I2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vw(t[1]);return e&&JSON.parse(e)},Up=()=>{try{return T2()||S2()||I2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bw=t=>{var e,n;return(n=(e=Up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C2=t=>{const e=Bw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x2=()=>{var t;return(t=Up())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=Up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function R2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function P2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D2(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O2(){try{return typeof indexedDB=="object"}catch{return!1}}function L2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=M2,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,r)}}function $2(t,e){return t.replace(F2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const F2=/\{\$([^}]+)}/g;function U2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xv(s)&&xv(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function z2(t,e){const n=new V2(t,e);return n.subscribe.bind(n)}class V2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_h),i.error===void 0&&(i.error=_h),i.complete===void 0&&(i.complete=_h);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _h(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new A2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W2(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H2(t){return t===br?void 0:t}function W2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new j2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const G2={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},K2=ee.INFO,Q2={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Y2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Q2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zp{constructor(e){this.name=e,this._logLevel=K2,this._logHandler=Y2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const X2=(t,e)=>e.some(n=>t instanceof n);let Av,Nv;function J2(){return Av||(Av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z2(){return Nv||(Nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hw=new WeakMap,qd=new WeakMap,Ww=new WeakMap,Th=new WeakMap,Vp=new WeakMap;function eC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hw.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function tC(t){if(qd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qd.set(t,e)}let Gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nC(t){Gd=t(Gd)}function rC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sh(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),sr(r)}:Z2().includes(t)?function(...e){return t.apply(Sh(this),e),sr(Hw.get(this))}:function(...e){return sr(t.apply(Sh(this),e))}}function iC(t){return typeof t=="function"?rC(t):(t instanceof IDBTransaction&&tC(t),X2(t,J2())?new Proxy(t,Gd):t)}function sr(t){if(t instanceof IDBRequest)return eC(t);if(Th.has(t))return Th.get(t);const e=iC(t);return e!==t&&(Th.set(t,e),Vp.set(e,t)),e}const Sh=t=>Vp.get(t);function sC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oC=["get","getKey","getAll","getAllKeys","count"],aC=["put","add","delete","clear"],Ih=new Map;function bv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ih.get(e))return Ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ih.set(e,s),s}nC(t=>({...t,get:(e,n,r)=>bv(e,n)||t.get(e,n,r),has:(e,n)=>!!bv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kd="@firebase/app",Rv="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new zp("@firebase/app"),cC="@firebase/app-compat",hC="@firebase/analytics-compat",dC="@firebase/analytics",fC="@firebase/app-check-compat",pC="@firebase/app-check",mC="@firebase/auth",gC="@firebase/auth-compat",vC="@firebase/database",yC="@firebase/database-compat",wC="@firebase/functions",EC="@firebase/functions-compat",kC="@firebase/installations",_C="@firebase/installations-compat",TC="@firebase/messaging",SC="@firebase/messaging-compat",IC="@firebase/performance",CC="@firebase/performance-compat",xC="@firebase/remote-config",AC="@firebase/remote-config-compat",NC="@firebase/storage",bC="@firebase/storage-compat",RC="@firebase/firestore",PC="@firebase/firestore-compat",DC="firebase",OC="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",LC={[Kd]:"fire-core",[cC]:"fire-core-compat",[dC]:"fire-analytics",[hC]:"fire-analytics-compat",[pC]:"fire-app-check",[fC]:"fire-app-check-compat",[mC]:"fire-auth",[gC]:"fire-auth-compat",[vC]:"fire-rtdb",[yC]:"fire-rtdb-compat",[wC]:"fire-fn",[EC]:"fire-fn-compat",[kC]:"fire-iid",[_C]:"fire-iid-compat",[TC]:"fire-fcm",[SC]:"fire-fcm-compat",[IC]:"fire-perf",[CC]:"fire-perf-compat",[xC]:"fire-rc",[AC]:"fire-rc-compat",[NC]:"fire-gcs",[bC]:"fire-gcs-compat",[RC]:"fire-fst",[PC]:"fire-fst-compat","fire-js":"fire-js",[DC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,Yd=new Map;function MC(t,e){try{t.container.addComponent(e)}catch(n){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ji(t){const e=t.name;if(Yd.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,t);for(const n of mu.values())MC(n,t);return!0}function Bp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new ia("app","Firebase",$C);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=OC;function qw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=x2()),!n)throw or.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new q2(i);for(const l of Yd.values())o.addComponent(l);const a=new FC(n,r,o);return mu.set(i,a),a}function Gw(t=Qd){const e=mu.get(t);if(!e&&t===Qd)return qw();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let i=(r=LC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(a.join(" "));return}Ji(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="firebase-heartbeat-database",zC=1,Ro="firebase-heartbeat-store";let Ch=null;function Kw(){return Ch||(Ch=sC(UC,zC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ro)}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function VC(t){try{return(await Kw()).transaction(Ro).objectStore(Ro).get(Qw(t))}catch(e){if(e instanceof Dn)Yr.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(n.message)}}}async function Pv(t,e){try{const r=(await Kw()).transaction(Ro,"readwrite");return await r.objectStore(Ro).put(e,Qw(t)),r.done}catch(n){if(n instanceof Dn)Yr.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yr.warn(r.message)}}}function Qw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=1024,jC=30*24*60*60*1e3;class HC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=jC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dv(),{heartbeatsToSend:n,unsentEntries:r}=WC(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dv(){return new Date().toISOString().substring(0,10)}function WC(t,e=BC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ov(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ov(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O2()?L2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ov(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){Ji(new Qr("platform-logger",e=>new lC(e),"PRIVATE")),Ji(new Qr("heartbeat",e=>new HC(e),"PRIVATE")),ar(Kd,Rv,t),ar(Kd,Rv,"esm2017"),ar("fire-js","")}GC("");var KC="firebase",QC="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(KC,QC,"app");function jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YC=Yw,Xw=new ia("auth","Firebase",Yw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new zp("@firebase/auth");function XC(t,...e){gu.logLevel<=ee.WARN&&gu.warn(`Auth (${hs}): ${t}`,...e)}function Rl(t,...e){gu.logLevel<=ee.ERROR&&gu.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Hp(t,...e)}function sn(t,...e){return Hp(t,...e)}function Jw(t,e,n){const r=Object.assign(Object.assign({},YC()),{[e]:n});return new ia("auth","Firebase",r).create(e,{appName:t.name})}function JC(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),Jw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xw.create(t,...e)}function V(t,e,...n){if(!t)throw Hp(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rl(e),new Error(e)}function Tn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZC(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZC()||R2()||"connection"in navigator)?navigator.onLine:!0}function tx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=b2()||P2()}get(){return ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new oa(3e4,6e4);function ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,r,i={}){return eE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zw.fetch()(tE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function eE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nx),e);try{const i=new ix(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jw(t,c,u);$t(t,c)}}catch(i){if(i instanceof Dn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function aa(t,e,n,r,i={}){const s=await fs(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`}class ix{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),rx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function ox(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ax(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=qp(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(xh(i.auth_time)),issuedAtTime:no(xh(i.iat)),expirationTime:no(xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xh(t){return Number(t)*1e3}function qp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vw(n);return i?JSON.parse(i):(Rl("Failed to decode base64 JWT payload"),null)}catch(i){return Rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lx(t){const e=qp(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&ux(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ux({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Po(t,ox(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fx(s.providerUserInfo):[],a=dx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function hx(t){const e=ze(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fx(t){return t.map(e=>{var{providerId:n}=e,r=jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){const n=await eE(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await px(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Do;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ax(this,e)}reload(){return hx(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Po(this,sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:k,isAnonymous:T,providerData:x,stsTokenManager:A}=n;V(v&&A,e,"internal-error");const R=Do.fromJSON(this.name,A);V(typeof v=="string",e,"internal-error"),$n(h,e.name),$n(d,e.name),V(typeof k=="boolean",e,"internal-error"),V(typeof T=="boolean",e,"internal-error"),$n(p,e.name),$n(g,e.name),$n(y,e.name),$n(E,e.name),$n(m,e.name),$n(f,e.name);const Q=new Br({uid:v,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:f});return x&&Array.isArray(x)&&(Q.providerData=x.map(U=>Object.assign({},U))),E&&(Q._redirectEventId=E),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Do;i.updateFromServerResponse(n);const s=new Br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;function mn(t){Tn(t instanceof Function,"Expected a class definition");let e=Mv.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rE.type="NONE";const $v=rE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(mn($v),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||mn($v);const o=Pl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Br._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lE(e))return"Blackberry";if(uE(e))return"Webos";if(Gp(e))return"Safari";if((e.includes("chrome/")||sE(e))&&!e.includes("edge/"))return"Chrome";if(aE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iE(t=at()){return/firefox\//i.test(t)}function Gp(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sE(t=at()){return/crios\//i.test(t)}function oE(t=at()){return/iemobile/i.test(t)}function aE(t=at()){return/android/i.test(t)}function lE(t=at()){return/blackberry/i.test(t)}function uE(t=at()){return/webos/i.test(t)}function ac(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mx(t=at()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gx(){return D2()&&document.documentMode===10}function cE(t=at()){return ac(t)||aE(t)||uE(t)||lE(t)||/windows phone/i.test(t)||oE(t)}function vx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e=[]){let n;switch(t){case"Browser":n=Fv(at());break;case"Worker":n=`${Fv(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}async function dE(t,e){return fs(t,"GET","/v2/recaptchaConfig",ds(t,e))}function Uv(t){return t!==void 0&&t.enterprise!==void 0}class fE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yx().appendChild(r)})}function wx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ex="https://www.google.com/recaptcha/enterprise.js?render=",kx="recaptcha-enterprise",_x="NO_RECAPTCHA";class mE{constructor(e){this.type=kx,this.auth=_r(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{dE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_x)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pE(Ex+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yu(t,e,n,r=!1){const i=new mE(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zv(this),this.idTokenSubscription=new zv(this),this.beforeStateQueue=new Tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}async initializeRecaptchaConfig(){const e=await dE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new fE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new mE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _r(t){return ze(t)}class zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=z2(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e){const n=Bp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function Cx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xx(t,e,n){const r=_r(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gE(e),{host:o,port:a}=Ax(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Nx()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ax(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vv(o)}}}function Vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function bx(t,e){return fs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){return aa(t,"POST","/v1/accounts:signInWithPassword",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}async function Px(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Kp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await yu(e,r,"signInWithPassword");return Ah(e,i)}else return Ah(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await yu(e,r,"signInWithPassword");return Ah(e,s)}else return Promise.reject(i)});case"emailLink":return Rx(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Px(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return aa(t,"POST","/v1/accounts:signInWithIdp",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="http://localhost";class Xr extends Kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:Dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lx(t){const e=zs(Vs(t)).link,n=e?zs(Vs(e)).deep_link_id:null,r=zs(Vs(t)).deep_link_id;return(r?zs(Vs(r)).link:null)||r||n||e||t}class Qp{constructor(e){var n,r,i,s,o,a;const l=zs(Vs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Ox((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lx(e);try{return new Qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qp.parseLink(n);return V(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Yp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends la{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends la{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends la{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t,e){return aa(t,"POST","/v1/accounts:signUp",ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Br._fromIdTokenResponse(e,r,i),o=Bv(r);return new Sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bv(r);return new Sn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t){var e;const n=_r(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Dl(n,{returnSecureToken:!0}),i=await Sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function $x(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Po(t,vE(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=qp(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Sn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t,e,n=!1){const r="signIn",i=await vE(t,r,e),s=await Sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ux(t,e){return yE(_r(t),e)}async function zx(t,e,n){var r;const i=_r(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await yu(i,s,"signUpPassword");o=Dl(i,u)}else o=Dl(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await yu(i,s,"signUpPassword");return Dl(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Sn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Vx(t,e,n){return Ux(ze(t),ps.credential(e,n))}function Bx(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function jx(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function Hx(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function Wx(t){return ze(t).signOut()}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(){const t=at();return Gp(t)||ac(t)}const Gx=1e3,Kx=10;class EE extends wE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qx()&&vx(),this.fallbackToPolling=cE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Kx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}EE.type="LOCAL";const Qx=EE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE extends wE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kE.type="SESSION";const _E=kE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Yx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Xp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function Jx(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function Zx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tA(){return TE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebaseLocalStorageDb",nA=1,ku="firebaseLocalStorage",IE="fbase_key";class ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function rA(){const t=indexedDB.deleteDatabase(SE);return new ua(t).toPromise()}function Jd(){const t=indexedDB.open(SE,nA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ku,{keyPath:IE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ku)?e(r):(r.close(),await rA(),e(await Jd()))})})}async function jv(t,e,n){const r=uc(t,!0).put({[IE]:e,value:n});return new ua(r).toPromise()}async function iA(t,e){const n=uc(t,!1).get(e),r=await new ua(n).toPromise();return r===void 0?null:r.value}function Hv(t,e){const n=uc(t,!0).delete(e);return new ua(n).toPromise()}const sA=800,oA=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(tA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zx(),!this.activeServiceWorker)return;this.sender=new Xx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await jv(e,Eu,"1"),await Hv(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const aA=CE;new oa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e){return e?mn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends Kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return yE(t.auth,new Jp(t),t.bypassAuthState)}function uA(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Fx(n,new Jp(t),t.bypassAuthState)}async function cA(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),$x(n,new Jp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:$t(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new oa(2e3,1e4);async function dA(t,e,n){const r=_r(t);JC(t,e,Yp);const i=xE(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends AE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="pendingRedirect",Ol=new Map;class pA extends AE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await mA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mA(t,e){const n=yA(e),r=vA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gA(t,e){Ol.set(t._key(),e)}function vA(t){return mn(t._redirectPersistence)}function yA(t){return Pl(fA,t.config.apiKey,t.name)}async function wA(t,e,n=!1){const r=_r(t),i=xE(r,e),o=await new pA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=10*60*1e3;class kA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_A(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wv(e))}saveEventToCache(e){this.cachedEventUids.add(Wv(e)),this.lastProcessedEventTime=Date.now()}}function Wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _A(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IA=/^https?/;async function CA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(xA(n))return}catch{}$t(t,"unauthorized-domain")}function xA(t){const e=Xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IA.test(n))return!1;if(SA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new oa(3e4,6e4);function qv(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NA(t){return new Promise((e,n)=>{var r,i,s;function o(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),n(sn(t,"network-request-failed"))},timeout:AA.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=wx("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},pE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function bA(t){return Ll=Ll||NA(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new oa(5e3,15e3),PA="__/auth/iframe",DA="emulator/auth/iframe",OA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,DA):`https://${t.config.authDomain}/${PA}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=LA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function $A(t){const e=await bA(t),n=on().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:MA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},RA.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,zA=600,VA="_blank",BA="http://localhost";class Gv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jA(t,e,n,r=UA,i=zA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=at().toLowerCase();n&&(a=sE(u)?VA:n),iE(u)&&(e=e||BA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(mx(u)&&a!=="_self")return HA(e||"",a),new Gv(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new Gv(h)}function HA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="__/auth/handler",qA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Kv(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof Yp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",U2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof la){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${GA}=${encodeURIComponent(l)}`:"";return`${KA(t)}?${sa(a).slice(1)}${u}`}function KA({config:t}){return t.emulator?Wp(t,qA):`https://${t.authDomain}/${WA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="webStorageSupport";class QA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_E,this._completeRedirectFn=wA,this._overrideRedirectResult=gA}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kv(e,n,r,Xd(),i);return jA(e,o,Xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Kv(e,n,r,Xd(),i);return Jx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $A(e),r=new kA(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nh,{type:Nh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nh];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cE()||Gp()||ac()}}const YA=QA;var Qv="@firebase/auth",Yv="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZA(t){Ji(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),V(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hE(t)},u=new Sx(r,i,s,l);return Cx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ji(new Qr("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(r=>new XA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(Qv,Yv,JA(t)),ar(Qv,Yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=5*60,tN=jw("authIdTokenMaxAge")||eN;let Xv=null;const nN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tN)return;const i=n==null?void 0:n.token;Xv!==i&&(Xv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rN(t=Gw()){const e=Bp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ix(t,{popupRedirectResolver:YA,persistence:[aA,Qx,_E]}),r=jw("authTokenSyncURL");if(r){const s=nN(r);jx(n,s,()=>s(n.currentUser)),Bx(n,o=>s(o))}const i=Bw("auth");return i&&xx(n,`http://${i}`),n}ZA("Browser");var iN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Zp=Zp||{},j=iN||self;function _u(){}function cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sN(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++oN)}var bh="closure_uid_"+(1e9*Math.random()>>>0),oN=0;function aN(t,e,n){return t.call.apply(t.bind,arguments)}function lN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=aN:rt=lN,rt.apply(null,arguments)}function el(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var uN=0;Tr.prototype.s=!1;Tr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),uN!=0)&&sN(this)};Tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function em(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var cN=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",_u,e),j.removeEventListener("test",_u,e)}catch{}return t}();function Tu(t){return/^[\s\xa0]*$/.test(t)}var Zv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rh(t,e){return t<e?-1:t>e?1:0}function hc(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Zt(t){return hc().indexOf(t)!=-1}function tm(t){return tm[" "](t),t}tm[" "]=_u;function RE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var hN=Zt("Opera"),Zi=Zt("Trident")||Zt("MSIE"),PE=Zt("Edge"),Zd=PE||Zi,DE=Zt("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge"))&&!(Zt("Trident")||Zt("MSIE"))&&!Zt("Edge"),dN=hc().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge");function OE(){var t=j.document;return t?t.documentMode:void 0}var Su;e:{var Ph="",Dh=function(){var t=hc();if(DE)return/rv:([^\);]+)(\)|;)/.exec(t);if(PE)return/Edge\/([\d\.]+)/.exec(t);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dN)return/WebKit\/(\S+)/.exec(t);if(hN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dh&&(Ph=Dh?Dh[1]:""),Zi){var Oh=OE();if(Oh!=null&&Oh>parseFloat(Ph)){Su=String(Oh);break e}}Su=Ph}var fN={};function pN(){return RE(fN,9,function(){let t=0;const e=Zv(String(Su)).split("."),n=Zv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Rh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Rh(i[2].length==0,s[2].length==0)||Rh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ef;if(j.document&&Zi){var ey=OE();ef=ey||parseInt(Su,10)||void 0}else ef=void 0;var mN=ef;function Lo(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(DE){e:{try{tm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lo.$.h.call(this)}}Be(Lo,it);var gN={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ha="closure_listenable_"+(1e6*Math.random()|0),vN=0;function yN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++vN,this.fa=this.ia=!1}function dc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function nm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LE(t){const e={};for(const n in t)e[n]=t[n];return e}const ty="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ME(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ty.length;s++)n=ty[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function tf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=bE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var rm="closure_lm_"+(1e6*Math.random()|0),Lh={};function $E(t,e,n,r,i){if(r&&r.once)return UE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$E(t,e[s],n,r,i);return null}return n=om(n),t&&t[ha]?t.O(e,n,ca(r)?!!r.capture:!!r,i):FE(t,e,n,!1,r,i)}function FE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ca(i)?!!i.capture:!!i,a=sm(t);if(a||(t[rm]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(VE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wN(){function t(n){return e.call(t.src,t.listener,n)}const e=EN;return t}function UE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)UE(t,e[s],n,r,i);return null}return n=om(n),t&&t[ha]?t.P(e,n,ca(r)?!!r.capture:!!r,i):FE(t,e,n,!0,r,i)}function zE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zE(t,e[s],n,r,i);else r=ca(r)?!!r.capture:!!r,n=om(n),t&&t[ha]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nf(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=sm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nf(e,n,r,i)),(n=-1<t?e[t]:null)&&im(n))}function im(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ha])tf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(VE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=sm(e))?(tf(n,t),n.h==0&&(n.src=null,e[rm]=null)):dc(t)}}}function VE(t){return t in Lh?Lh[t]:Lh[t]="on"+t}function EN(t,e){if(t.fa)t=!0;else{e=new Lo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&im(t),t=n.call(r,e)}return t}function sm(t){return t=t[rm],t instanceof fc?t:null}var Mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function om(t){return typeof t=="function"?t:(t[Mh]||(t[Mh]=function(e){return t.handleEvent(e)}),t[Mh])}function Ve(){Tr.call(this),this.i=new fc(this),this.S=this,this.J=null}Be(Ve,Tr);Ve.prototype[ha]=!0;Ve.prototype.removeEventListener=function(t,e,n,r){zE(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var i=e;e=new it(r,t),ME(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tl(o,r,!0,e)&&i}if(o=e.g=t,i=tl(o,r,!0,e)&&i,i=tl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=tl(o,r,!1,e)&&i}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ve.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&tf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var am=j.JSON.stringify;function kN(){var t=HE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _N{constructor(){this.h=this.g=null}add(e,n){const r=BE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var BE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TN,t=>t.reset());class TN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SN(t){j.setTimeout(()=>{throw t},0)}function jE(t,e){rf||IN(),sf||(rf(),sf=!0),HE.add(t,e)}var rf;function IN(){var t=j.Promise.resolve(void 0);rf=function(){t.then(CN)}}var sf=!1,HE=new _N;function CN(){for(var t;t=kN();){try{t.h.call(t.g)}catch(n){SN(n)}var e=BE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sf=!1}function pc(t,e){Ve.call(this),this.h=t||1,this.g=e||j,this.j=rt(this.qb,this),this.l=Date.now()}Be(pc,Ve);b=pc.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(lm(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){pc.$.N.call(this),lm(this),delete this.g};function um(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function WE(t){t.g=um(()=>{t.g=null,t.i&&(t.i=!1,WE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xN extends Tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:WE(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mo(t){Tr.call(this),this.h=t,this.g={}}Be(Mo,Tr);var ny=[];function qE(t,e,n,r){Array.isArray(n)||(n&&(ny[0]=n.toString()),n=ny);for(var i=0;i<n.length;i++){var s=$E(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function GE(t){nm(t.g,function(e,n){this.g.hasOwnProperty(n)&&im(e)},t),t.g={}}Mo.prototype.N=function(){Mo.$.N.call(this),GE(this)};Mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Ea=function(){this.g=!1};function AN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function NN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ai(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RN(t,n)+(r?" "+r:"")})}function bN(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function RN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return am(n)}catch{return e}}var oi={},ry=null;function gc(){return ry=ry||new Ve}oi.Ta="serverreachability";function KE(t){it.call(this,oi.Ta,t)}Be(KE,it);function $o(t){const e=gc();Ke(e,new KE(e))}oi.STAT_EVENT="statevent";function QE(t,e){it.call(this,oi.STAT_EVENT,t),this.stat=e}Be(QE,it);function ct(t){const e=gc();Ke(e,new QE(e,t))}oi.Ua="timingevent";function YE(t,e){it.call(this,oi.Ua,t),this.size=e}Be(YE,it);function da(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},XE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cm(){}cm.prototype.h=null;function iy(t){return t.h||(t.h=t.i())}function JE(){}var fa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hm(){it.call(this,"d")}Be(hm,it);function dm(){it.call(this,"c")}Be(dm,it);var of;function yc(){}Be(yc,cm);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};of=new yc;function pa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Mo(this),this.P=PN,t=Zd?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ZE}function ZE(){this.i=null,this.g="",this.h=!1}var PN=45e3,af={},Iu={};b=pa.prototype;b.setTimeout=function(t){this.P=t};function lf(t,e,n){t.L=1,t.v=Ec(In(e)),t.s=n,t.S=!0,ek(t,null)}function ek(t,e){t.G=Date.now(),ma(t),t.A=In(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),lk(n.i,"t",r),t.C=0,n=t.l.I,t.h=new ZE,t.g=Nk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new xN(rt(t.Pa,t,t.g),t.O)),qE(t.U,t.g,"readystatechange",t.nb),e=t.I?LE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$o(),AN(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=gn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Zd||this.g&&(this.h.h||this.g.ja()||ly(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?$o(3):$o(2)),wc(this);var n=this.g.da();this.aa=n;t:if(tk(this)){var r=ly(this.g);t="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),ro(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,NN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tu(a)){var u=a;break t}}u=null}if(n=u)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,n);else{this.i=!1,this.o=3,ct(12),Lr(this),ro(this);break e}}this.S?(nk(this,c,o),Zd&&this.i&&c==3&&(qE(this.U,this.V,"tick",this.mb),this.V.start())):(Ai(this.j,this.m,o,null),uf(this,o)),c==4&&Lr(this),this.i&&!this.J&&(c==4?Ik(this.l,this):(this.i=!1,ma(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Lr(this),ro(this)}}}catch{}finally{}};function tk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function nk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=DN(t,n),i==Iu){e==4&&(t.o=4,ct(14),r=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==af){t.o=4,ct(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ai(t.j,t.m,i,null),uf(t,i);tk(t)&&i!=Iu&&i!=af&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wm(e),e.L=!0,ct(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),Lr(t),ro(t))}b.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.C<e.length&&(wc(this),nk(this,t,e),this.i&&t!=4&&ma(this))}};function DN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Iu:(n=Number(e.substring(n,r)),isNaN(n)?af:(r+=1,r+n>e.length?Iu:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.J=!0,Lr(this)};function ma(t){t.Y=Date.now()+t.P,rk(t,t.P)}function rk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=da(rt(t.lb,t),e)}function wc(t){t.B&&(j.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bN(this.j,this.A),this.L!=2&&($o(),ct(17)),Lr(this),this.o=2,ro(this)):rk(this,this.Y-t)};function ro(t){t.l.H==0||t.J||Ik(t.l,t)}function Lr(t){wc(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,lm(t.V),GE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function uf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cf(n.h,t))){if(!t.K&&cf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Au(n),Tc(n);else break e;ym(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=da(rt(n.ib,n),6e3));if(1>=hk(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Mr(n,11)}else if((t.K||n.g==t)&&Au(n),!Tu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fm(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,fe(r.G,r.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Ak(r,r.I?r.oa:null,r.Y),o.K){dk(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wc(a),ma(a)),r.g=o}else Tk(r);0<n.i.length&&Sc(n)}else u[0]!="stop"&&u[0]!="close"||Mr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mr(n,7):vm(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}$o(4)}catch{}}function ON(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ik(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LN(t),r=ON(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var sk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jr){this.h=e!==void 0?e:t.h,Cu(this,t.j),this.s=t.s,this.g=t.g,xu(this,t.m),this.l=t.l,e=t.i;var n=new Fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sy(this,n),this.o=t.o}else t&&(n=String(t).match(sk))?(this.h=!!e,Cu(this,n[1]||"",!0),this.s=Bs(n[2]||""),this.g=Bs(n[3]||"",!0),xu(this,n[4]),this.l=Bs(n[5]||"",!0),sy(this,n[6]||"",!0),this.o=Bs(n[7]||"")):(this.h=!!e,this.i=new Fo(null,this.h))}jr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,oy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,oy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?UN:FN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,VN)),t.join("")};function In(t){return new jr(t)}function Cu(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sy(t,e,n){e instanceof Fo?(t.i=e,BN(t.i,t.h)):(n||(e=js(e,zN)),t.i=new Fo(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function Ec(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$N),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $N(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oy=/[#\/\?@]/g,FN=/[#\?:]/g,UN=/[#\?]/g,zN=/[#\?@]/g,VN=/#/g;function Fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sr(t){t.g||(t.g=new Map,t.h=0,t.i&&MN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=Fo.prototype;b.add=function(t,e){Sr(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ok(t,e){Sr(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ak(t,e){return Sr(t),e=ms(t,e),t.g.has(e)}b.forEach=function(t,e){Sr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.sa=function(){Sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){Sr(this);let e=[];if(typeof t=="string")ak(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Sr(this),this.i=null,t=ms(this,t),ak(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lk(t,e,n){ok(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),em(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BN(t,e){e&&!t.j&&(Sr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ok(this,r),lk(this,i,n))},t)),t.j=e}var jN=class{constructor(t,e){this.h=t,this.g=e}};function uk(t){this.l=t||HN,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HN=10;function ck(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hk(t){return t.h?1:t.g?t.g.size:0}function cf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fm(t,e){t.g?t.g.add(e):t.h=e}function dk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uk.prototype.cancel=function(){if(this.i=fk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fk(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return em(t.i)}function pm(){}pm.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};pm.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function WN(){this.g=new pm}function qN(t,e,n){const r=n||"";try{ik(t,function(i,s){let o=i;ca(i)&&(o=am(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GN(t,e){const n=new mc;if(j.Image){const r=new Image;r.onload=el(nl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=el(nl,n,r,"TestLoadImage: error",!1,e),r.onabort=el(nl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=el(nl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ga(t){this.l=t.fc||null,this.j=t.ob||!1}Be(ga,cm);ga.prototype.g=function(){return new kc(this.l,this.j)};ga.prototype.i=function(t){return function(){return t}}({});function kc(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(kc,Ve);var mm=0;b=kc.prototype;b.open=function(t,e){if(this.readyState!=mm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Uo(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=mm};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Uo(this)),this.g&&(this.readyState=3,Uo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pk(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pk(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?va(this):Uo(this),this.readyState==3&&pk(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,va(this))};b.Ya=function(t){this.g&&(this.response=t,va(this))};b.ka=function(){this.g&&va(this)};function va(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Uo(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Uo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KN=j.JSON.parse;function ke(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mk,this.L=this.M=!1}Be(ke,Ve);var mk="",QN=/^https?$/i,YN=["POST","PUT"];b=ke.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():of.g(),this.C=this.u?iy(this.u):iy(of),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ay(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=bE(YN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yk(this),0<this.B&&((this.L=XN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=um(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ay(this,s)}};function XN(t){return Zi&&pN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Zp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function ay(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gk(t),_c(t)}function gk(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),_c(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_c(this,!0)),ke.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?vk(this):this.kb())};b.kb=function(){vk(this)};function vk(t){if(t.h&&typeof Zp<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)um(t.La,0,t);else if(Ke(t,"readystatechange"),gn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(sk)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!QN.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",gk(t)}}finally{_c(t)}}}}function _c(t,e){if(t.g){yk(t);const n=t.g,r=t.C[0]?_u:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function yk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function gn(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KN(e)}};function ly(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wk(t){let e="";return nm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function gm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ek(t){this.Ga=0,this.i=[],this.j=new mc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Os("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Os("baseRetryDelayMs",5e3,t),this.hb=Os("retryDelaySeedMs",1e4,t),this.eb=Os("forwardChannelMaxRetries",2,t),this.xa=Os("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new uk(t&&t.concurrentRequestLimit),this.Ja=new WN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}b=Ek.prototype;b.qa=8;b.H=1;function vm(t){if(kk(t),t.H==3){var e=t.W++,n=In(t.G);fe(n,"SID",t.J),fe(n,"RID",e),fe(n,"TYPE","terminate"),ya(t,n),e=new pa(t,t.j,e,void 0),e.L=2,e.v=Ec(In(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=Nk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ma(e)}xk(t)}function Tc(t){t.g&&(wm(t),t.g.cancel(),t.g=null)}function kk(t){Tc(t),t.u&&(j.clearTimeout(t.u),t.u=null),Au(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Sc(t){ck(t.h)||t.m||(t.m=!0,jE(t.Na,t),t.C=0)}function JN(t,e){return hk(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=da(rt(t.Na,t,e),Ck(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new pa(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=LE(s),ME(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_k(this,i,e),n=In(this.G),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),ya(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wk(s)))+"&"+e:this.o&&gm(n,this.o,s)),fm(this.h,i),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),i.ba=!0,lf(i,n,null)):lf(i,n,e),this.H=2}}else this.H==3&&(t?uy(this,t):this.i.length==0||ck(this.h)||uy(this))};function uy(t,e){var n;e?n=e.m:n=t.W++;const r=In(t.G);fe(r,"SID",t.J),fe(r,"RID",n),fe(r,"AID",t.V),ya(t,r),t.o&&t.s&&gm(r,t.o,t.s),n=new pa(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=_k(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fm(t.h,n),lf(n,r,e)}function ya(t,e){t.ma&&nm(t.ma,function(n,r){fe(e,r,n)}),t.l&&ik({},function(n,r){fe(e,r,n)})}function _k(t,e,n){n=Math.min(t.i.length,n);var r=t.l?rt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{qN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function Tk(t){t.g||t.u||(t.ba=1,jE(t.Ma,t),t.A=0)}function ym(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=da(rt(t.Ma,t),Ck(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,Sk(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=da(rt(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ct(10),Tc(this),Sk(this))};function wm(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Sk(t){t.g=new pa(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.J),fe(e,"CI",t.M?"0":"1"),fe(e,"AID",t.V),fe(e,"TYPE","xmlhttp"),ya(t,e),t.o&&t.s&&gm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ec(In(e)),n.s=null,n.S=!0,ek(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Tc(this),ym(this),ct(19))};function Au(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Ik(t,e){var n=null;if(t.g==e){Au(t),wm(t),t.g=null;var r=2}else if(cf(t.h,e))n=e.F,dk(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=gc(),Ke(r,new YE(r,n)),Sc(t)}else Tk(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&JN(t,e)||r==2&&ym(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Mr(t,5);break;case 4:Mr(t,10);break;case 3:Mr(t,6);break;default:Mr(t,2)}}}function Ck(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Mr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=rt(t.pb,t);n||(n=new jr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Cu(n,"https"),Ec(n)),GN(n.toString(),r)}else ct(2);t.H=0,t.l&&t.l.za(e),xk(t),kk(t)}b.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function xk(t){if(t.H=0,t.pa=[],t.l){const e=fk(t.h);(e.length!=0||t.i.length!=0)&&(Jv(t.pa,e),Jv(t.pa,t.i),t.h.i.length=0,em(t.i),t.i.length=0),t.l.ya()}}function Ak(t,e,n){var r=n instanceof jr?In(n):new jr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xu(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new jr(null,void 0);r&&Cu(s,r),e&&(s.g=e),i&&xu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.qa),ya(t,r),r}function Nk(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new ga({ob:!0})):new ke(t.va),e.Oa(t.I),e}function bk(){}b=bk.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.Va=function(){};function Nu(){if(Zi&&!(10<=Number(mN)))throw Error("Environmental error: no available transport.")}Nu.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){Ve.call(this),this.g=new Ek(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Tu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}Be(Ct,Ve);Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ak(t,null,t.Y),Sc(t)};Ct.prototype.close=function(){vm(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=am(t),t=n);e.i.push(new jN(e.fb++,t)),e.H==3&&Sc(e)};Ct.prototype.N=function(){this.g.l=null,delete this.j,vm(this.g),delete this.g,Ct.$.N.call(this)};function Rk(t){hm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Rk,hm);function Pk(){dm.call(this),this.status=1}Be(Pk,dm);function gs(t){this.g=t}Be(gs,bk);gs.prototype.Ba=function(){Ke(this.g,"a")};gs.prototype.Aa=function(t){Ke(this.g,new Rk(t))};gs.prototype.za=function(t){Ke(this.g,new Pk)};gs.prototype.ya=function(){Ke(this.g,"b")};function ZN(){this.blockSize=-1}function Gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(Gt,ZN);Gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $h(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)$h(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){$h(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){$h(this,r),i=0;break}}this.h=i,this.i+=e};Gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var eb={};function Em(t){return-128<=t&&128>t?RE(eb,t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return zi;if(0>t)return qe(en(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=hf;return new ie(e,0)}function Dk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(Dk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),r=zi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=en(Math.pow(e,s)),r=r.R(s).add(en(o))):(r=r.R(n),r=r.add(en(o)))}return r}var hf=4294967296,zi=Em(0),df=Em(1),cy=Em(16777216);b=ie.prototype;b.ea=function(){if(Pt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:hf+r)*e,e*=hf}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(Pt(this))return"-"+qe(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,r="";;){var i=Ru(n,e).g;n=bu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}b.X=function(t){return t=bu(this,t),Pt(t)?-1:vn(t)?0:1};function qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(df)}b.abs=function(){return Pt(this)?qe(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function bu(t,e){return t.add(qe(e))}b.R=function(t){if(vn(this)||vn(t))return zi;if(Pt(this))return Pt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(Pt(t))return qe(this.R(qe(t)));if(0>this.X(cy)&&0>t.X(cy))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,rl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,rl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,rl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,rl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function rl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ls(t,e){this.g=t,this.h=e}function Ru(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Ls(zi,zi);if(Pt(t))return e=Ru(qe(t),e),new Ls(qe(e.g),qe(e.h));if(Pt(e))return e=Ru(t,qe(e)),new Ls(qe(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=df,r=e;0>=r.X(t);)n=hy(n),r=hy(r);var i=fi(n,1),s=fi(r,1);for(r=fi(r,2),n=fi(n,2);!vn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=fi(r,1),n=fi(n,1)}return e=bu(t,i.R(e)),new Ls(i,e)}for(i=zi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=en(n),o=s.R(e);Pt(o)||0<o.X(t);)n-=r,s=en(n),o=s.R(e);vn(s)&&(s=df),i=i.add(s),t=bu(t,o)}return new Ls(i,t)}b.gb=function(t){return Ru(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function hy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function fi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Nu.prototype.createWebChannel=Nu.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;vc.NO_ERROR=0;vc.TIMEOUT=8;vc.HTTP_ERROR=6;XE.COMPLETE="complete";JE.EventType=fa;fa.OPEN="a";fa.CLOSE="b";fa.ERROR="c";fa.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;Gt.prototype.digest=Gt.prototype.l;Gt.prototype.reset=Gt.prototype.reset;Gt.prototype.update=Gt.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=en;ie.fromString=Dk;var tb=function(){return new Nu},nb=function(){return gc()},Fh=vc,rb=XE,ib=oi,dy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sb=ga,il=JE,ob=ke,ab=Gt,Vi=ie;const fy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new zp("@firebase/firestore");function py(){return Jr.logLevel}function F(t,...e){if(Jr.logLevel<=ee.DEBUG){const n=e.map(km);Jr.debug(`Firestore (${vs}): ${t}`,...n)}}function Cn(t,...e){if(Jr.logLevel<=ee.ERROR){const n=e.map(km);Jr.error(`Firestore (${vs}): ${t}`,...n)}}function es(t,...e){if(Jr.logLevel<=ee.WARN){const n=e.map(km);Jr.warn(`Firestore (${vs}): ${t}`,...n)}}function km(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function he(t,e){t||B()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cb{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Ok(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Ze(e)}}class hb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class db{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.T=n.token,new fb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new De(0,0))}static max(){return new H(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends zo{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends zo{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(le.fromString(e))}static fromName(e){return new z(le.fromString(e).popFirst(5))}static empty(){return new z(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new le(e.slice()))}}function vb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new fr(i,z.empty(),e)}function yb(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(H.min(),z.empty(),-1)}static max(){return new fr(H.max(),z.empty(),-1)}}function wb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Eb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}_m.ct=-1;function Ic(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function _b(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gy(this.data.getIterator())}getIteratorFrom(e){return new gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new _t([])}unionWith(e){let n=new st(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $k("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(he(!!t),typeof t=="string"){let e=0;const n=Tb.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sm(t){const e=t.mapValue.fields.__previous_value__;return Tm(e)?Sm(e):e}function Vo(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tm(t)?4:Ib(t)?9007199254740991:10:B()}function ln(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=pr(r.timestampValue),o=pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ie(r.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(r.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ie(r.integerValue)===Ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ie(r.doubleValue),o=Ie(i.doubleValue);return s===o?Pu(s)===Pu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(my(s)!==my(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ln(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function jo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ie(i.integerValue||i.doubleValue),a=Ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(Vo(t),Vo(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=te(o[l],a[l]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=te(Ie(i.latitude),Ie(s.latitude));return o!==0?o:te(Ie(i.longitude),Ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ns(o[l],a[l]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ol.mapValue&&s===ol.mapValue)return 0;if(i===ol.mapValue)return 1;if(s===ol.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=te(a[c],u[c]);if(h!==0)return h;const d=ns(o[a[c]],l[u[c]]);if(d!==0)return d}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=pr(t),r=pr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function rs(t){return ff(t)}function ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ff(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ff(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function yy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pf(t){return!!t&&"integerValue"in t}function Im(t){return!!t&&"arrayValue"in t}function wy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=io(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ai(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(io(this.value))}}function Fk(t){const e=[];return ai(t.fields,(n,r)=>{const i=new nt([n]);if(Ml(r)){const s=Fk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,H.min(),H.min(),H.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,H.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,H.min(),H.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,H.min(),H.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{}class Ae extends Uk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ab(e,n,r):n==="array-contains"?new Rb(e,r):n==="in"?new Pb(e,r):n==="not-in"?new Db(e,r):n==="array-contains-any"?new Ob(e,r):new Ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Nb(e,r):new bb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kt extends Uk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Kt(e,n)}matches(e){return zk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zk(t){return t.op==="and"}function Vk(t){return xb(t)&&zk(t)}function xb(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function mf(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(Vk(t))return t.filters.map(e=>mf(e)).join(",");{const e=t.filters.map(n=>mf(n)).join(",");return`${t.op}(${e})`}}function Bk(t,e){return t instanceof Ae?function(n,r){return r instanceof Ae&&n.op===r.op&&n.field.isEqual(r.field)&&ln(n.value,r.value)}(t,e):t instanceof Kt?function(n,r){return r instanceof Kt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Bk(s,r.filters[o]),!0):!1}(t,e):void B()}function jk(t){return t instanceof Ae?function(e){return`${e.field.canonicalString()} ${e.op} ${rs(e.value)}`}(t):t instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(jk).join(" ,")+"}"}(t):"Filter"}class Ab extends Ae{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class Nb extends Ae{constructor(e,n){super(e,"in",n),this.keys=Hk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bb extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=Hk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class Rb extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Im(n)&&jo(n.arrayValue,this.value)}}class Pb extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class Db extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class Ob extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Im(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Ty(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lb(t,e,n,r,i,s,o)}function Cm(t){const e=W(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ft=n}return e.ft}function xm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_y(t.startAt,e.startAt)&&_y(t.endAt,e.endAt)}function gf(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Mb(t,e,n,r,i,s,o,a){return new ka(t,e,n,r,i,s,o,a)}function Wk(t){return new ka(t)}function Sy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Am(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gk(t){return t.collectionGroup!==null}function Bi(t){const e=W(t);if(e.dt===null){e.dt=[];const n=Am(e),r=qk(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new so(n)),e.dt.push(new so(nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new so(nt.keyField(),s))}}}return e.dt}function xn(t){const e=W(t);if(!e._t)if(e.limitType==="F")e._t=Ty(e.path,e.collectionGroup,Bi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Bi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new so(s.field,o))}const r=e.endAt?new Du(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Du(e.startAt.position,e.startAt.inclusive):null;e._t=Ty(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function vf(t,e){e.getFirstInequalityField(),Am(t);const n=t.filters.concat([e]);return new ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yf(t,e,n){return new ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return xm(xn(t),xn(e))&&t.limitType===e.limitType}function Kk(t){return`${Cm(xn(t))}|lt:${t.limitType}`}function wf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>jk(r)).join(", ")}]`),Ic(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),`Target(${n})`}(xn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Bi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ky(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Bi(n),r)||n.endAt&&!function(i,s,o){const a=ky(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Bi(n),r))}(t,e)}function $b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qk(t){return(e,n)=>{let r=!1;for(const i of Bi(t)){const s=Fb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fb(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ns(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Mk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new ye(z.comparator);function An(){return Ub}const Yk=new ye(z.comparator);function Hs(...t){let e=Yk;for(const n of t)e=e.insert(n.key,n);return e}function Xk(t){let e=Yk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return oo()}function Jk(){return oo()}function oo(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const zb=new ye(z.comparator),Vb=new st(z.comparator);function Y(...t){let e=Vb;for(const n of t)e=e.add(n);return e}const Bb=new st(te);function jb(){return Bb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function e_(t){return{integerValue:""+t}}function Hb(t,e){return _b(e)?e_(e):Zk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this._=void 0}}function Wb(t,e,n){return t instanceof Ou?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Tm(i)&&(i=Sm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ho?n_(t,e):t instanceof Wo?r_(t,e):function(r,i){const s=t_(r,i),o=Iy(s)+Iy(r.wt);return pf(s)&&pf(r.wt)?e_(o):Zk(r.serializer,o)}(t,e)}function qb(t,e,n){return t instanceof Ho?n_(t,e):t instanceof Wo?r_(t,e):n}function t_(t,e){return t instanceof Lu?pf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ou extends Ac{}class Ho extends Ac{constructor(e){super(),this.elements=e}}function n_(t,e){const n=i_(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Ac{constructor(e){super(),this.elements=e}}function r_(t,e){let n=i_(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class Lu extends Ac{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Iy(t){return Ie(t.integerValue||t.doubleValue)}function i_(t){return Im(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ho&&r instanceof Ho||n instanceof Wo&&r instanceof Wo?ts(n.elements,r.elements,ln):n instanceof Lu&&r instanceof Lu?ln(n.wt,r.wt):n instanceof Ou&&r instanceof Ou}(t.transform,e.transform)}class Kb{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function s_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nm(t.key,Wt.none()):new _a(t.key,t.data,Wt.none());{const n=t.data,r=mt.empty();let i=new st(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new _t(i.toArray()),Wt.none())}}function Qb(t,e,n){t instanceof _a?function(r,i,s){const o=r.value.clone(),a=xy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(r,i,s){if(!$l(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(o_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof _a?function(i,s,o,a){if(!$l(i.precondition,s))return o;const l=i.value.clone(),u=Ay(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,s,o,a){if(!$l(i.precondition,s))return o;const l=Ay(i.fieldTransforms,a,s),u=s.data;return u.setAll(o_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return $l(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Yb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=t_(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ts(n,r,(i,s)=>Gb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _a extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function o_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xy(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qb(o,a,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Wb(s,o,e))}return r}class Nm extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xb extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Qb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=s_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Cy(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Cy(n,r))}}class bm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=zb;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,J;function tR(t){switch(t){default:return B();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function a_(t){if(t===void 0)return Cn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Se.OK:return S.OK;case Se.CANCELLED:return S.CANCELLED;case Se.UNKNOWN:return S.UNKNOWN;case Se.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Se.INTERNAL:return S.INTERNAL;case Se.UNAVAILABLE:return S.UNAVAILABLE;case Se.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Se.NOT_FOUND:return S.NOT_FOUND;case Se.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Se.ABORTED:return S.ABORTED;case Se.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Se.DATA_LOSS:return S.DATA_LOSS;default:return B()}}(J=Se||(Se={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return al}static getOrCreateInstance(){return al===null&&(al=new Rm),al}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let al=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Vi([4294967295,4294967295],0);function Ny(t){const e=nR().encode(t),n=new ab;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vi([n,r],0),new Vi([i,s],0)]}class Pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Vi.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Vi.fromNumber(r)));return i.compare(rR)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Ny(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Ny(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bc(H.min(),i,new ye(te),An(),Y())}}class Ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class l_{constructor(e,n){this.targetId=e,this.bt=n}}class u_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ry{constructor(){this.Vt=0,this.St=Dy(),this.Dt=lt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Y(),n=Y(),r=Y();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Ta(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Dy()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class iR{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=An(),this.jt=Py(),this.zt=new ye(te)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(gf(o))if(i===0){const a=new z(o.path);this.Jt(r,a,tt.newNoDocument(a,H.min()))}else he(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Rm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,g,y,E,m;const f={localCacheCount:c,existenceFilterCount:h.count},v=h.unchangedNames;return v&&(f.bloomFilter={applied:u===0,hashCount:(d=v==null?void 0:v.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(g=(p=v==null?void 0:v.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&y!==void 0?y:0,padding:(m=(E=v==null?void 0:v.bits)===null||E===void 0?void 0:E.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Zr(s).toUint8Array()}catch(c){if(c instanceof $k)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Pm(l,o,a)}catch(c){return es(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&gf(a.target)){const l=new z(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,tt.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Y();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new bc(e,n,this.zt,this.Qt,r);return this.Qt=An(),this.jt=Py(),this.zt=new ye(te),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Ry,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new st(te),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Ry),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Py(){return new ye(z.comparator)}function Dy(){return new ye(z.comparator)}const sR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aR=(()=>({and:"AND",or:"OR"}))();class lR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ef(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uR(t,e){return Mu(t,e.toTimestamp())}function an(t){return he(!!t),H.fromTimestamp(function(e){const n=pr(e);return new De(n.seconds,n.nanos)}(t))}function Dm(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function h_(t){const e=le.fromString(t);return he(m_(e)),e}function kf(t,e){return Dm(t.databaseId,e.path)}function Uh(t,e){const n=h_(e);if(n.get(1)!==t.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(d_(n))}function _f(t,e){return Dm(t.databaseId,e)}function cR(t){const e=h_(t);return e.length===4?le.emptyPath():d_(e)}function Tf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d_(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Oy(t,e,n){return{name:kf(t,e),fields:n.value.mapValue.fields}}function hR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(he(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:a_(l.code);return new M(u,l.message||"")}(o);n=new u_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):H.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Fl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?an(r.readTime):H.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eR(i,s),a=r.targetId;n=new l_(a,o)}}return n}function dR(t,e){let n;if(e instanceof _a)n={update:Oy(t,e.key,e.value)};else if(e instanceof Nm)n={delete:kf(t,e.key)};else if(e instanceof Ir)n={update:Oy(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof Xb))return B();n={verify:kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ou)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ho)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Wo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lu)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:uR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function fR(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?an(r.updateTime):an(i);return s.isEqual(H.min())&&(s=an(i)),new Kb(s,r.transformResults||[])}(n,e))):[]}function pR(t,e){return{documents:[_f(t,e.path)]}}function mR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_f(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_f(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return p_(Kt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:pi(c.field),direction:yR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ef(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function gR(t){let e=cR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=f_(c);return h instanceof Kt&&Vk(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new so(mi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ic(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Du(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Du(d,h)}(n.endAt)),Mb(e,i,o,s,a,"F",l,u)}function vR(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function f_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=mi(e.unaryFilter.field);return Ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=mi(e.unaryFilter.field);return Ae.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mi(e.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=mi(e.unaryFilter.field);return Ae.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return Ae.create(mi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Kt.create(e.compositeFilter.filters.map(n=>f_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function yR(t){return sR[t]}function wR(t){return oR[t]}function ER(t){return aR[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return nt.fromServerFormat(t.fieldPath)}function p_(t){return t instanceof Ae?function(e){if(e.op==="=="){if(Ey(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NAN"}};if(wy(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ey(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NAN"}};if(wy(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(e.field),op:wR(e.op),value:e.value}}}(t):t instanceof Kt?function(e){const n=e.getFilters().map(r=>p_(r));return n.length===1?n[0]:{compositeFilter:{op:ER(e.op),filters:n}}}(t):B()}function kR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function m_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,i,s=H.min(),o=H.min(),a=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.le=e}}function TR(t){const e=gR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.sn=new IR}addToCollectionParentIndex(e,n){return this.sn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(fr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class IR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,_t.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=oo(),a=oo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ir)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ao(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new xR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new ye((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||_t.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Jk();c.forEach(d=>{if(!s.has(d)){const p=s_(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve($r());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:Xk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Hs();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new ka(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,tt.newInvalidDocument(u)))});let o=Hs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ao(u.mutation,l,_t.empty(),De.now()),xc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return C.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:an(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:TR(r.bundledQuery),readTime:an(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.overlays=new ye(z.comparator),this.hs=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zb(n,r));let s=this.hs.get(n);s===void 0&&(s=Y(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.ls=new st($e.fs),this.ds=new st($e._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new $e(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new $e(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new z(new le([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new z(new le([])),r=new $e(n,e),i=new $e(n,e+1);let s=Y();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return z.comparator(e.key,n.key)||te(e.Es,n.Es)}static _s(e,n){return te(e.Es,n.Es)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new st($e.fs)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(te);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),C.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new $e(new z(s),0);let a=new st(te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),C.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new $e(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.Ss=e,this.docs=new ye(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wb(yb(c),r)<=0||(i.has(c.key)||xc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Ds(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DR(this)}getSize(e){return C.resolve(this.size)}}class DR extends CR{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.persistence=e,this.Cs=new ys(n=>Cm(n),xm),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Om,this.targetCount=0,this.ks=is.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),C.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new is(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.$n(n),C.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.Ms={},this.overlays={},this.Os=new _m(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new OR(this),this.indexManager=new SR,this.remoteDocumentCache=function(r){return new PR(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new _R(n),this.Ls=new NR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new RR(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new MR(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return C.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class MR extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class Lm{constructor(e){this.persistence=e,this.Gs=new Om,this.Qs=null}static js(e){return new Lm(e)}get zs(){if(this.Qs)return this.Qs;throw B()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.zs,r=>{const i=z.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return C.or([()=>C.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Sy(n))return C.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yf(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,yf(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return Sy(n)||i.isEqual(H.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(py()<=ee.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wf(n)),this.zi(e,o,n,vb(i,-1)))})}Qi(e,n){let r=new st(Qk(e));return n.forEach((i,s)=>{xc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return py()<=ee.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",wf(n)),this.qi.getDocumentsMatchingQuery(e,n,fr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ye(te),this.Ji=new ys(s=>Cm(s),xm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function UR(t,e,n,r){return new FR(t,e,n,r)}async function g_(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function zR(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=l.docVersions.get(p);he(y!==null),g.version.compareTo(y)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function v_(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=W(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=An(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(BR(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(H.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function BR(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function jR(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HR(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Sf(t,e,n){const r=W(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ea(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Ly(t,e,n){const r=W(t);let i=H.min(),s=Y();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=W(a),h=c.Ji.get(u);return h!==void 0?C.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:Y())).next(a=>(WR(r,$b(e),a),{documents:a,sr:s})))}function WR(t,e,n){let r=t.Yi.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class My{constructor(){this.activeTargetIds=jb()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.Wr=new My,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new My,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;function zh(){return ll===null?ll=268435456+Math.round(2147483648*Math.random()):ll++,"0x"+ll.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class YR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=zh(),a=this.Io(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw es("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=KR[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=zh();return new Promise((o,a)=>{const l=new ob;l.setWithCredentials(!0),l.listenOnce(rb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fh.NO_ERROR:const c=l.getResponseJson();F(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Fh.TIMEOUT:F(Je,`RPC '${e}' ${s} timed out`),a(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Fh.HTTP_ERROR:const h=l.getStatus();if(F(Je,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(E)>=0?E:S.UNKNOWN}(p.status);a(new M(g,p.message))}else a(new M(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(S.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{F(Je,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Je,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=zh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tb(),a=nb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new sb({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(Je,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new QR({io:y=>{d?F(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(F(Je,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),F(Je,`RPC '${e}' stream ${i} sending:`,y),c.send(y))},ro:()=>c.close()}),g=(y,E,m)=>{y.listen(E,f=>{try{m(f)}catch(v){setTimeout(()=>{throw v},0)}})};return g(c,il.EventType.OPEN,()=>{d||F(Je,`RPC '${e}' stream ${i} transport opened.`)}),g(c,il.EventType.CLOSE,()=>{d||(d=!0,F(Je,`RPC '${e}' stream ${i} transport closed`),p.fo())}),g(c,il.EventType.ERROR,y=>{d||(d=!0,es(Je,`RPC '${e}' stream ${i} transport errored:`,y),p.fo(new M(S.UNAVAILABLE,"The operation could not be completed")))}),g(c,il.EventType.MESSAGE,y=>{var E;if(!d){const m=y.data[0];he(!!m);const f=m,v=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(v){F(Je,`RPC '${e}' stream ${i} received error:`,v);const k=v.status;let T=function(A){const R=Se[A];if(R!==void 0)return a_(R)}(k),x=v.message;T===void 0&&(T=S.INTERNAL,x="Unknown error status: "+k+" with message "+v.message),d=!0,p.fo(new M(T,x)),c.close()}else F(Je,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),g(a,ib.STAT_EVENT,y=>{y.stat===dy.PROXY?F(Je,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===dy.NOPROXY&&F(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new lR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new y_(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new M(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XR extends w_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=hR(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?H.min():s.readTime?an(s.readTime):H.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Tf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=gf(a)?{documents:pR(i,a)}:{query:mR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=c_(i,s.resumeToken);const l=Ef(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(H.min())>0){o.readTime=Mu(i,s.snapshotVersion.toTimestamp());const l=Ef(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=vR(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Tf(this.serializer),n.removeTarget=e,this.zo(n)}}class JR extends w_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=fR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.uu(r,n)}return he(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Tf(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dR(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(S.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(S.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class eP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Cn(n),this.wu=!1):F("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{li(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=W(a);l.Au.add(4),await Sa(l),l.Pu.set("Unknown"),l.Au.delete(4),await Pc(l)}(this))})}),this.Pu=new eP(r,i)}}async function Pc(t){if(li(t))for(const e of t.Ru)await e(!0)}async function Sa(t){for(const e of t.Ru)await e(!1)}function E_(t,e){const n=W(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Um(n)?Fm(n):ws(n).Uo()&&$m(n,e))}function k_(t,e){const n=W(t),r=ws(n);n.Eu.delete(e),r.Uo()&&__(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():li(n)&&n.Pu.set("Unknown"))}function $m(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).nu(e)}function __(t,e){t.bu.Lt(e),ws(t).su(e)}function Fm(t){t.bu=new iR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.Pu.mu()}function Um(t){return li(t)&&!ws(t).qo()&&t.Eu.size>0}function li(t){return W(t).Au.size===0}function T_(t){t.bu=void 0}async function nP(t){t.Eu.forEach((e,n)=>{$m(t,e)})}async function rP(t,e){T_(t),Um(t)?(t.Pu.pu(e),Fm(t)):t.Pu.set("Unknown")}async function iP(t,e,n){if(t.Pu.set("Online"),e instanceof u_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof Fl?t.bu.Wt(e):e instanceof l_?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(H.min()))try{const r=await v_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),__(i,a);const c=new Kn(u.target,a,l,u.sequenceNumber);$m(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!Ea(e))throw e;t.Au.add(1),await Sa(t),t.Pu.set("Offline"),n||(n=()=>v_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Pc(t)})}function S_(t,e){return e().catch(n=>$u(t,n,e))}async function Dc(t){const e=W(t),n=mr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;sP(e);)try{const i=await jR(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,oP(e,i)}catch(i){await $u(e,i)}I_(e)&&C_(e)}function sP(t){return li(t)&&t.Tu.length<10}function oP(t,e){t.Tu.push(e);const n=mr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function I_(t){return li(t)&&!mr(t).qo()&&t.Tu.length>0}function C_(t){mr(t).start()}async function aP(t){mr(t).au()}async function lP(t){const e=mr(t);for(const n of t.Tu)e.ou(n.mutations)}async function uP(t,e,n){const r=t.Tu.shift(),i=bm.from(r,e,n);await S_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dc(t)}async function cP(t,e){e&&mr(t).ru&&await async function(n,r){if(i=r.code,tR(i)&&i!==S.ABORTED){const s=n.Tu.shift();mr(n).Go(),await S_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Dc(n)}var i}(t,e),I_(t)&&C_(t)}async function Fy(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=li(n);n.Au.add(3),await Sa(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Pc(n)}async function hP(t,e){const n=W(t);e?(n.Au.delete(2),await Pc(n)):e||(n.Au.add(2),await Sa(n),n.Pu.set("Unknown"))}function ws(t){return t.Vu||(t.Vu=function(e,n,r){const i=W(e);return i.lu(),new XR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:nP.bind(null,t),co:rP.bind(null,t),eu:iP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Um(t)?Fm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),T_(t))})),t.Vu}function mr(t){return t.Su||(t.Su=function(e,n,r){const i=W(e);return i.lu(),new JR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:aP.bind(null,t),co:cP.bind(null,t),cu:lP.bind(null,t),uu:uP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Dc(t)):(await t.Su.stop(),t.Tu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vm(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),Ea(t))return new M(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.Du=new ye(z.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):B():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.xu=void 0,this.listeners=[]}}class fP{constructor(){this.queries=new ys(e=>Kk(e),Cc),this.onlineState="Unknown",this.Nu=new Set}}async function pP(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new dP),i)try{s.xu=await n.onListen(r)}catch(o){const a=Vm(o,`Initialization of query '${wf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Bm(n)}async function mP(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gP(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Bm(n)}function vP(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bm(t){t.Nu.forEach(e=>{e.next()})}class yP{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class wP{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Y(),this.mutatedKeys=Y(),this.Zu=Qk(e),this.tc=new ji(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Uy,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=xc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(r.track({type:3,doc:p}),E=!0):this.ic(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new ss(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Uy,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Y(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new A_(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new x_(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Y();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return ss.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class EP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kP{constructor(e){this.key=e,this.lc=!1}}class _P{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ys(a=>Kk(a),Cc),this._c=new Map,this.wc=new Set,this.mc=new ye(z.comparator),this.gc=new Map,this.yc=new Om,this.Ic={},this.Tc=new Map,this.Ec=is.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function TP(t,e){const n=DP(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await HR(n.localStore,xn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&E_(n.remoteStore,o)}return i}async function SP(t,e,n,r,i){t.Rc=(h,d,p)=>async function(g,y,E,m){let f=y.view.nc(E);f.ji&&(f=await Ly(g.localStore,y.query,!1).then(({documents:T})=>y.view.nc(T,f)));const v=m&&m.targetChanges.get(y.targetId),k=y.view.applyChanges(f,g.isPrimaryClient,v);return Vy(g,y.targetId,k.uc),k.snapshot}(t,h,d,p);const s=await Ly(t.localStore,e,!0),o=new wP(e,s.sr),a=o.nc(s.documents),l=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Vy(t,n,u.uc);const c=new EP(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function IP(t,e){const n=W(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Cc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),k_(n.remoteStore,r.targetId),If(n,r.targetId)}).catch(wa)):(If(n,r.targetId),await Sf(n.localStore,r.targetId,!0))}async function CP(t,e,n){const r=OP(t);try{const i=await function(s,o){const a=W(s),l=De.now(),u=o.reduce((d,p)=>d.add(p.key),Y());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=An(),g=Y();return a.Xi.getEntries(d,u).next(y=>{p=y,p.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{c=y;const E=[];for(const m of o){const f=Yb(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new Ir(m.key,f,Fk(f.value.mapValue),Wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Xk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ye(te)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ia(r,i.changes),await Dc(r.remoteStore)}catch(i){const s=Vm(i,"Failed to persist write");n.reject(s)}}async function N_(t,e){const n=W(t);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?he(o.lc):i.removedDocuments.size>0&&(he(o.lc),o.lc=!1))}),await Ia(n,r,e)}catch(r){await wa(r)}}function zy(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=W(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Bm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xP(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ye(z.comparator);o=o.insert(s,tt.newNoDocument(s,H.min()));const a=Y().add(s),l=new bc(H.min(),new Map,new ye(te),o,a);await N_(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),jm(r)}else await Sf(r.localStore,e,!1).then(()=>If(r,e,n)).catch(wa)}async function AP(t,e){const n=W(t),r=e.batch.batchId;try{const i=await zR(n.localStore,e);R_(n,r,null),b_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,i)}catch(i){await wa(i)}}async function NP(t,e,n){const r=W(t);try{const i=await function(s,o){const a=W(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(he(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);R_(r,e,n),b_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,i)}catch(i){await wa(i)}}function b_(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function R_(t,e,n){const r=W(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function If(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||P_(t,r)})}function P_(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(k_(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),jm(t))}function Vy(t,e,n){for(const r of n)r instanceof x_?(t.yc.addReference(r.key,e),bP(t,r)):r instanceof A_?(F("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||P_(t,r.key)):B()}function bP(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.wc.add(r),jm(t))}function jm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new z(le.fromString(e)),r=t.Ec.next();t.gc.set(r,new kP(n)),t.mc=t.mc.insert(n,r),E_(t.remoteStore,new Kn(xn(Wk(n.path)),r,"TargetPurposeLimboResolution",_m.ct))}}async function Ia(t,e,n){const r=W(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mm.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=W(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ea(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,g)}}}(r.localStore,s))}async function RP(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await g_(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new M(S.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.tr)}}function PP(t,e){const n=W(t),r=n.gc.get(e);if(r&&r.lc)return Y().add(r.key);{let i=Y();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function DP(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xP.bind(null,e),e.fc.eu=gP.bind(null,e.eventManager),e.fc.vc=vP.bind(null,e.eventManager),e}function OP(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,e),e}class By{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UR(this.persistence,new $R,e.initialUser,this.serializer)}createPersistence(e){return new LR(Lm.js,this.serializer)}createSharedClientState(e){return new qR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RP.bind(null,this.syncEngine),await hP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fP}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new YR(i));var i;return function(s,o,a,l){return new ZR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>zy(this.syncEngine,a,0),o=$y.D()?new $y:new GR,new tP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new _P(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);F("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Sa(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=Lk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await g_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UP(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Fy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Fy(e.remoteStore,s)),t._onlineComponents=e}function FP(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function UP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FP(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Bh(t,new By)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Bh(t,new By);return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await jy(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await jy(t,new LP))),t._onlineComponents}function zP(t){return D_(t).then(e=>e.syncEngine)}async function VP(t){const e=await D_(t),n=e.eventManager;return n.onListen=TP.bind(null,e.syncEngine),n.onUnlisten=IP.bind(null,e.syncEngine),n}function BP(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new MP({next:h=>{s.enqueueAndForget(()=>mP(i,c)),h.fromCache&&a.source==="server"?l.reject(new M(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new yP(o,u,{includeMetadataChanges:!0,Uu:!0});return pP(i,c)}(await VP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e,n){if(!n)throw new M(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jP(t,e,n,r){if(e===!0&&r===!0)throw new M(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wy(t){if(!z.isDocumentKey(t))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qy(t){if(z.isDocumentKey(t))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function ti(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new M(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lb;switch(n.type){case"firstParty":return new db(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hy.get(e);n&&(F("ComponentProvider","Removing Datastore"),Hy.delete(e),n.terminate())}(this),Promise.resolve()}}function HP(t,e,n,r={}){var i;const s=(t=ti(t,Lc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&es("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ze.MOCK_USER;else{o=N2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ze(l)}t._authCredentials=new ub(new Ok(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class ur extends Es{constructor(e,n,r){super(e,n,Wk(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new z(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function ui(t,e,...n){if(t=ze(t),O_("collection","path",e),t instanceof Lc){const r=le.fromString(e,...n);return qy(r),new ur(t,null,r)}{if(!(t instanceof St||t instanceof ur))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return qy(r),new ur(t.firestore,null,r)}}function WP(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Lk.A()),O_("doc","path",e),t instanceof Lc){const r=le.fromString(e,...n);return Wy(r),new St(t,null,new z(r))}{if(!(t instanceof St||t instanceof ur))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Wy(r),new St(t.firestore,t instanceof ur?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new y_(this,"async_queue_retry"),this.Yc=()=>{const n=Vh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new lr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ea(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=zm.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&B()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Ca extends Lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M_(this),this._firestoreClient.terminate()}}function GP(t,e){const n=typeof t=="object"?t:Gw(),r=typeof t=="string"?t:e||"(default)",i=Bp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=C2("firestore");s&&HP(i,...s)}return i}function L_(t){return t._firestoreClient||M_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function M_(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Sb(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $P(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(lt.fromBase64String(e))}catch(n){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=/^__.*__$/;class QP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}class $_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function F_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class qm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new qm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Fu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(F_(this.ua)&&KP.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class YP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}ga(e,n,r,i=!1){return new qm({ua:e,methodName:n,ma:r,path:nt.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gm(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new YP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XP(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Km("Data must be an object, but it was:",o,r);const a=U_(r,o);let l,u;if(s.merge)l=new _t(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Cf(e,h,n);if(!o.contains(d))throw new M(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);V_(c,d)||c.push(d)}l=new _t(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new QP(new mt(a),l,u)}class $c extends Hm{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function JP(t,e,n,r){const i=t.ga(1,e,n);Km("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();ai(r,(l,u)=>{const c=Qm(e,l,n);u=ze(u);const h=i.fa(c);if(u instanceof $c)s.push(c);else{const d=xa(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new _t(s);return new $_(o,a,i.fieldTransforms)}function ZP(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Cf(e,r,n)],l=[i];if(s.length%2!=0)throw new M(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Cf(e,s[d])),l.push(s[d+1]);const u=[],c=mt.empty();for(let d=a.length-1;d>=0;--d)if(!V_(u,a[d])){const p=a[d];let g=l[d];g=ze(g);const y=o.fa(p);if(g instanceof $c)u.push(p);else{const E=xa(g,y);E!=null&&(u.push(p),c.set(p,E))}}const h=new _t(u);return new $_(c,h,o.fieldTransforms)}function eD(t,e,n,r=!1){return xa(n,t.ga(r?4:3,e))}function xa(t,e){if(z_(t=ze(t)))return Km("Unsupported field value:",e,t),U_(t,e);if(t instanceof Hm)return function(n,r){if(!F_(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xa(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hb(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Mu(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mu(r.serializer,i)}}if(n instanceof Wm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:c_(r.serializer,n._byteString)};if(n instanceof St){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Oc(n)}`)}(t,e)}function U_(t,e){const n={};return Mk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(t,(r,i)=>{const s=xa(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Wm||t instanceof os||t instanceof St||t instanceof Hm)}function Km(t,e,n){if(!z_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Oc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Cf(t,e,n){if((e=ze(e))instanceof Mc)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const tD=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,n){if(e.search(tD)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mc(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(S.INVALID_ARGUMENT,a+t+l)}function V_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nD extends B_{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?Qm(t,e):e instanceof Mc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xm{}class iD extends Xm{}function ks(t,e,...n){let r=[];e instanceof Xm&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Jm).length,o=i.filter(a=>a instanceof Fc).length;if(s>1||s>0&&o>0)throw new M(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Fc extends iD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fc(e,n,r)}_apply(e){const n=this._parse(e);return j_(e._query,n),new Es(e.firestore,e.converter,vf(e._query,n))}_parse(e){const n=Gm(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Qy(c,u);const d=[];for(const p of c)d.push(Ky(a,i,p));h={arrayValue:{values:d}}}else h=Ky(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qy(c,u),h=eD(o,s,c,u==="in"||u==="not-in");return Ae.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qt(t,e,n){const r=e,i=Ym("where",t);return Fc._create(i,r,n)}class Jm extends Xm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)j_(s,a),s=vf(s,a)}(e._query,n),new Es(e.firestore,e.converter,vf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ky(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new M(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gk(e)&&n.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!z.isDocumentKey(r))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yy(t,new z(r))}if(n instanceof St)return yy(t,n._key);throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function Qy(t,e){if(!Array.isArray(t)||t.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function j_(t,e){if(e.isInequality()){const r=Am(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=qk(t);s!==null&&sD(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sD(t,e,n){if(!n.isEqual(e))throw new M(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class oD{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ai(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wm(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);he(m_(r));const i=new Bo(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lD extends B_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends lD{data(e={}){return super.data(e)}}class uD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ul(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new ul(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ul(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ul(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:cD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class hD extends oD{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function _s(t){t=ti(t,Es);const e=ti(t.firestore,Ca),n=L_(e),r=new hD(e);return rD(t._query),BP(n,t._query).then(i=>new uD(e,r,t,i))}function Uc(t,e,n,...r){t=ti(t,St);const i=ti(t.firestore,Ca),s=Gm(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof Mc?ZP(s,"updateDoc",t._key,e,n,r):JP(s,"updateDoc",t._key,e),Zm(i,[o.toMutation(t._key,Wt.exists(!0))])}function dD(t){return Zm(ti(t.firestore,Ca),[new Nm(t._key,Wt.none())])}function fD(t,e){const n=ti(t.firestore,Ca),r=WP(t),i=aD(t.converter,e);return Zm(n,[XP(Gm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function Zm(t,e){return function(n,r){const i=new lr;return n.asyncQueue.enqueueAndForget(async()=>CP(await zP(n),r,i)),i.promise}(L_(t),e)}(function(t,e=!0){(function(n){vs=n})(hs),Ji(new Qr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ca(new cb(n.getProvider("auth-internal")),new pb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ar(fy,"3.11.0",t),ar(fy,"3.11.0","esm2017")})();const pD={apiKey:"AIzaSyAxzYdcy-I9ov79SwnIPg9zNaDnkxvIirM",authDomain:"todocheo-ef450.firebaseapp.com",projectId:"todocheo-ef450",storageBucket:"todocheo-ef450.appspot.com",messagingSenderId:"551284725708",appId:"1:551284725708:web:df138f770635a278bdaf69",measurementId:"G-L1FLC8N78G"},H_=qw(pD),Re=rN(H_),mD=new hn,ci=GP(H_),gD=()=>{const[t,e]=_.useState(""),[n,r]=_.useState(""),[i,s]=_.useState(new Date().toISOString().slice(0,10)),[o,a]=_.useState("task"),{allColors:l,allTodos:u=[],setAllTodos:c=()=>{},allTypes:h,setAllTypes:d,isLoggedIn:p}=_.useContext(pe)||{},g=async(E,m,f,v)=>{var x;const k={id:Fw(),task:E,completed:!1,isEditing:!1,taskorreminder:v,nType:m,user:((x=Re.currentUser)==null?void 0:x.email)||"",date:f,archived:!1},T=u?[...u,k]:[k];if(c(T),p)try{const A=ui(ci,"todos");await fD(A,k),console.log("sending to Firebase")}catch(A){console.log(A)}},y=E=>{E.preventDefault(),i||s(new Date().toISOString().slice(0,10)),!n&&h&&r(h[0].typeName),t&&(g(t,n,i,o),e(""),s(new Date().toISOString().slice(0,10)))};return _.useEffect(()=>{p||localStorage.setItem("todosLocal",JSON.stringify(u))},[u]),N("form",{className:"TodoForm",onSubmit:y,style:{background:l==null?void 0:l.formBackgroundColor},children:[N("div",{className:"TodoForm__Task",children:[w("input",{type:"text",value:t,placeholder:"Add a new task",className:"TodoForm__Task__input",onChange:E=>e(E.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:l==null?void 0:l.buttonIcons,color:l==null?void 0:l.buttonText},children:"Add Task"})]}),N("div",{className:"TodoForm__CatDate",children:[w("div",{className:"TodoForm__CatDate__category",children:w("select",{id:"type",name:"type",value:n,onChange:E=>r(E.target.value),...o==="reminder"&&{disabled:!0},children:h==null?void 0:h.map(E=>w("option",{value:E.typeName,children:E.typeName},`type-id ${E.id}`))})}),w("div",{className:"TodoForm__CatDate__category",children:N("select",{id:"taskOrReminder",name:"task-reminder",value:o,onChange:E=>a(E.target.value),children:[w("option",{value:"task",children:"Task"}),w("option",{value:"reminder",children:"Reminder"})]})}),w("div",{className:"TodoForm__CatDate__date",children:w("input",{type:"date",id:"startDate",name:"trip-start",value:i,onChange:E=>s(E.target.value),min:"2018-01-01",max:"2099-12-31"})})]})]})};function Yy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yy(Object(n),!0).forEach(function(r){Oe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Uu(t){return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uu(t)}function vD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yD(t,e,n){return e&&Xy(t.prototype,e),n&&Xy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eg(t,e){return ED(t)||_D(t,e)||W_(t,e)||SD()}function Aa(t){return wD(t)||kD(t)||W_(t)||TD()}function wD(t){if(Array.isArray(t))return xf(t)}function ED(t){if(Array.isArray(t))return t}function kD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _D(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function W_(t,e){if(t){if(typeof t=="string")return xf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xf(t,e)}}function xf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function TD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jy=function(){},tg={},q_={},G_=null,K_={mark:Jy,measure:Jy};try{typeof window<"u"&&(tg=window),typeof document<"u"&&(q_=document),typeof MutationObserver<"u"&&(G_=MutationObserver),typeof performance<"u"&&(K_=performance)}catch{}var ID=tg.navigator||{},Zy=ID.userAgent,e0=Zy===void 0?"":Zy,gr=tg,ce=q_,t0=G_,cl=K_;gr.document;var On=!!ce.documentElement&&!!ce.head&&typeof ce.addEventListener=="function"&&typeof ce.createElement=="function",Q_=~e0.indexOf("MSIE")||~e0.indexOf("Trident/"),hl,dl,fl,pl,ml,Nn="___FONT_AWESOME___",Af=16,Y_="fa",X_="svg-inline--fa",ni="data-fa-i2svg",Nf="data-fa-pseudo-element",CD="data-fa-pseudo-element-pending",ng="data-prefix",rg="data-icon",n0="fontawesome-i2svg",xD="async",AD=["HTML","HEAD","STYLE","SCRIPT"],J_=function(){try{return!0}catch{return!1}}(),ae="classic",Ee="sharp",ig=[ae,Ee];function Na(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ae]}})}var qo=Na((hl={},Oe(hl,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(hl,Ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),hl)),Go=Na((dl={},Oe(dl,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(dl,Ee,{solid:"fass",regular:"fasr",light:"fasl"}),dl)),Ko=Na((fl={},Oe(fl,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(fl,Ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),fl)),ND=Na((pl={},Oe(pl,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(pl,Ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),pl)),bD=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Z_="fa-layers-text",RD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,PD=Na((ml={},Oe(ml,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(ml,Ee,{900:"fass",400:"fasr",300:"fasl"}),ml)),eT=[1,2,3,4,5,6,7,8,9,10],DD=eT.concat([11,12,13,14,15,16,17,18,19,20]),OD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qo=new Set;Object.keys(Go[ae]).map(Qo.add.bind(Qo));Object.keys(Go[Ee]).map(Qo.add.bind(Qo));var LD=[].concat(ig,Aa(Qo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fr.GROUP,Fr.SWAP_OPACITY,Fr.PRIMARY,Fr.SECONDARY]).concat(eT.map(function(t){return"".concat(t,"x")})).concat(DD.map(function(t){return"w-".concat(t)})),lo=gr.FontAwesomeConfig||{};function MD(t){var e=ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $D(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ce&&typeof ce.querySelector=="function"){var FD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];FD.forEach(function(t){var e=eg(t,2),n=e[0],r=e[1],i=$D(MD(n));i!=null&&(lo[r]=i)})}var tT={styleDefault:"solid",familyDefault:"classic",cssPrefix:Y_,replacementClass:X_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lo.familyPrefix&&(lo.cssPrefix=lo.familyPrefix);var as=D(D({},tT),lo);as.autoReplaceSvg||(as.observeMutations=!1);var $={};Object.keys(tT).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){as[t]=n,uo.forEach(function(r){return r($)})},get:function(){return as[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){as.cssPrefix=e,uo.forEach(function(n){return n($)})},get:function(){return as.cssPrefix}});gr.FontAwesomeConfig=$;var uo=[];function UD(t){return uo.push(t),function(){uo.splice(uo.indexOf(t),1)}}var Fn=Af,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zD(t){if(!(!t||!On)){var e=ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ce.head.insertBefore(e,r),t}}var VD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yo(){for(var t=12,e="";t-- >0;)e+=VD[Math.random()*62|0];return e}function Ts(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sg(t){return t.classList?Ts(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function nT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(nT(t[n]),'" ')},"").trim()}function zc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function og(t){return t.size!==tn.size||t.x!==tn.x||t.y!==tn.y||t.rotate!==tn.rotate||t.flipX||t.flipY}function jD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function HD(t){var e=t.transform,n=t.width,r=n===void 0?Af:n,i=t.height,s=i===void 0?Af:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Q_?l+="translate(".concat(e.x/Fn-r/2,"em, ").concat(e.y/Fn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Fn,"em), calc(-50% + ").concat(e.y/Fn,"em)) "):l+="translate(".concat(e.x/Fn,"em, ").concat(e.y/Fn,"em) "),l+="scale(".concat(e.size/Fn*(e.flipX?-1:1),", ").concat(e.size/Fn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var WD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rT(){var t=Y_,e=X_,n=$.cssPrefix,r=$.replacementClass,i=WD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var r0=!1;function jh(){$.autoAddCss&&!r0&&(zD(rT()),r0=!0)}var qD={mixout:function(){return{dom:{css:rT,insertCss:jh}}},hooks:function(){return{beforeDOMElementCreation:function(){jh()},beforeI2svg:function(){jh()}}}},bn=gr||{};bn[Nn]||(bn[Nn]={});bn[Nn].styles||(bn[Nn].styles={});bn[Nn].hooks||(bn[Nn].hooks={});bn[Nn].shims||(bn[Nn].shims=[]);var Bt=bn[Nn],iT=[],GD=function t(){ce.removeEventListener("DOMContentLoaded",t),zu=1,iT.map(function(e){return e()})},zu=!1;On&&(zu=(ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ce.readyState),zu||ce.addEventListener("DOMContentLoaded",GD));function KD(t){On&&(zu?setTimeout(t,0):iT.push(t))}function ba(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?nT(t):"<".concat(e," ").concat(BD(r),">").concat(s.map(ba).join(""),"</").concat(e,">")}function i0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var QD=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Hh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?QD(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function YD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function bf(t){var e=YD(t);return e.length===1?e[0].toString(16):null}function XD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function s0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=s0(e);typeof Bt.hooks.addPack=="function"&&!i?Bt.hooks.addPack(t,s0(e)):Bt.styles[t]=D(D({},Bt.styles[t]||{}),s),t==="fas"&&Rf("fa",e)}var gl,vl,yl,Ni=Bt.styles,JD=Bt.shims,ZD=(gl={},Oe(gl,ae,Object.values(Ko[ae])),Oe(gl,Ee,Object.values(Ko[Ee])),gl),ag=null,sT={},oT={},aT={},lT={},uT={},eO=(vl={},Oe(vl,ae,Object.keys(qo[ae])),Oe(vl,Ee,Object.keys(qo[Ee])),vl);function tO(t){return~LD.indexOf(t)}function nO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!tO(i)?i:null}var cT=function(){var e=function(s){return Hh(Ni,function(o,a,l){return o[l]=Hh(a,s,{}),o},{})};sT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),oT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),uT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ni||$.autoFetchSvg,r=Hh(JD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});aT=r.names,lT=r.unicodes,ag=Vc($.styleDefault,{family:$.familyDefault})};UD(function(t){ag=Vc(t.styleDefault,{family:$.familyDefault})});cT();function lg(t,e){return(sT[t]||{})[e]}function rO(t,e){return(oT[t]||{})[e]}function Ur(t,e){return(uT[t]||{})[e]}function hT(t){return aT[t]||{prefix:null,iconName:null}}function iO(t){var e=lT[t],n=lg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vr(){return ag}var ug=function(){return{prefix:null,iconName:null,rest:[]}};function Vc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ae:n,i=qo[r][t],s=Go[r][t]||Go[r][i],o=t in Bt.styles?t:null;return s||o||null}var o0=(yl={},Oe(yl,ae,Object.keys(Ko[ae])),Oe(yl,Ee,Object.keys(Ko[Ee])),yl);function Bc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Oe(e,ae,"".concat($.cssPrefix,"-").concat(ae)),Oe(e,Ee,"".concat($.cssPrefix,"-").concat(Ee)),e),o=null,a=ae;(t.includes(s[ae])||t.some(function(u){return o0[ae].includes(u)}))&&(a=ae),(t.includes(s[Ee])||t.some(function(u){return o0[Ee].includes(u)}))&&(a=Ee);var l=t.reduce(function(u,c){var h=nO($.cssPrefix,c);if(Ni[c]?(c=ZD[a].includes(c)?ND[a][c]:c,o=c,u.prefix=c):eO[a].indexOf(c)>-1?(o=c,u.prefix=Vc(c,{family:a})):h?u.iconName=h:c!==$.replacementClass&&c!==s[ae]&&c!==s[Ee]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?hT(u.iconName):{},p=Ur(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ni.far&&Ni.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},ug());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ee&&(Ni.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ur(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vr()||"fas"),l}var sO=function(){function t(){vD(this,t),this.definitions={}}return yD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Rf(a,o[a]);var l=Ko[ae][a];l&&Rf(l,o[a]),cT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),a0=[],bi={},Hi={},oO=Object.keys(Hi);function aO(t,e){var n=e.mixoutsTo;return a0=t,bi={},Object.keys(Hi).forEach(function(r){oO.indexOf(r)===-1&&delete Hi[r]}),a0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Uu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){bi[o]||(bi[o]=[]),bi[o].push(s[o])})}r.provides&&r.provides(Hi)}),n}function Pf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=bi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ri(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=bi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Rn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Hi[t]?Hi[t].apply(null,e):void 0}function Df(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||vr();if(e)return e=Ur(n,e)||e,i0(dT.definitions,n,e)||i0(Bt.styles,n,e)}var dT=new sO,lO=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,ri("noAuto")},uO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return On?(ri("beforeI2svg",e),Rn("pseudoElements2svg",e),Rn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,KD(function(){hO({autoReplaceSvgRoot:n}),ri("watch",e)})}},cO={icon:function(e){if(e===null)return null;if(Uu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Vc(e[0]);return{prefix:r,iconName:Ur(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(bD))){var i=Bc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||vr(),iconName:Ur(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=vr();return{prefix:s,iconName:Ur(s,e)||e}}}},Nt={noAuto:lO,config:$,dom:uO,parse:cO,library:dT,findIconDefinition:Df,toHtml:ba},hO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ce:n;(Object.keys(Bt.styles).length>0||$.autoFetchSvg)&&On&&$.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function jc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ba(r)})}}),Object.defineProperty(t,"node",{get:function(){if(On){var r=ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function dO(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(og(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=zc(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function fO(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function cg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,p=d===void 0?!1:d,g=r.found?r:n,y=g.width,E=g.height,m=i==="fak",f=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(Q){return h.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(h.classes).join(" "),v={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:f,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},k=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};p&&(v.attributes[ni]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Yo())},children:[l]}),delete v.attributes.title);var T=D(D({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},k),h.styles)}),x=r.found&&n.found?Rn("generateAbstractMask",T)||{children:[],attributes:{}}:Rn("generateAbstractIcon",T)||{children:[],attributes:{}},A=x.children,R=x.attributes;return T.children=A,T.attributes=R,a?fO(T):dO(T)}function l0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ni]="");var c=D({},o.styles);og(i)&&(c.transform=HD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=zc(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function pO(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=zc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wh=Bt.styles;function Of(t){var e=t[0],n=t[1],r=t.slice(4),i=eg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Fr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Fr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var mO={found:!1,width:512,height:512};function gO(t,e){!J_&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lf(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=vr()),new Promise(function(r,i){if(Rn("missingIconAbstract"),n==="fa"){var s=hT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Wh[e]&&Wh[e][t]){var o=Wh[e][t];return r(Of(o))}gO(t,e),r(D(D({},mO),{},{icon:$.showMissingIcons&&t?Rn("missingIconAbstract")||{}:{}}))})}var u0=function(){},Mf=$.measurePerformance&&cl&&cl.mark&&cl.measure?cl:{mark:u0,measure:u0},qs='FA "6.4.0"',vO=function(e){return Mf.mark("".concat(qs," ").concat(e," begins")),function(){return fT(e)}},fT=function(e){Mf.mark("".concat(qs," ").concat(e," ends")),Mf.measure("".concat(qs," ").concat(e),"".concat(qs," ").concat(e," begins"),"".concat(qs," ").concat(e," ends"))},hg={begin:vO,end:fT},zl=function(){};function c0(t){var e=t.getAttribute?t.getAttribute(ni):null;return typeof e=="string"}function yO(t){var e=t.getAttribute?t.getAttribute(ng):null,n=t.getAttribute?t.getAttribute(rg):null;return e&&n}function wO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function EO(){if($.autoReplaceSvg===!0)return Vl.replace;var t=Vl[$.autoReplaceSvg];return t||Vl.replace}function kO(t){return ce.createElementNS("http://www.w3.org/2000/svg",t)}function _O(t){return ce.createElement(t)}function pT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?kO:_O:n;if(typeof t=="string")return ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(pT(o,{ceFn:r}))}),i}function TO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Vl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(pT(i),n)}),n.getAttribute(ni)===null&&$.keepOriginalSource){var r=ce.createComment(TO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~sg(n).indexOf($.replacementClass))return Vl.replace(e);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ba(a)}).join(`
`);n.setAttribute(ni,""),n.innerHTML=o}};function h0(t){t()}function mT(t,e){var n=typeof e=="function"?e:zl;if(t.length===0)n();else{var r=h0;$.mutateApproach===xD&&(r=gr.requestAnimationFrame||h0),r(function(){var i=EO(),s=hg.begin("mutate");t.map(i),s(),n()})}}var dg=!1;function gT(){dg=!0}function $f(){dg=!1}var Vu=null;function d0(t){if(t0&&$.observeMutations){var e=t.treeCallback,n=e===void 0?zl:e,r=t.nodeCallback,i=r===void 0?zl:r,s=t.pseudoElementsCallback,o=s===void 0?zl:s,a=t.observeMutationsRoot,l=a===void 0?ce:a;Vu=new t0(function(u){if(!dg){var c=vr();Ts(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!c0(h.addedNodes[0])&&($.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&$.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&c0(h.target)&&~OD.indexOf(h.attributeName))if(h.attributeName==="class"&&yO(h.target)){var d=Bc(sg(h.target)),p=d.prefix,g=d.iconName;h.target.setAttribute(ng,p||c),g&&h.target.setAttribute(rg,g)}else wO(h.target)&&i(h.target)})}}),On&&Vu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function SO(){Vu&&Vu.disconnect()}function IO(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function CO(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Bc(sg(t));return i.prefix||(i.prefix=vr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=rO(i.prefix,t.innerText)||lg(i.prefix,bf(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function xO(t){var e=Ts(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Yo()):(e["aria-hidden"]="true",e.focusable="false")),e}function AO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=CO(t),r=n.iconName,i=n.prefix,s=n.rest,o=xO(t),a=Pf("parseNodeAttributes",{},t),l=e.styleParser?IO(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var NO=Bt.styles;function vT(t){var e=$.autoReplaceSvg==="nest"?f0(t,{styleParser:!1}):f0(t);return~e.extra.classes.indexOf(Z_)?Rn("generateLayersText",t,e):Rn("generateSvgReplacementMutation",t,e)}var yr=new Set;ig.map(function(t){yr.add("fa-".concat(t))});Object.keys(qo[ae]).map(yr.add.bind(yr));Object.keys(qo[Ee]).map(yr.add.bind(yr));yr=Aa(yr);function p0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!On)return Promise.resolve();var n=ce.documentElement.classList,r=function(h){return n.add("".concat(n0,"-").concat(h))},i=function(h){return n.remove("".concat(n0,"-").concat(h))},s=$.autoFetchSvg?yr:ig.map(function(c){return"fa-".concat(c)}).concat(Object.keys(NO));s.includes("fa")||s.push("fa");var o=[".".concat(Z_,":not([").concat(ni,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ni,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ts(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=hg.begin("onTree"),u=a.reduce(function(c,h){try{var d=vT(h);d&&c.push(d)}catch(p){J_||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(d){mT(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),h(d)})})}function bO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vT(t).then(function(n){n&&mT([n],e)})}function RO(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Df(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Df(i||{})),t(r,D(D({},n),{},{mask:i}))}}var PO=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,d=h===void 0?null:h,p=n.titleId,g=p===void 0?null:p,y=n.classes,E=y===void 0?[]:y,m=n.attributes,f=m===void 0?{}:m,v=n.styles,k=v===void 0?{}:v;if(e){var T=e.prefix,x=e.iconName,A=e.icon;return jc(D({type:"icon"},e),function(){return ri("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(d?f["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(g||Yo()):(f["aria-hidden"]="true",f.focusable="false")),cg({icons:{main:Of(A),mask:l?Of(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:x,transform:D(D({},tn),i),symbol:o,title:d,maskId:c,titleId:g,extra:{attributes:f,styles:k,classes:E}})})}},DO={mixout:function(){return{icon:RO(PO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=p0,n.nodeCallback=bO,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ce:r,s=n.callback,o=s===void 0?function(){}:s;return p0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,d=r.extra;return new Promise(function(p,g){Promise.all([Lf(i,a),c.iconName?Lf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=eg(y,2),m=E[0],f=E[1];p([n,cg({icons:{main:m,mask:f},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=zc(a);l.length>0&&(i.style=l);var u;return og(o)&&(u=Rn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},OO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return jc({type:"layer"},function(){ri("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Aa(s)).join(" ")},children:o}]})}}}},LO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return jc({type:"counter",content:n},function(){return ri("beforeDOMElementCreation",{content:n,params:r}),pO({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Aa(a))}})})}}}},MO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?tn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return jc({type:"text",content:n},function(){return ri("beforeDOMElementCreation",{content:n,params:r}),l0({content:n,transform:D(D({},tn),s),title:a,extra:{attributes:h,styles:p,classes:["".concat($.cssPrefix,"-layers-text")].concat(Aa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Q_){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,l0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},$O=new RegExp('"',"ug"),m0=[1105920,1112319];function FO(t){var e=t.replace($O,""),n=XD(e,0),r=n>=m0[0]&&n<=m0[1],i=e.length===2?e[0]===e[1]:!1;return{value:bf(i?e[0]:e),isSecondary:r||i}}function g0(t,e){var n="".concat(CD).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ts(t.children),o=s.filter(function(A){return A.getAttribute(Nf)===e})[0],a=gr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(RD),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ee:ae,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Go[d][l[2].toLowerCase()]:PD[d][u],g=FO(h),y=g.value,E=g.isSecondary,m=l[0].startsWith("FontAwesome"),f=lg(p,y),v=f;if(m){var k=iO(y);k.iconName&&k.prefix&&(f=k.iconName,p=k.prefix)}if(f&&!E&&(!o||o.getAttribute(ng)!==p||o.getAttribute(rg)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var T=AO(),x=T.extra;x.attributes[Nf]=e,Lf(f,p).then(function(A){var R=cg(D(D({},T),{},{icons:{main:A,mask:ug()},prefix:p,iconName:v,extra:x,watchable:!0})),Q=ce.createElement("svg");e==="::before"?t.insertBefore(Q,t.firstChild):t.appendChild(Q),Q.outerHTML=R.map(function(U){return ba(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function UO(t){return Promise.all([g0(t,"::before"),g0(t,"::after")])}function zO(t){return t.parentNode!==document.head&&!~AD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function v0(t){if(On)return new Promise(function(e,n){var r=Ts(t.querySelectorAll("*")).filter(zO).map(UO),i=hg.begin("searchPseudoElements");gT(),Promise.all(r).then(function(){i(),$f(),e()}).catch(function(){i(),$f(),n()})})}var VO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=v0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ce:r;$.searchPseudoElements&&v0(i)}}},y0=!1,BO={mixout:function(){return{dom:{unwatch:function(){gT(),y0=!0}}}},hooks:function(){return{bootstrap:function(){d0(Pf("mutationObserverCallbacks",{}))},noAuto:function(){SO()},watch:function(n){var r=n.observeMutationsRoot;y0?$f():d0(Pf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},w0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},jO={mixout:function(){return{parse:{transform:function(n){return w0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=w0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:d};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},qh={x:0,y:0,width:"100%",height:"100%"};function E0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function HO(t){return t.tag==="g"?t.children:[t]}var WO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Bc(i.split(" ").map(function(o){return o.trim()})):ug();return s.prefix||(s.prefix=vr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,d=o.icon,p=jD({transform:l,containerWidth:h,iconWidth:u}),g={tag:"rect",attributes:D(D({},qh),{},{fill:"white"})},y=c.children?{children:c.children.map(E0)}:{},E={tag:"g",attributes:D({},p.inner),children:[E0(D({tag:c.tag,attributes:D(D({},c.attributes),p.path)},y))]},m={tag:"g",attributes:D({},p.outer),children:[E]},f="mask-".concat(a||Yo()),v="clip-".concat(a||Yo()),k={tag:"mask",attributes:D(D({},qh),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:HO(d)},k]};return r.push(T,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(f,")")},qh)}),{children:r,attributes:i}}}},qO={provides:function(e){var n=!1;gr.matchMedia&&(n=gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},GO={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},KO=[qD,DO,OO,LO,MO,VO,BO,jO,WO,qO,GO];aO(KO,{mixoutsTo:Nt});Nt.noAuto;Nt.config;Nt.library;Nt.dom;var Ff=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var QO=Nt.icon;Nt.layer;Nt.text;Nt.counter;var G={},YO={get exports(){return G},set exports(t){G=t}},XO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JO=XO,ZO=JO;function yT(){}function wT(){}wT.resetWarningCache=yT;var e4=function(){function t(r,i,s,o,a,l){if(l!==ZO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:wT,resetWarningCache:yT};return n.PropTypes=n,n};YO.exports=e4();function k0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k0(Object(n),!0).forEach(function(r){Ri(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bu(t){return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(t)}function Ri(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function t4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function n4(t,e){if(t==null)return{};var n=t4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Uf(t){return r4(t)||i4(t)||s4(t)||o4()}function r4(t){if(Array.isArray(t))return zf(t)}function i4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function s4(t,e){if(t){if(typeof t=="string")return zf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zf(t,e)}}function zf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,p=t.inverse,g=t.border,y=t.listItem,E=t.flip,m=t.size,f=t.rotation,v=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":p,"fa-border":g,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Ri(e,"fa-".concat(m),typeof m<"u"&&m!==null),Ri(e,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Ri(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Ri(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(T){return k[T]?T:null}).filter(function(T){return T})}function l4(t){return t=t-0,t===t}function ET(t){return l4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var u4=["style"];function c4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ET(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[c4(i)]=s:e[i]=s,e},{})}function kT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return kT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=h4(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ET(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=n4(n,u4);return i.attrs.style=Qn(Qn({},i.attrs.style),o),t.apply(void 0,[e.tag,Qn(Qn({},i.attrs),a)].concat(Uf(r)))}var _T=!1;try{_T=!0}catch{}function d4(){if(!_T&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _0(t){if(t&&Bu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ff.icon)return Ff.icon(t);if(t===null)return null;if(t&&Bu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ri({},t,e):{}}var Ce=Me.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=_0(n),c=Gh("classes",[].concat(Uf(a4(t)),Uf(s.split(" ")))),h=Gh("transform",typeof t.transform=="string"?Ff.transform(t.transform):t.transform),d=Gh("mask",_0(r)),p=QO(u,Qn(Qn(Qn(Qn({},c),h),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return d4("Could not find icon",u),null;var g=p.abstract,y={ref:e};return Object.keys(t).forEach(function(E){Ce.defaultProps.hasOwnProperty(E)||(y[E]=t[E])}),f4(g[0],y)});Ce.displayName="FontAwesomeIcon";Ce.propTypes={beat:G.bool,border:G.bool,beatFade:G.bool,bounce:G.bool,className:G.string,fade:G.bool,flash:G.bool,mask:G.oneOfType([G.object,G.array,G.string]),maskId:G.string,fixedWidth:G.bool,inverse:G.bool,flip:G.oneOf([!0,!1,"horizontal","vertical","both"]),icon:G.oneOfType([G.object,G.array,G.string]),listItem:G.bool,pull:G.oneOf(["right","left"]),pulse:G.bool,rotation:G.oneOf([0,90,180,270]),shake:G.bool,size:G.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:G.bool,spinPulse:G.bool,spinReverse:G.bool,symbol:G.oneOfType([G.bool,G.string]),title:G.string,titleId:G.string,transform:G.oneOfType([G.string,G.object]),swapOpacity:G.bool};Ce.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var f4=kT.bind(null,Me.createElement),p4={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},m4={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},g4={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},fg=g4,v4={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},y4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},co=y4,w4={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},TT=w4,ho={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};const E4=(t,e,n)=>{const r=e.filter(i=>i.id!==t);return localStorage.setItem(`${n}`,JSON.stringify(r)),r},k4=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=_.useContext(pe)||{},o=async a=>{var l;if(s)try{console.log("deleting from Firebase");const u=(l=Re.currentUser)==null?void 0:l.email,c=ks(ui(ci,"todos"),Qt("user","==",u),Qt("id","==",a));(await _s(c)).docs.forEach(async p=>{await dD(p.ref)});const d=(r==null?void 0:r.filter(p=>p.id!==a))||[];i(d)}catch(u){console.log(u)}else{console.log("deleting from localStorage");const u=E4(a,r||[],"todosLocal");i(u)}};return w(Ce,{icon:ho,onClick:()=>o(e.id),style:{color:n==null?void 0:n.buttonIcons}})},_4=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=_.useContext(pe)||{},o=async l=>{var c;const u=(r||[]).map(h=>h.id===l?{...h,isEditing:!h.isEditing}:h);if(i(u),s)try{console.log("updating editing status in Firebase");const h=(c=Re.currentUser)==null?void 0:c.email,d=ks(ui(ci,"todos"),Qt("user","==",h),Qt("id","==",l));(await _s(d)).docs.forEach(async y=>{await Uc(y.ref,{isEditing:!y.data().isEditing})});const g=(r||[]).map(y=>y.id===l?{...y,isEditing:!y.isEditing}:y);i(g)}catch(h){console.log(h)}},a=()=>{o==null||o(e.id)};return _.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),w(Ce,{icon:co,onClick:a,style:{color:n==null?void 0:n.buttonIcons}})},T4=t=>{var s;const{todo:e,handleToggleClick:n}=t,{allTypes:r}=_.useContext(pe)||{},i=(s=r==null?void 0:r.find(o=>o.typeName===e.nType))==null?void 0:s.color;return w("div",{className:"TodoItem__type-color",onClick:n,style:{backgroundColor:i??"gray"}})},S4=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=_.useContext(pe)||{},o=async l=>{var u;if(s)try{console.log("updating status in Firebase");const c=(u=Re.currentUser)==null?void 0:u.email,h=ks(ui(ci,"todos"),Qt("user","==",c),Qt("id","==",l));(await _s(h)).docs.forEach(async g=>{await Uc(g.ref,{completed:!g.data().completed})});const p=(r||[]).map(g=>g.id===l?{...g,completed:!g.completed}:g);i(p)}catch(c){console.log(c)}},a=()=>{e.taskorreminder==="task"&&(o==null||o(e.id))};return _.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),N("li",{className:`TodoItem ${e.completed&&"completed"} Todo-${e.taskorreminder}`,style:{color:n==null?void 0:n.itemText,backgroundColor:e.taskorreminder==="reminder"?n==null?void 0:n.reminderBackgroundColor:n==null?void 0:n.itemBackgroundColor},children:[w(T4,{todo:e,handleToggleClick:a}),N("div",{className:"TodoItem__container",onClick:a,children:[" ",N("p",{className:`${e.completed&&"completed"}`,children:[e.task,e.taskorreminder==="task"?e.nType?" / "+e.nType:" / No-cat":null]})]}),N("div",{className:"TodoItem__icons",children:[w(_4,{todo:e}),w(k4,{todo:e})]})]})},I4=t=>{const{task:e}=t,[n,r]=_.useState(e.task),[i,s]=_.useState(e.nType),[o,a]=_.useState(e.date),[l,u]=_.useState(e.taskorreminder),{allColors:c,allTodos:h=[],allTypes:d,setAllTodos:p=()=>{},isLoggedIn:g}=_.useContext(pe)||{},y=async(m,f,v,k,T)=>{var x;if(g)try{console.log("Updating task in Firebase");const A=(x=Re.currentUser)==null?void 0:x.email,R=ks(ui(ci,"todos"),Qt("user","==",A),Qt("id","==",T));(await _s(R)).docs.forEach(async ne=>{await Uc(ne.ref,{task:m,nType:f,date:v,taskorreminder:k,isEditing:!1})});const U=(h||[]).map(ne=>ne.id===T?{...ne,task:m,nType:f,date:v,taskorreminder:k,isEditing:!1}:ne);p(U)}catch(A){console.error("Error updating document: ",A)}else{const A=(h||[]).map(R=>R.id===T?{...R,task:m,nType:f,date:v,taskorreminder:k,isEditing:!1}:R);p(A)}},E=m=>{m.preventDefault(),y==null||y(n,i,o,l,e.id)};return _.useEffect(()=>{g||localStorage.setItem("todosLocal",JSON.stringify(h))},[h]),N("form",{className:"EditTodoForm",onSubmit:E,style:{background:c==null?void 0:c.formBackgroundColor},children:[N("div",{className:"EditTodoForm__Task",children:[w("input",{type:"text",value:n,placeholder:"Update task",className:"EditTodoForm__Task__input",onChange:m=>r(m.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:c==null?void 0:c.buttonIcons,color:c==null?void 0:c.buttonText},children:"Update"})]}),N("div",{className:"EditTodoForm__CatDate",children:[w("div",{className:"EditTodoForm__CatDate__category",children:w("select",{id:e.id,name:"type",value:i,onChange:m=>s(m.target.value),...l==="reminder"&&{disabled:!0},children:d==null?void 0:d.map(m=>w("option",{value:m.typeName,children:m.typeName},m.id))})}),w("div",{className:"TodoForm__CatDate__category",children:N("select",{id:"taskOrReminder",name:"task-reminder",value:l,onChange:m=>u(m.target.value),children:[w("option",{value:"task",children:"Task"}),w("option",{value:"reminder",children:"Reminder"})]})}),w("div",{className:"EditTodoForm__CatDate__date",children:w("input",{type:"date",id:"start",name:"trip-start",defaultValue:e.date,onChange:m=>a(m.target.value),min:"2018-01-01",max:"2099-12-31"})})," "]})]})},C4=t=>{const{weekDisplayType:e,date:n,todos:r}=t,[i,s]=_.useState(!1),{allColors:o}=_.useContext(pe)||{},a=r.filter(g=>g.taskorreminder!=="reminder").length,u=(r.filter(g=>g.completed&&g.taskorreminder!=="reminder").length/a*100).toFixed(0),c=new Date().toLocaleDateString("en-GB"),h=new Date(n).toLocaleDateString("en-GB"),d=new Date(n).toLocaleDateString("en-GB",{weekday:"short"}),p=()=>{s(!i)};return N("div",{className:`Daily-divider ${d} ${u==="100"&&"-completed-day"}`,style:{maxHeight:i?25:"2000px",transition:"max-height 0.7s",overflow:"hidden"},children:[N("div",{className:"Daily-divider__Header",children:[N("h3",{className:`Daily-divider__Header__Title date ${h===c?"todayDate":""}`,children:[" ",new Date(n).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})]}),N("div",{className:"percentageAndArchive",children:[w("p",{className:"Daily-divider__Header__Title",style:{color:u==="100"?"#2cd477":o==null?void 0:o.weeklyCardTxt},children:isNaN(parseFloat(u))?"No tasks today":`Day ${u}% completed`}),e&&w(Ce,{icon:i?fg:TT,onClick:p,style:{color:o==null?void 0:o.buttonIcons,fontSize:"14px",alignSelf:"center"}})]})]}),w("ul",{children:r.map(g=>g.isEditing?w(I4,{task:g},g.task):w(S4,{todo:g},g.task))})]})},x4=t=>{const{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i}=t,{allColors:s}=_.useContext(pe)||{};return N("div",{className:`Weekly-divider__Header__Titles ${r==="100"&&"Weekly-divider__Header__Titles-complete"}`,style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${r}%, ${s==null?void 0:s.weeklyCardBG} ${i}%, ${s==null?void 0:s.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[N("h3",{style:{color:s==null?void 0:s.weeklyCardTxt},children:[e==="TodoWrapper"?"Week plan":n," "]}),N("p",{style:{color:s==null?void 0:s.weeklyCardTxt},children:["Week is ",r,"% completed"]})]})},A4=()=>{const{allColors:t}=_.useContext(pe)||{},{setEditingWeekObjective:e}=_.useContext(ST);return N("button",{onClick:()=>e(!0),style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:[w(Ce,{icon:co}),"edit"]})},N4=t=>{const{Weektodos:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=_.useContext(pe)||{allTodos:[],setAllTodos:()=>{}},o=l=>{const u=e==null?void 0:e.map(c=>l.includes(c.id)?{...c,archived:!0}:c);if(r){const c=[...r.filter(h=>!e.find(d=>d.id===h.id)),...u];i(c)}l.forEach(async c=>{var h;if(s)try{console.log("updating editing status in Firebase");const d=(h=Re.currentUser)==null?void 0:h.email,p=ks(ui(ci,"todos"),Qt("user","==",d),Qt("id","==",c));(await _s(p)).docs.forEach(async y=>{await Uc(y.ref,{archived:!0})})}catch(d){console.log(d)}})},a=(l=e)=>{if(Array.isArray(l)){const u=l.filter(c=>!c.archived).map(c=>c.id);o(u)}s||localStorage.setItem("todosLocal",JSON.stringify(r))};return N("button",{onClick:()=>a(),style:{backgroundColor:n==null?void 0:n.buttonIcons,color:n==null?void 0:n.buttonText},children:[" ",w(Ce,{icon:m4}),"archive"]})},ST=_.createContext({weekObjective:"",setWeekObjective:()=>{},editingWeekObjective:!1,setEditingWeekObjective:()=>{}}),b4=t=>{const{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i,todos:s,weekCollapsed:o,handleCollapseClick:a}=t,[l,u]=_.useState(""),[c,h]=_.useState(!1),{allColors:d}=_.useContext(pe)||{};_.useEffect(()=>{const g=localStorage.getItem(`${n}-weekObjective`);g&&u(g)},[]);const p=g=>{g.preventDefault(),u(l),localStorage.setItem(`${n}-weekObjective`,l),h(!1)};return w(ST.Provider,{value:{weekObjective:l,setWeekObjective:u,editingWeekObjective:c,setEditingWeekObjective:h},children:N("div",{className:`Weekly-divider__Header header_week_of_${e}`,children:[w(x4,{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i}),w("div",{className:`Weekly-divider__Header__EditableContent ${r==="100"&&"Weekly-divider__Header__EditableContent-complete"}`,style:{borderTop:"1px solid "+(d==null?void 0:d.weeklyBorder)},children:c?N(Yh,{children:[" ",w("textarea",{className:"Weekly-divider__Header__EditableContent__Editinginput",value:l,onChange:g=>u(g.target.value)}),w("button",{onClick:p,style:{backgroundColor:d==null?void 0:d.buttonIcons,color:d==null?void 0:d.buttonText},children:"edit"})]}):N(Yh,{children:[" ",w("pre",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:d==null?void 0:d.weeklyCardTxt},children:l||"Write your week objective"}),N("div",{className:"editOrCollapse",children:[N("div",{children:[w(A4,{}),e==="TodoWrapper"&&w(N4,{Weektodos:s})]}),w(Ce,{icon:o?fg:TT,onClick:a,style:{color:d==null?void 0:d.buttonIcons}})]})]})})]})})},IT=t=>{const{parentElement:e,week:n,weekList:r,todos:i}=t,[s,o]=_.useState(!1),[a,l]=_.useState([]),{allColors:u}=_.useContext(pe)||{doneTodoList:[],setDoneTodoList:()=>{}};_.useEffect(()=>{const E=f=>{const v=f.getDay(),k=f.getDate()-v+(v===0?-6:1);return new Date(f.setDate(k))},m=f=>{const v=f.getFullYear(),k=String(f.getMonth()+1).padStart(2,"0"),T=String(f.getDate()).padStart(2,"0");return`${v}-${k}-${T}`};if(i.length>0){const f=new Date(i[0].date),v=E(f),k=[];for(let T=0;T<7;T++){const x=new Date(v);x.setDate(v.getDate()+T),k.push(m(x))}l(k)}},[i]);const c=[...new Set(i.map(E=>E.date))],h=[...new Set(i.filter(E=>E.taskorreminder!=="reminder"))],p=(h.filter(E=>E.completed&&E.taskorreminder!=="reminder").length/h.length*100).toFixed(0),g=parseInt(p)-100,y=()=>{o(!s)};return N("div",{className:`Weekly-divider ${r===!0?"vertical-divider-list":"Weekly-divider-list"}`,style:{backgroundColor:u==null?void 0:u.weeklyCardBG,border:"1px solid "+(u==null?void 0:u.weeklyBorder)},children:[w(b4,{parentElement:e,week:n,weekPercentage:p,todos:i,weekCollapsed:s,handleCollapseClick:y,weekNotComplete:g}),w("div",{style:{maxHeight:s?0:"2000px",transition:"max-height 0.7s"},className:`Weekly-divider__Content content_week_of_${e}`,children:c.map(E=>w(C4,{date:E,weekDisplayType:r,parentElement:e,todos:i.filter(m=>m.date===E)},E))})]})},R4=()=>{const[t,e]=_.useState(""),[n,r]=_.useState("#ABABAB"),{allColors:i,allTypes:s=[],setAllTypes:o=()=>{}}=_.useContext(pe)||{},a=(u,c)=>{if(s===null){console.log("Types array is null");return}if(!(s!=null&&s.some(h=>h.typeName===u))){const h={id:Fw(),typeName:u,color:c},d=[...s,h];o(d),localStorage.setItem("typesLocal",JSON.stringify(d))}};return w("form",{className:"TypeForm",onSubmit:u=>{u.preventDefault(),t&&(a(t,n),e(""),r("#ABABAB"))},style:{background:i==null?void 0:i.formBackgroundColor},children:N("div",{className:"TypeForm__Task type-form-organizer",children:[w("input",{type:"color",id:"favcolor",name:"favcolor",value:n,onChange:u=>r(u.target.value)}),w("input",{type:"text",value:t,placeholder:"New Category",onChange:u=>e(u.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:i==null?void 0:i.buttonIcons,color:i==null?void 0:i.buttonText},children:"Add Type"})]})})},CT=()=>{const{allColors:t,allTodos:e,allTypes:n,setAllTypes:r=()=>{}}=_.useContext(pe)||{},i=(s,o)=>{if(e&&e.some(a=>a.nType===s))alert("You cannot delete a type that is being used");else{const a=(n==null?void 0:n.filter(l=>l.id!==o))||[];localStorage.setItem("typesLocal",JSON.stringify(a)),r(a)}};return w(Yh,{children:n==null?void 0:n.map(s=>N("div",{className:"TodoItem",style:{backgroundColor:t==null?void 0:t.itemBackgroundColor,color:t==null?void 0:t.itemText},children:[w("div",{style:{width:"25px",height:"25px",borderRadius:"8px",background:s.color}}),w("p",{children:s.typeName}),w("div",{children:w(Ce,{icon:ho,onClick:()=>i(s.typeName,s.id),style:{color:t==null?void 0:t.buttonIcons}},s.id)})]},`typeItem-${s.id}`))})};/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const T0="popstate";function P4(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ju(i)}return O4(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D4(){return Math.random().toString(36).substr(2,8)}function S0(t,e){return{usr:t.state,key:t.key,idx:e}}function Vf(t,e,n,r){return n===void 0&&(n=null),Xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ss(e):e,{state:n,key:e&&e.key||r||D4()})}function ju(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ss(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function O4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Yn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Yn.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:m})}function d(E,m){a=Yn.Push;let f=Vf(y.location,E,m);n&&n(f,E),u=c()+1;let v=S0(f,u),k=y.createHref(f);try{o.pushState(v,"",k)}catch{i.location.assign(k)}s&&l&&l({action:a,location:y.location,delta:1})}function p(E,m){a=Yn.Replace;let f=Vf(y.location,E,m);n&&n(f,E),u=c();let v=S0(f,u),k=y.createHref(f);o.replaceState(v,"",k),s&&l&&l({action:a,location:y.location,delta:0})}function g(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:ju(E);return Ne(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(T0,h),l=E,()=>{i.removeEventListener(T0,h),l=null}},createHref(E){return e(i,E)},createURL:g,encodeLocation(E){let m=g(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(E){return o.go(E)}};return y}var I0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(I0||(I0={}));function L4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ss(e):e,i=mg(r.pathname||"/",n);if(i==null)return null;let s=xT(t);M4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=W4(s[a],K4(i));return o}function xT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:j4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of AT(s.path))i(s,o,l)}),e}function AT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=AT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function M4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:H4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $4=/^:\w+$/,F4=3,U4=2,z4=1,V4=10,B4=-2,C0=t=>t==="*";function j4(t,e){let n=t.split("/"),r=n.length;return n.some(C0)&&(r+=B4),e&&(r+=U4),n.filter(i=>!C0(i)).reduce((i,s)=>i+($4.test(s)?F4:s===""?z4:V4),r)}function H4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function W4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=q4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:J4(cr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function q4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=G4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Q4(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function G4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function K4(t){try{return decodeURI(t)}catch(e){return pg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Q4(t,e){try{return decodeURIComponent(t)}catch(n){return pg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Y4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ss(t):t;return{pathname:n?n.startsWith("/")?n:X4(n,e):e,search:Z4(r),hash:eL(i)}}function X4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ss(t):(i=Xo({},t),Ne(!i.pathname||!i.pathname.includes("?"),Kh("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Kh("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Kh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Y4(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),J4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Z4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hu(){return Hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hu.apply(this,arguments)}const gg=_.createContext(null),nL=_.createContext(null),Is=_.createContext(null),Hc=_.createContext(null),hi=_.createContext({outlet:null,matches:[],isDataRoute:!1}),RT=_.createContext(null);function rL(t,e){let{relative:n}=e===void 0?{}:e;Ra()||Ne(!1);let{basename:r,navigator:i}=_.useContext(Is),{hash:s,pathname:o,search:a}=DT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ra(){return _.useContext(Hc)!=null}function Wc(){return Ra()||Ne(!1),_.useContext(Hc).location}function PT(t){_.useContext(Is).static||_.useLayoutEffect(t)}function iL(){let{isDataRoute:t}=_.useContext(hi);return t?vL():sL()}function sL(){Ra()||Ne(!1);let t=_.useContext(gg),{basename:e,navigator:n}=_.useContext(Is),{matches:r}=_.useContext(hi),{pathname:i}=Wc(),s=JSON.stringify(NT(r).map(l=>l.pathnameBase)),o=_.useRef(!1);return PT(()=>{o.current=!0}),_.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=bT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:cr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function DT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(hi),{pathname:i}=Wc(),s=JSON.stringify(NT(r).map(o=>o.pathnameBase));return _.useMemo(()=>bT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function oL(t,e){return aL(t,e)}function aL(t,e,n){Ra()||Ne(!1);let{navigator:r}=_.useContext(Is),{matches:i}=_.useContext(hi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Wc(),u;if(e){var c;let y=typeof e=="string"?Ss(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ne(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=L4(t,{pathname:d}),g=dL(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:cr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:cr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&g?_.createElement(Hc.Provider,{value:{location:Hu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Yn.Pop}},g):g}function lL(){let t=gL(),e=tL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}const uL=_.createElement(lL,null);class cL extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(hi.Provider,{value:this.props.routeContext},_.createElement(RT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hL(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(gg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(hi.Provider,{value:e},r)}function dL(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||uL);let d=e.concat(s.slice(0,u+1)),p=()=>{let g;return c?g=h:l.route.Component?g=_.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,_.createElement(hL,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?_.createElement(cL,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Bf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Bf||(Bf={}));var Jo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Jo||(Jo={}));function fL(t){let e=_.useContext(gg);return e||Ne(!1),e}function pL(t){let e=_.useContext(nL);return e||Ne(!1),e}function mL(t){let e=_.useContext(hi);return e||Ne(!1),e}function OT(t){let e=mL(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function gL(){var t;let e=_.useContext(RT),n=pL(Jo.UseRouteError),r=OT(Jo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function vL(){let{router:t}=fL(Bf.UseNavigateStable),e=OT(Jo.UseNavigateStable),n=_.useRef(!1);return PT(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Hu({fromRouteId:e},s)))},[t,e])}function Bl(t){Ne(!1)}function yL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Yn.Pop,navigator:s,static:o=!1}=t;Ra()&&Ne(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ss(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=_.useMemo(()=>{let y=mg(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return g==null?null:_.createElement(Is.Provider,{value:l},_.createElement(Hc.Provider,{children:n,value:g}))}function wL(t){let{children:e,location:n}=t;return oL(jf(e),n)}var x0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(x0||(x0={}));new Promise(()=>{});function jf(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,jf(r.props.children,s));return}r.type!==Bl&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hf.apply(this,arguments)}function EL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _L(t,e){return t.button===0&&(!e||e==="_self")&&!kL(t)}const TL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function SL(t){let{basename:e,children:n,window:r}=t,i=_.useRef();i.current==null&&(i.current=P4({window:r,v5Compat:!0}));let s=i.current,[o,a]=_.useState({action:s.action,location:s.location});return _.useLayoutEffect(()=>s.listen(a),[s]),_.createElement(yL,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const IL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qh=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=EL(e,TL),{basename:d}=_.useContext(Is),p,g=!1;if(typeof u=="string"&&CL.test(u)&&(p=u,IL))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),k=mg(v.pathname,d);v.origin===f.origin&&k!=null?u=k+v.search+v.hash:g=!0}catch{}let y=rL(u,{relative:i}),E=xL(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||E(f)}return _.createElement("a",Hf({},h,{href:p||y,onClick:g||s?r:m,ref:n,target:l}))});var A0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(A0||(A0={}));var N0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N0||(N0={}));function xL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=iL(),l=Wc(),u=DT(t,{relative:o});return _.useCallback(c=>{if(_L(c,n)){c.preventDefault();let h=r!==void 0?r:ju(l)===ju(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function vg(){const{allColors:t}=_.useContext(pe)||{};return N("div",{className:"navigation",children:[w(Qh,{to:"/Complex-todolist/",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:w("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Home"})}),w(Qh,{to:"/Complex-todolist/archive",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:w("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Archive"})}),w(Qh,{to:"/Complex-todolist/styles",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:w("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Styles"})})]})}function LT(){const{allColors:t,isLoggedIn:e}=_.useContext(pe)||{};return w("div",{className:"bottom-buttons",children:w("button",{onClick:async()=>{try{await Wx(Re)}catch(r){console.log(r)}},style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:"LogOut"})})}const MT=({filterOneItem:t})=>{const[e,n]=_.useState(""),{allColors:r,allTypes:i}=_.useContext(pe)||{},s=o=>{t(o===""?"":o),n(o)};return w("form",{className:"TodoForm",style:{background:r==null?void 0:r.formBackgroundColor},children:N("div",{className:"TodoForm__CatDate",children:[w("div",{className:"TodoForm__CatDate__category",children:N("select",{id:"type",name:"type",value:e,onChange:o=>s(o.target.value),children:[w("option",{value:"",children:"Show all"},"type-id-no-type"),i==null?void 0:i.map(o=>w("option",{value:o.typeName,children:o.typeName},`type-id ${o.id}`))]})}),w("label",{style:{color:r==null?void 0:r.titleTextColor},children:"Filter One (testing)"})]})})},$T=()=>{const{allColors:t}=_.useContext(pe)||{},{setWeekList:e}=_.useContext(FT)||{setWeekList:()=>{}};return N("div",{className:"changeWeekList",children:[w("p",{className:"changeWeekList__title",style:{color:t==null?void 0:t.titleTextColor},children:"Display type"}),N("div",{className:"changeWeekList__buttons",children:[N("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:t==null?void 0:t.buttonIcons},onClick:()=>e(!0),children:[w(Ce,{icon:v4,style:{color:t==null?void 0:t.buttonText}}),w("span",{style:{color:t==null?void 0:t.buttonText},children:" List"})]}),N("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:t==null?void 0:t.buttonIcons},onClick:()=>e(!1),children:[w(Ce,{icon:p4,style:{color:t==null?void 0:t.buttonText}}),w("span",{style:{color:t==null?void 0:t.buttonText},children:" Calendar"})]})]})]})},FT=_.createContext({setWeekList:()=>{}}),AL=()=>{const{allColors:t,allTodos:e=[],setAllTodos:n,setAllTypes:r,isLoggedIn:i}=_.useContext(pe)||{},[s,o]=_.useState(!0),[a,l]=_.useState(null),u=p=>p.sort((g,y)=>new Date(g.date).getTime()-new Date(y.date).getTime()),c=[...new Set(e?u(e).map(p=>h(p.date)):[])];function h(p){const g=new Date(p);if(!isNaN(g.getTime())){g.setHours(0,0,0,0),g.setDate(g.getDate()+4-(g.getDay()||7));const y=new Date(g.getFullYear(),0,1),E=Math.ceil(((+g-+y)/864e5+1)/7);return`${g.getFullYear()}-W${E.toString().padStart(2,"0")}`}return""}function d(p){l(p)}return N("div",{className:`TodoWrapper ${!s&&"TodoWrapper--weekly"}`,style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[w(vg,{}),N("div",{className:"MainTitle-and-subtitle",children:[w("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Week Planner"}),w("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),w(gD,{}),i&&w(MT,{filterOneItem:d}),w(FT.Provider,{value:{setWeekList:o},children:w($T,{})}),c.map(p=>(e==null?void 0:e.some(g=>!g.archived&&h(g.date)===p))&&w(IT,{parentElement:"TodoWrapper",weekList:s,week:p,todos:e.filter(g=>h(g.date)===p&&!g.archived&&(!a||g.nType===a))},p)),w(R4,{}),w(CT,{}),w(LT,{})]})},NL=()=>{var h;const[t,e]=Me.useState(""),[n,r]=Me.useState(""),[i,s]=Me.useState(!1),{allColors:o}=_.useContext(pe)||{};console.log((h=Re==null?void 0:Re.currentUser)==null?void 0:h.email);const a=async()=>{try{await zx(Re,t,n)}catch(d){console.log(d)}},l=async()=>{try{await Vx(Re,t,n)}catch(d){console.log(d)}},u=async()=>{try{await dA(Re,mD)}catch(d){console.log(d)}},c=async()=>{try{await Mx(Re)}catch(d){console.log(d)}};return N("div",{className:"TodoWrapper auth",children:[w("h1",{style:{color:o==null?void 0:o.mainTitleColor},children:"Complex Todo"}),w("button",{onClick:c,children:"Use without logging in"}),w("div",{className:"auth__inputs",children:i?N("div",{className:"auth__inputs__register",children:[w("h2",{children:"Register new account"}),w("input",{placeholder:"email...",onChange:d=>e(d.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:d=>r(d.target.value)}),w("button",{className:"add-btn auth-btn",onClick:a,children:"Sign in"})]}):N("div",{className:"auth__inputs__login",children:[w("h2",{children:"Login with your account"}),w("input",{placeholder:"email...",onChange:d=>e(d.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:d=>r(d.target.value)}),w("button",{className:"add-btn  auth-btn",onClick:l,children:"Login"}),N("p",{children:["Don't have an account?"," ",w("a",{onClick:()=>s(!0),children:"Register"})]})]})}),w("div",{className:"auth__buttons",children:w("button",{className:"add-btn",onClick:u,children:"Sign in with Google"})})]})};function bL(){const{allColors:t,setAllColors:e}=_.useContext(pe)||{},[n,r]=Me.useState(t==null?void 0:t.outerBackgroundColor),[i,s]=Me.useState(t==null?void 0:t.innerBackgroundColor),[o,a]=Me.useState(t==null?void 0:t.mainTitleColor),[l,u]=Me.useState(t==null?void 0:t.titleTextColor),[c,h]=Me.useState(t==null?void 0:t.weeklyCardBG),[d,p]=Me.useState(t==null?void 0:t.weeklyCardTxt),[g,y]=Me.useState(t==null?void 0:t.buttonIcons),[E,m]=Me.useState(t==null?void 0:t.buttonText),[f,v]=Me.useState(t==null?void 0:t.formBackgroundColor),[k,T]=Me.useState(t==null?void 0:t.itemBackgroundColor),[x,A]=Me.useState(t==null?void 0:t.itemText),[R,Q]=Me.useState(t==null?void 0:t.reminderBackgroundColor),U=(P,Ln)=>{e&&e(Pa=>({...Pa,[P]:Ln})),localStorage.setItem(P,Ln)},ne={change_outerBackgroundColor:P=>{U("outerBackgroundColor",P)},change_innerBackgroundColor:P=>{U("innerBackgroundColor",P)},change_mainTitleColor:P=>{U("mainTitleColor",P)},change_titleTextColor:P=>{U("titleTextColor",P)},change_weeklyCardBG:P=>{U("weeklyCardBG",P)},change_weeklyCardTxt:P=>{U("weeklyCardTxt",P)},change_buttonIcons:P=>{U("buttonIcons",P)},change_buttonText:P=>{U("buttonText",P)},change_formBackgroundColor:P=>{U("formBackgroundColor",P)},change_itemBackgroundColor:P=>{U("itemBackgroundColor",P)},change_itemText:P=>{U("itemText",P)},change_reminderBackgroundColor:P=>{U("reminderBackgroundColor",P)}};return N("form",{className:"editColor-form",children:[N("div",{children:[w("input",{type:"color",value:n,onChange:P=>{ne.change_outerBackgroundColor(P.target.value),r(P.target.value)}}),w("label",{children:" Outer Background"})]}),N("div",{children:[w("input",{type:"color",value:i,onChange:P=>{ne.change_innerBackgroundColor(P.target.value),s(P.target.value)}}),w("label",{children:" Inner Background"})]}),N("div",{children:[w("input",{type:"color",value:o,onChange:P=>{ne.change_mainTitleColor(P.target.value),a(P.target.value)}}),w("label",{children:"Main Title Text"})]}),N("div",{children:[w("input",{type:"color",value:l,onChange:P=>{ne.change_titleTextColor(P.target.value),u(P.target.value)}}),w("label",{children:"Tabs and titles"})]}),N("div",{children:[w("input",{type:"color",value:c,onChange:P=>{ne.change_weeklyCardBG(P.target.value),h(P.target.value)}}),w("label",{children:"Week-Card Background"})]}),N("div",{children:[w("input",{type:"color",value:d,onChange:P=>{ne.change_weeklyCardTxt(P.target.value),p(P.target.value)}}),w("label",{children:"Week-Card Text"})]}),N("div",{children:[w("input",{type:"color",value:g,onChange:P=>{ne.change_buttonIcons(P.target.value),y(P.target.value)}}),w("label",{children:"Button Bg & icons"})]}),N("div",{children:[w("input",{type:"color",value:E,onChange:P=>{ne.change_buttonText(P.target.value),m(P.target.value)}}),w("label",{children:"Buttons Text"})]}),N("div",{children:[w("input",{type:"color",value:f,onChange:P=>{ne.change_formBackgroundColor(P.target.value),v(P.target.value)}}),w("label",{children:"Form Background"})]}),N("div",{children:[w("input",{type:"color",value:k,onChange:P=>{ne.change_itemBackgroundColor(P.target.value),T(P.target.value)}}),w("label",{children:"Task Item Background"})]}),N("div",{children:[w("input",{type:"color",value:x,onChange:P=>{ne.change_itemText(P.target.value),A(P.target.value)}}),w("label",{children:"Task Item Text"})]}),N("div",{children:[w("input",{type:"color",value:R,onChange:P=>{ne.change_reminderBackgroundColor(P.target.value),Q(P.target.value)}}),w("label",{children:"Reminder Background"})]})]})}function RL(){const{allColors:t}=_.useContext(pe)||{};return N("div",{className:"TodoWrapper",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[w(vg,{}),N("div",{className:"MainTitle-and-subtitle",children:[w("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Styles"}),w("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),w("h2",{style:{color:t==null?void 0:t.titleTextColor},children:"Edit Styles"}),w(bL,{}),w("br",{}),w("h3",{style:{color:t==null?void 0:t.titleTextColor},children:"Example:"}),w("br",{}),N("div",{className:"Weekly-divider",style:{backgroundColor:t==null?void 0:t.weeklyCardBG},children:[N("div",{className:"Weekly-divider__Header",children:[N("div",{className:"Weekly-divider__Header__Titles",style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 49%, ${t==null?void 0:t.weeklyCardBG} 50%, ${t==null?void 0:t.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[w("h3",{style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week plan"}),w("p",{style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week is 50% completed"})]}),N("div",{className:"Weekly-divider__Header__EditableContent",children:[w("p",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week objective here"}),N("div",{className:"editOrCollapse",children:[w("button",{style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:"edit"}),w(Ce,{icon:fg,style:{color:t==null?void 0:t.buttonIcons}})]})]})]}),w("div",{className:"Weekly-divider__Content",children:N("div",{className:"Daily-divider",children:[N("div",{className:"Daily-divider__Header",children:[N("h3",{className:"Daily-divider__Header__Title date",children:[" ","Mon, 29 May"]}),w("p",{className:"Daily-divider__Header__Title",children:"Day 50% completed"})]}),N("ul",{children:[N("li",{className:"TodoItem Todo-task",style:{color:t==null?void 0:t.itemText,backgroundColor:t==null?void 0:t.itemBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),N("div",{className:"TodoItem__container",children:[" ",w("p",{children:"Here goes the task / No-cat"})]}),N("div",{className:"TodoItem__icons",children:[w(Ce,{icon:co,style:{color:t==null?void 0:t.buttonIcons}}),w(Ce,{icon:ho,style:{color:t==null?void 0:t.buttonIcons}})]})]}),N("li",{className:"TodoItem Todo-task",style:{color:t==null?void 0:t.itemText,backgroundColor:t==null?void 0:t.itemBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),N("div",{className:"TodoItem__container",children:[" ",w("p",{children:"A second task / No-cat"})]}),N("div",{className:"TodoItem__icons",children:[w(Ce,{icon:co,style:{color:t==null?void 0:t.buttonIcons}}),w(Ce,{icon:ho,style:{color:t==null?void 0:t.buttonIcons}})]})]}),N("li",{className:"TodoItem Todo-reminder",style:{backgroundColor:t==null?void 0:t.reminderBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),N("div",{className:"TodoItem__container",children:[" ",w("p",{children:"Reminder example"})]}),N("div",{className:"TodoItem__icons",children:[w(Ce,{icon:co,style:{color:t==null?void 0:t.buttonIcons}}),w(Ce,{icon:ho,style:{color:t==null?void 0:t.buttonIcons}})]})]})]})]})})]})]})}const PL=_.createContext({setWeekList:()=>{}}),DL=()=>{const{allColors:t,allTodos:e=[],setAllTodos:n,setAllTypes:r,isLoggedIn:i}=_.useContext(pe)||{},[s,o]=_.useState(!0),[a,l]=_.useState(null),u=p=>p.sort((g,y)=>new Date(g.date).getTime()-new Date(y.date).getTime()),c=[...new Set(e?u(e).map(p=>h(p.date)):[])];function h(p){const g=new Date(p);g.setHours(0,0,0,0),g.setDate(g.getDate()+4-(g.getDay()||7));const y=new Date(g.getFullYear(),0,1),E=Math.ceil(((+g-+y)/864e5+1)/7);return`${g.getFullYear()}-W${E.toString().padStart(2,"0")}`}function d(p){l(p)}return N("div",{className:`TodoWrapper ${!s&&"TodoWrapper--weekly"}`,style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[w(vg,{}),N("div",{className:"MainTitle-and-subtitle",children:[w("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Archive"}),w("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),i&&w(MT,{filterOneItem:d}),w(PL.Provider,{value:{setWeekList:o},children:w($T,{})}),c.map(p=>(e==null?void 0:e.some(g=>g.archived&&h(g.date)===p))&&w(IT,{parentElement:"Archive",weekList:s,week:p,todos:e.filter(g=>h(g.date)===p&&g.archived&&(!a||g.nType===a))},p)),w(CT,{}),w(LT,{})]})},pe=_.createContext(void 0);function OL(){const[t,e]=_.useState(!1),[n,r]=_.useState([]),[i,s]=_.useState([{id:"1",typeName:"No-cat",color:"#f8f8f8"}]),[o,a]=_.useState(!1),[l,u]=_.useState({outerBackgroundColor:"#334549",innerBackgroundColor:"#ffffff",mainTitleColor:"#ffffff",titleTextColor:"#005657",weeklyCardBG:"#ffffff",weeklyBorder:"#005657",weeklyCardTxt:"#000000",buttonIcons:"#005657",buttonText:"#ffffff",formBackgroundColor:"#5c72b280",itemBackgroundColor:"#ffffff",itemText:"#000000",reminderBackgroundColor:"#ffde8c"});return _.useEffect(()=>{const c=localStorage.getItem("typesLocal");c&&s(JSON.parse(c)),Object.keys(l).forEach(d=>{const p=localStorage.getItem(d);p&&u(g=>({...g,[d]:p}))});const h=Re.onAuthStateChanged(d=>{a(d?!d.isAnonymous:!1)});return()=>{h()}},[]),_.useEffect(()=>{const c=async()=>{try{if(Re.currentUser){const d=Re.currentUser.email,p=ks(ui(ci,"todos"),Qt("user","==",d)),g=await _s(p),y=[],E=new Set;g.docs.forEach(m=>{const f=m.data();E.has(f.id)||(y.push(f),E.add(f.id))}),r(y),console.log("Todos from database:",y)}}catch(d){console.log(d)}};if(o)c();else{const d=localStorage.getItem("todosLocal")||"";r(JSON.parse(d))}const h=Re.onAuthStateChanged(d=>{a(d?!d.isAnonymous:!1)});return()=>{h()}},[o]),_.useEffect(()=>{const c=Hx(Re,h=>{e(!!h)});return()=>c()},[]),w(pe.Provider,{value:{allColors:l,setAllColors:u,allTypes:i,setAllTypes:s,allTodos:n,setAllTodos:r,isLoggedIn:o},children:w("div",{className:"App",style:{backgroundColor:l.outerBackgroundColor},children:t?w(SL,{children:N(wL,{children:[w(Bl,{path:"/Complex-todolist/",element:w(AL,{})}),w(Bl,{path:"/Complex-todolist/archive",element:w(DL,{})}),w(Bl,{path:"/Complex-todolist/styles",element:w(RL,{})})]})}):w(NL,{})})})}Xh.createRoot(document.getElementById("root")).render(w(Me.StrictMode,{children:w(OL,{})}));
