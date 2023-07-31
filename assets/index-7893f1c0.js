(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function o_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var go={},a_={get exports(){return go},set exports(t){go=t}},Gu={},E={},l_={get exports(){return E},set exports(t){E=t}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),u_=Symbol.for("react.portal"),c_=Symbol.for("react.fragment"),d_=Symbol.for("react.strict_mode"),h_=Symbol.for("react.profiler"),f_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),m_=Symbol.for("react.forward_ref"),g_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),v_=Symbol.for("react.lazy"),Dg=Symbol.iterator;function w_(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var W1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q1=Object.assign,G1={};function ps(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||W1}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function K1(){}K1.prototype=ps.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=G1,this.updater=n||W1}var Kf=Gf.prototype=new K1;Kf.constructor=Gf;q1(Kf,ps.prototype);Kf.isPureReactComponent=!0;var Og=Array.isArray,Q1=Object.prototype.hasOwnProperty,Qf={current:null},Y1={key:!0,ref:!0,__self:!0,__source:!0};function X1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q1.call(e,r)&&!Y1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:na,type:t,key:s,ref:o,props:i,_owner:Qf.current}}function k_(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function E_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lg=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E_(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case u_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jc(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(Lg,"$&/")+"/"),El(i,e,n,"",function(u){return u})):i!=null&&(Yf(i)&&(i=k_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jc(s,a);o+=El(s,e,n,l,i)}else if(l=w_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jc(s,a++),o+=El(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function T_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Tl={transition:null},__={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Qf};Z.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ps;Z.Fragment=c_;Z.Profiler=h_;Z.PureComponent=Gf;Z.StrictMode=d_;Z.Suspense=g_;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q1.call(e,l)&&!Y1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:na,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:p_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:f_,_context:t},t.Consumer=t};Z.createElement=X1;Z.createFactory=function(t){var e=X1.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:m_,render:t}};Z.isValidElement=Yf;Z.lazy=function(t){return{$$typeof:v_,_payload:{_status:-1,_result:t},_init:T_}};Z.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return yt.current.useCallback(t,e)};Z.useContext=function(t){return yt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return yt.current.useEffect(t,e)};Z.useId=function(){return yt.current.useId()};Z.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return yt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};Z.useRef=function(t){return yt.current.useRef(t)};Z.useState=function(t){return yt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return yt.current.useTransition()};Z.version="18.2.0";(function(t){t.exports=Z})(l_);const Ue=o_(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_=E,I_=Symbol.for("react.element"),C_=Symbol.for("react.fragment"),b_=Object.prototype.hasOwnProperty,x_=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N_={key:!0,ref:!0,__self:!0,__source:!0};function J1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)b_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:I_,type:t,key:s,ref:o,props:i,_owner:x_.current}}Gu.Fragment=C_;Gu.jsx=J1;Gu.jsxs=J1;(function(t){t.exports=Gu})(a_);const Yr=go.Fragment,v=go.jsx,C=go.jsxs;var Zd={},eh={},A_={get exports(){return eh},set exports(t){eh=t}},Pt={},th={},R_={get exports(){return th},set exports(t){th=t}},Z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var Y=L.length;L.push(K);e:for(;0<Y;){var Ie=Y-1>>>1,Fe=L[Ie];if(0<i(Fe,K))L[Ie]=K,L[Y]=Fe,Y=Ie;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],Y=L.pop();if(Y!==K){L[0]=Y;e:for(var Ie=0,Fe=L.length,La=Fe>>>1;Ie<La;){var Pr=2*(Ie+1)-1,Xc=L[Pr],Dr=Pr+1,Ma=L[Dr];if(0>i(Xc,Y))Dr<Fe&&0>i(Ma,Xc)?(L[Ie]=Ma,L[Dr]=Y,Ie=Dr):(L[Ie]=Xc,L[Pr]=Y,Ie=Pr);else if(Dr<Fe&&0>i(Ma,Y))L[Ie]=Ma,L[Dr]=Y,Ie=Dr;else break e}}return K}function i(L,K){var Y=L.sortIndex-K.sortIndex;return Y!==0?Y:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=L)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function T(L){if(w=!1,g(L),!y)if(n(l)!==null)y=!0,Qc(_);else{var K=n(u);K!==null&&Yc(T,K.startTime-L)}}function _(L,K){y=!1,w&&(w=!1,m(R),R=-1),p=!0;var Y=h;try{for(g(K),d=n(l);d!==null&&(!(d.expirationTime>K)||L&&!se());){var Ie=d.callback;if(typeof Ie=="function"){d.callback=null,h=d.priorityLevel;var Fe=Ie(d.expirationTime<=K);K=t.unstable_now(),typeof Fe=="function"?d.callback=Fe:d===n(l)&&r(l),g(K)}else r(l);d=n(l)}if(d!==null)var La=!0;else{var Pr=n(u);Pr!==null&&Yc(T,Pr.startTime-K),La=!1}return La}finally{d=null,h=Y,p=!1}}var I=!1,N=null,R=-1,W=5,M=-1;function se(){return!(t.unstable_now()-M<W)}function P(){if(N!==null){var L=t.unstable_now();M=L;var K=!0;try{K=N(!0,L)}finally{K?tn():(I=!1,N=null)}}else I=!1}var tn;if(typeof f=="function")tn=function(){f(P)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,s_=nn.port2;nn.port1.onmessage=P,tn=function(){s_.postMessage(null)}}else tn=function(){k(P,0)};function Qc(L){N=L,I||(I=!0,tn())}function Yc(L,K){R=k(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Qc(_))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Y=h;h=K;try{return L()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=h;h=L;try{return K()}finally{h=Y}},t.unstable_scheduleCallback=function(L,K,Y){var Ie=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ie+Y:Ie):Y=Ie,L){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=Y+Fe,L={id:c++,callback:K,priorityLevel:L,startTime:Y,expirationTime:Fe,sortIndex:-1},Y>Ie?(L.sortIndex=Y,e(u,L),n(l)===null&&L===n(u)&&(w?(m(R),R=-1):w=!0,Yc(T,Y-Ie))):(L.sortIndex=Fe,e(l,L),y||p||(y=!0,Qc(_))),L},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(L){var K=h;return function(){var Y=h;h=K;try{return L.apply(this,arguments)}finally{h=Y}}}})(Z1);(function(t){t.exports=Z1})(R_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=E,At=th;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,yo={};function di(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(yo[t]=e,t=0;t<e.length;t++)t0.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,P_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},$g={};function D_(t){return nh.call($g,t)?!0:nh.call(Mg,t)?!1:P_.test(t)?$g[t]=!0:(Mg[t]=!0,!1)}function O_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,n,r){if(e===null||typeof e>"u"||O_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xf,Jf);Je[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xf,Jf);Je[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xf,Jf);Je[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,n,i,r)&&(n=null),r||i===null?D_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),Fg=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Zc;function Vs(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var ed=!1;function td(t,e){if(!t||ed)return"";ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ed=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function M_(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=td(t.type,!1),t;case 11:return t=td(t.type.render,!1),t;case 1:return t=td(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case rh:return"Profiler";case ep:return"StrictMode";case ih:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r0:return(t.displayName||"Context")+".Consumer";case n0:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F_(t){var e=s0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=F_(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function lh(t,e){a0(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(zs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function l0(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,c0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){U_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function d0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var V_=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(V_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,Fi=null,Ui=null;function jg(t){if(t=sa(t)){if(typeof mh!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ju(e),mh(t.stateNode,t.type,e))}}function f0(t){Fi?Ui?Ui.push(t):Ui=[t]:Fi=t}function p0(){if(Fi){var t=Fi,e=Ui;if(Ui=Fi=null,jg(t),e)for(t=0;t<e.length;t++)jg(e[t])}}function m0(t,e){return t(e)}function g0(){}var nd=!1;function y0(t,e,n){if(nd)return t(e,n);nd=!0;try{return m0(t,e,n)}finally{nd=!1,(Fi!==null||Ui!==null)&&(g0(),p0())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var gh=!1;if(Cn)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){gh=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{gh=!1}function z_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Js=!1,ql=null,Gl=!1,yh=null,B_={onError:function(t){Js=!0,ql=t}};function j_(t,e,n,r,i,s,o,a,l){Js=!1,ql=null,z_.apply(B_,arguments)}function H_(t,e,n,r,i,s,o,a,l){if(j_.apply(this,arguments),Js){if(Js){var u=ql;Js=!1,ql=null}else throw Error(b(198));Gl||(Gl=!0,yh=u)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(hi(t)!==t)throw Error(b(188))}function W_(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hg(i),t;if(s===r)return Hg(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function w0(t){return t=W_(t),t!==null?k0(t):null}function k0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k0(t);if(e!==null)return e;t=t.sibling}return null}var E0=At.unstable_scheduleCallback,Wg=At.unstable_cancelCallback,q_=At.unstable_shouldYield,G_=At.unstable_requestPaint,Ce=At.unstable_now,K_=At.unstable_getCurrentPriorityLevel,ip=At.unstable_ImmediatePriority,T0=At.unstable_UserBlockingPriority,Kl=At.unstable_NormalPriority,Q_=At.unstable_LowPriority,_0=At.unstable_IdlePriority,Ku=null,cn=null;function Y_(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:Z_,X_=Math.log,J_=Math.LN2;function Z_(t){return t>>>=0,t===0?32:31-(X_(t)/J_|0)|0}var za=64,Ba=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bs(a):(s&=o,s!==0&&(r=Bs(s)))}else o=n&~i,o!==0?r=Bs(o):s!==0&&(r=Bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=eS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function I0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var C0,op,b0,x0,N0,wh=!1,ja=[],rr=null,ir=null,sr=null,ko=new Map,Eo=new Map,Gn=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iS(t,e,n,r,i){switch(e){case"focusin":return rr=Ps(rr,t,e,n,r,i),!0;case"dragenter":return ir=Ps(ir,t,e,n,r,i),!0;case"mouseover":return sr=Ps(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ko.set(s,Ps(ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Eo.set(s,Ps(Eo.get(s)||null,t,e,n,r,i)),!0}return!1}function A0(t){var e=$r(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,N0(t.priority,function(){b0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=sa(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function Gg(t,e,n){_l(t)&&n.delete(e)}function sS(){wh=!1,rr!==null&&_l(rr)&&(rr=null),ir!==null&&_l(ir)&&(ir=null),sr!==null&&_l(sr)&&(sr=null),ko.forEach(Gg),Eo.forEach(Gg)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,sS)))}function To(t){function e(i){return Ds(i,t)}if(0<ja.length){Ds(ja[0],t);for(var n=1;n<ja.length;n++){var r=ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ds(rr,t),ir!==null&&Ds(ir,t),sr!==null&&Ds(sr,t),ko.forEach(e),Eo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&Gn.shift()}var Vi=Un.ReactCurrentBatchConfig,Yl=!0;function oS(t,e,n,r){var i=ae,s=Vi.transition;Vi.transition=null;try{ae=1,ap(t,e,n,r)}finally{ae=i,Vi.transition=s}}function aS(t,e,n,r){var i=ae,s=Vi.transition;Vi.transition=null;try{ae=4,ap(t,e,n,r)}finally{ae=i,Vi.transition=s}}function ap(t,e,n,r){if(Yl){var i=kh(t,e,n,r);if(i===null)fd(t,e,r,Xl,n),qg(t,r);else if(iS(i,t,e,n,r))r.stopPropagation();else if(qg(t,r),e&4&&-1<rS.indexOf(t)){for(;i!==null;){var s=sa(i);if(s!==null&&C0(s),s=kh(t,e,n,r),s===null&&fd(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fd(t,e,r,null,n)}}var Xl=null;function kh(t,e,n,r){if(Xl=null,t=rp(r),t=$r(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function R0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case ip:return 1;case T0:return 4;case Kl:case Q_:return 16;case _0:return 536870912;default:return 16}default:return 16}}var Jn=null,lp=null,Sl=null;function P0(){if(Sl)return Sl;var t,e=lp,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function Kg(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:Kg,this.isPropagationStopped=Kg,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},up=Dt(ms),ia=ke({},ms,{view:0,detail:0}),lS=Dt(ia),id,sd,Os,Qu=ke({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(id=t.screenX-Os.screenX,sd=t.screenY-Os.screenY):sd=id=0,Os=t),id)},movementY:function(t){return"movementY"in t?t.movementY:sd}}),Qg=Dt(Qu),uS=ke({},Qu,{dataTransfer:0}),cS=Dt(uS),dS=ke({},ia,{relatedTarget:0}),od=Dt(dS),hS=ke({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Dt(hS),pS=ke({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=Dt(pS),gS=ke({},ms,{data:0}),Yg=Dt(gS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wS[t])?!!e[t]:!1}function cp(){return kS}var ES=ke({},ia,{key:function(t){if(t.key){var e=yS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=Dt(ES),_S=ke({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=Dt(_S),SS=ke({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),IS=Dt(SS),CS=ke({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Dt(CS),xS=ke({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=Dt(xS),AS=[9,13,27,32],dp=Cn&&"CompositionEvent"in window,Zs=null;Cn&&"documentMode"in document&&(Zs=document.documentMode);var RS=Cn&&"TextEvent"in window&&!Zs,D0=Cn&&(!dp||Zs&&8<Zs&&11>=Zs),Jg=String.fromCharCode(32),Zg=!1;function O0(t,e){switch(t){case"keyup":return AS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function PS(t,e){switch(t){case"compositionend":return L0(e);case"keypress":return e.which!==32?null:(Zg=!0,Jg);case"textInput":return t=e.data,t===Jg&&Zg?null:t;default:return null}}function DS(t,e){if(_i)return t==="compositionend"||!dp&&O0(t,e)?(t=P0(),Sl=lp=Jn=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ey(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OS[t.type]:e==="textarea"}function M0(t,e,n,r){f0(r),e=Jl(e,"onChange"),0<e.length&&(n=new up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,_o=null;function LS(t){G0(t,0)}function Yu(t){var e=Ci(t);if(o0(e))return t}function MS(t,e){if(t==="change")return e}var $0=!1;if(Cn){var ad;if(Cn){var ld="oninput"in document;if(!ld){var ty=document.createElement("div");ty.setAttribute("oninput","return;"),ld=typeof ty.oninput=="function"}ad=ld}else ad=!1;$0=ad&&(!document.documentMode||9<document.documentMode)}function ny(){eo&&(eo.detachEvent("onpropertychange",F0),_o=eo=null)}function F0(t){if(t.propertyName==="value"&&Yu(_o)){var e=[];M0(e,_o,t,rp(t)),y0(LS,e)}}function $S(t,e,n){t==="focusin"?(ny(),eo=e,_o=n,eo.attachEvent("onpropertychange",F0)):t==="focusout"&&ny()}function FS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(_o)}function US(t,e){if(t==="click")return Yu(e)}function VS(t,e){if(t==="input"||t==="change")return Yu(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:zS;function So(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nh.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function ry(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iy(t,e){var n=ry(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ry(n)}}function U0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BS(t){var e=V0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(r!==null&&hp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iy(n,s);var o=iy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jS=Cn&&"documentMode"in document&&11>=document.documentMode,Si=null,Eh=null,to=null,Th=!1;function sy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Th||Si==null||Si!==Wl(r)||(r=Si,"selectionStart"in r&&hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&So(to,r)||(to=r,r=Jl(Eh,"onSelect"),0<r.length&&(e=new up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},ud={},z0={};Cn&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Xu(t){if(ud[t])return ud[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z0)return ud[t]=e[n];return t}var B0=Xu("animationend"),j0=Xu("animationiteration"),H0=Xu("animationstart"),W0=Xu("transitionend"),q0=new Map,oy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){q0.set(t,e),di(e,[t])}for(var cd=0;cd<oy.length;cd++){var dd=oy[cd],HS=dd.toLowerCase(),WS=dd[0].toUpperCase()+dd.slice(1);Ir(HS,"on"+WS)}Ir(B0,"onAnimationEnd");Ir(j0,"onAnimationIteration");Ir(H0,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(W0,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function ay(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,H_(r,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ay(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ay(i,a,u),s=l}}}if(Gl)throw t=yh,Gl=!1,yh=null,t}function ce(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(K0(e,t,2,!1),n.add(r))}function hd(t,e,n){var r=0;e&&(r|=4),K0(n,t,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[qa]){t[qa]=!0,t0.forEach(function(n){n!=="selectionchange"&&(qS.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,hd("selectionchange",!1,e))}}function K0(t,e,n,r){switch(R0(e)){case 1:var i=oS;break;case 4:i=aS;break;default:i=ap}n=i.bind(null,e,n,t),i=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}y0(function(){var u=s,c=rp(n),d=[];e:{var h=q0.get(t);if(h!==void 0){var p=up,y=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=TS;break;case"focusin":y="focus",p=od;break;case"focusout":y="blur",p=od;break;case"beforeblur":case"afterblur":p=od;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=IS;break;case B0:case j0:case H0:p=fS;break;case W0:p=bS;break;case"scroll":p=lS;break;case"wheel":p=NS;break;case"copy":case"cut":case"paste":p=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xg}var w=(e&4)!==0,k=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,m!==null&&(T=wo(f,m),T!=null&&w.push(Co(f,T,g)))),k)break;f=f.return}0<w.length&&(h=new p(h,y,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ph&&(y=n.relatedTarget||n.fromElement)&&($r(y)||y[bn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?$r(y):null,y!==null&&(k=hi(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(w=Qg,T="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Xg,T="onPointerLeave",m="onPointerEnter",f="pointer"),k=p==null?h:Ci(p),g=y==null?h:Ci(y),h=new w(T,f+"leave",p,n,c),h.target=k,h.relatedTarget=g,T=null,$r(c)===u&&(w=new w(m,f+"enter",y,n,c),w.target=g,w.relatedTarget=k,T=w),k=T,p&&y)t:{for(w=p,m=y,f=0,g=w;g;g=yi(g))f++;for(g=0,T=m;T;T=yi(T))g++;for(;0<f-g;)w=yi(w),f--;for(;0<g-f;)m=yi(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=yi(w),m=yi(m)}w=null}else w=null;p!==null&&ly(d,h,p,w,!1),y!==null&&k!==null&&ly(d,k,y,w,!0)}}e:{if(h=u?Ci(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var _=MS;else if(ey(h))if($0)_=VS;else{_=FS;var I=$S}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=US);if(_&&(_=_(t,u))){M0(d,_,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&uh(h,"number",h.value)}switch(I=u?Ci(u):window,t){case"focusin":(ey(I)||I.contentEditable==="true")&&(Si=I,Eh=u,to=null);break;case"focusout":to=Eh=Si=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,sy(d,n,c);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":sy(d,n,c)}var N;if(dp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _i?O0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(D0&&n.locale!=="ko"&&(_i||R!=="onCompositionStart"?R==="onCompositionEnd"&&_i&&(N=P0()):(Jn=c,lp="value"in Jn?Jn.value:Jn.textContent,_i=!0)),I=Jl(u,R),0<I.length&&(R=new Yg(R,t,null,n,c),d.push({event:R,listeners:I}),N?R.data=N:(N=L0(n),N!==null&&(R.data=N)))),(N=RS?PS(t,n):DS(t,n))&&(u=Jl(u,"onBeforeInput"),0<u.length&&(c=new Yg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}G0(d,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wo(t,n),s!=null&&r.unshift(Co(t,s,i)),s=wo(t,e),s!=null&&r.push(Co(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ly(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wo(n,s),l!=null&&o.unshift(Co(n,l,a))):i||(l=wo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function uy(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(KS,"")}function Ga(t,e,n){if(e=uy(e),uy(t)!==e&&n)throw Error(b(425))}function Zl(){}var _h=null,Sh=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,cy=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof cy<"u"?function(t){return cy.resolve(null).then(t).catch(XS)}:Ch;function XS(t){setTimeout(function(){throw t})}function pd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),To(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),on="__reactFiber$"+gs,bo="__reactProps$"+gs,bn="__reactContainer$"+gs,bh="__reactEvents$"+gs,JS="__reactListeners$"+gs,ZS="__reactHandles$"+gs;function $r(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dy(t);t!==null;){if(n=t[on])return n;t=dy(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[on]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ju(t){return t[bo]||null}var xh=[],bi=-1;function Cr(t){return{current:t}}function fe(t){0>bi||(t.current=xh[bi],xh[bi]=null,bi--)}function ue(t,e){bi++,xh[bi]=t.current,t.current=e}var vr={},dt=Cr(vr),Tt=Cr(!1),Xr=vr;function Ji(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function eu(){fe(Tt),fe(dt)}function hy(t,e,n){if(dt.current!==vr)throw Error(b(168));ue(dt,e),ue(Tt,n)}function Q0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,$_(t)||"Unknown",i));return ke({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Xr=dt.current,ue(dt,t),ue(Tt,Tt.current),!0}function fy(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Q0(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,fe(Tt),fe(dt),ue(dt,t)):fe(Tt),ue(Tt,n)}var yn=null,Zu=!1,md=!1;function Y0(t){yn===null?yn=[t]:yn.push(t)}function e4(t){Zu=!0,Y0(t)}function br(){if(!md&&yn!==null){md=!0;var t=0,e=ae;try{var n=yn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Zu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),E0(ip,br),i}finally{ae=e,md=!1}}return null}var xi=[],Ni=0,nu=null,ru=0,Lt=[],Mt=0,Jr=null,wn=1,kn="";function Or(t,e){xi[Ni++]=ru,xi[Ni++]=nu,nu=t,ru=e}function X0(t,e,n){Lt[Mt++]=wn,Lt[Mt++]=kn,Lt[Mt++]=Jr,Jr=t;var r=wn;t=kn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-Qt(e)+i|n<<i|r,kn=s+t}else wn=1<<s|n<<i|r,kn=t}function fp(t){t.return!==null&&(Or(t,1),X0(t,1,0))}function pp(t){for(;t===nu;)nu=xi[--Ni],xi[Ni]=null,ru=xi[--Ni],xi[Ni]=null;for(;t===Jr;)Jr=Lt[--Mt],Lt[Mt]=null,kn=Lt[--Mt],Lt[Mt]=null,wn=Lt[--Mt],Lt[Mt]=null}var xt=null,Ct=null,ge=!1,Gt=null;function J0(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Ct=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:wn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Ct=null,!0):!1;default:return!1}}function Nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(ge){var e=Ct;if(e){var n=e;if(!py(t,e)){if(Nh(t))throw Error(b(418));e=or(n.nextSibling);var r=xt;e&&py(t,e)?J0(r,n):(t.flags=t.flags&-4097|2,ge=!1,xt=t)}}else{if(Nh(t))throw Error(b(418));t.flags=t.flags&-4097|2,ge=!1,xt=t}}}function my(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Ka(t){if(t!==xt)return!1;if(!ge)return my(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Ct)){if(Nh(t))throw Z0(),Error(b(418));for(;e;)J0(t,e),e=or(e.nextSibling)}if(my(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=xt?or(t.stateNode.nextSibling):null;return!0}function Z0(){for(var t=Ct;t;)t=or(t.nextSibling)}function Zi(){Ct=xt=null,ge=!1}function mp(t){Gt===null?Gt=[t]:Gt.push(t)}var t4=Un.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var iu=Cr(null),su=null,Ai=null,gp=null;function yp(){gp=Ai=su=null}function vp(t){var e=iu.current;fe(iu),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){su=t,gp=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(su===null)throw Error(b(308));Ai=t,su.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Fr=null;function wp(t){Fr===null?Fr=[t]:Fr.push(t)}function e2(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wp(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,wp(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(h=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=ke({},d,h);break e;case 2:qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=d}}function yy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var n2=new e0.Component().refs;function Ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=ur(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Yt(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=ur(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Yt(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=ur(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Yt(e,t,r,n),Cl(e,t,r))}};function vy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function r2(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=_t(e)?Xr:dt.current,r=e.contextTypes,s=(r=r!=null)?Ji(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=n2,kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=_t(e)?Xr:dt.current,i.context=Ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ec.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===n2&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ky(t){var e=t._init;return e(t._payload)}function i2(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=cr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,T){return f===null||f.tag!==6?(f=Td(g,m.mode,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,T){var _=g.type;return _===Ti?c(m,f,g.props.children,T,g.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&ky(_)===f.type)?(T=i(f,g.props),T.ref=Ls(m,f,g),T.return=m,T):(T=Pl(g.type,g.key,g.props,null,m.mode,T),T.ref=Ls(m,f,g),T.return=m,T)}function u(m,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=_d(g,m.mode,T),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,T,_){return f===null||f.tag!==7?(f=Gr(g,m.mode,T,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Td(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fa:return g=Pl(f.type,f.key,f.props,null,m.mode,g),g.ref=Ls(m,null,f),g.return=m,g;case Ei:return f=_d(f,m.mode,g),f.return=m,f;case Wn:var T=f._init;return d(m,T(f._payload),g)}if(zs(f)||As(f))return f=Gr(f,m.mode,g,null),f.return=m,f;Qa(m,f)}return null}function h(m,f,g,T){var _=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(m,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:return g.key===_?l(m,f,g,T):null;case Ei:return g.key===_?u(m,f,g,T):null;case Wn:return _=g._init,h(m,f,_(g._payload),T)}if(zs(g)||As(g))return _!==null?null:c(m,f,g,T,null);Qa(m,g)}return null}function p(m,f,g,T,_){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(g)||null,a(f,m,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Fa:return m=m.get(T.key===null?g:T.key)||null,l(f,m,T,_);case Ei:return m=m.get(T.key===null?g:T.key)||null,u(f,m,T,_);case Wn:var I=T._init;return p(m,f,g,I(T._payload),_)}if(zs(T)||As(T))return m=m.get(g)||null,c(f,m,T,_,null);Qa(f,T)}return null}function y(m,f,g,T){for(var _=null,I=null,N=f,R=f=0,W=null;N!==null&&R<g.length;R++){N.index>R?(W=N,N=null):W=N.sibling;var M=h(m,N,g[R],T);if(M===null){N===null&&(N=W);break}t&&N&&M.alternate===null&&e(m,N),f=s(M,f,R),I===null?_=M:I.sibling=M,I=M,N=W}if(R===g.length)return n(m,N),ge&&Or(m,R),_;if(N===null){for(;R<g.length;R++)N=d(m,g[R],T),N!==null&&(f=s(N,f,R),I===null?_=N:I.sibling=N,I=N);return ge&&Or(m,R),_}for(N=r(m,N);R<g.length;R++)W=p(N,m,R,g[R],T),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?R:W.key),f=s(W,f,R),I===null?_=W:I.sibling=W,I=W);return t&&N.forEach(function(se){return e(m,se)}),ge&&Or(m,R),_}function w(m,f,g,T){var _=As(g);if(typeof _!="function")throw Error(b(150));if(g=_.call(g),g==null)throw Error(b(151));for(var I=_=null,N=f,R=f=0,W=null,M=g.next();N!==null&&!M.done;R++,M=g.next()){N.index>R?(W=N,N=null):W=N.sibling;var se=h(m,N,M.value,T);if(se===null){N===null&&(N=W);break}t&&N&&se.alternate===null&&e(m,N),f=s(se,f,R),I===null?_=se:I.sibling=se,I=se,N=W}if(M.done)return n(m,N),ge&&Or(m,R),_;if(N===null){for(;!M.done;R++,M=g.next())M=d(m,M.value,T),M!==null&&(f=s(M,f,R),I===null?_=M:I.sibling=M,I=M);return ge&&Or(m,R),_}for(N=r(m,N);!M.done;R++,M=g.next())M=p(N,m,R,M.value,T),M!==null&&(t&&M.alternate!==null&&N.delete(M.key===null?R:M.key),f=s(M,f,R),I===null?_=M:I.sibling=M,I=M);return t&&N.forEach(function(P){return e(m,P)}),ge&&Or(m,R),_}function k(m,f,g,T){if(typeof g=="object"&&g!==null&&g.type===Ti&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:e:{for(var _=g.key,I=f;I!==null;){if(I.key===_){if(_=g.type,_===Ti){if(I.tag===7){n(m,I.sibling),f=i(I,g.props.children),f.return=m,m=f;break e}}else if(I.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&ky(_)===I.type){n(m,I.sibling),f=i(I,g.props),f.ref=Ls(m,I,g),f.return=m,m=f;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===Ti?(f=Gr(g.props.children,m.mode,T,g.key),f.return=m,m=f):(T=Pl(g.type,g.key,g.props,null,m.mode,T),T.ref=Ls(m,f,g),T.return=m,m=T)}return o(m);case Ei:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=_d(g,m.mode,T),f.return=m,m=f}return o(m);case Wn:return I=g._init,k(m,f,I(g._payload),T)}if(zs(g))return y(m,f,g,T);if(As(g))return w(m,f,g,T);Qa(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Td(g,m.mode,T),f.return=m,m=f),o(m)):n(m,f)}return k}var es=i2(!0),s2=i2(!1),oa={},dn=Cr(oa),xo=Cr(oa),No=Cr(oa);function Ur(t){if(t===oa)throw Error(b(174));return t}function Ep(t,e){switch(ue(No,e),ue(xo,t),ue(dn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}fe(dn),ue(dn,e)}function ts(){fe(dn),fe(xo),fe(No)}function o2(t){Ur(No.current);var e=Ur(dn.current),n=dh(e,t.type);e!==n&&(ue(xo,t),ue(dn,n))}function Tp(t){xo.current===t&&(fe(dn),fe(xo))}var ve=Cr(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gd=[];function _p(){for(var t=0;t<gd.length;t++)gd[t]._workInProgressVersionPrimary=null;gd.length=0}var bl=Un.ReactCurrentDispatcher,yd=Un.ReactCurrentBatchConfig,Zr=0,we=null,Pe=null,ze=null,lu=!1,no=!1,Ao=0,n4=0;function Ze(){throw Error(b(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Ip(t,e,n,r,i,s){if(Zr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?o4:a4,t=n(r,i),no){s=0;do{if(no=!1,Ao=0,25<=s)throw Error(b(301));s+=1,ze=Pe=null,e.updateQueue=null,bl.current=l4,t=n(r,i)}while(no)}if(bl.current=uu,e=Pe!==null&&Pe.next!==null,Zr=0,ze=Pe=we=null,lu=!1,e)throw Error(b(300));return t}function Cp(){var t=Ao!==0;return Ao=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?we.memoizedState=ze=t:ze=ze.next=t,ze}function Bt(){if(Pe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=ze===null?we.memoizedState:ze.next;if(e!==null)ze=e,Pe=t;else{if(t===null)throw Error(b(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ze===null?we.memoizedState=ze=t:ze=ze.next=t}return ze}function Ro(t,e){return typeof e=="function"?e(t):e}function vd(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Jt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function a2(){}function l2(t,e){var n=we,r=Bt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,bp(d2.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Po(9,c2.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(b(349));Zr&30||u2(n,e,i)}return i}function u2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c2(t,e,n,r){e.value=n,e.getSnapshot=r,h2(e)&&f2(t)}function d2(t,e,n){return n(function(){h2(e)&&f2(t)})}function h2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function f2(t){var e=xn(t,1);e!==null&&Yt(e,t,1,-1)}function Ey(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=s4.bind(null,we,t),[e.memoizedState,t]}function Po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p2(){return Bt().memoizedState}function xl(t,e,n,r){var i=sn();we.flags|=t,i.memoizedState=Po(1|e,n,void 0,r===void 0?null:r)}function tc(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&Sp(r,o.deps)){i.memoizedState=Po(e,n,s,r);return}}we.flags|=t,i.memoizedState=Po(1|e,n,s,r)}function Ty(t,e){return xl(8390656,8,t,e)}function bp(t,e){return tc(2048,8,t,e)}function m2(t,e){return tc(4,2,t,e)}function g2(t,e){return tc(4,4,t,e)}function y2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v2(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,y2.bind(null,e,t),n)}function xp(){}function w2(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k2(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E2(t,e,n){return Zr&21?(Jt(n,e)||(n=S0(),we.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function r4(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{ae=n,yd.transition=r}}function T2(){return Bt().memoizedState}function i4(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_2(t))S2(e,n);else if(n=e2(t,e,n,r),n!==null){var i=gt();Yt(n,t,r,i),I2(n,e,r)}}function s4(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_2(t))S2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Jt(a,o)){var l=e.interleaved;l===null?(i.next=i,wp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=e2(t,e,i,r),n!==null&&(i=gt(),Yt(n,t,r,i),I2(n,e,r))}}function _2(t){var e=t.alternate;return t===we||e!==null&&e===we}function S2(t,e){no=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var uu={readContext:zt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},o4={readContext:zt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Ty,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,y2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=i4.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Ey,useDebugValue:xp,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Ey(!1),e=t[0];return t=r4.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=sn();if(ge){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Be===null)throw Error(b(349));Zr&30||u2(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ty(d2.bind(null,r,s,t),[t]),r.flags|=2048,Po(9,c2.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Be.identifierPrefix;if(ge){var n=kn,r=wn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=n4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a4={readContext:zt,useCallback:w2,useContext:zt,useEffect:bp,useImperativeHandle:v2,useInsertionEffect:m2,useLayoutEffect:g2,useMemo:k2,useReducer:vd,useRef:p2,useState:function(){return vd(Ro)},useDebugValue:xp,useDeferredValue:function(t){var e=Bt();return E2(e,Pe.memoizedState,t)},useTransition:function(){var t=vd(Ro)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:a2,useSyncExternalStore:l2,useId:T2,unstable_isNewReconciler:!1},l4={readContext:zt,useCallback:w2,useContext:zt,useEffect:bp,useImperativeHandle:v2,useInsertionEffect:m2,useLayoutEffect:g2,useMemo:k2,useReducer:wd,useRef:p2,useState:function(){return wd(Ro)},useDebugValue:xp,useDeferredValue:function(t){var e=Bt();return Pe===null?e.memoizedState=t:E2(e,Pe.memoizedState,t)},useTransition:function(){var t=wd(Ro)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:a2,useSyncExternalStore:l2,useId:T2,unstable_isNewReconciler:!1};function ns(t,e){try{var n="",r=e;do n+=M_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var u4=typeof WeakMap=="function"?WeakMap:Map;function C2(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,Hh=r),Oh(t,e)},n}function b2(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new u4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_4.bind(null,t,e,n),e.then(t,t))}function Sy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Iy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var c4=Un.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?s2(e,null,n,r):es(e,t.child,n,r)}function Cy(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Ip(t,e,n,r,s,i),n=Cp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ge&&n&&fp(e),e.flags|=1,pt(t,e,r,i),e.child)}function by(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x2(t,e,s,r,i)):(t=Pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function x2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(So(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Lh(t,e,n,r,i)}function N2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Pi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Pi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Pi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Pi,It),It|=r;return pt(t,e,i,n),e.child}function A2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,i){var s=_t(n)?Xr:dt.current;return s=Ji(e,s),zi(e,i),n=Ip(t,e,n,r,s,i),r=Cp(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ge&&r&&fp(e),e.flags|=1,pt(t,e,n,i),e.child)}function xy(t,e,n,r,i){if(_t(n)){var s=!0;tu(e)}else s=!1;if(zi(e,i),e.stateNode===null)Nl(t,e),r2(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=_t(n)?Xr:dt.current,u=Ji(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wy(e,o,r,u),qn=!1;var h=e.memoizedState;o.state=h,ou(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Tt.current||qn?(typeof c=="function"&&(Ph(e,n,c,r),l=e.memoizedState),(a=qn||vy(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,t2(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=_t(n)?Xr:dt.current,l=Ji(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&wy(e,o,r,l),qn=!1,h=e.memoizedState,o.state=h,ou(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Tt.current||qn?(typeof p=="function"&&(Ph(e,n,p,r),y=e.memoizedState),(u=qn||vy(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){A2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fy(e,n,!1),Nn(t,e,s);r=e.stateNode,c4.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=es(e,t.child,null,s),e.child=es(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&fy(e,n,!0),e.child}function R2(t){var e=t.stateNode;e.pendingContext?hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hy(t,e.context,!1),Ep(t,e.containerInfo)}function Ny(t,e,n,r,i){return Zi(),mp(i),e.flags|=256,pt(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function P2(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ve,i&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=$h,t):Np(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return d4(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Np(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,r){return r!==null&&mp(r),es(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d4(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kd(Error(b(422))),Ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ic({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&es(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=$h,s);if(!(e.mode&1))return Ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=kd(s,r,void 0),Ya(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Yt(r,t,i,-1))}return Lp(),r=kd(Error(b(421))),Ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=S4.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=or(i.nextSibling),xt=e,ge=!0,Gt=null,t!==null&&(Lt[Mt++]=wn,Lt[Mt++]=kn,Lt[Mt++]=Jr,wn=t.id,kn=t.overflow,Jr=e),e=Np(e,r.children),e.flags|=4096,e)}function Ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rh(t.return,e,n)}function Ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function D2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ay(t,n,e);else if(t.tag===19)Ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ed(e,!0,n,null,s);break;case"together":Ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h4(t,e,n){switch(e.tag){case 3:R2(e),Zi();break;case 5:o2(e);break;case 1:_t(e.type)&&tu(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?P2(t,e,n):(ue(ve,ve.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);ue(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return D2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,N2(t,e,n)}return Nn(t,e,n)}var O2,Uh,L2,M2;O2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uh=function(){};L2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(dn.current);var s=null;switch(n){case"input":i=ah(t,i),r=ah(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=ch(t,i),r=ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}hh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};M2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function f4(t,e,n){var r=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return _t(e.type)&&eu(),et(e),null;case 3:return r=e.stateNode,ts(),fe(Tt),fe(dt),_p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Gh(Gt),Gt=null))),Uh(t,e),et(e),null;case 5:Tp(e);var i=Ur(No.current);if(n=e.type,t!==null&&e.stateNode!=null)L2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return et(e),null}if(t=Ur(dn.current),Ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[bo]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)ce(js[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Ug(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":zg(r,s),ce("invalid",r)}hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,a,t),i=["children",""+a]):yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ua(r),Vg(r,s,!0);break;case"textarea":Ua(r),Bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[bo]=r,O2(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)ce(js[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Ug(t,r),i=ah(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ce("invalid",t);break;case"textarea":zg(t,r),i=ch(t,r),ce("invalid",t);break;default:i=r}hh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?h0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&Zf(t,s,l,o))}switch(n){case"input":Ua(t),Vg(t,r,!1);break;case"textarea":Ua(t),Bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)M2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Ur(No.current),Ur(dn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return et(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Ct!==null&&e.mode&1&&!(e.flags&128))Z0(),Zi(),e.flags|=98560,s=!1;else if(s=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[on]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Gt!==null&&(Gh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?De===0&&(De=3):Lp())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ts(),Uh(t,e),t===null&&Io(e.stateNode.containerInfo),et(e),null;case 10:return vp(e.type._context),et(e),null;case 17:return _t(e.type)&&eu(),et(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>rs&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return et(e),null}else 2*Ce()-s.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ve.current,ue(ve,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function p4(t,e){switch(pp(e),e.tag){case 1:return _t(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ts(),fe(Tt),fe(dt),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return ts(),null;case 10:return vp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Xa=!1,rt=!1,m4=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Vh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Ry=!1;function g4(t,e){if(_h=Yl,t=V0(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},Yl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Wt(e.type,w),k);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(T){Te(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Ry,Ry=!1,y}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vh(e,n,s)}i=i.next}while(i!==r)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $2(t){var e=t.alternate;e!==null&&(t.alternate=null,$2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[bo],delete e[bh],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F2(t){return t.tag===5||t.tag===3||t.tag===4}function Py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}var Ge=null,qt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)U2(t,e,n),n=n.sibling}function U2(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:rt||Ri(n,e);case 6:var r=Ge,i=qt;Ge=null,Bn(t,e,n),Ge=r,qt=i,Ge!==null&&(qt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(qt?(t=Ge,n=n.stateNode,t.nodeType===8?pd(t.parentNode,n):t.nodeType===1&&pd(t,n),To(t)):pd(Ge,n.stateNode));break;case 4:r=Ge,i=qt,Ge=n.stateNode.containerInfo,qt=!0,Bn(t,e,n),Ge=r,qt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!rt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Bn(t,e,n),rt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Dy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new m4),e.forEach(function(r){var i=I4.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,qt=!1;break e;case 3:Ge=a.stateNode.containerInfo,qt=!0;break e;case 4:Ge=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(Ge===null)throw Error(b(160));U2(s,o,i),Ge=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V2(e,t),e=e.sibling}function V2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),rn(t),r&4){try{ro(3,t,t.return),nc(3,t)}catch(w){Te(t,t.return,w)}try{ro(5,t,t.return)}catch(w){Te(t,t.return,w)}}break;case 1:Ht(e,t),rn(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Ht(e,t),rn(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{vo(i,"")}catch(w){Te(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a0(i,s),fh(a,o);var u=fh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?h0(i,d):c==="dangerouslySetInnerHTML"?c0(i,d):c==="children"?vo(i,d):Zf(i,c,d,u)}switch(a){case"input":lh(i,s);break;case"textarea":l0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$i(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[bo]=s}catch(w){Te(t,t.return,w)}}break;case 6:if(Ht(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Te(t,t.return,w)}}break;case 3:if(Ht(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(w){Te(t,t.return,w)}break;case 4:Ht(e,t),rn(t);break;case 13:Ht(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pp=Ce())),r&4&&Dy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(u=rt)||c,Ht(e,t),rt=u):Ht(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(h=O,p=h.child,h.tag){case 0:case 11:case 14:case 15:ro(4,h,h.return);break;case 1:Ri(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Te(r,n,w)}}break;case 5:Ri(h,h.return);break;case 22:if(h.memoizedState!==null){Ly(d);continue}}p!==null?(p.return=h,O=p):Ly(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d0("display",o))}catch(w){Te(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Te(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ht(e,t),rn(t),r&4&&Dy(t);break;case 21:break;default:Ht(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F2(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var s=Py(t);jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Py(t);Bh(t,a,o);break;default:throw Error(b(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function y4(t,e,n){O=t,z2(t)}function z2(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=Xa;var u=rt;if(Xa=o,(rt=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?My(i):l!==null?(l.return=o,O=l):My(i);for(;s!==null;)O=s,z2(s),s=s.sibling;O=i,Xa=a,rt=u}Oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Oy(t)}}function Oy(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&To(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}rt||e.flags&512&&zh(e)}catch(h){Te(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Ly(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function My(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{zh(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{zh(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var v4=Math.ceil,cu=Un.ReactCurrentDispatcher,Ap=Un.ReactCurrentOwner,Ut=Un.ReactCurrentBatchConfig,ne=0,Be=null,Ne=null,Ye=0,It=0,Pi=Cr(0),De=0,Do=null,ei=0,rc=0,Rp=0,io=null,wt=null,Pp=0,rs=1/0,gn=null,du=!1,Hh=null,lr=null,Ja=!1,Zn=null,hu=0,so=0,Wh=null,Al=-1,Rl=0;function gt(){return ne&6?Ce():Al!==-1?Al:Al=Ce()}function ur(t){return t.mode&1?ne&2&&Ye!==0?Ye&-Ye:t4.transition!==null?(Rl===0&&(Rl=S0()),Rl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:R0(t.type)),t):1}function Yt(t,e,n,r){if(50<so)throw so=0,Wh=null,Error(b(185));ra(t,n,r),(!(ne&2)||t!==Be)&&(t===Be&&(!(ne&2)&&(rc|=n),De===4&&Kn(t,Ye)),St(t,r),n===1&&ne===0&&!(e.mode&1)&&(rs=Ce()+500,Zu&&br()))}function St(t,e){var n=t.callbackNode;tS(t,e);var r=Ql(t,t===Be?Ye:0);if(r===0)n!==null&&Wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wg(n),e===1)t.tag===0?e4($y.bind(null,t)):Y0($y.bind(null,t)),YS(function(){!(ne&6)&&br()}),n=null;else{switch(I0(r)){case 1:n=ip;break;case 4:n=T0;break;case 16:n=Kl;break;case 536870912:n=_0;break;default:n=Kl}n=Q2(n,B2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B2(t,e){if(Al=-1,Rl=0,ne&6)throw Error(b(327));var n=t.callbackNode;if(Bi()&&t.callbackNode!==n)return null;var r=Ql(t,t===Be?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=ne;ne|=2;var s=H2();(Be!==t||Ye!==e)&&(gn=null,rs=Ce()+500,qr(t,e));do try{E4();break}catch(a){j2(t,a)}while(1);yp(),cu.current=s,ne=i,Ne!==null?e=0:(Be=null,Ye=0,e=De)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=qh(t,i))),e===1)throw n=Do,qr(t,0),Kn(t,r),St(t,Ce()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!w4(i)&&(e=fu(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=qh(t,s))),e===1))throw n=Do,qr(t,0),Kn(t,r),St(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Lr(t,wt,gn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Pp+500-Ce(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ch(Lr.bind(null,t,wt,gn),e);break}Lr(t,wt,gn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v4(r/1960))-r,10<r){t.timeoutHandle=Ch(Lr.bind(null,t,wt,gn),r);break}Lr(t,wt,gn);break;case 5:Lr(t,wt,gn);break;default:throw Error(b(329))}}}return St(t,Ce()),t.callbackNode===n?B2.bind(null,t):null}function qh(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=wt,wt=n,e!==null&&Gh(e)),t}function Gh(t){wt===null?wt=t:wt.push.apply(wt,t)}function w4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Rp,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function $y(t){if(ne&6)throw Error(b(327));Bi();var e=Ql(t,0);if(!(e&1))return St(t,Ce()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=qh(t,r))}if(n===1)throw n=Do,qr(t,0),Kn(t,e),St(t,Ce()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,wt,gn),St(t,Ce()),null}function Dp(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(rs=Ce()+500,Zu&&br())}}function ti(t){Zn!==null&&Zn.tag===0&&!(ne&6)&&Bi();var e=ne;ne|=1;var n=Ut.transition,r=ae;try{if(Ut.transition=null,ae=1,t)return t()}finally{ae=r,Ut.transition=n,ne=e,!(ne&6)&&br()}}function Op(){It=Pi.current,fe(Pi)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:ts(),fe(Tt),fe(dt),_p();break;case 5:Tp(r);break;case 4:ts();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:vp(r.type._context);break;case 22:case 23:Op()}n=n.return}if(Be=t,Ne=t=cr(t.current,null),Ye=It=e,De=0,Do=null,Rp=rc=ei=0,wt=io=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function j2(t,e){do{var n=Ne;try{if(yp(),bl.current=uu,lu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(Zr=0,ze=Pe=we=null,no=!1,Ao=0,Ap.current=null,n===null||n.return===null){De=1,Do=e,Ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Sy(o);if(p!==null){p.flags&=-257,Iy(p,o,a,s,e),p.mode&1&&_y(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){_y(s,u,e),Lp();break e}l=Error(b(426))}}else if(ge&&a.mode&1){var k=Sy(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Iy(k,o,a,s,e),mp(ns(l,a));break e}}s=l=ns(l,a),De!==4&&(De=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=C2(s,l,e);gy(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(lr===null||!lr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=b2(s,a,e);gy(s,T);break e}}s=s.return}while(s!==null)}q2(n)}catch(_){e=_,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function H2(){var t=cu.current;return cu.current=uu,t===null?uu:t}function Lp(){(De===0||De===3||De===2)&&(De=4),Be===null||!(ei&268435455)&&!(rc&268435455)||Kn(Be,Ye)}function fu(t,e){var n=ne;ne|=2;var r=H2();(Be!==t||Ye!==e)&&(gn=null,qr(t,e));do try{k4();break}catch(i){j2(t,i)}while(1);if(yp(),ne=n,cu.current=r,Ne!==null)throw Error(b(261));return Be=null,Ye=0,De}function k4(){for(;Ne!==null;)W2(Ne)}function E4(){for(;Ne!==null&&!q_();)W2(Ne)}function W2(t){var e=K2(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?q2(t):Ne=e,Ap.current=null}function q2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=p4(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ne=null;return}}else if(n=f4(n,e,It),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);De===0&&(De=5)}function Lr(t,e,n){var r=ae,i=Ut.transition;try{Ut.transition=null,ae=1,T4(t,e,n,r)}finally{Ut.transition=i,ae=r}return null}function T4(t,e,n,r){do Bi();while(Zn!==null);if(ne&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nS(t,s),t===Be&&(Ne=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,Q2(Kl,function(){return Bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=ae;ae=1;var a=ne;ne|=4,Ap.current=null,g4(t,n),V2(n,t),BS(Sh),Yl=!!_h,Sh=_h=null,t.current=n,y4(n),G_(),ne=a,ae=o,Ut.transition=s}else t.current=n;if(Ja&&(Ja=!1,Zn=t,hu=i),s=t.pendingLanes,s===0&&(lr=null),Y_(n.stateNode),St(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=Hh,Hh=null,t;return hu&1&&t.tag!==0&&Bi(),s=t.pendingLanes,s&1?t===Wh?so++:(so=0,Wh=t):so=0,br(),null}function Bi(){if(Zn!==null){var t=I0(hu),e=Ut.transition,n=ae;try{if(Ut.transition=null,ae=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,hu=0,ne&6)throw Error(b(331));var i=ne;for(ne|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:ro(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var h=c.sibling,p=c.return;if($2(c),c===u){O=null;break}if(h!==null){h.return=p,O=h;break}O=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(_){Te(a,a.return,_)}if(a===o){O=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,O=T;break e}O=a.return}}if(ne=i,br(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{ae=n,Ut.transition=e}}return!1}function Fy(t,e,n){e=ns(n,e),e=C2(t,e,1),t=ar(t,e,1),e=gt(),t!==null&&(ra(t,1,e),St(t,e))}function Te(t,e,n){if(t.tag===3)Fy(t,t,n);else for(;e!==null;){if(e.tag===3){Fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ns(n,t),t=b2(e,t,1),e=ar(e,t,1),t=gt(),e!==null&&(ra(e,1,t),St(e,t));break}}e=e.return}}function _4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ye&n)===n&&(De===4||De===3&&(Ye&130023424)===Ye&&500>Ce()-Pp?qr(t,0):Rp|=n),St(t,e)}function G2(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=gt();t=xn(t,e),t!==null&&(ra(t,e,n),St(t,n))}function S4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G2(t,n)}function I4(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),G2(t,n)}var K2;K2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,h4(t,e,n);Et=!!(t.flags&131072)}else Et=!1,ge&&e.flags&1048576&&X0(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=Ji(e,dt.current);zi(e,n),i=Ip(null,e,r,t,i,n);var s=Cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kp(e),i.updater=ec,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&fp(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=b4(r),t=Wt(r,t),i){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=xy(null,e,r,t,n);break e;case 11:e=Cy(null,e,r,t,n);break e;case 14:e=by(null,e,r,Wt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Lh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),xy(t,e,r,i,n);case 3:e:{if(R2(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,t2(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ns(Error(b(423)),e),e=Ny(t,e,r,n,i);break e}else if(r!==i){i=ns(Error(b(424)),e),e=Ny(t,e,r,n,i);break e}else for(Ct=or(e.stateNode.containerInfo.firstChild),xt=e,ge=!0,Gt=null,n=s2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===i){e=Nn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return o2(e),t===null&&Ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),A2(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return P2(t,e,n);case 4:return Ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=es(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Cy(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(iu,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=In(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=zt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),by(t,e,r,i,n);case 15:return x2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Nl(t,e),e.tag=1,_t(r)?(t=!0,tu(e)):t=!1,zi(e,n),r2(e,r,i),Dh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return D2(t,e,n);case 22:return N2(t,e,n)}throw Error(b(156,e.tag))};function Q2(t,e){return E0(t,e)}function C4(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new C4(t,e,n,r)}function Mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b4(t){if(typeof t=="function")return Mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Gr(n.children,i,s,e);case ep:o=8,i|=8;break;case rh:return t=Ft(12,n,e,i|2),t.elementType=rh,t.lanes=s,t;case ih:return t=Ft(13,n,e,i),t.elementType=ih,t.lanes=s,t;case sh:return t=Ft(19,n,e,i),t.elementType=sh,t.lanes=s,t;case i0:return ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n0:o=10;break e;case r0:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case Wn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function ic(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=i0,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function _d(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rd(0),this.expirationTimes=rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,r,i,s,o,a,l){return t=new x4(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function N4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y2(t){if(!t)return vr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(_t(n))return Q0(t,n,e)}return e}function X2(t,e,n,r,i,s,o,a,l){return t=$p(n,r,!0,t,i,s,o,a,l),t.context=Y2(null),n=t.current,r=gt(),i=ur(n),s=In(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,ra(t,i,r),St(t,r),t}function sc(t,e,n,r){var i=e.current,s=gt(),o=ur(i);return n=Y2(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Yt(t,i,o,s),Cl(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){Uy(t,e),(t=t.alternate)&&Uy(t,e)}function A4(){return null}var J2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}oc.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));sc(t,e,null,null)};oc.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){sc(null,t,null,null)}),e[bn]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&A0(t)}};function Vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vy(){}function R4(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pu(o);s.call(u)}}var o=X2(e,r,t,0,null,!1,!1,"",Vy);return t._reactRootContainer=o,t[bn]=o.current,Io(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=pu(l);a.call(u)}}var l=$p(t,0,!1,null,null,!1,!1,"",Vy);return t._reactRootContainer=l,t[bn]=l.current,Io(t.nodeType===8?t.parentNode:t),ti(function(){sc(e,l,n,r)}),l}function lc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=pu(o);a.call(l)}}sc(e,o,t,i)}else o=R4(n,e,t,i,r);return pu(o)}C0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(sp(e,n|1),St(e,Ce()),!(ne&6)&&(rs=Ce()+500,br()))}break;case 13:ti(function(){var r=xn(t,1);if(r!==null){var i=gt();Yt(r,t,1,i)}}),Fp(t,1)}};op=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=gt();Yt(e,t,134217728,n)}Fp(t,134217728)}};b0=function(t){if(t.tag===13){var e=ur(t),n=xn(t,e);if(n!==null){var r=gt();Yt(n,t,e,r)}Fp(t,e)}};x0=function(){return ae};N0=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ju(r);if(!i)throw Error(b(90));o0(r),lh(r,i)}}}break;case"textarea":l0(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};m0=Dp;g0=ti;var P4={usingClientEntryPoint:!1,Events:[sa,Ci,Ju,f0,p0,Dp]},$s={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},D4={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||A4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Ku=Za.inject(D4),cn=Za}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P4;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(e))throw Error(b(200));return N4(t,e,null,n)};Pt.createRoot=function(t,e){if(!Vp(t))throw Error(b(299));var n=!1,r="",i=J2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,Io(t.nodeType===8?t.parentNode:t),new Up(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=w0(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return ti(t)};Pt.hydrate=function(t,e,n){if(!ac(e))throw Error(b(200));return lc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Vp(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X2(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new oc(e)};Pt.render=function(t,e,n){if(!ac(e))throw Error(b(200));return lc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!ac(t))throw Error(b(40));return t._reactRootContainer?(ti(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Dp;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ac(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return lc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(A_);var zy=eh;Zd.createRoot=zy.createRoot,Zd.hydrateRoot=zy.hydrateRoot;const O4="/Complex-todolist/assets/Djangocircle-a147d8ac.png";var el,L4=new Uint8Array(16);function M4(){if(!el&&(el=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!el))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return el(L4)}const $4=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function F4(t){return typeof t=="string"&&$4.test(t)}var qe=[];for(var Sd=0;Sd<256;++Sd)qe.push((Sd+256).toString(16).substr(1));function U4(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(qe[t[e+0]]+qe[t[e+1]]+qe[t[e+2]]+qe[t[e+3]]+"-"+qe[t[e+4]]+qe[t[e+5]]+"-"+qe[t[e+6]]+qe[t[e+7]]+"-"+qe[t[e+8]]+qe[t[e+9]]+"-"+qe[t[e+10]]+qe[t[e+11]]+qe[t[e+12]]+qe[t[e+13]]+qe[t[e+14]]+qe[t[e+15]]).toLowerCase();if(!F4(n))throw TypeError("Stringified UUID is invalid");return n}function uc(t,e,n){t=t||{};var r=t.random||(t.rng||M4)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return U4(r)}/**
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
 */const Z2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},V4=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V4(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new z4;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B4=function(t){const e=Z2(t);return ew.encodeByteArray(e,!0)},mu=function(t){return B4(t).replace(/\./g,"")},tw=function(t){try{return ew.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H4=()=>j4().__FIREBASE_DEFAULTS__,W4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q4=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tw(t[1]);return e&&JSON.parse(e)},zp=()=>{try{return H4()||W4()||q4()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nw=t=>{var e,n;return(n=(e=zp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},G4=t=>{const e=nw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K4=()=>{var t;return(t=zp())===null||t===void 0?void 0:t.config},rw=t=>{var e;return(e=zp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Q4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Y4(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function J4(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tI(){try{return typeof indexedDB=="object"}catch{return!1}}function nI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const rI="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rI,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,r)}}function iI(t,e){return t.replace(sI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sI=/\{\$([^}]+)}/g;function oI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(By(s)&&By(o)){if(!gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function By(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aI(t,e){const n=new lI(t,e);return n.subscribe.bind(n)}class lI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Id),i.error===void 0&&(i.error=Id),i.complete===void 0&&(i.complete=Id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class cI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Q4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dI(t){return t===Mr?void 0:t}function hI(t){return t.instantiationMode==="EAGER"}/**
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
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const pI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},mI=re.INFO,gI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},yI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bp{constructor(e){this.name=e,this._logLevel=mI,this._logHandler=yI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const vI=(t,e)=>e.some(n=>t instanceof n);let jy,Hy;function wI(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return Hy||(Hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iw=new WeakMap,Kh=new WeakMap,sw=new WeakMap,Cd=new WeakMap,jp=new WeakMap;function EI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iw.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function TI(t){if(Kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kh.set(t,e)}let Qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _I(t){Qh=t(Qh)}function SI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bd(this),e,...n);return sw.set(r,e.sort?e.sort():[e]),dr(r)}:kI().includes(t)?function(...e){return t.apply(bd(this),e),dr(iw.get(this))}:function(...e){return dr(t.apply(bd(this),e))}}function II(t){return typeof t=="function"?SI(t):(t instanceof IDBTransaction&&TI(t),vI(t,wI())?new Proxy(t,Qh):t)}function dr(t){if(t instanceof IDBRequest)return EI(t);if(Cd.has(t))return Cd.get(t);const e=II(t);return e!==t&&(Cd.set(t,e),jp.set(e,t)),e}const bd=t=>jp.get(t);function CI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bI=["get","getKey","getAll","getAllKeys","count"],xI=["put","add","delete","clear"],xd=new Map;function Wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xd.set(e,s),s}_I(t=>({...t,get:(e,n,r)=>Wy(e,n)||t.get(e,n,r),has:(e,n)=>!!Wy(e,n)||t.has(e,n)}));/**
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
 */class NI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",qy="0.9.9";/**
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
 */const ri=new Bp("@firebase/app"),RI="@firebase/app-compat",PI="@firebase/analytics-compat",DI="@firebase/analytics",OI="@firebase/app-check-compat",LI="@firebase/app-check",MI="@firebase/auth",$I="@firebase/auth-compat",FI="@firebase/database",UI="@firebase/database-compat",VI="@firebase/functions",zI="@firebase/functions-compat",BI="@firebase/installations",jI="@firebase/installations-compat",HI="@firebase/messaging",WI="@firebase/messaging-compat",qI="@firebase/performance",GI="@firebase/performance-compat",KI="@firebase/remote-config",QI="@firebase/remote-config-compat",YI="@firebase/storage",XI="@firebase/storage-compat",JI="@firebase/firestore",ZI="@firebase/firestore-compat",e3="firebase",t3="9.21.0";/**
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
 */const Xh="[DEFAULT]",n3={[Yh]:"fire-core",[RI]:"fire-core-compat",[DI]:"fire-analytics",[PI]:"fire-analytics-compat",[LI]:"fire-app-check",[OI]:"fire-app-check-compat",[MI]:"fire-auth",[$I]:"fire-auth-compat",[FI]:"fire-rtdb",[UI]:"fire-rtdb-compat",[VI]:"fire-fn",[zI]:"fire-fn-compat",[BI]:"fire-iid",[jI]:"fire-iid-compat",[HI]:"fire-fcm",[WI]:"fire-fcm-compat",[qI]:"fire-perf",[GI]:"fire-perf-compat",[KI]:"fire-rc",[QI]:"fire-rc-compat",[YI]:"fire-gcs",[XI]:"fire-gcs-compat",[JI]:"fire-fst",[ZI]:"fire-fst-compat","fire-js":"fire-js",[e3]:"fire-js-all"};/**
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
 */const yu=new Map,Jh=new Map;function r3(t,e){try{t.container.addComponent(e)}catch(n){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Jh.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of yu.values())r3(n,t);return!0}function Hp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const i3={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hr=new aa("app","Firebase",i3);/**
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
 */class s3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=t3;function ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=K4()),!n)throw hr.create("no-options");const s=yu.get(i);if(s){if(gu(n,s.options)&&gu(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new fI(i);for(const l of Jh.values())o.addComponent(l);const a=new s3(n,r,o);return yu.set(i,a),a}function aw(t=Xh){const e=yu.get(t);if(!e&&t===Xh)return ow();if(!e)throw hr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=n3[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(a.join(" "));return}is(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const o3="firebase-heartbeat-database",a3=1,Oo="firebase-heartbeat-store";let Nd=null;function lw(){return Nd||(Nd=CI(o3,a3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oo)}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Nd}async function l3(t){try{return(await lw()).transaction(Oo).objectStore(Oo).get(uw(t))}catch(e){if(e instanceof Vn)ri.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ri.warn(n.message)}}}async function Gy(t,e){try{const r=(await lw()).transaction(Oo,"readwrite");return await r.objectStore(Oo).put(e,uw(t)),r.done}catch(n){if(n instanceof Vn)ri.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ri.warn(r.message)}}}function uw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u3=1024,c3=30*24*60*60*1e3;class d3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ky();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=c3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ky(),{heartbeatsToSend:n,unsentEntries:r}=h3(this._heartbeatsCache.heartbeats),i=mu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ky(){return new Date().toISOString().substring(0,10)}function h3(t,e=u3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tI()?nI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await l3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qy(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function p3(t){is(new ni("platform-logger",e=>new NI(e),"PRIVATE")),is(new ni("heartbeat",e=>new d3(e),"PRIVATE")),fr(Yh,qy,t),fr(Yh,qy,"esm2017"),fr("fire-js","")}p3("");var m3="firebase",g3="9.21.0";/**
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
 */fr(m3,g3,"app");function Wp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y3=cw,dw=new aa("auth","Firebase",cw());/**
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
 */const vu=new Bp("@firebase/auth");function v3(t,...e){vu.logLevel<=re.WARN&&vu.warn(`Auth (${ys}): ${t}`,...e)}function Dl(t,...e){vu.logLevel<=re.ERROR&&vu.error(`Auth (${ys}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw qp(t,...e)}function hn(t,...e){return qp(t,...e)}function hw(t,e,n){const r=Object.assign(Object.assign({},y3()),{[e]:n});return new aa("auth","Firebase",r).create(e,{appName:t.name})}function w3(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),hw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dw.create(t,...e)}function z(t,e,...n){if(!t)throw qp(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function An(t,e){t||En(e)}/**
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
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function k3(){return Yy()==="http:"||Yy()==="https:"}function Yy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function E3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k3()||J4()||"connection"in navigator)?navigator.onLine:!0}function T3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=X4()||Z4()}get(){return E3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gp(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S3=new ua(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return pw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=la(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fw.fetch()(mw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_3),e);try{const i=new I3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw tl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hw(t,c,u);jt(t,c)}}catch(i){if(i instanceof Vn)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}class I3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),S3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function C3(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function b3(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x3(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Kp(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oo(Ad(i.auth_time)),issuedAtTime:oo(Ad(i.iat)),expirationTime:oo(Ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ad(t){return Number(t)*1e3}function Kp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=tw(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function N3(t){const e=Kp(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&A3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class R3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lo(t,b3(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?O3(s.providerUserInfo):[],a=D3(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function P3(t){const e=je(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function O3(t){return t.map(e=>{var{providerId:n}=e,r=Wp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function L3(t,e){const n=await pw(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await L3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function jn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x3(this,e)}reload(){return P3(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lo(this,C3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:_,providerData:I,stsTokenManager:N}=n;z(g&&N,e,"internal-error");const R=Mo.fromJSON(this.name,N);z(typeof g=="string",e,"internal-error"),jn(d,e.name),jn(h,e.name),z(typeof T=="boolean",e,"internal-error"),z(typeof _=="boolean",e,"internal-error"),jn(p,e.name),jn(y,e.name),jn(w,e.name),jn(k,e.name),jn(m,e.name),jn(f,e.name);const W=new Kr({uid:g,auth:e,email:h,emailVerified:T,displayName:d,isAnonymous:_,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:R,createdAt:m,lastLoginAt:f});return I&&Array.isArray(I)&&(W.providerData=I.map(M=>Object.assign({},M))),k&&(W._redirectEventId=k),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wu(s),s}}/**
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
 */const Xy=new Map;function Tn(t){An(t instanceof Function,"Expected a class definition");let e=Xy.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xy.set(t,e),e)}/**
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
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yw.type="NONE";const Jy=yw;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Tn(Jy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tn(Jy);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Kr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function Zy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tw(e))return"Blackberry";if(_w(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||ww(e))&&!e.includes("edge/"))return"Chrome";if(Ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vw(t=ht()){return/firefox\//i.test(t)}function Qp(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ww(t=ht()){return/crios\//i.test(t)}function kw(t=ht()){return/iemobile/i.test(t)}function Ew(t=ht()){return/android/i.test(t)}function Tw(t=ht()){return/blackberry/i.test(t)}function _w(t=ht()){return/webos/i.test(t)}function cc(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function M3(t=ht()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $3(){return eI()&&document.documentMode===10}function Sw(t=ht()){return cc(t)||Ew(t)||_w(t)||Tw(t)||/windows phone/i.test(t)||kw(t)}function F3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=Zy(ht());break;case"Worker":n=`${Zy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}async function Cw(t,e){return ws(t,"GET","/v2/recaptchaConfig",vs(t,e))}function ev(t){return t!==void 0&&t.enterprise!==void 0}class bw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function U3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",U3().appendChild(r)})}function V3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const z3="https://www.google.com/recaptcha/enterprise.js?render=",B3="recaptcha-enterprise",j3="NO_RECAPTCHA";class Nw{constructor(e){this.type=B3,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Cw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ev(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(j3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ev(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xw(z3+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ku(t,e,n,r=!1){const i=new Nw(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class H3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class W3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tv(this),this.idTokenSubscription=new tv(this),this.beforeStateQueue=new H3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await Cw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Nw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return je(t)}class tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=aI(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function q3(t,e){const n=Hp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gu(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function G3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K3(t,e,n){const r=xr(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Aw(e),{host:o,port:a}=Q3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y3()}function Aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q3(t){const e=Aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nv(o)}}}function nv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function X3(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Rd(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}/**
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
 */async function J3(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function Z3(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
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
 */class $o extends Yp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ku(e,r,"signInWithPassword");return Rd(e,i)}else return Rd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ku(e,r,"signInWithPassword");return Rd(e,s)}else return Promise.reject(i)});case"emailLink":return J3(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return X3(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Z3(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hi(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
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
 */const eC="http://localhost";class ii extends Yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:eC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */function tC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nC(t){const e=Hs(Ws(t)).link,n=e?Hs(Ws(e)).deep_link_id:null,r=Hs(Ws(t)).deep_link_id;return(r?Hs(Ws(r)).link:null)||r||n||e||t}class Xp{constructor(e){var n,r,i,s,o,a;const l=Hs(Ws(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tC((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nC(e);try{return new Xp(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xp.parseLink(n);return z(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends Jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends da{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Yn extends da{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Xn extends da{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function Ll(t,e){return ca(t,"POST","/v1/accounts:signUp",vs(t,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=rv(r);return new Rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rv(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function rC(t){var e;const n=xr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ll(n,{returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Eu extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eu(e,n,r,i)}}function Rw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,r):s})}async function iC(t,e,n=!1){const r=await Lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}/**
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
 */async function sC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Lo(t,Rw(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Kp(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function Pw(t,e,n=!1){const r="signIn",i=await Rw(t,r,e),s=await Rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oC(t,e){return Pw(xr(t),e)}async function aC(t,e,n){var r;const i=xr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ku(i,s,"signUpPassword");o=Ll(i,u)}else o=Ll(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ku(i,s,"signUpPassword");return Ll(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Rn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function lC(t,e,n){return oC(je(t),ks.credential(e,n))}function uC(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function cC(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function dC(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function hC(t){return je(t).signOut()}const Tu="__sak";/**
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
 */class Dw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fC(){const t=ht();return Qp(t)||cc(t)}const pC=1e3,mC=10;class Ow extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fC()&&F3(),this.fallbackToPolling=Sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const gC=Ow;/**
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
 */class Lw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lw.type="SESSION";const Mw=Lw;/**
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
 */function yC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function Zp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Zp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function wC(t){fn().location.href=t}/**
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
 */function $w(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function kC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TC(){return $w()?self:null}/**
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
 */const Fw="firebaseLocalStorageDb",_C=1,_u="firebaseLocalStorage",Uw="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([_u],e?"readwrite":"readonly").objectStore(_u)}function SC(){const t=indexedDB.deleteDatabase(Fw);return new ha(t).toPromise()}function ef(){const t=indexedDB.open(Fw,_C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_u,{keyPath:Uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_u)?e(r):(r.close(),await SC(),e(await ef()))})})}async function iv(t,e,n){const r=hc(t,!0).put({[Uw]:e,value:n});return new ha(r).toPromise()}async function IC(t,e){const n=hc(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function sv(t,e){const n=hc(t,!0).delete(e);return new ha(n).toPromise()}const CC=800,bC=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $w()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(TC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new vC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await iv(e,Tu,"1"),await sv(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hc(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const xC=Vw;new ua(3e4,6e4);/**
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
 */function zw(t,e){return e?Tn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class em extends Yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NC(t){return Pw(t.auth,new em(t),t.bypassAuthState)}function AC(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),sC(n,new em(t),t.bypassAuthState)}async function RC(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),iC(n,new em(t),t.bypassAuthState)}/**
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
 */class Bw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NC;case"linkViaPopup":case"linkViaRedirect":return RC;case"reauthViaPopup":case"reauthViaRedirect":return AC;default:jt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PC=new ua(2e3,1e4);async function DC(t,e,n){const r=xr(t);w3(t,e,Jp);const i=zw(r,n);return new Vr(r,"signInViaPopup",e,i).executeNotNull()}class Vr extends Bw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PC.get())};e()}}Vr.currentPopupAction=null;/**
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
 */const OC="pendingRedirect",Ml=new Map;class LC extends Bw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await MC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MC(t,e){const n=UC(e),r=FC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $C(t,e){Ml.set(t._key(),e)}function FC(t){return Tn(t._redirectPersistence)}function UC(t){return Ol(OC,t.config.apiKey,t.name)}async function VC(t,e,n=!1){const r=xr(t),i=zw(r,e),o=await new LC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zC=10*60*1e3;class BC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ov(e))}saveEventToCache(e){this.cachedEventUids.add(ov(e)),this.lastProcessedEventTime=Date.now()}}function ov(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(t);default:return!1}}/**
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
 */async function HC(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const WC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qC=/^https?/;async function GC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HC(t);for(const n of e)try{if(KC(n))return}catch{}jt(t,"unauthorized-domain")}function KC(t){const e=Zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qC.test(n))return!1;if(WC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QC=new ua(3e4,6e4);function av(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YC(t){return new Promise((e,n)=>{var r,i,s;function o(){av(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{av(),n(hn(t,"network-request-failed"))},timeout:QC.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const a=V3("iframefcb");return fn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},xw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function XC(t){return $l=$l||YC(t),$l}/**
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
 */const JC=new ua(5e3,15e3),ZC="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rb(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,eb):`https://${t.config.authDomain}/${ZC}`,r={apiKey:e.apiKey,appName:t.name,v:ys},i=nb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function ib(t){const e=await XC(t),n=fn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:rb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=fn().setTimeout(()=>{s(o)},JC.get());function l(){fn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ob=500,ab=600,lb="_blank",ub="http://localhost";class lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cb(t,e,n,r=ob,i=ab){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=ww(u)?lb:n),vw(u)&&(e=e||ub,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(M3(u)&&a!=="_self")return db(e||"",a),new lv(null);const d=window.open(e||"",a,c);z(d,t,"popup-blocked");try{d.focus()}catch{}return new lv(d)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hb="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function uv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:i};if(e instanceof Jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof da){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${mb(t)}?${la(a).slice(1)}${u}`}function mb({config:t}){return t.emulator?Gp(t,fb):`https://${t.authDomain}/${hb}`}/**
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
 */const Pd="webStorageSupport";class gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=VC,this._overrideRedirectResult=$C}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await uv(e,n,r,Zh(),i);return cb(e,o,Zp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await uv(e,n,r,Zh(),i);return wC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ib(e),r=new BC(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pd,{type:Pd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pd];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sw()||Qp()||cc()}}const yb=gb;var cv="@firebase/auth",dv="0.23.1";/**
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
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kb(t){is(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),z(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},u=new W3(r,i,s,l);return G3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new ni("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(cv,dv,wb(t)),fr(cv,dv,"esm2017")}/**
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
 */const Eb=5*60,Tb=rw("authIdTokenMaxAge")||Eb;let hv=null;const _b=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tb)return;const i=n==null?void 0:n.token;hv!==i&&(hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sb(t=aw()){const e=Hp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q3(t,{popupRedirectResolver:yb,persistence:[xC,gC,Mw]}),r=rw("authTokenSyncURL");if(r){const s=_b(r);cC(n,s,()=>s(n.currentUser)),uC(n,o=>s(o))}const i=nw("auth");return i&&K3(n,`http://${i}`),n}kb("Browser");var Ib=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,tm=tm||{},H=Ib||self;function Su(){}function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Cb(t){return Object.prototype.hasOwnProperty.call(t,Dd)&&t[Dd]||(t[Dd]=++bb)}var Dd="closure_uid_"+(1e9*Math.random()>>>0),bb=0;function xb(t,e,n){return t.call.apply(t.bind,arguments)}function Nb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=xb:ot=Nb,ot.apply(null,arguments)}function nl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var Ab=0;Nr.prototype.s=!1;Nr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Ab!=0)&&Cb(this)};Nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function fv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Rb=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Su,e),H.removeEventListener("test",Su,e)}catch{}return t}();function Iu(t){return/^[\s\xa0]*$/.test(t)}var pv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Od(t,e){return t<e?-1:t>e?1:0}function pc(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return pc().indexOf(t)!=-1}function rm(t){return rm[" "](t),t}rm[" "]=Su;function Ww(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Pb=an("Opera"),ss=an("Trident")||an("MSIE"),qw=an("Edge"),tf=qw||ss,Gw=an("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),Db=pc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function Kw(){var t=H.document;return t?t.documentMode:void 0}var Cu;e:{var Ld="",Md=function(){var t=pc();if(Gw)return/rv:([^\);]+)(\)|;)/.exec(t);if(qw)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Db)return/WebKit\/(\S+)/.exec(t);if(Pb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Md&&(Ld=Md?Md[1]:""),ss){var $d=Kw();if($d!=null&&$d>parseFloat(Ld)){Cu=String($d);break e}}Cu=Ld}var Ob={};function Lb(){return Ww(Ob,9,function(){let t=0;const e=pv(String(Cu)).split("."),n=pv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Od(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Od(i[2].length==0,s[2].length==0)||Od(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var nf;if(H.document&&ss){var mv=Kw();nf=mv||parseInt(Cu,10)||void 0}else nf=void 0;var Mb=nf;function Fo(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gw){e:{try{rm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$b[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fo.$.h.call(this)}}We(Fo,at);var $b={2:"touch",3:"pen",4:"mouse"};Fo.prototype.h=function(){Fo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pa="closure_listenable_"+(1e6*Math.random()|0),Fb=0;function Ub(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Fb,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function im(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Qw(t){const e={};for(const n in t)e[n]=t[n];return e}const gv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<gv.length;s++)n=gv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ub(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function rf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Hw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var sm="closure_lm_"+(1e6*Math.random()|0),Fd={};function Xw(t,e,n,r,i){if(r&&r.once)return Zw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xw(t,e[s],n,r,i);return null}return n=lm(n),t&&t[pa]?t.O(e,n,fa(r)?!!r.capture:!!r,i):Jw(t,e,n,!1,r,i)}function Jw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fa(i)?!!i.capture:!!i,a=am(t);if(a||(t[sm]=a=new gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Vb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Rb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vb(){function t(n){return e.call(t.src,t.listener,n)}const e=zb;return t}function Zw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zw(t,e[s],n,r,i);return null}return n=lm(n),t&&t[pa]?t.P(e,n,fa(r)?!!r.capture:!!r,i):Jw(t,e,n,!0,r,i)}function ek(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ek(t,e[s],n,r,i);else r=fa(r)?!!r.capture:!!r,n=lm(n),t&&t[pa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sf(s,n,r,i),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=am(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sf(e,n,r,i)),(n=-1<t?e[t]:null)&&om(n))}function om(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pa])rf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=am(e))?(rf(n,t),n.h==0&&(n.src=null,e[sm]=null)):mc(t)}}}function tk(t){return t in Fd?Fd[t]:Fd[t]="on"+t}function zb(t,e){if(t.fa)t=!0;else{e=new Fo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&om(t),t=n.call(r,e)}return t}function am(t){return t=t[sm],t instanceof gc?t:null}var Ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function lm(t){return typeof t=="function"?t:(t[Ud]||(t[Ud]=function(e){return t.handleEvent(e)}),t[Ud])}function He(){Nr.call(this),this.i=new gc(this),this.S=this,this.J=null}We(He,Nr);He.prototype[pa]=!0;He.prototype.removeEventListener=function(t,e,n,r){ek(this,t,e,n,r)};function Xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),Yw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rl(o,r,!0,e)&&i}if(o=e.g=t,i=rl(o,r,!0,e)&&i,i=rl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rl(o,r,!1,e)&&i}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var um=H.JSON.stringify;function Bb(){var t=ik;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jb{constructor(){this.h=this.g=null}add(e,n){const r=nk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Hb,t=>t.reset());class Hb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wb(t){H.setTimeout(()=>{throw t},0)}function rk(t,e){of||qb(),af||(of(),af=!0),ik.add(t,e)}var of;function qb(){var t=H.Promise.resolve(void 0);of=function(){t.then(Gb)}}var af=!1,ik=new jb;function Gb(){for(var t;t=Bb();){try{t.h.call(t.g)}catch(n){Wb(n)}var e=nk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}af=!1}function yc(t,e){He.call(this),this.h=t||1,this.g=e||H,this.j=ot(this.qb,this),this.l=Date.now()}We(yc,He);A=yc.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xe(this,"tick"),this.ga&&(cm(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){yc.$.N.call(this),cm(this),delete this.g};function dm(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function sk(t){t.g=dm(()=>{t.g=null,t.i&&(t.i=!1,sk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Kb extends Nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sk(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Nr.call(this),this.h=t,this.g={}}We(Uo,Nr);var yv=[];function ok(t,e,n,r){Array.isArray(n)||(n&&(yv[0]=n.toString()),n=yv);for(var i=0;i<n.length;i++){var s=Xw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ak(t){im(t.g,function(e,n){this.g.hasOwnProperty(n)&&om(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),ak(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Ea=function(){this.g=!1};function Qb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Yb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jb(t,n)+(r?" "+r:"")})}function Xb(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function Jb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return um(n)}catch{return e}}var fi={},vv=null;function wc(){return vv=vv||new He}fi.Ta="serverreachability";function lk(t){at.call(this,fi.Ta,t)}We(lk,at);function Vo(t){const e=wc();Xe(e,new lk(e))}fi.STAT_EVENT="statevent";function uk(t,e){at.call(this,fi.STAT_EVENT,t),this.stat=e}We(uk,at);function mt(t){const e=wc();Xe(e,new uk(e,t))}fi.Ua="timingevent";function ck(t,e){at.call(this,fi.Ua,t),this.size=e}We(ck,at);function ma(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var kc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},dk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hm(){}hm.prototype.h=null;function wv(t){return t.h||(t.h=t.i())}function hk(){}var ga={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fm(){at.call(this,"d")}We(fm,at);function pm(){at.call(this,"c")}We(pm,at);var lf;function Ec(){}We(Ec,hm);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};lf=new Ec;function ya(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=Zb,t=tf?125:void 0,this.V=new yc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new fk}function fk(){this.i=null,this.g="",this.h=!1}var Zb=45e3,uf={},bu={};A=ya.prototype;A.setTimeout=function(t){this.P=t};function cf(t,e,n){t.L=1,t.v=_c(Pn(e)),t.s=n,t.S=!0,pk(t,null)}function pk(t,e){t.G=Date.now(),va(t),t.A=Pn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Tk(n.i,"t",r),t.C=0,n=t.l.I,t.h=new fk,t.g=jk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Kb(ot(t.Pa,t,t.g),t.O)),ok(t.U,t.g,"readystatechange",t.nb),e=t.I?Qw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vo(),Qb(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||tf||this.g&&(this.h.h||this.g.ja()||_v(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Vo(3):Vo(2)),Tc(this);var n=this.g.da();this.aa=n;t:if(mk(this)){var r=_v(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),ao(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Yb(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Iu(a)){var u=a;break t}}u=null}if(n=u)Di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,df(this,n);else{this.i=!1,this.o=3,mt(12),zr(this),ao(this);break e}}this.S?(gk(this,c,o),tf&&this.i&&c==3&&(ok(this.U,this.V,"tick",this.mb),this.V.start())):(Di(this.j,this.m,o,null),df(this,o)),c==4&&zr(this),this.i&&!this.J&&(c==4?Uk(this.l,this):(this.i=!1,va(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),zr(this),ao(this)}}}catch{}finally{}};function mk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function gk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=e6(t,n),i==bu){e==4&&(t.o=4,mt(14),r=!1),Di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uf){t.o=4,mt(15),Di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Di(t.j,t.m,i,null),df(t,i);mk(t)&&i!=bu&&i!=uf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Em(e),e.L=!0,mt(11))):(Di(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),ao(t))}A.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(Tc(this),gk(this,t,e),this.i&&t!=4&&va(this))}};function e6(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bu:(n=Number(e.substring(n,r)),isNaN(n)?uf:(r+=1,r+n>e.length?bu:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.J=!0,zr(this)};function va(t){t.Y=Date.now()+t.P,yk(t,t.P)}function yk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ma(ot(t.lb,t),e)}function Tc(t){t.B&&(H.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Xb(this.j,this.A),this.L!=2&&(Vo(),mt(17)),zr(this),this.o=2,ao(this)):yk(this,this.Y-t)};function ao(t){t.l.H==0||t.J||Uk(t.l,t)}function zr(t){Tc(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,cm(t.V),ak(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function df(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hf(n.h,t))){if(!t.K&&hf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Au(n),Cc(n);else break e;km(n),mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=ma(ot(n.ib,n),6e3));if(1>=Ik(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Br(n,11)}else if((t.K||n.g==t)&&Au(n),!Iu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const d=u[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mm(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,ye(r.G,r.F,w))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Bk(r,r.I?r.oa:null,r.Y),o.K){Ck(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Tc(a),va(a)),r.g=o}else $k(r);0<n.i.length&&bc(n)}else u[0]!="stop"&&u[0]!="close"||Br(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Br(n,7):wm(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Vo(4)}catch{}}function t6(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function n6(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=n6(t),r=t6(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var wk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r6(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qr){this.h=e!==void 0?e:t.h,xu(this,t.j),this.s=t.s,this.g=t.g,Nu(this,t.m),this.l=t.l,e=t.i;var n=new zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kv(this,n),this.o=t.o}else t&&(n=String(t).match(wk))?(this.h=!!e,xu(this,n[1]||"",!0),this.s=qs(n[2]||""),this.g=qs(n[3]||"",!0),Nu(this,n[4]),this.l=qs(n[5]||"",!0),kv(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.h=!!e,this.i=new zo(null,this.h))}Qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gs(e,Ev,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gs(e,Ev,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gs(n,n.charAt(0)=="/"?o6:s6,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gs(n,l6)),t.join("")};function Pn(t){return new Qr(t)}function xu(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kv(t,e,n){e instanceof zo?(t.i=e,u6(t.i,t.h)):(n||(e=Gs(e,a6)),t.i=new zo(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function _c(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,i6),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function i6(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ev=/[#\/\?@]/g,s6=/[#\?:]/g,o6=/[#\?]/g,a6=/[#\?@]/g,l6=/#/g;function zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ar(t){t.g||(t.g=new Map,t.h=0,t.i&&r6(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=zo.prototype;A.add=function(t,e){Ar(this),this.i=null,t=Es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kk(t,e){Ar(t),e=Es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ek(t,e){return Ar(t),e=Es(t,e),t.g.has(e)}A.forEach=function(t,e){Ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.sa=function(){Ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Ar(this);let e=[];if(typeof t=="string")Ek(this,t)&&(e=e.concat(this.g.get(Es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Ar(this),this.i=null,t=Es(this,t),Ek(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Tk(t,e,n){kk(t,e),0<n.length&&(t.i=null,t.g.set(Es(t,e),nm(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function u6(t,e){e&&!t.j&&(Ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(kk(this,r),Tk(this,i,n))},t)),t.j=e}var c6=class{constructor(t,e){this.h=t,this.g=e}};function _k(t){this.l=t||d6,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var d6=10;function Sk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ik(t){return t.h?1:t.g?t.g.size:0}function hf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mm(t,e){t.g?t.g.add(e):t.h=e}function Ck(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_k.prototype.cancel=function(){if(this.i=bk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bk(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nm(t.i)}function gm(){}gm.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};gm.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function h6(){this.g=new gm}function f6(t,e,n){const r=n||"";try{vk(t,function(i,s){let o=i;fa(i)&&(o=um(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function p6(t,e){const n=new vc;if(H.Image){const r=new Image;r.onload=nl(il,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nl(il,n,r,"TestLoadImage: error",!1,e),r.onabort=nl(il,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nl(il,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function il(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wa(t){this.l=t.fc||null,this.j=t.ob||!1}We(wa,hm);wa.prototype.g=function(){return new Sc(this.l,this.j)};wa.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ym,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Sc,He);var ym=0;A=Sc.prototype;A.open=function(t,e){if(this.readyState!=ym)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bo(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ka(this)),this.readyState=ym};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xk(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xk(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ka(this):Bo(this),this.readyState==3&&xk(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,ka(this))};A.Ya=function(t){this.g&&(this.response=t,ka(this))};A.ka=function(){this.g&&ka(this)};function ka(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bo(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var m6=H.JSON.parse;function Se(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nk,this.L=this.M=!1}We(Se,He);var Nk="",g6=/^https?$/i,y6=["POST","PUT"];A=Se.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lf.g(),this.C=this.u?wv(this.u):wv(lf),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Tv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=Hw(y6,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pk(this),0<this.B&&((this.L=v6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=dm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Tv(this,s)}};function v6(t){return ss&&Lb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof tm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Tv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ak(t),Ic(t)}function Ak(t){t.F||(t.F=!0,Xe(t,"complete"),Xe(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),Ic(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),Se.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Rk(this):this.kb())};A.kb=function(){Rk(this)};function Rk(t){if(t.h&&typeof tm<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)dm(t.La,0,t);else if(Xe(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(wk)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!g6.test(i?i.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Ak(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){Pk(t);const n=t.g,r=t.C[0]?Su:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),m6(e)}};function _v(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dk(t){let e="";return im(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ok(t){this.Ga=0,this.i=[],this.j=new vc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fs("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fs("baseRetryDelayMs",5e3,t),this.hb=Fs("retryDelaySeedMs",1e4,t),this.eb=Fs("forwardChannelMaxRetries",2,t),this.xa=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new _k(t&&t.concurrentRequestLimit),this.Ja=new h6,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}A=Ok.prototype;A.qa=8;A.H=1;function wm(t){if(Lk(t),t.H==3){var e=t.W++,n=Pn(t.G);ye(n,"SID",t.J),ye(n,"RID",e),ye(n,"TYPE","terminate"),Ea(t,n),e=new ya(t,t.j,e,void 0),e.L=2,e.v=_c(Pn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=jk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),va(e)}zk(t)}function Cc(t){t.g&&(Em(t),t.g.cancel(),t.g=null)}function Lk(t){Cc(t),t.u&&(H.clearTimeout(t.u),t.u=null),Au(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function bc(t){Sk(t.h)||t.m||(t.m=!0,rk(t.Na,t),t.C=0)}function w6(t,e){return Ik(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ma(ot(t.Na,t,e),Vk(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ya(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Qw(s),Yw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mk(this,i,e),n=Pn(this.G),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Ea(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Dk(s)))+"&"+e:this.o&&vm(n,this.o,s)),mm(this.h,i),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),i.ba=!0,cf(i,n,null)):cf(i,n,e),this.H=2}}else this.H==3&&(t?Sv(this,t):this.i.length==0||Sk(this.h)||Sv(this))};function Sv(t,e){var n;e?n=e.m:n=t.W++;const r=Pn(t.G);ye(r,"SID",t.J),ye(r,"RID",n),ye(r,"AID",t.V),Ea(t,r),t.o&&t.s&&vm(r,t.o,t.s),n=new ya(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Mk(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mm(t.h,n),cf(n,r,e)}function Ea(t,e){t.ma&&im(t.ma,function(n,r){ye(e,r,n)}),t.l&&vk({},function(n,r){ye(e,r,n)})}function Mk(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ot(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{f6(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function $k(t){t.g||t.u||(t.ba=1,rk(t.Ma,t),t.A=0)}function km(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ma(ot(t.Ma,t),Vk(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,Fk(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=ma(ot(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,mt(10),Cc(this),Fk(this))};function Em(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Fk(t){t.g=new ya(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Pn(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.J),ye(e,"CI",t.M?"0":"1"),ye(e,"AID",t.V),ye(e,"TYPE","xmlhttp"),Ea(t,e),t.o&&t.s&&vm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=_c(Pn(e)),n.s=null,n.S=!0,pk(n,t)}A.ib=function(){this.v!=null&&(this.v=null,Cc(this),km(this),mt(19))};function Au(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Uk(t,e){var n=null;if(t.g==e){Au(t),Em(t),t.g=null;var r=2}else if(hf(t.h,e))n=e.F,Ck(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=wc(),Xe(r,new ck(r,n)),bc(t)}else $k(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&w6(t,e)||r==2&&km(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Br(t,5);break;case 4:Br(t,10);break;case 3:Br(t,6);break;default:Br(t,2)}}}function Vk(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Br(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ot(t.pb,t);n||(n=new Qr("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||xu(n,"https"),_c(n)),p6(n.toString(),r)}else mt(2);t.H=0,t.l&&t.l.za(e),zk(t),Lk(t)}A.pb=function(t){t?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function zk(t){if(t.H=0,t.pa=[],t.l){const e=bk(t.h);(e.length!=0||t.i.length!=0)&&(fv(t.pa,e),fv(t.pa,t.i),t.h.i.length=0,nm(t.i),t.i.length=0),t.l.ya()}}function Bk(t,e,n){var r=n instanceof Qr?Pn(n):new Qr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Nu(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qr(null,void 0);r&&xu(s,r),e&&(s.g=e),i&&Nu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ye(r,n,e),ye(r,"VER",t.qa),Ea(t,r),r}function jk(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new wa({ob:!0})):new Se(t.va),e.Oa(t.I),e}function Hk(){}A=Hk.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.Va=function(){};function Ru(){if(ss&&!(10<=Number(Mb)))throw Error("Environmental error: no available transport.")}Ru.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){He.call(this),this.g=new Ok(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Iu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Iu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ts(this)}We(Rt,He);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Bk(t,null,t.Y),bc(t)};Rt.prototype.close=function(){wm(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=um(t),t=n);e.i.push(new c6(e.fb++,t)),e.H==3&&bc(e)};Rt.prototype.N=function(){this.g.l=null,delete this.j,wm(this.g),delete this.g,Rt.$.N.call(this)};function Wk(t){fm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Wk,fm);function qk(){pm.call(this),this.status=1}We(qk,pm);function Ts(t){this.g=t}We(Ts,Hk);Ts.prototype.Ba=function(){Xe(this.g,"a")};Ts.prototype.Aa=function(t){Xe(this.g,new Wk(t))};Ts.prototype.za=function(t){Xe(this.g,new qk)};Ts.prototype.ya=function(){Xe(this.g,"b")};function k6(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(Zt,k6);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vd(this,r),i=0;break}}this.h=i,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function le(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var E6={};function Tm(t){return-128<=t&&128>t?Ww(E6,t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function ln(t){if(isNaN(t)||!isFinite(t))return Wi;if(0>t)return Qe(ln(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ff;return new le(e,0)}function Gk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(Gk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(e,8)),r=Wi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ln(Math.pow(e,s)),r=r.R(s).add(ln(o))):(r=r.R(n),r=r.add(ln(o)))}return r}var ff=4294967296,Wi=Tm(0),pf=Tm(1),Iv=Tm(16777216);A=le.prototype;A.ea=function(){if($t(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ff+r)*e,e*=ff}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if($t(this))return"-"+Qe(this).toString(t);for(var e=ln(Math.pow(t,6)),n=this,r="";;){var i=Du(n,e).g;n=Pu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Sn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $t(t){return t.h==-1}A.X=function(t){return t=Pu(this,t),$t(t)?-1:Sn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new le(n,~t.h).add(pf)}A.abs=function(){return $t(this)?Qe(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new le(n,n[n.length-1]&-2147483648?-1:0)};function Pu(t,e){return t.add(Qe(e))}A.R=function(t){if(Sn(this)||Sn(t))return Wi;if($t(this))return $t(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if($t(t))return Qe(this.R(Qe(t)));if(0>this.X(Iv)&&0>t.X(Iv))return ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,sl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,sl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,sl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,sl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new le(n,0)};function sl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Us(t,e){this.g=t,this.h=e}function Du(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new Us(Wi,Wi);if($t(t))return e=Du(Qe(t),e),new Us(Qe(e.g),Qe(e.h));if($t(e))return e=Du(t,Qe(e)),new Us(Qe(e.g),e.h);if(30<t.g.length){if($t(t)||$t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pf,r=e;0>=r.X(t);)n=Cv(n),r=Cv(r);var i=vi(n,1),s=vi(r,1);for(r=vi(r,2),n=vi(n,2);!Sn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=vi(r,1),n=vi(n,1)}return e=Pu(t,i.R(e)),new Us(i,e)}for(i=Wi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ln(n),o=s.R(e);$t(o)||0<o.X(t);)n-=r,s=ln(n),o=s.R(e);Sn(s)&&(s=pf),i=i.add(s),t=Pu(t,o)}return new Us(i,t)}A.gb=function(t){return Du(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new le(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new le(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new le(n,this.h^t.h)};function Cv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new le(n,t.h)}function vi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new le(i,t.h)}Ru.prototype.createWebChannel=Ru.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;kc.NO_ERROR=0;kc.TIMEOUT=8;kc.HTTP_ERROR=6;dk.COMPLETE="complete";hk.EventType=ga;ga.OPEN="a";ga.CLOSE="b";ga.ERROR="c";ga.MESSAGE="d";He.prototype.listen=He.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=ln;le.fromString=Gk;var T6=function(){return new Ru},_6=function(){return wc()},zd=kc,S6=dk,I6=fi,bv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},C6=wa,ol=hk,b6=Se,x6=Zt,qi=le;const xv="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let _s="9.21.0";/**
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
 */const si=new Bp("@firebase/firestore");function Nv(){return si.logLevel}function U(t,...e){if(si.logLevel<=re.DEBUG){const n=e.map(_m);si.debug(`Firestore (${_s}): ${t}`,...n)}}function Dn(t,...e){if(si.logLevel<=re.ERROR){const n=e.map(_m);si.error(`Firestore (${_s}): ${t}`,...n)}}function os(t,...e){if(si.logLevel<=re.WARN){const n=e.map(_m);si.warn(`Firestore (${_s}): ${t}`,...n)}}function _m(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function me(t,e){t||B()}function G(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Kk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class A6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R6{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Kk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new nt(e)}}class P6{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class D6{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new P6(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.T=n.token,new O6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function M6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=M6(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Oe(0,0))}static max(){return new q(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends jo{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const $6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends jo{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return $6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(he.fromString(e))}static fromName(e){return new V(he.fromString(e).popFirst(5))}static empty(){return new V(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new he(e.slice()))}}function F6(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new wr(i,V.empty(),e)}function U6(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(q.min(),V.empty(),-1)}static max(){return new wr(q.max(),V.empty(),-1)}}function V6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const z6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ta(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==z6)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _a(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Sm.ct=-1;function xc(t){return t==null}function Ou(t){return t===0&&1/t==-1/0}function j6(t){return typeof t=="number"&&Number.isInteger(t)&&!Ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new al(this.root,e,this.comparator,!1)}getReverseIterator(){return new al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new al(this.root,e,this.comparator,!0)}}class al{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rv(this.data.getIterator())}getIteratorFrom(e){return new Rv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Rv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new bt([])}unionWith(e){let n=new lt(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Xk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xk("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const H6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(me(!!t),typeof t=="string"){let e=0;const n=H6.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cm(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?Cm(e):e}function Ho(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class W6{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ll={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:q6(t)?9007199254740991:10:B()}function mn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return oi(r.bytesValue).isEqual(oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return xe(r.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(r.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return xe(r.integerValue)===xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=xe(r.doubleValue),o=xe(i.doubleValue);return s===o?Ou(s)===Ou(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Av(s)!==Av(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!mn(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function qo(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=xe(i.integerValue||i.doubleValue),a=xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(Ho(t),Ho(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,s){const o=oi(i),a=oi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ie(o[l],a[l]);if(u!==0)return u}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ie(xe(i.latitude),xe(s.latitude));return o!==0?o:ie(xe(i.longitude),xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ls(o[l],a[l]);if(u)return u}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ll.mapValue&&s===ll.mapValue)return 0;if(i===ll.mapValue)return 1;if(s===ll.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=ie(a[c],u[c]);if(d!==0)return d;const h=ls(o[a[c]],l[u[c]]);if(h!==0)return h}return ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=kr(t),r=kr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function us(t){return mf(t)}function mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mf(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function Dv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gf(t){return!!t&&"integerValue"in t}function bm(t){return!!t&&"arrayValue"in t}function Ov(t){return!!t&&"nullValue"in t}function Lv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=lo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(lo(this.value))}}function Jk(t){const e=[];return pi(t.fields,(n,r)=>{const i=new st([n]);if(Fl(r)){const s=Jk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
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
 */class it{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new it(e,0,q.min(),q.min(),q.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,q.min(),q.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,q.min(),q.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lu{constructor(e,n){this.position=e,this.inclusive=n}}function Mv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $v(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uo{constructor(e,n="asc"){this.field=e,this.dir=n}}function G6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zk{}class Ae extends Zk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Q6(e,n,r):n==="array-contains"?new J6(e,r):n==="in"?new Z6(e,r):n==="not-in"?new ex(e,r):n==="array-contains-any"?new tx(e,r):new Ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Y6(e,r):new X6(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class en extends Zk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new en(e,n)}matches(e){return eE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function eE(t){return t.op==="and"}function tE(t){return K6(t)&&eE(t)}function K6(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function yf(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+us(t.value);if(tE(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function nE(t,e){return t instanceof Ae?function(n,r){return r instanceof Ae&&n.op===r.op&&n.field.isEqual(r.field)&&mn(n.value,r.value)}(t,e):t instanceof en?function(n,r){return r instanceof en&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&nE(s,r.filters[o]),!0):!1}(t,e):void B()}function rE(t){return t instanceof Ae?function(e){return`${e.field.canonicalString()} ${e.op} ${us(e.value)}`}(t):t instanceof en?function(e){return e.op.toString()+" {"+e.getFilters().map(rE).join(" ,")+"}"}(t):"Filter"}class Q6 extends Ae{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class Y6 extends Ae{constructor(e,n){super(e,"in",n),this.keys=iE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X6 extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=iE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class J6 extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bm(n)&&qo(n.arrayValue,this.value)}}class Z6 extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qo(this.value.arrayValue,n)}}class ex extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qo(this.value.arrayValue,n)}}class tx extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qo(this.value.arrayValue,r))}}/**
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
 */class nx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Fv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nx(t,e,n,r,i,s,o)}function xm(t){const e=G(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.ft=n}return e.ft}function Nm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!G6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$v(t.startAt,e.startAt)&&$v(t.endAt,e.endAt)}function vf(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Sa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function rx(t,e,n,r,i,s,o,a){return new Sa(t,e,n,r,i,s,o,a)}function sE(t){return new Sa(t)}function Uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Am(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function aE(t){return t.collectionGroup!==null}function Gi(t){const e=G(t);if(e.dt===null){e.dt=[];const n=Am(e),r=oE(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new uo(n)),e.dt.push(new uo(st.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new uo(st.keyField(),s))}}}return e.dt}function On(t){const e=G(t);if(!e._t)if(e.limitType==="F")e._t=Fv(e.path,e.collectionGroup,Gi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Gi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new uo(s.field,o))}const r=e.endAt?new Lu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lu(e.startAt.position,e.startAt.inclusive):null;e._t=Fv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function wf(t,e){e.getFirstInequalityField(),Am(t);const n=t.filters.concat([e]);return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kf(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return Nm(On(t),On(e))&&t.limitType===e.limitType}function lE(t){return`${xm(On(t))}|lt:${t.limitType}`}function Ef(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>rE(r)).join(", ")}]`),xc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Gi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Mv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Gi(n),r)||n.endAt&&!function(i,s,o){const a=Mv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Gi(n),r))}(t,e)}function ix(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uE(t){return(e,n)=>{let r=!1;for(const i of Gi(t)){const s=sx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sx(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ls(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Yk(this.inner)}size(){return this.innerSize}}/**
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
 */const ox=new Ee(V.comparator);function Ln(){return ox}const cE=new Ee(V.comparator);function Ks(...t){let e=cE;for(const n of t)e=e.insert(n.key,n);return e}function dE(t){let e=cE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return co()}function hE(){return co()}function co(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const ax=new Ee(V.comparator),lx=new lt(V.comparator);function J(...t){let e=lx;for(const n of t)e=e.add(n);return e}const ux=new lt(ie);function cx(){return ux}/**
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
 */function fE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function pE(t){return{integerValue:""+t}}function dx(t,e){return j6(e)?pE(e):fE(t,e)}/**
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
 */class Rc{constructor(){this._=void 0}}function hx(t,e,n){return t instanceof Mu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Im(i)&&(i=Cm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Go?gE(t,e):t instanceof Ko?yE(t,e):function(r,i){const s=mE(r,i),o=Vv(s)+Vv(r.wt);return gf(s)&&gf(r.wt)?pE(o):fE(r.serializer,o)}(t,e)}function fx(t,e,n){return t instanceof Go?gE(t,e):t instanceof Ko?yE(t,e):n}function mE(t,e){return t instanceof $u?gf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Mu extends Rc{}class Go extends Rc{constructor(e){super(),this.elements=e}}function gE(t,e){const n=vE(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Rc{constructor(e){super(),this.elements=e}}function yE(t,e){let n=vE(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class $u extends Rc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Vv(t){return xe(t.integerValue||t.doubleValue)}function vE(t){return bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function px(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Go&&r instanceof Go||n instanceof Ko&&r instanceof Ko?as(n.elements,r.elements,mn):n instanceof $u&&r instanceof $u?mn(n.wt,r.wt):n instanceof Mu&&r instanceof Mu}(t.transform,e.transform)}class mx{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pc{}function wE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rm(t.key,Xt.none()):new Ia(t.key,t.data,Xt.none());{const n=t.data,r=kt.empty();let i=new lt(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new bt(i.toArray()),Xt.none())}}function gx(t,e,n){t instanceof Ia?function(r,i,s){const o=r.value.clone(),a=Bv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(r,i,s){if(!Ul(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Bv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(kE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof Ia?function(i,s,o,a){if(!Ul(i.precondition,s))return o;const l=i.value.clone(),u=jv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,s,o,a){if(!Ul(i.precondition,s))return o;const l=jv(i.fieldTransforms,a,s),u=s.data;return u.setAll(kE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ul(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function yx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mE(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function zv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&as(n,r,(i,s)=>px(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ia extends Pc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends Pc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fx(o,a,n[i]))}return r}function jv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hx(s,o,e))}return r}class Rm extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vx extends Pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=wE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>zv(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>zv(n,r))}}class Pm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=ax;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pm(e,n,r,i)}}/**
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
 */class kx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var be,ee;function Tx(t){switch(t){default:return B();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function EE(t){if(t===void 0)return Dn("GRPC error has no .code"),S.UNKNOWN;switch(t){case be.OK:return S.OK;case be.CANCELLED:return S.CANCELLED;case be.UNKNOWN:return S.UNKNOWN;case be.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case be.INTERNAL:return S.INTERNAL;case be.UNAVAILABLE:return S.UNAVAILABLE;case be.UNAUTHENTICATED:return S.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case be.NOT_FOUND:return S.NOT_FOUND;case be.ALREADY_EXISTS:return S.ALREADY_EXISTS;case be.PERMISSION_DENIED:return S.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case be.ABORTED:return S.ABORTED;case be.OUT_OF_RANGE:return S.OUT_OF_RANGE;case be.UNIMPLEMENTED:return S.UNIMPLEMENTED;case be.DATA_LOSS:return S.DATA_LOSS;default:return B()}}(ee=be||(be={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Dm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ul}static getOrCreateInstance(){return ul===null&&(ul=new Dm),ul}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ul=null;/**
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
 */function _x(){return new TextEncoder}/**
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
 */const Sx=new qi([4294967295,4294967295],0);function Hv(t){const e=_x().encode(t),n=new x6;return n.update(e),new Uint8Array(n.digest())}function Wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class Om{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=qi.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(Sx)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Hv(e),[r,i]=Wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Om(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Hv(e),[r,i]=Wv(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(q.min(),i,new Ee(ie),Ln(),J())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,J(),J(),J())}}/**
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
 */class Vl{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class TE{constructor(e,n){this.targetId=e,this.bt=n}}class _E{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qv{constructor(){this.Vt=0,this.St=Kv(),this.Dt=ft.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=J(),n=J(),r=J();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Ca(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Kv()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Ix{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Ln(),this.jt=Gv(),this.zt=new Ee(ie)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(vf(o))if(i===0){const a=new V(o.path);this.Jt(r,a,it.newNoDocument(a,q.min()))}else me(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Dm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,p,y,w,k,m;const f={localCacheCount:c,existenceFilterCount:d.count},g=d.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(h=g==null?void 0:g.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(w=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&w!==void 0?w:0,padding:(m=(k=g==null?void 0:g.bits)===null||k===void 0?void 0:k.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=oi(s).toUint8Array()}catch(c){if(c instanceof Xk)return os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Om(l,o,a)}catch(c){return os(c instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&vf(a.target)){const l=new V(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,it.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=J();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.zt,this.Qt,r);return this.Qt=Ln(),this.jt=Gv(),this.zt=new Ee(ie),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new qv,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new lt(ie),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new qv),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Gv(){return new Ee(V.comparator)}function Kv(){return new Ee(V.comparator)}const Cx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xx=(()=>({and:"AND",or:"OR"}))();class Nx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tf(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function Fu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ax(t,e){return Fu(t,e.toTimestamp())}function pn(t){return me(!!t),q.fromTimestamp(function(e){const n=kr(e);return new Oe(n.seconds,n.nanos)}(t))}function Lm(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function IE(t){const e=he.fromString(t);return me(NE(e)),e}function _f(t,e){return Lm(t.databaseId,e.path)}function Bd(t,e){const n=IE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(CE(n))}function Sf(t,e){return Lm(t.databaseId,e)}function Rx(t){const e=IE(t);return e.length===4?he.emptyPath():CE(e)}function If(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CE(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qv(t,e,n){return{name:_f(t,e),fields:n.value.mapValue.fields}}function Px(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(me(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:EE(l.code);return new $(u,l.message||"")}(o);n=new _E(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bd(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):q.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Vl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bd(t,r.document),s=r.readTime?pn(r.readTime):q.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bd(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ex(i,s),a=r.targetId;n=new TE(a,o)}}return n}function Dx(t,e){let n;if(e instanceof Ia)n={update:Qv(t,e.key,e.value)};else if(e instanceof Rm)n={delete:_f(t,e.key)};else if(e instanceof Rr)n={update:Qv(t,e.key,e.data),updateMask:Bx(e.fieldMask)};else{if(!(e instanceof vx))return B();n={verify:_f(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Mu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Go)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ko)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $u)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Ax(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function Ox(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?pn(r.updateTime):pn(i);return s.isEqual(q.min())&&(s=pn(i)),new mx(s,r.transformResults||[])}(n,e))):[]}function Lx(t,e){return{documents:[Sf(t,e.path)]}}function Mx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return xE(en.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:wi(c.field),direction:Ux(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Tf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $x(t){let e=Rx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=bE(c);return d instanceof en&&tE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new uo(ki(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,xc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Lu(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Lu(h,d)}(n.endAt)),rx(e,i,o,s,a,"F",l,u)}function Fx(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ki(e.unaryFilter.field);return Ae.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ki(e.unaryFilter.field);return Ae.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ki(e.unaryFilter.field);return Ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ki(e.unaryFilter.field);return Ae.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return Ae.create(ki(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return en.create(e.compositeFilter.filters.map(n=>bE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function Ux(t){return Cx[t]}function Vx(t){return bx[t]}function zx(t){return xx[t]}function wi(t){return{fieldPath:t.canonicalString()}}function ki(t){return st.fromServerFormat(t.fieldPath)}function xE(t){return t instanceof Ae?function(e){if(e.op==="=="){if(Lv(e.value))return{unaryFilter:{field:wi(e.field),op:"IS_NAN"}};if(Ov(e.value))return{unaryFilter:{field:wi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lv(e.value))return{unaryFilter:{field:wi(e.field),op:"IS_NOT_NAN"}};if(Ov(e.value))return{unaryFilter:{field:wi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(e.field),op:Vx(e.op),value:e.value}}}(t):t instanceof en?function(e){const n=e.getFilters().map(r=>xE(r));return n.length===1?n[0]:{compositeFilter:{op:zx(e.op),filters:n}}}(t):B()}function Bx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,i,s=q.min(),o=q.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jx{constructor(e){this.le=e}}function Hx(t){const e=$x({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kf(e,e.limit,"L"):e}/**
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
 */class Wx{constructor(){this.sn=new qx}addToCollectionParentIndex(e,n){return this.sn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(wr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class qx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(he.comparator)).toArray()}}/**
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
 */class cs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new cs(0)}static kn(){return new cs(-1)}}/**
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
 */class Gx{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Qx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ho(r.mutation,i,bt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ks();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ln();const o=co(),a=co();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Rr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ho(c.mutation,u,c.mutation.getFieldMask(),Oe.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Kx(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=co();let i=new Ee((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=hE();c.forEach(h=>{if(!s.has(h)){const p=wE(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(jr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:dE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ks();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new Sa(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,it.newInvalidDocument(u)))});let o=Ks();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ho(u.mutation,l,bt.empty(),Oe.now()),Ac(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Yx{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return x.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:pn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Hx(r.bundledQuery),readTime:pn(r.readTime)}}(n)),x.resolve()}}/**
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
 */class Xx{constructor(){this.overlays=new Ee(V.comparator),this.hs=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kx(n,r));let s=this.hs.get(n);s===void 0&&(s=J(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class Mm{constructor(){this.ls=new lt(Ve.fs),this.ds=new lt(Ve._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ve(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new V(new he([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new V(new he([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=J();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return V.comparator(e.key,n.key)||ie(e.Es,n.Es)}static _s(e,n){return ie(e.Es,n.Es)||V.comparator(e.key,n.key)}}/**
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
 */class Jx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new lt(Ve.fs)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ve(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(ie);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),x.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new V(s),0);let a=new lt(ie);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),x.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Zx{constructor(e){this.Ss=e,this.docs=new Ee(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||V6(U6(c),r)<=0||(i.has(c.key)||Ac(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Ds(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eN(this)}getSize(e){return x.resolve(this.size)}}class eN extends Gx{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class tN{constructor(e){this.persistence=e,this.Cs=new Ss(n=>xm(n),Nm),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Mm,this.targetCount=0,this.ks=cs.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),x.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.$n(n),x.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ns.containsKey(n))}}/**
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
 */class nN{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Sm(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new tN(this),this.indexManager=new Wx,this.remoteDocumentCache=function(r){return new Zx(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new jx(n),this.Ls=new Yx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new Jx(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new rN(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return x.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class rN extends B6{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Gs=new Mm,this.Qs=null}static js(e){return new $m(e)}get zs(){if(this.Qs)return this.Qs;throw B()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),x.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.zs,r=>{const i=V.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return x.or([()=>x.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Fm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fm(e,n.fromCache,r,i)}}/**
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
 */class iN{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Uv(n))return x.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kf(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,kf(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return Uv(n)||i.isEqual(q.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Nv()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ef(n)),this.zi(e,o,n,F6(i,-1)))})}Qi(e,n){let r=new lt(uE(e));return n.forEach((i,s)=>{Ac(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Nv()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ef(n)),this.qi.getDocumentsMatchingQuery(e,n,wr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sN{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Ee(ie),this.Ji=new Ss(s=>xm(s),Nm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qx(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function oN(t,e,n,r){return new sN(t,e,n,r)}async function AE(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function aN(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=x.resolve();return d.forEach(p=>{h=h.next(()=>u.getEntry(a,p)).next(y=>{const w=l.docVersions.get(p);me(w!==null),y.version.compareTo(w)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RE(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function lN(t,e){const n=G(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(y,w,k){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(h,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=Ln(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(uN(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(q.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(d=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function uN(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function cN(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dN(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Cf(t,e,n){const r=G(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_a(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Yv(t,e,n){const r=G(t);let i=q.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=G(a),d=c.Ji.get(u);return d!==void 0?x.resolve(c.Hi.get(d)):c.Fs.getTargetData(l,u)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:J())).next(a=>(hN(r,ix(e),a),{documents:a,sr:s})))}function hN(t,e,n){let r=t.Yi.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Xv{constructor(){this.activeTargetIds=cx()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fN{constructor(){this.Wr=new Xv,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pN{Jr(e){}shutdown(){}}/**
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
 */class Jv{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cl=null;function jd(){return cl===null?cl=268435456+Math.round(2147483648*Math.random()):cl++,"0x"+cl.toString(16)}/**
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
 */const mN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gN{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const tt="WebChannelConnection";class yN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=jd(),a=this.Io(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(U("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw os("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+_s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=mN[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=jd();return new Promise((o,a)=>{const l=new b6;l.setWithCredentials(!0),l.listenOnce(S6.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zd.NO_ERROR:const c=l.getResponseJson();U(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case zd.TIMEOUT:U(tt,`RPC '${e}' ${s} timed out`),a(new $(S.DEADLINE_EXCEEDED,"Request time out"));break;case zd.HTTP_ERROR:const d=l.getStatus();if(U(tt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(k)>=0?k:S.UNKNOWN}(p.status);a(new $(y,p.message))}else a(new $(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(S.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{U(tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(tt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=jd(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=T6(),a=_6(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new C6({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");U(tt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,h=!1;const p=new gN({io:w=>{h?U(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(U(tt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),U(tt,`RPC '${e}' stream ${i} sending:`,w),c.send(w))},ro:()=>c.close()}),y=(w,k,m)=>{w.listen(k,f=>{try{m(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,ol.EventType.OPEN,()=>{h||U(tt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,ol.EventType.CLOSE,()=>{h||(h=!0,U(tt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),y(c,ol.EventType.ERROR,w=>{h||(h=!0,os(tt,`RPC '${e}' stream ${i} transport errored:`,w),p.fo(new $(S.UNAVAILABLE,"The operation could not be completed")))}),y(c,ol.EventType.MESSAGE,w=>{var k;if(!h){const m=w.data[0];me(!!m);const f=m,g=f.error||((k=f[0])===null||k===void 0?void 0:k.error);if(g){U(tt,`RPC '${e}' stream ${i} received error:`,g);const T=g.status;let _=function(N){const R=be[N];if(R!==void 0)return EE(R)}(T),I=g.message;_===void 0&&(_=S.INTERNAL,I="Unknown error status: "+T+" with message "+g.message),h=!0,p.fo(new $(_,I)),c.close()}else U(tt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),y(a,I6.STAT_EVENT,w=>{w.stat===bv.PROXY?U(tt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===bv.NOPROXY&&U(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Hd(){return typeof document<"u"?document:null}/**
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
 */function Oc(t){return new Nx(t,!0)}/**
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
 */class PE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class DE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new PE(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new $(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vN extends DE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=Px(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?pn(s.readTime):q.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=If(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=vf(a)?{documents:Lx(i,a)}:{query:Mx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=SE(i,s.resumeToken);const l=Tf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(q.min())>0){o.readTime=Fu(i,s.snapshotVersion.toTimestamp());const l=Tf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=Fx(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=If(this.serializer),n.removeTarget=e,this.zo(n)}}class wN extends DE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=Ox(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.uu(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=If(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dx(this.serializer,r))};this.zo(n)}}/**
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
 */class kN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(S.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(S.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class EN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Dn(n),this.wu=!1):U("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class TN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{mi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l.Au.add(4),await ba(l),l.Pu.set("Unknown"),l.Au.delete(4),await Lc(l)}(this))})}),this.Pu=new EN(r,i)}}async function Lc(t){if(mi(t))for(const e of t.Ru)await e(!0)}async function ba(t){for(const e of t.Ru)await e(!1)}function OE(t,e){const n=G(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),zm(n)?Vm(n):Is(n).Uo()&&Um(n,e))}function LE(t,e){const n=G(t),r=Is(n);n.Eu.delete(e),r.Uo()&&ME(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():mi(n)&&n.Pu.set("Unknown"))}function Um(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).nu(e)}function ME(t,e){t.bu.Lt(e),Is(t).su(e)}function Vm(t){t.bu=new Ix({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.Pu.mu()}function zm(t){return mi(t)&&!Is(t).qo()&&t.Eu.size>0}function mi(t){return G(t).Au.size===0}function $E(t){t.bu=void 0}async function _N(t){t.Eu.forEach((e,n)=>{Um(t,e)})}async function SN(t,e){$E(t),zm(t)?(t.Pu.pu(e),Vm(t)):t.Pu.set("Unknown")}async function IN(t,e,n){if(t.Pu.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof Vl?t.bu.Wt(e):e instanceof TE?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(q.min()))try{const r=await RE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),ME(i,a);const c=new er(u.target,a,l,u.sequenceNumber);Um(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!_a(e))throw e;t.Au.add(1),await ba(t),t.Pu.set("Offline"),n||(n=()=>RE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Lc(t)})}function FE(t,e){return e().catch(n=>Uu(t,n,e))}async function Mc(t){const e=G(t),n=Er(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;CN(e);)try{const i=await cN(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,bN(e,i)}catch(i){await Uu(e,i)}UE(e)&&VE(e)}function CN(t){return mi(t)&&t.Tu.length<10}function bN(t,e){t.Tu.push(e);const n=Er(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function UE(t){return mi(t)&&!Er(t).qo()&&t.Tu.length>0}function VE(t){Er(t).start()}async function xN(t){Er(t).au()}async function NN(t){const e=Er(t);for(const n of t.Tu)e.ou(n.mutations)}async function AN(t,e,n){const r=t.Tu.shift(),i=Pm.from(r,e,n);await FE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mc(t)}async function RN(t,e){e&&Er(t).ru&&await async function(n,r){if(i=r.code,Tx(i)&&i!==S.ABORTED){const s=n.Tu.shift();Er(n).Go(),await FE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Mc(n)}var i}(t,e),UE(t)&&VE(t)}async function Zv(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.Au.add(3),await ba(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Lc(n)}async function PN(t,e){const n=G(t);e?(n.Au.delete(2),await Lc(n)):e||(n.Au.add(2),await ba(n),n.Pu.set("Unknown"))}function Is(t){return t.Vu||(t.Vu=function(e,n,r){const i=G(e);return i.lu(),new vN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:_N.bind(null,t),co:SN.bind(null,t),eu:IN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),zm(t)?Vm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),$E(t))})),t.Vu}function Er(t){return t.Su||(t.Su=function(e,n,r){const i=G(e);return i.lu(),new wN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:xN.bind(null,t),co:RN.bind(null,t),cu:NN.bind(null,t),uu:AN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Mc(t)):(await t.Su.stop(),t.Tu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Bm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jm(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),_a(t))return new $(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class e1{constructor(){this.Du=new Ee(V.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):B():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ds(e,n,Ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DN{constructor(){this.xu=void 0,this.listeners=[]}}class ON{constructor(){this.queries=new Ss(e=>lE(e),Nc),this.onlineState="Unknown",this.Nu=new Set}}async function LN(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DN),i)try{s.xu=await n.onListen(r)}catch(o){const a=jm(o,`Initialization of query '${Ef(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Hm(n)}async function MN(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $N(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Hm(n)}function FN(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hm(t){t.Nu.forEach(e=>{e.next()})}class UN{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class zE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class VN{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=J(),this.mutatedKeys=J(),this.Zu=uE(e),this.tc=new Ki(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new e1,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=Ac(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;h&&p?h.data.isEqual(p.data)?y!==w&&(r.track({type:3,doc:p}),k=!0):this.ic(h,p)||(r.track({type:2,doc:p}),k=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),k=!0):h&&!p&&(r.track({type:1,doc:h}),k=!0,(l||u)&&(a=!0)),k&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(d,h){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(d)-p(h)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new ds(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new e1,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=J(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new BE(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new zE(r))}),n}ac(e){this.Ju=e.sr,this.Xu=J();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return ds.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class zN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BN{constructor(e){this.key=e,this.lc=!1}}class jN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ss(a=>lE(a),Nc),this._c=new Map,this.wc=new Set,this.mc=new Ee(V.comparator),this.gc=new Map,this.yc=new Mm,this.Ic={},this.Tc=new Map,this.Ec=cs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function HN(t,e){const n=eA(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await dN(n.localStore,On(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await WN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&OE(n.remoteStore,o)}return i}async function WN(t,e,n,r,i){t.Rc=(d,h,p)=>async function(y,w,k,m){let f=w.view.nc(k);f.ji&&(f=await Yv(y.localStore,w.query,!1).then(({documents:_})=>w.view.nc(_,f)));const g=m&&m.targetChanges.get(w.targetId),T=w.view.applyChanges(f,y.isPrimaryClient,g);return n1(y,w.targetId,T.uc),T.snapshot}(t,d,h,p);const s=await Yv(t.localStore,e,!0),o=new VN(e,s.sr),a=o.nc(s.documents),l=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);n1(t,n,u.uc);const c=new zN(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function qN(t,e){const n=G(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Nc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),LE(n.remoteStore,r.targetId),bf(n,r.targetId)}).catch(Ta)):(bf(n,r.targetId),await Cf(n.localStore,r.targetId,!0))}async function GN(t,e,n){const r=tA(t);try{const i=await function(s,o){const a=G(s),l=Oe.now(),u=o.reduce((h,p)=>h.add(p.key),J());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=Ln(),y=J();return a.Xi.getEntries(h,u).next(w=>{p=w,p.forEach((k,m)=>{m.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(w=>{c=w;const k=[];for(const m of o){const f=yx(m,c.get(m.key).overlayedDocument);f!=null&&k.push(new Rr(m.key,f,Jk(f.value.mapValue),Xt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,k,o)}).next(w=>{d=w;const k=w.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,w.batchId,k)})}).then(()=>({batchId:d.batchId,changes:dE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new Ee(ie)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await xa(r,i.changes),await Mc(r.remoteStore)}catch(i){const s=jm(i,"Failed to persist write");n.reject(s)}}async function jE(t,e){const n=G(t);try{const r=await lN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?me(o.lc):i.removedDocuments.size>0&&(me(o.lc),o.lc=!1))}),await xa(n,r,e)}catch(r){await Ta(r)}}function t1(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.ku(o)&&(l=!0)}),l&&Hm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KN(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new Ee(V.comparator);o=o.insert(s,it.newNoDocument(s,q.min()));const a=J().add(s),l=new Dc(q.min(),new Map,new Ee(ie),o,a);await jE(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Wm(r)}else await Cf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(Ta)}async function QN(t,e){const n=G(t),r=e.batch.batchId;try{const i=await aN(n.localStore,e);WE(n,r,null),HE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xa(n,i)}catch(i){await Ta(i)}}async function YN(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);WE(r,e,n),HE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xa(r,i)}catch(i){await Ta(i)}}function HE(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function WE(t,e,n){const r=G(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||qE(t,r)})}function qE(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(LE(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Wm(t))}function n1(t,e,n){for(const r of n)r instanceof zE?(t.yc.addReference(r.key,e),XN(t,r)):r instanceof BE?(U("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||qE(t,r.key)):B()}function XN(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.wc.add(r),Wm(t))}function Wm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new V(he.fromString(e)),r=t.Ec.next();t.gc.set(r,new BN(n)),t.mc=t.mc.insert(n,r),OE(t.remoteStore,new er(On(sE(n.path)),r,"TargetPurposeLimboResolution",Sm.ct))}}async function xa(t,e,n){const r=G(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Fm.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,d=>x.forEach(d.$i,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>x.forEach(d.Fi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!_a(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Hi.get(d),p=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(d,y)}}}(r.localStore,s))}async function JN(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await AE(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new $(S.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xa(n,r.tr)}}function ZN(t,e){const n=G(t),r=n.gc.get(e);if(r&&r.lc)return J().add(r.key);{let i=J();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function eA(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KN.bind(null,e),e.fc.eu=$N.bind(null,e.eventManager),e.fc.vc=FN.bind(null,e.eventManager),e}function tA(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YN.bind(null,e),e}class r1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oN(this.persistence,new iN,e.initialUser,this.serializer)}createPersistence(e){return new nN($m.js,this.serializer)}createSharedClientState(e){return new fN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>t1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JN.bind(null,this.syncEngine),await PN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ON}createDatastore(e){const n=Oc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yN(i));var i;return function(s,o,a,l){return new kN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>t1(this.syncEngine,a,0),o=Jv.D()?new Jv:new pN,new TN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new jN(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);U("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await ba(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class rA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Qk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function i1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oA(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Zv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Zv(e.remoteStore,s)),t._onlineComponents=e}function sA(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sA(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await Wd(t,new r1)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Wd(t,new r1);return t._offlineComponents}async function GE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await i1(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await i1(t,new nA))),t._onlineComponents}function aA(t){return GE(t).then(e=>e.syncEngine)}async function lA(t){const e=await GE(t),n=e.eventManager;return n.onListen=HN.bind(null,e.syncEngine),n.onUnlisten=qN.bind(null,e.syncEngine),n}function uA(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new rA({next:d=>{s.enqueueAndForget(()=>MN(i,c)),d.fromCache&&a.source==="server"?l.reject(new $(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new UN(o,u,{includeMetadataChanges:!0,Uu:!0});return LN(i,c)}(await lA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const s1=new Map;/**
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
 */function KE(t,e,n){if(!n)throw new $(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cA(t,e,n,r){if(e===!0&&r===!0)throw new $(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function o1(t){if(!V.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function a1(t){if(V.isDocumentKey(t))throw new $(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function li(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(t);throw new $(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class l1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new N6;switch(n.type){case"firstParty":return new D6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=s1.get(e);n&&(U("ComponentProvider","Removing Datastore"),s1.delete(e),n.terminate())}(this),Promise.resolve()}}function dA(t,e,n,r={}){var i;const s=(t=li(t,Fc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&os("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=nt.MOCK_USER;else{o=Y4(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(l)}t._authCredentials=new A6(new Kk(o,a))}}/**
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
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Cs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class mr extends Cs{constructor(e,n,r){super(e,n,sE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new V(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Le(t,e,...n){if(t=je(t),KE("collection","path",e),t instanceof Fc){const r=he.fromString(e,...n);return a1(r),new mr(t,null,r)}{if(!(t instanceof Nt||t instanceof mr))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return a1(r),new mr(t.firestore,null,r)}}function hA(t,e,...n){if(t=je(t),arguments.length===1&&(e=Qk.A()),KE("doc","path",e),t instanceof Fc){const r=he.fromString(e,...n);return o1(r),new Nt(t,null,new V(r))}{if(!(t instanceof Nt||t instanceof mr))throw new $(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return o1(r),new Nt(t.firestore,t instanceof mr?t.converter:null,new V(r))}}/**
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
 */class fA{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new PE(this,"async_queue_retry"),this.Yc=()=>{const n=Hd();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Hd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new pr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!_a(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Bm.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&B()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Na extends Fc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YE(this),this._firestoreClient.terminate()}}function pA(t,e){const n=typeof t=="object"?t:aw(),r=typeof t=="string"?t:e||"(default)",i=Hp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=G4("firestore");s&&dA(i,...s)}return i}function QE(t){return t._firestoreClient||YE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function YE(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new W6(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new iA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(ft.fromBase64String(e))}catch(n){throw new $(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qm{constructor(e){this._methodName=e}}/**
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
 */class Gm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const mA=/^__.*__$/;class gA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}class XE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Km{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Vu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(JE(this.ua)&&mA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class yA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oc(e)}ga(e,n,r,i=!1){return new Km({ua:e,methodName:n,ma:r,path:st.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qm(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new yA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vA(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Ym("Data must be an object, but it was:",o,r);const a=ZE(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=xf(e,d,n);if(!o.contains(h))throw new $(S.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);tT(c,h)||c.push(h)}l=new bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new gA(new kt(a),l,u)}class Vc extends qm{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function wA(t,e,n,r){const i=t.ga(1,e,n);Ym("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();pi(r,(l,u)=>{const c=Xm(e,l,n);u=je(u);const d=i.fa(c);if(u instanceof Vc)s.push(c);else{const h=Aa(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new bt(s);return new XE(o,a,i.fieldTransforms)}function kA(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[xf(e,r,n)],l=[i];if(s.length%2!=0)throw new $(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(xf(e,s[h])),l.push(s[h+1]);const u=[],c=kt.empty();for(let h=a.length-1;h>=0;--h)if(!tT(u,a[h])){const p=a[h];let y=l[h];y=je(y);const w=o.fa(p);if(y instanceof Vc)u.push(p);else{const k=Aa(y,w);k!=null&&(u.push(p),c.set(p,k))}}const d=new bt(u);return new XE(c,d,o.fieldTransforms)}function EA(t,e,n,r=!1){return Aa(n,t.ga(r?4:3,e))}function Aa(t,e){if(eT(t=je(t)))return Ym("Unsupported field value:",e,t),ZE(t,e);if(t instanceof qm)return function(n,r){if(!JE(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Aa(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dx(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Oe.fromDate(n);return{timestampValue:Fu(r.serializer,i)}}if(n instanceof Oe){const i=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fu(r.serializer,i)}}if(n instanceof Gm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:SE(r.serializer,n._byteString)};if(n instanceof Nt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${$c(n)}`)}(t,e)}function ZE(t,e){const n={};return Yk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pi(t,(r,i)=>{const s=Aa(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Gm||t instanceof hs||t instanceof Nt||t instanceof qm)}function Ym(t,e,n){if(!eT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=$c(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function xf(t,e,n){if((e=je(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return Xm(t,e);throw Vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const TA=new RegExp("[~\\*/\\[\\]]");function Xm(t,e,n){if(e.search(TA)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(S.INVALID_ARGUMENT,a+t+l)}function tT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class nT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _A extends nT{data(){return super.data()}}function Jm(t,e){return typeof e=="string"?Xm(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
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
 */function SA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zm{}class IA extends Zm{}function ut(t,e,...n){let r=[];e instanceof Zm&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof eg).length,o=i.filter(a=>a instanceof zc).length;if(s>1||s>0&&o>0)throw new $(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zc extends IA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zc(e,n,r)}_apply(e){const n=this._parse(e);return rT(e._query,n),new Cs(e.firestore,e.converter,wf(e._query,n))}_parse(e){const n=Qm(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){c1(c,u);const h=[];for(const p of c)h.push(u1(a,i,p));d={arrayValue:{values:h}}}else d=u1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||c1(c,u),d=EA(o,s,c,u==="in"||u==="not-in");return Ae.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function oe(t,e,n){const r=e,i=Jm("where",t);return zc._create(i,r,n)}class eg extends Zm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)rT(s,a),s=wf(s,a)}(e._query,n),new Cs(e.firestore,e.converter,wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function u1(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new $(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aE(e)&&n.indexOf("/")!==-1)throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!V.isDocumentKey(r))throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dv(t,new V(r))}if(n instanceof Nt)return Dv(t,n._key);throw new $(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function c1(t,e){if(!Array.isArray(t)||t.length===0)throw new $(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rT(t,e){if(e.isInequality()){const r=Am(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=oE(t);s!==null&&CA(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function CA(t,e,n){if(!n.isEqual(e))throw new $(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bA{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Gm(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);me(NE(r));const i=new Wo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function xA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NA extends nT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zl extends NA{data(e={}){return super.data(e)}}class AA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new dl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new zl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new dl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new zl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new dl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:RA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class PA extends bA{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function ct(t){t=li(t,Cs);const e=li(t.firestore,Na),n=QE(e),r=new PA(e);return SA(t._query),uA(n,t._query).then(i=>new AA(e,r,t,i))}function Vt(t,e,n,...r){t=li(t,Nt);const i=li(t.firestore,Na),s=Qm(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Uc?kA(s,"updateDoc",t._key,e,n,r):wA(s,"updateDoc",t._key,e),ng(i,[o.toMutation(t._key,Xt.exists(!0))])}function iT(t){return ng(li(t.firestore,Na),[new Rm(t._key,Xt.none())])}function tg(t,e){const n=li(t.firestore,Na),r=hA(t),i=xA(t.converter,e);return ng(n,[vA(Qm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function ng(t,e){return function(n,r){const i=new pr;return n.asyncQueue.enqueueAndForget(async()=>GN(await aA(n),r,i)),i.promise}(QE(t),e)}(function(t,e=!0){(function(n){_s=n})(ys),is(new ni("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Na(new R6(n.getProvider("auth-internal")),new L6(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),fr(xv,"3.11.0",t),fr(xv,"3.11.0","esm2017")})();const DA={apiKey:"AIzaSyAxzYdcy-I9ov79SwnIPg9zNaDnkxvIirM",authDomain:"todocheo-ef450.firebaseapp.com",projectId:"todocheo-ef450",storageBucket:"todocheo-ef450.appspot.com",messagingSenderId:"551284725708",appId:"1:551284725708:web:df138f770635a278bdaf69",measurementId:"G-L1FLC8N78G"},sT=ow(DA),te=Sb(sT),OA=new vn,Me=pA(sT),LA=()=>{var m;const{allColors:t,allTodos:e=[],setAllTodos:n=()=>{},allTypes:r=[],isLoggedIn:i}=E.useContext(X)||{},[s,o]=E.useState(""),[a,l]=E.useState(r&&((m=r[0])==null?void 0:m.id)||""),[u,c]=E.useState(new Date().toISOString().slice(0,10)),[d,h]=E.useState(""),[p,y]=E.useState("task"),w=async(f,g,T,_,I)=>{var W;const N={id:uc(),task:f,completed:!1,isEditing:!1,taskorreminder:I,nType:I==="task"?g:"",user:((W=te.currentUser)==null?void 0:W.email)||"",date:T,startTime:_,archived:!1,subTask:[],failed:!1},R=e?[...e,N]:[N];if(n(R),i)try{const M=Le(Me,"todos");await tg(M,N),console.log("sending to Firebase")}catch(M){console.log(M)}},k=f=>{f.preventDefault(),u||c(new Date().toISOString().slice(0,10)),s&&(w(s,a,u,d,p),o(""),c(new Date().toISOString().slice(0,10)))};return E.useEffect(()=>{i||localStorage.setItem("todosLocal",JSON.stringify(e))},[e]),C("form",{className:"TodoForm",onSubmit:k,style:{background:t==null?void 0:t.formBackgroundColor},children:[C("div",{className:"TodoForm__Task",children:[v("input",{type:"text",value:s,placeholder:"Add a new task",className:"TodoForm__Task__input",onChange:f=>o(f.target.value)}),v("button",{type:"submit",className:"add-btn",style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:"Add Task"})]}),C("div",{className:"TodoForm__CatDate",children:[v("div",{className:"TodoForm__CatDate__category",children:v("select",{id:"type",name:"type",value:a,onChange:f=>l(f.target.value),...p==="reminder"&&{disabled:!0},children:r==null?void 0:r.map(f=>v("option",{value:f==null?void 0:f.id,children:f.typeName},`type-id ${f==null?void 0:f.id}`))})}),v("div",{className:"TodoForm__CatDate__category",children:C("select",{id:"taskOrReminder",name:"task-reminder",value:p,onChange:f=>y(f.target.value),children:[v("option",{value:"task",children:"Task"}),v("option",{value:"reminder",children:"Reminder"})]})}),v("div",{className:"TodoForm__CatDate__date",children:v("input",{type:"time",id:"startTime",placeholder:"00:00",value:d,onChange:f=>h(f.target.value)})}),v("div",{className:"TodoForm__CatDate__date",children:v("input",{type:"date",id:"startDate",name:"trip-start",value:u,onChange:f=>c(f.target.value),min:"2018-01-01",max:"2099-12-31"})})]})]})};function d1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?d1(Object(n),!0).forEach(function(r){$e(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zu(t){return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(t)}function MA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $A(t,e,n){return e&&h1(t.prototype,e),n&&h1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rg(t,e){return UA(t)||zA(t,e)||oT(t,e)||jA()}function Ra(t){return FA(t)||VA(t)||oT(t)||BA()}function FA(t){if(Array.isArray(t))return Nf(t)}function UA(t){if(Array.isArray(t))return t}function VA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function oT(t,e){if(t){if(typeof t=="string")return Nf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(t,e)}}function Nf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function BA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f1=function(){},ig={},aT={},lT=null,uT={mark:f1,measure:f1};try{typeof window<"u"&&(ig=window),typeof document<"u"&&(aT=document),typeof MutationObserver<"u"&&(lT=MutationObserver),typeof performance<"u"&&(uT=performance)}catch{}var HA=ig.navigator||{},p1=HA.userAgent,m1=p1===void 0?"":p1,Tr=ig,pe=aT,g1=lT,hl=uT;Tr.document;var zn=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",cT=~m1.indexOf("MSIE")||~m1.indexOf("Trident/"),fl,pl,ml,gl,yl,Mn="___FONT_AWESOME___",Af=16,dT="fa",hT="svg-inline--fa",ui="data-fa-i2svg",Rf="data-fa-pseudo-element",WA="data-fa-pseudo-element-pending",sg="data-prefix",og="data-icon",y1="fontawesome-i2svg",qA="async",GA=["HTML","HEAD","STYLE","SCRIPT"],fT=function(){try{return!0}catch{return!1}}(),de="classic",_e="sharp",ag=[de,_e];function Pa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[de]}})}var Qo=Pa((fl={},$e(fl,de,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),$e(fl,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),fl)),Yo=Pa((pl={},$e(pl,de,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(pl,_e,{solid:"fass",regular:"fasr",light:"fasl"}),pl)),Xo=Pa((ml={},$e(ml,de,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(ml,_e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ml)),KA=Pa((gl={},$e(gl,de,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(gl,_e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gl)),QA=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,pT="fa-layers-text",YA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,XA=Pa((yl={},$e(yl,de,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(yl,_e,{900:"fass",400:"fasr",300:"fasl"}),yl)),mT=[1,2,3,4,5,6,7,8,9,10],JA=mT.concat([11,12,13,14,15,16,17,18,19,20]),ZA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jo=new Set;Object.keys(Yo[de]).map(Jo.add.bind(Jo));Object.keys(Yo[_e]).map(Jo.add.bind(Jo));var e5=[].concat(ag,Ra(Jo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hr.GROUP,Hr.SWAP_OPACITY,Hr.PRIMARY,Hr.SECONDARY]).concat(mT.map(function(t){return"".concat(t,"x")})).concat(JA.map(function(t){return"w-".concat(t)})),fo=Tr.FontAwesomeConfig||{};function t5(t){var e=pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function n5(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(pe&&typeof pe.querySelector=="function"){var r5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];r5.forEach(function(t){var e=rg(t,2),n=e[0],r=e[1],i=n5(t5(n));i!=null&&(fo[r]=i)})}var gT={styleDefault:"solid",familyDefault:"classic",cssPrefix:dT,replacementClass:hT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fo.familyPrefix&&(fo.cssPrefix=fo.familyPrefix);var fs=D(D({},gT),fo);fs.autoReplaceSvg||(fs.observeMutations=!1);var F={};Object.keys(gT).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(n){fs[t]=n,po.forEach(function(r){return r(F)})},get:function(){return fs[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){fs.cssPrefix=e,po.forEach(function(n){return n(F)})},get:function(){return fs.cssPrefix}});Tr.FontAwesomeConfig=F;var po=[];function i5(t){return po.push(t),function(){po.splice(po.indexOf(t),1)}}var Hn=Af,un={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s5(t){if(!(!t||!zn)){var e=pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return pe.head.insertBefore(e,r),t}}var o5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zo(){for(var t=12,e="";t-- >0;)e+=o5[Math.random()*62|0];return e}function bs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function lg(t){return t.classList?bs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a5(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yT(t[n]),'" ')},"").trim()}function Bc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ug(t){return t.size!==un.size||t.x!==un.x||t.y!==un.y||t.rotate!==un.rotate||t.flipX||t.flipY}function l5(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function u5(t){var e=t.transform,n=t.width,r=n===void 0?Af:n,i=t.height,s=i===void 0?Af:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&cT?l+="translate(".concat(e.x/Hn-r/2,"em, ").concat(e.y/Hn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Hn,"em), calc(-50% + ").concat(e.y/Hn,"em)) "):l+="translate(".concat(e.x/Hn,"em, ").concat(e.y/Hn,"em) "),l+="scale(".concat(e.size/Hn*(e.flipX?-1:1),", ").concat(e.size/Hn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var c5=`:root, :host {
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
}`;function vT(){var t=dT,e=hT,n=F.cssPrefix,r=F.replacementClass,i=c5;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var v1=!1;function qd(){F.autoAddCss&&!v1&&(s5(vT()),v1=!0)}var d5={mixout:function(){return{dom:{css:vT,insertCss:qd}}},hooks:function(){return{beforeDOMElementCreation:function(){qd()},beforeI2svg:function(){qd()}}}},$n=Tr||{};$n[Mn]||($n[Mn]={});$n[Mn].styles||($n[Mn].styles={});$n[Mn].hooks||($n[Mn].hooks={});$n[Mn].shims||($n[Mn].shims=[]);var Kt=$n[Mn],wT=[],h5=function t(){pe.removeEventListener("DOMContentLoaded",t),Bu=1,wT.map(function(e){return e()})},Bu=!1;zn&&(Bu=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),Bu||pe.addEventListener("DOMContentLoaded",h5));function f5(t){zn&&(Bu?setTimeout(t,0):wT.push(t))}function Da(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?yT(t):"<".concat(e," ").concat(a5(r),">").concat(s.map(Da).join(""),"</").concat(e,">")}function w1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var p5=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Gd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?p5(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function m5(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pf(t){var e=m5(t);return e.length===1?e[0].toString(16):null}function g5(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function k1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Df(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=k1(e);typeof Kt.hooks.addPack=="function"&&!i?Kt.hooks.addPack(t,k1(e)):Kt.styles[t]=D(D({},Kt.styles[t]||{}),s),t==="fas"&&Df("fa",e)}var vl,wl,kl,Oi=Kt.styles,y5=Kt.shims,v5=(vl={},$e(vl,de,Object.values(Xo[de])),$e(vl,_e,Object.values(Xo[_e])),vl),cg=null,kT={},ET={},TT={},_T={},ST={},w5=(wl={},$e(wl,de,Object.keys(Qo[de])),$e(wl,_e,Object.keys(Qo[_e])),wl);function k5(t){return~e5.indexOf(t)}function E5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!k5(i)?i:null}var IT=function(){var e=function(s){return Gd(Oi,function(o,a,l){return o[l]=Gd(a,s,{}),o},{})};kT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ET=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),ST=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Oi||F.autoFetchSvg,r=Gd(y5,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});TT=r.names,_T=r.unicodes,cg=jc(F.styleDefault,{family:F.familyDefault})};i5(function(t){cg=jc(t.styleDefault,{family:F.familyDefault})});IT();function dg(t,e){return(kT[t]||{})[e]}function T5(t,e){return(ET[t]||{})[e]}function Wr(t,e){return(ST[t]||{})[e]}function CT(t){return TT[t]||{prefix:null,iconName:null}}function _5(t){var e=_T[t],n=dg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _r(){return cg}var hg=function(){return{prefix:null,iconName:null,rest:[]}};function jc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?de:n,i=Qo[r][t],s=Yo[r][t]||Yo[r][i],o=t in Kt.styles?t:null;return s||o||null}var E1=(kl={},$e(kl,de,Object.keys(Xo[de])),$e(kl,_e,Object.keys(Xo[_e])),kl);function Hc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},$e(e,de,"".concat(F.cssPrefix,"-").concat(de)),$e(e,_e,"".concat(F.cssPrefix,"-").concat(_e)),e),o=null,a=de;(t.includes(s[de])||t.some(function(u){return E1[de].includes(u)}))&&(a=de),(t.includes(s[_e])||t.some(function(u){return E1[_e].includes(u)}))&&(a=_e);var l=t.reduce(function(u,c){var d=E5(F.cssPrefix,c);if(Oi[c]?(c=v5[a].includes(c)?KA[a][c]:c,o=c,u.prefix=c):w5[a].indexOf(c)>-1?(o=c,u.prefix=jc(c,{family:a})):d?u.iconName=d:c!==F.replacementClass&&c!==s[de]&&c!==s[_e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?CT(u.iconName):{},p=Wr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Oi.far&&Oi.fas&&!F.autoFetchSvg&&(u.prefix="fas")}return u},hg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(Oi.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Wr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=_r()||"fas"),l}var S5=function(){function t(){MA(this,t),this.definitions={}}return $A(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Df(a,o[a]);var l=Xo[de][a];l&&Df(l,o[a]),IT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),T1=[],Li={},Qi={},I5=Object.keys(Qi);function C5(t,e){var n=e.mixoutsTo;return T1=t,Li={},Object.keys(Qi).forEach(function(r){I5.indexOf(r)===-1&&delete Qi[r]}),T1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),zu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Li[o]||(Li[o]=[]),Li[o].push(s[o])})}r.provides&&r.provides(Qi)}),n}function Of(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Li[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ci(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Li[t]||[];i.forEach(function(s){s.apply(null,n)})}function Fn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qi[t]?Qi[t].apply(null,e):void 0}function Lf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||_r();if(e)return e=Wr(n,e)||e,w1(bT.definitions,n,e)||w1(Kt.styles,n,e)}var bT=new S5,b5=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,ci("noAuto")},x5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zn?(ci("beforeI2svg",e),Fn("pseudoElements2svg",e),Fn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,f5(function(){A5({autoReplaceSvgRoot:n}),ci("watch",e)})}},N5={icon:function(e){if(e===null)return null;if(zu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Wr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=jc(e[0]);return{prefix:r,iconName:Wr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(QA))){var i=Hc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||_r(),iconName:Wr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=_r();return{prefix:s,iconName:Wr(s,e)||e}}}},Ot={noAuto:b5,config:F,dom:x5,parse:N5,library:bT,findIconDefinition:Lf,toHtml:Da},A5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?pe:n;(Object.keys(Kt.styles).length>0||F.autoFetchSvg)&&zn&&F.autoReplaceSvg&&Ot.dom.i2svg({node:r})};function Wc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Da(r)})}}),Object.defineProperty(t,"node",{get:function(){if(zn){var r=pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function R5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(ug(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Bc(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function P5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function fg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,w=y.width,k=y.height,m=i==="fak",f=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),g={children:[],attributes:D(D({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},T=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};p&&(g.attributes[ui]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Zo())},children:[l]}),delete g.attributes.title);var _=D(D({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},T),d.styles)}),I=r.found&&n.found?Fn("generateAbstractMask",_)||{children:[],attributes:{}}:Fn("generateAbstractIcon",_)||{children:[],attributes:{}},N=I.children,R=I.attributes;return _.children=N,_.attributes=R,a?P5(_):R5(_)}function _1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ui]="");var c=D({},o.styles);ug(i)&&(c.transform=u5({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Bc(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function D5(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Bc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kd=Kt.styles;function Mf(t){var e=t[0],n=t[1],r=t.slice(4),i=rg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Hr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Hr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var O5={found:!1,width:512,height:512};function L5(t,e){!fT&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $f(t,e){var n=e;return e==="fa"&&F.styleDefault!==null&&(e=_r()),new Promise(function(r,i){if(Fn("missingIconAbstract"),n==="fa"){var s=CT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Kd[e]&&Kd[e][t]){var o=Kd[e][t];return r(Mf(o))}L5(t,e),r(D(D({},O5),{},{icon:F.showMissingIcons&&t?Fn("missingIconAbstract")||{}:{}}))})}var S1=function(){},Ff=F.measurePerformance&&hl&&hl.mark&&hl.measure?hl:{mark:S1,measure:S1},Ys='FA "6.4.0"',M5=function(e){return Ff.mark("".concat(Ys," ").concat(e," begins")),function(){return xT(e)}},xT=function(e){Ff.mark("".concat(Ys," ").concat(e," ends")),Ff.measure("".concat(Ys," ").concat(e),"".concat(Ys," ").concat(e," begins"),"".concat(Ys," ").concat(e," ends"))},pg={begin:M5,end:xT},Bl=function(){};function I1(t){var e=t.getAttribute?t.getAttribute(ui):null;return typeof e=="string"}function $5(t){var e=t.getAttribute?t.getAttribute(sg):null,n=t.getAttribute?t.getAttribute(og):null;return e&&n}function F5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function U5(){if(F.autoReplaceSvg===!0)return jl.replace;var t=jl[F.autoReplaceSvg];return t||jl.replace}function V5(t){return pe.createElementNS("http://www.w3.org/2000/svg",t)}function z5(t){return pe.createElement(t)}function NT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?V5:z5:n;if(typeof t=="string")return pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(NT(o,{ceFn:r}))}),i}function B5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(NT(i),n)}),n.getAttribute(ui)===null&&F.keepOriginalSource){var r=pe.createComment(B5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~lg(n).indexOf(F.replacementClass))return jl.replace(e);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Da(a)}).join(`
`);n.setAttribute(ui,""),n.innerHTML=o}};function C1(t){t()}function AT(t,e){var n=typeof e=="function"?e:Bl;if(t.length===0)n();else{var r=C1;F.mutateApproach===qA&&(r=Tr.requestAnimationFrame||C1),r(function(){var i=U5(),s=pg.begin("mutate");t.map(i),s(),n()})}}var mg=!1;function RT(){mg=!0}function Uf(){mg=!1}var ju=null;function b1(t){if(g1&&F.observeMutations){var e=t.treeCallback,n=e===void 0?Bl:e,r=t.nodeCallback,i=r===void 0?Bl:r,s=t.pseudoElementsCallback,o=s===void 0?Bl:s,a=t.observeMutationsRoot,l=a===void 0?pe:a;ju=new g1(function(u){if(!mg){var c=_r();bs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!I1(d.addedNodes[0])&&(F.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&I1(d.target)&&~ZA.indexOf(d.attributeName))if(d.attributeName==="class"&&$5(d.target)){var h=Hc(lg(d.target)),p=h.prefix,y=h.iconName;d.target.setAttribute(sg,p||c),y&&d.target.setAttribute(og,y)}else F5(d.target)&&i(d.target)})}}),zn&&ju.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function j5(){ju&&ju.disconnect()}function H5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function W5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Hc(lg(t));return i.prefix||(i.prefix=_r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=T5(i.prefix,t.innerText)||dg(i.prefix,Pf(t.innerText))),!i.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function q5(t){var e=bs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return F.autoA11y&&(n?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Zo()):(e["aria-hidden"]="true",e.focusable="false")),e}function G5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:un,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=W5(t),r=n.iconName,i=n.prefix,s=n.rest,o=q5(t),a=Of("parseNodeAttributes",{},t),l=e.styleParser?H5(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:un,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var K5=Kt.styles;function PT(t){var e=F.autoReplaceSvg==="nest"?x1(t,{styleParser:!1}):x1(t);return~e.extra.classes.indexOf(pT)?Fn("generateLayersText",t,e):Fn("generateSvgReplacementMutation",t,e)}var Sr=new Set;ag.map(function(t){Sr.add("fa-".concat(t))});Object.keys(Qo[de]).map(Sr.add.bind(Sr));Object.keys(Qo[_e]).map(Sr.add.bind(Sr));Sr=Ra(Sr);function N1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zn)return Promise.resolve();var n=pe.documentElement.classList,r=function(d){return n.add("".concat(y1,"-").concat(d))},i=function(d){return n.remove("".concat(y1,"-").concat(d))},s=F.autoFetchSvg?Sr:ag.map(function(c){return"fa-".concat(c)}).concat(Object.keys(K5));s.includes("fa")||s.push("fa");var o=[".".concat(pT,":not([").concat(ui,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ui,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=bs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=pg.begin("onTree"),u=a.reduce(function(c,d){try{var h=PT(d);h&&c.push(h)}catch(p){fT||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){AT(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function Q5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PT(t).then(function(n){n&&AT([n],e)})}function Y5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Lf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lf(i||{})),t(r,D(D({},n),{},{mask:i}))}}var X5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?un:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,p=n.titleId,y=p===void 0?null:p,w=n.classes,k=w===void 0?[]:w,m=n.attributes,f=m===void 0?{}:m,g=n.styles,T=g===void 0?{}:g;if(e){var _=e.prefix,I=e.iconName,N=e.icon;return Wc(D({type:"icon"},e),function(){return ci("beforeDOMElementCreation",{iconDefinition:e,params:n}),F.autoA11y&&(h?f["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(y||Zo()):(f["aria-hidden"]="true",f.focusable="false")),fg({icons:{main:Mf(N),mask:l?Mf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:I,transform:D(D({},un),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:f,styles:T,classes:k}})})}},J5={mixout:function(){return{icon:Y5(X5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=N1,n.nodeCallback=Q5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?pe:r,s=n.callback,o=s===void 0?function(){}:s;return N1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([$f(i,a),c.iconName?$f(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=rg(w,2),m=k[0],f=k[1];p([n,fg({icons:{main:m,mask:f},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Bc(a);l.length>0&&(i.style=l);var u;return ug(o)&&(u=Fn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Z5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Wc({type:"layer"},function(){ci("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Ra(s)).join(" ")},children:o}]})}}}},e9={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Wc({type:"counter",content:n},function(){return ci("beforeDOMElementCreation",{content:n,params:r}),D5({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Ra(a))}})})}}}},t9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?un:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Wc({type:"text",content:n},function(){return ci("beforeDOMElementCreation",{content:n,params:r}),_1({content:n,transform:D(D({},un),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Ra(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(cT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_1({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},n9=new RegExp('"',"ug"),A1=[1105920,1112319];function r9(t){var e=t.replace(n9,""),n=g5(e,0),r=n>=A1[0]&&n<=A1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pf(i?e[0]:e),isSecondary:r||i}}function R1(t,e){var n="".concat(WA).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=bs(t.children),o=s.filter(function(N){return N.getAttribute(Rf)===e})[0],a=Tr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(YA),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?_e:de,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Yo[h][l[2].toLowerCase()]:XA[h][u],y=r9(d),w=y.value,k=y.isSecondary,m=l[0].startsWith("FontAwesome"),f=dg(p,w),g=f;if(m){var T=_5(w);T.iconName&&T.prefix&&(f=T.iconName,p=T.prefix)}if(f&&!k&&(!o||o.getAttribute(sg)!==p||o.getAttribute(og)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var _=G5(),I=_.extra;I.attributes[Rf]=e,$f(f,p).then(function(N){var R=fg(D(D({},_),{},{icons:{main:N,mask:hg()},prefix:p,iconName:g,extra:I,watchable:!0})),W=pe.createElement("svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=R.map(function(M){return Da(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function i9(t){return Promise.all([R1(t,"::before"),R1(t,"::after")])}function s9(t){return t.parentNode!==document.head&&!~GA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function P1(t){if(zn)return new Promise(function(e,n){var r=bs(t.querySelectorAll("*")).filter(s9).map(i9),i=pg.begin("searchPseudoElements");RT(),Promise.all(r).then(function(){i(),Uf(),e()}).catch(function(){i(),Uf(),n()})})}var o9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=P1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?pe:r;F.searchPseudoElements&&P1(i)}}},D1=!1,a9={mixout:function(){return{dom:{unwatch:function(){RT(),D1=!0}}}},hooks:function(){return{bootstrap:function(){b1(Of("mutationObserverCallbacks",{}))},noAuto:function(){j5()},watch:function(n){var r=n.observeMutationsRoot;D1?Uf():b1(Of("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},O1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},l9={mixout:function(){return{parse:{transform:function(n){return O1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=O1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:h};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Qd={x:0,y:0,width:"100%",height:"100%"};function L1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function u9(t){return t.tag==="g"?t.children:[t]}var c9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Hc(i.split(" ").map(function(o){return o.trim()})):hg();return s.prefix||(s.prefix=_r()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,p=l5({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:D(D({},Qd),{},{fill:"white"})},w=c.children?{children:c.children.map(L1)}:{},k={tag:"g",attributes:D({},p.inner),children:[L1(D({tag:c.tag,attributes:D(D({},c.attributes),p.path)},w))]},m={tag:"g",attributes:D({},p.outer),children:[k]},f="mask-".concat(a||Zo()),g="clip-".concat(a||Zo()),T={tag:"mask",attributes:D(D({},Qd),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:u9(h)},T]};return r.push(_,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},Qd)}),{children:r,attributes:i}}}},d9={provides:function(e){var n=!1;Tr.matchMedia&&(n=Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},h9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},f9=[d5,J5,Z5,e9,t9,o9,a9,l9,c9,d9,h9];C5(f9,{mixoutsTo:Ot});Ot.noAuto;Ot.config;Ot.library;Ot.dom;var Vf=Ot.parse;Ot.findIconDefinition;Ot.toHtml;var p9=Ot.icon;Ot.layer;Ot.text;Ot.counter;var Q={},m9={get exports(){return Q},set exports(t){Q=t}},g9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y9=g9,v9=y9;function DT(){}function OT(){}OT.resetWarningCache=DT;var w9=function(){function t(r,i,s,o,a,l){if(l!==v9){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:OT,resetWarningCache:DT};return n.PropTypes=n,n};m9.exports=w9();function M1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M1(Object(n),!0).forEach(function(r){Mi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hu(t){return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hu(t)}function Mi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function E9(t,e){if(t==null)return{};var n=k9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zf(t){return T9(t)||_9(t)||S9(t)||I9()}function T9(t){if(Array.isArray(t))return Bf(t)}function _9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function S9(t,e){if(t){if(typeof t=="string")return Bf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bf(t,e)}}function Bf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C9(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,w=t.listItem,k=t.flip,m=t.size,f=t.rotation,g=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Mi(e,"fa-".concat(m),typeof m<"u"&&m!==null),Mi(e,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Mi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Mi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(_){return T[_]?_:null}).filter(function(_){return _})}function b9(t){return t=t-0,t===t}function LT(t){return b9(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var x9=["style"];function N9(t){return t.charAt(0).toUpperCase()+t.slice(1)}function A9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=LT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[N9(i)]=s:e[i]=s,e},{})}function MT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return MT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=A9(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[LT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=E9(n,x9);return i.attrs.style=tr(tr({},i.attrs.style),o),t.apply(void 0,[e.tag,tr(tr({},i.attrs),a)].concat(zf(r)))}var $T=!1;try{$T=!0}catch{}function R9(){if(!$T&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $1(t){if(t&&Hu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vf.icon)return Vf.icon(t);if(t===null)return null;if(t&&Hu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mi({},t,e):{}}var j=Ue.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=$1(n),c=Yd("classes",[].concat(zf(C9(t)),zf(s.split(" ")))),d=Yd("transform",typeof t.transform=="string"?Vf.transform(t.transform):t.transform),h=Yd("mask",$1(r)),p=p9(u,tr(tr(tr(tr({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return R9("Could not find icon",u),null;var y=p.abstract,w={ref:e};return Object.keys(t).forEach(function(k){j.defaultProps.hasOwnProperty(k)||(w[k]=t[k])}),P9(y[0],w)});j.displayName="FontAwesomeIcon";j.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var P9=MT.bind(null,Ue.createElement),D9={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},gg={prefix:"fas",iconName:"laptop",icon:[640,512,[128187],"f109","M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"]},yg={prefix:"fas",iconName:"person-arrow-up-from-line",icon:[640,512,[],"e539","M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 352V352h16v96H184zm-64 0H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H152h80H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H264V256.9l28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V448zM598.6 121.4l-80-80c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L464 141.3 464 384c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l25.4 25.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"]},O9={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},L9={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},vg=L9,M9={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},FT={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Yi=FT,$9={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},wg={prefix:"fas",iconName:"weight-scale",icon:[512,512,["weight"],"f496","M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z"]},F9={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},U9={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},UT=U9,V9={prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},kg={prefix:"fas",iconName:"money-bill-trend-up",icon:[512,512,[],"e529","M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},z9={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},mo={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Eg={prefix:"fas",iconName:"landmark",icon:[512,512,[127963],"f66f","M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"]},Tg={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]},B9={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},j9={prefix:"fas",iconName:"file-circle-check",icon:[576,512,[],"e5a0","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"]},H9={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},_g=H9,Sg={prefix:"fas",iconName:"guitar",icon:[512,512,[],"f7a6","M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},Ig={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},W9={prefix:"fas",iconName:"file-circle-xmark",icon:[576,512,[],"e5a1","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z"]},q9={prefix:"fas",iconName:"copy",icon:[512,512,[],"f0c5","M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},Cg={prefix:"fas",iconName:"shield-heart",icon:[512,512,[],"e574","M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"]},bg={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},xg={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};const G9=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async l=>{var c;const u=(r||[]).map(d=>d.id===l?{...d,isEditing:!d.isEditing}:d);if(i(u),s)try{console.log("updating editing status in Firebase");const d=(c=te.currentUser)==null?void 0:c.email,h=ut(Le(Me,"todos"),oe("user","==",d),oe("id","==",l));(await ct(h)).docs.forEach(async w=>{await Vt(w.ref,{isEditing:!w.data().isEditing})});const y=(r||[]).map(w=>w.id===l?{...w,isEditing:!w.isEditing}:w);i(y)}catch(d){console.log(d)}},a=()=>{o==null||o(e.id)};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),v(j,{icon:Yi,onClick:a,style:{color:n==null?void 0:n.buttonIcons}})},VT=t=>{var o,a;const{todo:e,handleToggleClick:n}=t,{allTypes:r}=E.useContext(X)||{},i=(o=r==null?void 0:r.find(l=>l.id===e.nType))==null?void 0:o.color,s=(a=r==null?void 0:r.find(l=>l.id===e.nType))==null?void 0:a.icon;return v("div",{className:"TodoItem__type-color",onClick:n,style:{backgroundColor:i??"gray"},children:s&&v(j,{icon:s==="faShieldHeart"?Cg:s==="faLandmark"?Eg:s==="faCar"?Ig:s==="faLaptop"?gg:s==="faWeightScale"?wg:s==="faBook"?bg:s==="faMoneyBillTrendUp"?kg:s==="faGuitar"?Sg:s==="faHome"?_g:s==="faDumbbell"?Tg:s==="faPersonArrowUpFromLine"?yg:xg,style:{color:"#edf9f3"}})})},K9=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async()=>{var u;const a={id:uc(),task:e.task,completed:e.completed,isEditing:!1,taskorreminder:e.taskorreminder,nType:e.nType,user:((u=te.currentUser)==null?void 0:u.email)||"",date:e.date,startTime:e.startTime,archived:e.archived,subTask:e.subTask,failed:e.failed},l=r?[...r,a]:[a];if(i(l),s)try{const c=Le(Me,"todos");await tg(c,a),console.log("sending to Firebase")}catch(c){console.log(c)}};return v(j,{icon:q9,onClick:()=>o(),style:{color:n==null?void 0:n.buttonIcons}})},Q9=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async l=>{var h;const u={subTaskCompleted:!1,subTask:"",subTaskID:e.id+"-"+uc(),isSubtaskEditing:!1},c=[...e.subTask,u],d=(r||[]).map(p=>p.id===l?{...p,subTask:c}:p);if(i(d),s)try{console.log("updating todo with new subtask in Firebase");const p=(h=te.currentUser)==null?void 0:h.email,y=ut(Le(Me,"todos"),oe("user","==",p),oe("id","==",l));(await ct(y)).docs.forEach(async k=>{await Vt(k.ref,{subTask:c})})}catch(p){console.log(p)}},a=()=>{o==null||o(e.id)};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),v(Yr,{children:v("svg",{onClick:a,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:v("path",{fill:n==null?void 0:n.buttonIcons,d:"M3 3h6v4H3V3m12 7h6v4h-6v-4m0 7h6v4h-6v-4m-2-4H7v5h6v2H5V9h2v2h6v2Z"})})})},zT=t=>{var d;const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},[o,a]=E.useState(""),l=async(h,p)=>{var w;const y=(r||[]).map(k=>{var m;return k.id===h?{...k,subTask:(m=k.subTask)==null?void 0:m.map(f=>f.subTaskID===p?{...f,isSubtaskEditing:!f.isSubtaskEditing,subTask:f.isSubtaskEditing?o:f.subTask}:f)}:k});if(i(y),a(""),s)try{const k=(w=te.currentUser)==null?void 0:w.email,m=ut(Le(Me,"todos"),oe("user","==",k),oe("id","==",h));(await ct(m)).docs.forEach(async g=>{const T=g.data().subTask.map(_=>_.subTaskID===p?{..._,isSubtaskEditing:!_.isSubtaskEditing,subTask:_.isSubtaskEditing?o:_.subTask}:_);await Vt(g.ref,{subTask:T})})}catch(k){console.log(k)}},u=async(h,p)=>{var w;const y=(r||[]).map(k=>{var m;return k.id===h?{...k,subTask:(m=k.subTask)==null?void 0:m.filter(f=>f.subTaskID!==p)}:k});if(i(y),s)try{const k=(w=te.currentUser)==null?void 0:w.email,m=ut(Le(Me,"todos"),oe("user","==",k),oe("id","==",h));(await ct(m)).docs.forEach(async g=>{const T=g.data().subTask.filter(_=>_.subTaskID!==p);await Vt(g.ref,{subTask:T})})}catch(k){console.log(k)}},c=async(h,p)=>{var w;const y=(r||[]).map(k=>{var m;return k.id===h?{...k,subTask:(m=k.subTask)==null?void 0:m.map(f=>f.subTaskID===p?{...f,subTaskCompleted:!f.subTaskCompleted}:f)}:k});if(i(y),s)try{const k=(w=te.currentUser)==null?void 0:w.email,m=ut(Le(Me,"todos"),oe("user","==",k),oe("id","==",h));(await ct(m)).docs.forEach(async g=>{const T=g.data().subTask.map(_=>_.subTaskID===p?{..._,subTaskCompleted:!_.subTaskCompleted}:_);await Vt(g.ref,{subTask:T})})}catch(k){console.log(k)}};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),v("div",{className:"TodoItem__subtask",children:(d=e.subTask)==null?void 0:d.map(h=>C("div",{className:"TodoItem__subtask__item",children:[v(j,{icon:h.subTaskCompleted?F9:z9,style:{color:n==null?void 0:n.buttonIcons},onClick:()=>c(e.id,h.subTaskID)}),h.isSubtaskEditing?v("input",{type:"text",placeholder:h.subTask===""?"New subtask":h.subTask,style:{color:n==null?void 0:n.itemText},onChange:p=>a(p.target.value)}):v("p",{className:`${h.subTaskCompleted&&"completed"}`,onClick:()=>c(e.id,h.subTaskID),children:h.subTask===""?"New subtask":h.subTask}),v(j,{icon:FT,style:{color:n==null?void 0:n.buttonIcons},onClick:()=>l(e.id,h.subTaskID)}),v(j,{icon:B9,style:{color:n==null?void 0:n.buttonIcons},onClick:()=>u(e.id,h.subTaskID)})]},h.subTaskID))})},Y9=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async l=>{var c;const u=(r||[]).map(d=>d.id===l?{...d,failed:!0}:d);if(i(u),s)try{console.log("updating fail status in Firebase");const d=(c=te.currentUser)==null?void 0:c.email,h=ut(Le(Me,"todos"),oe("user","==",d),oe("id","==",l));(await ct(h)).docs.forEach(async y=>{await Vt(y.ref,{failed:!0})})}catch(d){console.log(d)}},a=()=>{o==null||o(e.id)};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),C(Yr,{children:[" ",!e.completed&&e.taskorreminder!=="reminder"&&v(j,{icon:W9,onClick:a,style:{color:n==null?void 0:n.buttonIcons}})]})},X9=t=>{var l;const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async u=>{var d;const c=(r||[]).map(h=>h.id===u?{...h,completed:!h.completed}:h);if(i(c),s)try{console.log("updating status in Firebase");const h=(d=te.currentUser)==null?void 0:d.email,p=ut(Le(Me,"todos"),oe("user","==",h),oe("id","==",u));(await ct(p)).docs.forEach(async w=>{await Vt(w.ref,{completed:!w.data().completed})})}catch(h){console.log(h)}},a=()=>{e.taskorreminder==="task"&&(o==null||o(e.id))};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),C("li",{className:`TodoItem ${e.completed&&"completed"} Todo-${e.taskorreminder}`,style:{color:n==null?void 0:n.itemText,backgroundColor:e.taskorreminder==="reminder"?n==null?void 0:n.reminderBackgroundColor:n==null?void 0:n.itemBackgroundColor},children:[v(VT,{todo:e,handleToggleClick:a}),C("div",{className:"TodoItem__container",children:[" ",C("p",{className:`${e.completed&&"completed"}`,children:[C("b",{onClick:a,children:[e.startTime!==void 0&&e.startTime!==""?`${e.startTime} | `:null,e.task]}),e.taskorreminder!=="reminder"&&v(Q9,{todo:e})]})]}),C("div",{className:"TodoItem__icons",children:[v(K9,{todo:e}),v(G9,{todo:e}),v(Y9,{todo:e})]}),((l=e.subTask)==null?void 0:l.length)>0&&v(zT,{todo:e})]})},J9=t=>{const{task:e}=t,[n,r]=E.useState(e.task),[i,s]=E.useState(e.nType||""),[o,a]=E.useState(e.date),[l,u]=E.useState(e.startTime||""),[c,d]=E.useState(e.taskorreminder),{allColors:h,allTodos:p=[],allTypes:y,setAllTodos:w=()=>{},isLoggedIn:k}=E.useContext(X)||{},m=async(g,T,_,I,N,R)=>{var W;if(k)try{console.log("Updating task in Firebase");const M=(W=te.currentUser)==null?void 0:W.email,se=ut(Le(Me,"todos"),oe("user","==",M),oe("id","==",R));(await ct(se)).docs.forEach(async nn=>{await Vt(nn.ref,{task:g,nType:T,date:_,startTime:l,taskorreminder:N,isEditing:!1})});const tn=(p||[]).map(nn=>nn.id===R?{...nn,task:g,nType:T,date:_,startTime:l,taskorreminder:N,isEditing:!1}:nn);w(tn)}catch(M){console.error("Error updating document: ",M)}else{const M=(p||[]).map(se=>se.id===R?{...se,task:g,nType:T,date:_,startTime:l,taskorreminder:N,isEditing:!1}:se);w(M)}},f=g=>{g.preventDefault();const T=c==="task"?i:"";m==null||m(n,T,o,l,c,e.id)};return E.useEffect(()=>{k||localStorage.setItem("todosLocal",JSON.stringify(p))},[p]),C("form",{className:"EditTodoForm",onSubmit:f,style:{background:h==null?void 0:h.formBackgroundColor},children:[C("div",{className:"EditTodoForm__Task",children:[v("input",{type:"text",value:n,placeholder:"Update task",className:"EditTodoForm__Task__input",onChange:g=>r(g.target.value)}),v("button",{type:"submit",className:"add-btn",style:{backgroundColor:h==null?void 0:h.buttonIcons,color:h==null?void 0:h.buttonText},children:"Update"})]}),C("div",{className:"EditTodoForm__CatDate",children:[v("div",{className:"EditTodoForm__CatDate__category",children:v("select",{id:e.id,name:"type",value:i,onChange:g=>s(g.target.value),...c==="reminder"&&{disabled:!0},children:y==null?void 0:y.map(g=>v("option",{value:g.id,children:g.typeName},g.id))})}),v("div",{className:"TodoForm__CatDate__category",children:C("select",{id:"taskOrReminder",name:"task-reminder",value:c,onChange:g=>d(g.target.value),children:[v("option",{value:"task",children:"Task"}),v("option",{value:"reminder",children:"Reminder"})]})}),v("div",{className:"TodoForm__CatDate__date",children:v("input",{type:"time",id:"startTime",value:l,onChange:g=>u(g.target.value)})}),v("div",{className:"EditTodoForm__CatDate__date",children:v("input",{type:"date",id:"start",name:"trip-start",defaultValue:e.date,onChange:g=>a(g.target.value),min:"2018-01-01",max:"2099-12-31"})})," "]})]})},Z9=(t,e,n)=>{const r=e.filter(i=>i.id!==t);return localStorage.setItem(`${n}`,JSON.stringify(r)),r},eR=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async a=>{var l;if(s)try{console.log("deleting from Firebase");const u=(l=te.currentUser)==null?void 0:l.email,c=ut(Le(Me,"todos"),oe("user","==",u),oe("id","==",a));(await ct(c)).docs.forEach(async p=>{await iT(p.ref)});const h=(r==null?void 0:r.filter(p=>p.id!==a))||[];i(h)}catch(u){console.log(u)}else{console.log("deleting from localStorage");const u=Z9(a,r||[],"todosLocal");i(u)}};return v(j,{icon:mo,onClick:()=>o(e.id),style:{color:n==null?void 0:n.buttonIcons}})},tR=t=>{const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{},o=async l=>{var c;const u=(r||[]).map(d=>d.id===l?{...d,failed:!1}:d);if(i(u),s)try{console.log("updating fail status in Firebase to true");const d=(c=te.currentUser)==null?void 0:c.email,h=ut(Le(Me,"todos"),oe("user","==",d),oe("id","==",l));(await ct(h)).docs.forEach(async y=>{await Vt(y.ref,{failed:!1})})}catch(d){console.log(d)}},a=()=>{o==null||o(e.id)};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),v(j,{icon:j9,onClick:a,style:{color:n==null?void 0:n.buttonIcons}})},nR=t=>{var o;const{todo:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{};return E.useEffect(()=>{s||localStorage.setItem("todosLocal",JSON.stringify(r))},[r]),C("li",{className:`TodoItem ${e.completed&&"completed"} Todo-${e.taskorreminder}`,style:{color:"black",backgroundColor:"#E15656"},children:[v(VT,{todo:e}),C("div",{className:"TodoItem__container",children:[" ",v("p",{style:{textDecoration:"line-through"},children:C("b",{children:[e.startTime!==void 0&&e.startTime!==""?`${e.startTime} | `:null,e.task]})})]}),C("div",{className:"TodoItem__icons",children:[v(tR,{todo:e}),v(eR,{todo:e})]}),((o=e.subTask)==null?void 0:o.length)>0&&v(zT,{todo:e})]})},rR=t=>{const{weekDisplayType:e,date:n,todos:r}=t,[i,s]=E.useState(!1),{allColors:o}=E.useContext(X)||{},a=r.filter(w=>w.taskorreminder!=="reminder").length,u=(r.filter(w=>w.completed&&w.taskorreminder!=="reminder").length/a*100).toFixed(0),c=new Date().toLocaleDateString("en-GB"),d=new Date(n).toLocaleDateString("en-GB"),h=new Date(n).toLocaleDateString("en-GB",{weekday:"short"}),p=()=>{s(!i);const w=localStorage.getItem("collapsedItems"),k=w?JSON.parse(w):[],m=k.find(f=>f.dayDate===n);if(m)m.IsDayCollapsed=!i;else{const f={dayDate:n,IsDayCollapsed:!i};k.push(f)}localStorage.setItem("collapsedItems",JSON.stringify(k))},y=w=>w.sort((k,m)=>{var I,N;const[f,g]=((I=k.startTime)==null?void 0:I.split(":").map(Number))??[0,0],[T,_]=((N=m.startTime)==null?void 0:N.split(":").map(Number))??[0,0];return f!==T?f-T:g-_});return E.useEffect(()=>{const w=localStorage.getItem("collapsedItems")||"",m=(w?JSON.parse(w):[]).find(({dayDate:f})=>f===n);m&&s(m.IsDayCollapsed)},[]),C(Yr,{children:[C("div",{className:`Daily-divider ${h} ${u==="100"&&"-completed-day"}`,style:{maxHeight:i?25:"3000px",transition:"max-height 0.7s",overflow:"hidden"},children:[C("div",{className:"Daily-divider__Header",children:[C("h3",{className:`Daily-divider__Header__Title date ${d===c?"todayDate":""}`,children:[" ",new Date(n).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})]}),C("div",{className:"percentageAndArchive",children:[v("p",{className:"Daily-divider__Header__Title",style:{color:u==="100"?"#2cd477":o==null?void 0:o.weeklyCardTxt},children:isNaN(parseFloat(u))?"No tasks today":`Day ${u}% completed`}),e&&v(j,{icon:i?vg:UT,onClick:p,style:{color:o==null?void 0:o.buttonIcons,fontSize:"14px",alignSelf:"center"}})]})]}),v("ul",{children:y(r).map(w=>w.isEditing?v(J9,{task:w},w.task):w.failed?v(nR,{todo:w},`failed-${w.task}`):v(X9,{todo:w},w.task))})]}),v("p",{className:"days-separator",children:". . ."})]})},iR=t=>{const{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i}=t,{allColors:s}=E.useContext(X)||{};return C("div",{className:`Weekly-divider__Header__Titles ${r==="100"&&"Weekly-divider__Header__Titles-complete"}`,style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${r}%, ${s==null?void 0:s.weeklyCardBG} ${i}%, ${s==null?void 0:s.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[C("h3",{style:{color:s==null?void 0:s.weeklyCardTxt},children:[e==="TodoWrapper"?"Week plan":n," "]}),C("p",{style:{color:s==null?void 0:s.weeklyCardTxt},children:["Week is ",r,"% completed"]})]})},sR=()=>{const{allColors:t}=E.useContext(X)||{},{setEditingWeekObjective:e}=E.useContext(jT);return C("button",{onClick:()=>e(!0),style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:[v(j,{icon:Yi}),"edit"]})},oR=t=>{var l;const{Weektodos:e}=t,{allColors:n,allTodos:r=[],setAllTodos:i=()=>{},isLoggedIn:s}=E.useContext(X)||{allTodos:[],setAllTodos:()=>{}},o=u=>{const c=e==null?void 0:e.map(d=>u.includes(d.id)?{...d,archived:!d.archived}:d);if(r){const d=[...r.filter(h=>!e.find(p=>p.id===h.id)),...c];i(d)}u.forEach(async d=>{var h;if(s)try{console.log("updating editing status in Firebase");const p=(h=te.currentUser)==null?void 0:h.email,y=ut(Le(Me,"todos"),oe("user","==",p),oe("id","==",d));(await ct(y)).docs.forEach(async k=>{await Vt(k.ref,{archived:!k.data().archived})})}catch(p){console.log(p)}})},a=(u=e)=>{if(Array.isArray(u)){const c=u.map(d=>d.id);o(c)}s||localStorage.setItem("todosLocal",JSON.stringify(r))};return C("button",{onClick:()=>a(),style:{backgroundColor:n==null?void 0:n.buttonIcons,color:n==null?void 0:n.buttonText},children:[" ",v(j,{icon:O9}),(l=e[0])!=null&&l.archived?"Unarchive":"Archive"]})},BT=t=>{var o,a;const{todoType:e,customKey:n}=t,{allTypes:r}=E.useContext(X)||{},i=(o=r==null?void 0:r.find(l=>l.id===e))==null?void 0:o.color,s=(a=r==null?void 0:r.find(l=>l.id===e))==null?void 0:a.icon;return v("div",{className:"((TodoItem__type-color",style:{backgroundColor:i??"gray",padding:"1px",width:"25px",height:"25px",borderRadius:"15%"},children:s&&v(j,{height:15,width:15,icon:s==="faShieldHeart"?Cg:s==="faLandmark"?Eg:s==="faCar"?Ig:s==="faLaptop"?gg:s==="faWeightScale"?wg:s==="faBook"?bg:s==="faMoneyBillTrendUp"?kg:s==="faGuitar"?Sg:s==="faHome"?_g:s==="faDumbbell"?Tg:s==="faPersonArrowUpFromLine"?yg:xg,style:{color:"#edf9f3"}})},n)},aR=t=>{const{todos:e,week:n}=t,{allColors:r,allTypes:i}=E.useContext(X)||{},s=e.filter(c=>c.nType!=="").map(c=>c.nType),o=[...new Set(s)],a=c=>(e==null?void 0:e.filter(d=>d.nType===c).length)||0,l=c=>{const d=(e==null?void 0:e.filter(h=>h.nType===c&&h.completed===!0).length)||0;return d&&d>0?d:0},u=c=>{const d=i==null?void 0:i.find(h=>h.id===c);return d==null?void 0:d.typeName};return v("div",{style:{display:"flex",gap:"5px 20px",justifyContent:"space-between",width:"100%",flexWrap:"wrap",padding:"3px 15px"},children:o.map(c=>C("div",{style:{display:"flex",gap:"2px",justifyContent:"center"},children:[" ",v(BT,{todoType:c,customKey:`progress=${n}`}),v("div",{children:C("p",{style:{color:r==null?void 0:r.weeklyCardTxt},children:[u(c),": ",l(c),"/",a(c)]})})]},`${c}-${n}`))})},jT=E.createContext(void 0),lR=t=>{const{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i,todos:s,weekCollapsed:o,handleCollapseClick:a}=t,[l,u]=E.useState(""),[c,d]=E.useState(!1),[h,p]=E.useState(!0),{allColors:y}=E.useContext(X)||{};E.useEffect(()=>{const k=localStorage.getItem(`${n}-weekObjective`);k&&u(k)},[]);const w=k=>{k.preventDefault(),u(l),localStorage.setItem(`${n}-weekObjective`,l),d(!1)};return v(jT.Provider,{value:{setEditingWeekObjective:d,weekObjective:l,setWeekObjective:u,editingWeekObjective:c},children:C("div",{className:`Weekly-divider__Header header_week_of_${e}`,children:[v(iR,{parentElement:e,week:n,weekPercentage:r,weekNotComplete:i}),v("div",{className:`Weekly-divider__Header__EditableContent ${r==="100"&&"Weekly-divider__Header__EditableContent-complete"}`,style:{borderTop:"1px solid "+(y==null?void 0:y.weeklyBorder)},children:c?C(Yr,{children:[" ",v("textarea",{className:"Weekly-divider__Header__EditableContent__Editinginput",value:l,onChange:k=>u(k.target.value)}),v("button",{onClick:w,style:{backgroundColor:y==null?void 0:y.buttonIcons,color:y==null?void 0:y.buttonText},children:"edit"})]}):C(Yr,{children:[" ",v("pre",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:y==null?void 0:y.weeklyCardTxt},children:l||"Write your week objective"}),C("div",{className:"editOrCollapse",children:[C("div",{children:[v(sR,{}),v(oR,{Weektodos:s}),C("button",{onClick:()=>p(!h),style:{backgroundColor:y==null?void 0:y.buttonIcons,color:y==null?void 0:y.buttonText},children:[v(j,{icon:V9}),"Progress"]})]}),v(j,{icon:o?vg:UT,onClick:a,style:{color:y==null?void 0:y.buttonIcons}})]})]})}),v("div",{style:{maxHeight:h?0:"2000px",transition:"max-height 0.7s",overflow:"hidden",width:"100%",margin:"10px auto"},children:v(aR,{todos:s,week:n})})]})})},HT=t=>{const{parentElement:e,week:n,weekList:r,todos:i}=t,[s,o]=E.useState(!1),{allColors:a}=E.useContext(X)||{doneTodoList:[],setDoneTodoList:()=>{}},l=[...new Set(i.map(y=>y.date))],u=[...new Set(i.filter(y=>y.taskorreminder!=="reminder"))],d=(u.filter(y=>y.completed&&y.taskorreminder!=="reminder").length/u.length*100).toFixed(0),h=parseInt(d)-100,p=()=>{o(!s)};return C("div",{className:`Weekly-divider ${r===!0?"vertical-divider-list":"Weekly-divider-list"}`,style:{backgroundColor:a==null?void 0:a.weeklyCardBG,border:"1px solid "+(a==null?void 0:a.weeklyBorder)},children:[v(lR,{parentElement:e,week:n,weekPercentage:d,todos:i,weekCollapsed:s,handleCollapseClick:p,weekNotComplete:h}),v("div",{style:{maxHeight:s?0:"4000px",transition:"max-height 0.7s"},className:`Weekly-divider__Content content_week_of_${e}`,children:l.map(y=>v(rR,{date:y,weekDisplayType:r,parentElement:e,todos:i.filter(w=>w.date===y)},y))})]})},WT=t=>{const{IconSelectionFunction:e,iconValue:n}=t,{allColors:r}=E.useContext(X)||{},i=(s,o)=>{let a=!1;s[0]==="#"&&(s=s.slice(1),a=!0);const l=parseInt(s,16);let u=(l>>16)+o;u>255?u=255:u<0&&(u=0);let c=(l>>8&255)+o;c>255?c=255:c<0&&(c=0);let d=(l&255)+o;return d>255?d=255:d<0&&(d=0),(a?"#":"")+(d|c<<8|u<<16).toString(16)};return C("div",{className:"TypeForm__icons",children:[v(j,{icon:xg,style:{backgroundColor:n===""?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("")}),v(j,{icon:Cg,style:{backgroundColor:n==="faShieldHeart"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faShieldHeart")}),v(j,{icon:Eg,style:{backgroundColor:n==="faLandmark"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faLandmark")}),v(j,{icon:Ig,style:{backgroundColor:n==="faCar"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faCar")}),v(j,{icon:gg,style:{backgroundColor:n==="faLaptop"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faLaptop")}),v(j,{icon:wg,style:{backgroundColor:n==="faWeightScale"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faWeightScale")}),v(j,{icon:bg,style:{backgroundColor:n==="faBook"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faBook")}),v(j,{icon:kg,style:{backgroundColor:n==="faMoneyBillTrendUp"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faMoneyBillTrendUp")}),v(j,{icon:Sg,style:{backgroundColor:n==="faGuitar"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faGuitar")}),v(j,{icon:_g,style:{backgroundColor:n==="faHome"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faHome")}),v(j,{icon:Tg,style:{backgroundColor:n==="faDumbbell"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faDumbbell")}),v(j,{icon:yg,style:{backgroundColor:n==="faPersonArrowUpFromLine"?i((r==null?void 0:r.buttonIcons)||"",-20):r==null?void 0:r.buttonIcons,color:r==null?void 0:r.buttonText},onClick:s=>e("faPersonArrowUpFromLine")})]})},uR=()=>{const[t,e]=E.useState(""),[n,r]=E.useState("#ABABAB"),[i,s]=E.useState(""),{allColors:o,allTypes:a=[],setAllTypes:l=()=>{},isLoggedIn:u}=E.useContext(X)||{},c=async(p,y,w)=>{var k;if(a===null){console.log("Types array is null");return}if(!(a!=null&&a.some(m=>m.typeName===p))){const m={id:uc(),user:((k=te.currentUser)==null?void 0:k.email)||"",typeName:p,color:y,icon:w||"",isEditing:!1},f=[...a,m];if(l(f),u)try{const g=Le(Me,"categories");await tg(g,m),console.log("sending TYPE to Firebase")}catch(g){console.log(g)}}},d=p=>{p.preventDefault(),t&&(c(t,n,i),e(""),r("#ABABAB"),s(""))},h=p=>s(p);return E.useEffect(()=>{u||localStorage.setItem("typesLocal",JSON.stringify(a))},[a]),C("form",{className:"TypeForm",onSubmit:d,style:{background:o==null?void 0:o.formBackgroundColor},children:[C("div",{className:"TypeForm__Task type-form-organizer",children:[v("input",{type:"color",id:"favcolor",name:"favcolor",value:n,onChange:p=>r(p.target.value)}),v("input",{type:"text",value:t,placeholder:"New Category",onChange:p=>e(p.target.value)}),v("button",{type:"submit",className:"add-btn",style:{backgroundColor:o==null?void 0:o.buttonIcons,color:o==null?void 0:o.buttonText},children:"Add Type"})]}),v(WT,{iconValue:i,IconSelectionFunction:h})]})},cR=t=>{const{type:e}=t,{allColors:n,allTodos:r,allTypes:i,setAllTypes:s=()=>{},isLoggedIn:o}=E.useContext(X)||{},a=async u=>{var d;const c=(i==null?void 0:i.map(h=>h.id===u?{...h,isEditing:!h.isEditing}:h))||[];if(s(c),o)try{console.log("changing isEditing on TYPE from Firebase");const h=(d=te.currentUser)==null?void 0:d.email,p=ut(Le(Me,"categories"),oe("user","==",h),oe("id","==",u));(await ct(p)).docs.forEach(async w=>{await Vt(w.ref,{isEditing:!w.data().isEditing})})}catch(h){console.log(h)}},l=()=>{a==null||a(e.id)};return E.useEffect(()=>{o||localStorage.setItem("typesLocal",JSON.stringify(i))},[i]),v(j,{icon:Yi,onClick:l,style:{color:n==null?void 0:n.buttonIcons}})},dR=t=>{const{type:e}=t,{allColors:n,allTodos:r,allTypes:i,setAllTypes:s=()=>{},isLoggedIn:o}=E.useContext(X)||{},a=async(u,c)=>{var d;if(r&&r.some(h=>h.nType===c))alert("You cannot delete a type that is being used");else{const h=(i==null?void 0:i.filter(p=>p.id!==c))||[];if(s(h),o)try{console.log("deleting TYPE from Firebase");const p=(d=te.currentUser)==null?void 0:d.email,y=ut(Le(Me,"categories"),oe("user","==",p),oe("id","==",c));(await ct(y)).docs.forEach(async k=>{await iT(k.ref)})}catch(p){console.log(p)}}},l=()=>{a==null||a(e.typeName,e.id)};return E.useEffect(()=>{o||localStorage.setItem("typesLocal",JSON.stringify(i))},[i]),v(j,{icon:mo,onClick:l,style:{color:n==null?void 0:n.buttonIcons}})},hR=t=>{const{type:e}=t,{allColors:n,allTodos:r=[],allTypes:i=[],isLoggedIn:s}=E.useContext(X)||{},o=l=>(r||[]).filter(c=>c.nType===l).length,a=l=>{const u=r==null?void 0:r.filter(c=>c.nType===l&&c.completed===!0).length;return u&&u>0?u:0};return E.useEffect(()=>{s||localStorage.setItem("typesLocal",JSON.stringify(i))},[i]),C("div",{className:"TypeItem",style:{backgroundColor:n==null?void 0:n.formBackgroundColor,color:n==null?void 0:n.itemText},children:[v(BT,{todoType:e.id,customKey:`typeItem-${e.id}`}),C("div",{className:"types-nameNnumber",children:[" ",v("p",{children:e.typeName}),v("p",{className:"types-nameNnumber__number",children:`[${a(e.id)}/${o(e.id)}]`})]}),C("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"},children:[v(cR,{type:e},`${e.id}-edit-button`),v(dR,{type:e},`${e.id}-delete-button`)]})]},`typeItem-${e.id}`)},fR=t=>{const{type:e}=t,[n,r]=E.useState(e.typeName),[i,s]=E.useState(e.color),[o,a]=E.useState(e.icon),{allColors:l,allTodos:u,allTypes:c,setAllTypes:d=()=>{},isLoggedIn:h}=E.useContext(X)||{},p=k=>a(k),y=async(k,m,f,g)=>{var _;if(h)try{console.log("Updating ype in Firebase");const I=(_=te.currentUser)==null?void 0:_.email,N=ut(Le(Me,"categories"),oe("user","==",I),oe("id","==",k));(await ct(N)).docs.forEach(async W=>{await Vt(W.ref,{typeName:m,color:f,icon:g,isEditing:!1})})}catch(I){console.error("Error updating document: ",I)}const T=(c||[]).map(I=>I.id===k?{...I,typeName:m,color:f,icon:g,isEditing:!1}:I);d(T)},w=k=>{k.preventDefault(),y==null||y(e.id,n,i,o)};return E.useEffect(()=>{h||localStorage.setItem("typesLocal",JSON.stringify(c))},[c]),C("form",{className:"TypeItem",style:{backgroundColor:l==null?void 0:l.formBackgroundColor,color:l==null?void 0:l.itemText},children:[v("input",{type:"color",id:"favcolor",name:"favcolor",value:i,onChange:k=>s(k.target.value)}),v("input",{type:"text",value:n,placeholder:"Update task",className:"EditTodoForm__Task__input",onChange:k=>r(k.target.value)}),v("button",{type:"submit",onClick:w,children:"Submit"}),v(WT,{iconValue:o,IconSelectionFunction:p})]},`typeItem-${e.id}`)},qT=()=>{const{allTypes:t,isLoggedIn:e}=E.useContext(X)||{};return E.useEffect(()=>{e||localStorage.setItem("typesLocal",JSON.stringify(t))},[t]),v(Yr,{children:t==null?void 0:t.map(n=>n.isEditing?v(fR,{type:n},n.id):v(hR,{type:n},n.id))})};/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const F1="popstate";function pR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return jf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wu(i)}return gR(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ng(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mR(){return Math.random().toString(36).substr(2,8)}function U1(t,e){return{usr:t.state,key:t.key,idx:e}}function jf(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xs(e):e,{state:n,key:e&&e.key||r||mR()})}function Wu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ea({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nr.Pop;let k=c(),m=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:m})}function h(k,m){a=nr.Push;let f=jf(w.location,k,m);n&&n(f,k),u=c()+1;let g=U1(f,u),T=w.createHref(f);try{o.pushState(g,"",T)}catch{i.location.assign(T)}s&&l&&l({action:a,location:w.location,delta:1})}function p(k,m){a=nr.Replace;let f=jf(w.location,k,m);n&&n(f,k),u=c();let g=U1(f,u),T=w.createHref(f);o.replaceState(g,"",T),s&&l&&l({action:a,location:w.location,delta:0})}function y(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:Wu(k);return Re(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(F1,d),l=k,()=>{i.removeEventListener(F1,d),l=null}},createHref(k){return e(i,k)},createURL:y,encodeLocation(k){let m=y(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(k){return o.go(k)}};return w}var V1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(V1||(V1={}));function yR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xs(e):e,i=Ag(r.pathname||"/",n);if(i==null)return null;let s=GT(t);vR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bR(s[a],AR(i));return o}function GT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:IR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of KT(s.path))i(s,o,l)}),e}function KT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function vR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wR=/^:\w+$/,kR=3,ER=2,TR=1,_R=10,SR=-2,z1=t=>t==="*";function IR(t,e){let n=t.split("/"),r=n.length;return n.some(z1)&&(r+=SR),e&&(r+=ER),n.filter(i=>!z1(i)).reduce((i,s)=>i+(wR.test(s)?kR:s===""?TR:_R),r)}function CR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=xR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:OR(gr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function xR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=RR(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function NR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ng(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AR(t){try{return decodeURI(t)}catch(e){return Ng(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function RR(t,e){try{return decodeURIComponent(t)}catch(n){return Ng(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ag(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function PR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xs(t):t;return{pathname:n?n.startsWith("/")?n:DR(n,e):e,search:LR(r),hash:MR(i)}}function DR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function YT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xs(t):(i=ea({},t),Re(!i.pathname||!i.pathname.includes("?"),Xd("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Xd("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Xd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=PR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),OR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $R(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qu(){return qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qu.apply(this,arguments)}const Rg=E.createContext(null),FR=E.createContext(null),Ns=E.createContext(null),qc=E.createContext(null),gi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),XT=E.createContext(null);function UR(t,e){let{relative:n}=e===void 0?{}:e;Oa()||Re(!1);let{basename:r,navigator:i}=E.useContext(Ns),{hash:s,pathname:o,search:a}=ZT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Oa(){return E.useContext(qc)!=null}function Gc(){return Oa()||Re(!1),E.useContext(qc).location}function JT(t){E.useContext(Ns).static||E.useLayoutEffect(t)}function VR(){let{isDataRoute:t}=E.useContext(gi);return t?ZR():zR()}function zR(){Oa()||Re(!1);let t=E.useContext(Rg),{basename:e,navigator:n}=E.useContext(Ns),{matches:r}=E.useContext(gi),{pathname:i}=Gc(),s=JSON.stringify(QT(r).map(l=>l.pathnameBase)),o=E.useRef(!1);return JT(()=>{o.current=!0}),E.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=YT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:gr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function ZT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(gi),{pathname:i}=Gc(),s=JSON.stringify(QT(r).map(o=>o.pathnameBase));return E.useMemo(()=>YT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function BR(t,e){return jR(t,e)}function jR(t,e,n){Oa()||Re(!1);let{navigator:r}=E.useContext(Ns),{matches:i}=E.useContext(gi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Gc(),u;if(e){var c;let w=typeof e=="string"?xs(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Re(!1),u=w}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=yR(t,{pathname:h}),y=KR(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:gr([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:gr([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&y?E.createElement(qc.Provider,{value:{location:qu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nr.Pop}},y):y}function HR(){let t=JR(),e=$R(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}const WR=E.createElement(HR,null);class qR extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(gi.Provider,{value:this.props.routeContext},E.createElement(XT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GR(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Rg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(gi.Provider,{value:e},r)}function KR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||WR);let h=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=d:l.route.Component?y=E.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,E.createElement(GR,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?E.createElement(qR,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hf||(Hf={}));var ta;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ta||(ta={}));function QR(t){let e=E.useContext(Rg);return e||Re(!1),e}function YR(t){let e=E.useContext(FR);return e||Re(!1),e}function XR(t){let e=E.useContext(gi);return e||Re(!1),e}function e_(t){let e=XR(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function JR(){var t;let e=E.useContext(XT),n=YR(ta.UseRouteError),r=e_(ta.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ZR(){let{router:t}=QR(Hf.UseNavigateStable),e=e_(ta.UseNavigateStable),n=E.useRef(!1);return JT(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qu({fromRouteId:e},s)))},[t,e])}function Hl(t){Re(!1)}function eP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nr.Pop,navigator:s,static:o=!1}=t;Oa()&&Re(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=xs(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,y=E.useMemo(()=>{let w=Ag(u,a);return w==null?null:{location:{pathname:w,search:c,hash:d,state:h,key:p},navigationType:i}},[a,u,c,d,h,p,i]);return y==null?null:E.createElement(Ns.Provider,{value:l},E.createElement(qc.Provider,{children:n,value:y}))}function tP(t){let{children:e,location:n}=t;return BR(Wf(e),n)}var B1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(B1||(B1={}));new Promise(()=>{});function Wf(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Wf(r.props.children,s));return}r.type!==Hl&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qf(){return qf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qf.apply(this,arguments)}function nP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function iP(t,e){return t.button===0&&(!e||e==="_self")&&!rP(t)}const sP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function oP(t){let{basename:e,children:n,window:r}=t,i=E.useRef();i.current==null&&(i.current=pR({window:r,v5Compat:!0}));let s=i.current,[o,a]=E.useState({action:s.action,location:s.location});return E.useLayoutEffect(()=>s.listen(a),[s]),E.createElement(eP,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const aP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jd=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=nP(e,sP),{basename:h}=E.useContext(Ns),p,y=!1;if(typeof u=="string"&&lP.test(u)&&(p=u,aP))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),T=Ag(g.pathname,h);g.origin===f.origin&&T!=null?u=T+g.search+g.hash:y=!0}catch{}let w=UR(u,{relative:i}),k=uP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||k(f)}return E.createElement("a",qf({},d,{href:p||w,onClick:y||s?r:m,ref:n,target:l}))});var j1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(j1||(j1={}));var H1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(H1||(H1={}));function uP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=VR(),l=Gc(),u=ZT(t,{relative:o});return E.useCallback(c=>{if(iP(c,n)){c.preventDefault();let d=r!==void 0?r:Wu(l)===Wu(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function Pg(){const{allColors:t}=E.useContext(X)||{};return C("div",{className:"navigation",children:[v(Jd,{to:"/Complex-todolist/",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:v("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Home"})}),v(Jd,{to:"/Complex-todolist/archive",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:v("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Archive"})}),v(Jd,{to:"/Complex-todolist/styles",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:v("p",{style:{color:t==null?void 0:t.titleTextColor},children:"Styles"})})]})}function t_(){const{allColors:t}=E.useContext(X)||{};return v("div",{className:"bottom-buttons",children:v("button",{onClick:async()=>{try{await hC(te)}catch(n){console.log(n)}},style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:"LogOut"})})}const n_=({filterOneItem:t})=>{const[e,n]=E.useState(""),{allColors:r,allTypes:i}=E.useContext(X)||{},s=o=>{t(o===""?"":o),n(o)};return v("form",{className:"TodoForm",style:{background:r==null?void 0:r.formBackgroundColor},children:C("div",{className:"TodoForm__CatDate",children:[v("div",{className:"TodoForm__CatDate__category",children:C("select",{id:"type",name:"type",value:e,onChange:o=>s(o.target.value),children:[v("option",{value:"",children:"Show all"},"type-id-no-type"),i==null?void 0:i.map(o=>v("option",{value:o.typeName,children:o.typeName},`type-id ${o.id}`))]})}),v("label",{style:{color:r==null?void 0:r.titleTextColor},children:"Filter One (testing)"})]})})},r_=()=>{const{allColors:t}=E.useContext(X)||{},{setWeekList:e,weekList:n}=E.useContext(i_)||{setWeekList:()=>{}};return C("div",{className:"changeWeekList",children:[v("p",{className:"changeWeekList__title",style:{color:t==null?void 0:t.titleTextColor},children:"Display type"}),C("div",{className:"changeWeekList__buttons",children:[C("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:t==null?void 0:t.buttonIcons,opacity:n?1:.85},onClick:()=>e(!0),children:[v(j,{icon:M9,style:{color:t==null?void 0:t.buttonText}}),v("span",{style:{color:t==null?void 0:t.buttonText},children:" List"})]}),C("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:t==null?void 0:t.buttonIcons,opacity:n?.85:1},onClick:()=>e(!1),children:[v(j,{icon:D9,style:{color:t==null?void 0:t.buttonText}}),v("span",{style:{color:t==null?void 0:t.buttonText},children:" Calendar"})]})]})]})};var cP={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},dP={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Kc(){const{allColors:t}=E.useContext(X)||{};return C("div",{className:"personal-links",children:[v("a",{href:"https://www.linkedin.com/in/jose-david-molina-sosa-webdev/?locale=en_US",target:"_blank",rel:"samecreator",children:v(j,{icon:cP,style:{color:t==null?void 0:t.mainTitleColor}})}),v("a",{href:"https://cheoworkshop.info/",target:"_blank",rel:"samecreator",children:v(j,{icon:$9,style:{color:t==null?void 0:t.mainTitleColor}})}),v("a",{href:"https://github.com/Aredros",target:"_blank",rel:"samecreator",children:v(j,{icon:dP,style:{color:t==null?void 0:t.mainTitleColor}})})]})}const i_=E.createContext({setWeekList:()=>{},weekList:!1}),hP=()=>{const{allColors:t,allTodos:e=[],isLoggedIn:n}=E.useContext(X)||{},[r,i]=E.useState(!0),[s,o]=E.useState(null),a=d=>Array.isArray(d)?d.sort((h,p)=>new Date(h.date).getTime()-new Date(p.date).getTime()):[],l=[...new Set(e?a(e).map(d=>u(d.date)):[])];function u(d){const h=new Date(d);if(!isNaN(h.getTime())){h.setHours(0,0,0,0),h.setDate(h.getDate()+4-(h.getDay()||7));const p=new Date(h.getFullYear(),0,1),y=Math.ceil(((+h-+p)/864e5+1)/7);return`${h.getFullYear()}-W${y.toString().padStart(2,"0")}`}return""}function c(d){o(d)}return C("div",{className:`TodoWrapper ${!r&&"TodoWrapper--weekly"}`,style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[v(Pg,{}),C("div",{className:"MainTitle-and-subtitle",children:[v(Kc,{}),v("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Week Planner"}),v("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),v(LA,{}),n&&v(n_,{filterOneItem:c}),v(i_.Provider,{value:{setWeekList:i,weekList:r},children:v(r_,{})}),l.map(d=>(e==null?void 0:e.some(h=>!h.archived&&u(h.date)===d))&&v(HT,{parentElement:"TodoWrapper",weekList:r,week:d,todos:e.filter(h=>u(h.date)===d&&!h.archived&&(!s||h.nType===s))},d)),v(uR,{}),v("div",{className:"TypeArea",children:v(qT,{})}),v(t_,{})]})},fP=()=>{var d;const[t,e]=Ue.useState(""),[n,r]=Ue.useState(""),[i,s]=Ue.useState(!1),{allColors:o}=E.useContext(X)||{};console.log((d=te==null?void 0:te.currentUser)==null?void 0:d.email);const a=async()=>{try{await aC(te,t,n)}catch(h){console.log(h)}},l=async()=>{try{await lC(te,t,n)}catch(h){console.log(h)}},u=async()=>{try{await DC(te,OA)}catch(h){console.log(h)}},c=async()=>{try{await rC(te)}catch(h){console.log(h)}};return C("div",{className:"TodoWrapper auth",children:[v(Kc,{}),v("h1",{style:{color:o==null?void 0:o.mainTitleColor},children:"Complex Todo"}),v("p",{className:"h1sub",style:{color:o==null?void 0:o.mainTitleColor},children:"By Cheo"}),v("button",{onClick:c,children:"Use without logging in"}),v("div",{className:"auth__inputs",children:i?C("div",{className:"auth__inputs__register",children:[v("h2",{children:"Register new account"}),v("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),v("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),v("button",{className:"add-btn auth-btn",onClick:a,children:"Sign in"})]}):C("div",{className:"auth__inputs__login",children:[v("h2",{children:"Login with your account"}),v("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),v("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),v("button",{className:"add-btn  auth-btn",onClick:l,children:"Login"}),C("p",{children:["Don't have an account?"," ",v("a",{onClick:()=>s(!0),children:"Register"})]})]})}),v("div",{className:"auth__buttons",children:v("button",{className:"add-btn",onClick:u,children:"Sign in with Google"})})]})};function pP(){const{allColors:t,setAllColors:e}=E.useContext(X)||{},[n,r]=Ue.useState(t==null?void 0:t.outerBackgroundColor),[i,s]=Ue.useState(t==null?void 0:t.innerBackgroundColor),[o,a]=Ue.useState(t==null?void 0:t.mainTitleColor),[l,u]=Ue.useState(t==null?void 0:t.titleTextColor),[c,d]=Ue.useState(t==null?void 0:t.weeklyCardBG),[h,p]=Ue.useState(t==null?void 0:t.weeklyCardTxt),[y,w]=Ue.useState(t==null?void 0:t.buttonIcons),[k,m]=Ue.useState(t==null?void 0:t.buttonText),[f,g]=Ue.useState(t==null?void 0:t.formBackgroundColor),[T,_]=Ue.useState(t==null?void 0:t.itemBackgroundColor),[I,N]=Ue.useState(t==null?void 0:t.itemText),[R,W]=Ue.useState(t==null?void 0:t.reminderBackgroundColor),M=(P,tn)=>{e&&e(nn=>({...nn,[P]:tn})),localStorage.setItem(P,tn)},se={change_outerBackgroundColor:P=>{M("outerBackgroundColor",P)},change_innerBackgroundColor:P=>{M("innerBackgroundColor",P)},change_mainTitleColor:P=>{M("mainTitleColor",P)},change_titleTextColor:P=>{M("titleTextColor",P)},change_weeklyCardBG:P=>{M("weeklyCardBG",P)},change_weeklyCardTxt:P=>{M("weeklyCardTxt",P)},change_buttonIcons:P=>{M("buttonIcons",P)},change_buttonText:P=>{M("buttonText",P)},change_formBackgroundColor:P=>{M("formBackgroundColor",P)},change_itemBackgroundColor:P=>{M("itemBackgroundColor",P)},change_itemText:P=>{M("itemText",P)},change_reminderBackgroundColor:P=>{M("reminderBackgroundColor",P)}};return C("form",{className:"editColor-form",children:[C("div",{children:[v("input",{type:"color",value:n,onChange:P=>{se.change_outerBackgroundColor(P.target.value),r(P.target.value)}}),v("label",{children:" Outer Background"})]}),C("div",{children:[v("input",{type:"color",value:i,onChange:P=>{se.change_innerBackgroundColor(P.target.value),s(P.target.value)}}),v("label",{children:" Inner Background"})]}),C("div",{children:[v("input",{type:"color",value:o,onChange:P=>{se.change_mainTitleColor(P.target.value),a(P.target.value)}}),v("label",{children:"Main Title Text"})]}),C("div",{children:[v("input",{type:"color",value:l,onChange:P=>{se.change_titleTextColor(P.target.value),u(P.target.value)}}),v("label",{children:"Tabs and titles"})]}),C("div",{children:[v("input",{type:"color",value:c,onChange:P=>{se.change_weeklyCardBG(P.target.value),d(P.target.value)}}),v("label",{children:"Week-Card Background"})]}),C("div",{children:[v("input",{type:"color",value:h,onChange:P=>{se.change_weeklyCardTxt(P.target.value),p(P.target.value)}}),v("label",{children:"Week-Card Text"})]}),C("div",{children:[v("input",{type:"color",value:y,onChange:P=>{se.change_buttonIcons(P.target.value),w(P.target.value)}}),v("label",{children:"Button Bg & icons"})]}),C("div",{children:[v("input",{type:"color",value:k,onChange:P=>{se.change_buttonText(P.target.value),m(P.target.value)}}),v("label",{children:"Buttons Text"})]}),C("div",{children:[v("input",{type:"color",value:f,onChange:P=>{se.change_formBackgroundColor(P.target.value),g(P.target.value)}}),v("label",{children:"Form Background"})]}),C("div",{children:[v("input",{type:"color",value:T,onChange:P=>{se.change_itemBackgroundColor(P.target.value),_(P.target.value)}}),v("label",{children:"Task Item Background"})]}),C("div",{children:[v("input",{type:"color",value:I,onChange:P=>{se.change_itemText(P.target.value),N(P.target.value)}}),v("label",{children:"Task Item Text"})]}),C("div",{children:[v("input",{type:"color",value:R,onChange:P=>{se.change_reminderBackgroundColor(P.target.value),W(P.target.value)}}),v("label",{children:"Reminder Background"})]})]})}function mP(){const{allColors:t}=E.useContext(X)||{};return C("div",{className:"TodoWrapper",style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[v(Pg,{}),C("div",{className:"MainTitle-and-subtitle",children:[v(Kc,{}),v("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Styles"}),v("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),v("h2",{style:{color:t==null?void 0:t.titleTextColor},children:"Edit Styles"}),v(pP,{}),v("br",{}),v("h3",{style:{color:t==null?void 0:t.titleTextColor},children:"Example:"}),v("br",{}),C("div",{className:"Weekly-divider",style:{backgroundColor:t==null?void 0:t.weeklyCardBG},children:[C("div",{className:"Weekly-divider__Header",children:[C("div",{className:"Weekly-divider__Header__Titles",style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 49%, ${t==null?void 0:t.weeklyCardBG} 50%, ${t==null?void 0:t.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[v("h3",{style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week plan"}),v("p",{style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week is 50% completed"})]}),C("div",{className:"Weekly-divider__Header__EditableContent",children:[v("p",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:t==null?void 0:t.weeklyCardTxt},children:"Week objective here"}),C("div",{className:"editOrCollapse",children:[v("button",{style:{backgroundColor:t==null?void 0:t.buttonIcons,color:t==null?void 0:t.buttonText},children:"edit"}),v(j,{icon:vg,style:{color:t==null?void 0:t.buttonIcons}})]})]})]}),v("div",{className:"Weekly-divider__Content",children:C("div",{className:"Daily-divider",children:[C("div",{className:"Daily-divider__Header",children:[C("h3",{className:"Daily-divider__Header__Title date",children:[" ","Mon, 29 May"]}),v("p",{className:"Daily-divider__Header__Title",children:"Day 50% completed"})]}),C("ul",{children:[C("li",{className:"TodoItem Todo-task",style:{color:t==null?void 0:t.itemText,backgroundColor:t==null?void 0:t.itemBackgroundColor},children:[v("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),C("div",{className:"TodoItem__container",children:[" ",v("p",{children:"Here goes the task / No-cat"})]}),C("div",{className:"TodoItem__icons",children:[v(j,{icon:Yi,style:{color:t==null?void 0:t.buttonIcons}}),v(j,{icon:mo,style:{color:t==null?void 0:t.buttonIcons}})]})]}),C("li",{className:"TodoItem Todo-task",style:{color:t==null?void 0:t.itemText,backgroundColor:t==null?void 0:t.itemBackgroundColor},children:[v("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),C("div",{className:"TodoItem__container",children:[" ",v("p",{children:"A second task / No-cat"})]}),C("div",{className:"TodoItem__icons",children:[v(j,{icon:Yi,style:{color:t==null?void 0:t.buttonIcons}}),v(j,{icon:mo,style:{color:t==null?void 0:t.buttonIcons}})]})]}),C("li",{className:"TodoItem Todo-reminder",style:{backgroundColor:t==null?void 0:t.reminderBackgroundColor},children:[v("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),C("div",{className:"TodoItem__container",children:[" ",v("p",{children:"Reminder example"})]}),C("div",{className:"TodoItem__icons",children:[v(j,{icon:Yi,style:{color:t==null?void 0:t.buttonIcons}}),v(j,{icon:mo,style:{color:t==null?void 0:t.buttonIcons}})]})]})]})]})})]})]})}const gP=E.createContext({setWeekList:()=>{}}),yP=()=>{const{allColors:t,allTodos:e=[],isLoggedIn:n}=E.useContext(X)||{},[r,i]=E.useState(!0),[s,o]=E.useState(null),a=d=>d.sort((h,p)=>new Date(h.date).getTime()-new Date(p.date).getTime()),l=[...new Set(e?a(e).map(d=>u(d.date)):[])];function u(d){const h=new Date(d);h.setHours(0,0,0,0),h.setDate(h.getDate()+4-(h.getDay()||7));const p=new Date(h.getFullYear(),0,1),y=Math.ceil(((+h-+p)/864e5+1)/7);return`${h.getFullYear()}-W${y.toString().padStart(2,"0")}`}function c(d){o(d)}return C("div",{className:`TodoWrapper ${!r&&"TodoWrapper--weekly"}`,style:{backgroundColor:t==null?void 0:t.innerBackgroundColor},children:[v(Pg,{}),C("div",{className:"MainTitle-and-subtitle",children:[v(Kc,{}),v("h1",{style:{color:t==null?void 0:t.mainTitleColor},children:"Archive"}),v("p",{className:"h1sub",style:{color:t==null?void 0:t.mainTitleColor},children:"By Cheo"})]}),n&&v(n_,{filterOneItem:c}),v(gP.Provider,{value:{setWeekList:i},children:v(r_,{})}),l.map(d=>(e==null?void 0:e.some(h=>h.archived&&u(h.date)===d))&&v(HT,{parentElement:"Archive",weekList:r,week:d,todos:e.filter(h=>u(h.date)===d&&h.archived&&(!s||h.nType===s))},d)),v(qT,{}),v(t_,{})]})},X=E.createContext(void 0);function vP(){const[t,e]=E.useState(!1),[n,r]=E.useState(!1),[i,s]=E.useState([{id:"0101",task:"Mock task",completed:!1,isEditing:!1,taskorreminder:"task",user:"",nType:"",date:"",startTime:"",archived:!1,failed:!1,subTask:[{subTaskCompleted:!1,subTask:"Mock subtask",subTaskID:"0101",isSubtaskEditing:!1}]}]),[o,a]=E.useState([{id:"1",user:"",typeName:"No-cat",color:"#f8f8f8",icon:"",isEditing:!1}]),[l,u]=E.useState(!1),[c,d]=E.useState({outerBackgroundColor:"#334549",innerBackgroundColor:"#ffffff",mainTitleColor:"#000000",titleTextColor:"#005657",weeklyCardBG:"#ffffff",weeklyBorder:"#005657",weeklyCardTxt:"#000000",buttonIcons:"#005657",buttonText:"#ffffff",formBackgroundColor:"#5c72b280",itemBackgroundColor:"#ffffff",itemText:"#000000",reminderBackgroundColor:"#ffde8c"}),[h,p]=E.useState({startTimeSettings:!1});return E.useEffect(()=>{e(!0),setTimeout(()=>{e(!1)},4e3),o==null||o.map(w=>w.isEditing===void 0?{...w,isEditing:!1}:w),Object.keys(c).forEach(w=>{const k=localStorage.getItem(w)||"";if(k)try{d(m=>({...m,[w]:k}))}catch(m){console.log(`Error parsing stored color for ${w}:`,m)}});const y=te.onAuthStateChanged(w=>{u(w?!w.isAnonymous:!1)});return()=>{y()}},[]),E.useEffect(()=>{const y=async()=>{try{if(te.currentUser){const k=te.currentUser.email,m=ut(Le(Me,"todos"),oe("user","==",k)),f=await ct(m),g=[],T=new Set;f.docs.forEach(_=>{const I=_.data();T.has(I.id)||(g.push(I),T.add(I.id))}),s(g),console.log("Todos from database:",g)}}catch(k){console.log(k)}};if(l)y();else{const k=localStorage.getItem("todosLocal")||"[]";try{s(JSON.parse(k))}catch(m){console.log("Error parsing stored todos:",m)}}const w=te.onAuthStateChanged(k=>{u(k?!k.isAnonymous:!1)});return()=>{w()}},[l]),E.useEffect(()=>{const y=async()=>{try{if(te.currentUser){const k=te.currentUser.email,m=ut(Le(Me,"categories"),oe("user","==",k)),f=await ct(m),g=[],T=new Set;f.docs.forEach(_=>{const I=_.data();T.has(I.id)||(g.push(I),T.add(I.id))}),a(g),console.log("Types from database:",g)}}catch(k){console.log(k)}};if(l)y();else{const k=localStorage.getItem("typesLocal")||"[]";try{a(JSON.parse(k))}catch(m){console.log("Error parsing stored types:",m)}}const w=te.onAuthStateChanged(k=>{u(k?!k.isAnonymous:!1)});return()=>{w()}},[l]),E.useEffect(()=>{const y=dC(te,w=>{r(!!w)});return()=>y()},[]),v(X.Provider,{value:{allColors:c,setAllColors:d,allTypes:o,setAllTypes:a,allTodos:i,setAllTodos:s,isLoggedIn:l,advancedConfig:h,setAdvancedConfig:p},children:v("div",{className:"App",style:{backgroundColor:c.outerBackgroundColor},children:t?v("div",{className:"loading",children:C("div",{className:"loading-box",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180",height:"180",viewBox:"0 0 24 24",children:v("path",{fill:"#e5bf16",d:"M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z",children:v("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})})}),v("img",{className:"django-loading",src:O4,alt:"django"})]})}):v(Yr,{children:n?v(oP,{children:C(tP,{children:[v(Hl,{path:"/Complex-todolist/",element:v(hP,{})}),v(Hl,{path:"/Complex-todolist/archive",element:v(yP,{})}),v(Hl,{path:"/Complex-todolist/styles",element:v(mP,{})})]})}):v(fP,{})})})})}Zd.createRoot(document.getElementById("root")).render(v(Ue.StrictMode,{children:v(vP,{})}));
