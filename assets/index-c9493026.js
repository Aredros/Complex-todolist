(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Z0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ji={},e1={get exports(){return ji},set exports(e){ji=e}},ba={},ie={},t1={get exports(){return ie},set exports(e){ie=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),n1=Symbol.for("react.portal"),r1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),o1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),l1=Symbol.for("react.forward_ref"),u1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),f1=Symbol.for("react.lazy"),Bd=Symbol.iterator;function d1(e){return e===null||typeof e!="object"?null:(e=Bd&&e[Bd]||e["@@iterator"],typeof e=="function"?e:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=gm,this.updater=n||pm}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vm(){}vm.prototype=Xr.prototype;function Gc(e,t,n){this.props=e,this.context=t,this.refs=gm,this.updater=n||pm}var Kc=Gc.prototype=new vm;Kc.constructor=Gc;mm(Kc,Xr.prototype);Kc.isPureReactComponent=!0;var Wd=Array.isArray,ym=Object.prototype.hasOwnProperty,Yc={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function _m(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ym.call(t,r)&&!wm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_o,type:e,key:o,ref:s,props:i,_owner:Yc.current}}function h1(e,t){return{$$typeof:_o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===_o}function p1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vd=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p1(""+e.key):t.toString(36)}function Ss(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _o:case n1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+_l(s,0):r,Wd(i)?(n="",e!=null&&(n=e.replace(Vd,"$&/")+"/"),Ss(i,t,n,"",function(u){return u})):i!=null&&(Xc(i)&&(i=h1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Wd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+_l(o,a);s+=Ss(o,t,n,l,i)}else if(l=d1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+_l(o,a++),s+=Ss(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vo(e,t,n){if(e==null)return e;var r=[],i=0;return Ss(e,r,"","",function(o){return t.call(n,o,i++)}),r}function m1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Is={transition:null},g1={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Yc};U.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!Xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Xr;U.Fragment=r1;U.Profiler=o1;U.PureComponent=Gc;U.StrictMode=i1;U.Suspense=u1;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Yc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ym.call(t,l)&&!wm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_o,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:a1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s1,_context:e},e.Consumer=e};U.createElement=_m;U.createFactory=function(e){var t=_m.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:l1,render:e}};U.isValidElement=Xc;U.lazy=function(e){return{$$typeof:f1,_payload:{_status:-1,_result:e},_init:m1}};U.memo=function(e,t){return{$$typeof:c1,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return be.current.useCallback(e,t)};U.useContext=function(e){return be.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return be.current.useDeferredValue(e)};U.useEffect=function(e,t){return be.current.useEffect(e,t)};U.useId=function(){return be.current.useId()};U.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return be.current.useMemo(e,t)};U.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};U.useRef=function(e){return be.current.useRef(e)};U.useState=function(e){return be.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return be.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(t1);const Kn=Z0(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=ie,y1=Symbol.for("react.element"),w1=Symbol.for("react.fragment"),_1=Object.prototype.hasOwnProperty,k1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E1={key:!0,ref:!0,__self:!0,__source:!0};function km(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)_1.call(t,r)&&!E1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y1,type:e,key:o,ref:s,props:i,_owner:k1.current}}ba.Fragment=w1;ba.jsx=km;ba.jsxs=km;(function(e){e.exports=ba})(e1);const mu=ji.Fragment,N=ji.jsx,B=ji.jsxs;var gu={},vu={},S1={get exports(){return vu},set exports(e){vu=e}},Ye={},yu={},I1={get exports(){return yu},set exports(e){yu=e}},Em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,b){var $=P.length;P.push(b);e:for(;0<$;){var oe=$-1>>>1,de=P[oe];if(0<i(de,b))P[oe]=b,P[$]=de,$=oe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var b=P[0],$=P.pop();if($!==b){P[0]=$;e:for(var oe=0,de=P.length,Bo=de>>>1;oe<Bo;){var bn=2*(oe+1)-1,wl=P[bn],Ln=bn+1,Wo=P[Ln];if(0>i(wl,$))Ln<de&&0>i(Wo,wl)?(P[oe]=Wo,P[Ln]=$,oe=Ln):(P[oe]=wl,P[bn]=$,oe=bn);else if(Ln<de&&0>i(Wo,$))P[oe]=Wo,P[Ln]=$,oe=Ln;else break e}}return b}function i(P,b){var $=P.sortIndex-b.sortIndex;return $!==0?$:P.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,p=3,g=!1,w=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=P)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function v(P){if(y=!1,m(P),!w)if(n(l)!==null)w=!0,vl(k);else{var b=n(u);b!==null&&yl(v,b.startTime-P)}}function k(P,b){w=!1,y&&(y=!1,h(O),O=-1),g=!0;var $=p;try{for(m(b),f=n(l);f!==null&&(!(f.expirationTime>b)||P&&!st());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,p=f.priorityLevel;var de=oe(f.expirationTime<=b);b=e.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&r(l),m(b)}else r(l);f=n(l)}if(f!==null)var Bo=!0;else{var bn=n(u);bn!==null&&yl(v,bn.startTime-b),Bo=!1}return Bo}finally{f=null,p=$,g=!1}}var I=!1,T=null,O=-1,F=5,L=-1;function st(){return!(e.unstable_now()-L<F)}function si(){if(T!==null){var P=e.unstable_now();L=P;var b=!0;try{b=T(!0,P)}finally{b?ai():(I=!1,T=null)}}else I=!1}var ai;if(typeof d=="function")ai=function(){d(si)};else if(typeof MessageChannel<"u"){var Hd=new MessageChannel,J0=Hd.port2;Hd.port1.onmessage=si,ai=function(){J0.postMessage(null)}}else ai=function(){E(si,0)};function vl(P){T=P,I||(I=!0,ai())}function yl(P,b){O=E(function(){P(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,vl(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var b=3;break;default:b=p}var $=p;p=b;try{return P()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,b){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=p;p=P;try{return b()}finally{p=$}},e.unstable_scheduleCallback=function(P,b,$){var oe=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?oe+$:oe):$=oe,P){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,P={id:c++,callback:b,priorityLevel:P,startTime:$,expirationTime:de,sortIndex:-1},$>oe?(P.sortIndex=$,t(u,P),n(l)===null&&P===n(u)&&(y?(h(O),O=-1):y=!0,yl(v,$-oe))):(P.sortIndex=de,t(l,P),w||g||(w=!0,vl(k))),P},e.unstable_shouldYield=st,e.unstable_wrapCallback=function(P){var b=p;return function(){var $=p;p=b;try{return P.apply(this,arguments)}finally{p=$}}}})(Em);(function(e){e.exports=Em})(I1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=ie,Ke=yu;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,zi={};function lr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(zi[e]=t,e=0;e<t.length;e++)Im.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,T1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},Kd={};function C1(e){return wu.call(Kd,e)?!0:wu.call(Gd,e)?!1:T1.test(e)?Kd[e]=!0:(Gd[e]=!0,!1)}function A1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P1(e,t,n,r){if(t===null||typeof t>"u"||A1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qc=/[\-:]([a-z])/g;function qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qc,qc);Ee[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qc,qc);Ee[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qc,qc);Ee[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jc(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P1(t,n,i,r)&&(n=null),r||i===null?C1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Am=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function li(e){return e===null||typeof e!="object"?null:(e=Yd&&e[Yd]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,kl;function yi(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var El=!1;function Sl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function N1(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case dr:return"Portal";case _u:return"Profiler";case Zc:return"StrictMode";case ku:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cm:return(e.displayName||"Context")+".Consumer";case Tm:return(e._context.displayName||"Context")+".Provider";case ef:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tf:return t=e.displayName||null,t!==null?t:Su(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Su(e(t))}catch{}}return null}function x1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(t);case 8:return t===Zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O1(e){var t=Pm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=O1(e))}function Nm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Iu(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xm(e,t){t=t.checked,t!=null&&Jc(e,"checked",t,!1)}function Tu(e,t){xm(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wi=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Au(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(wi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function Om(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,Dm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){R1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function Lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var D1=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(e,t){if(t){if(D1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function xu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ru=null,Nr=null,xr=null;function Zd(e){if(e=So(e)){if(typeof Ru!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Fa(t),Ru(e.stateNode,e.type,t))}}function Mm(e){Nr?xr?xr.push(e):xr=[e]:Nr=e}function $m(){if(Nr){var e=Nr,t=xr;if(xr=Nr=null,Zd(e),t)for(e=0;e<t.length;e++)Zd(t[e])}}function Um(e,t){return e(t)}function Fm(){}var Il=!1;function jm(e,t,n){if(Il)return e(t,n);Il=!0;try{return Um(e,t,n)}finally{Il=!1,(Nr!==null||xr!==null)&&(Fm(),$m())}}function Bi(e,t){var n=e.stateNode;if(n===null)return null;var r=Fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Du=!1;if($t)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){Du=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{Du=!1}function b1(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pi=!1,Bs=null,Ws=!1,bu=null,L1={onError:function(e){Pi=!0,Bs=e}};function M1(e,t,n,r,i,o,s,a,l){Pi=!1,Bs=null,b1.apply(L1,arguments)}function $1(e,t,n,r,i,o,s,a,l){if(M1.apply(this,arguments),Pi){if(Pi){var u=Bs;Pi=!1,Bs=null}else throw Error(_(198));Ws||(Ws=!0,bu=u)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eh(e){if(ur(e)!==e)throw Error(_(188))}function U1(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return eh(i),e;if(o===r)return eh(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Hm(e){return e=U1(e),e!==null?Bm(e):null}function Bm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bm(e);if(t!==null)return t;e=e.sibling}return null}var Wm=Ke.unstable_scheduleCallback,th=Ke.unstable_cancelCallback,F1=Ke.unstable_shouldYield,j1=Ke.unstable_requestPaint,se=Ke.unstable_now,z1=Ke.unstable_getCurrentPriorityLevel,rf=Ke.unstable_ImmediatePriority,Vm=Ke.unstable_UserBlockingPriority,Vs=Ke.unstable_NormalPriority,H1=Ke.unstable_LowPriority,Gm=Ke.unstable_IdlePriority,La=null,kt=null;function B1(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:G1,W1=Math.log,V1=Math.LN2;function G1(e){return e>>>=0,e===0?32:31-(W1(e)/V1|0)|0}var Xo=64,Qo=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function K1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=K1(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Lu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Km(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function X1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function of(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function Ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xm,sf,Qm,qm,Jm,Mu=!1,qo=[],fn=null,dn=null,hn=null,Wi=new Map,Vi=new Map,nn=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function ci(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=So(t),t!==null&&sf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q1(e,t,n,r,i){switch(t){case"focusin":return fn=ci(fn,e,t,n,r,i),!0;case"dragenter":return dn=ci(dn,e,t,n,r,i),!0;case"mouseover":return hn=ci(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wi.set(o,ci(Wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vi.set(o,ci(Vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Zm(e){var t=Fn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=zm(n),t!==null){e.blockedOn=t,Jm(e.priority,function(){Qm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ou=r,n.target.dispatchEvent(r),Ou=null}else return t=So(n),t!==null&&sf(t),e.blockedOn=n,!1;t.shift()}return!0}function rh(e,t,n){Ts(e)&&n.delete(t)}function J1(){Mu=!1,fn!==null&&Ts(fn)&&(fn=null),dn!==null&&Ts(dn)&&(dn=null),hn!==null&&Ts(hn)&&(hn=null),Wi.forEach(rh),Vi.forEach(rh)}function fi(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,J1)))}function Gi(e){function t(i){return fi(i,e)}if(0<qo.length){fi(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&fi(fn,e),dn!==null&&fi(dn,e),hn!==null&&fi(hn,e),Wi.forEach(t),Vi.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&nn.shift()}var Or=Kt.ReactCurrentBatchConfig,Ks=!0;function Z1(e,t,n,r){var i=W,o=Or.transition;Or.transition=null;try{W=1,af(e,t,n,r)}finally{W=i,Or.transition=o}}function ew(e,t,n,r){var i=W,o=Or.transition;Or.transition=null;try{W=4,af(e,t,n,r)}finally{W=i,Or.transition=o}}function af(e,t,n,r){if(Ks){var i=$u(e,t,n,r);if(i===null)Ll(e,t,r,Ys,n),nh(e,r);else if(q1(i,e,t,n,r))r.stopPropagation();else if(nh(e,r),t&4&&-1<Q1.indexOf(e)){for(;i!==null;){var o=So(i);if(o!==null&&Xm(o),o=$u(e,t,n,r),o===null&&Ll(e,t,r,Ys,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var Ys=null;function $u(e,t,n,r){if(Ys=null,e=nf(r),e=Fn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ys=e,null}function eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z1()){case rf:return 1;case Vm:return 4;case Vs:case H1:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var ln=null,lf=null,Cs=null;function tg(){if(Cs)return Cs;var e,t=lf,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function ih(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jo:ih,this.isPropagationStopped=ih,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=Xe(Qr),Eo=te({},Qr,{view:0,detail:0}),tw=Xe(Eo),Cl,Al,di,Ma=te({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(Cl=e.screenX-di.screenX,Al=e.screenY-di.screenY):Al=Cl=0,di=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),oh=Xe(Ma),nw=te({},Ma,{dataTransfer:0}),rw=Xe(nw),iw=te({},Eo,{relatedTarget:0}),Pl=Xe(iw),ow=te({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),sw=Xe(ow),aw=te({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lw=Xe(aw),uw=te({},Qr,{data:0}),sh=Xe(uw),cw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dw[e])?!!t[e]:!1}function cf(){return hw}var pw=te({},Eo,{key:function(e){if(e.key){var t=cw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mw=Xe(pw),gw=te({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Xe(gw),vw=te({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),yw=Xe(vw),ww=te({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=Xe(ww),kw=te({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=Xe(kw),Sw=[9,13,27,32],ff=$t&&"CompositionEvent"in window,Ni=null;$t&&"documentMode"in document&&(Ni=document.documentMode);var Iw=$t&&"TextEvent"in window&&!Ni,ng=$t&&(!ff||Ni&&8<Ni&&11>=Ni),lh=String.fromCharCode(32),uh=!1;function rg(e,t){switch(e){case"keyup":return Sw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Tw(e,t){switch(e){case"compositionend":return ig(t);case"keypress":return t.which!==32?null:(uh=!0,lh);case"textInput":return e=t.data,e===lh&&uh?null:e;default:return null}}function Cw(e,t){if(pr)return e==="compositionend"||!ff&&rg(e,t)?(e=tg(),Cs=lf=ln=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ng&&t.locale!=="ko"?null:t.data;default:return null}}var Aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Aw[e.type]:t==="textarea"}function og(e,t,n,r){Mm(r),t=Xs(t,"onChange"),0<t.length&&(n=new uf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Ki=null;function Pw(e){gg(e,0)}function $a(e){var t=vr(e);if(Nm(t))return e}function Nw(e,t){if(e==="change")return t}var sg=!1;if($t){var Nl;if($t){var xl="oninput"in document;if(!xl){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),xl=typeof fh.oninput=="function"}Nl=xl}else Nl=!1;sg=Nl&&(!document.documentMode||9<document.documentMode)}function dh(){xi&&(xi.detachEvent("onpropertychange",ag),Ki=xi=null)}function ag(e){if(e.propertyName==="value"&&$a(Ki)){var t=[];og(t,Ki,e,nf(e)),jm(Pw,t)}}function xw(e,t,n){e==="focusin"?(dh(),xi=t,Ki=n,xi.attachEvent("onpropertychange",ag)):e==="focusout"&&dh()}function Ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $a(Ki)}function Rw(e,t){if(e==="click")return $a(t)}function Dw(e,t){if(e==="input"||e==="change")return $a(t)}function bw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:bw;function Yi(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wu.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ph(e,t){var n=hh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function lg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ug(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lw(e){var t=ug(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ph(n,o);var s=ph(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mw=$t&&"documentMode"in document&&11>=document.documentMode,mr=null,Uu=null,Oi=null,Fu=!1;function mh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||mr==null||mr!==Hs(r)||(r=mr,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Yi(Oi,r)||(Oi=r,r=Xs(Uu,"onSelect"),0<r.length&&(t=new uf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function Zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Ol={},cg={};$t&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Ua(e){if(Ol[e])return Ol[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cg)return Ol[e]=t[n];return e}var fg=Ua("animationend"),dg=Ua("animationiteration"),hg=Ua("animationstart"),pg=Ua("transitionend"),mg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){mg.set(e,t),lr(t,[e])}for(var Rl=0;Rl<gh.length;Rl++){var Dl=gh[Rl],$w=Dl.toLowerCase(),Uw=Dl[0].toUpperCase()+Dl.slice(1);Pn($w,"on"+Uw)}Pn(fg,"onAnimationEnd");Pn(dg,"onAnimationIteration");Pn(hg,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(pg,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function vh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$1(r,t,void 0,e),e.currentTarget=null}function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;vh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;vh(i,a,u),o=l}}}if(Ws)throw e=bu,Ws=!1,bu=null,e}function K(e,t){var n=t[Wu];n===void 0&&(n=t[Wu]=new Set);var r=e+"__bubble";n.has(r)||(vg(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),vg(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[es]){e[es]=!0,Im.forEach(function(n){n!=="selectionchange"&&(Fw.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,bl("selectionchange",!1,t))}}function vg(e,t,n,r){switch(eg(t)){case 1:var i=Z1;break;case 4:i=ew;break;default:i=af}n=i.bind(null,t,n,e),i=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Fn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}jm(function(){var u=o,c=nf(n),f=[];e:{var p=mg.get(e);if(p!==void 0){var g=uf,w=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":g=mw;break;case"focusin":w="focus",g=Pl;break;case"focusout":w="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yw;break;case fg:case dg:case hg:g=sw;break;case pg:g=_w;break;case"scroll":g=tw;break;case"wheel":g=Ew;break;case"copy":case"cut":case"paste":g=lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ah}var y=(t&4)!==0,E=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=Bi(d,h),v!=null&&y.push(Qi(d,v,m)))),E)break;d=d.return}0<y.length&&(p=new g(p,w,null,n,c),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ou&&(w=n.relatedTarget||n.fromElement)&&(Fn(w)||w[Ut]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Fn(w):null,w!==null&&(E=ur(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=oh,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=ah,v="onPointerLeave",h="onPointerEnter",d="pointer"),E=g==null?p:vr(g),m=w==null?p:vr(w),p=new y(v,d+"leave",g,n,c),p.target=E,p.relatedTarget=m,v=null,Fn(c)===u&&(y=new y(h,d+"enter",w,n,c),y.target=m,y.relatedTarget=E,v=y),E=v,g&&w)t:{for(y=g,h=w,d=0,m=y;m;m=cr(m))d++;for(m=0,v=h;v;v=cr(v))m++;for(;0<d-m;)y=cr(y),d--;for(;0<m-d;)h=cr(h),m--;for(;d--;){if(y===h||h!==null&&y===h.alternate)break t;y=cr(y),h=cr(h)}y=null}else y=null;g!==null&&yh(f,p,g,y,!1),w!==null&&E!==null&&yh(f,E,w,y,!0)}}e:{if(p=u?vr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=Nw;else if(ch(p))if(sg)k=Dw;else{k=Ow;var I=xw}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Rw);if(k&&(k=k(e,u))){og(f,k,n,c);break e}I&&I(e,p,u),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Cu(p,"number",p.value)}switch(I=u?vr(u):window,e){case"focusin":(ch(I)||I.contentEditable==="true")&&(mr=I,Uu=u,Oi=null);break;case"focusout":Oi=Uu=mr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,mh(f,n,c);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":mh(f,n,c)}var T;if(ff)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else pr?rg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ng&&n.locale!=="ko"&&(pr||O!=="onCompositionStart"?O==="onCompositionEnd"&&pr&&(T=tg()):(ln=c,lf="value"in ln?ln.value:ln.textContent,pr=!0)),I=Xs(u,O),0<I.length&&(O=new sh(O,e,null,n,c),f.push({event:O,listeners:I}),T?O.data=T:(T=ig(n),T!==null&&(O.data=T)))),(T=Iw?Tw(e,n):Cw(e,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}gg(f,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Bi(e,n),o!=null&&r.unshift(Qi(e,o,i)),o=Bi(e,t),o!=null&&r.push(Qi(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Bi(n,o),l!=null&&s.unshift(Qi(n,l,a))):i||(l=Bi(n,o),l!=null&&s.push(Qi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function wh(e){return(typeof e=="string"?e:""+e).replace(jw,`
`).replace(zw,"")}function ts(e,t,n){if(t=wh(t),wh(e)!==t&&n)throw Error(_(425))}function Qs(){}var ju=null,zu=null;function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,Hw=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(e){return _h.resolve(null).then(e).catch(Ww)}:Bu;function Ww(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),vt="__reactFiber$"+qr,qi="__reactProps$"+qr,Ut="__reactContainer$"+qr,Wu="__reactEvents$"+qr,Vw="__reactListeners$"+qr,Gw="__reactHandles$"+qr;function Fn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kh(e);e!==null;){if(n=e[vt])return n;e=kh(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[vt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Fa(e){return e[qi]||null}var Vu=[],yr=-1;function Nn(e){return{current:e}}function X(e){0>yr||(e.current=Vu[yr],Vu[yr]=null,yr--)}function G(e,t){yr++,Vu[yr]=e.current,e.current=t}var Sn={},Ne=Nn(Sn),Ue=Nn(!1),Jn=Sn;function jr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function qs(){X(Ue),X(Ne)}function Eh(e,t,n){if(Ne.current!==Sn)throw Error(_(168));G(Ne,t),G(Ue,n)}function yg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,x1(e)||"Unknown",i));return te({},n,r)}function Js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Jn=Ne.current,G(Ne,e),G(Ue,Ue.current),!0}function Sh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=yg(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,X(Ue),X(Ne),G(Ne,e)):X(Ue),G(Ue,n)}var Pt=null,ja=!1,$l=!1;function wg(e){Pt===null?Pt=[e]:Pt.push(e)}function Kw(e){ja=!0,wg(e)}function xn(){if(!$l&&Pt!==null){$l=!0;var e=0,t=W;try{var n=Pt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ja=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Wm(rf,xn),i}finally{W=t,$l=!1}}return null}var wr=[],_r=0,Zs=null,ea=0,qe=[],Je=0,Zn=null,xt=1,Ot="";function Mn(e,t){wr[_r++]=ea,wr[_r++]=Zs,Zs=e,ea=t}function _g(e,t,n){qe[Je++]=xt,qe[Je++]=Ot,qe[Je++]=Zn,Zn=e;var r=xt;e=Ot;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,xt=1<<32-dt(t)+i|n<<i|r,Ot=o+e}else xt=1<<o|n<<i|r,Ot=e}function hf(e){e.return!==null&&(Mn(e,1),_g(e,1,0))}function pf(e){for(;e===Zs;)Zs=wr[--_r],wr[_r]=null,ea=wr[--_r],wr[_r]=null;for(;e===Zn;)Zn=qe[--Je],qe[Je]=null,Ot=qe[--Je],qe[Je]=null,xt=qe[--Je],qe[Je]=null}var We=null,He=null,q=!1,ct=null;function kg(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:xt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function Gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ku(e){if(q){var t=He;if(t){var n=t;if(!Ih(e,t)){if(Gu(e))throw Error(_(418));t=pn(n.nextSibling);var r=We;t&&Ih(e,t)?kg(r,n):(e.flags=e.flags&-4097|2,q=!1,We=e)}}else{if(Gu(e))throw Error(_(418));e.flags=e.flags&-4097|2,q=!1,We=e}}}function Th(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ns(e){if(e!==We)return!1;if(!q)return Th(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hu(e.type,e.memoizedProps)),t&&(t=He)){if(Gu(e))throw Eg(),Error(_(418));for(;t;)kg(e,t),t=pn(t.nextSibling)}if(Th(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?pn(e.stateNode.nextSibling):null;return!0}function Eg(){for(var e=He;e;)e=pn(e.nextSibling)}function zr(){He=We=null,q=!1}function mf(e){ct===null?ct=[e]:ct.push(e)}var Yw=Kt.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ta=Nn(null),na=null,kr=null,gf=null;function vf(){gf=kr=na=null}function yf(e){var t=ta.current;X(ta),e._currentValue=t}function Yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){na=e,gf=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(gf!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(na===null)throw Error(_(308));kr=e,na.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var jn=null;function wf(e){jn===null?jn=[e]:jn.push(e)}function Sg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,of(e,n)}}function Ch(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ra(e,t,n,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(p=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=te({},f,p);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tr|=s,e.lanes=s,e.memoizedState=f}}function Ah(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Tg=new Sm.Component().refs;function Xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=vn(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(ht(t,e,i,r),Ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=vn(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(ht(t,e,i,r),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=vn(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(ht(t,e,r,n),Ps(t,e,r))}};function Ph(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,o):!0}function Cg(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Fe(t)?Jn:Ne.current,r=t.contextTypes,o=(r=r!=null)?jr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Qu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Tg,_f(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Fe(t)?Jn:Ne.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&za.enqueueReplaceState(i,i.state,null),ra(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Tg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function Ag(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=yn(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,v){return d===null||d.tag!==6?(d=Wl(m,h.mode,v),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,v){var k=m.type;return k===hr?c(h,d,m.props.children,v,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&xh(k)===d.type)?(v=i(d,m.props),v.ref=hi(h,d,m),v.return=h,v):(v=bs(m.type,m.key,m.props,null,h.mode,v),v.ref=hi(h,d,m),v.return=h,v)}function u(h,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Vl(m,h.mode,v),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,v,k){return d===null||d.tag!==7?(d=Xn(m,h.mode,v,k),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wl(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Go:return m=bs(d.type,d.key,d.props,null,h.mode,m),m.ref=hi(h,null,d),m.return=h,m;case dr:return d=Vl(d,h.mode,m),d.return=h,d;case en:var v=d._init;return f(h,v(d._payload),m)}if(wi(d)||li(d))return d=Xn(d,h.mode,m,null),d.return=h,d;rs(h,d)}return null}function p(h,d,m,v){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Go:return m.key===k?l(h,d,m,v):null;case dr:return m.key===k?u(h,d,m,v):null;case en:return k=m._init,p(h,d,k(m._payload),v)}if(wi(m)||li(m))return k!==null?null:c(h,d,m,v,null);rs(h,m)}return null}function g(h,d,m,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,a(d,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Go:return h=h.get(v.key===null?m:v.key)||null,l(d,h,v,k);case dr:return h=h.get(v.key===null?m:v.key)||null,u(d,h,v,k);case en:var I=v._init;return g(h,d,m,I(v._payload),k)}if(wi(v)||li(v))return h=h.get(m)||null,c(d,h,v,k,null);rs(d,v)}return null}function w(h,d,m,v){for(var k=null,I=null,T=d,O=d=0,F=null;T!==null&&O<m.length;O++){T.index>O?(F=T,T=null):F=T.sibling;var L=p(h,T,m[O],v);if(L===null){T===null&&(T=F);break}e&&T&&L.alternate===null&&t(h,T),d=o(L,d,O),I===null?k=L:I.sibling=L,I=L,T=F}if(O===m.length)return n(h,T),q&&Mn(h,O),k;if(T===null){for(;O<m.length;O++)T=f(h,m[O],v),T!==null&&(d=o(T,d,O),I===null?k=T:I.sibling=T,I=T);return q&&Mn(h,O),k}for(T=r(h,T);O<m.length;O++)F=g(T,h,O,m[O],v),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?O:F.key),d=o(F,d,O),I===null?k=F:I.sibling=F,I=F);return e&&T.forEach(function(st){return t(h,st)}),q&&Mn(h,O),k}function y(h,d,m,v){var k=li(m);if(typeof k!="function")throw Error(_(150));if(m=k.call(m),m==null)throw Error(_(151));for(var I=k=null,T=d,O=d=0,F=null,L=m.next();T!==null&&!L.done;O++,L=m.next()){T.index>O?(F=T,T=null):F=T.sibling;var st=p(h,T,L.value,v);if(st===null){T===null&&(T=F);break}e&&T&&st.alternate===null&&t(h,T),d=o(st,d,O),I===null?k=st:I.sibling=st,I=st,T=F}if(L.done)return n(h,T),q&&Mn(h,O),k;if(T===null){for(;!L.done;O++,L=m.next())L=f(h,L.value,v),L!==null&&(d=o(L,d,O),I===null?k=L:I.sibling=L,I=L);return q&&Mn(h,O),k}for(T=r(h,T);!L.done;O++,L=m.next())L=g(T,h,O,L.value,v),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?O:L.key),d=o(L,d,O),I===null?k=L:I.sibling=L,I=L);return e&&T.forEach(function(si){return t(h,si)}),q&&Mn(h,O),k}function E(h,d,m,v){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Go:e:{for(var k=m.key,I=d;I!==null;){if(I.key===k){if(k=m.type,k===hr){if(I.tag===7){n(h,I.sibling),d=i(I,m.props.children),d.return=h,h=d;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&xh(k)===I.type){n(h,I.sibling),d=i(I,m.props),d.ref=hi(h,I,m),d.return=h,h=d;break e}n(h,I);break}else t(h,I);I=I.sibling}m.type===hr?(d=Xn(m.props.children,h.mode,v,m.key),d.return=h,h=d):(v=bs(m.type,m.key,m.props,null,h.mode,v),v.ref=hi(h,d,m),v.return=h,h=v)}return s(h);case dr:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Vl(m,h.mode,v),d.return=h,h=d}return s(h);case en:return I=m._init,E(h,d,I(m._payload),v)}if(wi(m))return w(h,d,m,v);if(li(m))return y(h,d,m,v);rs(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=Wl(m,h.mode,v),d.return=h,h=d),s(h)):n(h,d)}return E}var Hr=Ag(!0),Pg=Ag(!1),Io={},Et=Nn(Io),Ji=Nn(Io),Zi=Nn(Io);function zn(e){if(e===Io)throw Error(_(174));return e}function kf(e,t){switch(G(Zi,t),G(Ji,e),G(Et,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pu(t,e)}X(Et),G(Et,t)}function Br(){X(Et),X(Ji),X(Zi)}function Ng(e){zn(Zi.current);var t=zn(Et.current),n=Pu(t,e.type);t!==n&&(G(Ji,e),G(Et,n))}function Ef(e){Ji.current===e&&(X(Et),X(Ji))}var Z=Nn(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Sf(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Ns=Kt.ReactCurrentDispatcher,Fl=Kt.ReactCurrentBatchConfig,er=0,ee=null,ue=null,he=null,oa=!1,Ri=!1,eo=0,Xw=0;function Se(){throw Error(_(321))}function If(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Tf(e,t,n,r,i,o){if(er=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ns.current=e===null||e.memoizedState===null?Zw:e_,e=n(r,i),Ri){o=0;do{if(Ri=!1,eo=0,25<=o)throw Error(_(301));o+=1,he=ue=null,t.updateQueue=null,Ns.current=t_,e=n(r,i)}while(Ri)}if(Ns.current=sa,t=ue!==null&&ue.next!==null,er=0,he=ue=ee=null,oa=!1,t)throw Error(_(300));return e}function Cf(){var e=eo!==0;return eo=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function rt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,ue=e;else{if(e===null)throw Error(_(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function to(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ee.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,pt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,tr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zl(e){var t=rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xg(){}function Og(e,t){var n=ee,r=rt(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Af(bg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,no(9,Dg.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(_(349));er&30||Rg(n,t,i)}return i}function Rg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dg(e,t,n,r){t.value=n,t.getSnapshot=r,Lg(t)&&Mg(e)}function bg(e,t,n){return n(function(){Lg(t)&&Mg(e)})}function Lg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Mg(e){var t=Ft(e,1);t!==null&&ht(t,e,1,-1)}function Oh(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=Jw.bind(null,ee,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $g(){return rt().memoizedState}function xs(e,t,n,r){var i=gt();ee.flags|=e,i.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Ha(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&If(r,s.deps)){i.memoizedState=no(t,n,o,r);return}}ee.flags|=e,i.memoizedState=no(1|t,n,o,r)}function Rh(e,t){return xs(8390656,8,e,t)}function Af(e,t){return Ha(2048,8,e,t)}function Ug(e,t){return Ha(4,2,e,t)}function Fg(e,t){return Ha(4,4,e,t)}function jg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zg(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4,4,jg.bind(null,t,e),n)}function Pf(){}function Hg(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&If(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bg(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&If(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wg(e,t,n){return er&21?(pt(n,t)||(n=Km(),ee.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Qw(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{W=n,Fl.transition=r}}function Vg(){return rt().memoizedState}function qw(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(e))Kg(t,n);else if(n=Sg(e,t,n,r),n!==null){var i=De();ht(n,e,r,i),Yg(n,t,r)}}function Jw(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(e))Kg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(i.next=i,wf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Sg(e,t,i,r),n!==null&&(i=De(),ht(n,e,r,i),Yg(n,t,r))}}function Gg(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Kg(e,t){Ri=oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,of(e,n)}}var sa={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Zw={readContext:nt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Rh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xs(4194308,4,jg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return xs(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qw.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Oh,useDebugValue:Pf,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Oh(!1),t=e[0];return e=Qw.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=gt();if(q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),pe===null)throw Error(_(349));er&30||Rg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rh(bg.bind(null,r,o,e),[e]),r.flags|=2048,no(9,Dg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=pe.identifierPrefix;if(q){var n=Ot,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e_={readContext:nt,useCallback:Hg,useContext:nt,useEffect:Af,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Bg,useReducer:jl,useRef:$g,useState:function(){return jl(to)},useDebugValue:Pf,useDeferredValue:function(e){var t=rt();return Wg(t,ue.memoizedState,e)},useTransition:function(){var e=jl(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Og,useId:Vg,unstable_isNewReconciler:!1},t_={readContext:nt,useCallback:Hg,useContext:nt,useEffect:Af,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Bg,useReducer:zl,useRef:$g,useState:function(){return zl(to)},useDebugValue:Pf,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:Wg(t,ue.memoizedState,e)},useTransition:function(){var e=zl(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Og,useId:Vg,unstable_isNewReconciler:!1};function Wr(e,t){try{var n="",r=t;do n+=N1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n_=typeof WeakMap=="function"?WeakMap:Map;function Xg(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){la||(la=!0,ac=r),qu(e,t)},n}function Qg(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){qu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qu(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Dh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g_.bind(null,e,t,n),t.then(e,e))}function bh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var r_=Kt.ReactCurrentOwner,$e=!1;function Oe(e,t,n,r){t.child=e===null?Pg(t,null,n,r):Hr(t,e.child,n,r)}function Mh(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=Tf(e,t,n,r,o,i),n=Cf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(q&&n&&hf(t),t.flags|=1,Oe(e,t,r,i),t.child)}function $h(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qg(e,t,o,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(s,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yi(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,jt(e,t,i)}return Ju(e,t,n,r,i)}function Jg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Sr,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Sr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(Sr,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(Sr,ze),ze|=r;return Oe(e,t,i,n),t.child}function Zg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ju(e,t,n,r,i){var o=Fe(n)?Jn:Ne.current;return o=jr(t,o),Rr(t,i),n=Tf(e,t,n,r,o,i),r=Cf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(q&&r&&hf(t),t.flags|=1,Oe(e,t,n,i),t.child)}function Uh(e,t,n,r,i){if(Fe(n)){var o=!0;Js(t)}else o=!1;if(Rr(t,i),t.stateNode===null)Os(e,t),Cg(t,n,r),Qu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Fe(n)?Jn:Ne.current,u=jr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Nh(t,s,r,u),tn=!1;var p=t.memoizedState;s.state=p,ra(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Ue.current||tn?(typeof c=="function"&&(Xu(t,n,c,r),l=t.memoizedState),(a=tn||Ph(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ig(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Fe(n)?Jn:Ne.current,l=jr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Nh(t,s,r,l),tn=!1,p=t.memoizedState,s.state=p,ra(t,r,s,i);var w=t.memoizedState;a!==f||p!==w||Ue.current||tn?(typeof g=="function"&&(Xu(t,n,g,r),w=t.memoizedState),(u=tn||Ph(t,n,u,r,p,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Zu(e,t,n,r,o,i)}function Zu(e,t,n,r,i,o){Zg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Sh(t,n,!1),jt(e,t,o);r=t.stateNode,r_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,a,o)):Oe(e,t,a,o),t.memoizedState=r.state,i&&Sh(t,n,!0),t.child}function ev(e){var t=e.stateNode;t.pendingContext?Eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eh(e,t.context,!1),kf(e,t.containerInfo)}function Fh(e,t,n,r,i){return zr(),mf(i),t.flags|=256,Oe(e,t,n,r),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function tv(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Z,i&1),e===null)return Ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Va(s,r,0,null),e=Xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=tc(n),t.memoizedState=ec,e):Nf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=yn(a,o):(o=Xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?tc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ec,r}return o=e.child,e=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nf(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&mf(r),Hr(t,e.child,null,n),e=Nf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(_(422))),is(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Va({mode:"visible",children:r.children},i,0,null),o=Xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,s),t.child.memoizedState=tc(s),t.memoizedState=ec,o);if(!(t.mode&1))return is(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Hl(o,r,void 0),is(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ft(e,i),ht(r,e,i,-1))}return Lf(),r=Hl(Error(_(421))),is(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=pn(i.nextSibling),We=t,q=!0,ct=null,e!==null&&(qe[Je++]=xt,qe[Je++]=Ot,qe[Je++]=Zn,xt=e.id,Ot=e.overflow,Zn=t),t=Nf(t,r.children),t.flags|=4096,t)}function jh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yu(e.return,t,n)}function Bl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function nv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jh(e,n,t);else if(e.tag===19)jh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o_(e,t,n){switch(t.tag){case 3:ev(t),zr();break;case 5:Ng(t);break;case 1:Fe(t.type)&&Js(t);break;case 4:kf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(ta,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?tv(e,t,n):(G(Z,Z.current&1),e=jt(e,t,n),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Jg(e,t,n)}return jt(e,t,n)}var rv,nc,iv,ov;rv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};iv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(Et.current);var o=null;switch(n){case"input":i=Iu(e,i),r=Iu(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=Au(e,i),r=Au(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qs)}Nu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ov=function(e,t,n,r){n!==r&&(t.flags|=4)};function pi(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s_(e,t,n){var r=t.pendingProps;switch(pf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Fe(t.type)&&qs(),Ie(t),null;case 3:return r=t.stateNode,Br(),X(Ue),X(Ne),Sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(cc(ct),ct=null))),nc(e,t),Ie(t),null;case 5:Ef(t);var i=zn(Zi.current);if(n=t.type,e!==null&&t.stateNode!=null)iv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ie(t),null}if(e=zn(Et.current),ns(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[qi]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)K(ki[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Xd(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":qd(r,o),K("invalid",r)}Nu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ts(r.textContent,a,e),i=["children",""+a]):zi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":Ko(r),Qd(r,o,!0);break;case"textarea":Ko(r),Jd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[qi]=r,rv(e,t,!1,!1),t.stateNode=e;e:{switch(s=xu(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)K(ki[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Xd(e,r),i=Iu(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),K("invalid",e);break;case"textarea":qd(e,r),i=Au(e,r),K("invalid",e);break;default:i=r}Nu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Lm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(e,l):typeof l=="number"&&Hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&Jc(e,o,l,s))}switch(n){case"input":Ko(e),Qd(e,r,!1);break;case"textarea":Ko(e),Jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)ov(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=zn(Zi.current),zn(Et.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ie(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&He!==null&&t.mode&1&&!(t.flags&128))Eg(),zr(),t.flags|=98560,o=!1;else if(o=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[vt]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else ct!==null&&(cc(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Lf())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Br(),nc(e,t),e===null&&Xi(t.stateNode.containerInfo),Ie(t),null;case 10:return yf(t.type._context),Ie(t),null;case 17:return Fe(t.type)&&qs(),Ie(t),null;case 19:if(X(Z),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)pi(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ia(e),s!==null){for(t.flags|=128,pi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Vr&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ia(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return Ie(t),null}else 2*se()-o.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,pi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=Z.current,G(Z,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function a_(e,t){switch(pf(t),t.tag){case 1:return Fe(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),X(Ue),X(Ne),Sf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ef(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return Br(),null;case 10:return yf(t.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var os=!1,Ce=!1,l_=typeof WeakSet=="function"?WeakSet:Set,A=null;function Er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function rc(e,t,n){try{n()}catch(r){ne(e,t,r)}}var zh=!1;function u_(e,t){if(ju=Ks,e=ug(),df(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:e,selectionRange:n},Ks=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,E=w.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:lt(t.type,y),E);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=zh,zh=!1,w}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&rc(t,n,o)}i=i.next}while(i!==r)}}function Ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ic(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sv(e){var t=e.alternate;t!==null&&(e.alternate=null,sv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[qi],delete t[Wu],delete t[Vw],delete t[Gw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function av(e){return e.tag===5||e.tag===3||e.tag===4}function Hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||av(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qs));else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}var ye=null,ut=!1;function qt(e,t,n){for(n=n.child;n!==null;)lv(e,t,n),n=n.sibling}function lv(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(La,n)}catch{}switch(n.tag){case 5:Ce||Er(n,t);case 6:var r=ye,i=ut;ye=null,qt(e,t,n),ye=r,ut=i,ye!==null&&(ut?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ut?(e=ye,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Gi(e)):Ml(ye,n.stateNode));break;case 4:r=ye,i=ut,ye=n.stateNode.containerInfo,ut=!0,qt(e,t,n),ye=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rc(n,t,s),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Ce&&(Er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,qt(e,t,n),Ce=r):qt(e,t,n);break;default:qt(e,t,n)}}function Bh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l_),t.forEach(function(r){var i=y_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ut=!1;break e;case 3:ye=a.stateNode.containerInfo,ut=!0;break e;case 4:ye=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(ye===null)throw Error(_(160));lv(o,s,i),ye=null,ut=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uv(t,e),t=t.sibling}function uv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),mt(e),r&4){try{Di(3,e,e.return),Ba(3,e)}catch(y){ne(e,e.return,y)}try{Di(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:at(t,e),mt(e),r&512&&n!==null&&Er(n,n.return);break;case 5:if(at(t,e),mt(e),r&512&&n!==null&&Er(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&xm(i,o),xu(a,s);var u=xu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Lm(i,f):c==="dangerouslySetInnerHTML"?Dm(i,f):c==="children"?Hi(i,f):Jc(i,c,f,u)}switch(a){case"input":Tu(i,o);break;case"textarea":Om(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Pr(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Pr(i,!!o.multiple,o.defaultValue,!0):Pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[qi]=o}catch(y){ne(e,e.return,y)}}break;case 6:if(at(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ne(e,e.return,y)}}break;case 3:if(at(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:at(t,e),mt(e);break;case 13:at(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Rf=se())),r&4&&Bh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,at(t,e),Ce=u):at(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(A=e,c=e.child;c!==null;){for(f=A=c;A!==null;){switch(p=A,g=p.child,p.tag){case 0:case 11:case 14:case 15:Di(4,p,p.return);break;case 1:Er(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Er(p,p.return);break;case 22:if(p.memoizedState!==null){Vh(f);continue}}g!==null?(g.return=p,A=g):Vh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bm("display",s))}catch(y){ne(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ne(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),mt(e),r&4&&Bh(e);break;case 21:break;default:at(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(av(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=Hh(e);sc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Hh(e);oc(e,a,s);break;default:throw Error(_(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c_(e,t,n){A=e,cv(e)}function cv(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||os;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=os;var u=Ce;if(os=s,(Ce=l)&&!u)for(A=i;A!==null;)s=A,l=s.child,s.tag===22&&s.memoizedState!==null?Gh(i):l!==null?(l.return=s,A=l):Gh(i);for(;o!==null;)A=o,cv(o),o=o.sibling;A=i,os=a,Ce=u}Wh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Wh(e)}}function Wh(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ah(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ah(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Gi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ce||t.flags&512&&ic(t)}catch(p){ne(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Vh(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Gh(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ba(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{ic(t)}catch(l){ne(t,o,l)}break;case 5:var s=t.return;try{ic(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var f_=Math.ceil,aa=Kt.ReactCurrentDispatcher,xf=Kt.ReactCurrentOwner,tt=Kt.ReactCurrentBatchConfig,z=0,pe=null,le=null,_e=0,ze=0,Sr=Nn(0),ce=0,ro=null,tr=0,Wa=0,Of=0,bi=null,Me=null,Rf=0,Vr=1/0,Ct=null,la=!1,ac=null,gn=null,ss=!1,un=null,ua=0,Li=0,lc=null,Rs=-1,Ds=0;function De(){return z&6?se():Rs!==-1?Rs:Rs=se()}function vn(e){return e.mode&1?z&2&&_e!==0?_e&-_e:Yw.transition!==null?(Ds===0&&(Ds=Km()),Ds):(e=W,e!==0||(e=window.event,e=e===void 0?16:eg(e.type)),e):1}function ht(e,t,n,r){if(50<Li)throw Li=0,lc=null,Error(_(185));ko(e,n,r),(!(z&2)||e!==pe)&&(e===pe&&(!(z&2)&&(Wa|=n),ce===4&&rn(e,_e)),je(e,r),n===1&&z===0&&!(t.mode&1)&&(Vr=se()+500,ja&&xn()))}function je(e,t){var n=e.callbackNode;Y1(e,t);var r=Gs(e,e===pe?_e:0);if(r===0)n!==null&&th(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&th(n),t===1)e.tag===0?Kw(Kh.bind(null,e)):wg(Kh.bind(null,e)),Bw(function(){!(z&6)&&xn()}),n=null;else{switch(Ym(r)){case 1:n=rf;break;case 4:n=Vm;break;case 16:n=Vs;break;case 536870912:n=Gm;break;default:n=Vs}n=yv(n,fv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fv(e,t){if(Rs=-1,Ds=0,z&6)throw Error(_(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=Gs(e,e===pe?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ca(e,r);else{t=r;var i=z;z|=2;var o=hv();(pe!==e||_e!==t)&&(Ct=null,Vr=se()+500,Yn(e,t));do try{p_();break}catch(a){dv(e,a)}while(1);vf(),aa.current=o,z=i,le!==null?t=0:(pe=null,_e=0,t=ce)}if(t!==0){if(t===2&&(i=Lu(e),i!==0&&(r=i,t=uc(e,i))),t===1)throw n=ro,Yn(e,0),rn(e,r),je(e,se()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!d_(i)&&(t=ca(e,r),t===2&&(o=Lu(e),o!==0&&(r=o,t=uc(e,o))),t===1))throw n=ro,Yn(e,0),rn(e,r),je(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:$n(e,Me,Ct);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=Rf+500-se(),10<t)){if(Gs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bu($n.bind(null,e,Me,Ct),t);break}$n(e,Me,Ct);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f_(r/1960))-r,10<r){e.timeoutHandle=Bu($n.bind(null,e,Me,Ct),r);break}$n(e,Me,Ct);break;case 5:$n(e,Me,Ct);break;default:throw Error(_(329))}}}return je(e,se()),e.callbackNode===n?fv.bind(null,e):null}function uc(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=ca(e,t),e!==2&&(t=Me,Me=n,t!==null&&cc(t)),e}function cc(e){Me===null?Me=e:Me.push.apply(Me,e)}function d_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~Of,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Kh(e){if(z&6)throw Error(_(327));Dr();var t=Gs(e,0);if(!(t&1))return je(e,se()),null;var n=ca(e,t);if(e.tag!==0&&n===2){var r=Lu(e);r!==0&&(t=r,n=uc(e,r))}if(n===1)throw n=ro,Yn(e,0),rn(e,t),je(e,se()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,Me,Ct),je(e,se()),null}function Df(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Vr=se()+500,ja&&xn())}}function nr(e){un!==null&&un.tag===0&&!(z&6)&&Dr();var t=z;z|=1;var n=tt.transition,r=W;try{if(tt.transition=null,W=1,e)return e()}finally{W=r,tt.transition=n,z=t,!(z&6)&&xn()}}function bf(){ze=Sr.current,X(Sr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hw(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:Br(),X(Ue),X(Ne),Sf();break;case 5:Ef(r);break;case 4:Br();break;case 13:X(Z);break;case 19:X(Z);break;case 10:yf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(pe=e,le=e=yn(e.current,null),_e=ze=t,ce=0,ro=null,Of=Wa=tr=0,Me=bi=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}jn=null}return e}function dv(e,t){do{var n=le;try{if(vf(),Ns.current=sa,oa){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(er=0,he=ue=ee=null,Ri=!1,eo=0,xf.current=null,n===null||n.return===null){ce=1,ro=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=bh(s);if(g!==null){g.flags&=-257,Lh(g,s,a,o,t),g.mode&1&&Dh(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){Dh(o,u,t),Lf();break e}l=Error(_(426))}}else if(q&&a.mode&1){var E=bh(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Lh(E,s,a,o,t),mf(Wr(l,a));break e}}o=l=Wr(l,a),ce!==4&&(ce=2),bi===null?bi=[o]:bi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Xg(o,l,t);Ch(o,h);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gn===null||!gn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Qg(o,a,t);Ch(o,v);break e}}o=o.return}while(o!==null)}mv(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function hv(){var e=aa.current;return aa.current=sa,e===null?sa:e}function Lf(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(tr&268435455)&&!(Wa&268435455)||rn(pe,_e)}function ca(e,t){var n=z;z|=2;var r=hv();(pe!==e||_e!==t)&&(Ct=null,Yn(e,t));do try{h_();break}catch(i){dv(e,i)}while(1);if(vf(),z=n,aa.current=r,le!==null)throw Error(_(261));return pe=null,_e=0,ce}function h_(){for(;le!==null;)pv(le)}function p_(){for(;le!==null&&!F1();)pv(le)}function pv(e){var t=vv(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?mv(e):le=t,xf.current=null}function mv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a_(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=s_(n,t,ze),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function $n(e,t,n){var r=W,i=tt.transition;try{tt.transition=null,W=1,m_(e,t,n,r)}finally{tt.transition=i,W=r}return null}function m_(e,t,n,r){do Dr();while(un!==null);if(z&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(X1(e,o),e===pe&&(le=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,yv(Vs,function(){return Dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=W;W=1;var a=z;z|=4,xf.current=null,u_(e,n),uv(n,e),Lw(zu),Ks=!!ju,zu=ju=null,e.current=n,c_(n),j1(),z=a,W=s,tt.transition=o}else e.current=n;if(ss&&(ss=!1,un=e,ua=i),o=e.pendingLanes,o===0&&(gn=null),B1(n.stateNode),je(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(la)throw la=!1,e=ac,ac=null,e;return ua&1&&e.tag!==0&&Dr(),o=e.pendingLanes,o&1?e===lc?Li++:(Li=0,lc=e):Li=0,xn(),null}function Dr(){if(un!==null){var e=Ym(ua),t=tt.transition,n=W;try{if(tt.transition=null,W=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,ua=0,z&6)throw Error(_(331));var i=z;for(z|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Di(8,c,o)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var p=c.sibling,g=c.return;if(sv(c),c===u){A=null;break}if(p!==null){p.return=g,A=p;break}A=g}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=d;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ba(9,a)}}catch(k){ne(a,a.return,k)}if(a===s){A=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}if(z=i,xn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(La,e)}catch{}r=!0}return r}finally{W=n,tt.transition=t}}return!1}function Yh(e,t,n){t=Wr(n,t),t=Xg(e,t,1),e=mn(e,t,1),t=De(),e!==null&&(ko(e,1,t),je(e,t))}function ne(e,t,n){if(e.tag===3)Yh(e,e,n);else for(;t!==null;){if(t.tag===3){Yh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Wr(n,e),e=Qg(t,e,1),t=mn(t,e,1),e=De(),t!==null&&(ko(t,1,e),je(t,e));break}}t=t.return}}function g_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(_e&n)===n&&(ce===4||ce===3&&(_e&130023424)===_e&&500>se()-Rf?Yn(e,0):Of|=n),je(e,t)}function gv(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=De();e=Ft(e,t),e!==null&&(ko(e,t,n),je(e,n))}function v_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gv(e,n)}function y_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),gv(e,n)}var vv;vv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,o_(e,t,n);$e=!!(e.flags&131072)}else $e=!1,q&&t.flags&1048576&&_g(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=jr(t,Ne.current);Rr(t,n),i=Tf(null,t,r,e,i,n);var o=Cf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Js(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(t),i.updater=za,t.stateNode=i,i._reactInternals=t,Qu(t,r,e,n),t=Zu(null,t,r,!0,o,n)):(t.tag=0,q&&o&&hf(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=__(r),e=lt(r,e),i){case 0:t=Ju(null,t,r,e,n);break e;case 1:t=Uh(null,t,r,e,n);break e;case 11:t=Mh(null,t,r,e,n);break e;case 14:t=$h(null,t,r,lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Uh(e,t,r,i,n);case 3:e:{if(ev(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ig(e,t),ra(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(_(423)),t),t=Fh(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(_(424)),t),t=Fh(e,t,r,n,i);break e}else for(He=pn(t.stateNode.containerInfo.firstChild),We=t,q=!0,ct=null,n=Pg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){t=jt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Ng(t),e===null&&Ku(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Hu(r,i)?s=null:o!==null&&Hu(r,o)&&(t.flags|=32),Zg(e,t),Oe(e,t,s,n),t.child;case 6:return e===null&&Ku(t),null;case 13:return tv(e,t,n);case 4:return kf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Mh(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(ta,r._currentValue),r._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===i.children&&!Ue.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Yu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=nt(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),$h(e,t,r,i,n);case 15:return qg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Os(e,t),t.tag=1,Fe(r)?(e=!0,Js(t)):e=!1,Rr(t,n),Cg(t,r,i),Qu(t,r,i,n),Zu(null,t,r,!0,e,n);case 19:return nv(e,t,n);case 22:return Jg(e,t,n)}throw Error(_(156,t.tag))};function yv(e,t){return Wm(e,t)}function w_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new w_(e,t,n,r)}function Mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function __(e){if(typeof e=="function")return Mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ef)return 11;if(e===tf)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Mf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case hr:return Xn(n.children,i,o,t);case Zc:s=8,i|=8;break;case _u:return e=et(12,n,t,i|2),e.elementType=_u,e.lanes=o,e;case ku:return e=et(13,n,t,i),e.elementType=ku,e.lanes=o,e;case Eu:return e=et(19,n,t,i),e.elementType=Eu,e.lanes=o,e;case Am:return Va(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tm:s=10;break e;case Cm:s=9;break e;case ef:s=11;break e;case tf:s=14;break e;case en:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Va(e,t,n,r){return e=et(22,e,r,t),e.elementType=Am,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(e,t,n,r,i,o,s,a,l){return e=new k_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(o),e}function E_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wv(e){if(!e)return Sn;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Fe(n))return yg(e,n,t)}return t}function _v(e,t,n,r,i,o,s,a,l){return e=$f(n,r,!0,e,i,o,s,a,l),e.context=wv(null),n=e.current,r=De(),i=vn(n),o=Mt(r,i),o.callback=t??null,mn(n,o,i),e.current.lanes=i,ko(e,i,r),je(e,r),e}function Ga(e,t,n,r){var i=t.current,o=De(),s=vn(i);return n=wv(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,s),e!==null&&(ht(e,i,s,o),Ps(e,i,s)),s}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uf(e,t){Xh(e,t),(e=e.alternate)&&Xh(e,t)}function S_(){return null}var kv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ff(e){this._internalRoot=e}Ka.prototype.render=Ff.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ga(e,t,null,null)};Ka.prototype.unmount=Ff.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Ga(null,e,null,null)}),t[Ut]=null}};function Ka(e){this._internalRoot=e}Ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=qm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&Zm(e)}};function jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function I_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fa(s);o.call(u)}}var s=_v(t,r,e,0,null,!1,!1,"",Qh);return e._reactRootContainer=s,e[Ut]=s.current,Xi(e.nodeType===8?e.parentNode:e),nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fa(l);a.call(u)}}var l=$f(e,0,!1,null,null,!1,!1,"",Qh);return e._reactRootContainer=l,e[Ut]=l.current,Xi(e.nodeType===8?e.parentNode:e),nr(function(){Ga(t,l,n,r)}),l}function Xa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=fa(s);a.call(l)}}Ga(t,s,e,i)}else s=I_(n,t,e,i,r);return fa(s)}Xm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(of(t,n|1),je(t,se()),!(z&6)&&(Vr=se()+500,xn()))}break;case 13:nr(function(){var r=Ft(e,1);if(r!==null){var i=De();ht(r,e,1,i)}}),Uf(e,1)}};sf=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=De();ht(t,e,134217728,n)}Uf(e,134217728)}};Qm=function(e){if(e.tag===13){var t=vn(e),n=Ft(e,t);if(n!==null){var r=De();ht(n,e,t,r)}Uf(e,t)}};qm=function(){return W};Jm=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Ru=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fa(r);if(!i)throw Error(_(90));Nm(r),Tu(r,i)}}}break;case"textarea":Om(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};Um=Df;Fm=nr;var T_={usingClientEntryPoint:!1,Events:[So,vr,Fa,Mm,$m,Df]},mi={findFiberByHostInstance:Fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C_={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hm(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||S_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{La=as.inject(C_),kt=as}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(t))throw Error(_(200));return E_(e,t,null,n)};Ye.createRoot=function(e,t){if(!jf(e))throw Error(_(299));var n=!1,r="",i=kv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$f(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Ff(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Hm(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return nr(e)};Ye.hydrate=function(e,t,n){if(!Ya(t))throw Error(_(200));return Xa(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!jf(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=kv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_v(t,null,e,1,n??null,i,!1,o,s),e[Ut]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ka(t)};Ye.render=function(e,t,n){if(!Ya(t))throw Error(_(200));return Xa(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(_(40));return e._reactRootContainer?(nr(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Ye.unstable_batchedUpdates=Df;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ya(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Xa(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ye})(S1);var qh=vu;gu.createRoot=qh.createRoot,gu.hydrateRoot=qh.hydrateRoot;var ls,A_=new Uint8Array(16);function P_(){if(!ls&&(ls=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ls))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ls(A_)}const N_=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function x_(e){return typeof e=="string"&&N_.test(e)}var ve=[];for(var Gl=0;Gl<256;++Gl)ve.push((Gl+256).toString(16).substr(1));function O_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(ve[e[t+0]]+ve[e[t+1]]+ve[e[t+2]]+ve[e[t+3]]+"-"+ve[e[t+4]]+ve[e[t+5]]+"-"+ve[e[t+6]]+ve[e[t+7]]+"-"+ve[e[t+8]]+ve[e[t+9]]+"-"+ve[e[t+10]]+ve[e[t+11]]+ve[e[t+12]]+ve[e[t+13]]+ve[e[t+14]]+ve[e[t+15]]).toLowerCase();if(!x_(n))throw TypeError("Stringified UUID is invalid");return n}function Jh(e,t,n){e=e||{};var r=e.random||(e.rng||P_)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return O_(r)}const R_=(e,t)=>{const n=t.filter(r=>r.id!==e);return localStorage.setItem("todosLocal",JSON.stringify(n)),n},D_=(e,t)=>{const n=t.map(r=>r.id===e?{...r,completed:!r.completed}:r);return localStorage.setItem("todosLocal",JSON.stringify(n)),n},b_=(e,t)=>{const n=t.map(r=>r.id===e?{...r,isEditing:!0}:r);return localStorage.setItem("todosLocal",JSON.stringify(n)),n},L_=(e,t,n,r,i)=>{const o=i.map(s=>s.id===r?{...s,task:e,nType:t,date:n,isEditing:!1}:s);return localStorage.setItem("todosLocal",JSON.stringify(o)),o},M_=({addTodo:e,types:t})=>{const[n,r]=ie.useState(""),[i,o]=ie.useState(""),[s,a]=ie.useState(new Date().toISOString().slice(0,10));return B("form",{className:"TodoForm",onSubmit:u=>{u.preventDefault(),s||a(new Date().toISOString().slice(0,10)),i||o(t[0].type),n&&(e(n,i,s),r(""),a(new Date().toISOString().slice(0,10)))},children:[B("div",{className:"TodoForm__Task",children:[N("input",{type:"text",value:n,placeholder:"Add a new task",className:"TodoForm__Task__input",onChange:u=>r(u.target.value)}),N("button",{type:"submit",className:"add-btn",children:"Add Task"})]}),B("div",{className:"TodoForm__CatDate",children:[N("div",{className:"TodoForm__CatDate__category",children:B("select",{id:"type",name:"type",value:i,onChange:u=>o(u.target.value),children:[N("option",{value:"No-cat",children:"No-cat"},"type-id-no-type"),t.map(u=>N("option",{value:u.type,children:u.type},`type-id ${u.id}`))]})}),N("div",{className:"TodoForm__CatDate__date",children:N("input",{type:"date",id:"startDate",name:"trip-start",value:s,onChange:u=>a(u.target.value),min:"2018-01-01",max:"2099-12-31"})})]})]})};function Zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zh(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function da(e){return da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},da(e)}function $_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ep(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U_(e,t,n){return t&&ep(e.prototype,t),n&&ep(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zf(e,t){return j_(e)||H_(e,t)||Ev(e,t)||W_()}function To(e){return F_(e)||z_(e)||Ev(e)||B_()}function F_(e){if(Array.isArray(e))return fc(e)}function j_(e){if(Array.isArray(e))return e}function z_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Ev(e,t){if(e){if(typeof e=="string")return fc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fc(e,t)}}function fc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tp=function(){},Hf={},Sv={},Iv=null,Tv={mark:tp,measure:tp};try{typeof window<"u"&&(Hf=window),typeof document<"u"&&(Sv=document),typeof MutationObserver<"u"&&(Iv=MutationObserver),typeof performance<"u"&&(Tv=performance)}catch{}var V_=Hf.navigator||{},np=V_.userAgent,rp=np===void 0?"":np,In=Hf,Q=Sv,ip=Iv,us=Tv;In.document;var Yt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Cv=~rp.indexOf("MSIE")||~rp.indexOf("Trident/"),cs,fs,ds,hs,ps,zt="___FONT_AWESOME___",dc=16,Av="fa",Pv="svg-inline--fa",rr="data-fa-i2svg",hc="data-fa-pseudo-element",G_="data-fa-pseudo-element-pending",Bf="data-prefix",Wf="data-icon",op="fontawesome-i2svg",K_="async",Y_=["HTML","HEAD","STYLE","SCRIPT"],Nv=function(){try{return!0}catch{return!1}}(),Y="classic",re="sharp",Vf=[Y,re];function Co(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var io=Co((cs={},fe(cs,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(cs,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),cs)),oo=Co((fs={},fe(fs,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(fs,re,{solid:"fass",regular:"fasr",light:"fasl"}),fs)),so=Co((ds={},fe(ds,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(ds,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ds)),X_=Co((hs={},fe(hs,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(hs,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),hs)),Q_=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,xv="fa-layers-text",q_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,J_=Co((ps={},fe(ps,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(ps,re,{900:"fass",400:"fasr",300:"fasl"}),ps)),Ov=[1,2,3,4,5,6,7,8,9,10],Z_=Ov.concat([11,12,13,14,15,16,17,18,19,20]),e2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ao=new Set;Object.keys(oo[Y]).map(ao.add.bind(ao));Object.keys(oo[re]).map(ao.add.bind(ao));var t2=[].concat(Vf,To(ao),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hn.GROUP,Hn.SWAP_OPACITY,Hn.PRIMARY,Hn.SECONDARY]).concat(Ov.map(function(e){return"".concat(e,"x")})).concat(Z_.map(function(e){return"w-".concat(e)})),Mi=In.FontAwesomeConfig||{};function n2(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function r2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var i2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];i2.forEach(function(e){var t=zf(e,2),n=t[0],r=t[1],i=r2(n2(n));i!=null&&(Mi[r]=i)})}var Rv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Av,replacementClass:Pv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Mi.familyPrefix&&(Mi.cssPrefix=Mi.familyPrefix);var Gr=C(C({},Rv),Mi);Gr.autoReplaceSvg||(Gr.observeMutations=!1);var x={};Object.keys(Rv).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){Gr[e]=n,$i.forEach(function(r){return r(x)})},get:function(){return Gr[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Gr.cssPrefix=t,$i.forEach(function(n){return n(x)})},get:function(){return Gr.cssPrefix}});In.FontAwesomeConfig=x;var $i=[];function o2(e){return $i.push(e),function(){$i.splice($i.indexOf(e),1)}}var Jt=dc,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s2(e){if(!(!e||!Yt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var a2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lo(){for(var e=12,t="";e-- >0;)t+=a2[Math.random()*62|0];return t}function Jr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gf(e){return e.classList?Jr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Dv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Dv(e[n]),'" ')},"").trim()}function Qa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Kf(e){return e.size!==wt.size||e.x!==wt.x||e.y!==wt.y||e.rotate!==wt.rotate||e.flipX||e.flipY}function u2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function c2(e){var t=e.transform,n=e.width,r=n===void 0?dc:n,i=e.height,o=i===void 0?dc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&Cv?l+="translate(".concat(t.x/Jt-r/2,"em, ").concat(t.y/Jt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Jt,"em), calc(-50% + ").concat(t.y/Jt,"em)) "):l+="translate(".concat(t.x/Jt,"em, ").concat(t.y/Jt,"em) "),l+="scale(".concat(t.size/Jt*(t.flipX?-1:1),", ").concat(t.size/Jt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var f2=`:root, :host {
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
}`;function bv(){var e=Av,t=Pv,n=x.cssPrefix,r=x.replacementClass,i=f2;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var sp=!1;function Kl(){x.autoAddCss&&!sp&&(s2(bv()),sp=!0)}var d2={mixout:function(){return{dom:{css:bv,insertCss:Kl}}},hooks:function(){return{beforeDOMElementCreation:function(){Kl()},beforeI2svg:function(){Kl()}}}},Ht=In||{};Ht[zt]||(Ht[zt]={});Ht[zt].styles||(Ht[zt].styles={});Ht[zt].hooks||(Ht[zt].hooks={});Ht[zt].shims||(Ht[zt].shims=[]);var ft=Ht[zt],Lv=[],h2=function e(){Q.removeEventListener("DOMContentLoaded",e),ha=1,Lv.map(function(t){return t()})},ha=!1;Yt&&(ha=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),ha||Q.addEventListener("DOMContentLoaded",h2));function p2(e){Yt&&(ha?setTimeout(e,0):Lv.push(e))}function Ao(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Dv(e):"<".concat(t," ").concat(l2(r),">").concat(o.map(Ao).join(""),"</").concat(t,">")}function ap(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var m2=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Yl=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?m2(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function g2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function pc(e){var t=g2(e);return t.length===1?t[0].toString(16):null}function v2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function mc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=lp(t);typeof ft.hooks.addPack=="function"&&!i?ft.hooks.addPack(e,lp(t)):ft.styles[e]=C(C({},ft.styles[e]||{}),o),e==="fas"&&mc("fa",t)}var ms,gs,vs,Ir=ft.styles,y2=ft.shims,w2=(ms={},fe(ms,Y,Object.values(so[Y])),fe(ms,re,Object.values(so[re])),ms),Yf=null,Mv={},$v={},Uv={},Fv={},jv={},_2=(gs={},fe(gs,Y,Object.keys(io[Y])),fe(gs,re,Object.keys(io[re])),gs);function k2(e){return~t2.indexOf(e)}function E2(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!k2(i)?i:null}var zv=function(){var t=function(o){return Yl(Ir,function(s,a,l){return s[l]=Yl(a,o,{}),s},{})};Mv=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),$v=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),jv=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Ir||x.autoFetchSvg,r=Yl(y2,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Uv=r.names,Fv=r.unicodes,Yf=qa(x.styleDefault,{family:x.familyDefault})};o2(function(e){Yf=qa(e.styleDefault,{family:x.familyDefault})});zv();function Xf(e,t){return(Mv[e]||{})[t]}function S2(e,t){return($v[e]||{})[t]}function Bn(e,t){return(jv[e]||{})[t]}function Hv(e){return Uv[e]||{prefix:null,iconName:null}}function I2(e){var t=Fv[e],n=Xf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Tn(){return Yf}var Qf=function(){return{prefix:null,iconName:null,rest:[]}};function qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=io[r][e],o=oo[r][e]||oo[r][i],s=e in ft.styles?e:null;return o||s||null}var up=(vs={},fe(vs,Y,Object.keys(so[Y])),fe(vs,re,Object.keys(so[re])),vs);function Ja(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},fe(t,Y,"".concat(x.cssPrefix,"-").concat(Y)),fe(t,re,"".concat(x.cssPrefix,"-").concat(re)),t),s=null,a=Y;(e.includes(o[Y])||e.some(function(u){return up[Y].includes(u)}))&&(a=Y),(e.includes(o[re])||e.some(function(u){return up[re].includes(u)}))&&(a=re);var l=e.reduce(function(u,c){var f=E2(x.cssPrefix,c);if(Ir[c]?(c=w2[a].includes(c)?X_[a][c]:c,s=c,u.prefix=c):_2[a].indexOf(c)>-1?(s=c,u.prefix=qa(c,{family:a})):f?u.iconName=f:c!==x.replacementClass&&c!==o[Y]&&c!==o[re]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=s==="fa"?Hv(u.iconName):{},g=Bn(u.prefix,u.iconName);p.prefix&&(s=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Ir.far&&Ir.fas&&!x.autoFetchSvg&&(u.prefix="fas")}return u},Qf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===re&&(Ir.fass||x.autoFetchSvg)&&(l.prefix="fass",l.iconName=Bn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Tn()||"fas"),l}var T2=function(){function e(){$_(this,e),this.definitions={}}return U_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=C(C({},n.definitions[a]||{}),s[a]),mc(a,s[a]);var l=so[Y][a];l&&mc(l,s[a]),zv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),cp=[],Tr={},br={},C2=Object.keys(br);function A2(e,t){var n=t.mixoutsTo;return cp=e,Tr={},Object.keys(br).forEach(function(r){C2.indexOf(r)===-1&&delete br[r]}),cp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),da(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Tr[s]||(Tr[s]=[]),Tr[s].push(o[s])})}r.provides&&r.provides(br)}),n}function gc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Tr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ir(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Tr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function vc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Tn();if(t)return t=Bn(n,t)||t,ap(Bv.definitions,n,t)||ap(ft.styles,n,t)}var Bv=new T2,P2=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,ir("noAuto")},N2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(ir("beforeI2svg",t),Bt("pseudoElements2svg",t),Bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,p2(function(){O2({autoReplaceSvgRoot:n}),ir("watch",t)})}},x2={icon:function(t){if(t===null)return null;if(da(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Bn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qa(t[0]);return{prefix:r,iconName:Bn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(Q_))){var i=Ja(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Tn(),iconName:Bn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Tn();return{prefix:o,iconName:Bn(o,t)||t}}}},Qe={noAuto:P2,config:x,dom:N2,parse:x2,library:Bv,findIconDefinition:vc,toHtml:Ao},O2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(ft.styles).length>0||x.autoFetchSvg)&&Yt&&x.autoReplaceSvg&&Qe.dom.i2svg({node:r})};function Za(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ao(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Yt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function R2(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Kf(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qa(C(C({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function D2(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:s}),children:r}]}]}function qf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,w=r.found?r:n,y=w.width,E=w.height,h=i==="fak",d=[x.replacementClass,o?"".concat(x.cssPrefix,"-").concat(o):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),m={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},v=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};g&&(m.attributes[rr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||lo())},children:[l]}),delete m.attributes.title);var k=C(C({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:C(C({},v),f.styles)}),I=r.found&&n.found?Bt("generateAbstractMask",k)||{children:[],attributes:{}}:Bt("generateAbstractIcon",k)||{children:[],attributes:{}},T=I.children,O=I.attributes;return k.children=T,k.attributes=O,a?D2(k):R2(k)}function fp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=C(C(C({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[rr]="");var c=C({},s.styles);Kf(i)&&(c.transform=c2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Qa(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function b2(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Qa(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Xl=ft.styles;function yc(e){var t=e[0],n=e[1],r=e.slice(4),i=zf(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(Hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Hn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Hn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var L2={found:!1,width:512,height:512};function M2(e,t){!Nv&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wc(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=Tn()),new Promise(function(r,i){if(Bt("missingIconAbstract"),n==="fa"){var o=Hv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Xl[t]&&Xl[t][e]){var s=Xl[t][e];return r(yc(s))}M2(e,t),r(C(C({},L2),{},{icon:x.showMissingIcons&&e?Bt("missingIconAbstract")||{}:{}}))})}var dp=function(){},_c=x.measurePerformance&&us&&us.mark&&us.measure?us:{mark:dp,measure:dp},Ei='FA "6.4.0"',$2=function(t){return _c.mark("".concat(Ei," ").concat(t," begins")),function(){return Wv(t)}},Wv=function(t){_c.mark("".concat(Ei," ").concat(t," ends")),_c.measure("".concat(Ei," ").concat(t),"".concat(Ei," ").concat(t," begins"),"".concat(Ei," ").concat(t," ends"))},Jf={begin:$2,end:Wv},Ls=function(){};function hp(e){var t=e.getAttribute?e.getAttribute(rr):null;return typeof t=="string"}function U2(e){var t=e.getAttribute?e.getAttribute(Bf):null,n=e.getAttribute?e.getAttribute(Wf):null;return t&&n}function F2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function j2(){if(x.autoReplaceSvg===!0)return Ms.replace;var e=Ms[x.autoReplaceSvg];return e||Ms.replace}function z2(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function H2(e){return Q.createElement(e)}function Vv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?z2:H2:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(Vv(s,{ceFn:r}))}),i}function B2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ms={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Vv(i),n)}),n.getAttribute(rr)===null&&x.keepOriginalSource){var r=Q.createComment(B2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Gf(n).indexOf(x.replacementClass))return Ms.replace(t);var i=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===x.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Ao(a)}).join(`
`);n.setAttribute(rr,""),n.innerHTML=s}};function pp(e){e()}function Gv(e,t){var n=typeof t=="function"?t:Ls;if(e.length===0)n();else{var r=pp;x.mutateApproach===K_&&(r=In.requestAnimationFrame||pp),r(function(){var i=j2(),o=Jf.begin("mutate");e.map(i),o(),n()})}}var Zf=!1;function Kv(){Zf=!0}function kc(){Zf=!1}var pa=null;function mp(e){if(ip&&x.observeMutations){var t=e.treeCallback,n=t===void 0?Ls:t,r=e.nodeCallback,i=r===void 0?Ls:r,o=e.pseudoElementsCallback,s=o===void 0?Ls:o,a=e.observeMutationsRoot,l=a===void 0?Q:a;pa=new ip(function(u){if(!Zf){var c=Tn();Jr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!hp(f.addedNodes[0])&&(x.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&x.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&hp(f.target)&&~e2.indexOf(f.attributeName))if(f.attributeName==="class"&&U2(f.target)){var p=Ja(Gf(f.target)),g=p.prefix,w=p.iconName;f.target.setAttribute(Bf,g||c),w&&f.target.setAttribute(Wf,w)}else F2(f.target)&&i(f.target)})}}),Yt&&pa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W2(){pa&&pa.disconnect()}function V2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function G2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ja(Gf(e));return i.prefix||(i.prefix=Tn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=S2(i.prefix,e.innerText)||Xf(i.prefix,pc(e.innerText))),!i.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function K2(e){var t=Jr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||lo()):(t["aria-hidden"]="true",t.focusable="false")),t}function Y2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=G2(e),r=n.iconName,i=n.prefix,o=n.rest,s=K2(e),a=gc("parseNodeAttributes",{},e),l=t.styleParser?V2(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var X2=ft.styles;function Yv(e){var t=x.autoReplaceSvg==="nest"?gp(e,{styleParser:!1}):gp(e);return~t.extra.classes.indexOf(xv)?Bt("generateLayersText",e,t):Bt("generateSvgReplacementMutation",e,t)}var Cn=new Set;Vf.map(function(e){Cn.add("fa-".concat(e))});Object.keys(io[Y]).map(Cn.add.bind(Cn));Object.keys(io[re]).map(Cn.add.bind(Cn));Cn=To(Cn);function vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(op,"-").concat(f))},i=function(f){return n.remove("".concat(op,"-").concat(f))},o=x.autoFetchSvg?Cn:Vf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(X2));o.includes("fa")||o.push("fa");var s=[".".concat(xv,":not([").concat(rr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(rr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Jr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Jf.begin("onTree"),u=a.reduce(function(c,f){try{var p=Yv(f);p&&c.push(p)}catch(g){Nv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){Gv(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function Q2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yv(e).then(function(n){n&&Gv([n],t)})}function q2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:vc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:vc(i||{})),e(r,C(C({},n),{},{mask:i}))}}var J2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,y=n.classes,E=y===void 0?[]:y,h=n.attributes,d=h===void 0?{}:h,m=n.styles,v=m===void 0?{}:m;if(t){var k=t.prefix,I=t.iconName,T=t.icon;return Za(C({type:"icon"},t),function(){return ir("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(p?d["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(w||lo()):(d["aria-hidden"]="true",d.focusable="false")),qf({icons:{main:yc(T),mask:l?yc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:I,transform:C(C({},wt),i),symbol:s,title:p,maskId:c,titleId:w,extra:{attributes:d,styles:v,classes:E}})})}},Z2={mixout:function(){return{icon:q2(J2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vp,n.nodeCallback=Q2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,s=o===void 0?function(){}:o;return vp(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,w){Promise.all([wc(i,a),c.iconName?wc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=zf(y,2),h=E[0],d=E[1];g([n,qf({icons:{main:h,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Qa(a);l.length>0&&(i.style=l);var u;return Kf(s)&&(u=Bt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},ek={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Za({type:"layer"},function(){ir("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(To(o)).join(" ")},children:s}]})}}}},tk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Za({type:"counter",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),b2({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(To(a))}})})}}}},nk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?wt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Za({type:"text",content:n},function(){return ir("beforeDOMElementCreation",{content:n,params:r}),fp({content:n,transform:C(C({},wt),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(x.cssPrefix,"-layers-text")].concat(To(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(Cv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return x.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,fp({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},rk=new RegExp('"',"ug"),yp=[1105920,1112319];function ik(e){var t=e.replace(rk,""),n=v2(t,0),r=n>=yp[0]&&n<=yp[1],i=t.length===2?t[0]===t[1]:!1;return{value:pc(i?t[0]:t),isSecondary:r||i}}function wp(e,t){var n="".concat(G_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Jr(e.children),s=o.filter(function(T){return T.getAttribute(hc)===t})[0],a=In.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(q_),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?re:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?oo[p][l[2].toLowerCase()]:J_[p][u],w=ik(f),y=w.value,E=w.isSecondary,h=l[0].startsWith("FontAwesome"),d=Xf(g,y),m=d;if(h){var v=I2(y);v.iconName&&v.prefix&&(d=v.iconName,g=v.prefix)}if(d&&!E&&(!s||s.getAttribute(Bf)!==g||s.getAttribute(Wf)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var k=Y2(),I=k.extra;I.attributes[hc]=t,wc(d,g).then(function(T){var O=qf(C(C({},k),{},{icons:{main:T,mask:Qf()},prefix:g,iconName:m,extra:I,watchable:!0})),F=Q.createElement("svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=O.map(function(L){return Ao(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ok(e){return Promise.all([wp(e,"::before"),wp(e,"::after")])}function sk(e){return e.parentNode!==document.head&&!~Y_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(hc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _p(e){if(Yt)return new Promise(function(t,n){var r=Jr(e.querySelectorAll("*")).filter(sk).map(ok),i=Jf.begin("searchPseudoElements");Kv(),Promise.all(r).then(function(){i(),kc(),t()}).catch(function(){i(),kc(),n()})})}var ak={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_p,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;x.searchPseudoElements&&_p(i)}}},kp=!1,lk={mixout:function(){return{dom:{unwatch:function(){Kv(),kp=!0}}}},hooks:function(){return{bootstrap:function(){mp(gc("mutationObserverCallbacks",{}))},noAuto:function(){W2()},watch:function(n){var r=n.observeMutationsRoot;kp?kc():mp(gc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ep=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},uk={mixout:function(){return{parse:{transform:function(n){return Ep(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ep(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:p};return{tag:"g",attributes:C({},g.outer),children:[{tag:"g",attributes:C({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),g.path)}]}]}}}},Ql={x:0,y:0,width:"100%",height:"100%"};function Sp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ck(e){return e.tag==="g"?e.children:[e]}var fk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ja(i.split(" ").map(function(s){return s.trim()})):Qf();return o.prefix||(o.prefix=Tn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,p=s.icon,g=u2({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:C(C({},Ql),{},{fill:"white"})},y=c.children?{children:c.children.map(Sp)}:{},E={tag:"g",attributes:C({},g.inner),children:[Sp(C({tag:c.tag,attributes:C(C({},c.attributes),g.path)},y))]},h={tag:"g",attributes:C({},g.outer),children:[E]},d="mask-".concat(a||lo()),m="clip-".concat(a||lo()),v={tag:"mask",attributes:C(C({},Ql),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:ck(p)},v]};return r.push(k,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Ql)}),{children:r,attributes:i}}}},dk={provides:function(t){var n=!1;In.matchMedia&&(n=In.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=C(C({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:C(C({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},pk=[d2,Z2,ek,tk,nk,ak,lk,uk,fk,dk,hk];A2(pk,{mixoutsTo:Qe});Qe.noAuto;Qe.config;Qe.library;Qe.dom;var Ec=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var mk=Qe.icon;Qe.layer;Qe.text;Qe.counter;var M={},gk={get exports(){return M},set exports(e){M=e}},vk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yk=vk,wk=yk;function Xv(){}function Qv(){}Qv.resetWarningCache=Xv;var _k=function(){function e(r,i,o,s,a,l){if(l!==wk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qv,resetWarningCache:Xv};return n.PropTypes=n,n};gk.exports=_k();function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(Object(n),!0).forEach(function(r){Cr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ma(e){return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ma(e)}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ek(e,t){if(e==null)return{};var n=kk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sc(e){return Sk(e)||Ik(e)||Tk(e)||Ck()}function Sk(e){if(Array.isArray(e))return Ic(e)}function Ik(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tk(e,t){if(e){if(typeof e=="string")return Ic(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ic(e,t)}}function Ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ck(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ak(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,g=e.inverse,w=e.border,y=e.listItem,E=e.flip,h=e.size,d=e.rotation,m=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":w,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Cr(t,"fa-".concat(h),typeof h<"u"&&h!==null),Cr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Cr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Cr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(k){return v[k]?k:null}).filter(function(k){return k})}function Pk(e){return e=e-0,e===e}function qv(e){return Pk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Nk=["style"];function xk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ok(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=qv(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[xk(i)]=o:t[i]=o,t},{})}function Jv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Jv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Ok(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[qv(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=Ek(n,Nk);return i.attrs.style=cn(cn({},i.attrs.style),s),e.apply(void 0,[t.tag,cn(cn({},i.attrs),a)].concat(Sc(r)))}var Zv=!1;try{Zv=!0}catch{}function Rk(){if(!Zv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tp(e){if(e&&ma(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ec.icon)return Ec.icon(e);if(e===null)return null;if(e&&ma(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ql(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Cr({},e,t):{}}var An=Kn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Tp(n),c=ql("classes",[].concat(Sc(Ak(e)),Sc(o.split(" ")))),f=ql("transform",typeof e.transform=="string"?Ec.transform(e.transform):e.transform),p=ql("mask",Tp(r)),g=mk(u,cn(cn(cn(cn({},c),f),p),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return Rk("Could not find icon",u),null;var w=g.abstract,y={ref:t};return Object.keys(e).forEach(function(E){An.defaultProps.hasOwnProperty(E)||(y[E]=e[E])}),Dk(w[0],y)});An.displayName="FontAwesomeIcon";An.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};An.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Dk=Jv.bind(null,Kn.createElement),bk={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},Lk=bk,Mk={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},$k=Mk,Uk={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},Fk=Uk,ey={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};const jk=e=>{var a;const{types:t,todo:n,deleteTodoTask:r,toggleCompleteTask:i,editTodoTask:o}=e,s=(a=t.find(l=>l.type===n.nType))==null?void 0:a.color;return B("div",{className:`TodoItem ${n.completed&&"completed"}`,children:[N("div",{className:"TodoItem__type-color",onClick:()=>i(n.id),style:{backgroundColor:s??"gray"}}),B("div",{className:"TodoItem__container",onClick:()=>i(n.id),children:[" ",B("p",{className:`${n.completed&&"completed"}`,children:[n.task," / ",n.nType?n.nType:"No-cat"]})]}),B("div",{className:"TodoItem__icons",children:[N(An,{icon:$k,onClick:()=>o(n.id)}),N(An,{icon:ey,onClick:()=>r(n.id)})]})]})},zk=e=>{const{editTask:t,task:n,types:r}=e,[i,o]=ie.useState(n.task),[s,a]=ie.useState(n.nType),[l,u]=ie.useState(n.date);return B("form",{className:"EditTodoForm",onSubmit:f=>{f.preventDefault(),t(i,s,l,n.id)},children:[B("div",{className:"EditTodoForm__Task",children:[N("input",{type:"text",value:i,placeholder:"Update task",className:"EditTodoForm__Task__input",onChange:f=>o(f.target.value)}),N("button",{type:"submit",className:"add-btn",children:"Update"})]}),B("div",{className:"EditTodoForm__CatDate",children:[N("div",{className:"EditTodoForm__CatDate__category",children:N("select",{id:n.id,name:"type",value:s,onChange:f=>a(f.target.value),children:r.map(f=>N("option",{value:f.type,children:f.type},f.id))})}),N("div",{className:"EditTodoForm__CatDate__date",children:N("input",{type:"date",id:"start",name:"trip-start",defaultValue:n.date,onChange:f=>u(f.target.value),min:"2018-01-01",max:"2099-12-31"})})," "]})]})},Hk=e=>{const{date:t,types:n,todos:r,deleteTodoTask:i,toggleCompleteTask:o,editTodoTask:s,finishEditTask:a}=e,l=r.length,c=(r.filter(g=>g.completed).length/l*100).toFixed(0),f=new Date().toLocaleDateString("en-GB"),p=new Date(t).toLocaleDateString("en-GB");return B("div",{className:`Daily-divider ${c==="100"&&"-completed-day"}`,children:[B("div",{className:"Daily-divider__Header",children:[B("h3",{className:`Daily-divider__Header__Title ${p===f?"todayDate":""}`,children:[" ",new Date(t).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})]}),B("p",{className:"Daily-divider__Header__Title",children:["Day ",c,"% completed"]})]}),N("ul",{children:r.map(g=>g.isEditing?N(zk,{task:g,types:n,editTask:a},g.task):N(jk,{todo:g,types:n,editTodoTask:s,toggleCompleteTask:o,deleteTodoTask:i},g.task))})]})},Bk=e=>{const{week:t,types:n,todos:r,deleteTodoTask:i,toggleCompleteTask:o,editTodoTask:s,finishEditTask:a}=e,[l,u]=ie.useState(""),[c,f]=ie.useState(!1),[p,g]=ie.useState(!1);ie.useEffect(()=>{const v=localStorage.getItem(`${t}-weekObjective`);v&&u(v)},[]),Kn.useEffect(()=>{localStorage.setItem(`${t}-weekObjective`,l)},[l]);const w=v=>{v.preventDefault(),u(l),localStorage.setItem(`${t}-weekObjective`,l),f(!1)},y=[...new Set(r.map(v=>v.date))],E=[...new Set(r.map(v=>v))],d=(E.filter(v=>v.completed).length/E.length*100).toFixed(0),m=parseInt(d)-100;return B("div",{className:"Weekly-divider",children:[B("div",{className:"Weekly-divider__Header",children:[B("div",{className:`Weekly-divider__Header__Titles ${d==="100"&&"Weekly-divider__Header__Titles-complete"}`,style:{background:`repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${d}%, #008b8e ${m}%, #008b8e 100%)`,transition:"background 0.5s ease-in-out"},children:[N("h3",{children:"Week plan"}),B("p",{children:["Week is ",d,"% completed"]})]}),N("div",{className:`Weekly-divider__Header__EditableContent ${d==="100"&&"Weekly-divider__Header__EditableContent-complete"}`,children:c?B(mu,{children:[" ",N("textarea",{className:"Weekly-divider__Header__EditableContent__Editinginput",value:l,onChange:v=>u(v.target.value)}),N("button",{onClick:w,children:"edit"})]}):B(mu,{children:[" ",N("p",{className:"Weekly-divider__Header__EditableContent__paragraph",children:l||"Write your week objective"}),B("div",{className:"editOrCollapse",children:[N("button",{onClick:()=>f(!0),children:"edit"}),N(An,{icon:p?Lk:Fk,onClick:()=>g(!p)})]})]})})]}),N("div",{style:{maxHeight:p?0:"2000px",transition:"max-height 0.7s"},className:"Weekly-divider__Content",children:y.map(v=>N(Hk,{date:v,types:n,editTodoTask:s,toggleCompleteTask:o,deleteTodoTask:i,finishEditTask:a,todos:r.filter(k=>k.date===v)},v))})]})},Wk=({addType:e})=>{const[t,n]=ie.useState(""),[r,i]=ie.useState("#ABABAB");return N("form",{className:"TypeForm",onSubmit:s=>{s.preventDefault(),t&&(e(t,r),n(""),i("#ABABAB"))},children:B("div",{className:"TypeForm__Task type-form-organizer",children:[N("input",{type:"color",id:"favcolor",name:"favcolor",value:r,onChange:s=>i(s.target.value)}),N("input",{type:"text",value:t,placeholder:"New Category",onChange:s=>n(s.target.value)}),N("button",{type:"submit",className:"add-btn",children:"Add Type"})]})})},Vk=e=>{const{types:t,deleteType:n}=e;return N(mu,{children:t.map(r=>B("div",{className:"TodoItem",children:[N("div",{style:{width:"25px",height:"25px",borderRadius:"8px",background:r.color}}),N("p",{children:r.type}),N("div",{children:N(An,{icon:ey,onClick:()=>n(r.id)},r.id)})]},`typeItem-${r.id}`))})};/**
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
 */const ty=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Gk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ny={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[c],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ty(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new Kk;const p=o<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Kk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yk=function(e){const t=ty(e);return ny.encodeByteArray(t,!0)},ga=function(e){return Yk(e).replace(/\./g,"")},ry=function(e){try{return ny.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qk=()=>Xk().__FIREBASE_DEFAULTS__,qk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ry(e[1]);return t&&JSON.parse(t)},ed=()=>{try{return Qk()||qk()||Jk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iy=e=>{var t,n;return(n=(t=ed())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Zk=e=>{const t=iy(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},eE=()=>{var e;return(e=ed())===null||e===void 0?void 0:e.config},oy=e=>{var t;return(t=ed())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class tE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function nE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ga(JSON.stringify(n)),ga(JSON.stringify(s)),a].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function iE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function oE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){const e=xe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function aE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const uE="FirebaseError";class Xt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=uE,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?cE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xt(i,a,r)}}function cE(e,t){return e.replace(fE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const fE=/\{\$([^}]+)}/g;function dE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function va(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Cp(o)&&Cp(s)){if(!va(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cp(e){return e!==null&&typeof e=="object"}/**
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
 */function No(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Si(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Ii(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function hE(e,t){const n=new pE(e,t);return n.subscribe.bind(n)}class pE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Jl),i.error===void 0&&(i.error=Jl),i.complete===void 0&&(i.complete=Jl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Jl(){}/**
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
 */function Qt(e){return e&&e._delegate?e._delegate:e}class or{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class gE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new tE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yE(t))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Un){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Un){return this.instances.has(t)}getOptions(t=Un){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Un){return this.component?this.component.multipleInstances?t:Un:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vE(e){return e===Un?void 0:e}function yE(e){return e.instantiationMode==="EAGER"}/**
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
 */class wE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const _E={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},kE=H.INFO,EE={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},SE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=EE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class td{constructor(t){this.name=t,this._logLevel=kE,this._logHandler=SE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_E[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const IE=(e,t)=>t.some(n=>e instanceof n);let Ap,Pp;function TE(){return Ap||(Ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CE(){return Pp||(Pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sy=new WeakMap,Tc=new WeakMap,ay=new WeakMap,Zl=new WeakMap,nd=new WeakMap;function AE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(wn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&sy.set(n,e)}).catch(()=>{}),nd.set(t,e),t}function PE(e){if(Tc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Tc.set(e,t)}let Cc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ay.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function NE(e){Cc=e(Cc)}function xE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(eu(this),t,...n);return ay.set(r,t.sort?t.sort():[t]),wn(r)}:CE().includes(e)?function(...t){return e.apply(eu(this),t),wn(sy.get(this))}:function(...t){return wn(e.apply(eu(this),t))}}function OE(e){return typeof e=="function"?xE(e):(e instanceof IDBTransaction&&PE(e),IE(e,TE())?new Proxy(e,Cc):e)}function wn(e){if(e instanceof IDBRequest)return AE(e);if(Zl.has(e))return Zl.get(e);const t=OE(e);return t!==e&&(Zl.set(e,t),nd.set(t,e)),t}const eu=e=>nd.get(e);function RE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=wn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(wn(s.result),l.oldVersion,l.newVersion,wn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const DE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],tu=new Map;function Np(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(tu.get(t))return tu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tu.set(t,o),o}NE(e=>({...e,get:(t,n,r)=>Np(t,n)||e.get(t,n,r),has:(t,n)=>!!Np(t,n)||e.has(t,n)}));/**
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
 */class LE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ME(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ME(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ac="@firebase/app",xp="0.9.9";/**
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
 */const sr=new td("@firebase/app"),$E="@firebase/app-compat",UE="@firebase/analytics-compat",FE="@firebase/analytics",jE="@firebase/app-check-compat",zE="@firebase/app-check",HE="@firebase/auth",BE="@firebase/auth-compat",WE="@firebase/database",VE="@firebase/database-compat",GE="@firebase/functions",KE="@firebase/functions-compat",YE="@firebase/installations",XE="@firebase/installations-compat",QE="@firebase/messaging",qE="@firebase/messaging-compat",JE="@firebase/performance",ZE="@firebase/performance-compat",eS="@firebase/remote-config",tS="@firebase/remote-config-compat",nS="@firebase/storage",rS="@firebase/storage-compat",iS="@firebase/firestore",oS="@firebase/firestore-compat",sS="firebase",aS="9.21.0";/**
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
 */const Pc="[DEFAULT]",lS={[Ac]:"fire-core",[$E]:"fire-core-compat",[FE]:"fire-analytics",[UE]:"fire-analytics-compat",[zE]:"fire-app-check",[jE]:"fire-app-check-compat",[HE]:"fire-auth",[BE]:"fire-auth-compat",[WE]:"fire-rtdb",[VE]:"fire-rtdb-compat",[GE]:"fire-fn",[KE]:"fire-fn-compat",[YE]:"fire-iid",[XE]:"fire-iid-compat",[QE]:"fire-fcm",[qE]:"fire-fcm-compat",[JE]:"fire-perf",[ZE]:"fire-perf-compat",[eS]:"fire-rc",[tS]:"fire-rc-compat",[nS]:"fire-gcs",[rS]:"fire-gcs-compat",[iS]:"fire-fst",[oS]:"fire-fst-compat","fire-js":"fire-js",[sS]:"fire-js-all"};/**
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
 */const ya=new Map,Nc=new Map;function uS(e,t){try{e.container.addComponent(t)}catch(n){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Kr(e){const t=e.name;if(Nc.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;Nc.set(t,e);for(const n of ya.values())uS(n,e);return!0}function rd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const cS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new Po("app","Firebase",cS);/**
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
 */class fS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=aS;function ly(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=eE()),!n)throw _n.create("no-options");const o=ya.get(i);if(o){if(va(n,o.options)&&va(r,o.config))return o;throw _n.create("duplicate-app",{appName:i})}const s=new wE(i);for(const l of Nc.values())s.addComponent(l);const a=new fS(n,r,s);return ya.set(i,a),a}function uy(e=Pc){const t=ya.get(e);if(!t&&e===Pc)return ly();if(!t)throw _n.create("no-app",{appName:e});return t}function kn(e,t,n){var r;let i=(r=lS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Kr(new or(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const dS="firebase-heartbeat-database",hS=1,uo="firebase-heartbeat-store";let nu=null;function cy(){return nu||(nu=RE(dS,hS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(uo)}}}).catch(e=>{throw _n.create("idb-open",{originalErrorMessage:e.message})})),nu}async function pS(e){try{return(await cy()).transaction(uo).objectStore(uo).get(fy(e))}catch(t){if(t instanceof Xt)sr.warn(t.message);else{const n=_n.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sr.warn(n.message)}}}async function Op(e,t){try{const r=(await cy()).transaction(uo,"readwrite");return await r.objectStore(uo).put(t,fy(e)),r.done}catch(n){if(n instanceof Xt)sr.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function fy(e){return`${e.name}!${e.options.appId}`}/**
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
 */const mS=1024,gS=30*24*60*60*1e3;class vS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=gS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rp(),{heartbeatsToSend:n,unsentEntries:r}=yS(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rp(){return new Date().toISOString().substring(0,10)}function yS(e,t=mS){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Dp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Op(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Dp(e){return ga(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function _S(e){Kr(new or("platform-logger",t=>new LE(t),"PRIVATE")),Kr(new or("heartbeat",t=>new vS(t),"PRIVATE")),kn(Ac,xp,e),kn(Ac,xp,"esm2017"),kn("fire-js","")}_S("");var kS="firebase",ES="9.21.0";/**
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
 */kn(kS,ES,"app");function id(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function dy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SS=dy,hy=new Po("auth","Firebase",dy());/**
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
 */const wa=new td("@firebase/auth");function IS(e,...t){wa.logLevel<=H.WARN&&wa.warn(`Auth (${Zr}): ${e}`,...t)}function $s(e,...t){wa.logLevel<=H.ERROR&&wa.error(`Auth (${Zr}): ${e}`,...t)}/**
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
 */function it(e,...t){throw od(e,...t)}function St(e,...t){return od(e,...t)}function py(e,t,n){const r=Object.assign(Object.assign({},SS()),{[t]:n});return new Po("auth","Firebase",r).create(t,{appName:e.name})}function TS(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&it(e,"argument-error"),py(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function od(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return hy.create(e,...t)}function R(e,t,...n){if(!e)throw od(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $s(t),new Error(t)}function Wt(e,t){e||Rt(t)}/**
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
 */function xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function CS(){return bp()==="http:"||bp()==="https:"}function bp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CS()||iE()||"connection"in navigator)?navigator.onLine:!0}function PS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class xo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wt(n>t,"Short delay should be less than long delay!"),this.isMobile=rE()||oE()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sd(e,t){Wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class my{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new xo(3e4,6e4);function ei(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ti(e,t,n,r,i={}){return gy(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=No(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),my.fetch()(vy(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function gy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),t);try{const i=new OS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ys(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ys(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ys(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw py(e,c,u);it(e,c)}}catch(i){if(i instanceof Xt)throw i;it(e,"network-request-failed",{message:String(i)})}}async function Oo(e,t,n,r,i={}){const o=await ti(e,t,n,r,i);return"mfaPendingCredential"in o&&it(e,"multi-factor-auth-required",{_serverResponse:o}),o}function vy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?sd(e.config,i):`${e.config.apiScheme}://${i}`}class OS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function RS(e,t){return ti(e,"POST","/v1/accounts:delete",t)}async function DS(e,t){return ti(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ui(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bS(e,t=!1){const n=Qt(e),r=await n.getIdToken(t),i=ad(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ui(ru(i.auth_time)),issuedAtTime:Ui(ru(i.iat)),expirationTime:Ui(ru(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ru(e){return Number(e)*1e3}function ad(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const i=ry(n);return i?JSON.parse(i):($s("Failed to decode base64 JWT payload"),null)}catch(i){return $s("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function LS(e){const t=ad(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function co(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xt&&MS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function MS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class $S{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _a(e){var t;const n=e.auth,r=await e.getIdToken(),i=await co(e,DS(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?jS(o.providerUserInfo):[],a=FS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new yy(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function US(e){const t=Qt(e);await _a(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function FS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function jS(e){return e.map(t=>{var{providerId:n}=t,r=id(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zS(e,t){const n=await gy(e,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=vy(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",my.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):LS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await zS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new fo;return r&&(R(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(R(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Zt(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Qn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=id(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $S(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await co(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return bS(this,t)}reload(){return US(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await co(this,RS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:k,providerData:I,stsTokenManager:T}=n;R(m&&T,t,"internal-error");const O=fo.fromJSON(this.name,T);R(typeof m=="string",t,"internal-error"),Zt(f,t.name),Zt(p,t.name),R(typeof v=="boolean",t,"internal-error"),R(typeof k=="boolean",t,"internal-error"),Zt(g,t.name),Zt(w,t.name),Zt(y,t.name),Zt(E,t.name),Zt(h,t.name),Zt(d,t.name);const F=new Qn({uid:m,auth:t,email:p,emailVerified:v,displayName:f,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:h,lastLoginAt:d});return I&&Array.isArray(I)&&(F.providerData=I.map(L=>Object.assign({},L))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const o=new Qn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await _a(o),o}}/**
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
 */const Lp=new Map;function Dt(e){Wt(e instanceof Function,"Expected a class definition");let t=Lp.get(e);return t?(Wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lp.set(e,t),t)}/**
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
 */class wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}wy.type="NONE";const Mp=wy;/**
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
 */function Us(e,t,n){return`firebase:${e}:${t}:${n}`}class Lr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Us(this.userKey,i.apiKey,o),this.fullPersistenceKey=Us("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Lr(Dt(Mp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Dt(Mp);const s=Us(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Qn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Lr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Lr(o,t,r))}}/**
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
 */function $p(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ey(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_y(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Iy(t))return"Blackberry";if(Ty(t))return"Webos";if(ld(t))return"Safari";if((t.includes("chrome/")||ky(t))&&!t.includes("edge/"))return"Chrome";if(Sy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _y(e=xe()){return/firefox\//i.test(e)}function ld(e=xe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ky(e=xe()){return/crios\//i.test(e)}function Ey(e=xe()){return/iemobile/i.test(e)}function Sy(e=xe()){return/android/i.test(e)}function Iy(e=xe()){return/blackberry/i.test(e)}function Ty(e=xe()){return/webos/i.test(e)}function el(e=xe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function HS(e=xe()){var t;return el(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function BS(){return sE()&&document.documentMode===10}function Cy(e=xe()){return el(e)||Sy(e)||Ty(e)||Iy(e)||/windows phone/i.test(e)||Ey(e)}function WS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ay(e,t=[]){let n;switch(e){case"Browser":n=$p(xe());break;case"Worker":n=`${$p(xe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}async function Py(e,t){return ti(e,"GET","/v2/recaptchaConfig",ei(e,t))}function Up(e){return e!==void 0&&e.enterprise!==void 0}class Ny{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function VS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function xy(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=St("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",VS().appendChild(r)})}function GS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const KS="https://www.google.com/recaptcha/enterprise.js?render=",YS="recaptcha-enterprise",XS="NO_RECAPTCHA";class Oy{constructor(t){this.type=YS,this.auth=On(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Py(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ny(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Up(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(XS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Up(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}xy(KS+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function ka(e,t,n,r=!1){const i=new Oy(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
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
 */class QS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class qS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fp(this),this.idTokenSubscription=new Fp(this),this.beforeStateQueue=new QS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await _a(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=PS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qt(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}async initializeRecaptchaConfig(){const t=await Py(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ny(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Oy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Po("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return R(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&IS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function On(e){return Qt(e)}class Fp{constructor(t){this.auth=t,this.observer=null,this.addObserver=hE(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function JS(e,t){const n=rd(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(va(o,t??{}))return i;it(i,"already-initialized")}return n.initialize({options:t})}function ZS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function eI(e,t,n){const r=On(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Ry(t),{host:s,port:a}=tI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nI()}function Ry(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tI(e){const t=Ry(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:jp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:jp(s)}}}function jp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ud{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}async function rI(e,t){return ti(e,"POST","/v1/accounts:update",t)}/**
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
 */async function iu(e,t){return Oo(e,"POST","/v1/accounts:signInWithPassword",ei(e,t))}/**
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
 */async function iI(e,t){return Oo(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}async function oI(e,t){return Oo(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}/**
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
 */class ho extends ud{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ho(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ho(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ka(t,r,"signInWithPassword");return iu(t,i)}else return iu(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await ka(t,r,"signInWithPassword");return iu(t,o)}else return Promise.reject(i)});case"emailLink":return iI(t,{email:this._email,oobCode:this._password});default:it(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return rI(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oI(t,{idToken:n,email:this._email,oobCode:this._password});default:it(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Mr(e,t){return Oo(e,"POST","/v1/accounts:signInWithIdp",ei(e,t))}/**
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
 */const sI="http://localhost";class ar extends ud{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=id(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ar(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Mr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Mr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Mr(t,n)}buildRequest(){const t={requestUri:sI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=No(n)}return t}}/**
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
 */function aI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lI(e){const t=Si(Ii(e)).link,n=t?Si(Ii(t)).deep_link_id:null,r=Si(Ii(e)).deep_link_id;return(r?Si(Ii(r)).link:null)||r||n||t||e}class cd{constructor(t){var n,r,i,o,s,a;const l=Si(Ii(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=aI((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=lI(t);try{return new cd(n)}catch{return null}}}/**
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
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(t,n){return ho._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=cd.parseLink(n);return R(r,"argument-error"),ho._fromEmailAndCode(t,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ro extends fd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends Ro{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return on.credentialFromTaggedObject(t)}static credentialFromError(t){return on.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return on.credential(t.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ar._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class sn extends Ro{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return sn.credentialFromTaggedObject(t)}static credentialFromError(t){return sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return sn.credential(t.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class an extends Ro{constructor(){super("twitter.com")}static credential(t,n){return ar._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return an.credentialFromTaggedObject(t)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function Fs(e,t){return Oo(e,"POST","/v1/accounts:signUp",ei(e,t))}/**
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
 */class Vt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Qn._fromIdTokenResponse(t,r,i),s=zp(r);return new Vt({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=zp(r);return new Vt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function zp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function uI(e){var t;const n=On(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Fs(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ea extends Xt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ea(t,n,r,i)}}function Dy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(e,o,t,r):o})}async function cI(e,t,n=!1){const r=await co(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",r)}/**
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
 */async function fI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await co(e,Dy(r,i,t,e),n);R(o.idToken,r,"internal-error");const s=ad(o.idToken);R(s,r,"internal-error");const{sub:a}=s;return R(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&it(r,"user-mismatch"),o}}/**
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
 */async function by(e,t,n=!1){const r="signIn",i=await Dy(e,r,t),o=await Vt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function dI(e,t){return by(On(e),t)}async function hI(e,t,n){var r;const i=On(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ka(i,o,"signUpPassword");s=Fs(i,u)}else s=Fs(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ka(i,o,"signUpPassword");return Fs(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await Vt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function pI(e,t,n){return dI(Qt(e),ni.credential(t,n))}function mI(e,t,n,r){return Qt(e).onIdTokenChanged(t,n,r)}function gI(e,t,n){return Qt(e).beforeAuthStateChanged(t,n)}function vI(e,t,n,r){return Qt(e).onAuthStateChanged(t,n,r)}function yI(e){return Qt(e).signOut()}const Sa="__sak";/**
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
 */class Ly{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wI(){const e=xe();return ld(e)||el(e)}const _I=1e3,kI=10;class My extends Ly{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wI()&&WS(),this.fallbackToPolling=Cy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);BS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}My.type="LOCAL";const EI=My;/**
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
 */class $y extends Ly{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$y.type="SESSION";const Uy=$y;/**
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
 */function SI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new tl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await SI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function dd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class II{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=dd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function It(){return window}function TI(e){It().location.href=e}/**
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
 */function Fy(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function PI(){return Fy()?self:null}/**
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
 */const jy="firebaseLocalStorageDb",NI=1,Ia="firebaseLocalStorage",zy="fbase_key";class Do{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(e,t){return e.transaction([Ia],t?"readwrite":"readonly").objectStore(Ia)}function xI(){const e=indexedDB.deleteDatabase(jy);return new Do(e).toPromise()}function Oc(){const e=indexedDB.open(jy,NI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ia,{keyPath:zy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ia)?t(r):(r.close(),await xI(),t(await Oc()))})})}async function Hp(e,t,n){const r=nl(e,!0).put({[zy]:t,value:n});return new Do(r).toPromise()}async function OI(e,t){const n=nl(e,!1).get(t),r=await new Do(n).toPromise();return r===void 0?null:r.value}function Bp(e,t){const n=nl(e,!0).delete(t);return new Do(n).toPromise()}const RI=800,DI=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>DI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(PI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Oc();return await Hp(t,Sa,"1"),await Bp(t,Sa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>OI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=nl(i,!1).getAll();return new Do(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const bI=Hy;new xo(3e4,6e4);/**
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
 */function By(e,t){return t?Dt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class hd extends ud{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Mr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function LI(e){return by(e.auth,new hd(e),e.bypassAuthState)}function MI(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),fI(n,new hd(e),e.bypassAuthState)}async function $I(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),cI(n,new hd(e),e.bypassAuthState)}/**
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
 */class Wy{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return $I;case"reauthViaPopup":case"reauthViaRedirect":return MI;default:it(this.auth,"internal-error")}}resolve(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UI=new xo(2e3,1e4);async function FI(e,t,n){const r=On(e);TS(e,t,fd);const i=By(r,n);return new Wn(r,"signInViaPopup",t,i).executeNotNull()}class Wn extends Wy{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const t=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,UI.get())};t()}}Wn.currentPopupAction=null;/**
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
 */const jI="pendingRedirect",js=new Map;class zI extends Wy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=js.get(this.auth._key());if(!t){try{const r=await HI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}js.set(this.auth._key(),t)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HI(e,t){const n=VI(t),r=WI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BI(e,t){js.set(e._key(),t)}function WI(e){return Dt(e._redirectPersistence)}function VI(e){return Us(jI,e.config.apiKey,e.name)}async function GI(e,t,n=!1){const r=On(e),i=By(r,t),s=await new zI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const KI=10*60*1e3;class YI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!XI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Vy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=KI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wp(t))}saveEventToCache(t){this.cachedEventUids.add(Wp(t)),this.lastProcessedEventTime=Date.now()}}function Wp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Vy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function XI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vy(e);default:return!1}}/**
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
 */async function QI(e,t={}){return ti(e,"GET","/v1/projects",t)}/**
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
 */const qI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JI=/^https?/;async function ZI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await QI(e);for(const n of t)try{if(eT(n))return}catch{}it(e,"unauthorized-domain")}function eT(e){const t=xc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!JI.test(n))return!1;if(qI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tT=new xo(3e4,6e4);function Vp(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function nT(e){return new Promise((t,n)=>{var r,i,o;function s(){Vp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(St(e,"network-request-failed"))},timeout:tT.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=It().gapi)===null||o===void 0)&&o.load)s();else{const a=GS("iframefcb");return It()[a]=()=>{gapi.load?s():n(St(e,"network-request-failed"))},xy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw zs=null,t})}let zs=null;function rT(e){return zs=zs||nT(e),zs}/**
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
 */const iT=new xo(5e3,15e3),oT="__/auth/iframe",sT="emulator/auth/iframe",aT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uT(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sd(t,sT):`https://${e.config.authDomain}/${oT}`,r={apiKey:t.apiKey,appName:e.name,v:Zr},i=lT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${No(r).slice(1)}`}async function cT(e){const t=await rT(e),n=It().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:uT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=St(e,"network-request-failed"),a=It().setTimeout(()=>{o(s)},iT.get());function l(){It().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const fT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,hT=600,pT="_blank",mT="http://localhost";class Gp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gT(e,t,n,r=dT,i=hT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=xe().toLowerCase();n&&(a=ky(u)?pT:n),_y(u)&&(t=t||mT,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(HS(u)&&a!=="_self")return vT(t||"",a),new Gp(null);const f=window.open(t||"",a,c);R(f,e,"popup-blocked");try{f.focus()}catch{}return new Gp(f)}function vT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yT="__/auth/handler",wT="emulator/auth/handler",_T=encodeURIComponent("fac");async function Kp(e,t,n,r,i,o){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(t instanceof fd){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",dE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof Ro){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${_T}=${encodeURIComponent(l)}`:"";return`${kT(e)}?${No(a).slice(1)}${u}`}function kT({config:e}){return e.emulator?sd(e,wT):`https://${e.authDomain}/${yT}`}/**
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
 */const ou="webStorageSupport";class ET{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=GI,this._overrideRedirectResult=BI}async _openPopup(t,n,r,i){var o;Wt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Kp(t,n,r,xc(),i);return gT(t,s,dd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Kp(t,n,r,xc(),i);return TI(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await cT(t),r=new YI(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ou,{type:ou},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ou];s!==void 0&&n(!!s),it(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cy()||ld()||el()}}const ST=ET;var Yp="@firebase/auth",Xp="0.23.1";/**
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
 */class IT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CT(e){Kr(new or("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;R(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),R(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ay(e)},u=new qS(r,i,o,l);return ZS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Kr(new or("auth-internal",t=>{const n=On(t.getProvider("auth").getImmediate());return(r=>new IT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Yp,Xp,TT(e)),kn(Yp,Xp,"esm2017")}/**
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
 */const AT=5*60,PT=oy("authIdTokenMaxAge")||AT;let Qp=null;const NT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PT)return;const i=n==null?void 0:n.token;Qp!==i&&(Qp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xT(e=uy()){const t=rd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=JS(e,{popupRedirectResolver:ST,persistence:[bI,EI,Uy]}),r=oy("authTokenSyncURL");if(r){const o=NT(r);gI(n,o,()=>o(n.currentUser)),mI(n,s=>o(s))}const i=iy("auth");return i&&eI(n,`http://${i}`),n}CT("Browser");var OT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,pd=pd||{},D=OT||self;function Ta(){}function rl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function bo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function RT(e){return Object.prototype.hasOwnProperty.call(e,su)&&e[su]||(e[su]=++DT)}var su="closure_uid_"+(1e9*Math.random()>>>0),DT=0;function bT(e,t,n){return e.call.apply(e.bind,arguments)}function LT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ae(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=bT:Ae=LT,Ae.apply(null,arguments)}function ws(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ge(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Rn(){this.s=this.s,this.o=this.o}var MT=0;Rn.prototype.s=!1;Rn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),MT!=0)&&RT(this)};Rn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gy=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function md(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function qp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Pe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var $T=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",Ta,t),D.removeEventListener("test",Ta,t)}catch{}return e}();function Ca(e){return/^[\s\xa0]*$/.test(e)}var Jp=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function au(e,t){return e<t?-1:e>t?1:0}function il(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return il().indexOf(e)!=-1}function gd(e){return gd[" "](e),e}gd[" "]=Ta;function Ky(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var UT=yt("Opera"),po=yt("Trident")||yt("MSIE"),Yy=yt("Edge"),Rc=Yy||po,Xy=yt("Gecko")&&!(il().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),FT=il().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Qy(){var e=D.document;return e?e.documentMode:void 0}var Dc;e:{var lu="",uu=function(){var e=il();if(Xy)return/rv:([^\);]+)(\)|;)/.exec(e);if(Yy)return/Edge\/([\d\.]+)/.exec(e);if(po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(FT)return/WebKit\/(\S+)/.exec(e);if(UT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(uu&&(lu=uu?uu[1]:""),po){var cu=Qy();if(cu!=null&&cu>parseFloat(lu)){Dc=String(cu);break e}}Dc=lu}var jT={};function zT(){return Ky(jT,9,function(){let e=0;const t=Jp(String(Dc)).split("."),n=Jp("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=au(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||au(i[2].length==0,o[2].length==0)||au(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}D.document&&po&&Qy();function mo(e,t){if(Pe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Xy){e:{try{gd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:HT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mo.$.h.call(this)}}ge(mo,Pe);var HT={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Lo="closure_listenable_"+(1e6*Math.random()|0),BT=0;function WT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++BT,this.fa=this.ia=!1}function ol(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function vd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function qy(e){const t={};for(const n in e)t[n]=e[n];return t}const Zp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jy(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<Zp.length;o++)n=Zp[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function sl(e){this.src=e,this.g={},this.h=0}sl.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Lc(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new WT(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function bc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Gy(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(ol(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Lc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var yd="closure_lm_"+(1e6*Math.random()|0),fu={};function Zy(e,t,n,r,i){if(r&&r.once)return t0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)Zy(e,t[o],n,r,i);return null}return n=kd(n),e&&e[Lo]?e.O(t,n,bo(r)?!!r.capture:!!r,i):e0(e,t,n,!1,r,i)}function e0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=bo(i)?!!i.capture:!!i,a=_d(e);if(a||(e[yd]=a=new sl(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=VT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)$T||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(r0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VT(){function e(n){return t.call(e.src,e.listener,n)}const t=GT;return e}function t0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)t0(e,t[o],n,r,i);return null}return n=kd(n),e&&e[Lo]?e.P(t,n,bo(r)?!!r.capture:!!r,i):e0(e,t,n,!0,r,i)}function n0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)n0(e,t[o],n,r,i);else r=bo(r)?!!r.capture:!!r,n=kd(n),e&&e[Lo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Lc(o,n,r,i),-1<n&&(ol(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=_d(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Lc(t,n,r,i)),(n=-1<e?t[e]:null)&&wd(n))}function wd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Lo])bc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(r0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=_d(t))?(bc(n,e),n.h==0&&(n.src=null,t[yd]=null)):ol(e)}}}function r0(e){return e in fu?fu[e]:fu[e]="on"+e}function GT(e,t){if(e.fa)e=!0;else{t=new mo(t,this);var n=e.listener,r=e.la||e.src;e.ia&&wd(e),e=n.call(r,t)}return e}function _d(e){return e=e[yd],e instanceof sl?e:null}var du="__closure_events_fn_"+(1e9*Math.random()>>>0);function kd(e){return typeof e=="function"?e:(e[du]||(e[du]=function(t){return e.handleEvent(t)}),e[du])}function me(){Rn.call(this),this.i=new sl(this),this.S=this,this.J=null}ge(me,Rn);me.prototype[Lo]=!0;me.prototype.removeEventListener=function(e,t,n,r){n0(this,e,t,n,r)};function ke(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Pe(t,e);else if(t instanceof Pe)t.target=t.target||e;else{var i=t;t=new Pe(r,e),Jy(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=_s(s,r,!0,t)&&i}if(s=t.g=e,i=_s(s,r,!0,t)&&i,i=_s(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=_s(s,r,!1,t)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ol(n[r]);delete e.g[t],e.h--}}this.J=null};me.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};me.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function _s(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&bc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ed=D.JSON.stringify;function KT(){var e=s0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class YT{constructor(){this.h=this.g=null}add(t,n){const r=i0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var i0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new XT,e=>e.reset());class XT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QT(e){D.setTimeout(()=>{throw e},0)}function o0(e,t){Mc||qT(),$c||(Mc(),$c=!0),s0.add(e,t)}var Mc;function qT(){var e=D.Promise.resolve(void 0);Mc=function(){e.then(JT)}}var $c=!1,s0=new YT;function JT(){for(var e;e=KT();){try{e.h.call(e.g)}catch(n){QT(n)}var t=i0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$c=!1}function al(e,t){me.call(this),this.h=e||1,this.g=t||D,this.j=Ae(this.qb,this),this.l=Date.now()}ge(al,me);S=al.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(Sd(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}S.N=function(){al.$.N.call(this),Sd(this),delete this.g};function Id(e,t,n){if(typeof e=="function")n&&(e=Ae(e,n));else if(e&&typeof e.handleEvent=="function")e=Ae(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function a0(e){e.g=Id(()=>{e.g=null,e.i&&(e.i=!1,a0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ZT extends Rn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:a0(this)}N(){super.N(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(e){Rn.call(this),this.h=e,this.g={}}ge(go,Rn);var em=[];function l0(e,t,n,r){Array.isArray(n)||(n&&(em[0]=n.toString()),n=em);for(var i=0;i<n.length;i++){var o=Zy(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function u0(e){vd(e.g,function(t,n){this.g.hasOwnProperty(n)&&wd(t)},e),e.g={}}go.prototype.N=function(){go.$.N.call(this),u0(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ll(){this.g=!0}ll.prototype.Ea=function(){this.g=!1};function eC(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function tC(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Ar(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+rC(e,n)+(r?" "+r:"")})}function nC(e,t){e.info(function(){return"TIMEOUT: "+t})}ll.prototype.info=function(){};function rC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Ed(n)}catch{return t}}var ri={},tm=null;function Td(){return tm=tm||new me}ri.Ta="serverreachability";function c0(e){Pe.call(this,ri.Ta,e)}ge(c0,Pe);function vo(e){const t=Td();ke(t,new c0(t))}ri.STAT_EVENT="statevent";function f0(e,t){Pe.call(this,ri.STAT_EVENT,e),this.stat=t}ge(f0,Pe);function Re(e){const t=Td();ke(t,new f0(t,e))}ri.Ua="timingevent";function d0(e,t){Pe.call(this,ri.Ua,e),this.size=t}ge(d0,Pe);function Mo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var Cd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ad(){}Ad.prototype.h=null;function nm(e){return e.h||(e.h=e.i())}function oC(){}var $o={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pd(){Pe.call(this,"d")}ge(Pd,Pe);function Nd(){Pe.call(this,"c")}ge(Nd,Pe);var Uc;function ul(){}ge(ul,Ad);ul.prototype.g=function(){return new XMLHttpRequest};ul.prototype.i=function(){return{}};Uc=new ul;function Uo(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new go(this),this.P=sC,e=Rc?125:void 0,this.V=new al(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new h0}function h0(){this.i=null,this.g="",this.h=!1}var sC=45e3,Fc={},Aa={};S=Uo.prototype;S.setTimeout=function(e){this.P=e};function jc(e,t,n){e.L=1,e.v=fl(Gt(t)),e.s=n,e.S=!0,p0(e,null)}function p0(e,t){e.G=Date.now(),Fo(e),e.A=Gt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),E0(n.i,"t",r),e.C=0,n=e.l.I,e.h=new h0,e.g=B0(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ZT(Ae(e.Pa,e,e.g),e.O)),l0(e.U,e.g,"readystatechange",e.nb),t=e.I?qy(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),vo(),eC(e.j,e.u,e.A,e.m,e.W,e.s)}S.nb=function(e){e=e.target;const t=this.M;t&&bt(e)==3?t.l():this.Pa(e)};S.Pa=function(e){try{if(e==this.g)e:{const c=bt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Rc||this.g&&(this.h.h||this.g.ja()||sm(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?vo(3):vo(2)),cl(this);var n=this.g.da();this.aa=n;t:if(m0(this)){var r=sm(this.g);e="";var i=r.length,o=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Fi(this);var s="";break t}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,tC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ca(a)){var u=a;break t}}u=null}if(n=u)Ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zc(this,n);else{this.i=!1,this.o=3,Re(12),Vn(this),Fi(this);break e}}this.S?(g0(this,c,s),Rc&&this.i&&c==3&&(l0(this.U,this.V,"tick",this.mb),this.V.start())):(Ar(this.j,this.m,s,null),zc(this,s)),c==4&&Vn(this),this.i&&!this.J&&(c==4?F0(this.l,this):(this.i=!1,Fo(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Re(12)):(this.o=0,Re(13)),Vn(this),Fi(this)}}}catch{}finally{}};function m0(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function g0(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=aC(e,n),i==Aa){t==4&&(e.o=4,Re(14),r=!1),Ar(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Fc){e.o=4,Re(15),Ar(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ar(e.j,e.m,i,null),zc(e,i);m0(e)&&i!=Aa&&i!=Fc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Re(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Md(t),t.L=!0,Re(11))):(Ar(e.j,e.m,n,"[Invalid Chunked Response]"),Vn(e),Fi(e))}S.mb=function(){if(this.g){var e=bt(this.g),t=this.g.ja();this.C<t.length&&(cl(this),g0(this,e,t),this.i&&e!=4&&Fo(this))}};function aC(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Aa:(n=Number(t.substring(n,r)),isNaN(n)?Fc:(r+=1,r+n>t.length?Aa:(t=t.substr(r,n),e.C=r+n,t)))}S.cancel=function(){this.J=!0,Vn(this)};function Fo(e){e.Y=Date.now()+e.P,v0(e,e.P)}function v0(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Mo(Ae(e.lb,e),t)}function cl(e){e.B&&(D.clearTimeout(e.B),e.B=null)}S.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(nC(this.j,this.A),this.L!=2&&(vo(),Re(17)),Vn(this),this.o=2,Fi(this)):v0(this,this.Y-e)};function Fi(e){e.l.H==0||e.J||F0(e.l,e)}function Vn(e){cl(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Sd(e.V),u0(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function zc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Hc(n.h,e))){if(!e.K&&Hc(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)xa(n),ml(n);else break e;Ld(n),Re(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Mo(Ae(n.ib,n),6e3));if(1>=T0(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Gn(n,11)}else if((e.K||n.g==e)&&xa(n),!Ca(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const f=u[4];f!=null&&(n.Ga=f,n.j.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.h;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(xd(o,o.h),o.h=null))}if(r.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,J(r.G,r.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=H0(r,r.I?r.oa:null,r.Y),s.K){C0(r.h,s);var a=s,l=r.K;l&&a.setTimeout(l),a.B&&(cl(a),Fo(a)),r.g=s}else $0(r);0<n.i.length&&gl(n)}else u[0]!="stop"&&u[0]!="close"||Gn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gn(n,7):bd(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}vo(4)}catch{}}function lC(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function uC(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function y0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=uC(e),r=lC(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var w0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cC(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qn){this.h=t!==void 0?t:e.h,Pa(this,e.j),this.s=e.s,this.g=e.g,Na(this,e.m),this.l=e.l,t=e.i;var n=new yo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),rm(this,n),this.o=e.o}else e&&(n=String(e).match(w0))?(this.h=!!t,Pa(this,n[1]||"",!0),this.s=Ti(n[2]||""),this.g=Ti(n[3]||"",!0),Na(this,n[4]),this.l=Ti(n[5]||"",!0),rm(this,n[6]||"",!0),this.o=Ti(n[7]||"")):(this.h=!!t,this.i=new yo(null,this.h))}qn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ci(t,im,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ci(t,im,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ci(n,n.charAt(0)=="/"?hC:dC,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ci(n,mC)),e.join("")};function Gt(e){return new qn(e)}function Pa(e,t,n){e.j=n?Ti(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Na(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rm(e,t,n){t instanceof yo?(e.i=t,gC(e.i,e.h)):(n||(t=Ci(t,pC)),e.i=new yo(t,e.h))}function J(e,t,n){e.i.set(t,n)}function fl(e){return J(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ti(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ci(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fC),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fC(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var im=/[#\/\?@]/g,dC=/[#\?:]/g,hC=/[#\?]/g,pC=/[#\?@]/g,mC=/#/g;function yo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dn(e){e.g||(e.g=new Map,e.h=0,e.i&&cC(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}S=yo.prototype;S.add=function(e,t){Dn(this),this.i=null,e=ii(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function _0(e,t){Dn(e),t=ii(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function k0(e,t){return Dn(e),t=ii(e,t),e.g.has(t)}S.forEach=function(e,t){Dn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};S.sa=function(){Dn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};S.Z=function(e){Dn(this);let t=[];if(typeof e=="string")k0(this,e)&&(t=t.concat(this.g.get(ii(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};S.set=function(e,t){return Dn(this),this.i=null,e=ii(this,e),k0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};S.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function E0(e,t,n){_0(e,t),0<n.length&&(e.i=null,e.g.set(ii(e,t),md(n)),e.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ii(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gC(e,t){t&&!e.j&&(Dn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_0(this,r),E0(this,i,n))},e)),e.j=t}var vC=class{constructor(e,t){this.h=e,this.g=t}};function S0(e){this.l=e||yC,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ka&&D.g.Ka()&&D.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yC=10;function I0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function T0(e){return e.h?1:e.g?e.g.size:0}function Hc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xd(e,t){e.g?e.g.add(t):e.h=t}function C0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}S0.prototype.cancel=function(){if(this.i=A0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function A0(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return md(e.i)}function Od(){}Od.prototype.stringify=function(e){return D.JSON.stringify(e,void 0)};Od.prototype.parse=function(e){return D.JSON.parse(e,void 0)};function wC(){this.g=new Od}function _C(e,t,n){const r=n||"";try{y0(e,function(i,o){let s=i;bo(i)&&(s=Ed(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function kC(e,t){const n=new ll;if(D.Image){const r=new Image;r.onload=ws(ks,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ws(ks,n,r,"TestLoadImage: error",!1,t),r.onabort=ws(ks,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ws(ks,n,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ks(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function dl(e){this.l=e.fc||null,this.j=e.ob||!1}ge(dl,Ad);dl.prototype.g=function(){return new hl(this.l,this.j)};dl.prototype.i=function(e){return function(){return e}}({});function hl(e,t){me.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Rd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(hl,me);var Rd=0;S=hl.prototype;S.open=function(e,t){if(this.readyState!=Rd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wo(this)};S.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||D).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jo(this)),this.readyState=Rd};S.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;P0(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function P0(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}S.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?jo(this):wo(this),this.readyState==3&&P0(this)}};S.Za=function(e){this.g&&(this.response=this.responseText=e,jo(this))};S.Ya=function(e){this.g&&(this.response=e,jo(this))};S.ka=function(){this.g&&jo(this)};function jo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wo(e)}S.setRequestHeader=function(e,t){this.v.append(e,t)};S.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var EC=D.JSON.parse;function ae(e){me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=N0,this.L=this.M=!1}ge(ae,me);var N0="",SC=/^https?$/i,IC=["POST","PUT"];S=ae.prototype;S.Oa=function(e){this.M=e};S.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?nm(this.u):nm(Uc),this.g.onreadystatechange=Ae(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){om(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=D.FormData&&e instanceof D.FormData,!(0<=Gy(IC,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{R0(this),0<this.B&&((this.L=TC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.ua,this)):this.A=Id(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){om(this,o)}};function TC(e){return po&&zT()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}S.ua=function(){typeof pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function om(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,x0(e),pl(e)}function x0(e){e.F||(e.F=!0,ke(e,"complete"),ke(e,"error"))}S.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),pl(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pl(this,!0)),ae.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?O0(this):this.kb())};S.kb=function(){O0(this)};function O0(e){if(e.h&&typeof pd<"u"&&(!e.C[1]||bt(e)!=4||e.da()!=2)){if(e.v&&bt(e)==4)Id(e.La,0,e);else if(ke(e,"readystatechange"),bt(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(w0)[1]||null;if(!i&&D.self&&D.self.location){var o=D.self.location.protocol;i=o.substr(0,o.length-1)}r=!SC.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var s=2<bt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",x0(e)}}finally{pl(e)}}}}function pl(e,t){if(e.g){R0(e);const n=e.g,r=e.C[0]?Ta:null;e.g=null,e.C=null,t||ke(e,"ready");try{n.onreadystatechange=r}catch{}}}function R0(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}function bt(e){return e.g?e.g.readyState:0}S.da=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),EC(t)}};function sm(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case N0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function D0(e){let t="";return vd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Dd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=D0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):J(e,t,n))}function gi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function b0(e){this.Ga=0,this.i=[],this.j=new ll,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gi("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gi("baseRetryDelayMs",5e3,e),this.hb=gi("retryDelaySeedMs",1e4,e),this.eb=gi("forwardChannelMaxRetries",2,e),this.xa=gi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new S0(e&&e.concurrentRequestLimit),this.Ja=new wC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}S=b0.prototype;S.qa=8;S.H=1;function bd(e){if(L0(e),e.H==3){var t=e.W++,n=Gt(e.G);J(n,"SID",e.J),J(n,"RID",t),J(n,"TYPE","terminate"),zo(e,n),t=new Uo(e,e.j,t,void 0),t.L=2,t.v=fl(Gt(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(t.v.toString(),"")),!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=B0(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Fo(t)}z0(e)}function ml(e){e.g&&(Md(e),e.g.cancel(),e.g=null)}function L0(e){ml(e),e.u&&(D.clearTimeout(e.u),e.u=null),xa(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function gl(e){I0(e.h)||e.m||(e.m=!0,o0(e.Na,e),e.C=0)}function CC(e,t){return T0(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Mo(Ae(e.Na,e,t),j0(e,e.C)),e.C++,!0)}S.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Uo(this,this.j,e,void 0);let o=this.s;if(this.U&&(o?(o=qy(o),Jy(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=M0(this,i,t),n=Gt(this.G),J(n,"RID",e),J(n,"CVER",22),this.F&&J(n,"X-HTTP-Session-Id",this.F),zo(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(D0(o)))+"&"+t:this.o&&Dd(n,this.o,o)),xd(this.h,i),this.bb&&J(n,"TYPE","init"),this.P?(J(n,"$req",t),J(n,"SID","null"),i.ba=!0,jc(i,n,null)):jc(i,n,t),this.H=2}}else this.H==3&&(e?am(this,e):this.i.length==0||I0(this.h)||am(this))};function am(e,t){var n;t?n=t.m:n=e.W++;const r=Gt(e.G);J(r,"SID",e.J),J(r,"RID",n),J(r,"AID",e.V),zo(e,r),e.o&&e.s&&Dd(r,e.o,e.s),n=new Uo(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=M0(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),xd(e.h,n),jc(n,r,t)}function zo(e,t){e.ma&&vd(e.ma,function(n,r){J(t,r,n)}),e.l&&y0({},function(n,r){J(t,r,n)})}function M0(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Ae(e.l.Va,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{_C(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function $0(e){e.g||e.u||(e.ba=1,o0(e.Ma,e),e.A=0)}function Ld(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Mo(Ae(e.Ma,e),j0(e,e.A)),e.A++,!0)}S.Ma=function(){if(this.u=null,U0(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Mo(Ae(this.jb,this),e)}};S.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Re(10),ml(this),U0(this))};function Md(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function U0(e){e.g=new Uo(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Gt(e.wa);J(t,"RID","rpc"),J(t,"SID",e.J),J(t,"CI",e.M?"0":"1"),J(t,"AID",e.V),J(t,"TYPE","xmlhttp"),zo(e,t),e.o&&e.s&&Dd(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=fl(Gt(t)),n.s=null,n.S=!0,p0(n,e)}S.ib=function(){this.v!=null&&(this.v=null,ml(this),Ld(this),Re(19))};function xa(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function F0(e,t){var n=null;if(e.g==t){xa(e),Md(e),e.g=null;var r=2}else if(Hc(e.h,t))n=t.F,C0(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Td(),ke(r,new d0(r,n)),gl(e)}else $0(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&CC(e,t)||r==2&&Ld(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Gn(e,5);break;case 4:Gn(e,10);break;case 3:Gn(e,6);break;default:Gn(e,2)}}}function j0(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Gn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Ae(e.pb,e);n||(n=new qn("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Pa(n,"https"),fl(n)),kC(n.toString(),r)}else Re(2);e.H=0,e.l&&e.l.za(t),z0(e),L0(e)}S.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function z0(e){if(e.H=0,e.pa=[],e.l){const t=A0(e.h);(t.length!=0||e.i.length!=0)&&(qp(e.pa,t),qp(e.pa,e.i),e.h.i.length=0,md(e.i),e.i.length=0),e.l.ya()}}function H0(e,t,n){var r=n instanceof qn?Gt(n):new qn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Na(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new qn(null,void 0);r&&Pa(o,r),t&&(o.g=t),i&&Na(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&J(r,n,t),J(r,"VER",e.qa),zo(e,r),r}function B0(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ae(new dl({ob:!0})):new ae(e.va),t.Oa(e.I),t}function W0(){}S=W0.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.Va=function(){};function ot(e,t){me.call(this),this.g=new b0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ca(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ca(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new oi(this)}ge(ot,me);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Re(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=H0(e,null,e.Y),gl(e)};ot.prototype.close=function(){bd(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ed(e),e=n);t.i.push(new vC(t.fb++,e)),t.H==3&&gl(t)};ot.prototype.N=function(){this.g.l=null,delete this.j,bd(this.g),delete this.g,ot.$.N.call(this)};function V0(e){Pd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ge(V0,Pd);function G0(){Nd.call(this),this.status=1}ge(G0,Nd);function oi(e){this.g=e}ge(oi,W0);oi.prototype.Ba=function(){ke(this.g,"a")};oi.prototype.Aa=function(e){ke(this.g,new V0(e))};oi.prototype.za=function(e){ke(this.g,new G0)};oi.prototype.ya=function(){ke(this.g,"b")};function AC(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Tt,AC);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hu(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)hu(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){hu(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){hu(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function V(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var PC={};function $d(e){return-128<=e&&128>e?Ky(PC,e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return $r;if(0>e)return we(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Bc;return new V(t,0)}function K0(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return we(K0(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=$r,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=_t(Math.pow(t,o)),r=r.R(o).add(_t(s))):(r=r.R(n),r=r.add(_t(s)))}return r}var Bc=4294967296,$r=$d(0),Wc=$d(1),lm=$d(16777216);S=V.prototype;S.ea=function(){if(Ze(this))return-we(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Bc+r)*t,t*=Bc}return e};S.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Lt(this))return"0";if(Ze(this))return"-"+we(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var i=Ra(n,t).g;n=Oa(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Lt(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};S.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Lt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ze(e){return e.h==-1}S.X=function(e){return e=Oa(this,e),Ze(e)?-1:Lt(e)?0:1};function we(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new V(n,~e.h).add(Wc)}S.abs=function(){return Ze(this)?we(this):this};S.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Oa(e,t){return e.add(we(t))}S.R=function(e){if(Lt(this)||Lt(e))return $r;if(Ze(this))return Ze(e)?we(this).R(we(e)):we(we(this).R(e));if(Ze(e))return we(this.R(we(e)));if(0>this.X(lm)&&0>e.X(lm))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=s*l,Es(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Es(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Es(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Es(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new V(n,0)};function Es(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function vi(e,t){this.g=e,this.h=t}function Ra(e,t){if(Lt(t))throw Error("division by zero");if(Lt(e))return new vi($r,$r);if(Ze(e))return t=Ra(we(e),t),new vi(we(t.g),we(t.h));if(Ze(t))return t=Ra(e,we(t)),new vi(we(t.g),t.h);if(30<e.g.length){if(Ze(e)||Ze(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Wc,r=t;0>=r.X(e);)n=um(n),r=um(r);var i=fr(n,1),o=fr(r,1);for(r=fr(r,2),n=fr(n,2);!Lt(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=fr(r,1),n=fr(n,1)}return t=Oa(e,i.R(t)),new vi(i,t)}for(i=$r;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=_t(n),s=o.R(t);Ze(s)||0<s.X(e);)n-=r,o=_t(n),s=o.R(t);Lt(o)&&(o=Wc),i=i.add(o),e=Oa(e,s)}return new vi(i,e)}S.gb=function(e){return Ra(this,e).h};S.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new V(n,this.h&e.h)};S.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new V(n,this.h|e.h)};S.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new V(n,this.h^e.h)};function um(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new V(n,e.h)}function fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new V(i,e.h)}ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Cd.NO_ERROR=0;Cd.TIMEOUT=8;Cd.HTTP_ERROR=6;iC.COMPLETE="complete";oC.EventType=$o;$o.OPEN="a";$o.CLOSE="b";$o.ERROR="c";$o.MESSAGE="d";me.prototype.listen=me.prototype.O;ae.prototype.listenOnce=ae.prototype.P;ae.prototype.getLastError=ae.prototype.Sa;ae.prototype.getLastErrorCode=ae.prototype.Ia;ae.prototype.getStatus=ae.prototype.da;ae.prototype.getResponseJson=ae.prototype.Wa;ae.prototype.getResponseText=ae.prototype.ja;ae.prototype.send=ae.prototype.ha;ae.prototype.setWithCredentials=ae.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=_t;V.fromString=K0;var NC=V;const cm="@firebase/firestore";/**
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
 */class Te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
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
 */let Ho="9.21.0";/**
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
 */const Yr=new td("@firebase/firestore");function Be(e,...t){if(Yr.logLevel<=H.DEBUG){const n=t.map(Fd);Yr.debug(`Firestore (${Ho}): ${e}`,...n)}}function Ud(e,...t){if(Yr.logLevel<=H.ERROR){const n=t.map(Fd);Yr.error(`Firestore (${Ho}): ${e}`,...n)}}function xC(e,...t){if(Yr.logLevel<=H.WARN){const n=t.map(Fd);Yr.warn(`Firestore (${Ho}): ${e}`,...n)}}function Fd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function jd(e="Unexpected state"){const t=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+e;throw Ud(t),new Error(t)}function Vc(e,t){e||jd()}/**
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
 */const Ve={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ge extends Xt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Y0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class OC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Te.UNAUTHENTICATED))}shutdown(){}}class RC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DC{constructor(t){this.t=t,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ur,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Be("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ur)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vc(typeof r.accessToken=="string"),new Y0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vc(t===null||typeof t=="string"),new Te(t)}}class bC{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class LC{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new bC(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $C{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=o=>{o.error!=null&&Be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.T;return this.T=o.token,Be("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.I.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.I.getImmediate({optional:!0});o?i(o):Be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vc(typeof n.token=="string"),this.T=n.token,new MC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function UC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FC{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=UC(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function X0(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class jC{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Da{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Da&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var fm,j;(j=fm||(fm={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new NC([4294967295,4294967295],0);function pu(){return typeof document<"u"?document:null}/**
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
 */class zC{constructor(t,n,r=1e3,i=1.5,o=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=o,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&Be("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class zd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new zd(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ge(Ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function HC(e,t){if(Ud("AsyncQueue",`${t}: ${e}`),X0(e))return new Ge(Ve.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class BC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=FC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Be("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Be("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ge(Ve.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=HC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */const dm=new Map;function WC(e,t,n,r){if(t===!0&&r===!0)throw new Ge(Ve.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function VC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":jd()}function GC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ge(Ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=VC(e);throw new Ge(Ve.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class hm{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ge(Ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ge(Ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}WC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Q0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ge(Ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ge(Ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hm(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OC;switch(n.type){case"firstParty":return new LC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ge(Ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=dm.get(t);n&&(Be("ComponentProvider","Removing Datastore"),dm.delete(t),n.terminate())}(this),Promise.resolve()}}function KC(e,t,n,r={}){var i;const o=(e=GC(e,Q0))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&xC("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Te.MOCK_USER;else{s=nE(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Ge(Ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Te(l)}e._authCredentials=new RC(new Y0(s,a))}}/**
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
 */class YC{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new zC(this,"async_queue_retry"),this.Yc=()=>{const n=pu();n&&Be("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=pu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=pu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Ur;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!X0(t))throw t;Be("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw Ud("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=zd.createAndSchedule(this,t,n,r,o=>this.ea(o));return this.jc.push(i),i}Xc(){this.zc&&jd()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class XC extends Q0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new YC,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qC(this),this._firestoreClient.terminate()}}function QC(e,t){const n=typeof e=="object"?e:uy(),r=typeof e=="string"?e:t||"(default)",i=rd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Zk("firestore");o&&KC(i,...o)}return i}function qC(e){var t,n,r;const i=e._freezeSettings(),o=function(s,a,l,u){return new jC(s,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new BC(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Ho=n})(Zr),Kr(new or("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new XC(new DC(n.getProvider("auth-internal")),new $C(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ge(Ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Da(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),kn(cm,"3.11.0",e),kn(cm,"3.11.0","esm2017")})();const JC={apiKey:"AIzaSyAxzYdcy-I9ov79SwnIPg9zNaDnkxvIirM",authDomain:"todocheo-ef450.firebaseapp.com",projectId:"todocheo-ef450",storageBucket:"todocheo-ef450.appspot.com",messagingSenderId:"551284725708",appId:"1:551284725708:web:df138f770635a278bdaf69",measurementId:"G-L1FLC8N78G"},q0=ly(JC),At=xT(q0),ZC=new Nt;QC(q0);const eA=()=>{const[e,t]=ie.useState([]),[n,r]=ie.useState([]);ie.useEffect(()=>{const y=localStorage.getItem("todosLocal");y&&t(JSON.parse(y));const E=localStorage.getItem("typesLocal");E&&r(JSON.parse(E))},[]);const i=async()=>{try{await yI(At)}catch(y){console.log(y)}},o=(y,E,h)=>{const d={id:Jh(),task:y,completed:!1,isEditing:!1,nType:E,date:h};t([...e,d]),localStorage.setItem("todosLocal",JSON.stringify([...e,d]))},s=y=>{const E=R_(y,e);t(E)},a=y=>{const E=D_(y,e);t(E)},l=y=>{const E=b_(y,e);t(E)},u=(y,E,h,d)=>{const m=L_(y,E,h,d,e);t(m)},c=(y,E)=>{if(!n.some(h=>h.type===y)){const h={id:Jh(),type:y,color:E},d=[...n,h];r(d),localStorage.setItem("typesLocal",JSON.stringify(d))}},f=y=>{const E=n.filter(h=>h.id!==y);localStorage.setItem("typesLocal",JSON.stringify(E)),r(E)},p=y=>y.sort((E,h)=>new Date(E.date).getTime()-new Date(h.date).getTime()),g=[...new Set(p(e).map(y=>w(y.date)))];function w(y){const E=new Date(y);E.setHours(0,0,0,0),E.setDate(E.getDate()+4-(E.getDay()||7));const h=new Date(E.getFullYear(),0,1),d=Math.ceil(((+E-+h)/864e5+1)/7);return`${E.getFullYear()}-W${d.toString().padStart(2,"0")}`}return B("div",{className:"TodoWrapper",children:[N("h1",{children:"Week Planner"}),N(M_,{addTodo:o,types:n}),g.map(y=>N(Bk,{types:n,week:y,deleteTodoTask:s,toggleCompleteTask:a,editTodoTask:l,finishEditTask:u,todos:e.filter(E=>w(E.date)===y)},y)),N(Wk,{addType:c}),N(Vk,{types:n,deleteType:f}),N("button",{onClick:i,children:"LogOut"})]})},tA=()=>{var c;const[e,t]=Kn.useState(""),[n,r]=Kn.useState(""),[i,o]=Kn.useState(!1);return console.log((c=At==null?void 0:At.currentUser)==null?void 0:c.email),B("div",{className:"TodoWrapper auth",children:[N("h1",{children:"Complex Todo"}),N("button",{onClick:async()=>{try{await uI(At)}catch(f){console.log(f)}},children:"Use without logging in"}),N("div",{className:"auth__inputs",children:i?B("div",{className:"auth__inputs__register",children:[N("h2",{children:"Register new account"}),N("input",{placeholder:"email...",onChange:f=>t(f.target.value)}),N("input",{type:"password",placeholder:"pasword...",onChange:f=>r(f.target.value)}),N("button",{className:"add-btn auth-btn",onClick:async()=>{try{await hI(At,e,n)}catch(f){console.log(f)}},children:"Sign in"})]}):B("div",{className:"auth__inputs__login",children:[N("h2",{children:"Login with your account"}),N("input",{placeholder:"email...",onChange:f=>t(f.target.value)}),N("input",{type:"password",placeholder:"pasword...",onChange:f=>r(f.target.value)}),N("button",{className:"add-btn  auth-btn",onClick:async()=>{try{await pI(At,e,n)}catch(f){console.log(f)}},children:"Login"}),B("p",{children:["Don't have an account?"," ",N("a",{onClick:()=>o(!0),children:"Register"})]})]})}),N("div",{className:"auth__buttons",children:N("button",{className:"add-btn",onClick:async()=>{try{await FI(At,ZC)}catch(f){console.log(f)}},children:"Sign in with Google"})})]})};function nA(){const[e,t]=ie.useState(!1);return ie.useEffect(()=>{const n=vI(At,r=>{t(!!r)});return()=>n()},[]),N("div",{className:"App",children:e?N(eA,{}):N(tA,{})})}gu.createRoot(document.getElementById("root")).render(N(Kn.StrictMode,{children:N(nA,{})}));
