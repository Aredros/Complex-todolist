(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uo={},RT={get exports(){return uo},set exports(t){uo=t}},Vu={},I={},PT={get exports(){return I},set exports(t){I=t}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),DT=Symbol.for("react.portal"),OT=Symbol.for("react.fragment"),LT=Symbol.for("react.strict_mode"),$T=Symbol.for("react.profiler"),MT=Symbol.for("react.provider"),FT=Symbol.for("react.context"),UT=Symbol.for("react.forward_ref"),zT=Symbol.for("react.suspense"),VT=Symbol.for("react.memo"),BT=Symbol.for("react.lazy"),ag=Symbol.iterator;function jT(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var T0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S0=Object.assign,C0={};function os(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||T0}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I0(){}I0.prototype=os.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||T0}var Uf=Ff.prototype=new I0;Uf.constructor=Ff;S0(Uf,os.prototype);Uf.isPureReactComponent=!0;var lg=Array.isArray,x0=Object.prototype.hasOwnProperty,zf={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x0.call(e,r)&&!b0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xo,type:t,key:s,ref:o,props:i,_owner:zf.current}}function HT(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function WT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ug=/\/+/g;function Vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WT(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case DT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vc(o,0):r,lg(i)?(n="",t!=null&&(n=t.replace(ug,"$&/")+"/"),pl(i,e,n,"",function(u){return u})):i!=null&&(Vf(i)&&(i=HT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ug,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vc(s,a);o+=pl(s,e,n,l,i)}else if(l=jT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vc(s,a++),o+=pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},ml={transition:null},KT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ml,ReactCurrentOwner:zf};J.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=os;J.Fragment=OT;J.Profiler=$T;J.PureComponent=Ff;J.StrictMode=LT;J.Suspense=zT;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=S0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x0.call(e,l)&&!b0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:FT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MT,_context:t},t.Consumer=t};J.createElement=N0;J.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:UT,render:t}};J.isValidElement=Vf;J.lazy=function(t){return{$$typeof:BT,_payload:{_status:-1,_result:t},_init:GT}};J.memo=function(t,e){return{$$typeof:VT,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(t,e){return ft.current.useCallback(t,e)};J.useContext=function(t){return ft.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};J.useEffect=function(t,e){return ft.current.useEffect(t,e)};J.useId=function(){return ft.current.useId()};J.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return ft.current.useMemo(t,e)};J.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};J.useRef=function(t){return ft.current.useRef(t)};J.useState=function(t){return ft.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return ft.current.useTransition()};J.version="18.2.0";(function(t){t.exports=J})(PT);const je=AT(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=I,QT=Symbol.for("react.element"),YT=Symbol.for("react.fragment"),XT=Object.prototype.hasOwnProperty,JT=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZT={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XT.call(e,r)&&!ZT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QT,type:t,key:s,ref:o,props:i,_owner:JT.current}}Vu.Fragment=YT;Vu.jsx=A0;Vu.jsxs=A0;(function(t){t.exports=Vu})(RT);const Fl=uo.Fragment,w=uo.jsx,b=uo.jsxs;var Hh={},Wh={},eS={get exports(){return Wh},set exports(t){Wh=t}},bt={},Gh={},tS={get exports(){return Gh},set exports(t){Gh=t}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,q){var Y=P.length;P.push(q);e:for(;0<Y;){var Te=Y-1>>>1,Le=P[Te];if(0<i(Le,q))P[Te]=q,P[Y]=Le,Y=Te;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var q=P[0],Y=P.pop();if(Y!==q){P[0]=Y;e:for(var Te=0,Le=P.length,ba=Le>>>1;Te<ba;){var xr=2*(Te+1)-1,zc=P[xr],br=xr+1,Na=P[br];if(0>i(zc,Y))br<Le&&0>i(Na,zc)?(P[Te]=Na,P[br]=Y,Te=br):(P[Te]=zc,P[xr]=Y,Te=xr);else if(br<Le&&0>i(Na,Y))P[Te]=Na,P[br]=Y,Te=br;else break e}}return q}function i(P,q){var Y=P.sortIndex-q.sortIndex;return Y!==0?Y:P.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=P)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function k(P){if(v=!1,g(P),!y)if(n(l)!==null)y=!0,lt(_);else{var q=n(u);q!==null&&mt(k,q.startTime-P)}}function _(P,q){y=!1,v&&(v=!1,p(O),O=-1),m=!0;var Y=d;try{for(g(q),h=n(l);h!==null&&(!(h.expirationTime>q)||P&&!_t());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,d=h.priorityLevel;var Le=Te(h.expirationTime<=q);q=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(l)&&r(l),g(q)}else r(l);h=n(l)}if(h!==null)var ba=!0;else{var xr=n(u);xr!==null&&mt(k,xr.startTime-q),ba=!1}return ba}finally{h=null,d=Y,m=!1}}var x=!1,N=null,O=-1,R=5,G=-1;function _t(){return!(t.unstable_now()-G<R)}function z(){if(N!==null){var P=t.unstable_now();G=P;var q=!0;try{q=N(!0,P)}finally{q?B():(x=!1,N=null)}}else x=!1}var B;if(typeof f=="function")B=function(){f(z)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,we=se.port2;se.port1.onmessage=z,B=function(){we.postMessage(null)}}else B=function(){E(z,0)};function lt(P){N=P,x||(x=!0,B())}function mt(P,q){O=E(function(){P(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,lt(_))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Y=d;d=q;try{return P()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=d;d=P;try{return q()}finally{d=Y}},t.unstable_scheduleCallback=function(P,q,Y){var Te=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Te+Y:Te):Y=Te,P){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=Y+Le,P={id:c++,callback:q,priorityLevel:P,startTime:Y,expirationTime:Le,sortIndex:-1},Y>Te?(P.sortIndex=Y,e(u,P),n(l)===null&&P===n(u)&&(v?(p(O),O=-1):v=!0,mt(k,Y-Te))):(P.sortIndex=Le,e(l,P),y||m||(y=!0,lt(_))),P},t.unstable_shouldYield=_t,t.unstable_wrapCallback=function(P){var q=d;return function(){var Y=d;d=q;try{return P.apply(this,arguments)}finally{d=Y}}}})(R0);(function(t){t.exports=R0})(tS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=I,It=Gh;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,co={};function ii(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(co[t]=e,t=0;t<e.length;t++)D0.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cg={},hg={};function rS(t){return Kh.call(hg,t)?!0:Kh.call(cg,t)?!1:nS.test(t)?hg[t]=!0:(cg[t]=!0,!1)}function iS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sS(t,e,n,r){if(e===null||typeof e>"u"||iS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bf,jf);qe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bf,jf);qe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bf,jf);qe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sS(e,n,i,r)&&(n=null),r||i===null?rS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Kf=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),dg=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=dg&&t[dg]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Bc;function Ds(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var jc=!1;function Hc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function oS(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function Xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case qh:return"Profiler";case Wf:return"StrictMode";case Qh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L0:return(t.displayName||"Context")+".Consumer";case O0:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kf:return e=t.displayName||null,e!==null?e:Xh(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Xh(t(e))}catch{}}return null}function aS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xh(e);case 8:return e===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(t){var e=M0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=lS(t))}function F0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=M0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jh(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U0(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function Zh(t,e){U0(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Os(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function z0(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uS=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){uS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cS=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(t,e){if(e){if(cS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var od=null,Ri=null,Pi=null;function vg(t){if(t=ea(t)){if(typeof od!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Gu(e),od(t.stateNode,t.type,e))}}function W0(t){Ri?Pi?Pi.push(t):Pi=[t]:Ri=t}function G0(){if(Ri){var t=Ri,e=Pi;if(Pi=Ri=null,vg(t),e)for(t=0;t<e.length;t++)vg(e[t])}}function K0(t,e){return t(e)}function q0(){}var Wc=!1;function Q0(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return K0(t,e,n)}finally{Wc=!1,(Ri!==null||Pi!==null)&&(q0(),G0())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var ad=!1;if(_n)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){ad=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{ad=!1}function hS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ws=!1,zl=null,Vl=!1,ld=null,dS={onError:function(t){Ws=!0,zl=t}};function fS(t,e,n,r,i,s,o,a,l){Ws=!1,zl=null,hS.apply(dS,arguments)}function pS(t,e,n,r,i,s,o,a,l){if(fS.apply(this,arguments),Ws){if(Ws){var u=zl;Ws=!1,zl=null}else throw Error(S(198));Vl||(Vl=!0,ld=u)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(si(t)!==t)throw Error(S(188))}function mS(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yg(i),t;if(s===r)return yg(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function X0(t){return t=mS(t),t!==null?J0(t):null}function J0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J0(t);if(e!==null)return e;t=t.sibling}return null}var Z0=It.unstable_scheduleCallback,wg=It.unstable_cancelCallback,gS=It.unstable_shouldYield,vS=It.unstable_requestPaint,Ce=It.unstable_now,yS=It.unstable_getCurrentPriorityLevel,Qf=It.unstable_ImmediatePriority,e1=It.unstable_UserBlockingPriority,Bl=It.unstable_NormalPriority,wS=It.unstable_LowPriority,t1=It.unstable_IdlePriority,Bu=null,sn=null;function kS(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:TS,ES=Math.log,_S=Math.LN2;function TS(t){return t>>>=0,t===0?32:31-(ES(t)/_S|0)|0}var Oa=64,La=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ls(a):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n1(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function IS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function r1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i1,Xf,s1,o1,a1,cd=!1,$a=[],Zn=null,er=null,tr=null,po=new Map,mo=new Map,jn=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bS(t,e,n,r,i){switch(e){case"focusin":return Zn=Cs(Zn,t,e,n,r,i),!0;case"dragenter":return er=Cs(er,t,e,n,r,i),!0;case"mouseover":return tr=Cs(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,Cs(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,Cs(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function l1(t){var e=Pr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,a1(t.priority,function(){s1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sd=r,n.target.dispatchEvent(r),sd=null}else return e=ea(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Eg(t,e,n){gl(t)&&n.delete(e)}function NS(){cd=!1,Zn!==null&&gl(Zn)&&(Zn=null),er!==null&&gl(er)&&(er=null),tr!==null&&gl(tr)&&(tr=null),po.forEach(Eg),mo.forEach(Eg)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,cd||(cd=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,NS)))}function go(t){function e(i){return Is(i,t)}if(0<$a.length){Is($a[0],t);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Is(Zn,t),er!==null&&Is(er,t),tr!==null&&Is(tr,t),po.forEach(e),mo.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)l1(n),n.blockedOn===null&&jn.shift()}var Di=Ln.ReactCurrentBatchConfig,Hl=!0;function AS(t,e,n,r){var i=re,s=Di.transition;Di.transition=null;try{re=1,Jf(t,e,n,r)}finally{re=i,Di.transition=s}}function RS(t,e,n,r){var i=re,s=Di.transition;Di.transition=null;try{re=4,Jf(t,e,n,r)}finally{re=i,Di.transition=s}}function Jf(t,e,n,r){if(Hl){var i=hd(t,e,n,r);if(i===null)nh(t,e,r,Wl,n),kg(t,r);else if(bS(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<xS.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&i1(s),s=hd(t,e,n,r),s===null&&nh(t,e,r,Wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nh(t,e,r,null,n)}}var Wl=null;function hd(t,e,n,r){if(Wl=null,t=qf(r),t=Pr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wl=t,null}function u1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yS()){case Qf:return 1;case e1:return 4;case Bl:case wS:return 16;case t1:return 536870912;default:return 16}default:return 16}}var qn=null,Zf=null,vl=null;function c1(){if(vl)return vl;var t,e=Zf,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function _g(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:_g,this.isPropagationStopped=_g,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=Nt(as),Zo=ve({},as,{view:0,detail:0}),PS=Nt(Zo),Kc,qc,xs,ju=ve({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(Kc=t.screenX-xs.screenX,qc=t.screenY-xs.screenY):qc=Kc=0,xs=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Tg=Nt(ju),DS=ve({},ju,{dataTransfer:0}),OS=Nt(DS),LS=ve({},Zo,{relatedTarget:0}),Qc=Nt(LS),$S=ve({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Nt($S),FS=ve({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),US=Nt(FS),zS=ve({},as,{data:0}),Sg=Nt(zS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jS[t])?!!e[t]:!1}function tp(){return HS}var WS=ve({},Zo,{key:function(t){if(t.key){var e=VS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GS=Nt(WS),KS=ve({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=Nt(KS),qS=ve({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),QS=Nt(qS),YS=ve({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),XS=Nt(YS),JS=ve({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=Nt(JS),eC=[9,13,27,32],np=_n&&"CompositionEvent"in window,Gs=null;_n&&"documentMode"in document&&(Gs=document.documentMode);var tC=_n&&"TextEvent"in window&&!Gs,h1=_n&&(!np||Gs&&8<Gs&&11>=Gs),Ig=String.fromCharCode(32),xg=!1;function d1(t,e){switch(t){case"keyup":return eC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function nC(t,e){switch(t){case"compositionend":return f1(e);case"keypress":return e.which!==32?null:(xg=!0,Ig);case"textInput":return t=e.data,t===Ig&&xg?null:t;default:return null}}function rC(t,e){if(gi)return t==="compositionend"||!np&&d1(t,e)?(t=c1(),vl=Zf=qn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h1&&e.locale!=="ko"?null:e.data;default:return null}}var iC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iC[t.type]:e==="textarea"}function p1(t,e,n,r){W0(r),e=Gl(e,"onChange"),0<e.length&&(n=new ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,vo=null;function sC(t){C1(t,0)}function Hu(t){var e=wi(t);if(F0(e))return t}function oC(t,e){if(t==="change")return e}var m1=!1;if(_n){var Yc;if(_n){var Xc="oninput"in document;if(!Xc){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),Xc=typeof Ng.oninput=="function"}Yc=Xc}else Yc=!1;m1=Yc&&(!document.documentMode||9<document.documentMode)}function Ag(){Ks&&(Ks.detachEvent("onpropertychange",g1),vo=Ks=null)}function g1(t){if(t.propertyName==="value"&&Hu(vo)){var e=[];p1(e,vo,t,qf(t)),Q0(sC,e)}}function aC(t,e,n){t==="focusin"?(Ag(),Ks=e,vo=n,Ks.attachEvent("onpropertychange",g1)):t==="focusout"&&Ag()}function lC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(vo)}function uC(t,e){if(t==="click")return Hu(e)}function cC(t,e){if(t==="input"||t==="change")return Hu(e)}function hC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:hC;function yo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kh.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pg(t,e){var n=Rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rg(n)}}function v1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y1(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dC(t){var e=y1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v1(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pg(n,s);var o=Pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fC=_n&&"documentMode"in document&&11>=document.documentMode,vi=null,dd=null,qs=null,fd=!1;function Dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||vi==null||vi!==Ul(r)||(r=vi,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&yo(qs,r)||(qs=r,r=Gl(dd,"onSelect"),0<r.length&&(e=new ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yi={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Jc={},w1={};_n&&(w1=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Wu(t){if(Jc[t])return Jc[t];if(!yi[t])return t;var e=yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w1)return Jc[t]=e[n];return t}var k1=Wu("animationend"),E1=Wu("animationiteration"),_1=Wu("animationstart"),T1=Wu("transitionend"),S1=new Map,Og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){S1.set(t,e),ii(e,[t])}for(var Zc=0;Zc<Og.length;Zc++){var eh=Og[Zc],pC=eh.toLowerCase(),mC=eh[0].toUpperCase()+eh.slice(1);Er(pC,"on"+mC)}Er(k1,"onAnimationEnd");Er(E1,"onAnimationIteration");Er(_1,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(T1,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gC=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pS(r,e,void 0,t),t.currentTarget=null}function C1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lg(i,a,u),s=l}}}if(Vl)throw t=ld,Vl=!1,ld=null,t}function ae(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var r=t+"__bubble";n.has(r)||(I1(e,t,2,!1),n.add(r))}function th(t,e,n){var r=0;e&&(r|=4),I1(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Ua]){t[Ua]=!0,D0.forEach(function(n){n!=="selectionchange"&&(gC.has(n)||th(n,!1,t),th(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,th("selectionchange",!1,e))}}function I1(t,e,n,r){switch(u1(e)){case 1:var i=AS;break;case 4:i=RS;break;default:i=Jf}n=i.bind(null,e,n,t),i=void 0,!ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Q0(function(){var u=s,c=qf(n),h=[];e:{var d=S1.get(t);if(d!==void 0){var m=ep,y=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":m=GS;break;case"focusin":y="focus",m=Qc;break;case"focusout":y="blur",m=Qc;break;case"beforeblur":case"afterblur":m=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=OS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=QS;break;case k1:case E1:case _1:m=MS;break;case T1:m=XS;break;case"scroll":m=PS;break;case"wheel":m=ZS;break;case"copy":case"cut":case"paste":m=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cg}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=fo(f,p),k!=null&&v.push(ko(f,k,g)))),E)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==sd&&(y=n.relatedTarget||n.fromElement)&&(Pr(y)||y[Tn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Pr(y):null,y!==null&&(E=si(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=Tg,k="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Cg,k="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:wi(m),g=y==null?d:wi(y),d=new v(k,f+"leave",m,n,c),d.target=E,d.relatedTarget=g,k=null,Pr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=E,k=v),E=k,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=ci(g))f++;for(g=0,k=p;k;k=ci(k))g++;for(;0<f-g;)v=ci(v),f--;for(;0<g-f;)p=ci(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ci(v),p=ci(p)}v=null}else v=null;m!==null&&$g(h,d,m,v,!1),y!==null&&E!==null&&$g(h,E,y,v,!0)}}e:{if(d=u?wi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var _=oC;else if(bg(d))if(m1)_=cC;else{_=lC;var x=aC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=uC);if(_&&(_=_(t,u))){p1(h,_,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&ed(d,"number",d.value)}switch(x=u?wi(u):window,t){case"focusin":(bg(x)||x.contentEditable==="true")&&(vi=x,dd=u,qs=null);break;case"focusout":qs=dd=vi=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Dg(h,n,c);break;case"selectionchange":if(fC)break;case"keydown":case"keyup":Dg(h,n,c)}var N;if(np)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else gi?d1(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(h1&&n.locale!=="ko"&&(gi||O!=="onCompositionStart"?O==="onCompositionEnd"&&gi&&(N=c1()):(qn=c,Zf="value"in qn?qn.value:qn.textContent,gi=!0)),x=Gl(u,O),0<x.length&&(O=new Sg(O,t,null,n,c),h.push({event:O,listeners:x}),N?O.data=N:(N=f1(n),N!==null&&(O.data=N)))),(N=tC?nC(t,n):rC(t,n))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(c=new Sg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}C1(h,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(ko(t,s,i)),s=fo(t,e),s!=null&&r.push(ko(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $g(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fo(n,s),l!=null&&o.unshift(ko(n,l,a))):i||(l=fo(n,s),l!=null&&o.push(ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,yC=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(yC,"")}function za(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(S(425))}function Kl(){}var pd=null,md=null;function gd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(EC)}:vd;function EC(t){setTimeout(function(){throw t})}function rh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),en="__reactFiber$"+ls,Eo="__reactProps$"+ls,Tn="__reactContainer$"+ls,yd="__reactEvents$"+ls,_C="__reactListeners$"+ls,TC="__reactHandles$"+ls;function Pr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ug(t);t!==null;){if(n=t[en])return n;t=Ug(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[en]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Gu(t){return t[Eo]||null}var wd=[],ki=-1;function _r(t){return{current:t}}function ce(t){0>ki||(t.current=wd[ki],wd[ki]=null,ki--)}function oe(t,e){ki++,wd[ki]=t.current,t.current=e}var pr={},st=_r(pr),wt=_r(!1),Wr=pr;function Hi(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function ql(){ce(wt),ce(st)}function zg(t,e,n){if(st.current!==pr)throw Error(S(168));oe(st,e),oe(wt,n)}function x1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,aS(t)||"Unknown",i));return ve({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Wr=st.current,oe(st,t),oe(wt,wt.current),!0}function Vg(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=x1(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,ce(wt),ce(st),oe(st,t)):ce(wt),oe(wt,n)}var fn=null,Ku=!1,ih=!1;function b1(t){fn===null?fn=[t]:fn.push(t)}function SC(t){Ku=!0,b1(t)}function Tr(){if(!ih&&fn!==null){ih=!0;var t=0,e=re;try{var n=fn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Ku=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),Z0(Qf,Tr),i}finally{re=e,ih=!1}}return null}var Ei=[],_i=0,Yl=null,Xl=0,Rt=[],Pt=0,Gr=null,mn=1,gn="";function Nr(t,e){Ei[_i++]=Xl,Ei[_i++]=Yl,Yl=t,Xl=e}function N1(t,e,n){Rt[Pt++]=mn,Rt[Pt++]=gn,Rt[Pt++]=Gr,Gr=t;var r=mn;t=gn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Kt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function ip(t){t.return!==null&&(Nr(t,1),N1(t,1,0))}function sp(t){for(;t===Yl;)Yl=Ei[--_i],Ei[_i]=null,Xl=Ei[--_i],Ei[_i]=null;for(;t===Gr;)Gr=Rt[--Pt],Rt[Pt]=null,gn=Rt[--Pt],Rt[Pt]=null,mn=Rt[--Pt],Rt[Pt]=null}var Ct=null,St=null,fe=!1,Ht=null;function A1(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,St=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,St=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ed(t){if(fe){var e=St;if(e){var n=e;if(!Bg(t,e)){if(kd(t))throw Error(S(418));e=nr(n.nextSibling);var r=Ct;e&&Bg(t,e)?A1(r,n):(t.flags=t.flags&-4097|2,fe=!1,Ct=t)}}else{if(kd(t))throw Error(S(418));t.flags=t.flags&-4097|2,fe=!1,Ct=t}}}function jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Va(t){if(t!==Ct)return!1;if(!fe)return jg(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gd(t.type,t.memoizedProps)),e&&(e=St)){if(kd(t))throw R1(),Error(S(418));for(;e;)A1(t,e),e=nr(e.nextSibling)}if(jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Ct?nr(t.stateNode.nextSibling):null;return!0}function R1(){for(var t=St;t;)t=nr(t.nextSibling)}function Wi(){St=Ct=null,fe=!1}function op(t){Ht===null?Ht=[t]:Ht.push(t)}var CC=Ln.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jl=_r(null),Zl=null,Ti=null,ap=null;function lp(){ap=Ti=Zl=null}function up(t){var e=Jl.current;ce(Jl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Zl=t,ap=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Zl===null)throw Error(S(308));Ti=t,Zl.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Dr=null;function cp(t){Dr===null?Dr=[t]:Dr.push(t)}function P1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function hp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ve({},h,d);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=h}}function Wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var O1=new P0.Component().refs;function Td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=sr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(qt(e,t,i,r),wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=sr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(qt(e,t,i,r),wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=sr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(qt(e,t,r,n),wl(e,t,r))}};function Gg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function L1(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=kt(e)?Wr:st.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function Sd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=O1,hp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=kt(e)?Wr:st.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qu.enqueueReplaceState(i,i.state,null),eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===O1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qg(t){var e=t._init;return e(t._payload)}function $1(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=or(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,k){return f===null||f.tag!==6?(f=hh(g,p.mode,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,k){var _=g.type;return _===mi?c(p,f,g.props.children,k,g.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vn&&qg(_)===f.type)?(k=i(f,g.props),k.ref=bs(p,f,g),k.return=p,k):(k=Cl(g.type,g.key,g.props,null,p.mode,k),k.ref=bs(p,f,g),k.return=p,k)}function u(p,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=dh(g,p.mode,k),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,k,_){return f===null||f.tag!==7?(f=Br(g,p.mode,k,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=hh(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ra:return g=Cl(f.type,f.key,f.props,null,p.mode,g),g.ref=bs(p,null,f),g.return=p,g;case pi:return f=dh(f,p.mode,g),f.return=p,f;case Vn:var k=f._init;return h(p,k(f._payload),g)}if(Os(f)||Ts(f))return f=Br(f,p.mode,g,null),f.return=p,f;Ba(p,f)}return null}function d(p,f,g,k){var _=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(p,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:return g.key===_?l(p,f,g,k):null;case pi:return g.key===_?u(p,f,g,k):null;case Vn:return _=g._init,d(p,f,_(g._payload),k)}if(Os(g)||Ts(g))return _!==null?null:c(p,f,g,k,null);Ba(p,g)}return null}function m(p,f,g,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(f,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ra:return p=p.get(k.key===null?g:k.key)||null,l(f,p,k,_);case pi:return p=p.get(k.key===null?g:k.key)||null,u(f,p,k,_);case Vn:var x=k._init;return m(p,f,g,x(k._payload),_)}if(Os(k)||Ts(k))return p=p.get(g)||null,c(f,p,k,_,null);Ba(f,k)}return null}function y(p,f,g,k){for(var _=null,x=null,N=f,O=f=0,R=null;N!==null&&O<g.length;O++){N.index>O?(R=N,N=null):R=N.sibling;var G=d(p,N,g[O],k);if(G===null){N===null&&(N=R);break}t&&N&&G.alternate===null&&e(p,N),f=s(G,f,O),x===null?_=G:x.sibling=G,x=G,N=R}if(O===g.length)return n(p,N),fe&&Nr(p,O),_;if(N===null){for(;O<g.length;O++)N=h(p,g[O],k),N!==null&&(f=s(N,f,O),x===null?_=N:x.sibling=N,x=N);return fe&&Nr(p,O),_}for(N=r(p,N);O<g.length;O++)R=m(N,p,O,g[O],k),R!==null&&(t&&R.alternate!==null&&N.delete(R.key===null?O:R.key),f=s(R,f,O),x===null?_=R:x.sibling=R,x=R);return t&&N.forEach(function(_t){return e(p,_t)}),fe&&Nr(p,O),_}function v(p,f,g,k){var _=Ts(g);if(typeof _!="function")throw Error(S(150));if(g=_.call(g),g==null)throw Error(S(151));for(var x=_=null,N=f,O=f=0,R=null,G=g.next();N!==null&&!G.done;O++,G=g.next()){N.index>O?(R=N,N=null):R=N.sibling;var _t=d(p,N,G.value,k);if(_t===null){N===null&&(N=R);break}t&&N&&_t.alternate===null&&e(p,N),f=s(_t,f,O),x===null?_=_t:x.sibling=_t,x=_t,N=R}if(G.done)return n(p,N),fe&&Nr(p,O),_;if(N===null){for(;!G.done;O++,G=g.next())G=h(p,G.value,k),G!==null&&(f=s(G,f,O),x===null?_=G:x.sibling=G,x=G);return fe&&Nr(p,O),_}for(N=r(p,N);!G.done;O++,G=g.next())G=m(N,p,O,G.value,k),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?O:G.key),f=s(G,f,O),x===null?_=G:x.sibling=G,x=G);return t&&N.forEach(function(z){return e(p,z)}),fe&&Nr(p,O),_}function E(p,f,g,k){if(typeof g=="object"&&g!==null&&g.type===mi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:e:{for(var _=g.key,x=f;x!==null;){if(x.key===_){if(_=g.type,_===mi){if(x.tag===7){n(p,x.sibling),f=i(x,g.props.children),f.return=p,p=f;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vn&&qg(_)===x.type){n(p,x.sibling),f=i(x,g.props),f.ref=bs(p,x,g),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}g.type===mi?(f=Br(g.props.children,p.mode,k,g.key),f.return=p,p=f):(k=Cl(g.type,g.key,g.props,null,p.mode,k),k.ref=bs(p,f,g),k.return=p,p=k)}return o(p);case pi:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=dh(g,p.mode,k),f.return=p,p=f}return o(p);case Vn:return x=g._init,E(p,f,x(g._payload),k)}if(Os(g))return y(p,f,g,k);if(Ts(g))return v(p,f,g,k);Ba(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=hh(g,p.mode,k),f.return=p,p=f),o(p)):n(p,f)}return E}var Gi=$1(!0),M1=$1(!1),ta={},on=_r(ta),_o=_r(ta),To=_r(ta);function Or(t){if(t===ta)throw Error(S(174));return t}function dp(t,e){switch(oe(To,e),oe(_o,t),oe(on,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}ce(on),oe(on,e)}function Ki(){ce(on),ce(_o),ce(To)}function F1(t){Or(To.current);var e=Or(on.current),n=nd(e,t.type);e!==n&&(oe(_o,t),oe(on,n))}function fp(t){_o.current===t&&(ce(on),ce(_o))}var me=_r(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sh=[];function pp(){for(var t=0;t<sh.length;t++)sh[t]._workInProgressVersionPrimary=null;sh.length=0}var kl=Ln.ReactCurrentDispatcher,oh=Ln.ReactCurrentBatchConfig,Kr=0,ge=null,Re=null,Me=null,nu=!1,Qs=!1,So=0,IC=0;function Qe(){throw Error(S(321))}function mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function gp(t,e,n,r,i,s){if(Kr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?AC:RC,t=n(r,i),Qs){s=0;do{if(Qs=!1,So=0,25<=s)throw Error(S(301));s+=1,Me=Re=null,e.updateQueue=null,kl.current=PC,t=n(r,i)}while(Qs)}if(kl.current=ru,e=Re!==null&&Re.next!==null,Kr=0,Me=Re=ge=null,nu=!1,e)throw Error(S(300));return t}function vp(){var t=So!==0;return So=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ge.memoizedState=Me=t:Me=Me.next=t,Me}function Ut(){if(Re===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Me===null?ge.memoizedState:Me.next;if(e!==null)Me=e,Re=t;else{if(t===null)throw Error(S(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?ge.memoizedState=Me=t:Me=Me.next=t}return Me}function Co(t,e){return typeof e=="function"?e(t):e}function ah(t){var e=Ut(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function U1(){}function z1(t,e){var n=ge,r=Ut(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,yp(j1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Io(9,B1.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(S(349));Kr&30||V1(n,e,i)}return i}function V1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B1(t,e,n,r){e.value=n,e.getSnapshot=r,H1(e)&&W1(t)}function j1(t,e,n){return n(function(){H1(e)&&W1(t)})}function H1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function W1(t){var e=Sn(t,1);e!==null&&qt(e,t,1,-1)}function Qg(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,ge,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function G1(){return Ut().memoizedState}function El(t,e,n,r){var i=Zt();ge.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&mp(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function Yg(t,e){return El(8390656,8,t,e)}function yp(t,e){return Qu(2048,8,t,e)}function K1(t,e){return Qu(4,2,t,e)}function q1(t,e){return Qu(4,4,t,e)}function Q1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y1(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,Q1.bind(null,e,t),n)}function wp(){}function X1(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function J1(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Z1(t,e,n){return Kr&21?(Qt(n,e)||(n=n1(),ge.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function xC(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=oh.transition;oh.transition={};try{t(!1),e()}finally{re=n,oh.transition=r}}function ew(){return Ut().memoizedState}function bC(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tw(t))nw(e,n);else if(n=P1(t,e,n,r),n!==null){var i=ht();qt(n,t,r,i),rw(n,e,r)}}function NC(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tw(t))nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,o)){var l=e.interleaved;l===null?(i.next=i,cp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=P1(t,e,i,r),n!==null&&(i=ht(),qt(n,t,r,i),rw(n,e,r))}}function tw(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function nw(t,e){Qs=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yf(t,n)}}var ru={readContext:Ft,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},AC={readContext:Ft,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,Q1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bC.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Qg,useDebugValue:wp,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Qg(!1),e=t[0];return t=xC.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Zt();if(fe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Fe===null)throw Error(S(349));Kr&30||V1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yg(j1.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,B1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Fe.identifierPrefix;if(fe){var n=gn,r=mn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RC={readContext:Ft,useCallback:X1,useContext:Ft,useEffect:yp,useImperativeHandle:Y1,useInsertionEffect:K1,useLayoutEffect:q1,useMemo:J1,useReducer:ah,useRef:G1,useState:function(){return ah(Co)},useDebugValue:wp,useDeferredValue:function(t){var e=Ut();return Z1(e,Re.memoizedState,t)},useTransition:function(){var t=ah(Co)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:U1,useSyncExternalStore:z1,useId:ew,unstable_isNewReconciler:!1},PC={readContext:Ft,useCallback:X1,useContext:Ft,useEffect:yp,useImperativeHandle:Y1,useInsertionEffect:K1,useLayoutEffect:q1,useMemo:J1,useReducer:lh,useRef:G1,useState:function(){return lh(Co)},useDebugValue:wp,useDeferredValue:function(t){var e=Ut();return Re===null?e.memoizedState=t:Z1(e,Re.memoizedState,t)},useTransition:function(){var t=lh(Co)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:U1,useSyncExternalStore:z1,useId:ew,unstable_isNewReconciler:!1};function qi(t,e){try{var n="",r=e;do n+=oS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DC=typeof WeakMap=="function"?WeakMap:Map;function iw(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){su||(su=!0,Ld=r),Cd(t,e)},n}function sw(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function Jg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var OC=Ln.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?M1(e,null,n,r):Gi(e,t.child,n,r)}function ev(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=gp(t,e,n,r,s,i),n=vp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(fe&&n&&ip(e),e.flags|=1,ut(t,e,r,i),e.child)}function tv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ow(t,e,s,r,i)):(t=Cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function ow(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return Id(t,e,n,r,i)}function aw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Ci,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Ci,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Ci,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(Ci,Tt),Tt|=r;return ut(t,e,i,n),e.child}function lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,r,i){var s=kt(n)?Wr:st.current;return s=Hi(e,s),Oi(e,i),n=gp(t,e,n,r,s,i),r=vp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(fe&&r&&ip(e),e.flags|=1,ut(t,e,n,i),e.child)}function nv(t,e,n,r,i){if(kt(n)){var s=!0;Ql(e)}else s=!1;if(Oi(e,i),e.stateNode===null)_l(t,e),L1(e,n,r),Sd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=kt(n)?Wr:st.current,u=Hi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kg(e,o,r,u),Bn=!1;var d=e.memoizedState;o.state=d,eu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||wt.current||Bn?(typeof c=="function"&&(Td(e,n,c,r),l=e.memoizedState),(a=Bn||Gg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=kt(n)?Wr:st.current,l=Hi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Kg(e,o,r,l),Bn=!1,d=e.memoizedState,o.state=d,eu(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||wt.current||Bn?(typeof m=="function"&&(Td(e,n,m,r),y=e.memoizedState),(u=Bn||Gg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return xd(t,e,n,r,s,i)}function xd(t,e,n,r,i,s){lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vg(e,n,!1),Cn(t,e,s);r=e.stateNode,OC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&Vg(e,n,!0),e.child}function uw(t){var e=t.stateNode;e.pendingContext?zg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zg(t,e.context,!1),dp(t,e.containerInfo)}function rv(t,e,n,r,i){return Wi(),op(i),e.flags|=256,ut(t,e,n,r),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function cw(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return Ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=bd,t):kp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bd,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kp(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,r){return r!==null&&op(r),Gi(e,t.child,null,n),t=kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uh(Error(S(422))),ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=bd,s);if(!(e.mode&1))return ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=uh(s,r,void 0),ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),qt(r,t,i,-1))}return Ip(),r=uh(Error(S(421))),ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=nr(i.nextSibling),Ct=e,fe=!0,Ht=null,t!==null&&(Rt[Pt++]=mn,Rt[Pt++]=gn,Rt[Pt++]=Gr,mn=t.id,gn=t.overflow,Gr=e),e=kp(e,r.children),e.flags|=4096,e)}function iv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_d(t.return,e,n)}function ch(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iv(t,n,e);else if(t.tag===19)iv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ch(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ch(e,!0,n,null,s);break;case"together":ch(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $C(t,e,n){switch(e.tag){case 3:uw(e),Wi();break;case 5:F1(e);break;case 1:kt(e.type)&&Ql(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?cw(t,e,n):(oe(me,me.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,aw(t,e,n)}return Cn(t,e,n)}var dw,Ad,fw,pw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(on.current);var s=null;switch(n){case"input":i=Jh(t,i),r=Jh(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=td(t,i),r=td(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}rd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MC(t,e,n){var r=e.pendingProps;switch(sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return kt(e.type)&&ql(),Ye(e),null;case 3:return r=e.stateNode,Ki(),ce(wt),ce(st),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Fd(Ht),Ht=null))),Ad(t,e),Ye(e),null;case 5:fp(e);var i=Or(To.current);if(n=e.type,t!==null&&e.stateNode!=null)fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ye(e),null}if(t=Or(on.current),Va(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)ae($s[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":fg(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":mg(r,s),ae("invalid",r)}rd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":Pa(r),pg(r,s,!0);break;case"textarea":Pa(r),gg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[Eo]=r,dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=id(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)ae($s[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":fg(t,r),i=Jh(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ae("invalid",t);break;case"textarea":mg(t,r),i=td(t,r),ae("invalid",t);break;default:i=r}rd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&Hf(t,s,l,o))}switch(n){case"input":Pa(t),pg(t,r,!1);break;case"textarea":Pa(t),gg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Or(To.current),Or(on.current),Va(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Ye(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&St!==null&&e.mode&1&&!(e.flags&128))R1(),Wi(),e.flags|=98560,s=!1;else if(s=Va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[en]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ht!==null&&(Fd(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Pe===0&&(Pe=3):Ip())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ki(),Ad(t,e),t===null&&wo(e.stateNode.containerInfo),Ye(e),null;case 10:return up(e.type._context),Ye(e),null;case 17:return kt(e.type)&&ql(),Ye(e),null;case 19:if(ce(me),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Qi&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Ye(e),null}else 2*Ce()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function FC(t,e){switch(sp(e),e.tag){case 1:return kt(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),ce(wt),ce(st),pp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return Ki(),null;case 10:return up(e.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var Ha=!1,Ze=!1,UC=typeof WeakSet=="function"?WeakSet:Set,L=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Rd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var sv=!1;function zC(t,e){if(pd=Hl,t=y1(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},Hl=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Bt(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){ke(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=sv,sv=!1,y}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rd(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mw(t){var e=t.alternate;e!==null&&(t.alternate=null,mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[Eo],delete e[yd],delete e[_C],delete e[TC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gw(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function Od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}var Be=null,jt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)vw(t,e,n),n=n.sibling}function vw(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:Ze||Si(n,e);case 6:var r=Be,i=jt;Be=null,Fn(t,e,n),Be=r,jt=i,Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(jt?(t=Be,n=n.stateNode,t.nodeType===8?rh(t.parentNode,n):t.nodeType===1&&rh(t,n),go(t)):rh(Be,n.stateNode));break;case 4:r=Be,i=jt,Be=n.stateNode.containerInfo,jt=!0,Fn(t,e,n),Be=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Ze&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Fn(t,e,n),Ze=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function av(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UC),e.forEach(function(r){var i=QC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,jt=!1;break e;case 3:Be=a.stateNode.containerInfo,jt=!0;break e;case 4:Be=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(Be===null)throw Error(S(160));vw(s,o,i),Be=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Jt(t),r&4){try{Ys(3,t,t.return),Yu(3,t)}catch(v){ke(t,t.return,v)}try{Ys(5,t,t.return)}catch(v){ke(t,t.return,v)}}break;case 1:Vt(e,t),Jt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Vt(e,t),Jt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(v){ke(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U0(i,s),id(a,o);var u=id(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?H0(i,h):c==="dangerouslySetInnerHTML"?B0(i,h):c==="children"?ho(i,h):Hf(i,c,h,u)}switch(a){case"input":Zh(i,s);break;case"textarea":z0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ai(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(v){ke(t,t.return,v)}}break;case 6:if(Vt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ke(t,t.return,v)}}break;case 3:if(Vt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(v){ke(t,t.return,v)}break;case 4:Vt(e,t),Jt(t);break;case 13:Vt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tp=Ce())),r&4&&av(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||c,Vt(e,t),Ze=u):Vt(e,t),Jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ys(4,d,d.return);break;case 1:Si(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ke(r,n,v)}}break;case 5:Si(d,d.return);break;case 22:if(d.memoizedState!==null){uv(h);continue}}m!==null?(m.return=d,L=m):uv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j0("display",o))}catch(v){ke(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ke(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Jt(t),r&4&&av(t);break;case 21:break;default:Vt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gw(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=ov(t);Od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ov(t);Dd(t,a,o);break;default:throw Error(S(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VC(t,e,n){L=t,ww(t)}function ww(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=Ha;var u=Ze;if(Ha=o,(Ze=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?cv(i):l!==null?(l.return=o,L=l):cv(i);for(;s!==null;)L=s,ww(s),s=s.sibling;L=i,Ha=a,Ze=u}lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):lv(t)}}function lv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ze||e.flags&512&&Pd(e)}catch(d){ke(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function uv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function cv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{Pd(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{Pd(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var BC=Math.ceil,iu=Ln.ReactCurrentDispatcher,Ep=Ln.ReactCurrentOwner,$t=Ln.ReactCurrentBatchConfig,ee=0,Fe=null,be=null,Ge=0,Tt=0,Ci=_r(0),Pe=0,xo=null,qr=0,Xu=0,_p=0,Xs=null,vt=null,Tp=0,Qi=1/0,dn=null,su=!1,Ld=null,ir=null,Wa=!1,Qn=null,ou=0,Js=0,$d=null,Tl=-1,Sl=0;function ht(){return ee&6?Ce():Tl!==-1?Tl:Tl=Ce()}function sr(t){return t.mode&1?ee&2&&Ge!==0?Ge&-Ge:CC.transition!==null?(Sl===0&&(Sl=n1()),Sl):(t=re,t!==0||(t=window.event,t=t===void 0?16:u1(t.type)),t):1}function qt(t,e,n,r){if(50<Js)throw Js=0,$d=null,Error(S(185));Jo(t,n,r),(!(ee&2)||t!==Fe)&&(t===Fe&&(!(ee&2)&&(Xu|=n),Pe===4&&Hn(t,Ge)),Et(t,r),n===1&&ee===0&&!(e.mode&1)&&(Qi=Ce()+500,Ku&&Tr()))}function Et(t,e){var n=t.callbackNode;CS(t,e);var r=jl(t,t===Fe?Ge:0);if(r===0)n!==null&&wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wg(n),e===1)t.tag===0?SC(hv.bind(null,t)):b1(hv.bind(null,t)),kC(function(){!(ee&6)&&Tr()}),n=null;else{switch(r1(r)){case 1:n=Qf;break;case 4:n=e1;break;case 16:n=Bl;break;case 536870912:n=t1;break;default:n=Bl}n=xw(n,kw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kw(t,e){if(Tl=-1,Sl=0,ee&6)throw Error(S(327));var n=t.callbackNode;if(Li()&&t.callbackNode!==n)return null;var r=jl(t,t===Fe?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=au(t,r);else{e=r;var i=ee;ee|=2;var s=_w();(Fe!==t||Ge!==e)&&(dn=null,Qi=Ce()+500,Vr(t,e));do try{WC();break}catch(a){Ew(t,a)}while(1);lp(),iu.current=s,ee=i,be!==null?e=0:(Fe=null,Ge=0,e=Pe)}if(e!==0){if(e===2&&(i=ud(t),i!==0&&(r=i,e=Md(t,i))),e===1)throw n=xo,Vr(t,0),Hn(t,r),Et(t,Ce()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jC(i)&&(e=au(t,r),e===2&&(s=ud(t),s!==0&&(r=s,e=Md(t,s))),e===1))throw n=xo,Vr(t,0),Hn(t,r),Et(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Ar(t,vt,dn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=Tp+500-Ce(),10<e)){if(jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vd(Ar.bind(null,t,vt,dn),e);break}Ar(t,vt,dn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BC(r/1960))-r,10<r){t.timeoutHandle=vd(Ar.bind(null,t,vt,dn),r);break}Ar(t,vt,dn);break;case 5:Ar(t,vt,dn);break;default:throw Error(S(329))}}}return Et(t,Ce()),t.callbackNode===n?kw.bind(null,t):null}function Md(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=au(t,e),t!==2&&(e=vt,vt=n,e!==null&&Fd(e)),t}function Fd(t){vt===null?vt=t:vt.push.apply(vt,t)}function jC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~_p,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function hv(t){if(ee&6)throw Error(S(327));Li();var e=jl(t,0);if(!(e&1))return Et(t,Ce()),null;var n=au(t,e);if(t.tag!==0&&n===2){var r=ud(t);r!==0&&(e=r,n=Md(t,r))}if(n===1)throw n=xo,Vr(t,0),Hn(t,e),Et(t,Ce()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,vt,dn),Et(t,Ce()),null}function Sp(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Qi=Ce()+500,Ku&&Tr())}}function Qr(t){Qn!==null&&Qn.tag===0&&!(ee&6)&&Li();var e=ee;ee|=1;var n=$t.transition,r=re;try{if($t.transition=null,re=1,t)return t()}finally{re=r,$t.transition=n,ee=e,!(ee&6)&&Tr()}}function Cp(){Tt=Ci.current,ce(Ci)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ql();break;case 3:Ki(),ce(wt),ce(st),pp();break;case 5:fp(r);break;case 4:Ki();break;case 13:ce(me);break;case 19:ce(me);break;case 10:up(r.type._context);break;case 22:case 23:Cp()}n=n.return}if(Fe=t,be=t=or(t.current,null),Ge=Tt=e,Pe=0,xo=null,_p=Xu=qr=0,vt=Xs=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function Ew(t,e){do{var n=be;try{if(lp(),kl.current=ru,nu){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nu=!1}if(Kr=0,Me=Re=ge=null,Qs=!1,So=0,Ep.current=null,n===null||n.return===null){Pe=1,xo=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Jg(o);if(m!==null){m.flags&=-257,Zg(m,o,a,s,e),m.mode&1&&Xg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Xg(s,u,e),Ip();break e}l=Error(S(426))}}else if(fe&&a.mode&1){var E=Jg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Zg(E,o,a,s,e),op(qi(l,a));break e}}s=l=qi(l,a),Pe!==4&&(Pe=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=iw(s,l,e);Hg(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=sw(s,a,e);Hg(s,k);break e}}s=s.return}while(s!==null)}Sw(n)}catch(_){e=_,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function _w(){var t=iu.current;return iu.current=ru,t===null?ru:t}function Ip(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Fe===null||!(qr&268435455)&&!(Xu&268435455)||Hn(Fe,Ge)}function au(t,e){var n=ee;ee|=2;var r=_w();(Fe!==t||Ge!==e)&&(dn=null,Vr(t,e));do try{HC();break}catch(i){Ew(t,i)}while(1);if(lp(),ee=n,iu.current=r,be!==null)throw Error(S(261));return Fe=null,Ge=0,Pe}function HC(){for(;be!==null;)Tw(be)}function WC(){for(;be!==null&&!gS();)Tw(be)}function Tw(t){var e=Iw(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Sw(t):be=e,Ep.current=null}function Sw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FC(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,be=null;return}}else if(n=MC(n,e,Tt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Pe===0&&(Pe=5)}function Ar(t,e,n){var r=re,i=$t.transition;try{$t.transition=null,re=1,GC(t,e,n,r)}finally{$t.transition=i,re=r}return null}function GC(t,e,n,r){do Li();while(Qn!==null);if(ee&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IS(t,s),t===Fe&&(be=Fe=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,xw(Bl,function(){return Li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=re;re=1;var a=ee;ee|=4,Ep.current=null,zC(t,n),yw(n,t),dC(md),Hl=!!pd,md=pd=null,t.current=n,VC(n),vS(),ee=a,re=o,$t.transition=s}else t.current=n;if(Wa&&(Wa=!1,Qn=t,ou=i),s=t.pendingLanes,s===0&&(ir=null),kS(n.stateNode),Et(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,t=Ld,Ld=null,t;return ou&1&&t.tag!==0&&Li(),s=t.pendingLanes,s&1?t===$d?Js++:(Js=0,$d=t):Js=0,Tr(),null}function Li(){if(Qn!==null){var t=r1(ou),e=$t.transition,n=re;try{if($t.transition=null,re=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,ou=0,ee&6)throw Error(S(331));var i=ee;for(ee|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Ys(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,m=c.return;if(mw(c),c===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,L=g;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(_){ke(a,a.return,_)}if(a===o){L=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,L=k;break e}L=a.return}}if(ee=i,Tr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{re=n,$t.transition=e}}return!1}function dv(t,e,n){e=qi(n,e),e=iw(t,e,1),t=rr(t,e,1),e=ht(),t!==null&&(Jo(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)dv(t,t,n);else for(;e!==null;){if(e.tag===3){dv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=qi(n,t),t=sw(e,t,1),e=rr(e,t,1),t=ht(),e!==null&&(Jo(e,1,t),Et(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(Ge&n)===n&&(Pe===4||Pe===3&&(Ge&130023424)===Ge&&500>Ce()-Tp?Vr(t,0):_p|=n),Et(t,e)}function Cw(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=ht();t=Sn(t,e),t!==null&&(Jo(t,e,n),Et(t,n))}function qC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cw(t,n)}function QC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Cw(t,n)}var Iw;Iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,$C(t,e,n);yt=!!(t.flags&131072)}else yt=!1,fe&&e.flags&1048576&&N1(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_l(t,e),t=e.pendingProps;var i=Hi(e,st.current);Oi(e,n),i=gp(null,e,r,t,i,n);var s=vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hp(e),i.updater=qu,e.stateNode=i,i._reactInternals=e,Sd(e,r,t,n),e=xd(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&ip(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XC(r),t=Bt(r,t),i){case 0:e=Id(null,e,r,t,n);break e;case 1:e=nv(null,e,r,t,n);break e;case 11:e=ev(null,e,r,t,n);break e;case 14:e=tv(null,e,r,Bt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Id(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),nv(t,e,r,i,n);case 3:e:{if(uw(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D1(t,e),eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qi(Error(S(423)),e),e=rv(t,e,r,n,i);break e}else if(r!==i){i=qi(Error(S(424)),e),e=rv(t,e,r,n,i);break e}else for(St=nr(e.stateNode.containerInfo.firstChild),Ct=e,fe=!0,Ht=null,n=M1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Cn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return F1(e),t===null&&Ed(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gd(r,i)?o=null:s!==null&&gd(r,s)&&(e.flags|=32),lw(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Ed(e),null;case 13:return cw(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),ev(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(Jl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!wt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=En(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=Ft(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),tv(t,e,r,i,n);case 15:return ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),_l(t,e),e.tag=1,kt(r)?(t=!0,Ql(e)):t=!1,Oi(e,n),L1(e,r,i),Sd(e,r,i,n),xd(null,e,r,!0,t,n);case 19:return hw(t,e,n);case 22:return aw(t,e,n)}throw Error(S(156,e.tag))};function xw(t,e){return Z0(t,e)}function YC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new YC(t,e,n,r)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XC(t){if(typeof t=="function")return xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Kf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return Br(n.children,i,s,e);case Wf:o=8,i|=8;break;case qh:return t=Lt(12,n,e,i|2),t.elementType=qh,t.lanes=s,t;case Qh:return t=Lt(13,n,e,i),t.elementType=Qh,t.lanes=s,t;case Yh:return t=Lt(19,n,e,i),t.elementType=Yh,t.lanes=s,t;case $0:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O0:o=10;break e;case L0:o=9;break e;case Gf:o=11;break e;case Kf:o=14;break e;case Vn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function hh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function dh(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gc(0),this.expirationTimes=Gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,r,i,s,o,a,l){return t=new JC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(s),t}function ZC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return pr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(kt(n))return x1(t,n,e)}return e}function Nw(t,e,n,r,i,s,o,a,l){return t=bp(n,r,!0,t,i,s,o,a,l),t.context=bw(null),n=t.current,r=ht(),i=sr(n),s=En(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,Jo(t,i,r),Et(t,r),t}function Zu(t,e,n,r){var i=e.current,s=ht(),o=sr(i);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(qt(t,i,o,s),wl(t,i,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){fv(t,e),(t=t.alternate)&&fv(t,e)}function eI(){return null}var Aw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}ec.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Zu(t,e,null,null)};ec.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Zu(null,t,null,null)}),e[Tn]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=o1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&l1(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pv(){}function tI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lu(o);s.call(u)}}var o=Nw(e,r,t,0,null,!1,!1,"",pv);return t._reactRootContainer=o,t[Tn]=o.current,wo(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lu(l);a.call(u)}}var l=bp(t,0,!1,null,null,!1,!1,"",pv);return t._reactRootContainer=l,t[Tn]=l.current,wo(t.nodeType===8?t.parentNode:t),Qr(function(){Zu(e,l,n,r)}),l}function nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lu(o);a.call(l)}}Zu(e,o,t,i)}else o=tI(n,e,t,i,r);return lu(o)}i1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(Yf(e,n|1),Et(e,Ce()),!(ee&6)&&(Qi=Ce()+500,Tr()))}break;case 13:Qr(function(){var r=Sn(t,1);if(r!==null){var i=ht();qt(r,t,1,i)}}),Np(t,1)}};Xf=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ht();qt(e,t,134217728,n)}Np(t,134217728)}};s1=function(t){if(t.tag===13){var e=sr(t),n=Sn(t,e);if(n!==null){var r=ht();qt(n,t,e,r)}Np(t,e)}};o1=function(){return re};a1=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};od=function(t,e,n){switch(e){case"input":if(Zh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gu(r);if(!i)throw Error(S(90));F0(r),Zh(r,i)}}}break;case"textarea":z0(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};K0=Sp;q0=Qr;var nI={usingClientEntryPoint:!1,Events:[ea,wi,Gu,W0,G0,Sp]},As={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rI={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X0(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||eI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Bu=Ga.inject(rI),sn=Ga}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nI;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(S(200));return ZC(t,e,null,n)};bt.createRoot=function(t,e){if(!Rp(t))throw Error(S(299));var n=!1,r="",i=Aw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,wo(t.nodeType===8?t.parentNode:t),new Ap(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=X0(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return Qr(t)};bt.hydrate=function(t,e,n){if(!tc(e))throw Error(S(200));return nc(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Aw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nw(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ec(e)};bt.render=function(t,e,n){if(!tc(e))throw Error(S(200));return nc(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!tc(t))throw Error(S(40));return t._reactRootContainer?(Qr(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};bt.unstable_batchedUpdates=Sp;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return nc(t,e,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=bt})(eS);var mv=Wh;Hh.createRoot=mv.createRoot,Hh.hydrateRoot=mv.hydrateRoot;const Ud=(t,e,n)=>{const r=e.filter(i=>i.id!==t);return localStorage.setItem(`${n}`,JSON.stringify(r)),r},iI=(t,e,n)=>{const r=e.map(i=>i.id===t?{...i,completed:!i.completed}:i);return localStorage.setItem(`${n}`,JSON.stringify(r)),r},sI=(t,e,n)=>{const r=e.map(i=>i.id===t?{...i,isEditing:!0}:i);return localStorage.setItem(`${n}`,JSON.stringify(r)),r},oI=(t,e,n,r,i,s,o)=>{const a=s.map(l=>l.id===i?{...l,task:t,nType:e,date:n,taskorreminder:r,isEditing:!1}:l);return localStorage.setItem(`${o}`,JSON.stringify(a)),a},aI=(t,e,n)=>{const r=e.filter(i=>t.includes(i.id));return localStorage.setItem(`${n}`,JSON.stringify(r)),r},lI=({addTodo:t,types:e,allColors:n})=>{const[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(new Date().toISOString().slice(0,10)),[u,c]=I.useState("task");return b("form",{className:"TodoForm",onSubmit:d=>{d.preventDefault(),a||l(new Date().toISOString().slice(0,10)),s||o(e[0].typeName),r&&(t(r,s,a,u),i(""),l(new Date().toISOString().slice(0,10)))},style:{background:n.formBackgroundColor},children:[b("div",{className:"TodoForm__TaskReminder",children:[w("input",{type:"radio",name:"task-reminder",value:"task",onChange:()=>c("task"),checked:u==="task"})," ",w("label",{style:{color:n.titleTextColor},children:"Task "}),w("input",{type:"radio",name:"task-reminder",value:"reminder",onChange:()=>c("reminder")}),w("label",{style:{color:n.titleTextColor},children:"Reminder"})]}),b("div",{className:"TodoForm__Task",children:[w("input",{type:"text",value:r,placeholder:"Add a new task",className:"TodoForm__Task__input",onChange:d=>i(d.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:n.buttonIcons,color:n.buttonText},children:"Add Task"})]}),b("div",{className:"TodoForm__CatDate",children:[w("div",{className:"TodoForm__CatDate__category",children:b("select",{id:"type",name:"type",value:s,onChange:d=>o(d.target.value),...u==="reminder"&&{disabled:!0},children:[w("option",{value:"No-cat",children:"No-cat"},"type-id-no-type"),e.map(d=>w("option",{value:d.typeName,children:d.typeName},`type-id ${d.id}`))]})}),w("div",{className:"TodoForm__CatDate__date",children:w("input",{type:"date",id:"startDate",name:"trip-start",value:a,onChange:d=>l(d.target.value),min:"2018-01-01",max:"2099-12-31"})})]})]})};function gv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gv(Object(n),!0).forEach(function(r){Oe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uu(t){return uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uu(t)}function uI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function cI(t,e,n){return e&&vv(t.prototype,e),n&&vv(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pp(t,e){return dI(t)||pI(t,e)||Rw(t,e)||gI()}function na(t){return hI(t)||fI(t)||Rw(t)||mI()}function hI(t){if(Array.isArray(t))return zd(t)}function dI(t){if(Array.isArray(t))return t}function fI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Rw(t,e){if(t){if(typeof t=="string")return zd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zd(t,e)}}function zd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function mI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yv=function(){},Dp={},Pw={},Dw=null,Ow={mark:yv,measure:yv};try{typeof window<"u"&&(Dp=window),typeof document<"u"&&(Pw=document),typeof MutationObserver<"u"&&(Dw=MutationObserver),typeof performance<"u"&&(Ow=performance)}catch{}var vI=Dp.navigator||{},wv=vI.userAgent,kv=wv===void 0?"":wv,mr=Dp,he=Pw,Ev=Dw,Ka=Ow;mr.document;var $n=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",Lw=~kv.indexOf("MSIE")||~kv.indexOf("Trident/"),qa,Qa,Ya,Xa,Ja,In="___FONT_AWESOME___",Vd=16,$w="fa",Mw="svg-inline--fa",Yr="data-fa-i2svg",Bd="data-fa-pseudo-element",yI="data-fa-pseudo-element-pending",Op="data-prefix",Lp="data-icon",_v="fontawesome-i2svg",wI="async",kI=["HTML","HEAD","STYLE","SCRIPT"],Fw=function(){try{return!0}catch{return!1}}(),le="classic",Ee="sharp",$p=[le,Ee];function ra(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[le]}})}var bo=ra((qa={},Oe(qa,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(qa,Ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),qa)),No=ra((Qa={},Oe(Qa,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(Qa,Ee,{solid:"fass",regular:"fasr",light:"fasl"}),Qa)),Ao=ra((Ya={},Oe(Ya,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(Ya,Ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ya)),EI=ra((Xa={},Oe(Xa,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(Xa,Ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Xa)),_I=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Uw="fa-layers-text",TI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,SI=ra((Ja={},Oe(Ja,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(Ja,Ee,{900:"fass",400:"fasr",300:"fasl"}),Ja)),zw=[1,2,3,4,5,6,7,8,9,10],CI=zw.concat([11,12,13,14,15,16,17,18,19,20]),II=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ro=new Set;Object.keys(No[le]).map(Ro.add.bind(Ro));Object.keys(No[Ee]).map(Ro.add.bind(Ro));var xI=[].concat($p,na(Ro),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lr.GROUP,Lr.SWAP_OPACITY,Lr.PRIMARY,Lr.SECONDARY]).concat(zw.map(function(t){return"".concat(t,"x")})).concat(CI.map(function(t){return"w-".concat(t)})),Zs=mr.FontAwesomeConfig||{};function bI(t){var e=he.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function NI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(he&&typeof he.querySelector=="function"){var AI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AI.forEach(function(t){var e=Pp(t,2),n=e[0],r=e[1],i=NI(bI(n));i!=null&&(Zs[r]=i)})}var Vw={styleDefault:"solid",familyDefault:"classic",cssPrefix:$w,replacementClass:Mw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zs.familyPrefix&&(Zs.cssPrefix=Zs.familyPrefix);var Yi=D(D({},Vw),Zs);Yi.autoReplaceSvg||(Yi.observeMutations=!1);var M={};Object.keys(Vw).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){Yi[t]=n,eo.forEach(function(r){return r(M)})},get:function(){return Yi[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){Yi.cssPrefix=e,eo.forEach(function(n){return n(M)})},get:function(){return Yi.cssPrefix}});mr.FontAwesomeConfig=M;var eo=[];function RI(t){return eo.push(t),function(){eo.splice(eo.indexOf(t),1)}}var Un=Vd,nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PI(t){if(!(!t||!$n)){var e=he.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=he.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return he.head.insertBefore(e,r),t}}var DI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Po(){for(var t=12,e="";t-- >0;)e+=DI[Math.random()*62|0];return e}function us(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mp(t){return t.classList?us(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Bw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OI(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Bw(t[n]),'" ')},"").trim()}function rc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Fp(t){return t.size!==nn.size||t.x!==nn.x||t.y!==nn.y||t.rotate!==nn.rotate||t.flipX||t.flipY}function LI(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $I(t){var e=t.transform,n=t.width,r=n===void 0?Vd:n,i=t.height,s=i===void 0?Vd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Lw?l+="translate(".concat(e.x/Un-r/2,"em, ").concat(e.y/Un-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):l+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),l+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var MI=`:root, :host {
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
}`;function jw(){var t=$w,e=Mw,n=M.cssPrefix,r=M.replacementClass,i=MI;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Tv=!1;function fh(){M.autoAddCss&&!Tv&&(PI(jw()),Tv=!0)}var FI={mixout:function(){return{dom:{css:jw,insertCss:fh}}},hooks:function(){return{beforeDOMElementCreation:function(){fh()},beforeI2svg:function(){fh()}}}},xn=mr||{};xn[In]||(xn[In]={});xn[In].styles||(xn[In].styles={});xn[In].hooks||(xn[In].hooks={});xn[In].shims||(xn[In].shims=[]);var Wt=xn[In],Hw=[],UI=function t(){he.removeEventListener("DOMContentLoaded",t),cu=1,Hw.map(function(e){return e()})},cu=!1;$n&&(cu=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),cu||he.addEventListener("DOMContentLoaded",UI));function zI(t){$n&&(cu?setTimeout(t,0):Hw.push(t))}function ia(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Bw(t):"<".concat(e," ").concat(OI(r),">").concat(s.map(ia).join(""),"</").concat(e,">")}function Sv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var VI=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ph=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?VI(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function BI(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function jd(t){var e=BI(t);return e.length===1?e[0].toString(16):null}function jI(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Cv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Cv(e);typeof Wt.hooks.addPack=="function"&&!i?Wt.hooks.addPack(t,Cv(e)):Wt.styles[t]=D(D({},Wt.styles[t]||{}),s),t==="fas"&&Hd("fa",e)}var Za,el,tl,Ii=Wt.styles,HI=Wt.shims,WI=(Za={},Oe(Za,le,Object.values(Ao[le])),Oe(Za,Ee,Object.values(Ao[Ee])),Za),Up=null,Ww={},Gw={},Kw={},qw={},Qw={},GI=(el={},Oe(el,le,Object.keys(bo[le])),Oe(el,Ee,Object.keys(bo[Ee])),el);function KI(t){return~xI.indexOf(t)}function qI(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!KI(i)?i:null}var Yw=function(){var e=function(s){return ph(Ii,function(o,a,l){return o[l]=ph(a,s,{}),o},{})};Ww=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Gw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Qw=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ii||M.autoFetchSvg,r=ph(HI,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Kw=r.names,qw=r.unicodes,Up=ic(M.styleDefault,{family:M.familyDefault})};RI(function(t){Up=ic(t.styleDefault,{family:M.familyDefault})});Yw();function zp(t,e){return(Ww[t]||{})[e]}function QI(t,e){return(Gw[t]||{})[e]}function $r(t,e){return(Qw[t]||{})[e]}function Xw(t){return Kw[t]||{prefix:null,iconName:null}}function YI(t){var e=qw[t],n=zp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gr(){return Up}var Vp=function(){return{prefix:null,iconName:null,rest:[]}};function ic(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?le:n,i=bo[r][t],s=No[r][t]||No[r][i],o=t in Wt.styles?t:null;return s||o||null}var Iv=(tl={},Oe(tl,le,Object.keys(Ao[le])),Oe(tl,Ee,Object.keys(Ao[Ee])),tl);function sc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Oe(e,le,"".concat(M.cssPrefix,"-").concat(le)),Oe(e,Ee,"".concat(M.cssPrefix,"-").concat(Ee)),e),o=null,a=le;(t.includes(s[le])||t.some(function(u){return Iv[le].includes(u)}))&&(a=le),(t.includes(s[Ee])||t.some(function(u){return Iv[Ee].includes(u)}))&&(a=Ee);var l=t.reduce(function(u,c){var h=qI(M.cssPrefix,c);if(Ii[c]?(c=WI[a].includes(c)?EI[a][c]:c,o=c,u.prefix=c):GI[a].indexOf(c)>-1?(o=c,u.prefix=ic(c,{family:a})):h?u.iconName=h:c!==M.replacementClass&&c!==s[le]&&c!==s[Ee]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Xw(u.iconName):{},m=$r(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ii.far&&Ii.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Vp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ee&&(Ii.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=$r(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gr()||"fas"),l}var XI=function(){function t(){uI(this,t),this.definitions={}}return cI(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Hd(a,o[a]);var l=Ao[le][a];l&&Hd(l,o[a]),Yw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),xv=[],xi={},$i={},JI=Object.keys($i);function ZI(t,e){var n=e.mixoutsTo;return xv=t,xi={},Object.keys($i).forEach(function(r){JI.indexOf(r)===-1&&delete $i[r]}),xv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),uu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){xi[o]||(xi[o]=[]),xi[o].push(s[o])})}r.provides&&r.provides($i)}),n}function Wd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=xi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Xr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xi[t]||[];i.forEach(function(s){s.apply(null,n)})}function bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $i[t]?$i[t].apply(null,e):void 0}function Gd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||gr();if(e)return e=$r(n,e)||e,Sv(Jw.definitions,n,e)||Sv(Wt.styles,n,e)}var Jw=new XI,e2=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Xr("noAuto")},t2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $n?(Xr("beforeI2svg",e),bn("pseudoElements2svg",e),bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,zI(function(){r2({autoReplaceSvgRoot:n}),Xr("watch",e)})}},n2={icon:function(e){if(e===null)return null;if(uu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ic(e[0]);return{prefix:r,iconName:$r(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(_I))){var i=sc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||gr(),iconName:$r(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=gr();return{prefix:s,iconName:$r(s,e)||e}}}},At={noAuto:e2,config:M,dom:t2,parse:n2,library:Jw,findIconDefinition:Gd,toHtml:ia},r2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?he:n;(Object.keys(Wt.styles).length>0||M.autoFetchSvg)&&$n&&M.autoReplaceSvg&&At.dom.i2svg({node:r})};function oc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ia(r)})}}),Object.defineProperty(t,"node",{get:function(){if($n){var r=he.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function i2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Fp(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=rc(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function s2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Bp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,m=d===void 0?!1:d,y=r.found?r:n,v=y.width,E=y.height,p=i==="fak",f=[M.replacementClass,s?"".concat(M.cssPrefix,"-").concat(s):""].filter(function(R){return h.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(h.classes).join(" "),g={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:f,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(E)})},k=p&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/E*16*.0625,"em")}:{};m&&(g.attributes[Yr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Po())},children:[l]}),delete g.attributes.title);var _=D(D({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},k),h.styles)}),x=r.found&&n.found?bn("generateAbstractMask",_)||{children:[],attributes:{}}:bn("generateAbstractIcon",_)||{children:[],attributes:{}},N=x.children,O=x.attributes;return _.children=N,_.attributes=O,a?s2(_):i2(_)}function bv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Yr]="");var c=D({},o.styles);Fp(i)&&(c.transform=$I({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=rc(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function o2(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=rc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mh=Wt.styles;function Kd(t){var e=t[0],n=t[1],r=t.slice(4),i=Pp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Lr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Lr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Lr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var a2={found:!1,width:512,height:512};function l2(t,e){!Fw&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qd(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=gr()),new Promise(function(r,i){if(bn("missingIconAbstract"),n==="fa"){var s=Xw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&mh[e]&&mh[e][t]){var o=mh[e][t];return r(Kd(o))}l2(t,e),r(D(D({},a2),{},{icon:M.showMissingIcons&&t?bn("missingIconAbstract")||{}:{}}))})}var Nv=function(){},Qd=M.measurePerformance&&Ka&&Ka.mark&&Ka.measure?Ka:{mark:Nv,measure:Nv},Ms='FA "6.4.0"',u2=function(e){return Qd.mark("".concat(Ms," ").concat(e," begins")),function(){return Zw(e)}},Zw=function(e){Qd.mark("".concat(Ms," ").concat(e," ends")),Qd.measure("".concat(Ms," ").concat(e),"".concat(Ms," ").concat(e," begins"),"".concat(Ms," ").concat(e," ends"))},jp={begin:u2,end:Zw},Il=function(){};function Av(t){var e=t.getAttribute?t.getAttribute(Yr):null;return typeof e=="string"}function c2(t){var e=t.getAttribute?t.getAttribute(Op):null,n=t.getAttribute?t.getAttribute(Lp):null;return e&&n}function h2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function d2(){if(M.autoReplaceSvg===!0)return xl.replace;var t=xl[M.autoReplaceSvg];return t||xl.replace}function f2(t){return he.createElementNS("http://www.w3.org/2000/svg",t)}function p2(t){return he.createElement(t)}function ek(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?f2:p2:n;if(typeof t=="string")return he.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ek(o,{ceFn:r}))}),i}function m2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ek(i),n)}),n.getAttribute(Yr)===null&&M.keepOriginalSource){var r=he.createComment(m2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Mp(n).indexOf(M.replacementClass))return xl.replace(e);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===M.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ia(a)}).join(`
`);n.setAttribute(Yr,""),n.innerHTML=o}};function Rv(t){t()}function tk(t,e){var n=typeof e=="function"?e:Il;if(t.length===0)n();else{var r=Rv;M.mutateApproach===wI&&(r=mr.requestAnimationFrame||Rv),r(function(){var i=d2(),s=jp.begin("mutate");t.map(i),s(),n()})}}var Hp=!1;function nk(){Hp=!0}function Yd(){Hp=!1}var hu=null;function Pv(t){if(Ev&&M.observeMutations){var e=t.treeCallback,n=e===void 0?Il:e,r=t.nodeCallback,i=r===void 0?Il:r,s=t.pseudoElementsCallback,o=s===void 0?Il:s,a=t.observeMutationsRoot,l=a===void 0?he:a;hu=new Ev(function(u){if(!Hp){var c=gr();us(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Av(h.addedNodes[0])&&(M.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&M.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Av(h.target)&&~II.indexOf(h.attributeName))if(h.attributeName==="class"&&c2(h.target)){var d=sc(Mp(h.target)),m=d.prefix,y=d.iconName;h.target.setAttribute(Op,m||c),y&&h.target.setAttribute(Lp,y)}else h2(h.target)&&i(h.target)})}}),$n&&hu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function g2(){hu&&hu.disconnect()}function v2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function y2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=sc(Mp(t));return i.prefix||(i.prefix=gr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=QI(i.prefix,t.innerText)||zp(i.prefix,jd(t.innerText))),!i.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function w2(t){var e=us(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Po()):(e["aria-hidden"]="true",e.focusable="false")),e}function k2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=y2(t),r=n.iconName,i=n.prefix,s=n.rest,o=w2(t),a=Wd("parseNodeAttributes",{},t),l=e.styleParser?v2(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:nn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var E2=Wt.styles;function rk(t){var e=M.autoReplaceSvg==="nest"?Dv(t,{styleParser:!1}):Dv(t);return~e.extra.classes.indexOf(Uw)?bn("generateLayersText",t,e):bn("generateSvgReplacementMutation",t,e)}var vr=new Set;$p.map(function(t){vr.add("fa-".concat(t))});Object.keys(bo[le]).map(vr.add.bind(vr));Object.keys(bo[Ee]).map(vr.add.bind(vr));vr=na(vr);function Ov(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$n)return Promise.resolve();var n=he.documentElement.classList,r=function(h){return n.add("".concat(_v,"-").concat(h))},i=function(h){return n.remove("".concat(_v,"-").concat(h))},s=M.autoFetchSvg?vr:$p.map(function(c){return"fa-".concat(c)}).concat(Object.keys(E2));s.includes("fa")||s.push("fa");var o=[".".concat(Uw,":not([").concat(Yr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Yr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=us(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=jp.begin("onTree"),u=a.reduce(function(c,h){try{var d=rk(h);d&&c.push(d)}catch(m){Fw||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(d){tk(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),h(d)})})}function _2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rk(t).then(function(n){n&&tk([n],e)})}function T2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Gd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gd(i||{})),t(r,D(D({},n),{},{mask:i}))}}var S2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,d=h===void 0?null:h,m=n.titleId,y=m===void 0?null:m,v=n.classes,E=v===void 0?[]:v,p=n.attributes,f=p===void 0?{}:p,g=n.styles,k=g===void 0?{}:g;if(e){var _=e.prefix,x=e.iconName,N=e.icon;return oc(D({type:"icon"},e),function(){return Xr("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(d?f["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(y||Po()):(f["aria-hidden"]="true",f.focusable="false")),Bp({icons:{main:Kd(N),mask:l?Kd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:x,transform:D(D({},nn),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:f,styles:k,classes:E}})})}},C2={mixout:function(){return{icon:T2(S2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ov,n.nodeCallback=_2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?he:r,s=n.callback,o=s===void 0?function(){}:s;return Ov(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,d=r.extra;return new Promise(function(m,y){Promise.all([qd(i,a),c.iconName?qd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var E=Pp(v,2),p=E[0],f=E[1];m([n,Bp({icons:{main:p,mask:f},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=rc(a);l.length>0&&(i.style=l);var u;return Fp(o)&&(u=bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},I2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return oc({type:"layer"},function(){Xr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(na(s)).join(" ")},children:o}]})}}}},x2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return oc({type:"counter",content:n},function(){return Xr("beforeDOMElementCreation",{content:n,params:r}),o2({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(na(a))}})})}}}},b2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?nn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return oc({type:"text",content:n},function(){return Xr("beforeDOMElementCreation",{content:n,params:r}),bv({content:n,transform:D(D({},nn),s),title:a,extra:{attributes:h,styles:m,classes:["".concat(M.cssPrefix,"-layers-text")].concat(na(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Lw){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bv({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},N2=new RegExp('"',"ug"),Lv=[1105920,1112319];function A2(t){var e=t.replace(N2,""),n=jI(e,0),r=n>=Lv[0]&&n<=Lv[1],i=e.length===2?e[0]===e[1]:!1;return{value:jd(i?e[0]:e),isSecondary:r||i}}function $v(t,e){var n="".concat(yI).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=us(t.children),o=s.filter(function(N){return N.getAttribute(Bd)===e})[0],a=mr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(TI),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ee:le,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?No[d][l[2].toLowerCase()]:SI[d][u],y=A2(h),v=y.value,E=y.isSecondary,p=l[0].startsWith("FontAwesome"),f=zp(m,v),g=f;if(p){var k=YI(v);k.iconName&&k.prefix&&(f=k.iconName,m=k.prefix)}if(f&&!E&&(!o||o.getAttribute(Op)!==m||o.getAttribute(Lp)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var _=k2(),x=_.extra;x.attributes[Bd]=e,qd(f,m).then(function(N){var O=Bp(D(D({},_),{},{icons:{main:N,mask:Vp()},prefix:m,iconName:g,extra:x,watchable:!0})),R=he.createElement("svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=O.map(function(G){return ia(G)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function R2(t){return Promise.all([$v(t,"::before"),$v(t,"::after")])}function P2(t){return t.parentNode!==document.head&&!~kI.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Mv(t){if($n)return new Promise(function(e,n){var r=us(t.querySelectorAll("*")).filter(P2).map(R2),i=jp.begin("searchPseudoElements");nk(),Promise.all(r).then(function(){i(),Yd(),e()}).catch(function(){i(),Yd(),n()})})}var D2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?he:r;M.searchPseudoElements&&Mv(i)}}},Fv=!1,O2={mixout:function(){return{dom:{unwatch:function(){nk(),Fv=!0}}}},hooks:function(){return{bootstrap:function(){Pv(Wd("mutationObserverCallbacks",{}))},noAuto:function(){g2()},watch:function(n){var r=n.observeMutationsRoot;Fv?Yd():Pv(Wd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Uv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},L2={mixout:function(){return{parse:{transform:function(n){return Uv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Uv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:d};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),m.path)}]}]}}}},gh={x:0,y:0,width:"100%",height:"100%"};function zv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $2(t){return t.tag==="g"?t.children:[t]}var M2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?sc(i.split(" ").map(function(o){return o.trim()})):Vp();return s.prefix||(s.prefix=gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,d=o.icon,m=LI({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:D(D({},gh),{},{fill:"white"})},v=c.children?{children:c.children.map(zv)}:{},E={tag:"g",attributes:D({},m.inner),children:[zv(D({tag:c.tag,attributes:D(D({},c.attributes),m.path)},v))]},p={tag:"g",attributes:D({},m.outer),children:[E]},f="mask-".concat(a||Po()),g="clip-".concat(a||Po()),k={tag:"mask",attributes:D(D({},gh),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:$2(d)},k]};return r.push(_,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},gh)}),{children:r,attributes:i}}}},F2={provides:function(e){var n=!1;mr.matchMedia&&(n=mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},U2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},z2=[FI,C2,I2,x2,b2,D2,O2,L2,M2,F2,U2];ZI(z2,{mixoutsTo:At});At.noAuto;At.config;At.library;At.dom;var Xd=At.parse;At.findIconDefinition;At.toHtml;var V2=At.icon;At.layer;At.text;At.counter;var Q={},B2={get exports(){return Q},set exports(t){Q=t}},j2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H2=j2,W2=H2;function ik(){}function sk(){}sk.resetWarningCache=ik;var G2=function(){function t(r,i,s,o,a,l){if(l!==W2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sk,resetWarningCache:ik};return n.PropTypes=n,n};B2.exports=G2();function Vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Yn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vv(Object(n),!0).forEach(function(r){bi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function du(t){return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},du(t)}function bi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function q2(t,e){if(t==null)return{};var n=K2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Jd(t){return Q2(t)||Y2(t)||X2(t)||J2()}function Q2(t){if(Array.isArray(t))return Zd(t)}function Y2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function X2(t,e){if(t){if(typeof t=="string")return Zd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zd(t,e)}}function Zd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z2(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,v=t.listItem,E=t.flip,p=t.size,f=t.rotation,g=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":v,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},bi(e,"fa-".concat(p),typeof p<"u"&&p!==null),bi(e,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),bi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),bi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(_){return k[_]?_:null}).filter(function(_){return _})}function ex(t){return t=t-0,t===t}function ok(t){return ex(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var tx=["style"];function nx(t){return t.charAt(0).toUpperCase()+t.slice(1)}function rx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ok(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[nx(i)]=s:e[i]=s,e},{})}function ak(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ak(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=rx(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ok(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=q2(n,tx);return i.attrs.style=Yn(Yn({},i.attrs.style),o),t.apply(void 0,[e.tag,Yn(Yn({},i.attrs),a)].concat(Jd(r)))}var lk=!1;try{lk=!0}catch{}function ix(){if(!lk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Bv(t){if(t&&du(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xd.icon)return Xd.icon(t);if(t===null)return null;if(t&&du(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function vh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?bi({},t,e):{}}var Se=je.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Bv(n),c=vh("classes",[].concat(Jd(Z2(t)),Jd(s.split(" ")))),h=vh("transform",typeof t.transform=="string"?Xd.transform(t.transform):t.transform),d=vh("mask",Bv(r)),m=V2(u,Yn(Yn(Yn(Yn({},c),h),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return ix("Could not find icon",u),null;var y=m.abstract,v={ref:e};return Object.keys(t).forEach(function(E){Se.defaultProps.hasOwnProperty(E)||(v[E]=t[E])}),sx(y[0],v)});Se.displayName="FontAwesomeIcon";Se.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};Se.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var sx=ak.bind(null,je.createElement),uk={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},ox={prefix:"fas",iconName:"box-archive",icon:[512,512,["archive"],"f187","M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},ax={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},ck=ax,hk={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},lx={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},to=lx,ux={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},cx=ux,no={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};const hx=t=>{var c;const{types:e,todo:n,deleteTodoTask:r,toggleCompleteTask:i,editTodoTask:s,allColors:o}=t,a=(c=e.find(h=>h.typeName===n.nType))==null?void 0:c.color,l=()=>{i==null||i(n.id)},u=()=>{s==null||s(n.id)};return b("li",{className:`TodoItem ${n.completed&&"completed"} Todo-${n.taskorreminder}`,style:{color:o.itemText,backgroundColor:n.taskorreminder==="reminder"?o.reminderBackgroundColor:o.itemBackgroundColor},children:[w("div",{className:"TodoItem__type-color",onClick:l,style:{backgroundColor:a??"gray"}}),b("div",{className:"TodoItem__container",onClick:l,children:[" ",b("p",{className:`${n.completed&&"completed"}`,children:[n.task,n.taskorreminder==="task"?n.nType?" / "+n.nType:" / No-cat":null]})]}),b("div",{className:"TodoItem__icons",children:[w(Se,{icon:to,onClick:u,style:{color:o.buttonIcons}}),w(Se,{icon:no,onClick:()=>r(n.id),style:{color:o.buttonIcons}})]})]})},dx=t=>{const{editTask:e,task:n,types:r,allColors:i}=t,[s,o]=I.useState(n.task),[a,l]=I.useState(n.nType),[u,c]=I.useState(n.date),[h,d]=I.useState(n.taskorreminder);return b("form",{className:"EditTodoForm",onSubmit:y=>{y.preventDefault(),e==null||e(s,a,u,h,n.id)},style:{background:i.formBackgroundColor},children:[b("div",{className:"TodoForm__TaskReminder",children:[w("input",{type:"radio",name:"task-reminder",onChange:()=>d("task"),checked:h==="task"})," ",w("label",{style:{color:i.titleTextColor},children:"Task "}),w("input",{type:"radio",name:"task-reminder",onChange:()=>d("reminder"),checked:h==="reminder"}),w("label",{style:{color:i.titleTextColor},children:"Reminder"})]}),b("div",{className:"EditTodoForm__Task",children:[w("input",{type:"text",value:s,placeholder:"Update task",className:"EditTodoForm__Task__input",onChange:y=>o(y.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:i.buttonIcons,color:i.buttonText},children:"Update"})]}),b("div",{className:"EditTodoForm__CatDate",children:[w("div",{className:"EditTodoForm__CatDate__category",children:w("select",{id:n.id,name:"type",value:a,onChange:y=>l(y.target.value),children:r.map(y=>w("option",{value:y.typeName,children:y.typeName},y.id))})}),w("div",{className:"EditTodoForm__CatDate__date",children:w("input",{type:"date",id:"start",name:"trip-start",defaultValue:n.date,onChange:y=>c(y.target.value),min:"2018-01-01",max:"2099-12-31"})})," "]})]})},fx=t=>{const{date:e,types:n,todos:r,deleteTodoTask:i,toggleCompleteTask:s,editTodoTask:o,finishEditTask:a,allColors:l}=t,u=r.filter(v=>v.taskorreminder!=="reminder").length,h=(r.filter(v=>v.completed&&v.taskorreminder!=="reminder").length/u*100).toFixed(0),d=new Date().toLocaleDateString("en-GB"),m=new Date(e).toLocaleDateString("en-GB"),y=new Date(e).toLocaleDateString("en-GB",{weekday:"short"});return b("div",{className:`Daily-divider ${y} ${h==="100"&&"-completed-day"}`,children:[b("div",{className:"Daily-divider__Header",children:[b("h3",{className:`Daily-divider__Header__Title ${m===d?"todayDate":""}`,children:[" ",new Date(e).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})]}),b("p",{className:"Daily-divider__Header__Title",children:["Day ",h,"% completed"]})]}),w("ul",{children:r.map(v=>v.isEditing?w(dx,{task:v,allColors:l,types:n,editTask:a},v.task):w(hx,{todo:v,allColors:l,types:n,editTodoTask:o,toggleCompleteTask:s,deleteTodoTask:i},v.task))})]})},px=t=>{const{todos:e,parentElement:n,week:r,weekPercentage:i,weekNotComplete:s,allColors:o,handleArchiveClick:a,weekCollapsed:l,handleCollapseClick:u}=t,[c,h]=I.useState(""),[d,m]=I.useState(!1);I.useEffect(()=>{const v=localStorage.getItem(`${r}-weekObjective`);v&&h(v)},[]);const y=v=>{v.preventDefault(),h(c),localStorage.setItem(`${r}-weekObjective`,c),m(!1)};return b("div",{className:`Weekly-divider__Header header_week_of_${n}`,children:[b("div",{className:`Weekly-divider__Header__Titles ${i==="100"&&"Weekly-divider__Header__Titles-complete"}`,style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${i}%, ${o.weeklyCardBG} ${s}%, ${o.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[b("h3",{style:{color:o.weeklyCardTxt},children:[n==="TodoWrapper"?"Week plan":r," "]}),b("p",{style:{color:o.weeklyCardTxt},children:["Week is ",i,"% completed"]})]}),w("div",{className:`Weekly-divider__Header__EditableContent ${i==="100"&&"Weekly-divider__Header__EditableContent-complete"}`,style:{borderTop:"1px solid "+o.weeklyBorder},children:d?b(Fl,{children:[" ",w("textarea",{className:"Weekly-divider__Header__EditableContent__Editinginput",value:c,onChange:v=>h(v.target.value)}),w("button",{onClick:y,style:{backgroundColor:o.buttonIcons,color:o.buttonText},children:"edit"})]}):b(Fl,{children:[" ",w("p",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:o.weeklyCardTxt},children:c||"Write your week objective"}),b("div",{className:"editOrCollapse",children:[b("div",{children:[b("button",{onClick:()=>m(!0),style:{backgroundColor:o.buttonIcons,color:o.buttonText},children:[w(Se,{icon:to}),"edit"]}),n==="TodoWrapper"&&b("button",{onClick:()=>a(),style:{backgroundColor:o.buttonIcons,color:o.buttonText},children:[" ",w(Se,{icon:ox}),"archive"]})]}),w(Se,{icon:l?ck:cx,onClick:u,style:{color:o.buttonIcons}})]})]})})]})},dk=t=>{const{parentElement:e,week:n,allColors:r,weekList:i,types:s,todos:o,deleteTodoTask:a,toggleCompleteTask:l,editTodoTask:u,archiveMultipleTodos:c,finishEditTask:h}=t,[d,m]=I.useState(!1),y=[...new Set(o.map(_=>_.date))],v=[...new Set(o.filter(_=>_.taskorreminder!=="reminder"))],p=(v.filter(_=>_.completed&&_.taskorreminder!=="reminder").length/v.length*100).toFixed(0),f=parseInt(p)-100,g=(_=o)=>{Array.isArray(_)&&c(_.map(x=>x.id))},k=()=>{m(!d)};return b("div",{className:`Weekly-divider ${i===!0?"vertical-divider-list":"Weekly-divider-list"}`,style:{backgroundColor:r.weeklyCardBG,border:"1px solid "+r.weeklyBorder},children:[w(px,{parentElement:e,week:n,weekPercentage:p,allColors:r,handleArchiveClick:g,weekCollapsed:d,handleCollapseClick:k,weekNotComplete:f,todos:o}),w("div",{style:{maxHeight:d?0:"2000px",transition:"max-height 0.7s"},className:`Weekly-divider__Content content_week_of_${e}`,children:y.map(_=>w(fx,{date:_,allColors:r,types:s,editTodoTask:u,toggleCompleteTask:l,deleteTodoTask:a,finishEditTask:h,todos:o.filter(x=>x.date===_)},_))})]})},mx=({addType:t,allColors:e})=>{const[n,r]=I.useState(""),[i,s]=I.useState("#ABABAB");return w("form",{className:"TypeForm",onSubmit:a=>{a.preventDefault(),n&&(t(n,i),r(""),s("#ABABAB"))},style:{background:e.formBackgroundColor},children:b("div",{className:"TypeForm__Task type-form-organizer",children:[w("input",{type:"color",id:"favcolor",name:"favcolor",value:i,onChange:a=>s(a.target.value)}),w("input",{type:"text",value:n,placeholder:"New Category",onChange:a=>r(a.target.value)}),w("button",{type:"submit",className:"add-btn",style:{backgroundColor:e.buttonIcons,color:e.buttonText},children:"Add Type"})]})})};var nl,gx=new Uint8Array(16);function vx(){if(!nl&&(nl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!nl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nl(gx)}const yx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function wx(t){return typeof t=="string"&&yx.test(t)}var Ve=[];for(var yh=0;yh<256;++yh)Ve.push((yh+256).toString(16).substr(1));function kx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ve[t[e+0]]+Ve[t[e+1]]+Ve[t[e+2]]+Ve[t[e+3]]+"-"+Ve[t[e+4]]+Ve[t[e+5]]+"-"+Ve[t[e+6]]+Ve[t[e+7]]+"-"+Ve[t[e+8]]+Ve[t[e+9]]+"-"+Ve[t[e+10]]+Ve[t[e+11]]+Ve[t[e+12]]+Ve[t[e+13]]+Ve[t[e+14]]+Ve[t[e+15]]).toLowerCase();if(!wx(n))throw TypeError("Stringified UUID is invalid");return n}function jv(t,e,n){t=t||{};var r=t.random||(t.rng||vx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return kx(r)}const Ex=t=>{const{types:e,deleteType:n,allColors:r}=t;return w(Fl,{children:e.map(i=>b("div",{className:"TodoItem",style:{backgroundColor:r.itemBackgroundColor,color:r.itemText},children:[w("div",{style:{width:"25px",height:"25px",borderRadius:"8px",background:i.color}}),w("p",{children:i.typeName}),w("div",{children:w(Se,{icon:no,onClick:()=>n(i.typeName,i.id),style:{color:r.buttonIcons}},i.id)})]},`typeItem-${i.id}`))})};/**
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
 */const fk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_x=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_x(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Tx;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sx=function(t){const e=fk(t);return pk.encodeByteArray(e,!0)},fu=function(t){return Sx(t).replace(/\./g,"")},mk=function(t){try{return pk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ix=()=>Cx().__FIREBASE_DEFAULTS__,xx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mk(t[1]);return e&&JSON.parse(e)},Wp=()=>{try{return Ix()||xx()||bx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gk=t=>{var e,n;return(n=(e=Wp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nx=t=>{const e=gk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ax=()=>{var t;return(t=Wp())===null||t===void 0?void 0:t.config},vk=t=>{var e;return(e=Wp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Px(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function Ox(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $x(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mx(){try{return typeof indexedDB=="object"}catch{return!1}}function Fx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ux="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ux,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function zx(t,e){return t.replace(Vx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vx=/\{\$([^}]+)}/g;function Bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hv(s)&&Hv(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hv(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jx(t,e){const n=new Hx(t,e);return n.subscribe.bind(n)}class Hx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wh),i.error===void 0&&(i.error=wh),i.complete===void 0&&(i.complete=wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wh(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class Gx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qx(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kx(t){return t===Rr?void 0:t}function qx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Yx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Xx=te.INFO,Jx={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Zx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gp{constructor(e){this.name=e,this._logLevel=Xx,this._logHandler=Zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eb=(t,e)=>e.some(n=>t instanceof n);let Wv,Gv;function tb(){return Wv||(Wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nb(){return Gv||(Gv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yk=new WeakMap,ef=new WeakMap,wk=new WeakMap,kh=new WeakMap,Kp=new WeakMap;function rb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yk.set(n,t)}).catch(()=>{}),Kp.set(e,t),e}function ib(t){if(ef.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ef.set(t,e)}let tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ef.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sb(t){tf=t(tf)}function ob(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eh(this),e,...n);return wk.set(r,e.sort?e.sort():[e]),ar(r)}:nb().includes(t)?function(...e){return t.apply(Eh(this),e),ar(yk.get(this))}:function(...e){return ar(t.apply(Eh(this),e))}}function ab(t){return typeof t=="function"?ob(t):(t instanceof IDBTransaction&&ib(t),eb(t,tb())?new Proxy(t,tf):t)}function ar(t){if(t instanceof IDBRequest)return rb(t);if(kh.has(t))return kh.get(t);const e=ab(t);return e!==t&&(kh.set(t,e),Kp.set(e,t)),e}const Eh=t=>Kp.get(t);function lb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ar(o.result),l.oldVersion,l.newVersion,ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ub=["get","getKey","getAll","getAllKeys","count"],cb=["put","add","delete","clear"],_h=new Map;function Kv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ub.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _h.set(e,s),s}sb(t=>({...t,get:(e,n,r)=>Kv(e,n)||t.get(e,n,r),has:(e,n)=>!!Kv(e,n)||t.has(e,n)}));/**
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
 */class hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(db(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function db(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nf="@firebase/app",qv="0.9.9";/**
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
 */const Zr=new Gp("@firebase/app"),fb="@firebase/app-compat",pb="@firebase/analytics-compat",mb="@firebase/analytics",gb="@firebase/app-check-compat",vb="@firebase/app-check",yb="@firebase/auth",wb="@firebase/auth-compat",kb="@firebase/database",Eb="@firebase/database-compat",_b="@firebase/functions",Tb="@firebase/functions-compat",Sb="@firebase/installations",Cb="@firebase/installations-compat",Ib="@firebase/messaging",xb="@firebase/messaging-compat",bb="@firebase/performance",Nb="@firebase/performance-compat",Ab="@firebase/remote-config",Rb="@firebase/remote-config-compat",Pb="@firebase/storage",Db="@firebase/storage-compat",Ob="@firebase/firestore",Lb="@firebase/firestore-compat",$b="firebase",Mb="9.21.0";/**
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
 */const rf="[DEFAULT]",Fb={[nf]:"fire-core",[fb]:"fire-core-compat",[mb]:"fire-analytics",[pb]:"fire-analytics-compat",[vb]:"fire-app-check",[gb]:"fire-app-check-compat",[yb]:"fire-auth",[wb]:"fire-auth-compat",[kb]:"fire-rtdb",[Eb]:"fire-rtdb-compat",[_b]:"fire-fn",[Tb]:"fire-fn-compat",[Sb]:"fire-iid",[Cb]:"fire-iid-compat",[Ib]:"fire-fcm",[xb]:"fire-fcm-compat",[bb]:"fire-perf",[Nb]:"fire-perf-compat",[Ab]:"fire-rc",[Rb]:"fire-rc-compat",[Pb]:"fire-gcs",[Db]:"fire-gcs-compat",[Ob]:"fire-fst",[Lb]:"fire-fst-compat","fire-js":"fire-js",[$b]:"fire-js-all"};/**
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
 */const mu=new Map,sf=new Map;function Ub(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(sf.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,t);for(const n of mu.values())Ub(n,t);return!0}function qp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lr=new sa("app","Firebase",zb);/**
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
 */class Vb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=Mb;function kk(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=Ax()),!n)throw lr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new Qx(i);for(const l of sf.values())o.addComponent(l);const a=new Vb(n,r,o);return mu.set(i,a),a}function Ek(t=rf){const e=mu.get(t);if(!e&&t===rf)return kk();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){var r;let i=(r=Fb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}Xi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bb="firebase-heartbeat-database",jb=1,Do="firebase-heartbeat-store";let Th=null;function _k(){return Th||(Th=lb(Bb,jb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Do)}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Th}async function Hb(t){try{return(await _k()).transaction(Do).objectStore(Do).get(Tk(t))}catch(e){if(e instanceof Mn)Zr.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function Qv(t,e){try{const r=(await _k()).transaction(Do,"readwrite");return await r.objectStore(Do).put(e,Tk(t)),r.done}catch(n){if(n instanceof Mn)Zr.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function Tk(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wb=1024,Gb=30*24*60*60*1e3;class Kb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Gb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yv(),{heartbeatsToSend:n,unsentEntries:r}=qb(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yv(){return new Date().toISOString().substring(0,10)}function qb(t,e=Wb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mx()?Fx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xv(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yb(t){Xi(new Jr("platform-logger",e=>new hb(e),"PRIVATE")),Xi(new Jr("heartbeat",e=>new Kb(e),"PRIVATE")),ur(nf,qv,t),ur(nf,qv,"esm2017"),ur("fire-js","")}Yb("");var Xb="firebase",Jb="9.21.0";/**
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
 */ur(Xb,Jb,"app");function Qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Sk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zb=Sk,Ck=new sa("auth","Firebase",Sk());/**
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
 */const gu=new Gp("@firebase/auth");function eN(t,...e){gu.logLevel<=te.WARN&&gu.warn(`Auth (${cs}): ${t}`,...e)}function bl(t,...e){gu.logLevel<=te.ERROR&&gu.error(`Auth (${cs}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Yp(t,...e)}function an(t,...e){return Yp(t,...e)}function Ik(t,e,n){const r=Object.assign(Object.assign({},Zb()),{[e]:n});return new sa("auth","Firebase",r).create(e,{appName:t.name})}function tN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),Ik(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ck.create(t,...e)}function V(t,e,...n){if(!t)throw Yp(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function Nn(t,e){t||vn(e)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nN(){return Jv()==="http:"||Jv()==="https:"}function Jv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nN()||Ox()||"connection"in navigator)?navigator.onLine:!0}function iN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dx()||Lx()}get(){return rN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xp(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oN=new aa(3e4,6e4);function hs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,r,i={}){return bk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xk.fetch()(Nk(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function bk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sN),e);try{const i=new aN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw rl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ik(t,c,u);zt(t,c)}}catch(i){if(i instanceof Mn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function la(t,e,n,r,i={}){const s=await ds(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nk(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xp(t.config,i):`${t.config.apiScheme}://${i}`}class aN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),oN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function lN(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=Jp(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Sh(i.auth_time)),issuedAtTime:ro(Sh(i.iat)),expirationTime:ro(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=mk(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hN(t){const e=Jp(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ak{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oo(t,uN(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ak(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function pN(t){const e=dt(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=Qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vN(t,e){const n=await bk(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nk(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Lo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function zn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ak(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oo(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:k,isAnonymous:_,providerData:x,stsTokenManager:N}=n;V(g&&N,e,"internal-error");const O=Lo.fromJSON(this.name,N);V(typeof g=="string",e,"internal-error"),zn(h,e.name),zn(d,e.name),V(typeof k=="boolean",e,"internal-error"),V(typeof _=="boolean",e,"internal-error"),zn(m,e.name),zn(y,e.name),zn(v,e.name),zn(E,e.name),zn(p,e.name),zn(f,e.name);const R=new jr({uid:g,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:_,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(R.providerData=x.map(G=>Object.assign({},G))),E&&(R._redirectEventId=E),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Lo;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}}/**
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
 */const Zv=new Map;function yn(t){Nn(t instanceof Function,"Expected a class definition");let e=Zv.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zv.set(t,e),e)}/**
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
 */class Rk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rk.type="NONE";const ey=Rk;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(yn(ey),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(ey);const o=Nl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=jr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mi(s,e,r))}}/**
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
 */function ty(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ok(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($k(e))return"Blackberry";if(Mk(e))return"Webos";if(Zp(e))return"Safari";if((e.includes("chrome/")||Dk(e))&&!e.includes("edge/"))return"Chrome";if(Lk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pk(t=ot()){return/firefox\//i.test(t)}function Zp(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dk(t=ot()){return/crios\//i.test(t)}function Ok(t=ot()){return/iemobile/i.test(t)}function Lk(t=ot()){return/android/i.test(t)}function $k(t=ot()){return/blackberry/i.test(t)}function Mk(t=ot()){return/webos/i.test(t)}function ac(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yN(t=ot()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wN(){return $x()&&document.documentMode===10}function Fk(t=ot()){return ac(t)||Lk(t)||Mk(t)||$k(t)||/windows phone/i.test(t)||Ok(t)}function kN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Uk(t,e=[]){let n;switch(t){case"Browser":n=ty(ot());break;case"Worker":n=`${ty(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}async function zk(t,e){return ds(t,"GET","/v2/recaptchaConfig",hs(t,e))}function ny(t){return t!==void 0&&t.enterprise!==void 0}class Vk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})}function _N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TN="https://www.google.com/recaptcha/enterprise.js?render=",SN="recaptcha-enterprise",CN="NO_RECAPTCHA";class jk{constructor(e){this.type=SN,this.auth=Sr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ny(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ny(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Bk(TN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yu(t,e,n,r=!1){const i=new jk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class IN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class xN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new IN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ck,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await zk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Vk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sr(t){return dt(t)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=jx(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function bN(t,e){const n=qp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function NN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AN(t,e,n){const r=Sr(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Hk(e),{host:o,port:a}=RN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PN()}function Hk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RN(t){const e=Hk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iy(o)}}}function iy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function DN(t,e){return ds(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ch(t,e){return la(t,"POST","/v1/accounts:signInWithPassword",hs(t,e))}/**
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
 */async function ON(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",hs(t,e))}async function LN(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",hs(t,e))}/**
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
 */class $o extends em{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await yu(e,r,"signInWithPassword");return Ch(e,i)}else return Ch(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await yu(e,r,"signInWithPassword");return Ch(e,s)}else return Promise.reject(i)});case"emailLink":return ON(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return DN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LN(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fi(t,e){return la(t,"POST","/v1/accounts:signInWithIdp",hs(t,e))}/**
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
 */const $N="http://localhost";class ei extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */function MN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FN(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class tm{constructor(e){var n,r,i,s,o,a;const l=Fs(Us(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=MN((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FN(e);try{return new tm(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tm.parseLink(n);return V(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ua extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends ua{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class Gn extends ua{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Kn extends ua{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function Al(t,e){return la(t,"POST","/v1/accounts:signUp",hs(t,e))}/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=sy(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sy(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function UN(t){var e;const n=Sr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new An({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Al(n,{returnSecureToken:!0}),i=await An._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class wu extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function Wk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function zN(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
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
 */async function VN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Oo(t,Wk(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=Jp(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),An._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function Gk(t,e,n=!1){const r="signIn",i=await Wk(t,r,e),s=await An._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BN(t,e){return Gk(Sr(t),e)}async function jN(t,e,n){var r;const i=Sr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await yu(i,s,"signUpPassword");o=Al(i,u)}else o=Al(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await yu(i,s,"signUpPassword");return Al(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await An._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function HN(t,e,n){return BN(dt(t),fs.credential(e,n))}function WN(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function GN(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function KN(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function qN(t){return dt(t).signOut()}const ku="__sak";/**
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
 */class Kk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function QN(){const t=ot();return Zp(t)||ac(t)}const YN=1e3,XN=10;class qk extends Kk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QN()&&kN(),this.fallbackToPolling=Fk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qk.type="LOCAL";const JN=qk;/**
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
 */class Qk extends Kk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qk.type="SESSION";const Yk=Qk;/**
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
 */function ZN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function tA(t){ln().location.href=t}/**
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
 */function Xk(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function nA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iA(){return Xk()?self:null}/**
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
 */const Jk="firebaseLocalStorageDb",sA=1,Eu="firebaseLocalStorage",Zk="fbase_key";class ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function oA(){const t=indexedDB.deleteDatabase(Jk);return new ca(t).toPromise()}function af(){const t=indexedDB.open(Jk,sA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:Zk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await oA(),e(await af()))})})}async function oy(t,e,n){const r=uc(t,!0).put({[Zk]:e,value:n});return new ca(r).toPromise()}async function aA(t,e){const n=uc(t,!1).get(e),r=await new ca(n).toPromise();return r===void 0?null:r.value}function ay(t,e){const n=uc(t,!0).delete(e);return new ca(n).toPromise()}const lA=800,uA=3;class eE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(iA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nA(),!this.activeServiceWorker)return;this.sender=new eA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await oy(e,ku,"1"),await ay(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new ca(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eE.type="LOCAL";const cA=eE;new aa(3e4,6e4);/**
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
 */function tE(t,e){return e?yn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class im extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hA(t){return Gk(t.auth,new im(t),t.bypassAuthState)}function dA(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),VN(n,new im(t),t.bypassAuthState)}async function fA(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),zN(n,new im(t),t.bypassAuthState)}/**
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
 */class nE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return dA;default:zt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pA=new aa(2e3,1e4);async function mA(t,e,n){const r=Sr(t);tN(t,e,nm);const i=tE(r,n);return new Mr(r,"signInViaPopup",e,i).executeNotNull()}class Mr extends nE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const gA="pendingRedirect",Rl=new Map;class vA extends nE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const r=await yA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yA(t,e){const n=EA(e),r=kA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wA(t,e){Rl.set(t._key(),e)}function kA(t){return yn(t._redirectPersistence)}function EA(t){return Nl(gA,t.config.apiKey,t.name)}async function _A(t,e,n=!1){const r=Sr(t),i=tE(r,e),o=await new vA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const TA=10*60*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rE(t);default:return!1}}/**
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
 */async function IA(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
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
 */const xA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function NA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IA(t);for(const n of e)try{if(AA(n))return}catch{}zt(t,"unauthorized-domain")}function AA(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bA.test(n))return!1;if(xA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RA=new aa(3e4,6e4);function uy(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PA(t){return new Promise((e,n)=>{var r,i,s;function o(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),n(an(t,"network-request-failed"))},timeout:RA.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=_N("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Bk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function DA(t){return Pl=Pl||PA(t),Pl}/**
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
 */const OA=new aa(5e3,15e3),LA="__/auth/iframe",$A="emulator/auth/iframe",MA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UA(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xp(e,$A):`https://${t.config.authDomain}/${LA}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=FA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function zA(t){const e=await DA(t),n=ln().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:UA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},OA.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const VA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,jA=600,HA="_blank",WA="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GA(t,e,n,r=BA,i=jA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=Dk(u)?HA:n),Pk(u)&&(e=e||WA,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(yN(u)&&a!=="_self")return KA(e||"",a),new cy(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new cy(h)}function KA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qA="__/auth/handler",QA="emulator/auth/handler",YA=encodeURIComponent("fac");async function hy(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ua){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${YA}=${encodeURIComponent(l)}`:"";return`${XA(t)}?${oa(a).slice(1)}${u}`}function XA({config:t}){return t.emulator?Xp(t,QA):`https://${t.authDomain}/${qA}`}/**
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
 */const Ih="webStorageSupport";class JA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yk,this._completeRedirectFn=_A,this._overrideRedirectResult=wA}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hy(e,n,r,of(),i);return GA(e,o,rm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hy(e,n,r,of(),i);return tA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zA(e),r=new SA(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ih,{type:Ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ih];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fk()||Zp()||ac()}}const ZA=JA;var dy="@firebase/auth",fy="0.23.1";/**
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
 */class eR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nR(t){Xi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),V(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uk(t)},u=new xN(r,i,s,l);return NN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new Jr("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(r=>new eR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(dy,fy,tR(t)),ur(dy,fy,"esm2017")}/**
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
 */const rR=5*60,iR=vk("authIdTokenMaxAge")||rR;let py=null;const sR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iR)return;const i=n==null?void 0:n.token;py!==i&&(py=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oR(t=Ek()){const e=qp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bN(t,{popupRedirectResolver:ZA,persistence:[cA,JN,Yk]}),r=vk("authTokenSyncURL");if(r){const s=sR(r);GN(n,s,()=>s(n.currentUser)),WN(n,o=>s(o))}const i=gk("auth");return i&&AN(n,`http://${i}`),n}nR("Browser");var aR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,sm=sm||{},H=aR||self;function _u(){}function cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ha(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lR(t){return Object.prototype.hasOwnProperty.call(t,xh)&&t[xh]||(t[xh]=++uR)}var xh="closure_uid_"+(1e9*Math.random()>>>0),uR=0;function cR(t,e,n){return t.call.apply(t.bind,arguments)}function hR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=cR:nt=hR,nt.apply(null,arguments)}function il(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Cr(){this.s=this.s,this.o=this.o}var dR=0;Cr.prototype.s=!1;Cr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),dR!=0)&&lR(this)};Cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function om(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function my(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var fR=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",_u,e),H.removeEventListener("test",_u,e)}catch{}return t}();function Tu(t){return/^[\s\xa0]*$/.test(t)}var gy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bh(t,e){return t<e?-1:t>e?1:0}function hc(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return hc().indexOf(t)!=-1}function am(t){return am[" "](t),t}am[" "]=_u;function sE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var pR=tn("Opera"),Ji=tn("Trident")||tn("MSIE"),oE=tn("Edge"),lf=oE||Ji,aE=tn("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),mR=hc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function lE(){var t=H.document;return t?t.documentMode:void 0}var Su;e:{var Nh="",Ah=function(){var t=hc();if(aE)return/rv:([^\);]+)(\)|;)/.exec(t);if(oE)return/Edge\/([\d\.]+)/.exec(t);if(Ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mR)return/WebKit\/(\S+)/.exec(t);if(pR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ah&&(Nh=Ah?Ah[1]:""),Ji){var Rh=lE();if(Rh!=null&&Rh>parseFloat(Nh)){Su=String(Rh);break e}}Su=Nh}var gR={};function vR(){return sE(gR,9,function(){let t=0;const e=gy(String(Su)).split("."),n=gy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=bh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||bh(i[2].length==0,s[2].length==0)||bh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var uf;if(H.document&&Ji){var vy=lE();uf=vy||parseInt(Su,10)||void 0}else uf=void 0;var yR=uf;function Mo(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(aE){e:{try{am(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mo.$.h.call(this)}}ze(Mo,rt);var wR={2:"touch",3:"pen",4:"mouse"};Mo.prototype.h=function(){Mo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var da="closure_listenable_"+(1e6*Math.random()|0),kR=0;function ER(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kR,this.fa=this.ia=!1}function dc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function uE(t){const e={};for(const n in t)e[n]=t[n];return e}const yy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<yy.length;s++)n=yy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ER(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function cf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=iE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var um="closure_lm_"+(1e6*Math.random()|0),Ph={};function hE(t,e,n,r,i){if(r&&r.once)return fE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)hE(t,e[s],n,r,i);return null}return n=dm(n),t&&t[da]?t.O(e,n,ha(r)?!!r.capture:!!r,i):dE(t,e,n,!1,r,i)}function dE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ha(i)?!!i.capture:!!i,a=hm(t);if(a||(t[um]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_R(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)fR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _R(){function t(n){return e.call(t.src,t.listener,n)}const e=TR;return t}function fE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)fE(t,e[s],n,r,i);return null}return n=dm(n),t&&t[da]?t.P(e,n,ha(r)?!!r.capture:!!r,i):dE(t,e,n,!0,r,i)}function pE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pE(t,e[s],n,r,i);else r=ha(r)?!!r.capture:!!r,n=dm(n),t&&t[da]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hf(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=hm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hf(e,n,r,i)),(n=-1<t?e[t]:null)&&cm(n))}function cm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[da])cf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=hm(e))?(cf(n,t),n.h==0&&(n.src=null,e[um]=null)):dc(t)}}}function mE(t){return t in Ph?Ph[t]:Ph[t]="on"+t}function TR(t,e){if(t.fa)t=!0;else{e=new Mo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&cm(t),t=n.call(r,e)}return t}function hm(t){return t=t[um],t instanceof fc?t:null}var Dh="__closure_events_fn_"+(1e9*Math.random()>>>0);function dm(t){return typeof t=="function"?t:(t[Dh]||(t[Dh]=function(e){return t.handleEvent(e)}),t[Dh])}function Ue(){Cr.call(this),this.i=new fc(this),this.S=this,this.J=null}ze(Ue,Cr);Ue.prototype[da]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){pE(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),cE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=sl(o,r,!0,e)&&i}if(o=e.g=t,i=sl(o,r,!0,e)&&i,i=sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=sl(o,r,!1,e)&&i}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&cf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var fm=H.JSON.stringify;function SR(){var t=yE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CR{constructor(){this.h=this.g=null}add(e,n){const r=gE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IR,t=>t.reset());class IR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xR(t){H.setTimeout(()=>{throw t},0)}function vE(t,e){df||bR(),ff||(df(),ff=!0),yE.add(t,e)}var df;function bR(){var t=H.Promise.resolve(void 0);df=function(){t.then(NR)}}var ff=!1,yE=new CR;function NR(){for(var t;t=SR();){try{t.h.call(t.g)}catch(n){xR(n)}var e=gE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ff=!1}function pc(t,e){Ue.call(this),this.h=t||1,this.g=e||H,this.j=nt(this.qb,this),this.l=Date.now()}ze(pc,Ue);A=pc.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(pm(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){pc.$.N.call(this),pm(this),delete this.g};function mm(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function wE(t){t.g=mm(()=>{t.g=null,t.i&&(t.i=!1,wE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AR extends Cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wE(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fo(t){Cr.call(this),this.h=t,this.g={}}ze(Fo,Cr);var wy=[];function kE(t,e,n,r){Array.isArray(n)||(n&&(wy[0]=n.toString()),n=wy);for(var i=0;i<n.length;i++){var s=hE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function EE(t){lm(t.g,function(e,n){this.g.hasOwnProperty(n)&&cm(e)},t),t.g={}}Fo.prototype.N=function(){Fo.$.N.call(this),EE(this)};Fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Ea=function(){this.g=!1};function RR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OR(t,n)+(r?" "+r:"")})}function DR(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function OR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fm(n)}catch{return e}}var oi={},ky=null;function gc(){return ky=ky||new Ue}oi.Ta="serverreachability";function _E(t){rt.call(this,oi.Ta,t)}ze(_E,rt);function Uo(t){const e=gc();Ke(e,new _E(e))}oi.STAT_EVENT="statevent";function TE(t,e){rt.call(this,oi.STAT_EVENT,t),this.stat=e}ze(TE,rt);function ct(t){const e=gc();Ke(e,new TE(e,t))}oi.Ua="timingevent";function SE(t,e){rt.call(this,oi.Ua,t),this.size=e}ze(SE,rt);function fa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},CE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gm(){}gm.prototype.h=null;function Ey(t){return t.h||(t.h=t.i())}function IE(){}var pa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vm(){rt.call(this,"d")}ze(vm,rt);function ym(){rt.call(this,"c")}ze(ym,rt);var pf;function yc(){}ze(yc,gm);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};pf=new yc;function ma(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fo(this),this.P=LR,t=lf?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new xE}function xE(){this.i=null,this.g="",this.h=!1}var LR=45e3,mf={},Cu={};A=ma.prototype;A.setTimeout=function(t){this.P=t};function gf(t,e,n){t.L=1,t.v=kc(Rn(e)),t.s=n,t.S=!0,bE(t,null)}function bE(t,e){t.G=Date.now(),ga(t),t.A=Rn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),$E(n.i,"t",r),t.C=0,n=t.l.I,t.h=new xE,t.g=r_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new AR(nt(t.Pa,t,t.g),t.O)),kE(t.U,t.g,"readystatechange",t.nb),e=t.I?uE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Uo(),RR(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&wn(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const c=wn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||lf||this.g&&(this.h.h||this.g.ja()||Cy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Uo(3):Uo(2)),wc(this);var n=this.g.da();this.aa=n;t:if(NE(this)){var r=Cy(this.g);t="";var i=r.length,s=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),io(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tu(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vf(this,n);else{this.i=!1,this.o=3,ct(12),Fr(this),io(this);break e}}this.S?(AE(this,c,o),lf&&this.i&&c==3&&(kE(this.U,this.V,"tick",this.mb),this.V.start())):(Ni(this.j,this.m,o,null),vf(this,o)),c==4&&Fr(this),this.i&&!this.J&&(c==4?ZE(this.l,this):(this.i=!1,ga(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Fr(this),io(this)}}}catch{}finally{}};function NE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function AE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=$R(t,n),i==Cu){e==4&&(t.o=4,ct(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mf){t.o=4,ct(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),vf(t,i);NE(t)&&i!=Cu&&i!=mf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cm(e),e.L=!0,ct(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),io(t))}A.mb=function(){if(this.g){var t=wn(this.g),e=this.g.ja();this.C<e.length&&(wc(this),AE(this,t,e),this.i&&t!=4&&ga(this))}};function $R(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Cu:(n=Number(e.substring(n,r)),isNaN(n)?mf:(r+=1,r+n>e.length?Cu:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.J=!0,Fr(this)};function ga(t){t.Y=Date.now()+t.P,RE(t,t.P)}function RE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fa(nt(t.lb,t),e)}function wc(t){t.B&&(H.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(DR(this.j,this.A),this.L!=2&&(Uo(),ct(17)),Fr(this),this.o=2,io(this)):RE(this,this.Y-t)};function io(t){t.l.H==0||t.J||ZE(t.l,t)}function Fr(t){wc(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,pm(t.V),EE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function vf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yf(n.h,t))){if(!t.K&&yf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bu(n),Tc(n);else break e;Sm(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=fa(nt(n.ib,n),6e3));if(1>=UE(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ur(n,11)}else if((t.K||n.g==t)&&bu(n),!Tu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(wm(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,pe(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=n_(r,r.I?r.oa:null,r.Y),o.K){zE(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wc(a),ga(a)),r.g=o}else XE(r);0<n.i.length&&Sc(n)}else u[0]!="stop"&&u[0]!="close"||Ur(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ur(n,7):Tm(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Uo(4)}catch{}}function MR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function FR(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function PE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FR(t),r=MR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var DE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hr){this.h=e!==void 0?e:t.h,Iu(this,t.j),this.s=t.s,this.g=t.g,xu(this,t.m),this.l=t.l,e=t.i;var n=new zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_y(this,n),this.o=t.o}else t&&(n=String(t).match(DE))?(this.h=!!e,Iu(this,n[1]||"",!0),this.s=zs(n[2]||""),this.g=zs(n[3]||"",!0),xu(this,n[4]),this.l=zs(n[5]||"",!0),_y(this,n[6]||"",!0),this.o=zs(n[7]||"")):(this.h=!!e,this.i=new zo(null,this.h))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,Ty,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,Ty,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?BR:VR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,HR)),t.join("")};function Rn(t){return new Hr(t)}function Iu(t,e,n){t.j=n?zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _y(t,e,n){e instanceof zo?(t.i=e,WR(t.i,t.h)):(n||(e=Vs(e,jR)),t.i=new zo(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function kc(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ty=/[#\/\?@]/g,VR=/[#\?:]/g,BR=/[#\?]/g,jR=/[#\?@]/g,HR=/#/g;function zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&UR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=zo.prototype;A.add=function(t,e){Ir(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OE(t,e){Ir(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function LE(t,e){return Ir(t),e=ps(t,e),t.g.has(e)}A.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.sa=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Ir(this);let e=[];if(typeof t=="string")LE(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Ir(this),this.i=null,t=ps(this,t),LE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function $E(t,e,n){OE(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),om(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WR(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OE(this,r),$E(this,i,n))},t)),t.j=e}var GR=class{constructor(t,e){this.h=t,this.g=e}};function ME(t){this.l=t||KR,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KR=10;function FE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function UE(t){return t.h?1:t.g?t.g.size:0}function yf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wm(t,e){t.g?t.g.add(e):t.h=e}function zE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ME.prototype.cancel=function(){if(this.i=VE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function VE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return om(t.i)}function km(){}km.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};km.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function qR(){this.g=new km}function QR(t,e,n){const r=n||"";try{PE(t,function(i,s){let o=i;ha(i)&&(o=fm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function YR(t,e){const n=new mc;if(H.Image){const r=new Image;r.onload=il(ol,n,r,"TestLoadImage: loaded",!0,e),r.onerror=il(ol,n,r,"TestLoadImage: error",!1,e),r.onabort=il(ol,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=il(ol,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ol(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function va(t){this.l=t.fc||null,this.j=t.ob||!1}ze(va,gm);va.prototype.g=function(){return new Ec(this.l,this.j)};va.prototype.i=function(t){return function(){return t}}({});function Ec(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Em,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ec,Ue);var Em=0;A=Ec.prototype;A.open=function(t,e){if(this.readyState!=Em)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vo(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=Em};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vo(this)),this.g&&(this.readyState=3,Vo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;BE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function BE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ya(this):Vo(this),this.readyState==3&&BE(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,ya(this))};A.Ya=function(t){this.g&&(this.response=t,ya(this))};A.ka=function(){this.g&&ya(this)};function ya(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vo(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XR=H.JSON.parse;function _e(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jE,this.L=this.M=!1}ze(_e,Ue);var jE="",JR=/^https?$/i,ZR=["POST","PUT"];A=_e.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pf.g(),this.C=this.u?Ey(this.u):Ey(pf),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Sy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=iE(ZR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{GE(this),0<this.B&&((this.L=eP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=mm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Sy(this,s)}};function eP(t){return Ji&&vR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof sm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Sy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,HE(t),_c(t)}function HE(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),_c(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_c(this,!0)),_e.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?WE(this):this.kb())};A.kb=function(){WE(this)};function WE(t){if(t.h&&typeof sm<"u"&&(!t.C[1]||wn(t)!=4||t.da()!=2)){if(t.v&&wn(t)==4)mm(t.La,0,t);else if(Ke(t,"readystatechange"),wn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(DE)[1]||null;if(!i&&H.self&&H.self.location){var s=H.self.location.protocol;i=s.substr(0,s.length-1)}r=!JR.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<wn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",HE(t)}}finally{_c(t)}}}}function _c(t,e){if(t.g){GE(t);const n=t.g,r=t.C[0]?_u:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function GE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XR(e)}};function Cy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function KE(t){let e="";return lm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function _m(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=KE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qE(t){this.Ga=0,this.i=[],this.j=new mc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ME(t&&t.concurrentRequestLimit),this.Ja=new qR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}A=qE.prototype;A.qa=8;A.H=1;function Tm(t){if(QE(t),t.H==3){var e=t.W++,n=Rn(t.G);pe(n,"SID",t.J),pe(n,"RID",e),pe(n,"TYPE","terminate"),wa(t,n),e=new ma(t,t.j,e,void 0),e.L=2,e.v=kc(Rn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=r_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ga(e)}t_(t)}function Tc(t){t.g&&(Cm(t),t.g.cancel(),t.g=null)}function QE(t){Tc(t),t.u&&(H.clearTimeout(t.u),t.u=null),bu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Sc(t){FE(t.h)||t.m||(t.m=!0,vE(t.Na,t),t.C=0)}function tP(t,e){return UE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=fa(nt(t.Na,t,e),e_(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ma(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=uE(s),cE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YE(this,i,e),n=Rn(this.G),pe(n,"RID",t),pe(n,"CVER",22),this.F&&pe(n,"X-HTTP-Session-Id",this.F),wa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(KE(s)))+"&"+e:this.o&&_m(n,this.o,s)),wm(this.h,i),this.bb&&pe(n,"TYPE","init"),this.P?(pe(n,"$req",e),pe(n,"SID","null"),i.ba=!0,gf(i,n,null)):gf(i,n,e),this.H=2}}else this.H==3&&(t?Iy(this,t):this.i.length==0||FE(this.h)||Iy(this))};function Iy(t,e){var n;e?n=e.m:n=t.W++;const r=Rn(t.G);pe(r,"SID",t.J),pe(r,"RID",n),pe(r,"AID",t.V),wa(t,r),t.o&&t.s&&_m(r,t.o,t.s),n=new ma(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=YE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wm(t.h,n),gf(n,r,e)}function wa(t,e){t.ma&&lm(t.ma,function(n,r){pe(e,r,n)}),t.l&&PE({},function(n,r){pe(e,r,n)})}function YE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?nt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{QR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function XE(t){t.g||t.u||(t.ba=1,vE(t.Ma,t),t.A=0)}function Sm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=fa(nt(t.Ma,t),e_(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,JE(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=fa(nt(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ct(10),Tc(this),JE(this))};function Cm(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function JE(t){t.g=new ma(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rn(t.wa);pe(e,"RID","rpc"),pe(e,"SID",t.J),pe(e,"CI",t.M?"0":"1"),pe(e,"AID",t.V),pe(e,"TYPE","xmlhttp"),wa(t,e),t.o&&t.s&&_m(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=kc(Rn(e)),n.s=null,n.S=!0,bE(n,t)}A.ib=function(){this.v!=null&&(this.v=null,Tc(this),Sm(this),ct(19))};function bu(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function ZE(t,e){var n=null;if(t.g==e){bu(t),Cm(t),t.g=null;var r=2}else if(yf(t.h,e))n=e.F,zE(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=gc(),Ke(r,new SE(r,n)),Sc(t)}else XE(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&tP(t,e)||r==2&&Sm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function e_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ur(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=nt(t.pb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Iu(n,"https"),kc(n)),YR(n.toString(),r)}else ct(2);t.H=0,t.l&&t.l.za(e),t_(t),QE(t)}A.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function t_(t){if(t.H=0,t.pa=[],t.l){const e=VE(t.h);(e.length!=0||t.i.length!=0)&&(my(t.pa,e),my(t.pa,t.i),t.h.i.length=0,om(t.i),t.i.length=0),t.l.ya()}}function n_(t,e,n){var r=n instanceof Hr?Rn(n):new Hr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xu(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hr(null,void 0);r&&Iu(s,r),e&&(s.g=e),i&&xu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&pe(r,n,e),pe(r,"VER",t.qa),wa(t,r),r}function r_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new _e(new va({ob:!0})):new _e(t.va),e.Oa(t.I),e}function i_(){}A=i_.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.Va=function(){};function Nu(){if(Ji&&!(10<=Number(yR)))throw Error("Environmental error: no available transport.")}Nu.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Ue.call(this),this.g=new qE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Tu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}ze(xt,Ue);xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=n_(t,null,t.Y),Sc(t)};xt.prototype.close=function(){Tm(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fm(t),t=n);e.i.push(new GR(e.fb++,t)),e.H==3&&Sc(e)};xt.prototype.N=function(){this.g.l=null,delete this.j,Tm(this.g),delete this.g,xt.$.N.call(this)};function s_(t){vm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(s_,vm);function o_(){ym.call(this),this.status=1}ze(o_,ym);function ms(t){this.g=t}ze(ms,i_);ms.prototype.Ba=function(){Ke(this.g,"a")};ms.prototype.Aa=function(t){Ke(this.g,new s_(t))};ms.prototype.za=function(t){Ke(this.g,new o_)};ms.prototype.ya=function(){Ke(this.g,"b")};function nP(){this.blockSize=-1}function Yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Yt,nP);Yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Oh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Yt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Oh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Oh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Oh(this,r),i=0;break}}this.h=i,this.i+=e};Yt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var rP={};function Im(t){return-128<=t&&128>t?sE(rP,t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return Ui;if(0>t)return We(rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wf;return new ie(e,0)}function a_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(a_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),r=Ui,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=rn(Math.pow(e,s)),r=r.R(s).add(rn(o))):(r=r.R(n),r=r.add(rn(o)))}return r}var wf=4294967296,Ui=Im(0),kf=Im(1),xy=Im(16777216);A=ie.prototype;A.ea=function(){if(Dt(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wf+r)*e,e*=wf}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Dt(this))return"-"+We(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,r="";;){var i=Ru(n,e).g;n=Au(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}A.X=function(t){return t=Au(this,t),Dt(t)?-1:kn(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(kf)}A.abs=function(){return Dt(this)?We(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function Au(t,e){return t.add(We(e))}A.R=function(t){if(kn(this)||kn(t))return Ui;if(Dt(this))return Dt(t)?We(this).R(We(t)):We(We(this).R(t));if(Dt(t))return We(this.R(We(t)));if(0>this.X(xy)&&0>t.X(xy))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,al(n,2*r+2*i),n[2*r+2*i+1]+=s*l,al(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,al(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,al(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function al(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ps(t,e){this.g=t,this.h=e}function Ru(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new Ps(Ui,Ui);if(Dt(t))return e=Ru(We(t),e),new Ps(We(e.g),We(e.h));if(Dt(e))return e=Ru(t,We(e)),new Ps(We(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=kf,r=e;0>=r.X(t);)n=by(n),r=by(r);var i=hi(n,1),s=hi(r,1);for(r=hi(r,2),n=hi(n,2);!kn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=hi(r,1),n=hi(n,1)}return e=Au(t,i.R(e)),new Ps(i,e)}for(i=Ui;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=rn(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=rn(n),o=s.R(e);kn(s)&&(s=kf),i=i.add(s),t=Au(t,o)}return new Ps(i,t)}A.gb=function(t){return Ru(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function by(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function hi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Nu.prototype.createWebChannel=Nu.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;vc.NO_ERROR=0;vc.TIMEOUT=8;vc.HTTP_ERROR=6;CE.COMPLETE="complete";IE.EventType=pa;pa.OPEN="a";pa.CLOSE="b";pa.ERROR="c";pa.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;_e.prototype.listenOnce=_e.prototype.P;_e.prototype.getLastError=_e.prototype.Sa;_e.prototype.getLastErrorCode=_e.prototype.Ia;_e.prototype.getStatus=_e.prototype.da;_e.prototype.getResponseJson=_e.prototype.Wa;_e.prototype.getResponseText=_e.prototype.ja;_e.prototype.send=_e.prototype.ha;_e.prototype.setWithCredentials=_e.prototype.Oa;Yt.prototype.digest=Yt.prototype.l;Yt.prototype.reset=Yt.prototype.reset;Yt.prototype.update=Yt.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=rn;ie.fromString=a_;var iP=function(){return new Nu},sP=function(){return gc()},Lh=vc,oP=CE,aP=oi,Ny={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lP=va,ll=IE,uP=_e,cP=Yt,zi=ie;const Ay="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let gs="9.21.0";/**
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
 */const ti=new Gp("@firebase/firestore");function Ry(){return ti.logLevel}function F(t,...e){if(ti.logLevel<=te.DEBUG){const n=e.map(xm);ti.debug(`Firestore (${gs}): ${t}`,...n)}}function Pn(t,...e){if(ti.logLevel<=te.ERROR){const n=e.map(xm);ti.error(`Firestore (${gs}): ${t}`,...n)}}function Zi(t,...e){if(ti.logLevel<=te.WARN){const n=e.map(xm);ti.warn(`Firestore (${gs}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function de(t,e){t||j()}function K(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class l_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class dP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fP{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new l_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Je(e)}}class pP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.T=n.token,new gP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class u_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new De(0,0))}static max(){return new W(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Bo{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const wP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Bo{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return wP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ue.fromString(e))}static fromName(e){return new U(ue.fromString(e).popFirst(5))}static empty(){return new U(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ue(e.slice()))}}function kP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new yr(i,U.empty(),e)}function EP(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(W.min(),U.empty(),-1)}static max(){return new yr(W.max(),U.empty(),-1)}}function _P(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const TP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ka(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==TP)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}bm.ct=-1;function Cc(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function CP(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ye{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new it(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class h_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new h_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const IP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(de(!!t),typeof t=="string"){let e=0;const n=IP.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function Nm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Am(t){const e=t.mapValue.fields.__previous_value__;return Nm(e)?Am(e):e}function jo(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class xP{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nm(t)?4:bP(t)?9007199254740991:10:j()}function hn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wr(r.timestampValue),o=wr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ni(r.bytesValue).isEqual(ni(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return xe(r.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(r.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return xe(r.integerValue)===xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=xe(r.doubleValue),o=xe(i.doubleValue);return s===o?Pu(s)===Pu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Py(s)!==Py(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!hn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Wo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=xe(i.integerValue||i.doubleValue),a=xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(jo(t),jo(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ni(i),a=ni(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ne(o[l],a[l]);if(u!==0)return u}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(xe(i.latitude),xe(s.latitude));return o!==0?o:ne(xe(i.longitude),xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ts(o[l],a[l]);if(u)return u}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===cl.mapValue&&s===cl.mapValue)return 0;if(i===cl.mapValue)return 1;if(s===cl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ne(a[c],u[c]);if(h!==0)return h;const d=ts(o[a[c]],l[u[c]]);if(d!==0)return d}return ne(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=wr(t),r=wr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function ns(t){return Ef(t)}function Ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ni(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ef(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ef(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function Ly(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function Rm(t){return!!t&&"arrayValue"in t}function $y(t){return!!t&&"nullValue"in t}function My(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=so(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(so(this.value))}}function d_(t){const e=[];return vs(t.fields,(n,r)=>{const i=new tt([n]);if(Dl(r)){const s=d_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,W.min(),W.min(),W.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,W.min(),W.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,W.min(),W.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function Fy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function NP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class f_{}class Ne extends f_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RP(e,n,r):n==="array-contains"?new OP(e,r):n==="in"?new LP(e,r):n==="not-in"?new $P(e,r):n==="array-contains-any"?new MP(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PP(e,r):new DP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xt extends f_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Xt(e,n)}matches(e){return p_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function p_(t){return t.op==="and"}function m_(t){return AP(t)&&p_(t)}function AP(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Tf(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(m_(t))return t.filters.map(e=>Tf(e)).join(",");{const e=t.filters.map(n=>Tf(n)).join(",");return`${t.op}(${e})`}}function g_(t,e){return t instanceof Ne?function(n,r){return r instanceof Ne&&n.op===r.op&&n.field.isEqual(r.field)&&hn(n.value,r.value)}(t,e):t instanceof Xt?function(n,r){return r instanceof Xt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&g_(s,r.filters[o]),!0):!1}(t,e):void j()}function v_(t){return t instanceof Ne?function(e){return`${e.field.canonicalString()} ${e.op} ${ns(e.value)}`}(t):t instanceof Xt?function(e){return e.op.toString()+" {"+e.getFilters().map(v_).join(" ,")+"}"}(t):"Filter"}class RP extends Ne{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class PP extends Ne{constructor(e,n){super(e,"in",n),this.keys=y_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DP extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=y_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function y_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class OP extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rm(n)&&Wo(n.arrayValue,this.value)}}class LP extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class $P extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class MP extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
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
 */class FP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function zy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FP(t,e,n,r,i,s,o)}function Pm(t){const e=K(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.ft=n}return e.ft}function Dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!g_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uy(t.startAt,e.startAt)&&Uy(t.endAt,e.endAt)}function Sf(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _a{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function UP(t,e,n,r,i,s,o,a){return new _a(t,e,n,r,i,s,o,a)}function w_(t){return new _a(t)}function Vy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Om(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function E_(t){return t.collectionGroup!==null}function Vi(t){const e=K(t);if(e.dt===null){e.dt=[];const n=Om(e),r=k_(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new oo(n)),e.dt.push(new oo(tt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new oo(tt.keyField(),s))}}}return e.dt}function Dn(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=zy(e.path,e.collectionGroup,Vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new Du(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Du(e.startAt.position,e.startAt.inclusive):null;e._t=zy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Cf(t,e){e.getFirstInequalityField(),Om(t);const n=t.filters.concat([e]);return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function If(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Dm(Dn(t),Dn(e))&&t.limitType===e.limitType}function __(t){return`${Pm(Dn(t))}|lt:${t.limitType}`}function xf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>v_(r)).join(", ")}]`),Cc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Vi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Fy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vi(n),r)||n.endAt&&!function(i,s,o){const a=Fy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vi(n),r))}(t,e)}function zP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function T_(t){return(e,n)=>{let r=!1;for(const i of Vi(t)){const s=VP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VP(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ts(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
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
 */const BP=new ye(U.comparator);function On(){return BP}const S_=new ye(U.comparator);function Bs(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return ao()}function I_(){return ao()}function ao(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const jP=new ye(U.comparator),HP=new it(U.comparator);function X(...t){let e=HP;for(const n of t)e=e.add(n);return e}const WP=new it(ne);function GP(){return WP}/**
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
 */function x_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function b_(t){return{integerValue:""+t}}function KP(t,e){return CP(e)?b_(e):x_(t,e)}/**
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
 */class bc{constructor(){this._=void 0}}function qP(t,e,n){return t instanceof Ou?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Nm(i)&&(i=Am(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Go?A_(t,e):t instanceof Ko?R_(t,e):function(r,i){const s=N_(r,i),o=By(s)+By(r.wt);return _f(s)&&_f(r.wt)?b_(o):x_(r.serializer,o)}(t,e)}function QP(t,e,n){return t instanceof Go?A_(t,e):t instanceof Ko?R_(t,e):n}function N_(t,e){return t instanceof Lu?_f(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ou extends bc{}class Go extends bc{constructor(e){super(),this.elements=e}}function A_(t,e){const n=P_(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends bc{constructor(e){super(),this.elements=e}}function R_(t,e){let n=P_(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class Lu extends bc{constructor(e,n){super(),this.serializer=e,this.wt=n}}function By(t){return xe(t.integerValue||t.doubleValue)}function P_(t){return Rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Go&&r instanceof Go||n instanceof Ko&&r instanceof Ko?es(n.elements,r.elements,hn):n instanceof Lu&&r instanceof Lu?hn(n.wt,r.wt):n instanceof Ou&&r instanceof Ou}(t.transform,e.transform)}class XP{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function D_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lm(t.key,un.none()):new Ta(t.key,t.data,un.none());{const n=t.data,r=Ot.empty();let i=new it(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Gt(i.toArray()),un.none())}}function JP(t,e,n){t instanceof Ta?function(r,i,s){const o=r.value.clone(),a=Hy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(r,i,s){if(!Ol(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Hy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(O_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Ta?function(i,s,o,a){if(!Ol(i.precondition,s))return o;const l=i.value.clone(),u=Wy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(i,s,o,a){if(!Ol(i.precondition,s))return o;const l=Wy(i.fieldTransforms,a,s),u=s.data;return u.setAll(O_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ol(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ZP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=N_(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(i,s)=>YP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function O_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hy(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,QP(o,a,n[i]))}return r}function Wy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qP(s,o,e))}return r}class Lm extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eD extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=D_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>jy(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>jy(n,r))}}class $m{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=jP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $m(e,n,r,i)}}/**
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
 */class nD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ie,Z;function iD(t){switch(t){default:return j();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function L_(t){if(t===void 0)return Pn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ie.OK:return T.OK;case Ie.CANCELLED:return T.CANCELLED;case Ie.UNKNOWN:return T.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return T.INTERNAL;case Ie.UNAVAILABLE:return T.UNAVAILABLE;case Ie.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ie.NOT_FOUND:return T.NOT_FOUND;case Ie.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ie.ABORTED:return T.ABORTED;case Ie.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ie.DATA_LOSS:return T.DATA_LOSS;default:return j()}}(Z=Ie||(Ie={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Mm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hl}static getOrCreateInstance(){return hl===null&&(hl=new Mm),hl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let hl=null;/**
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
 */function sD(){return new TextEncoder}/**
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
 */const oD=new zi([4294967295,4294967295],0);function Gy(t){const e=sD().encode(t),n=new cP;return n.update(e),new Uint8Array(n.digest())}function Ky(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zi([n,r],0),new zi([i,s],0)]}class Fm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=zi.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(zi.fromNumber(r)));return i.compare(oD)===1&&(i=new zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Gy(e),[r,i]=Ky(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Gy(e),[r,i]=Ky(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ac(W.min(),i,new ye(ne),On(),X())}}class Sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,X(),X(),X())}}/**
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
 */class Ll{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class $_{constructor(e,n){this.targetId=e,this.bt=n}}class M_{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qy{constructor(){this.Vt=0,this.St=Yy(),this.Dt=at.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=X(),n=X(),r=X();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Sa(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Yy()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class aD{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=On(),this.jt=Qy(),this.zt=new ye(ne)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(Sf(o))if(i===0){const a=new U(o.path);this.Jt(r,a,et.newNoDocument(a,W.min()))}else de(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Mm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,m,y,v,E,p;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(m=g==null?void 0:g.bits)===null||m===void 0?void 0:m.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(E=g==null?void 0:g.bits)===null||E===void 0?void 0:E.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ni(s).toUint8Array()}catch(c){if(c instanceof h_)return Zi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Fm(l,o,a)}catch(c){return Zi(c instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Sf(a.target)){const l=new U(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,et.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=X();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Ac(e,n,this.zt,this.Qt,r);return this.Qt=On(),this.jt=Qy(),this.zt=new ye(ne),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new qy,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new it(ne),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new qy),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Qy(){return new ye(U.comparator)}function Yy(){return new ye(U.comparator)}const lD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cD=(()=>({and:"AND",or:"OR"}))();class hD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(t,e){return t.useProto3Json||Cc(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dD(t,e){return $u(t,e.toTimestamp())}function cn(t){return de(!!t),W.fromTimestamp(function(e){const n=wr(e);return new De(n.seconds,n.nanos)}(t))}function Um(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function U_(t){const e=ue.fromString(t);return de(j_(e)),e}function Nf(t,e){return Um(t.databaseId,e.path)}function $h(t,e){const n=U_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(z_(n))}function Af(t,e){return Um(t.databaseId,e)}function fD(t){const e=U_(t);return e.length===4?ue.emptyPath():z_(e)}function Rf(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function z_(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xy(t,e,n){return{name:Nf(t,e),fields:n.value.mapValue.fields}}function pD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(de(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(de(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:L_(l.code);return new $(u,l.message||"")}(o);n=new M_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$h(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):W.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ll(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$h(t,r.document),s=r.readTime?cn(r.readTime):W.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$h(t,r.document),s=r.removedTargetIds||[];n=new Ll([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rD(i,s),a=r.targetId;n=new $_(a,o)}}return n}function mD(t,e){let n;if(e instanceof Ta)n={update:Xy(t,e.key,e.value)};else if(e instanceof Lm)n={delete:Nf(t,e.key)};else if(e instanceof ai)n={update:Xy(t,e.key,e.data),updateMask:SD(e.fieldMask)};else{if(!(e instanceof eD))return j();n={verify:Nf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ou)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Go)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ko)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lu)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:dD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function gD(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?cn(r.updateTime):cn(i);return s.isEqual(W.min())&&(s=cn(i)),new XP(s,r.transformResults||[])}(n,e))):[]}function vD(t,e){return{documents:[Af(t,e.path)]}}function yD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Af(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Af(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return B_(Xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:di(c.field),direction:ED(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function wD(t){let e=fD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=V_(c);return h instanceof Xt&&m_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oo(fi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Cc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Du(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Du(d,h)}(n.endAt)),UP(e,i,o,s,a,"F",l,u)}function kD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function V_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fi(e.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=fi(e.unaryFilter.field);return Ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(e.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=fi(e.unaryFilter.field);return Ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Ne.create(fi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Xt.create(e.compositeFilter.filters.map(n=>V_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function ED(t){return lD[t]}function _D(t){return uD[t]}function TD(t){return cD[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return tt.fromServerFormat(t.fieldPath)}function B_(t){return t instanceof Ne?function(e){if(e.op==="=="){if(My(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NAN"}};if($y(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(My(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NOT_NAN"}};if($y(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(e.field),op:_D(e.op),value:e.value}}}(t):t instanceof Xt?function(e){const n=e.getFilters().map(r=>B_(r));return n.length===1?n[0]:{compositeFilter:{op:TD(e.op),filters:n}}}(t):j()}function SD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function j_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Xn{constructor(e,n,r,i,s=W.min(),o=W.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CD{constructor(e){this.le=e}}function ID(t){const e=wD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?If(e,e.limit,"L"):e}/**
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
 */class xD{constructor(){this.sn=new bD}addToCollectionParentIndex(e,n){return this.sn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(yr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class bD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(ue.comparator)).toArray()}}/**
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
 */class rs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new rs(0)}static kn(){return new rs(-1)}}/**
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
 */class ND{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&lo(r.mutation,i,Gt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,n,r=X()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,X()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=On();const o=ao(),a=ao();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ai)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),lo(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new AD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ao();let i=new ye((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=I_();c.forEach(d=>{if(!s.has(d)){const m=D_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):E_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(zr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,X())).next(c=>({batchId:a,changes:C_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=Bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Bs();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new _a(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,et.newInvalidDocument(u)))});let o=Bs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&lo(u.mutation,l,Gt.empty(),De.now()),xc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class PD{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return C.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:cn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:ID(r.bundledQuery),readTime:cn(r.readTime)}}(n)),C.resolve()}}/**
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
 */class DD{constructor(){this.overlays=new ye(U.comparator),this.hs=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=zr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nD(n,r));let s=this.hs.get(n);s===void 0&&(s=X(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class zm{constructor(){this.ls=new it($e.fs),this.ds=new it($e._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new $e(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new $e(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new U(new ue([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new U(new ue([])),r=new $e(n,e),i=new $e(n,e+1);let s=X();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return U.comparator(e.key,n.key)||ne(e.Es,n.Es)}static _s(e,n){return ne(e.Es,n.Es)||U.comparator(e.key,n.key)}}/**
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
 */class OD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new it($e.fs)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(ne);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),C.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new $e(new U(s),0);let a=new it(ne);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),C.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return C.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new $e(n,0),i=this.Rs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class LD{constructor(e){this.Ss=e,this.docs=new ye(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_P(EP(c),r)<=0||(i.has(c.key)||xc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}Ds(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $D(this)}getSize(e){return C.resolve(this.size)}}class $D extends ND{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class MD{constructor(e){this.persistence=e,this.Cs=new ys(n=>Pm(n),Dm),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.xs=0,this.Ns=new zm,this.targetCount=0,this.ks=rs.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),C.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.$n(n),C.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Ns.containsKey(n))}}/**
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
 */class FD{constructor(e,n){this.Ms={},this.overlays={},this.Os=new bm(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new MD(this),this.indexManager=new xD,this.remoteDocumentCache=function(r){return new LD(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new CD(n),this.Ls=new PD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new OD(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new UD(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return C.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class UD extends SP{constructor(e){super(),this.currentSequenceNumber=e}}class Vm{constructor(e){this.persistence=e,this.Gs=new zm,this.Qs=null}static js(e){return new Vm(e)}get zs(){if(this.Qs)return this.Qs;throw j()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.zs,r=>{const i=U.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return C.or([()=>C.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Bm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bm(e,n.fromCache,r,i)}}/**
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
 */class zD{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Vy(n))return C.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=If(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,If(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return Vy(n)||i.isEqual(W.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Ry()<=te.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xf(n)),this.zi(e,o,n,kP(i,-1)))})}Qi(e,n){let r=new it(T_(e));return n.forEach((i,s)=>{xc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Ry()<=te.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",xf(n)),this.qi.getDocumentsMatchingQuery(e,n,yr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class VD{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ye(ne),this.Ji=new ys(s=>Pm(s),Dm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function BD(t,e,n,r){return new VD(t,e,n,r)}async function H_(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function jD(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);de(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=X();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function W_(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function HD(t,e){const n=K(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(at.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,m,c)&&a.push(n.Fs.updateTargetData(s,m))});let l=On(),u=X();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(WD(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(W.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function WD(t,e,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function GD(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KD(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Pf(t,e,n){const r=K(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ea(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Jy(t,e,n){const r=K(t);let i=W.min(),s=X();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=K(a),h=c.Ji.get(u);return h!==void 0?C.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:X())).next(a=>(qD(r,zP(e),a),{documents:a,sr:s})))}function qD(t,e,n){let r=t.Yi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Zy{constructor(){this.activeTargetIds=GP()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QD{constructor(){this.Wr=new Zy,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Zy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YD{Jr(e){}shutdown(){}}/**
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
 */class e0{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dl=null;function Mh(){return dl===null?dl=268435456+Math.round(2147483648*Math.random()):dl++,"0x"+dl.toString(16)}/**
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
 */const XD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JD{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const Xe="WebChannelConnection";class ZD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Mh(),a=this.Io(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Zi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=XD[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Mh();return new Promise((o,a)=>{const l=new uP;l.setWithCredentials(!0),l.listenOnce(oP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lh.NO_ERROR:const c=l.getResponseJson();F(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Lh.TIMEOUT:F(Xe,`RPC '${e}' ${s} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const h=l.getStatus();if(F(Xe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(E)>=0?E:T.UNKNOWN}(m.status);a(new $(y,m.message))}else a(new $(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{F(Xe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Xe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Mh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iP(),a=sP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new lP({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(Xe,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const m=new JD({io:v=>{d?F(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(F(Xe,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),F(Xe,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,E,p)=>{v.listen(E,f=>{try{p(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,ll.EventType.OPEN,()=>{d||F(Xe,`RPC '${e}' stream ${i} transport opened.`)}),y(c,ll.EventType.CLOSE,()=>{d||(d=!0,F(Xe,`RPC '${e}' stream ${i} transport closed`),m.fo())}),y(c,ll.EventType.ERROR,v=>{d||(d=!0,Zi(Xe,`RPC '${e}' stream ${i} transport errored:`,v),m.fo(new $(T.UNAVAILABLE,"The operation could not be completed")))}),y(c,ll.EventType.MESSAGE,v=>{var E;if(!d){const p=v.data[0];de(!!p);const f=p,g=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(g){F(Xe,`RPC '${e}' stream ${i} received error:`,g);const k=g.status;let _=function(N){const O=Ie[N];if(O!==void 0)return L_(O)}(k),x=g.message;_===void 0&&(_=T.INTERNAL,x="Unknown error status: "+k+" with message "+g.message),d=!0,m.fo(new $(_,x)),c.close()}else F(Xe,`RPC '${e}' stream ${i} received:`,p),m._o(p)}}),y(a,aP.STAT_EVENT,v=>{v.stat===Ny.PROXY?F(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Ny.NOPROXY&&F(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.lo()},0),m}}function Fh(){return typeof document<"u"?document:null}/**
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
 */function Rc(t){return new hD(t,!0)}/**
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
 */class G_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class K_{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new G_(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eO extends K_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=pD(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?cn(s.readTime):W.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Rf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Sf(a)?{documents:vD(i,a)}:{query:yD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=F_(i,s.resumeToken);const l=bf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(W.min())>0){o.readTime=$u(i,s.snapshotVersion.toTimestamp());const l=bf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=kD(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Rf(this.serializer),n.removeTarget=e,this.zo(n)}}class tO extends K_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=gD(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.uu(r,n)}return de(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Rf(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mD(this.serializer,r))};this.zo(n)}}/**
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
 */class nO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class rO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Pn(n),this.wu=!1):F("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class iO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{li(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=K(a);l.Au.add(4),await Ca(l),l.Pu.set("Unknown"),l.Au.delete(4),await Pc(l)}(this))})}),this.Pu=new rO(r,i)}}async function Pc(t){if(li(t))for(const e of t.Ru)await e(!0)}async function Ca(t){for(const e of t.Ru)await e(!1)}function q_(t,e){const n=K(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Wm(n)?Hm(n):ws(n).Uo()&&jm(n,e))}function Q_(t,e){const n=K(t),r=ws(n);n.Eu.delete(e),r.Uo()&&Y_(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():li(n)&&n.Pu.set("Unknown"))}function jm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).nu(e)}function Y_(t,e){t.bu.Lt(e),ws(t).su(e)}function Hm(t){t.bu=new aD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.Pu.mu()}function Wm(t){return li(t)&&!ws(t).qo()&&t.Eu.size>0}function li(t){return K(t).Au.size===0}function X_(t){t.bu=void 0}async function sO(t){t.Eu.forEach((e,n)=>{jm(t,e)})}async function oO(t,e){X_(t),Wm(t)?(t.Pu.pu(e),Hm(t)):t.Pu.set("Unknown")}async function aO(t,e,n){if(t.Pu.set("Online"),e instanceof M_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof Ll?t.bu.Wt(e):e instanceof $_?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(W.min()))try{const r=await W_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),Y_(i,a);const c=new Xn(u.target,a,l,u.sequenceNumber);jm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!Ea(e))throw e;t.Au.add(1),await Ca(t),t.Pu.set("Offline"),n||(n=()=>W_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Pc(t)})}function J_(t,e){return e().catch(n=>Mu(t,n,e))}async function Dc(t){const e=K(t),n=kr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;lO(e);)try{const i=await GD(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,uO(e,i)}catch(i){await Mu(e,i)}Z_(e)&&eT(e)}function lO(t){return li(t)&&t.Tu.length<10}function uO(t,e){t.Tu.push(e);const n=kr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Z_(t){return li(t)&&!kr(t).qo()&&t.Tu.length>0}function eT(t){kr(t).start()}async function cO(t){kr(t).au()}async function hO(t){const e=kr(t);for(const n of t.Tu)e.ou(n.mutations)}async function dO(t,e,n){const r=t.Tu.shift(),i=$m.from(r,e,n);await J_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dc(t)}async function fO(t,e){e&&kr(t).ru&&await async function(n,r){if(i=r.code,iD(i)&&i!==T.ABORTED){const s=n.Tu.shift();kr(n).Go(),await J_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Dc(n)}var i}(t,e),Z_(t)&&eT(t)}async function t0(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=li(n);n.Au.add(3),await Ca(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Pc(n)}async function pO(t,e){const n=K(t);e?(n.Au.delete(2),await Pc(n)):e||(n.Au.add(2),await Ca(n),n.Pu.set("Unknown"))}function ws(t){return t.Vu||(t.Vu=function(e,n,r){const i=K(e);return i.lu(),new eO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:sO.bind(null,t),co:oO.bind(null,t),eu:aO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Wm(t)?Hm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),X_(t))})),t.Vu}function kr(t){return t.Su||(t.Su=function(e,n,r){const i=K(e);return i.lu(),new tO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:cO.bind(null,t),co:fO.bind(null,t),cu:hO.bind(null,t),uu:dO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Dc(t)):(await t.Su.stop(),t.Tu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Km(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ea(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new Bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class n0{constructor(){this.Du=new ye(U.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):j():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new is(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class mO{constructor(){this.xu=void 0,this.listeners=[]}}class gO{constructor(){this.queries=new ys(e=>__(e),Ic),this.onlineState="Unknown",this.Nu=new Set}}async function vO(t,e){const n=K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mO),i)try{s.xu=await n.onListen(r)}catch(o){const a=Km(o,`Initialization of query '${xf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&qm(n)}async function yO(t,e){const n=K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wO(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&qm(n)}function kO(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function qm(t){t.Nu.forEach(e=>{e.next()})}class EO{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class tT{constructor(e){this.key=e}}class nT{constructor(e){this.key=e}}class _O{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=X(),this.mutatedKeys=X(),this.Zu=T_(e),this.tc=new Bi(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new n0,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=xc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),E=!0):this.ic(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.Zu(m,l)>0||u&&this.Zu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return m(h)-m(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new is(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new n0,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=X(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new nT(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new tT(r))}),n}ac(e){this.Ju=e.sr,this.Xu=X();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return is.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class TO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SO{constructor(e){this.key=e,this.lc=!1}}class CO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ys(a=>__(a),Ic),this._c=new Map,this.wc=new Set,this.mc=new ye(U.comparator),this.gc=new Map,this.yc=new zm,this.Ic={},this.Tc=new Map,this.Ec=rs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function IO(t,e){const n=$O(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await KD(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&q_(n.remoteStore,o)}return i}async function xO(t,e,n,r,i){t.Rc=(h,d,m)=>async function(y,v,E,p){let f=v.view.nc(E);f.ji&&(f=await Jy(y.localStore,v.query,!1).then(({documents:_})=>v.view.nc(_,f)));const g=p&&p.targetChanges.get(v.targetId),k=v.view.applyChanges(f,y.isPrimaryClient,g);return i0(y,v.targetId,k.uc),k.snapshot}(t,h,d,m);const s=await Jy(t.localStore,e,!0),o=new _O(e,s.sr),a=o.nc(s.documents),l=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);i0(t,n,u.uc);const c=new TO(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function bO(t,e){const n=K(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Ic(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Q_(n.remoteStore,r.targetId),Df(n,r.targetId)}).catch(ka)):(Df(n,r.targetId),await Pf(n.localStore,r.targetId,!0))}async function NO(t,e,n){const r=MO(t);try{const i=await function(s,o){const a=K(s),l=De.now(),u=o.reduce((d,m)=>d.add(m.key),X());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=On(),y=X();return a.Xi.getEntries(d,u).next(v=>{m=v,m.forEach((E,p)=>{p.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const E=[];for(const p of o){const f=ZP(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new ai(p.key,f,d_(f.value.mapValue),un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:C_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ye(ne)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ia(r,i.changes),await Dc(r.remoteStore)}catch(i){const s=Km(i,"Failed to persist write");n.reject(s)}}async function rT(t,e){const n=K(t);try{const r=await HD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?de(o.lc):i.removedDocuments.size>0&&(de(o.lc),o.lc=!1))}),await Ia(n,r,e)}catch(r){await ka(r)}}function r0(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=K(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&qm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AO(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ye(U.comparator);o=o.insert(s,et.newNoDocument(s,W.min()));const a=X().add(s),l=new Ac(W.min(),new Map,new ye(ne),o,a);await rT(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Qm(r)}else await Pf(r.localStore,e,!1).then(()=>Df(r,e,n)).catch(ka)}async function RO(t,e){const n=K(t),r=e.batch.batchId;try{const i=await jD(n.localStore,e);sT(n,r,null),iT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,i)}catch(i){await ka(i)}}async function PO(t,e,n){const r=K(t);try{const i=await function(s,o){const a=K(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(de(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);sT(r,e,n),iT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,i)}catch(i){await ka(i)}}function iT(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function sT(t,e,n){const r=K(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||oT(t,r)})}function oT(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Q_(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Qm(t))}function i0(t,e,n){for(const r of n)r instanceof tT?(t.yc.addReference(r.key,e),DO(t,r)):r instanceof nT?(F("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||oT(t,r.key)):j()}function DO(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.wc.add(r),Qm(t))}function Qm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new U(ue.fromString(e)),r=t.Ec.next();t.gc.set(r,new SO(n)),t.mc=t.mc.insert(n,r),q_(t.remoteStore,new Xn(Dn(w_(n.path)),r,"TargetPurposeLimboResolution",bm.ct))}}async function Ia(t,e,n){const r=K(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bm.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=K(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ea(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Hi=u.Hi.insert(h,y)}}}(r.localStore,s))}async function OO(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await H_(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new $(T.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.tr)}}function LO(t,e){const n=K(t),r=n.gc.get(e);if(r&&r.lc)return X().add(r.key);{let i=X();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function $O(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AO.bind(null,e),e.fc.eu=wO.bind(null,e.eventManager),e.fc.vc=kO.bind(null,e.eventManager),e}function MO(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PO.bind(null,e),e}class s0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BD(this.persistence,new zD,e.initialUser,this.serializer)}createPersistence(e){return new FD(Vm.js,this.serializer)}createSharedClientState(e){return new QD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>r0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OO.bind(null,this.syncEngine),await pO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gO}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ZD(i));var i;return function(s,o,a,l){return new nO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>r0(this.syncEngine,a,0),o=e0.D()?new e0:new YD,new iO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CO(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);F("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ca(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class UO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=u_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Km(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await H_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BO(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>t0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>t0(e.remoteStore,s)),t._onlineComponents=e}function VO(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VO(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await Uh(t,new s0)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Uh(t,new s0);return t._offlineComponents}async function aT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await o0(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await o0(t,new FO))),t._onlineComponents}function jO(t){return aT(t).then(e=>e.syncEngine)}async function HO(t){const e=await aT(t),n=e.eventManager;return n.onListen=IO.bind(null,e.syncEngine),n.onUnlisten=bO.bind(null,e.syncEngine),n}function WO(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new UO({next:h=>{s.enqueueAndForget(()=>yO(i,c)),h.fromCache&&a.source==="server"?l.reject(new $(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new EO(o,u,{includeMetadataChanges:!0,Uu:!0});return vO(i,c)}(await HO(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const a0=new Map;/**
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
 */function lT(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l0(t){if(!U.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function u0(t){if(U.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function qo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class c0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hP;switch(n.type){case"firstParty":return new mP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=a0.get(e);n&&(F("ComponentProvider","Removing Datastore"),a0.delete(e),n.terminate())}(this),Promise.resolve()}}function KO(t,e,n,r={}){var i;const s=(t=qo(t,Lc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Zi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Je.MOCK_USER;else{o=Px(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(l)}t._authCredentials=new dP(new l_(o,a))}}/**
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
 */class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class ks{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class hr extends ks{constructor(e,n,r){super(e,n,w_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new U(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function zh(t,e,...n){if(t=dt(t),lT("collection","path",e),t instanceof Lc){const r=ue.fromString(e,...n);return u0(r),new hr(t,null,r)}{if(!(t instanceof Mt||t instanceof hr))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return u0(r),new hr(t.firestore,null,r)}}function qO(t,e,...n){if(t=dt(t),arguments.length===1&&(e=u_.A()),lT("doc","path",e),t instanceof Lc){const r=ue.fromString(e,...n);return l0(r),new Mt(t,null,new U(r))}{if(!(t instanceof Mt||t instanceof hr))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return l0(r),new Mt(t.firestore,t instanceof hr?t.converter:null,new U(r))}}/**
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
 */class QO{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new G_(this,"async_queue_retry"),this.Yc=()=>{const n=Fh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new cr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Ea(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Gm.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&j()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class $c extends Lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new QO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cT(this),this._firestoreClient.terminate()}}function YO(t,e){const n=typeof t=="object"?t:Ek(),r=typeof t=="string"?t:e||"(default)",i=qp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Nx("firestore");s&&KO(i,...s)}return i}function uT(t){return t._firestoreClient||cT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new xP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(at.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ss(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ym{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hT{constructor(e){this._methodName=e}}/**
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
 */class Xm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const XO=/^__.*__$/;class JO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}function dT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Jm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Fu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(dT(this.ua)&&XO.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ZO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}ga(e,n,r,i=!1){return new Jm({ua:e,methodName:n,ma:r,path:tt.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fT(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new ZO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e4(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);gT("Data must be an object, but it was:",o,r);const a=pT(r,o);let l,u;if(s.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=n4(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);i4(c,d)||c.push(d)}l=new Gt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new JO(new Ot(a),l,u)}function t4(t,e,n,r=!1){return Zm(n,t.ga(r?4:3,e))}function Zm(t,e){if(mT(t=dt(t)))return gT("Unsupported field value:",e,t),pT(t,e);if(t instanceof hT)return function(n,r){if(!dT(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zm(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return KP(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:$u(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$u(r.serializer,i)}}if(n instanceof Xm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ss)return{bytesValue:F_(r.serializer,n._byteString)};if(n instanceof Mt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Um(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Oc(n)}`)}(t,e)}function pT(t,e){const n={};return c_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,i)=>{const s=Zm(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Xm||t instanceof ss||t instanceof Mt||t instanceof hT)}function gT(t,e,n){if(!mT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Oc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function n4(t,e,n){if((e=dt(e))instanceof Ym)return e._internalPath;if(typeof e=="string")return vT(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const r4=new RegExp("[~\\*/\\[\\]]");function vT(t,e,n){if(e.search(r4)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ym(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(T.INVALID_ARGUMENT,a+t+l)}function i4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s4 extends yT{data(){return super.data()}}function eg(t,e){return typeof e=="string"?vT(t,e):e instanceof Ym?e._internalPath:e._delegate._internalPath}/**
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
 */function o4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tg{}class a4 extends tg{}function h0(t,e,...n){let r=[];e instanceof tg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof ng).length,o=i.filter(a=>a instanceof Mc).length;if(s>1||s>0&&o>0)throw new $(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mc extends a4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mc(e,n,r)}_apply(e){const n=this._parse(e);return wT(e._query,n),new ks(e.firestore,e.converter,Cf(e._query,n))}_parse(e){const n=fT(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){p0(c,u);const d=[];for(const m of c)d.push(f0(a,i,m));h={arrayValue:{values:d}}}else h=f0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||p0(c,u),h=t4(o,s,c,u==="in"||u==="not-in");return Ne.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function d0(t,e,n){const r=e,i=eg("where",t);return Mc._create(i,r,n)}class ng extends tg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ng(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)wT(s,a),s=Cf(s,a)}(e._query,n),new ks(e.firestore,e.converter,Cf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function f0(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!E_(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!U.isDocumentKey(r))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ly(t,new U(r))}if(n instanceof Mt)return Ly(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function p0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wT(t,e){if(e.isInequality()){const r=Om(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=k_(t);s!==null&&l4(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function l4(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class u4{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Xm(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Am(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=wr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);de(j_(r));const i=new Ho(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function c4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class fl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h4 extends yT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $l extends h4{data(e={}){return super.data(e)}}class d4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new fl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new $l(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $l(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:f4(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function f4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class p4 extends u4{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function m0(t){t=qo(t,ks);const e=qo(t.firestore,$c),n=uT(e),r=new p4(e);return o4(t._query),WO(n,t._query).then(i=>new d4(e,r,t,i))}function m4(t){return kT(qo(t.firestore,$c),[new Lm(t._key,un.none())])}function g4(t,e){const n=qo(t.firestore,$c),r=qO(t),i=c4(t.converter,e);return kT(n,[e4(fT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function kT(t,e){return function(n,r){const i=new cr;return n.asyncQueue.enqueueAndForget(async()=>NO(await jO(n),r,i)),i.promise}(uT(t),e)}(function(t,e=!0){(function(n){gs=n})(cs),Xi(new Jr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new $c(new fP(n.getProvider("auth-internal")),new vP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ur(Ay,"3.11.0",t),ur(Ay,"3.11.0","esm2017")})();const v4={apiKey:"AIzaSyAxzYdcy-I9ov79SwnIPg9zNaDnkxvIirM",authDomain:"todocheo-ef450.firebaseapp.com",projectId:"todocheo-ef450",storageBucket:"todocheo-ef450.appspot.com",messagingSenderId:"551284725708",appId:"1:551284725708:web:df138f770635a278bdaf69",measurementId:"G-L1FLC8N78G"},ET=kk(v4),gt=oR(ET),y4=new pn,Vh=YO(ET);/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const g0="popstate";function w4(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Of("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uu(i)}return E4(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function k4(){return Math.random().toString(36).substr(2,8)}function v0(t,e){return{usr:t.state,key:t.key,idx:e}}function Of(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Es(e):e,{state:n,key:e&&e.key||r||k4()})}function Uu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function E4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Jn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Qo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Jn.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:p})}function d(E,p){a=Jn.Push;let f=Of(v.location,E,p);n&&n(f,E),u=c()+1;let g=v0(f,u),k=v.createHref(f);try{o.pushState(g,"",k)}catch{i.location.assign(k)}s&&l&&l({action:a,location:v.location,delta:1})}function m(E,p){a=Jn.Replace;let f=Of(v.location,E,p);n&&n(f,E),u=c();let g=v0(f,u),k=v.createHref(f);o.replaceState(g,"",k),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Uu(E);return Ae(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(g0,h),l=E,()=>{i.removeEventListener(g0,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let p=y(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(E){return o.go(E)}};return v}var y0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(y0||(y0={}));function _4(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Es(e):e,i=ig(r.pathname||"/",n);if(i==null)return null;let s=_T(t);T4(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=P4(s[a],L4(i));return o}function _T(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=dr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_T(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:A4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of TT(s.path))i(s,o,l)}),e}function TT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function T4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:R4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S4=/^:\w+$/,C4=3,I4=2,x4=1,b4=10,N4=-2,w0=t=>t==="*";function A4(t,e){let n=t.split("/"),r=n.length;return n.some(w0)&&(r+=N4),e&&(r+=I4),n.filter(i=>!w0(i)).reduce((i,s)=>i+(S4.test(s)?C4:s===""?x4:b4),r)}function R4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function P4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=D4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:U4(dr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return s}function D4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=O4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=$4(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function O4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function L4(t){try{return decodeURI(t)}catch(e){return rg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $4(t,e){try{return decodeURIComponent(t)}catch(n){return rg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ig(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function M4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Es(t):t;return{pathname:n?n.startsWith("/")?n:F4(n,e):e,search:z4(r),hash:V4(i)}}function F4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ST(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function CT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Es(t):(i=Qo({},t),Ae(!i.pathname||!i.pathname.includes("?"),Bh("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Bh("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Bh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=M4(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),U4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),z4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,V4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function B4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}const sg=I.createContext(null),j4=I.createContext(null),_s=I.createContext(null),Fc=I.createContext(null),ui=I.createContext({outlet:null,matches:[],isDataRoute:!1}),IT=I.createContext(null);function H4(t,e){let{relative:n}=e===void 0?{}:e;xa()||Ae(!1);let{basename:r,navigator:i}=I.useContext(_s),{hash:s,pathname:o,search:a}=bT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xa(){return I.useContext(Fc)!=null}function Uc(){return xa()||Ae(!1),I.useContext(Fc).location}function xT(t){I.useContext(_s).static||I.useLayoutEffect(t)}function W4(){let{isDataRoute:t}=I.useContext(ui);return t?iL():G4()}function G4(){xa()||Ae(!1);let t=I.useContext(sg),{basename:e,navigator:n}=I.useContext(_s),{matches:r}=I.useContext(ui),{pathname:i}=Uc(),s=JSON.stringify(ST(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return xT(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=CT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:dr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function bT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(ui),{pathname:i}=Uc(),s=JSON.stringify(ST(r).map(o=>o.pathnameBase));return I.useMemo(()=>CT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function K4(t,e){return q4(t,e)}function q4(t,e,n){xa()||Ae(!1);let{navigator:r}=I.useContext(_s),{matches:i}=I.useContext(ui),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Uc(),u;if(e){var c;let v=typeof e=="string"?Es(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ae(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=_4(t,{pathname:d}),y=Z4(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:dr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:dr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?I.createElement(Fc.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Jn.Pop}},y):y}function Q4(){let t=rL(),e=B4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const Y4=I.createElement(Q4,null);class X4 extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(ui.Provider,{value:this.props.routeContext},I.createElement(IT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J4(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(sg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(ui.Provider,{value:e},r)}function Z4(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ae(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Y4);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=h:l.route.Component?y=I.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,I.createElement(J4,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(X4,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var Lf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Lf||(Lf={}));var Yo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Yo||(Yo={}));function eL(t){let e=I.useContext(sg);return e||Ae(!1),e}function tL(t){let e=I.useContext(j4);return e||Ae(!1),e}function nL(t){let e=I.useContext(ui);return e||Ae(!1),e}function NT(t){let e=nL(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function rL(){var t;let e=I.useContext(IT),n=tL(Yo.UseRouteError),r=NT(Yo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function iL(){let{router:t}=eL(Lf.UseNavigateStable),e=NT(Yo.UseNavigateStable),n=I.useRef(!1);return xT(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zu({fromRouteId:e},s)))},[t,e])}function Ml(t){Ae(!1)}function sL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1}=t;xa()&&Ae(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Es(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=I.useMemo(()=>{let v=ig(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return y==null?null:I.createElement(_s.Provider,{value:l},I.createElement(Fc.Provider,{children:n,value:y}))}function oL(t){let{children:e,location:n}=t;return K4($f(e),n)}var k0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(k0||(k0={}));new Promise(()=>{});function $f(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,$f(r.props.children,s));return}r.type!==Ml&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$f(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mf(){return Mf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mf.apply(this,arguments)}function aL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uL(t,e){return t.button===0&&(!e||e==="_self")&&!lL(t)}const cL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function hL(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=w4({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(a),[s]),I.createElement(sL,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const dL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jh=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=aL(e,cL),{basename:d}=I.useContext(_s),m,y=!1;if(typeof u=="string"&&fL.test(u)&&(m=u,dL))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),k=ig(g.pathname,d);g.origin===f.origin&&k!=null?u=k+g.search+g.hash:y=!0}catch{}let v=H4(u,{relative:i}),E=pL(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return I.createElement("a",Mf({},h,{href:m||v,onClick:y||s?r:p,ref:n,target:l}))});var E0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(E0||(E0={}));var _0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_0||(_0={}));function pL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=W4(),l=Uc(),u=bT(t,{relative:o});return I.useCallback(c=>{if(uL(c,n)){c.preventDefault();let h=r!==void 0?r:Uu(l)===Uu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function og(t){const{allColors:e}=t;return b("div",{className:"navigation",children:[w(jh,{to:"/Complex-todolist/",style:{backgroundColor:e.innerBackgroundColor},children:w("p",{style:{color:e.titleTextColor},children:"Home"})}),w(jh,{to:"/Complex-todolist/archive",style:{backgroundColor:e.innerBackgroundColor},children:w("p",{style:{color:e.titleTextColor},children:"Archive"})}),w(jh,{to:"/Complex-todolist/styles",style:{backgroundColor:e.innerBackgroundColor},children:w("p",{style:{color:e.titleTextColor},children:"Styles"})})]})}function mL(t){const{isLoggedIn:e,allColors:n,logItOut:r,sendDataToFirestore:i,getTodosFromDatabase:s}=t;return b("div",{className:"bottom-buttons",children:[e&&b(Fl,{children:[w("button",{onClick:i,style:{backgroundColor:n.buttonIcons,color:n.buttonText},children:"Send to Database"}),w("button",{onClick:s,style:{backgroundColor:n.buttonIcons,color:n.buttonText},children:"Get Todos from Database"})]}),w("button",{onClick:r,style:{backgroundColor:n.buttonIcons,color:n.buttonText},children:"LogOut"})]})}const gL=({types:t,allColors:e,filterOneItem:n})=>{const[r,i]=I.useState(""),s=o=>{n(o===""?"":o),i(o)};return w("form",{className:"TodoForm",style:{background:e.formBackgroundColor},children:b("div",{className:"TodoForm__CatDate",children:[w("div",{className:"TodoForm__CatDate__category",children:b("select",{id:"type",name:"type",value:r,onChange:o=>s(o.target.value),children:[w("option",{value:"",children:"Show all"},"type-id-no-type"),t.map(o=>w("option",{value:o.typeName,children:o.typeName},`type-id ${o.id}`))]})}),w("label",{style:{color:e.titleTextColor},children:"Filter One (testing)"})]})})},vL=t=>{const{allColors:e,getDoneTodoList:n}=t,[r,i]=I.useState([]),[s,o]=I.useState([]),[a,l]=I.useState(!0),[u,c]=I.useState(!1),[h,d]=I.useState(null);I.useEffect(()=>{const z=localStorage.getItem("todosLocal");z&&i(JSON.parse(z));const B=localStorage.getItem("typesLocal");B&&o(JSON.parse(B));const se=gt.onAuthStateChanged(we=>{c(we?!we.isAnonymous:!1)});return()=>{se()}},[]);const m=async()=>{try{await qN(gt)}catch(z){console.log(z)}},y=(z,B,se,we)=>{var mt;const lt={id:jv(),task:z,completed:!1,isEditing:!1,taskorreminder:we,nType:B,user:((mt=gt.currentUser)==null?void 0:mt.email)||"",date:se,archived:!1};i([...r,lt]),localStorage.setItem("todosLocal",JSON.stringify([...r,lt]))},v=z=>{const B=Ud(z,r,"todosLocal");i(B)},E=z=>{const B=aI(z,r,"todosLocal");n(B);const se=z.reduce((we,lt)=>Ud(lt,we,"todosLocal"),[...r]);i(se)},p=z=>{const B=iI(z,r,"todosLocal");i(B)},f=z=>{const B=sI(z,r,"todosLocal");i(B)},g=(z,B,se,we,lt)=>{const mt=oI(z,B,se,we,lt,r,"todosLocal");i(mt)},k=(z,B)=>{if(!s.some(se=>se.typeName===z)){const se={id:jv(),typeName:z,color:B},we=[...s,se];o(we),localStorage.setItem("typesLocal",JSON.stringify(we))}},_=(z,B)=>{if(r.some(se=>se.nType===z))alert("You cannot delete a type that is being used");else{const se=s.filter(we=>we.id!==B);localStorage.setItem("typesLocal",JSON.stringify(se)),o(se)}},x=async()=>{var z;try{if(u){const B=(z=gt.currentUser)==null?void 0:z.email,se=h0(zh(Vh,"todos"),d0("user","==",B));(await m0(se)).docs.forEach(async mt=>{await m4(mt.ref)});const lt=zh(Vh,"todos");r.forEach(async mt=>{await g4(lt,mt)}),alert("todos Data sent to Firestore successfully!")}}catch(B){console.log(B)}},N=async()=>{try{if(gt.currentUser){const z=gt.currentUser.email,B=h0(zh(Vh,"todos"),d0("user","==",z)),se=await m0(B),we=[],lt=new Set;se.docs.forEach(mt=>{const P=mt.data();lt.has(P.id)||(we.push(P),lt.add(P.id))}),i(we),console.log("Todos from database:",we)}}catch(z){console.log(z)}},O=z=>z.sort((B,se)=>new Date(B.date).getTime()-new Date(se.date).getTime()),R=[...new Set(O(r).map(z=>G(z.date)))];function G(z){const B=new Date(z);B.setHours(0,0,0,0),B.setDate(B.getDate()+4-(B.getDay()||7));const se=new Date(B.getFullYear(),0,1),we=Math.ceil(((+B-+se)/864e5+1)/7);return`${B.getFullYear()}-W${we.toString().padStart(2,"0")}`}function _t(z){d(z)}return b("div",{className:`TodoWrapper ${!a&&"TodoWrapper--weekly"}`,style:{backgroundColor:e.innerBackgroundColor},children:[w(og,{allColors:e}),w("h1",{style:{color:e.titleTextColor},children:"Week Planner"}),b("div",{className:"changeWeekList",children:[w("p",{className:"changeWeekList__title",style:{color:e.titleTextColor},children:"Display type"}),b("div",{className:"changeWeekList__buttons",children:[b("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:e.buttonIcons},onClick:()=>l(!0),children:[w(Se,{icon:hk,style:{color:e.buttonText}}),w("span",{style:{color:e.buttonText},children:" List"})]}),b("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:e.buttonIcons},onClick:()=>l(!1),children:[w(Se,{icon:uk,style:{color:e.buttonText}}),w("span",{style:{color:e.buttonText},children:" Calendar"})]})]})]}),w(lI,{allColors:e,addTodo:y,types:s}),u&&w(gL,{types:s,filterOneItem:_t,allColors:e}),R.map(z=>r.some(B=>!B.archived&&G(B.date)===z)&&w(dk,{parentElement:"TodoWrapper",weekList:a,allColors:e,types:s,week:z,deleteTodoTask:v,toggleCompleteTask:p,editTodoTask:f,finishEditTask:g,getDoneTodoList:n,archiveMultipleTodos:E,todos:r.filter(B=>G(B.date)===z&&(!h||B.nType===h))},z)),w(mx,{addType:k,allColors:e}),w(Ex,{types:s,deleteType:_,allColors:e}),w(mL,{isLoggedIn:u,logItOut:m,allColors:e,sendDataToFirestore:x,getTodosFromDatabase:N})]})},yL=()=>{var c;const[t,e]=je.useState(""),[n,r]=je.useState(""),[i,s]=je.useState(!1);return console.log((c=gt==null?void 0:gt.currentUser)==null?void 0:c.email),b("div",{className:"TodoWrapper auth",children:[w("h1",{children:"Complex Todo"}),w("button",{onClick:async()=>{try{await UN(gt)}catch(h){console.log(h)}},children:"Use without logging in"}),w("div",{className:"auth__inputs",children:i?b("div",{className:"auth__inputs__register",children:[w("h2",{children:"Register new account"}),w("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),w("button",{className:"add-btn auth-btn",onClick:async()=>{try{await jN(gt,t,n)}catch(h){console.log(h)}},children:"Sign in"})]}):b("div",{className:"auth__inputs__login",children:[w("h2",{children:"Login with your account"}),w("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),w("button",{className:"add-btn  auth-btn",onClick:async()=>{try{await HN(gt,t,n)}catch(h){console.log(h)}},children:"Login"}),b("p",{children:["Don't have an account?"," ",w("a",{onClick:()=>s(!0),children:"Register"})]})]})}),w("div",{className:"auth__buttons",children:w("button",{className:"add-btn",onClick:async()=>{try{await mA(gt,y4)}catch(h){console.log(h)}},children:"Sign in with Google"})})]})};function wL(t){const{allColors:e,allColorFunctions:n}=t,[r,i]=je.useState(e.outerBackgroundColor),[s,o]=je.useState(e.innerBackgroundColor),[a,l]=je.useState(e.titleTextColor),[u,c]=je.useState(e.weeklyCardBG),[h,d]=je.useState(e.weeklyCardTxt),[m,y]=je.useState(e.buttonIcons),[v,E]=je.useState(e.buttonText),[p,f]=je.useState(e.formBackgroundColor),[g,k]=je.useState(e.itemBackgroundColor),[_,x]=je.useState(e.itemText),[N,O]=je.useState(e.reminderBackgroundColor);return b("div",{className:"TodoWrapper",style:{backgroundColor:e.innerBackgroundColor},children:[w(og,{allColors:e}),w("h1",{style:{color:e.titleTextColor},children:"Week Planner"}),w("h2",{style:{color:e.titleTextColor},children:"Edit Styles"}),b("form",{className:"editColor-form",children:[b("div",{children:[w("input",{type:"color",value:r,onChange:R=>{n.change_outerBackgroundColor(R.target.value),i(R.target.value)}}),w("label",{children:" Outer Background"})]}),b("div",{children:[w("input",{type:"color",value:s,onChange:R=>{n.change_innerBackgroundColor(R.target.value),o(R.target.value)}}),w("label",{children:" Inner Background"})]}),b("div",{children:[w("input",{type:"color",value:a,onChange:R=>{n.change_titleTextColor(R.target.value),l(R.target.value)}}),w("label",{children:"Outer Text"})]}),b("div",{children:[w("input",{type:"color",value:u,onChange:R=>{n.change_weeklyCardBG(R.target.value),c(R.target.value)}}),w("label",{children:" Week-Card"})]}),b("div",{children:[w("input",{type:"color",value:h,onChange:R=>{n.change_weeklyCardTxt(R.target.value),d(R.target.value)}}),w("label",{children:" Week-Card Text"})]}),b("div",{children:[w("input",{type:"color",value:m,onChange:R=>{n.change_buttonIcons(R.target.value),y(R.target.value)}}),w("label",{children:" Buttons and icons"})]}),b("div",{children:[w("input",{type:"color",value:v,onChange:R=>{n.change_buttonText(R.target.value),E(R.target.value)}}),w("label",{children:" Buttons Text"})]}),b("div",{children:[w("input",{type:"color",value:p,onChange:R=>{n.change_formBackgroundColor(R.target.value),f(R.target.value)}}),w("label",{children:" Form Background"})]}),b("div",{children:[w("input",{type:"color",value:g,onChange:R=>{n.change_itemBackgroundColor(R.target.value),k(R.target.value)}}),w("label",{children:" Item Background"})]}),b("div",{children:[w("input",{type:"color",value:_,onChange:R=>{n.change_itemText(R.target.value),x(R.target.value)}}),w("label",{children:" Item Text"})]}),b("div",{children:[w("input",{type:"color",value:N,onChange:R=>{n.change_reminderBackgroundColor(R.target.value),O(R.target.value)}}),w("label",{children:" Reminder Background"})]})]}),w("br",{}),w("h3",{children:"Example:"}),w("br",{}),b("div",{className:"Weekly-divider",style:{backgroundColor:e.weeklyCardBG},children:[b("div",{className:"Weekly-divider__Header",children:[b("div",{className:"Weekly-divider__Header__Titles",style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 49%, ${e.weeklyCardBG} 50%, ${e.weeklyCardBG} 100%)`,transition:"background 0.5s ease-in-out"},children:[w("h3",{style:{color:e.weeklyCardTxt},children:"Week plan"}),w("p",{style:{color:e.weeklyCardTxt},children:"Week is 50% completed"})]}),b("div",{className:"Weekly-divider__Header__EditableContent",children:[w("p",{className:"Weekly-divider__Header__EditableContent__paragraph",style:{color:e.weeklyCardTxt},children:"Week objective here"}),b("div",{className:"editOrCollapse",children:[w("button",{style:{backgroundColor:e.buttonIcons,color:e.buttonText},children:"edit"}),w(Se,{icon:ck,style:{color:e.buttonIcons}})]})]})]}),w("div",{className:"Weekly-divider__Content",children:b("div",{className:"Daily-divider",children:[b("div",{className:"Daily-divider__Header",children:[w("h3",{className:"Daily-divider__Header__Title",children:" Mon, 29 May"}),w("p",{className:"Daily-divider__Header__Title",children:"Day 50% completed"})]}),b("ul",{children:[b("li",{className:"TodoItem Todo-task",style:{color:e.itemText,backgroundColor:e.itemBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),b("div",{className:"TodoItem__container",children:[" ",w("p",{children:"Here goes the task / No-cat"})]}),b("div",{className:"TodoItem__icons",children:[w(Se,{icon:to,style:{color:e.buttonIcons}}),w(Se,{icon:no,style:{color:e.buttonIcons}})]})]}),b("li",{className:"TodoItem Todo-task",style:{color:e.itemText,backgroundColor:e.itemBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),b("div",{className:"TodoItem__container",children:[" ",w("p",{children:"A second task / No-cat"})]}),b("div",{className:"TodoItem__icons",children:[w(Se,{icon:to,style:{color:e.buttonIcons}}),w(Se,{icon:no,style:{color:e.buttonIcons}})]})]}),b("li",{className:"TodoItem Todo-reminder",style:{backgroundColor:e.reminderBackgroundColor},children:[w("div",{className:"TodoItem__type-color",style:{backgroundColor:"gray"}}),b("div",{className:"TodoItem__container",children:[" ",w("p",{children:"Reminder example"})]}),b("div",{className:"TodoItem__icons",children:[w(Se,{icon:to,style:{color:e.buttonIcons}}),w(Se,{icon:no,style:{color:e.buttonIcons}})]})]})]})]})})]})]})}const kL=t=>{const{allColors:e,doneTodoList:n,deleteDONETodoTask:r}=t,[i,s]=I.useState([]),[o,a]=I.useState(!0),l=h=>h.sort((d,m)=>new Date(d.date).getTime()-new Date(m.date).getTime()),u=[...new Set(l(n).map(h=>c(h.date)))];function c(h){const d=new Date(h);d.setHours(0,0,0,0),d.setDate(d.getDate()+4-(d.getDay()||7));const m=new Date(d.getFullYear(),0,1),y=Math.ceil(((+d-+m)/864e5+1)/7);return`${d.getFullYear()}-W${y.toString().padStart(2,"0")}`}return b("div",{className:`TodoWrapper ${!o&&"TodoWrapper--weekly"}`,style:{backgroundColor:e.innerBackgroundColor},children:[w(og,{allColors:e}),w("p",{style:{color:e.titleTextColor},children:"Only working with LocalStorage for the time being"}),w("h1",{style:{color:e.titleTextColor},children:"Archive"}),b("div",{className:"changeWeekList",children:[w("p",{className:"changeWeekList__title",style:{color:e.titleTextColor},children:"Display type"}),b("div",{className:"changeWeekList__buttons",children:[b("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:e.buttonIcons},onClick:()=>a(!0),children:[w(Se,{icon:hk,style:{color:e.buttonText}}),w("span",{style:{color:e.buttonText},children:" List"})]}),b("div",{className:"changeWeekList__buttons__button",style:{backgroundColor:e.buttonIcons},onClick:()=>a(!1),children:[w(Se,{icon:uk,style:{color:e.buttonText}}),w("span",{style:{color:e.buttonText},children:" Calendar"})]})]})]}),u.map(h=>w(dk,{parentElement:"Archive",weekList:o,allColors:e,types:i,week:h,deleteTodoTask:r,todos:n.filter(d=>c(d.date)===h)},h))]})};function EL(){const[t,e]=I.useState(!1),[n,r]=I.useState([]),[i,s]=I.useState({outerBackgroundColor:"#334549",innerBackgroundColor:"#ffffff",titleTextColor:"#005657",weeklyCardBG:"#ffffff",weeklyBorder:"#005657",weeklyCardTxt:"#000000",buttonIcons:"#005657",buttonText:"#ffffff",formBackgroundColor:"#5c72b280",itemBackgroundColor:"#ffffff",itemText:"#000000",reminderBackgroundColor:"#ffde8c"});I.useEffect(()=>{const c=localStorage.getItem("doneTodoList");c&&r(JSON.parse(c)),Object.keys(i).forEach(h=>{const d=localStorage.getItem(h);d&&s(m=>({...m,[h]:d}))})},[]),I.useEffect(()=>{const c=KN(gt,h=>{e(!!h)});return()=>c()},[]);const o=(c,h)=>{s(d=>({...d,[c]:h})),localStorage.setItem(c,h)},a={change_outerBackgroundColor:c=>{o("outerBackgroundColor",c)},change_innerBackgroundColor:c=>{o("innerBackgroundColor",c)},change_titleTextColor:c=>{o("titleTextColor",c)},change_weeklyCardBG:c=>{o("weeklyCardBG",c)},change_weeklyCardTxt:c=>{o("weeklyCardTxt",c)},change_buttonIcons:c=>{o("buttonIcons",c)},change_buttonText:c=>{o("buttonText",c)},change_formBackgroundColor:c=>{o("formBackgroundColor",c)},change_itemBackgroundColor:c=>{o("itemBackgroundColor",c)},change_itemText:c=>{o("itemText",c)},change_reminderBackgroundColor:c=>{o("reminderBackgroundColor",c)}},l=c=>{const h=c.filter(d=>!n.some(m=>m.id===d.id));r(d=>[...d,...h]),localStorage.setItem("doneTodoList",JSON.stringify([...n,...h]))},u=c=>{const h=Ud(c,n,"doneTodoList");r(h)};return w("div",{className:"App",style:{backgroundColor:i.outerBackgroundColor},children:t?w(hL,{children:b(oL,{children:[w(Ml,{path:"/Complex-todolist/",element:w(vL,{getDoneTodoList:l,allColors:i})}),w(Ml,{path:"/Complex-todolist/archive",element:w(kL,{doneTodoList:n,allColors:i,deleteDONETodoTask:u})}),w(Ml,{path:"/Complex-todolist/styles",element:w(wL,{allColors:i,allColorFunctions:a})})]})}):w(yL,{})})}Hh.createRoot(document.getElementById("root")).render(w(je.StrictMode,{children:w(EL,{})}));
