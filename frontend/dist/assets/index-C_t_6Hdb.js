(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function hv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ym={exports:{}},Zl={},Km={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),pv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),gv=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),yv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),Mv=Symbol.for("react.memo"),bv=Symbol.for("react.lazy"),Fh=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Jm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Zm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e0(){}e0.prototype=Fs.prototype;function cf(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Zm}var uf=cf.prototype=new e0;uf.constructor=cf;Qm(uf,Fs.prototype);uf.isPureReactComponent=!0;var Oh=Array.isArray,t0=Object.prototype.hasOwnProperty,df={current:null},n0={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)t0.call(e,i)&&!n0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:df.current}}function wv(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function Tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kh=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tv(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case pv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mc(a,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(kh,"$&/")+"/"),qo(r,e,n,"",function(u){return u})):r!=null&&(ff(r)&&(r=wv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Oh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Mc(s,l);a+=qo(s,e,n,c,r)}else if(c=Ev(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Mc(s,l++),a+=qo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},Yo={transition:null},Rv={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:df};function r0(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Fs;Ve.Fragment=mv;Ve.Profiler=gv;Ve.PureComponent=cf;Ve.StrictMode=xv;Ve.Suspense=Sv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;Ve.act=r0;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)t0.call(e,c)&&!n0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:_v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vv,_context:t},t.Consumer=t};Ve.createElement=i0;Ve.createFactory=function(t){var e=i0.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:yv,render:t}};Ve.isValidElement=ff;Ve.lazy=function(t){return{$$typeof:bv,_payload:{_status:-1,_result:t},_init:Av}};Ve.memo=function(t,e){return{$$typeof:Mv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Ve.unstable_act=r0;Ve.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ve.useContext=function(t){return mn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ve.useId=function(){return mn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ve.useRef=function(t){return mn.current.useRef(t)};Ve.useState=function(t){return mn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return mn.current.useTransition()};Ve.version="18.3.1";Km.exports=Ve;var ne=Km.exports;const Cv=hv(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=ne,Pv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Dv=Object.prototype.hasOwnProperty,Iv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Dv.call(e,i)&&!Uv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Pv,type:t,key:s,ref:a,props:r,_owner:Iv.current}}Zl.Fragment=Lv;Zl.jsx=s0;Zl.jsxs=s0;Ym.exports=Zl;var o=Ym.exports,wu={},a0={exports:{}},Ln={},o0={exports:{}},l0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,O){var H=U.length;U.push(O);e:for(;0<H;){var q=H-1>>>1,ae=U[q];if(0<r(ae,O))U[q]=O,U[H]=ae,H=q;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],H=U.pop();if(H!==O){U[0]=H;e:for(var q=0,ae=U.length,Ne=ae>>>1;q<Ne;){var K=2*(q+1)-1,le=U[K],ve=K+1,Ee=U[ve];if(0>r(le,H))ve<ae&&0>r(Ee,le)?(U[q]=Ee,U[ve]=H,q=ve):(U[q]=le,U[K]=H,q=K);else if(ve<ae&&0>r(Ee,H))U[q]=Ee,U[ve]=H,q=ve;else break e}}return O}function r(U,O){var H=U.sortIndex-O.sortIndex;return H!==0?H:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,m=null,f=3,x=!1,_=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=U)i(u),O.sortIndex=O.expirationTime,e(c,O);else break;O=n(u)}}function y(U){if(b=!1,S(U),!_)if(n(c)!==null)_=!0,Y(T);else{var O=n(u);O!==null&&I(y,O.startTime-U)}}function T(U,O){_=!1,b&&(b=!1,d(M),M=-1),x=!0;var H=f;try{for(S(O),m=n(c);m!==null&&(!(m.expirationTime>O)||U&&!P());){var q=m.callback;if(typeof q=="function"){m.callback=null,f=m.priorityLevel;var ae=q(m.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(c)&&i(c),S(O)}else i(c);m=n(c)}if(m!==null)var Ne=!0;else{var K=n(u);K!==null&&I(y,K.startTime-O),Ne=!1}return Ne}finally{m=null,f=H,x=!1}}var E=!1,g=null,M=-1,N=5,R=-1;function P(){return!(t.unstable_now()-R<N)}function F(){if(g!==null){var U=t.unstable_now();R=U;var O=!0;try{O=g(!0,U)}finally{O?z():(E=!1,g=null)}}else E=!1}var z;if(typeof p=="function")z=function(){p(F)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,j=L.port2;L.port1.onmessage=F,z=function(){j.postMessage(null)}}else z=function(){v(F,0)};function Y(U){g=U,E||(E=!0,z())}function I(U,O){M=v(function(){U(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||x||(_=!0,Y(T))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var H=f;f=O;try{return U()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=f;f=U;try{return O()}finally{f=H}},t.unstable_scheduleCallback=function(U,O,H){var q=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?q+H:q):H=q,U){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=H+ae,U={id:h++,callback:O,priorityLevel:U,startTime:H,expirationTime:ae,sortIndex:-1},H>q?(U.sortIndex=H,e(u,U),n(c)===null&&U===n(u)&&(b?(d(M),M=-1):b=!0,I(y,H-q))):(U.sortIndex=ae,e(c,U),_||x||(_=!0,Y(T))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var O=f;return function(){var H=f;f=O;try{return U.apply(this,arguments)}finally{f=H}}}})(l0);o0.exports=l0;var Fv=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=ne,Pn=Fv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,ba={};function Hr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(ba[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},zh={};function Bv(t){return Tu.call(zh,t)?!0:Tu.call(Bh,t)?!1:kv.test(t)?zh[t]=!0:(Bh[t]=!0,!1)}function zv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hv(t,e,n,i){if(e===null||typeof e>"u"||zv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hf=/[\-:]([a-z])/g;function pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hf,pf);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mf(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hv(e,n,r,i)&&(n=null),i||r===null?Bv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),f0=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,bc;function sa(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Ec=!1;function wc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function Gv(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Au:return"Profiler";case xf:return"StrictMode";case Ru:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d0:return(t.displayName||"Context")+".Consumer";case u0:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vf:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vv(t){var e=h0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=Vv(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pu(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m0(t,e){e=e.checked,e!=null&&mf(t,"checked",e,!1)}function Lu(t,e){m0(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(aa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function x0(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Xv=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(Xv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bu=null,gs=null,vs=null;function Xh(t){if(t=Ya(t)){if(typeof Bu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=nc(e),Bu(t.stateNode,t.type,e))}}function S0(t){gs?vs?vs.push(t):vs=[t]:gs=t}function M0(){if(gs){var t=gs,e=vs;if(vs=gs=null,Xh(t),e)for(t=0;t<e.length;t++)Xh(e[t])}}function b0(t,e){return t(e)}function E0(){}var Tc=!1;function w0(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return b0(t,e,n)}finally{Tc=!1,(gs!==null||vs!==null)&&(E0(),M0())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var zu=!1;if(Li)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{zu=!1}function $v(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ha=!1,ml=null,xl=!1,Hu=null,qv={onError:function(t){ha=!0,ml=t}};function Yv(t,e,n,i,r,s,a,l,c){ha=!1,ml=null,$v.apply(qv,arguments)}function Kv(t,e,n,i,r,s,a,l,c){if(Yv.apply(this,arguments),ha){if(ha){var u=ml;ha=!1,ml=null}else throw Error(re(198));xl||(xl=!0,Hu=u)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $h(t){if(Gr(t)!==t)throw Error(re(188))}function Zv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $h(r),t;if(s===i)return $h(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function A0(t){return t=Zv(t),t!==null?R0(t):null}function R0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R0(t);if(e!==null)return e;t=t.sibling}return null}var C0=Pn.unstable_scheduleCallback,qh=Pn.unstable_cancelCallback,Qv=Pn.unstable_shouldYield,Jv=Pn.unstable_requestPaint,Nt=Pn.unstable_now,e_=Pn.unstable_getCurrentPriorityLevel,yf=Pn.unstable_ImmediatePriority,N0=Pn.unstable_UserBlockingPriority,gl=Pn.unstable_NormalPriority,t_=Pn.unstable_LowPriority,P0=Pn.unstable_IdlePriority,Ql=null,hi=null;function n_(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:s_,i_=Math.log,r_=Math.LN2;function s_(t){return t>>>=0,t===0?32:31-(i_(t)/r_|0)|0}var lo=64,co=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=oa(l):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function a_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=a_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=lo;return lo<<=1,!(lo&4194240)&&(lo=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function l_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function D0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,Mf,U0,F0,O0,ju=!1,uo=[],tr=null,nr=null,ir=null,Ta=new Map,Aa=new Map,qi=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function u_(t,e,n,i,r){switch(e){case"focusin":return tr=Xs(tr,t,e,n,i,r),!0;case"dragenter":return nr=Xs(nr,t,e,n,i,r),!0;case"mouseover":return ir=Xs(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Xs(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Xs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function k0(t){var e=Tr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=T0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){U0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ku=i,n.target.dispatchEvent(i),ku=null}else return e=Ya(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){Ko(t)&&n.delete(e)}function d_(){ju=!1,tr!==null&&Ko(tr)&&(tr=null),nr!==null&&Ko(nr)&&(nr=null),ir!==null&&Ko(ir)&&(ir=null),Ta.forEach(Kh),Aa.forEach(Kh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,d_)))}function Ra(t){function e(r){return $s(r,t)}if(0<uo.length){$s(uo[0],t);for(var n=1;n<uo.length;n++){var i=uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&$s(tr,t),nr!==null&&$s(nr,t),ir!==null&&$s(ir,t),Ta.forEach(e),Aa.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&qi.shift()}var _s=Fi.ReactCurrentBatchConfig,_l=!0;function f_(t,e,n,i){var r=ot,s=_s.transition;_s.transition=null;try{ot=1,bf(t,e,n,i)}finally{ot=r,_s.transition=s}}function h_(t,e,n,i){var r=ot,s=_s.transition;_s.transition=null;try{ot=4,bf(t,e,n,i)}finally{ot=r,_s.transition=s}}function bf(t,e,n,i){if(_l){var r=Vu(t,e,n,i);if(r===null)Oc(t,e,i,yl,n),Yh(t,i);else if(u_(r,t,e,n,i))i.stopPropagation();else if(Yh(t,i),e&4&&-1<c_.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&I0(s),s=Vu(t,e,n,i),s===null&&Oc(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var yl=null;function Vu(t,e,n,i){if(yl=null,t=_f(i),t=Tr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function B0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e_()){case yf:return 1;case N0:return 4;case gl:case t_:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Zi=null,Ef=null,Zo=null;function z0(){if(Zo)return Zo;var t,e=Ef,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Zh(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:Zh,this.isPropagationStopped=Zh,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=Dn(Os),qa=At({},Os,{view:0,detail:0}),p_=Dn(qa),Rc,Cc,qs,Jl=At({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Rc=t.screenX-qs.screenX,Cc=t.screenY-qs.screenY):Cc=Rc=0,qs=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),Qh=Dn(Jl),m_=At({},Jl,{dataTransfer:0}),x_=Dn(m_),g_=At({},qa,{relatedTarget:0}),Nc=Dn(g_),v_=At({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),__=Dn(v_),y_=At({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S_=Dn(y_),M_=At({},Os,{data:0}),Jh=Dn(M_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w_[t])?!!e[t]:!1}function Tf(){return T_}var A_=At({},qa,{key:function(t){if(t.key){var e=b_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=Dn(A_),C_=At({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Dn(C_),N_=At({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),P_=Dn(N_),L_=At({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=Dn(L_),I_=At({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U_=Dn(I_),F_=[9,13,27,32],Af=Li&&"CompositionEvent"in window,pa=null;Li&&"documentMode"in document&&(pa=document.documentMode);var O_=Li&&"TextEvent"in window&&!pa,H0=Li&&(!Af||pa&&8<pa&&11>=pa),tp=" ",np=!1;function G0(t,e){switch(t){case"keyup":return F_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function k_(t,e){switch(t){case"compositionend":return j0(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function B_(t,e){if(as)return t==="compositionend"||!Af&&G0(t,e)?(t=z0(),Zo=Ef=Zi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H0&&e.locale!=="ko"?null:e.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z_[t.type]:e==="textarea"}function V0(t,e,n,i){S0(i),e=Sl(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Ca=null;function H_(t){tx(t,0)}function ec(t){var e=cs(t);if(p0(e))return t}function G_(t,e){if(t==="change")return e}var W0=!1;if(Li){var Pc;if(Li){var Lc="oninput"in document;if(!Lc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Lc=typeof rp.oninput=="function"}Pc=Lc}else Pc=!1;W0=Pc&&(!document.documentMode||9<document.documentMode)}function sp(){ma&&(ma.detachEvent("onpropertychange",X0),Ca=ma=null)}function X0(t){if(t.propertyName==="value"&&ec(Ca)){var e=[];V0(e,Ca,t,_f(t)),w0(H_,e)}}function j_(t,e,n){t==="focusin"?(sp(),ma=e,Ca=n,ma.attachEvent("onpropertychange",X0)):t==="focusout"&&sp()}function V_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Ca)}function W_(t,e){if(t==="click")return ec(e)}function X_(t,e){if(t==="input"||t==="change")return ec(e)}function $_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:$_;function Na(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tu.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var n=ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ap(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q_(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=op(n,s);var a=op(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y_=Li&&"documentMode"in document&&11>=document.documentMode,os=null,Wu=null,xa=null,Xu=!1;function lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||os==null||os!==pl(i)||(i=os,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Na(xa,i)||(xa=i,i=Sl(Wu,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Dc={},Y0={};Li&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function tc(t){if(Dc[t])return Dc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return Dc[t]=e[n];return t}var K0=tc("animationend"),Z0=tc("animationiteration"),Q0=tc("animationstart"),J0=tc("transitionend"),ex=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){ex.set(t,e),Hr(e,[t])}for(var Ic=0;Ic<cp.length;Ic++){var Uc=cp[Ic],K_=Uc.toLowerCase(),Z_=Uc[0].toUpperCase()+Uc.slice(1);pr(K_,"on"+Z_)}pr(K0,"onAnimationEnd");pr(Z0,"onAnimationIteration");pr(Q0,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(J0,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Kv(i,e,void 0,t),t.currentTarget=null}function tx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;up(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;up(r,l,u),s=c}}}if(xl)throw t=Hu,xl=!1,Hu=null,t}function ht(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(nx(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),nx(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[po]){t[po]=!0,c0.forEach(function(n){n!=="selectionchange"&&(Q_.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Fc("selectionchange",!1,e))}}function nx(t,e,n,i){switch(B0(e)){case 1:var r=f_;break;case 4:r=h_;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Tr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}w0(function(){var u=s,h=_f(n),m=[];e:{var f=ex.get(t);if(f!==void 0){var x=wf,_=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":x=R_;break;case"focusin":_="focus",x=Nc;break;case"focusout":_="blur",x=Nc;break;case"beforeblur":case"afterblur":x=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=x_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=P_;break;case K0:case Z0:case Q0:x=__;break;case J0:x=D_;break;case"scroll":x=p_;break;case"wheel":x=U_;break;case"copy":case"cut":case"paste":x=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ep}var b=(e&4)!==0,v=!b&&t==="scroll",d=b?f!==null?f+"Capture":null:f;b=[];for(var p=u,S;p!==null;){S=p;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,d!==null&&(y=wa(p,d),y!=null&&b.push(La(p,y,S)))),v)break;p=p.return}0<b.length&&(f=new x(f,_,null,n,h),m.push({event:f,listeners:b}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",f&&n!==ku&&(_=n.relatedTarget||n.fromElement)&&(Tr(_)||_[Di]))break e;if((x||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,x?(_=n.relatedTarget||n.toElement,x=u,_=_?Tr(_):null,_!==null&&(v=Gr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(x=null,_=u),x!==_)){if(b=Qh,y="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=ep,y="onPointerLeave",d="onPointerEnter",p="pointer"),v=x==null?f:cs(x),S=_==null?f:cs(_),f=new b(y,p+"leave",x,n,h),f.target=v,f.relatedTarget=S,y=null,Tr(h)===u&&(b=new b(d,p+"enter",_,n,h),b.target=S,b.relatedTarget=v,y=b),v=y,x&&_)t:{for(b=x,d=_,p=0,S=b;S;S=Vr(S))p++;for(S=0,y=d;y;y=Vr(y))S++;for(;0<p-S;)b=Vr(b),p--;for(;0<S-p;)d=Vr(d),S--;for(;p--;){if(b===d||d!==null&&b===d.alternate)break t;b=Vr(b),d=Vr(d)}b=null}else b=null;x!==null&&dp(m,f,x,b,!1),_!==null&&v!==null&&dp(m,v,_,b,!0)}}e:{if(f=u?cs(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var T=G_;else if(ip(f))if(W0)T=X_;else{T=V_;var E=j_}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=W_);if(T&&(T=T(t,u))){V0(m,T,n,h);break e}E&&E(t,f,u),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Du(f,"number",f.value)}switch(E=u?cs(u):window,t){case"focusin":(ip(E)||E.contentEditable==="true")&&(os=E,Wu=u,xa=null);break;case"focusout":xa=Wu=os=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,lp(m,n,h);break;case"selectionchange":if(Y_)break;case"keydown":case"keyup":lp(m,n,h)}var g;if(Af)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else as?G0(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(H0&&n.locale!=="ko"&&(as||M!=="onCompositionStart"?M==="onCompositionEnd"&&as&&(g=z0()):(Zi=h,Ef="value"in Zi?Zi.value:Zi.textContent,as=!0)),E=Sl(u,M),0<E.length&&(M=new Jh(M,t,null,n,h),m.push({event:M,listeners:E}),g?M.data=g:(g=j0(n),g!==null&&(M.data=g)))),(g=O_?k_(t,n):B_(t,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(h=new Jh("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=g))}tx(m,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(La(t,s,r)),s=wa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=wa(n,s),c!=null&&a.unshift(La(n,c,l))):r||(c=wa(n,s),c!=null&&a.push(La(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var J_=/\r\n?/g,ey=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace(J_,`
`).replace(ey,"")}function mo(t,e,n){if(e=fp(e),fp(t)!==e&&n)throw Error(re(425))}function Ml(){}var $u=null,qu=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(iy)}:Ku;function iy(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ui="__reactFiber$"+ks,Da="__reactProps$"+ks,Di="__reactContainer$"+ks,Zu="__reactEvents$"+ks,ry="__reactListeners$"+ks,sy="__reactHandles$"+ks;function Tr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[ui])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[ui]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function nc(t){return t[Da]||null}var Qu=[],us=-1;function mr(t){return{current:t}}function mt(t){0>us||(t.current=Qu[us],Qu[us]=null,us--)}function ft(t,e){us++,Qu[us]=t.current,t.current=e}var ur={},ln=mr(ur),Sn=mr(!1),Lr=ur;function ws(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function bl(){mt(Sn),mt(ln)}function mp(t,e,n){if(ln.current!==ur)throw Error(re(168));ft(ln,e),ft(Sn,n)}function ix(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,jv(t)||"Unknown",r));return At({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Lr=ln.current,ft(ln,t),ft(Sn,Sn.current),!0}function xp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=ix(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,mt(Sn),mt(ln),ft(ln,t)):mt(Sn),ft(Sn,n)}var wi=null,ic=!1,Bc=!1;function rx(t){wi===null?wi=[t]:wi.push(t)}function ay(t){ic=!0,rx(t)}function xr(){if(!Bc&&wi!==null){Bc=!0;var t=0,e=ot;try{var n=wi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,ic=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),C0(yf,xr),r}finally{ot=e,Bc=!1}}return null}var ds=[],fs=0,wl=null,Tl=0,kn=[],Bn=0,Dr=null,Ti=1,Ai="";function Er(t,e){ds[fs++]=Tl,ds[fs++]=wl,wl=t,Tl=e}function sx(t,e,n){kn[Bn++]=Ti,kn[Bn++]=Ai,kn[Bn++]=Dr,Dr=t;var i=Ti;t=Ai;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-ni(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function Cf(t){t.return!==null&&(Er(t,1),sx(t,1,0))}function Nf(t){for(;t===wl;)wl=ds[--fs],ds[fs]=null,Tl=ds[--fs],ds[fs]=null;for(;t===Dr;)Dr=kn[--Bn],kn[Bn]=null,Ai=kn[--Bn],kn[Bn]=null,Ti=kn[--Bn],kn[Bn]=null}var Nn=null,Cn=null,St=!1,Qn=null;function ax(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Cn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Cn=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(St){var e=Cn;if(e){var n=e;if(!gp(t,e)){if(Ju(t))throw Error(re(418));e=rr(n.nextSibling);var i=Nn;e&&gp(t,e)?ax(i,n):(t.flags=t.flags&-4097|2,St=!1,Nn=t)}}else{if(Ju(t))throw Error(re(418));t.flags=t.flags&-4097|2,St=!1,Nn=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function xo(t){if(t!==Nn)return!1;if(!St)return vp(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=Cn)){if(Ju(t))throw ox(),Error(re(418));for(;e;)ax(t,e),e=rr(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Nn?rr(t.stateNode.nextSibling):null;return!0}function ox(){for(var t=Cn;t;)t=rr(t.nextSibling)}function Ts(){Cn=Nn=null,St=!1}function Pf(t){Qn===null?Qn=[t]:Qn.push(t)}var oy=Fi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function lx(t){function e(d,p){if(t){var S=d.deletions;S===null?(d.deletions=[p],d.flags|=16):S.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=lr(d,p),d.index=0,d.sibling=null,d}function s(d,p,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<p?(d.flags|=2,p):S):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,p,S,y){return p===null||p.tag!==6?(p=Xc(S,d.mode,y),p.return=d,p):(p=r(p,S),p.return=d,p)}function c(d,p,S,y){var T=S.type;return T===ss?h(d,p,S.props.children,y,S.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wi&&_p(T)===p.type)?(y=r(p,S.props),y.ref=Ys(d,p,S),y.return=d,y):(y=sl(S.type,S.key,S.props,null,d.mode,y),y.ref=Ys(d,p,S),y.return=d,y)}function u(d,p,S,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=$c(S,d.mode,y),p.return=d,p):(p=r(p,S.children||[]),p.return=d,p)}function h(d,p,S,y,T){return p===null||p.tag!==7?(p=Nr(S,d.mode,y,T),p.return=d,p):(p=r(p,S),p.return=d,p)}function m(d,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xc(""+p,d.mode,S),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case so:return S=sl(p.type,p.key,p.props,null,d.mode,S),S.ref=Ys(d,null,p),S.return=d,S;case rs:return p=$c(p,d.mode,S),p.return=d,p;case Wi:var y=p._init;return m(d,y(p._payload),S)}if(aa(p)||Vs(p))return p=Nr(p,d.mode,S,null),p.return=d,p;go(d,p)}return null}function f(d,p,S,y){var T=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:l(d,p,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case so:return S.key===T?c(d,p,S,y):null;case rs:return S.key===T?u(d,p,S,y):null;case Wi:return T=S._init,f(d,p,T(S._payload),y)}if(aa(S)||Vs(S))return T!==null?null:h(d,p,S,y,null);go(d,S)}return null}function x(d,p,S,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(S)||null,l(p,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return d=d.get(y.key===null?S:y.key)||null,c(p,d,y,T);case rs:return d=d.get(y.key===null?S:y.key)||null,u(p,d,y,T);case Wi:var E=y._init;return x(d,p,S,E(y._payload),T)}if(aa(y)||Vs(y))return d=d.get(S)||null,h(p,d,y,T,null);go(p,y)}return null}function _(d,p,S,y){for(var T=null,E=null,g=p,M=p=0,N=null;g!==null&&M<S.length;M++){g.index>M?(N=g,g=null):N=g.sibling;var R=f(d,g,S[M],y);if(R===null){g===null&&(g=N);break}t&&g&&R.alternate===null&&e(d,g),p=s(R,p,M),E===null?T=R:E.sibling=R,E=R,g=N}if(M===S.length)return n(d,g),St&&Er(d,M),T;if(g===null){for(;M<S.length;M++)g=m(d,S[M],y),g!==null&&(p=s(g,p,M),E===null?T=g:E.sibling=g,E=g);return St&&Er(d,M),T}for(g=i(d,g);M<S.length;M++)N=x(g,d,M,S[M],y),N!==null&&(t&&N.alternate!==null&&g.delete(N.key===null?M:N.key),p=s(N,p,M),E===null?T=N:E.sibling=N,E=N);return t&&g.forEach(function(P){return e(d,P)}),St&&Er(d,M),T}function b(d,p,S,y){var T=Vs(S);if(typeof T!="function")throw Error(re(150));if(S=T.call(S),S==null)throw Error(re(151));for(var E=T=null,g=p,M=p=0,N=null,R=S.next();g!==null&&!R.done;M++,R=S.next()){g.index>M?(N=g,g=null):N=g.sibling;var P=f(d,g,R.value,y);if(P===null){g===null&&(g=N);break}t&&g&&P.alternate===null&&e(d,g),p=s(P,p,M),E===null?T=P:E.sibling=P,E=P,g=N}if(R.done)return n(d,g),St&&Er(d,M),T;if(g===null){for(;!R.done;M++,R=S.next())R=m(d,R.value,y),R!==null&&(p=s(R,p,M),E===null?T=R:E.sibling=R,E=R);return St&&Er(d,M),T}for(g=i(d,g);!R.done;M++,R=S.next())R=x(g,d,M,R.value,y),R!==null&&(t&&R.alternate!==null&&g.delete(R.key===null?M:R.key),p=s(R,p,M),E===null?T=R:E.sibling=R,E=R);return t&&g.forEach(function(F){return e(d,F)}),St&&Er(d,M),T}function v(d,p,S,y){if(typeof S=="object"&&S!==null&&S.type===ss&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case so:e:{for(var T=S.key,E=p;E!==null;){if(E.key===T){if(T=S.type,T===ss){if(E.tag===7){n(d,E.sibling),p=r(E,S.props.children),p.return=d,d=p;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wi&&_p(T)===E.type){n(d,E.sibling),p=r(E,S.props),p.ref=Ys(d,E,S),p.return=d,d=p;break e}n(d,E);break}else e(d,E);E=E.sibling}S.type===ss?(p=Nr(S.props.children,d.mode,y,S.key),p.return=d,d=p):(y=sl(S.type,S.key,S.props,null,d.mode,y),y.ref=Ys(d,p,S),y.return=d,d=y)}return a(d);case rs:e:{for(E=S.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){n(d,p.sibling),p=r(p,S.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=$c(S,d.mode,y),p.return=d,d=p}return a(d);case Wi:return E=S._init,v(d,p,E(S._payload),y)}if(aa(S))return _(d,p,S,y);if(Vs(S))return b(d,p,S,y);go(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,S),p.return=d,d=p):(n(d,p),p=Xc(S,d.mode,y),p.return=d,d=p),a(d)):n(d,p)}return v}var As=lx(!0),cx=lx(!1),Al=mr(null),Rl=null,hs=null,Lf=null;function Df(){Lf=hs=Rl=null}function If(t){var e=Al.current;mt(Al),t._currentValue=e}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Rl=t,Lf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Rl===null)throw Error(re(308));hs=t,Rl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Ar=null;function Uf(t){Ar===null?Ar=[t]:Ar.push(t)}function ux(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sf(t,n)}}function yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=r.baseState;a=0,h=u=c=null,l=s;do{var f=l.lane,x=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,b=l;switch(f=e,x=n,b.tag){case 1:if(_=b.payload,typeof _=="function"){m=_.call(x,m,f);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,f=typeof _=="function"?_.call(x,m,f):_,f==null)break e;m=At({},m,f);break e;case 2:Xi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=x,c=m):h=h.next=x,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=m),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=m}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ka={},pi=mr(Ka),Ia=mr(Ka),Ua=mr(Ka);function Rr(t){if(t===Ka)throw Error(re(174));return t}function Of(t,e){switch(ft(Ua,e),ft(Ia,t),ft(pi,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}mt(pi),ft(pi,e)}function Rs(){mt(pi),mt(Ia),mt(Ua)}function fx(t){Rr(Ua.current);var e=Rr(pi.current),n=Uu(e,t.type);e!==n&&(ft(Ia,t),ft(pi,n))}function kf(t){Ia.current===t&&(mt(pi),mt(Ia))}var Et=mr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function Bf(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var el=Fi.ReactCurrentDispatcher,Hc=Fi.ReactCurrentBatchConfig,Ir=0,Tt=null,Ot=null,Vt=null,Pl=!1,ga=!1,Fa=0,ly=0;function nn(){throw Error(re(321))}function zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Hf(t,e,n,i,r,s){if(Ir=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?fy:hy,t=n(i,r),ga){s=0;do{if(ga=!1,Fa=0,25<=s)throw Error(re(301));s+=1,Vt=Ot=null,e.updateQueue=null,el.current=py,t=n(i,r)}while(ga)}if(el.current=Ll,e=Ot!==null&&Ot.next!==null,Ir=0,Vt=Ot=Tt=null,Pl=!1,e)throw Error(re(300));return t}function Gf(){var t=Fa!==0;return Fa=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Vn(){if(Ot===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Vt===null?Tt.memoizedState:Vt.next;if(e!==null)Vt=e,Ot=t;else{if(t===null)throw Error(re(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Oa(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((Ir&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,a=i):c=c.next=m,Tt.lanes|=h,Ur|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,ri(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ri(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function hx(){}function px(t,e){var n=Tt,i=Vn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,jf(gx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,ka(9,xx.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(re(349));Ir&30||mx(n,e,r)}return r}function mx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xx(t,e,n,i){e.value=n,e.getSnapshot=i,vx(e)&&_x(t)}function gx(t,e,n){return n(function(){vx(e)&&_x(t)})}function vx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function _x(t){var e=Ii(t,1);e!==null&&ii(e,t,1,-1)}function Mp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=dy.bind(null,Tt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yx(){return Vn().memoizedState}function tl(t,e,n,i){var r=li();Tt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&zf(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function bp(t,e){return tl(8390656,8,t,e)}function jf(t,e){return rc(2048,8,t,e)}function Sx(t,e){return rc(4,2,t,e)}function Mx(t,e){return rc(4,4,t,e)}function bx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ex(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,bx.bind(null,e,t),n)}function Vf(){}function wx(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tx(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ax(t,e,n){return Ir&21?(ri(n,e)||(n=L0(),Tt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function cy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{ot=n,Hc.transition=i}}function Rx(){return Vn().memoizedState}function uy(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cx(t))Nx(e,n);else if(n=ux(t,e,n,i),n!==null){var r=hn();ii(n,t,i,r),Px(n,e,i)}}function dy(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cx(t))Nx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,ri(l,a)){var c=e.interleaved;c===null?(r.next=r,Uf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=ux(t,e,r,i),n!==null&&(r=hn(),ii(n,t,i,r),Px(n,e,i))}}function Cx(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Nx(t,e){ga=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Px(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sf(t,n)}}var Ll={readContext:jn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},fy={readContext:jn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,bx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:Vf,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=cy.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=li();if(St){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Wt===null)throw Error(re(349));Ir&30||mx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bp(gx.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,xx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Wt.identifierPrefix;if(St){var n=Ai,i=Ti;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:jn,useCallback:wx,useContext:jn,useEffect:jf,useImperativeHandle:Ex,useInsertionEffect:Sx,useLayoutEffect:Mx,useMemo:Tx,useReducer:Gc,useRef:yx,useState:function(){return Gc(Oa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Vn();return Ax(e,Ot.memoizedState,t)},useTransition:function(){var t=Gc(Oa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:hx,useSyncExternalStore:px,useId:Rx,unstable_isNewReconciler:!1},py={readContext:jn,useCallback:wx,useContext:jn,useEffect:jf,useImperativeHandle:Ex,useInsertionEffect:Sx,useLayoutEffect:Mx,useMemo:Tx,useReducer:jc,useRef:yx,useState:function(){return jc(Oa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Vn();return Ot===null?e.memoizedState=t:Ax(e,Ot.memoizedState,t)},useTransition:function(){var t=jc(Oa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:hx,useSyncExternalStore:px,useId:Rx,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=or(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ii(e,t,r,i),Jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=or(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ii(e,t,r,i),Jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=or(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ii(e,t,i,n),Jo(e,t,i))}};function Ep(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function Lx(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=Mn(e)?Lr:ln.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ff(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=Mn(e)?Lr:ln.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=Gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function Dx(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,pd=i),rd(t,e)},n}function Ix(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var xy=Fi.ReactCurrentOwner,_n=!1;function dn(t,e,n,i){e.child=t===null?cx(e,null,n,i):As(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Hf(t,e,n,i,s,r),n=Gf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(St&&n&&Cf(e),e.flags|=1,dn(t,e,i,r),e.child)}function Np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ux(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ux(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return sd(t,e,n,i,r)}function Fx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(ms,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(ms,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(ms,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(ms,An),An|=i;return dn(t,e,r,n),e.child}function Ox(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,r){var s=Mn(n)?Lr:ln.current;return s=ws(e,s),ys(e,r),n=Hf(t,e,n,i,s,r),i=Gf(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(St&&i&&Cf(e),e.flags|=1,dn(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(Mn(n)){var s=!0;El(e)}else s=!1;if(ys(e,r),e.stateNode===null)nl(t,e),Lx(e,n,i),id(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=Mn(n)?Lr:ln.current,u=ws(e,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&wp(e,a,i,u),Xi=!1;var f=e.memoizedState;a.state=f,Cl(e,i,a,r),c=e.memoizedState,l!==i||f!==c||Sn.current||Xi?(typeof h=="function"&&(nd(e,n,h,i),c=e.memoizedState),(l=Xi||Ep(e,n,l,i,f,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,dx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Kn(e.type,l),a.props=u,m=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=jn(c):(c=Mn(n)?Lr:ln.current,c=ws(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||f!==c)&&wp(e,a,i,c),Xi=!1,f=e.memoizedState,a.state=f,Cl(e,i,a,r);var _=e.memoizedState;l!==m||f!==_||Sn.current||Xi?(typeof x=="function"&&(nd(e,n,x,i),_=e.memoizedState),(u=Xi||Ep(e,n,u,i,f,_,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,s,r)}function ad(t,e,n,i,r,s){Ox(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&xp(e,n,!1),Ui(t,e,s);i=e.stateNode,xy.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=As(e,t.child,null,s),e.child=As(e,null,l,s)):dn(t,e,l,s),e.memoizedState=i.state,r&&xp(e,n,!0),e.child}function kx(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),Of(t,e.containerInfo)}function Lp(t,e,n,i,r){return Ts(),Pf(r),e.flags|=256,dn(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bx(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(Et,r&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lc(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=od,t):Wf(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return gy(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=lr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wf(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&Pf(i),As(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(re(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,a),e.child.memoizedState=ld(a),e.memoizedState=od,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(re(419)),i=Vc(s,i,void 0),vo(t,e,a,i)}if(l=(a&t.childLanes)!==0,_n||l){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ii(i,t,r,-1))}return Zf(),i=Vc(Error(re(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=rr(r.nextSibling),Nn=e,St=!0,Qn=null,t!==null&&(kn[Bn++]=Ti,kn[Bn++]=Ai,kn[Bn++]=Dr,Ti=t.id,Ai=t.overflow,Dr=e),e=Wf(e,i.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vy(t,e,n){switch(e.tag){case 3:kx(e),Ts();break;case 5:fx(e);break;case 1:Mn(e.type)&&El(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Bx(t,e,n):(ft(Et,Et.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ft(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Fx(t,e,n)}return Ui(t,e,n)}var Hx,cd,Gx,jx;Hx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Gx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(pi.current);var s=null;switch(n){case"input":r=Pu(t,r),i=Pu(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Fu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ba.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ht("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};jx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return Mn(e.type)&&bl(),rn(e),null;case 3:return i=e.stateNode,Rs(),mt(Sn),mt(ln),Bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(gd(Qn),Qn=null))),cd(t,e),rn(e),null;case 5:kf(e);var r=Rr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Gx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return rn(e),null}if(t=Rr(pi.current),xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)ht(la[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Gh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Vh(i,s),ht("invalid",i)}Fu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,l,t),r=["children",""+l]):ba.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":ao(i),jh(i,s,!0);break;case"textarea":ao(i),Wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Da]=i,Hx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ou(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)ht(la[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Gh(t,i),r=Pu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Vh(t,i),r=Iu(t,i),ht("invalid",t);break;default:r=i}Fu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?y0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&v0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ea(t,c):typeof c=="number"&&Ea(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ht("scroll",t):c!=null&&mf(t,s,c,a))}switch(n){case"input":ao(t),jh(t,i,!1);break;case"textarea":ao(t),Wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)jx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Rr(Ua.current),Rr(pi.current),xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return rn(e),null;case 13:if(mt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Cn!==null&&e.mode&1&&!(e.flags&128))ox(),Ts(),e.flags|=98560,s=!1;else if(s=xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ui]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else Qn!==null&&(gd(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?kt===0&&(kt=3):Zf())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Rs(),cd(t,e),t===null&&Pa(e.stateNode.containerInfo),rn(e),null;case 10:return If(e.type._context),rn(e),null;case 17:return Mn(e.type)&&bl(),rn(e),null;case 19:if(mt(Et),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ks(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Nl(t),a!==null){for(e.flags|=128,Ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ns&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return rn(e),null}else 2*Nt()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Et.current,ft(Et,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return Kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function yy(t,e){switch(Nf(e),e.tag){case 1:return Mn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),mt(Sn),mt(ln),Bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(mt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(Et),null;case 4:return Rs(),null;case 10:return If(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var _o=!1,on=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,be=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Ip=!1;function My(t,e){if($u=_l,t=q0(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,m=t,f=null;t:for(;;){for(var x;m!==n||r!==0&&m.nodeType!==3||(l=a+r),m!==s||i!==0&&m.nodeType!==3||(c=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(x=m.firstChild)!==null;)f=m,m=x;for(;;){if(m===t)break t;if(f===n&&++u===r&&(l=a),f===s&&++h===i&&(c=a),(x=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:t,selectionRange:n},_l=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var b=_.memoizedProps,v=_.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:Kn(e.type,b),v);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Ct(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=Ip,Ip=!1,_}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ud(e,n,s)}r=r.next}while(r!==i)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vx(t){var e=t.alternate;e!==null&&(t.alternate=null,Vx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Da],delete e[Zu],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wx(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var $t=null,Zn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)Xx(t,e,n),n=n.sibling}function Xx(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:on||ps(n,e);case 6:var i=$t,r=Zn;$t=null,Bi(t,e,n),$t=i,Zn=r,$t!==null&&(Zn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Zn?(t=$t,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),Ra(t)):kc($t,n.stateNode));break;case 4:i=$t,r=Zn,$t=n.stateNode.containerInfo,Zn=!0,Bi(t,e,n),$t=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ud(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!on&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Ct(n,e,l)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Bi(t,e,n),on=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:$t=l.stateNode,Zn=!1;break e;case 3:$t=l.stateNode.containerInfo,Zn=!0;break e;case 4:$t=l.stateNode.containerInfo,Zn=!0;break e}l=l.return}if($t===null)throw Error(re(160));Xx(s,a,r),$t=null,Zn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$x(e,t),e=e.sibling}function $x(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),si(t),i&4){try{va(3,t,t.return),ac(3,t)}catch(b){Ct(t,t.return,b)}try{va(5,t,t.return)}catch(b){Ct(t,t.return,b)}}break;case 1:Xn(e,t),si(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Xn(e,t),si(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(b){Ct(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&m0(r,s),Ou(l,a);var u=Ou(l,s);for(a=0;a<c.length;a+=2){var h=c[a],m=c[a+1];h==="style"?y0(r,m):h==="dangerouslySetInnerHTML"?v0(r,m):h==="children"?Ea(r,m):mf(r,h,m,u)}switch(l){case"input":Lu(r,s);break;case"textarea":x0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?xs(r,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(b){Ct(t,t.return,b)}}break;case 6:if(Xn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Ct(t,t.return,b)}}break;case 3:if(Xn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(b){Ct(t,t.return,b)}break;case 4:Xn(e,t),si(t);break;case 13:Xn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qf=Nt())),i&4&&Fp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||h,Xn(e,t),on=u):Xn(e,t),si(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(m=be=h;be!==null;){switch(f=be,x=f.child,f.tag){case 0:case 11:case 14:case 15:va(4,f,f.return);break;case 1:ps(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(b){Ct(i,n,b)}}break;case 5:ps(f,f.return);break;case 22:if(f.memoizedState!==null){kp(m);continue}}x!==null?(x.return=f,be=x):kp(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=_0("display",a))}catch(b){Ct(t,t.return,b)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){Ct(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xn(e,t),si(t),i&4&&Fp(t);break;case 21:break;default:Xn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Up(t);hd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Up(t);fd(t,l,a);break;default:throw Error(re(161))}}catch(c){Ct(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,n){be=t,qx(t)}function qx(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||_o;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||on;l=_o;var u=on;if(_o=a,(on=c)&&!u)for(be=r;be!==null;)a=be,c=a.child,a.tag===22&&a.memoizedState!==null?Bp(r):c!==null?(c.return=a,be=c):Bp(r);for(;s!==null;)be=s,qx(s),s=s.sibling;be=r,_o=l,on=u}Op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Op(t)}}function Op(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ra(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}on||e.flags&512&&dd(e)}catch(f){Ct(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function kp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Bp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(c){Ct(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Ct(e,r,c)}}var s=e.return;try{dd(e)}catch(c){Ct(e,s,c)}break;case 5:var a=e.return;try{dd(e)}catch(c){Ct(e,a,c)}}}catch(c){Ct(e,e.return,c)}if(e===t){be=null;break}var l=e.sibling;if(l!==null){l.return=e.return,be=l;break}be=e.return}}var Ey=Math.ceil,Dl=Fi.ReactCurrentDispatcher,Xf=Fi.ReactCurrentOwner,Gn=Fi.ReactCurrentBatchConfig,et=0,Wt=null,Dt=null,Zt=0,An=0,ms=mr(0),kt=0,Ba=null,Ur=0,oc=0,$f=0,_a=null,vn=null,qf=0,Ns=1/0,Ei=null,Il=!1,pd=null,ar=null,yo=!1,Qi=null,Ul=0,ya=0,md=null,il=-1,rl=0;function hn(){return et&6?Nt():il!==-1?il:il=Nt()}function or(t){return t.mode&1?et&2&&Zt!==0?Zt&-Zt:oy.transition!==null?(rl===0&&(rl=L0()),rl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:B0(t.type)),t):1}function ii(t,e,n,i){if(50<ya)throw ya=0,md=null,Error(re(185));$a(t,n,i),(!(et&2)||t!==Wt)&&(t===Wt&&(!(et&2)&&(oc|=n),kt===4&&Yi(t,Zt)),bn(t,i),n===1&&et===0&&!(e.mode&1)&&(Ns=Nt()+500,ic&&xr()))}function bn(t,e){var n=t.callbackNode;o_(t,e);var i=vl(t,t===Wt?Zt:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?ay(zp.bind(null,t)):rx(zp.bind(null,t)),ny(function(){!(et&6)&&xr()}),n=null;else{switch(D0(i)){case 1:n=yf;break;case 4:n=N0;break;case 16:n=gl;break;case 536870912:n=P0;break;default:n=gl}n=ng(n,Yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yx(t,e){if(il=-1,rl=0,et&6)throw Error(re(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=vl(t,t===Wt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=et;et|=2;var s=Zx();(Wt!==t||Zt!==e)&&(Ei=null,Ns=Nt()+500,Cr(t,e));do try{Ay();break}catch(l){Kx(t,l)}while(!0);Df(),Dl.current=s,et=r,Dt!==null?e=0:(Wt=null,Zt=0,e=kt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Ba,Cr(t,0),Yi(t,i),bn(t,Nt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=Fl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=Ba,Cr(t,0),Yi(t,i),bn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:wr(t,vn,Ei);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=qf+500-Nt(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(wr.bind(null,t,vn,Ei),e);break}wr(t,vn,Ei);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ey(i/1960))-i,10<i){t.timeoutHandle=Ku(wr.bind(null,t,vn,Ei),i);break}wr(t,vn,Ei);break;case 5:wr(t,vn,Ei);break;default:throw Error(re(329))}}}return bn(t,Nt()),t.callbackNode===n?Yx.bind(null,t):null}function xd(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=vn,vn=n,e!==null&&gd(e)),t}function gd(t){vn===null?vn=t:vn.push.apply(vn,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~$f,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function zp(t){if(et&6)throw Error(re(327));Ss();var e=vl(t,0);if(!(e&1))return bn(t,Nt()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Ba,Cr(t,0),Yi(t,e),bn(t,Nt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,vn,Ei),bn(t,Nt()),null}function Yf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ns=Nt()+500,ic&&xr())}}function Fr(t){Qi!==null&&Qi.tag===0&&!(et&6)&&Ss();var e=et;et|=1;var n=Gn.transition,i=ot;try{if(Gn.transition=null,ot=1,t)return t()}finally{ot=i,Gn.transition=n,et=e,!(et&6)&&xr()}}function Kf(){An=ms.current,mt(ms)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Rs(),mt(Sn),mt(ln),Bf();break;case 5:kf(i);break;case 4:Rs();break;case 13:mt(Et);break;case 19:mt(Et);break;case 10:If(i.type._context);break;case 22:case 23:Kf()}n=n.return}if(Wt=t,Dt=t=lr(t.current,null),Zt=An=e,kt=0,Ba=null,$f=oc=Ur=0,vn=_a=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function Kx(t,e){do{var n=Dt;try{if(Df(),el.current=Ll,Pl){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Ir=0,Vt=Ot=Tt=null,ga=!1,Fa=0,Xf.current=null,n===null||n.return===null){kt=1,Ba=e,Dt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Zt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Ap(a);if(x!==null){x.flags&=-257,Rp(x,a,l,s,e),x.mode&1&&Tp(s,u,e),e=x,c=u;var _=e.updateQueue;if(_===null){var b=new Set;b.add(c),e.updateQueue=b}else _.add(c);break e}else{if(!(e&1)){Tp(s,u,e),Zf();break e}c=Error(re(426))}}else if(St&&l.mode&1){var v=Ap(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Rp(v,a,l,s,e),Pf(Cs(c,l));break e}}s=c=Cs(c,l),kt!==4&&(kt=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Dx(s,c,e);yp(s,d);break e;case 1:l=c;var p=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ar===null||!ar.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ix(s,l,e);yp(s,y);break e}}s=s.return}while(s!==null)}Jx(n)}catch(T){e=T,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Zx(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Zf(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(Ur&268435455)&&!(oc&268435455)||Yi(Wt,Zt)}function Fl(t,e){var n=et;et|=2;var i=Zx();(Wt!==t||Zt!==e)&&(Ei=null,Cr(t,e));do try{Ty();break}catch(r){Kx(t,r)}while(!0);if(Df(),et=n,Dl.current=i,Dt!==null)throw Error(re(261));return Wt=null,Zt=0,kt}function Ty(){for(;Dt!==null;)Qx(Dt)}function Ay(){for(;Dt!==null&&!Qv();)Qx(Dt)}function Qx(t){var e=tg(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?Jx(t):Dt=e,Xf.current=null}function Jx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yy(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Dt=null;return}}else if(n=_y(n,e,An),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);kt===0&&(kt=5)}function wr(t,e,n){var i=ot,r=Gn.transition;try{Gn.transition=null,ot=1,Ry(t,e,n,i)}finally{Gn.transition=r,ot=i}return null}function Ry(t,e,n,i){do Ss();while(Qi!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(l_(t,s),t===Wt&&(Dt=Wt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,ng(gl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=ot;ot=1;var l=et;et|=4,Xf.current=null,My(t,n),$x(n,t),q_(qu),_l=!!$u,qu=$u=null,t.current=n,by(n),Jv(),et=l,ot=a,Gn.transition=s}else t.current=n;if(yo&&(yo=!1,Qi=t,Ul=r),s=t.pendingLanes,s===0&&(ar=null),n_(n.stateNode),bn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=pd,pd=null,t;return Ul&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===md?ya++:(ya=0,md=t):ya=0,xr(),null}function Ss(){if(Qi!==null){var t=D0(Ul),e=Gn.transition,n=ot;try{if(Gn.transition=null,ot=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Ul=0,et&6)throw Error(re(331));var r=et;for(et|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(be=u;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:va(8,h,s)}var m=h.child;if(m!==null)m.return=h,be=m;else for(;be!==null;){h=be;var f=h.sibling,x=h.return;if(Vx(h),h===u){be=null;break}if(f!==null){f.return=x,be=f;break}be=x}}}var _=s.alternate;if(_!==null){var b=_.child;if(b!==null){_.child=null;do{var v=b.sibling;b.sibling=null,b=v}while(b!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var p=t.current;for(be=p;be!==null;){a=be;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,be=S;else e:for(a=p;be!==null;){if(l=be,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(T){Ct(l,l.return,T)}if(l===a){be=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,be=y;break e}be=l.return}}if(et=r,xr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Ql,t)}catch{}i=!0}return i}finally{ot=n,Gn.transition=e}}return!1}function Hp(t,e,n){e=Cs(n,e),e=Dx(t,e,1),t=sr(t,e,1),e=hn(),t!==null&&($a(t,1,e),bn(t,e))}function Ct(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Cs(n,t),t=Ix(e,t,1),e=sr(e,t,1),t=hn(),e!==null&&($a(e,1,t),bn(e,t));break}}e=e.return}}function Cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Zt&n)===n&&(kt===4||kt===3&&(Zt&130023424)===Zt&&500>Nt()-qf?Cr(t,0):$f|=n),bn(t,e)}function eg(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=hn();t=Ii(t,e),t!==null&&($a(t,e,n),bn(t,n))}function Ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),eg(t,n)}function Py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),eg(t,n)}var tg;tg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,vy(t,e,n);_n=!!(t.flags&131072)}else _n=!1,St&&e.flags&1048576&&sx(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=ws(e,ln.current);ys(e,n),r=Hf(null,e,i,t,r,n);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ff(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,id(e,i,t,n),e=ad(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Cf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=Kn(i,t),r){case 0:e=sd(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=Np(null,e,i,Kn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Pp(t,e,i,r,n);case 3:e:{if(kx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dx(t,e),Cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(re(423)),e),e=Lp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(re(424)),e),e=Lp(t,e,i,n,r);break e}else for(Cn=rr(e.stateNode.containerInfo.firstChild),Nn=e,St=!0,Qn=null,n=cx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=Ui(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return fx(e),t===null&&ed(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Yu(i,r)?a=null:s!==null&&Yu(i,s)&&(e.flags|=32),Ox(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&ed(e),null;case 13:return Bx(t,e,n);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Cp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(Al,i._currentValue),i._currentValue=a,s!==null)if(ri(s.value,a)){if(s.children===r.children&&!Sn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ci(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),td(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),td(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=jn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Np(t,e,i,r,n);case 15:return Ux(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),nl(t,e),e.tag=1,Mn(i)?(t=!0,El(e)):t=!1,ys(e,n),Lx(e,i,r),id(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return zx(t,e,n);case 22:return Fx(t,e,n)}throw Error(re(156,e.tag))};function ng(t,e){return C0(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Ly(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===vf)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Qf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Nr(n.children,r,s,e);case xf:a=8,r|=8;break;case Au:return t=Hn(12,n,e,r|2),t.elementType=Au,t.lanes=s,t;case Ru:return t=Hn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case Cu:return t=Hn(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case f0:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u0:a=10;break e;case d0:a=9;break e;case gf:a=11;break e;case vf:a=14;break e;case Wi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=f0,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jf(t,e,n,i,r,s,a,l,c){return t=new Iy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ff(s),t}function Uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ig(t){if(!t)return ur;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Mn(n))return ix(t,n,e)}return e}function rg(t,e,n,i,r,s,a,l,c){return t=Jf(n,i,!0,t,r,s,a,l,c),t.context=ig(null),n=t.current,i=hn(),r=or(n),s=Ci(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,$a(t,r,i),bn(t,i),t}function cc(t,e,n,i){var r=e.current,s=hn(),a=or(r);return n=ig(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,a),t!==null&&(ii(t,r,a,s),Jo(t,r,a)),a}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eh(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function Fy(){return null}var sg=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}uc.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));cc(t,e,null,null)};uc.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){cc(null,t,null,null)}),e[Di]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&k0(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Oy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ol(a);s.call(u)}}var a=rg(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=a,t[Di]=a.current,Pa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=Ol(c);l.call(u)}}var c=Jf(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=c,t[Di]=c.current,Pa(t.nodeType===8?t.parentNode:t),Fr(function(){cc(e,c,n,i)}),c}function fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=Ol(a);l.call(c)}}cc(e,a,t,r)}else a=Oy(n,e,t,r,i);return Ol(a)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Sf(e,n|1),bn(e,Nt()),!(et&6)&&(Ns=Nt()+500,xr()))}break;case 13:Fr(function(){var i=Ii(t,1);if(i!==null){var r=hn();ii(i,t,1,r)}}),eh(t,1)}};Mf=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=hn();ii(e,t,134217728,n)}eh(t,134217728)}};U0=function(t){if(t.tag===13){var e=or(t),n=Ii(t,e);if(n!==null){var i=hn();ii(n,t,e,i)}eh(t,e)}};F0=function(){return ot};O0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Bu=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(re(90));p0(i),Lu(i,r)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};b0=Yf;E0=Fr;var ky={usingClientEntryPoint:!1,Events:[Ya,cs,nc,S0,M0,Yf]},Zs={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},By={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Ql=So.inject(By),hi=So}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(re(200));return Uy(t,e,null,n)};Ln.createRoot=function(t,e){if(!nh(t))throw Error(re(299));var n=!1,i="",r=sg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jf(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Pa(t.nodeType===8?t.parentNode:t),new th(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=A0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Fr(t)};Ln.hydrate=function(t,e,n){if(!dc(e))throw Error(re(200));return fc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!nh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=sg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=rg(e,null,t,1,n??null,r,!1,s,a),t[Di]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uc(e)};Ln.render=function(t,e,n){if(!dc(e))throw Error(re(200));return fc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!dc(t))throw Error(re(40));return t._reactRootContainer?(Fr(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Ln.unstable_batchedUpdates=Yf;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!dc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return fc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag)}catch(t){console.error(t)}}ag(),a0.exports=Ln;var zy=a0.exports,Vp=zy;wu.createRoot=Vp.createRoot,wu.hydrateRoot=Vp.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),og=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...l},c)=>ne.createElement("svg",{ref:c,...Gy,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:og("lucide",r),...l},[...a.map(([u,h])=>ne.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(t,e)=>{const n=ne.forwardRef(({className:i,...r},s)=>ne.createElement(jy,{ref:s,iconNode:e,className:og(`lucide-${Hy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=We("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=We("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=We("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=We("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=We("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=We("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=We("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=We("CloudDownload",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=We("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=We("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=We("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=We("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=We("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=We("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=We("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=We("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=We("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=We("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=We("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=We("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=We("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=We("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=We("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=We("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=We("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=We("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=We("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=We("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=We("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=We("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=We("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=We("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=We("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=We("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=We("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=We("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=We("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Jy({activeTab:t,setActiveTab:e,isPlaying:n}){const i=[{id:"studio",label:"DAW Studio",icon:rh},{id:"mixer",label:"Console Mixer",icon:Bl},{id:"ai_agents",label:"AI Agents (10)",icon:lg,badge:"AUTO"},{id:"dsp_rack",label:"DSP Rack",icon:ug},{id:"surround",label:"Surround 5.1/7.1",icon:kl},{id:"synths",label:"Synths & MIDI",icon:dg},{id:"mastering",label:"Mastering Suite",icon:Qa},{id:"analysis",label:"Acoustic RTA",icon:Ps},{id:"recording",label:"Live Mic Rec",icon:Za},{id:"exports",label:"Export & QC",icon:cg}];return o.jsx("header",{className:"bg-[#0b0e17] border-b border-slate-800/80 sticky top-0 z-50",children:o.jsxs("div",{className:"max-w-[1920px] mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:o.jsx(fg,{className:"w-5 h-5 text-black stroke-[2.5]"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"font-extrabold tracking-wider text-base text-white font-mono",children:"SONIQ AI"}),o.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800",children:"PRO v1.0"})]}),o.jsx("p",{className:"text-[11px] text-slate-400 font-mono",children:"Autonomous Studio & Surround Engineering"})]})]}),o.jsx("nav",{className:"flex items-center space-x-1 overflow-x-auto py-1",children:i.map(r=>{const s=r.icon,a=t===r.id;return o.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${a?"bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10":"text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent"}`,children:[o.jsx(s,{className:`w-3.5 h-3.5 ${a?"text-cyan-400":"text-slate-500"}`}),o.jsx("span",{children:r.label}),r.badge&&o.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-violet-950 text-violet-300 border border-violet-800",children:r.badge})]},r.id)})}),o.jsxs("div",{className:"hidden lg:flex items-center space-x-3 text-[11px] font-mono",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60",children:[o.jsx(pc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"64-bit Float DSP"})]}),o.jsx("div",{className:"text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800",children:o.jsx("span",{children:"48k/96k/192k Hz"})})]})]})})}const mg=()=>{if(typeof window<"u"){const t=localStorage.getItem("SONIQ_API_BASE");if(t)return t.replace(/\/+$/,"");const e=window.location.hostname;if(e!=="localhost"&&e!=="127.0.0.1"&&!e.startsWith("192.168."))return"https://n8n.rydetechglobal.com/soniq-api"}return""},pt=t=>{const e=mg(),n=t.startsWith("/")?t:`/${t}`;return e?`${e}${n}`:n},qt=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("blob:")?t:pt(t):"",yt=async(t,e={})=>{const n=await fetch(t,e),i=await n.text();try{const r=JSON.parse(i);if(!n.ok)throw new Error(r.detail||`Server error (${n.status})`);return r}catch(r){throw n.ok?r:new Error(`API error (${n.status}): The backend returned HTML instead of JSON. Ensure the backend is reachable at ${mg()||"localhost"}.`)}};class eS{constructor(){this.ctx=null,this.masterGain=null,this.analyser=null,this.tracks=new Map,this.isPlaying=!1,this.startTime=0,this.pauseOffset=0,this.mediaRecorder=null,this.recordedChunks=[],this.isBinauralMode=!1,this.spatialPos={x:0,y:.4,z:0},this.spatialPannerNode=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85;try{this.spatialPannerNode=this.ctx.createPanner(),this.spatialPannerNode.panningModel="HRTF",this.spatialPannerNode.distanceModel="inverse",this.spatialPannerNode.refDistance=1,this.spatialPannerNode.maxDistance=1e3,this.spatialPannerNode.rolloffFactor=.8,this.spatialPannerNode.coneInnerAngle=360,this.ctx.listener.forwardX?(this.ctx.listener.forwardX.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.forwardY.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.forwardZ.setValueAtTime(-1,this.ctx.currentTime),this.ctx.listener.upX.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.upY.setValueAtTime(1,this.ctx.currentTime),this.ctx.listener.upZ.setValueAtTime(0,this.ctx.currentTime)):this.ctx.listener.setOrientation&&this.ctx.listener.setOrientation(0,0,-1,0,1,0)}catch(n){console.warn("HRTF Panner initialization fallback:",n)}this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}setBinauralSpatialPosition(e,n,i=0){if(this.init(),this.spatialPos={x:e,y:n,z:i},!this.ctx||!this.spatialPannerNode)return;const r=e*2.8,s=i*2.2,a=-n*2.8,l=this.ctx.currentTime;try{this.spatialPannerNode.positionX?(this.spatialPannerNode.positionX.setTargetAtTime(r,l,.02),this.spatialPannerNode.positionY.setTargetAtTime(s,l,.02),this.spatialPannerNode.positionZ.setTargetAtTime(a,l,.02)):this.spatialPannerNode.setPosition&&this.spatialPannerNode.setPosition(r,s,a)}catch{}}setBinauralMode(e){if(this.isBinauralMode=!!e,this.isPlaying){const n=this.ctx.currentTime-this.startTime;this.playAll(n)}}async loadTrackAudio(e,n){this.init();try{const i=qt(n),s=await(await fetch(i)).arrayBuffer(),a=await this.ctx.decodeAudioData(s),l=this.tracks.get(e);return this.tracks.set(e,{buffer:a,volume:l?l.volume:1,pan:l?l.pan:0,mute:l?l.mute:!1,solo:l?l.solo:!1,source:null,gainNode:null,panNode:null}),a}catch(i){return console.error(`Failed to load audio for track ${e}:`,i),null}}playAll(e=0){this.init(),this.stopAll(),this.isPlaying=!0,this.startTime=this.ctx.currentTime-e,this.pauseOffset=e;const n=Array.from(this.tracks.values()).some(i=>i.solo);this.tracks.forEach((i,r)=>{if(!i.buffer)return;const s=this.ctx.createBufferSource();s.buffer=i.buffer;const a=this.ctx.createGain(),l=n?i.solo:!i.mute;a.gain.value=l?i.volume:0;let c=null;if(this.ctx.createStereoPanner?(c=this.ctx.createStereoPanner(),c.pan.value=i.pan,s.connect(c),c.connect(a)):s.connect(a),this.isBinauralMode&&this.spatialPannerNode){a.connect(this.spatialPannerNode);try{this.spatialPannerNode.disconnect()}catch{}this.spatialPannerNode.connect(this.masterGain)}else a.connect(this.masterGain);const u=Math.min(e,i.buffer.duration);s.start(0,u),i.source=s,i.gainNode=a,i.panNode=c})}pauseAll(){this.isPlaying&&(this.pauseOffset=this.ctx.currentTime-this.startTime,this.stopAll(),this.isPlaying=!1)}stopAll(){this.tracks.forEach(e=>{if(e.source){try{e.source.stop(),e.source.disconnect()}catch{}e.source=null}}),this.isPlaying=!1}clearAllTracks(){this.stopAll(),this.tracks.clear(),this.pauseOffset=0,this.startTime=0}setTrackVolume(e,n){const i=this.tracks.get(e);i&&(i.volume=n,i.gainNode&&!i.mute&&i.gainNode.gain.setValueAtTime(n,this.ctx?this.ctx.currentTime:0))}setTrackPan(e,n){const i=this.tracks.get(e);i&&(i.pan=Math.max(-1,Math.min(1,n)),i.panNode&&i.panNode.pan.setValueAtTime(i.pan,this.ctx?this.ctx.currentTime:0))}setTrackMute(e,n){const i=this.tracks.get(e);i&&(i.mute=n,this.updateSoloMuteStates())}setTrackSolo(e,n){const i=this.tracks.get(e);i&&(i.solo=n,this.updateSoloMuteStates())}updateSoloMuteStates(){const e=Array.from(this.tracks.values()).some(n=>n.solo);this.tracks.forEach(n=>{if(n.gainNode){const i=e?n.solo:!n.mute;n.gainNode.gain.setValueAtTime(i?n.volume:0,this.ctx?this.ctx.currentTime:0)}})}setMasterVolume(e){this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(e,this.ctx.currentTime)}getTelemetry(){if(!this.analyser)return{peak:-60,rms:-60,fftData:new Uint8Array(64)};const e=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(e);let n=0,i=0;for(let c=0;c<e.length;c++){const u=Math.abs(e[c]);u>i&&(i=u),n+=u*u}const r=Math.sqrt(n/e.length),s=i>1e-4?20*Math.log10(i):-60,a=r>1e-4?20*Math.log10(r):-60,l=new Uint8Array(64);return this.analyser.getByteFrequencyData(l),{peak:Math.round(s),rms:Math.round(a),fftData:l}}async startRecording(){this.init();const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});this.recordedChunks=[],this.mediaRecorder=new MediaRecorder(e),this.mediaRecorder.ondataavailable=n=>{n.data.size>0&&this.recordedChunks.push(n.data)},this.mediaRecorder.start()}async stopRecording(){return new Promise(e=>{if(!this.mediaRecorder)return e(null);this.mediaRecorder.onstop=()=>{const n=new Blob(this.recordedChunks,{type:"audio/wav"});e(n)},this.mediaRecorder.stop(),this.mediaRecorder.stream.getTracks().forEach(n=>n.stop())})}}const dt=new eS;function tS({isPlaying:t,onPlay:e,onPause:n,onStop:i,bpm:r=120,setBpm:s,onLoadDemo:a,loadingDemo:l}){const[c,u]=ne.useState(0),[h,m]=ne.useState(.85),[f,x]=ne.useState({peak:-60,rms:-60});ne.useEffect(()=>{let p;return t?p=setInterval(()=>{u(y=>y+.1);const S=dt.getTelemetry();x(S)},100):x({peak:-60,rms:-60}),()=>clearInterval(p)},[t]);const _=()=>{u(0),i()},b=p=>{const S=parseFloat(p.target.value);m(S),dt.setMasterVolume(S)},v=p=>{const S=Math.floor(p/60),y=Math.floor(p%60),T=Math.floor(p%1*100);return`${String(S).padStart(2,"0")}:${String(y).padStart(2,"0")}.${String(T).padStart(2,"0")}`},d=p=>{const S=r/60,y=Math.floor(p*S),T=Math.floor(y/4)+1,E=y%4+1;return`${T}.${E}.1`};return o.jsxs("div",{className:"bg-[#0e111a] border-t border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-50",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("button",{onClick:_,className:"p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Stop (Return to zero)",children:o.jsx(hg,{className:"w-4 h-4"})}),t?o.jsx("button",{onClick:n,className:"p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500/30 transition-colors",title:"Pause",children:o.jsx($y,{className:"w-5 h-5 fill-current"})}):o.jsx("button",{onClick:e,className:"p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors",title:"Play",children:o.jsx(qy,{className:"w-5 h-5 fill-current"})}),o.jsx("button",{onClick:()=>{},className:"p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors",title:"Loop Playback",children:o.jsx(Yy,{className:"w-4 h-4"})}),o.jsx("button",{onClick:()=>{},className:"p-2 rounded-lg bg-slate-800/80 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors",title:"Record Arm",children:o.jsx(ih,{className:"w-4 h-4 fill-rose-600/60"})})]}),o.jsxs("div",{className:"flex items-center space-x-3 bg-black/60 px-4 py-1.5 rounded-lg border border-slate-800 font-mono text-center",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Timecode"}),o.jsx("div",{className:"text-sm font-bold text-cyan-400 tracking-wider",children:v(c)})]}),o.jsx("div",{className:"w-px h-6 bg-slate-800"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Bar.Beat"}),o.jsx("div",{className:"text-sm font-bold text-violet-400 tracking-wider",children:d(c)})]}),o.jsx("div",{className:"w-px h-6 bg-slate-800"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Tempo"}),o.jsxs("div",{className:"text-sm font-bold text-slate-200",children:[r," BPM"]})]})]}),o.jsx("div",{className:"flex items-center space-x-2",children:o.jsxs("button",{onClick:a,disabled:l,className:"flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-violet-900/30 transition-all disabled:opacity-50",children:[o.jsx(Or,{className:"w-3.5 h-3.5 animate-pulse"}),o.jsx("span",{children:l?"Generating Demo...":"Load Studio Demo Project"})]})}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx(Qa,{className:"w-4 h-4 text-slate-400"}),o.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",value:h,onChange:b,className:"w-24 h-1.5 bg-slate-800 rounded-lg cursor-pointer"}),o.jsxs("div",{className:"flex flex-col space-y-0.5",children:[o.jsx("div",{className:"w-16 h-2 bg-slate-900 rounded-sm overflow-hidden flex",children:o.jsx("div",{className:`h-full transition-all duration-75 ${f.peak>-3?"bg-rose-500":f.peak>-12?"bg-amber-400":"bg-emerald-400"}`,style:{width:`${Math.max(0,Math.min(100,(f.peak+60)*1.66))}%`}})}),o.jsx("span",{className:"text-[9px] font-mono text-slate-500 text-right",children:f.peak>-59?`${f.peak} dB`:"-inf"})]})]})]})}function nS({tracks:t=[],onUpdateTrack:e,onAddTrack:n,onUploadFile:i,onClearSession:r,onLoadDemo:s,loadingDemo:a=!1,onNavigateTab:l,activeTrackId:c,setActiveTrackId:u,onOpenQuickFX:h}){const[m,f]=ne.useState(1),[x,_]=ne.useState(!1),b=ne.useRef(null),v=y=>{const T=y.target.files[0];T&&i(T)},d=y=>{if(y.preventDefault(),_(!1),y.dataTransfer.files&&y.dataTransfer.files.length>0)for(let T=0;T<y.dataTransfer.files.length;T++){const E=y.dataTransfer.files[T];(E.type.startsWith("audio/")||/\.(wav|flac|mp3|aiff|ogg|opus|m4a)$/i.test(E.name))&&i(E)}},p=y=>{y.preventDefault(),_(!0)},S=y=>{y.preventDefault(),_(!1)};return o.jsxs("div",{onDragOver:p,onDragLeave:S,onDrop:d,className:`flex-1 flex flex-col bg-[#080a10] border rounded-xl overflow-hidden m-4 shadow-2xl transition-colors duration-200 ${x?"border-cyan-400 bg-[#09111c]":"border-slate-800/80"}`,children:[o.jsxs("div",{className:"bg-[#0f131d] px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("span",{className:"font-mono font-bold text-slate-300 uppercase tracking-wider text-[11px]",children:["Multitrack Session (",t.length," Tracks)"]}),o.jsx("span",{className:"text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 font-mono",children:"Non-Destructive 64-bit"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[t.length>0&&h&&o.jsxs("button",{onClick:()=>{const y=t.find(T=>T.id===c)||t[0];y&&h(y)},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 text-cyan-300 border border-cyan-500/40 transition-colors font-bold cursor-pointer",children:[o.jsx(zl,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"1-Click Quick FX"})]}),o.jsx("input",{type:"file",ref:b,onChange:v,className:"hidden",accept:".wav,.flac,.mp3,.aiff,.ogg,.opus,.m4a",multiple:!0}),o.jsxs("button",{onClick:()=>{var y;return(y=b.current)==null?void 0:y.click()},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer",children:[o.jsx($p,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Import Audio File"})]}),o.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 transition-colors cursor-pointer",children:[o.jsx(za,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Add Audio Track"})]}),t.length>0&&r&&o.jsxs("button",{onClick:()=>{window.confirm("Clear current session and remove all tracks?")&&r()},className:"flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-800/60 hover:bg-rose-900/50 transition-colors cursor-pointer",title:"Clear DAW Session",children:[o.jsx(Zy,{className:"w-3.5 h-3.5 text-rose-400"}),o.jsx("span",{children:"Clear Session"})]})]})]}),o.jsx("div",{className:"flex-1 overflow-y-auto",children:t.length===0?o.jsxs("div",{className:"min-h-[440px] flex flex-col items-center justify-center text-center p-8 m-6 rounded-2xl border-2 border-dashed border-slate-800 bg-[#0a0d15]/60",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-850 to-violet-500/10 border border-slate-700/80 flex items-center justify-center mb-4 shadow-inner",children:o.jsx(Wy,{className:"w-8 h-8 text-cyan-400"})}),o.jsx("h3",{className:"text-lg font-bold text-slate-100 tracking-wide font-mono",children:"Pristine Studio Session"}),o.jsx("p",{className:"text-slate-400 text-xs max-w-lg mt-2 mb-6 font-mono leading-relaxed",children:"Drag & drop multitrack stems or audio recordings directly into this workspace, or use the controls below to begin editing."}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[o.jsxs("button",{onClick:()=>{var y;return(y=b.current)==null?void 0:y.click()},className:"flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer",children:[o.jsx($p,{className:"w-4 h-4 text-black stroke-[2.5]"}),o.jsx("span",{children:"Import Audio File(s)"})]}),l&&o.jsxs("button",{onClick:()=>l("recording"),className:"flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/40 font-semibold text-xs transition-colors cursor-pointer",children:[o.jsx(Za,{className:"w-4 h-4 text-violet-400"}),o.jsx("span",{children:"Record from Interface"})]}),o.jsxs("button",{onClick:n,className:"flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors cursor-pointer",children:[o.jsx(za,{className:"w-4 h-4 text-slate-400"}),o.jsx("span",{children:"Add Blank Track"})]})]}),o.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800/80 flex items-center space-x-3 text-xs text-slate-500",children:[o.jsx("span",{children:"Need a sample session for testing?"}),s&&o.jsxs("button",{onClick:s,disabled:a,className:"flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 hover:underline font-mono disabled:opacity-50 cursor-pointer",children:[o.jsx(Or,{className:"w-3.5 h-3.5 animate-pulse"}),o.jsx("span",{children:a?"Synthesizing Demo Session...":"Load Sample Multitrack Session"})]})]}),o.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono text-slate-500",children:[o.jsx("span",{children:"WAV, FLAC, MP3, AIFF, OGG, Opus"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"64-bit Floating Point Architecture"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"PDPA-Compliant Sovereign Storage"})]})]}):o.jsx("div",{className:"divide-y divide-slate-850",children:t.map(y=>{const T=c===y.id;return o.jsxs("div",{onClick:()=>u(y.id),className:`flex transition-colors cursor-pointer ${T?"bg-slate-900/90":"bg-[#0a0d14] hover:bg-slate-900/40"}`,children:[o.jsxs("div",{className:"w-64 p-3 border-r border-slate-800/80 flex flex-col justify-between shrink-0 space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:y.color||"#00f2fe"}}),o.jsx("span",{className:"font-mono text-xs font-bold text-slate-200 truncate",children:y.name})]}),o.jsx("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400",children:y.category||"Audio"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400",children:[o.jsx("span",{children:"VOL"}),o.jsx("span",{children:y.volume_db?`${y.volume_db} dB`:"0 dB"})]}),o.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.02",defaultValue:1,onChange:E=>{const g=parseFloat(E.target.value);dt.setTrackVolume(y.id,g),e(y.id,{volume:g})},className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{className:"flex items-center space-x-1.5 pt-1",children:[o.jsx("button",{onClick:E=>{E.stopPropagation();const g=!y.mute;dt.setTrackMute(y.id,g),e(y.id,{mute:g})},className:`px-2 py-0.5 text-[10px] font-bold rounded ${y.mute?"bg-amber-500 text-black":"bg-slate-800 text-slate-400 hover:text-white"}`,children:"M"}),o.jsx("button",{onClick:E=>{E.stopPropagation();const g=!y.solo;dt.setTrackSolo(y.id,g),e(y.id,{solo:g})},className:`px-2 py-0.5 text-[10px] font-bold rounded ${y.solo?"bg-cyan-400 text-black":"bg-slate-800 text-slate-400 hover:text-white"}`,children:"S"}),o.jsx("button",{onClick:E=>E.stopPropagation(),className:"p-1 rounded bg-slate-800 text-slate-500 hover:text-rose-400",title:"Record Arm",children:o.jsx(ih,{className:"w-3 h-3 fill-rose-600/40"})}),h&&o.jsxs("button",{onClick:E=>{E.stopPropagation(),h(y)},className:"flex items-center space-x-1 px-2 py-0.5 text-[10px] font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-700 hover:bg-cyan-900 transition-colors ml-auto",title:"Instant Effects & Mastering",children:[o.jsx(zl,{className:"w-2.5 h-2.5 text-cyan-400"}),o.jsx("span",{children:"FX"})]})]})]}),o.jsx("div",{className:"flex-1 p-3 flex items-center relative overflow-hidden bg-black/30",children:o.jsxs("div",{className:"w-full h-16 rounded-lg border border-slate-800/80 relative flex items-center px-2 overflow-hidden",style:{backgroundColor:`${y.color||"#00f2fe"}10`,borderColor:`${y.color||"#00f2fe"}40`},children:[o.jsx("div",{className:"w-full h-full flex items-center space-x-0.5",children:(y.waveform||Array.from({length:80}).map((E,g)=>Math.sin(g*.2)*.5+.5)).map((E,g)=>{const M=Math.max(8,Math.min(95,E*100));return o.jsx("div",{className:"flex-1 rounded-sm",style:{height:`${M}%`,backgroundColor:y.color||"#00f2fe"}},g)})}),o.jsxs("div",{className:"absolute top-1 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 rounded",children:[y.name,".wav"]})]})})]},y.id)})})})]})}function iS({tracks:t=[],onUpdateTrack:e}){return o.jsxs("div",{className:"flex-1 flex flex-col bg-[#07090f] p-4 overflow-x-auto",children:[o.jsx("div",{className:"flex items-center justify-between mb-4",children:o.jsxs("div",{children:[o.jsxs("h2",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(Bl,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"STUDIO MIXING CONSOLE (64-BIT DUAL-PRECISION)"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Direct fader gain staging, rotary pan, inserts, sends, and master summing bus."})]})}),o.jsxs("div",{className:"flex items-stretch space-x-3 pb-6 flex-1 min-h-[500px]",children:[t.map(n=>o.jsxs("div",{className:"w-36 bg-[#0c101a] border border-slate-800 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-lg relative",children:[o.jsxs("div",{className:"text-center pb-2 border-b border-slate-800/80",children:[o.jsx("div",{className:"w-3 h-1 rounded mx-auto mb-1",style:{backgroundColor:n.color||"#00f2fe"}}),o.jsx("div",{className:"font-mono text-xs font-bold text-slate-100 truncate",children:n.name}),o.jsx("div",{className:"text-[10px] font-mono text-slate-500 uppercase",children:n.category})]}),o.jsxs("div",{className:"space-y-1 my-2",children:[o.jsx("div",{className:"text-[8px] font-mono text-slate-500 uppercase",children:"Inserts"}),o.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 truncate",children:"1. Parametric EQ"}),o.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-800 truncate",children:"2. Opto Compressor"})]}),o.jsxs("div",{className:"my-2 text-center",children:[o.jsxs("div",{className:"text-[9px] font-mono text-slate-400",children:["PAN: ",n.pan||0]}),o.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.05",defaultValue:n.pan||0,onChange:i=>{const r=parseFloat(i.target.value);dt.setTrackPan(n.id,r),e(n.id,{pan:r})},className:"w-20 h-1 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{className:"flex-1 flex justify-center items-center space-x-3 my-4",children:[o.jsx("div",{className:"h-44 flex items-center",children:o.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",defaultValue:n.volume||1,onChange:i=>{const r=parseFloat(i.target.value);dt.setTrackVolume(n.id,r),e(n.id,{volume:r})},className:"h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"})}),o.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-850 overflow-hidden flex flex-col-reverse p-0.5",children:o.jsx("div",{className:"w-full bg-emerald-400 rounded-sm h-[65%]"})})]}),o.jsxs("div",{className:"flex items-center space-x-1.5 pt-2 border-t border-slate-800/80",children:[o.jsx("button",{onClick:()=>{const i=!n.mute;dt.setTrackMute(n.id,i),e(n.id,{mute:i})},className:`flex-1 py-1 text-[10px] font-bold rounded ${n.mute?"bg-amber-500 text-black":"bg-slate-800 text-slate-400"}`,children:"MUTE"}),o.jsx("button",{onClick:()=>{const i=!n.solo;dt.setTrackSolo(n.id,i),e(n.id,{solo:i})},className:`flex-1 py-1 text-[10px] font-bold rounded ${n.solo?"bg-cyan-400 text-black":"bg-slate-800 text-slate-400"}`,children:"SOLO"})]}),o.jsx("div",{className:"text-center mt-2 text-[10px] font-mono text-cyan-400 font-bold",children:n.volume_db||"0.0 dB"})]},n.id)),o.jsxs("div",{className:"w-44 bg-[#111624] border-2 border-cyan-500/40 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-2xl relative",children:[o.jsxs("div",{className:"text-center pb-2 border-b border-cyan-500/30",children:[o.jsx("div",{className:"font-mono text-xs font-black text-cyan-300 tracking-wider",children:"MASTER SUM"}),o.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"BUS 1-2 (STEREO)"})]}),o.jsxs("div",{className:"space-y-1 my-2",children:[o.jsx("div",{className:"text-[8px] font-mono text-slate-400 uppercase",children:"Master Chain"}),o.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-emerald-300 border border-emerald-900 truncate",children:"True-Peak Limiter"}),o.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-900 truncate",children:"Tape Saturation"})]}),o.jsxs("div",{className:"flex-1 flex justify-center items-center space-x-3 my-4",children:[o.jsx("div",{className:"h-44 flex items-center",children:o.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",defaultValue:.85,onChange:n=>dt.setMasterVolume(parseFloat(n.target.value)),className:"h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"})}),o.jsxs("div",{className:"flex space-x-1",children:[o.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5",children:o.jsx("div",{className:"w-full bg-cyan-400 rounded-sm h-[72%]"})}),o.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5",children:o.jsx("div",{className:"w-full bg-cyan-400 rounded-sm h-[70%]"})})]})]}),o.jsx("div",{className:"text-center text-[10px] font-mono text-emerald-400 font-bold",children:"-0.1 dBTP CEILING"})]})]})]})}function rS({activeFile:t,tracks:e=[],onRefreshTracks:n}){const[i,r]=ne.useState(""),[s,a]=ne.useState(!1),[l,c]=ne.useState(null),[u,h]=ne.useState(null),[m,f]=ne.useState(""),x=["Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC.","Analyze frequency balance and propose an editable multitrack mix.","Tune vocals, apply 6.5kHz de-essing, and master for streaming at -14 LUFS.","De-noise old recording and repair peak clipping."],_=async d=>{const p=d||i;if(!p)return;const S=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!S){alert("Please import an audio file or record a track first.");return}a(!0),f("Agent 10: Formulating Autonomous Multi-Agent Production Plan...");try{const y=await yt(pt("/api/v1/audio/orchestrate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:p,file_path:S})});c(y),f("Autonomous Production Pipeline Executed Successfully!")}catch(y){f(`Error: ${y.message}`)}finally{a(!1)}},b=async(d,p,S)=>{const y=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!y){alert("Please import an audio file or record a track first.");return}a(!0),f(`Executing ${d}...`);try{let T;if(p==="/api/v1/audio/mix-proposal")T=await yt(pt(p),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});else{const E=new FormData;E.append("file_path",y),T=await yt(pt(p),{method:"POST",body:E})}h({agentId:d,data:T}),f(`${d} completed successfully!`)}catch(T){f(`Error: ${T.message}`)}finally{a(!1)}},v=[{id:"Agent 01: Audio Analyst",role:"Acoustic inspection, LUFS, True Peak, Phase",endpoint:"/api/v1/audio/analyze",color:"text-cyan-400",border:"border-cyan-800"},{id:"Agent 02: Stem Separator",role:"Harmonic/Percussive stem isolation (Vocals, Drums, Bass, Other)",endpoint:"/api/v1/audio/separate-stems",color:"text-violet-400",border:"border-violet-800"},{id:"Agent 03: Audio Restoration",role:"Spectral de-noise, 50/60Hz notch de-hum, de-clip",endpoint:"/api/v1/audio/restore",color:"text-emerald-400",border:"border-emerald-800"},{id:"Agent 04: Mixing Engineer",role:"Multitrack gain staging, pan, EQ and dynamics proposal",endpoint:"/api/v1/audio/mix-proposal",color:"text-amber-400",border:"border-amber-800"},{id:"Agent 05: Music Arranger",role:"BPM detection, musical key, song sections",endpoint:"/api/v1/audio/arrangement",color:"text-pink-400",border:"border-pink-800"},{id:"Agent 06: Vocal Engineer",role:"Pitch tuning, sibilance de-essing, opto compression",endpoint:"/api/v1/audio/vocal-process",color:"text-indigo-400",border:"border-indigo-800"},{id:"Agent 07: Mastering Engineer",role:"EBU R128 / ITU-R BS.1770 loudness normalizer",endpoint:"/api/v1/audio/master",color:"text-yellow-400",border:"border-yellow-800"},{id:"Agent 08: Surround Engineer",role:"5.1 / 7.1 VBAP spatial upmix and LFE crossover",endpoint:"/api/v1/audio/surround",color:"text-teal-400",border:"border-teal-800"},{id:"Agent 09: Quality Control",role:"Pre-flight delivery verification & clipping check",endpoint:"/api/v1/audio/qc-audit",color:"text-rose-400",border:"border-rose-800"}];return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"bg-gradient-to-r from-violet-950/60 via-slate-900 to-cyan-950/60 p-6 rounded-2xl border border-slate-800 shadow-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:o.jsx(lg,{className:"w-6 h-6 text-black stroke-[2.5]"})}),o.jsxs("div",{children:[o.jsxs("h1",{className:"text-lg font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx("span",{children:"AGENT 10: PRODUCTION MANAGER"}),o.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800",children:"SOVEREIGN LLM + DETERMINISTIC ACOUSTICS"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Instruct the multi-agent system in natural language. Formulates production plans and executes them through actual DSP tools."})]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"text",value:i,onChange:d=>r(d.target.value),placeholder:"e.g. Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC.",className:"flex-1 bg-black/80 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"}),o.jsxs("button",{onClick:()=>_(i),disabled:s,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all shrink-0",children:[o.jsx(Or,{className:"w-4 h-4 fill-black"}),o.jsx("span",{children:s?"Orchestrating...":"Execute Autonomous Plan"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[o.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"Quick Directives:"}),x.map((d,p)=>o.jsxs("button",{onClick:()=>{r(d),_(d)},className:"text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors",children:['"',d.slice(0,48),'..."']},p))]}),m&&o.jsxs("div",{className:"text-xs font-mono text-cyan-300 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-800/60 flex items-center space-x-2",children:[o.jsx(Ps,{className:"w-4 h-4 animate-spin text-cyan-400"}),o.jsx("span",{children:m})]})]}),l&&o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("span",{className:"font-mono text-xs font-bold text-cyan-300 flex items-center space-x-2",children:[o.jsx(hc,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"Production Plan Execution Complete"})]}),o.jsxs("a",{href:qt(l.download_url),download:!0,className:"flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors",children:[o.jsx(dr,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Download Final Master FLAC"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono",children:l.pipeline_executed.map((d,p)=>o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1",children:[o.jsxs("div",{className:"text-[10px] text-cyan-400 font-bold uppercase",children:["Step ",d.step]}),o.jsx("div",{className:"text-white font-semibold",children:d.agent}),o.jsx("p",{className:"text-[10px] text-slate-400",children:d.description})]},p))})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-bold text-white font-mono uppercase tracking-wider mb-3",children:"Specialist Autonomous Engineering Agents"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:v.map(d=>o.jsxs("div",{className:`bg-[#0c101a] p-4 rounded-xl border ${d.border} flex flex-col justify-between space-y-3 shadow-lg`,children:[o.jsxs("div",{children:[o.jsx("div",{className:`font-mono text-xs font-bold ${d.color}`,children:d.id}),o.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d.role})]}),o.jsx("button",{onClick:()=>b(d.id,d.endpoint),disabled:s,className:"w-full py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700 transition-colors flex items-center justify-center space-x-2",children:o.jsxs("span",{children:["Trigger ",d.id.split(":")[0]]})})]},d.id))})]}),u&&o.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-slate-800 space-y-2",children:[o.jsxs("div",{className:"text-xs font-bold text-cyan-400 font-mono",children:[u.agentId," Output"]}),o.jsx("pre",{className:"text-[11px] font-mono text-slate-300 bg-slate-950 p-3 rounded-lg overflow-x-auto max-h-60",children:JSON.stringify(u.data,null,2)})]})]})}function sS({activeFile:t,tracks:e=[],onApplyDSP:n}){var S,y;const[i,r]=ne.useState([{type:"highpass",freq:30,gain_db:0,q:.707},{type:"lowshelf",freq:100,gain_db:2.5,q:.707},{type:"peaking",freq:350,gain_db:-1.5,q:1.2},{type:"peaking",freq:1e3,gain_db:1,q:1},{type:"peaking",freq:3500,gain_db:2,q:1.2},{type:"highshelf",freq:1e4,gain_db:2,q:.707}]),[s,a]=ne.useState({threshold_db:-18,ratio:3.5,attack_ms:15,release_ms:120,makeup_gain_db:2}),[l,c]=ne.useState({room_size:.7,damping:.3,wet_level:.25}),[u,h]=ne.useState({drive_db:3,mode:"tape"}),[m,f]=ne.useState(115),[x,_]=ne.useState(!1),[b,v]=ne.useState(null),d=ne.useRef(null);ne.useEffect(()=>{const T=d.current;if(!T)return;const E=T.getContext("2d"),g=T.width,M=T.height;E.clearRect(0,0,g,M),E.strokeStyle="#1e2638",E.lineWidth=1;for(let N of[50,100,250,500,1e3,2500,5e3,1e4,2e4]){const R=Math.log10(N/20)/Math.log10(1e3)*g;E.beginPath(),E.moveTo(R,0),E.lineTo(R,M),E.stroke()}E.strokeStyle="#334155",E.beginPath(),E.moveTo(0,M/2),E.lineTo(g,M/2),E.stroke(),E.strokeStyle="#00f2fe",E.lineWidth=2.5,E.beginPath();for(let N=0;N<g;N++){const R=20*Math.pow(1e3,N/g);let P=0;i.forEach(z=>{const L=Math.abs(Math.log10(R/z.freq));z.type==="peaking"?P+=z.gain_db*Math.exp(-L*L*z.q*3):(z.type==="lowshelf"&&R<z.freq||z.type==="highshelf"&&R>z.freq)&&(P+=z.gain_db)});const F=M/2-P*4;N===0?E.moveTo(N,F):E.lineTo(N,F)}E.stroke()},[i]);const p=async()=>{const T=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!T){alert("Please import an audio file or record a track first.");return}_(!0);try{const E=[{type:"eq",bands:i},{type:"compressor",...s},{type:"reverb",...l},{type:"saturation",...u},{type:"widener",width_pct:m}],g=await yt(pt("/api/v1/dsp/process"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:T,operations:E})});v(g)}catch(E){alert(`DSP error: ${E.message}`)}finally{_(!1)}};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(ug,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"STUDIO DSP HARDWARE-EMULATION RACK"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"64-bit float precision modules: Parametric EQ, Opto-Compressor, Tube/Tape Saturation, Algorithmic Reverb, Stereo Imager."})]}),o.jsx("button",{onClick:p,disabled:x,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:x?"Processing 64-bit Audio...":"Apply DSP Rack to Track"})]}),o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-mono text-xs font-bold text-cyan-300",children:"8-Band Studio Parametric Equalizer (RBJ Biquad Cookbook)"}),o.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"20 Hz - 20 kHz Frequency Spectrum"})]}),o.jsx("canvas",{ref:d,width:800,height:160,className:"w-full h-36 bg-black/60 rounded-xl border border-slate-800"}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-6 gap-3",children:i.map((T,E)=>o.jsxs("div",{className:"bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[o.jsx("div",{className:"text-[10px] text-cyan-400 font-bold uppercase",children:T.type}),o.jsxs("div",{className:"text-[10px] text-slate-400",children:[T.freq," Hz"]}),o.jsx("input",{type:"range",min:"-12",max:"12",step:"0.5",value:T.gain_db,onChange:g=>{const M=[...i];M[E].gain_db=parseFloat(g.target.value),r(M)},className:"w-full h-1 bg-slate-800 rounded cursor-pointer"}),o.jsxs("div",{className:"text-[9px] text-slate-500 text-right",children:[T.gain_db," dB"]})]},E))})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[o.jsx("div",{className:"font-mono text-xs font-bold text-violet-300",children:"Dynamic Optical Compressor"}),o.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsx("span",{children:"Threshold"}),o.jsxs("span",{children:[s.threshold_db," dB"]})]}),o.jsx("input",{type:"range",min:"-40",max:"0",value:s.threshold_db,onChange:T=>a({...s,threshold_db:parseFloat(T.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsx("span",{children:"Ratio"}),o.jsxs("span",{children:[s.ratio,":1"]})]}),o.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:s.ratio,onChange:T=>a({...s,ratio:parseFloat(T.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[o.jsx("div",{className:"font-mono text-xs font-bold text-emerald-300",children:"Moorer/Schroeder Reverb"}),o.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsx("span",{children:"Room Size"}),o.jsxs("span",{children:[Math.round(l.room_size*100),"%"]})]}),o.jsx("input",{type:"range",min:"0.1",max:"0.95",step:"0.05",value:l.room_size,onChange:T=>c({...l,room_size:parseFloat(T.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsx("span",{children:"Wet Mix"}),o.jsxs("span",{children:[Math.round(l.wet_level*100),"%"]})]}),o.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:l.wet_level,onChange:T=>c({...l,wet_level:parseFloat(T.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[o.jsx("div",{className:"font-mono text-xs font-bold text-amber-300",children:"Harmonic Saturation & Stereo Imager"}),o.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsxs("span",{children:["Drive (",u.mode.toUpperCase(),")"]}),o.jsxs("span",{children:[u.drive_db," dB"]})]}),o.jsx("input",{type:"range",min:"0",max:"12",step:"0.5",value:u.drive_db,onChange:T=>h({...u,drive_db:parseFloat(T.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[o.jsx("span",{children:"Stereo Width"}),o.jsxs("span",{children:[m,"%"]})]}),o.jsx("input",{type:"range",min:"50",max:"200",step:"5",value:m,onChange:T=>f(parseInt(T.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]})]}),b&&o.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-emerald-500/40 flex items-center justify-between",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("div",{className:"text-xs font-bold text-emerald-400 font-mono",children:"DSP Rack Processed Successfully"}),o.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:["Peak: ",(S=b.metrics)==null?void 0:S.sample_peak_dbfs," dBFS • Integrated: ",(y=b.metrics)==null?void 0:y.integrated_lufs," LUFS"]})]}),o.jsxs("a",{href:qt(b.download_url),download:!0,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors",children:[o.jsx(dr,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Download Processed WAV"})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="187",aS=0,Kp=1,oS=2,al=1,lS=2,ca=3,kr=0,En=1,Jn=2,Ms=0,Sa=1,Zp=2,Qp=3,Jp=4,cS=5,is=100,uS=101,dS=102,fS=103,hS=104,pS=200,mS=201,xS=202,gS=203,xg=204,gg=205,vS=206,_S=207,yS=208,SS=209,MS=210,bS=211,ES=212,wS=213,TS=214,vd=0,_d=1,yd=2,Ha=3,Sd=4,Md=5,bd=6,Ed=7,vg=0,AS=1,RS=2,Ni=0,_g=1,yg=2,Sg=3,Mg=4,bg=5,Eg=6,wg=7,Tg=300,Ls=301,Ga=302,Yc=303,Kc=304,wd=1e3,Ri=1001,Td=1002,Yt=1003,CS=1004,Eo=1005,yn=1006,Zc=1007,Ji=1008,Rn=1009,Ag=1010,Rg=1011,ja=1012,ah=1013,xi=1014,di=1015,gi=1016,oh=1017,lh=1018,Ds=1020,Cg=35902,Ng=35899,Pg=1021,Lg=1022,fi=1023,fr=1026,er=1027,Dg=1028,ch=1029,Br=1030,uh=1031,dh=1033,ol=33776,ll=33777,cl=33778,ul=33779,Ad=35840,Rd=35841,Cd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Ud=37489,Hl=37490,Fd=37491,Od=37808,kd=37809,Bd=37810,zd=37811,Hd=37812,Gd=37813,jd=37814,Vd=37815,Wd=37816,Xd=37817,$d=37818,qd=37819,Yd=37820,Kd=37821,Zd=36492,Qd=36494,Jd=36495,ef=36283,tf=36284,Gl=36285,nf=36286,NS=3200,rf=0,PS=1,Ki="",On="srgb",jl="srgb-linear",Vl="linear",at="srgb",Qc=7680,LS=519,DS=512,IS=513,US=514,Ig=515,FS=516,OS=517,Ug=518,Fg=519,kS=35044,em="300 es",ti=2e3,Va=2001;function BS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zS(){const t=Wl("canvas");return t.style.display="block",t}const tm={};function nm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Og(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=Og(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=Og(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function dl(...t){const e=t.join(" ");e in tm||(tm[e]=!0,Ie(...t))}function HS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const GS={[vd]:vd,[yd]:bd,[Sd]:Sd,[Ha]:Md,[_d]:_d,[bd]:yd,[Ed]:Ed,[Md]:Ha};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,sf=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function jS(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function VS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function WS(t,e){if(e.constructor===Float32Array)return t;const n=fh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function XS(t,e){if(e.constructor===Float32Array)return t;const n=fh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Sh=class Sh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;let qe=Sh;class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],m=i[r+3],f=s[a+0],x=s[a+1],_=s[a+2],b=s[a+3];if(m!==b||c!==f||u!==x||h!==_){let v=c*f+u*x+h*_+m*b;v<0&&(f=-f,x=-x,_=-_,b=-b,v=-v);let d=1-l;if(v<.9995){const p=Math.acos(v),S=Math.sin(p);d=Math.sin(d*p)/S,l=Math.sin(l*p)/S,c=c*d+f*l,u=u*d+x*l,h=h*d+_*l,m=m*d+b*l}else{c=c*d+f*l,u=u*d+x*l,h=h*d+_*l,m=m*d+b*l;const p=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=p,u*=p,h*=p,m*=p}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],m=s[a],f=s[a+1],x=s[a+2],_=s[a+3];return e[n]=l*_+h*m+c*x-u*f,e[n+1]=c*_+h*f+u*m-l*x,e[n+2]=u*_+h*x+l*f-c*m,e[n+3]=h*_-l*m-c*f-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),m=l(s/2),f=c(i/2),x=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*m+u*x*_,this._y=u*x*m-f*h*_,this._z=u*h*_+f*x*m,this._w=u*h*m-f*x*_;break;case"YXZ":this._x=f*h*m+u*x*_,this._y=u*x*m-f*h*_,this._z=u*h*_-f*x*m,this._w=u*h*m+f*x*_;break;case"ZXY":this._x=f*h*m-u*x*_,this._y=u*x*m+f*h*_,this._z=u*h*_+f*x*m,this._w=u*h*m-f*x*_;break;case"ZYX":this._x=f*h*m-u*x*_,this._y=u*x*m+f*h*_,this._z=u*h*_-f*x*m,this._w=u*h*m+f*x*_;break;case"YZX":this._x=f*h*m+u*x*_,this._y=u*x*m+f*h*_,this._z=u*h*_-f*x*m,this._w=u*h*m-f*x*_;break;case"XZY":this._x=f*h*m-u*x*_,this._y=u*x*m-f*h*_,this._z=u*h*_+f*x*m,this._w=u*h*m+f*x*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],m=n[10],f=i+l+m;if(f>0){const x=.5/Math.sqrt(f+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-u)*x,this._z=(a-r)*x}else if(i>l&&i>m){const x=2*Math.sqrt(1+i-l-m);this._w=(h-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+u)/x}else if(l>m){const x=2*Math.sqrt(1+l-i-m);this._w=(s-u)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+m-i-l);this._w=(a-r)/x,this._x=(s+u)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mh=class Mh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-s*r),m=2*(s*i-a*n);return this.x=n+c*u+a*m-l*h,this.y=i+c*h+l*u-s*m,this.z=r+c*m+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;let G=Mh;const tu=new G,im=new Bs,bh=class bh{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],m=i[7],f=i[2],x=i[5],_=i[8],b=r[0],v=r[3],d=r[6],p=r[1],S=r[4],y=r[7],T=r[2],E=r[5],g=r[8];return s[0]=a*b+l*p+c*T,s[3]=a*v+l*S+c*E,s[6]=a*d+l*y+c*g,s[1]=u*b+h*p+m*T,s[4]=u*v+h*S+m*E,s[7]=u*d+h*y+m*g,s[2]=f*b+x*p+_*T,s[5]=f*v+x*S+_*E,s[8]=f*d+x*y+_*g,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],m=h*a-l*u,f=l*c-h*s,x=u*s-a*c,_=n*m+i*f+r*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=m*b,e[1]=(r*u-h*i)*b,e[2]=(l*i-r*a)*b,e[3]=f*b,e[4]=(h*n-r*c)*b,e[5]=(r*s-l*n)*b,e[6]=x*b,e[7]=(i*c-u*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return dl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,n)),this}rotate(e){return dl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return dl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;let Oe=bh;const nu=new Oe,rm=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const t={enabled:!0,workingColorSpace:jl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jl]:{primaries:e,whitePoint:i,transfer:Vl,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:at,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Ke=$S();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class qS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=Wl("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class hh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let KS=0;const ru=new G;class pn extends jr{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Ri,r=Ri,s=yn,a=Ji,l=fi,c=Rn,u=pn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ja(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Tg;pn.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],m=c[8],f=c[1],x=c[5],_=c[9],b=c[2],v=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(m-b)<.01&&Math.abs(_-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(m+b)<.1&&Math.abs(_+v)<.1&&Math.abs(u+x+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,y=(x+1)/2,T=(d+1)/2,E=(h+f)/4,g=(m+b)/4,M=(_+v)/4;return S>y&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=g/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=M/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=g/s,r=M/s),this.set(i,r,s,n),this}let p=Math.sqrt((v-_)*(v-_)+(m-b)*(m-b)+(f-h)*(f-h));return Math.abs(p)<.001&&(p=1),this.x=(v-_)/p,this.y=(m-b)/p,this.z=(f-h)/p,this.w=Math.acos((u+x+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let wt=Eh;class ZS extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new pn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends ZS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kg extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kl=class Kl{constructor(e,n,i,r,s,a,l,c,u,h,m,f,x,_,b,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,h,m,f,x,_,b,v)}set(e,n,i,r,s,a,l,c,u,h,m,f,x,_,b,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=m,d[14]=f,d[3]=x,d[7]=_,d[11]=b,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=a*h,x=a*m,_=l*h,b=l*m;n[0]=c*h,n[4]=-c*m,n[8]=u,n[1]=x+_*u,n[5]=f-b*u,n[9]=-l*c,n[2]=b-f*u,n[6]=_+x*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,x=c*m,_=u*h,b=u*m;n[0]=f+b*l,n[4]=_*l-x,n[8]=a*u,n[1]=a*m,n[5]=a*h,n[9]=-l,n[2]=x*l-_,n[6]=b+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,x=c*m,_=u*h,b=u*m;n[0]=f-b*l,n[4]=-a*m,n[8]=_+x*l,n[1]=x+_*l,n[5]=a*h,n[9]=b-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,x=a*m,_=l*h,b=l*m;n[0]=c*h,n[4]=_*u-x,n[8]=f*u+b,n[1]=c*m,n[5]=b*u+f,n[9]=x*u-_,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,x=a*u,_=l*c,b=l*u;n[0]=c*h,n[4]=b-f*m,n[8]=_*m+x,n[1]=m,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=x*m+_,n[10]=f-b*m}else if(e.order==="XZY"){const f=a*c,x=a*u,_=l*c,b=l*u;n[0]=c*h,n[4]=-m,n[8]=u*h,n[1]=f*m+b,n[5]=a*h,n[9]=x*m-_,n[2]=_*m-x,n[6]=l*h,n[10]=b*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,eM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(i,wn),zi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(i,wn)),zi.normalize(),wo.crossVectors(wn,zi),r[0]=zi.x,r[4]=wo.x,r[8]=wn.x,r[1]=zi.y,r[5]=wo.y,r[9]=wn.y,r[2]=zi.z,r[6]=wo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],m=i[5],f=i[9],x=i[13],_=i[2],b=i[6],v=i[10],d=i[14],p=i[3],S=i[7],y=i[11],T=i[15],E=r[0],g=r[4],M=r[8],N=r[12],R=r[1],P=r[5],F=r[9],z=r[13],L=r[2],j=r[6],Y=r[10],I=r[14],U=r[3],O=r[7],H=r[11],q=r[15];return s[0]=a*E+l*R+c*L+u*U,s[4]=a*g+l*P+c*j+u*O,s[8]=a*M+l*F+c*Y+u*H,s[12]=a*N+l*z+c*I+u*q,s[1]=h*E+m*R+f*L+x*U,s[5]=h*g+m*P+f*j+x*O,s[9]=h*M+m*F+f*Y+x*H,s[13]=h*N+m*z+f*I+x*q,s[2]=_*E+b*R+v*L+d*U,s[6]=_*g+b*P+v*j+d*O,s[10]=_*M+b*F+v*Y+d*H,s[14]=_*N+b*z+v*I+d*q,s[3]=p*E+S*R+y*L+T*U,s[7]=p*g+S*P+y*j+T*O,s[11]=p*M+S*F+y*Y+T*H,s[15]=p*N+S*z+y*I+T*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],m=e[6],f=e[10],x=e[14],_=e[3],b=e[7],v=e[11],d=e[15],p=c*x-u*f,S=l*x-u*m,y=l*f-c*m,T=a*x-u*h,E=a*f-c*h,g=a*m-l*h;return n*(b*p-v*S+d*y)-i*(_*p-v*T+d*E)+r*(_*S-b*T+d*g)-s*(_*y-b*E+v*g)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-l*u)-i*(s*h-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],m=e[9],f=e[10],x=e[11],_=e[12],b=e[13],v=e[14],d=e[15],p=n*l-i*a,S=n*c-r*a,y=n*u-s*a,T=i*c-r*l,E=i*u-s*l,g=r*u-s*c,M=h*b-m*_,N=h*v-f*_,R=h*d-x*_,P=m*v-f*b,F=m*d-x*b,z=f*d-x*v,L=p*z-S*F+y*P+T*R-E*N+g*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/L;return e[0]=(l*z-c*F+u*P)*j,e[1]=(r*F-i*z-s*P)*j,e[2]=(b*g-v*E+d*T)*j,e[3]=(f*E-m*g-x*T)*j,e[4]=(c*R-a*z-u*N)*j,e[5]=(n*z-r*R+s*N)*j,e[6]=(v*y-_*g-d*S)*j,e[7]=(h*g-f*y+x*S)*j,e[8]=(a*F-l*R+u*M)*j,e[9]=(i*R-n*F-s*M)*j,e[10]=(_*E-b*y+d*p)*j,e[11]=(m*y-h*E-x*p)*j,e[12]=(l*N-a*P-c*M)*j,e[13]=(n*P-i*N+r*M)*j,e[14]=(b*S-_*T-v*p)*j,e[15]=(h*T-m*S+f*p)*j,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,h=a+a,m=l+l,f=s*u,x=s*h,_=s*m,b=a*h,v=a*m,d=l*m,p=c*u,S=c*h,y=c*m,T=i.x,E=i.y,g=i.z;return r[0]=(1-(b+d))*T,r[1]=(x+y)*T,r[2]=(_-S)*T,r[3]=0,r[4]=(x-y)*E,r[5]=(1-(f+d))*E,r[6]=(v+p)*E,r[7]=0,r[8]=(_+S)*g,r[9]=(v-p)*g,r[10]=(1-(f+b))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const l=Xr.set(r[4],r[5],r[6]).length(),c=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const u=1/a,h=1/l,m=1/c;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=m,$n.elements[9]*=m,$n.elements[10]*=m,n.setFromRotationMatrix($n),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=ti,c=!1){const u=this.elements,h=2*s/(n-e),m=2*s/(i-r),f=(n+e)/(n-e),x=(i+r)/(i-r);let _,b;if(c)_=s/(a-s),b=a*s/(a-s);else if(l===ti)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(l===Va)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=m,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=ti,c=!1){const u=this.elements,h=2/(n-e),m=2/(i-r),f=-(n+e)/(n-e),x=-(i+r)/(i-r);let _,b;if(c)_=1/(a-s),b=a/(a-s);else if(l===ti)_=-2/(a-s),b=-(a+s)/(a-s);else if(l===Va)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=m,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kl.prototype.isMatrix4=!0;let Mt=Kl;const Xr=new G,$n=new Mt,JS=new G(0,0,0),eM=new G(1,1,1),zi=new G,wo=new G,wn=new G,am=new Mt,om=new Bs;class hr{constructor(e=0,n=0,i=0,r=hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],m=r[2],f=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hr.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const lm=new G,$r=new Bs,_i=new Mt,To=new G,Qs=new G,nM=new G,iM=new Bs,cm=new G(1,0,0),um=new G(0,1,0),dm=new G(0,0,1),fm={type:"added"},rM={type:"removed"},qr={type:"childadded",child:null},su={type:"childremoved",child:null};class Qt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new G,n=new hr,i=new Bs,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Oe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Qs,To,this.up):_i.lookAt(To,Qs,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(_i),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),qr.child=e,this.dispatchEvent(qr),qr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rM),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),m=a(e.shapes),f=a(e.skeletons),x=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),x.length>0&&(i.animations=x),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.DEFAULT_UP=new G(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ua extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const v=n.getJointPose(b,i),d=this._getHandJoint(u,b);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],f=h.position.distanceTo(m.position),x=.02,_=.005;u.inputState.pinching&&f>x+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=x-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=jS(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=zg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ke.workingToColorSpace(an.copy(this),e),Math.round(Ze(an.r*255,0,255))*65536+Math.round(Ze(an.g*255,0,255))*256+Math.round(Ze(an.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const m=a-l;switch(u=h<=.5?m/(a+l):m/(2-a-l),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=On){Ke.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Ao);const i=eu(Hi.h,Ao.h,n),r=eu(Hi.s,Ao.s,n),s=eu(Hi.l,Ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new je;je.NAMES=zg;class ph{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new ph(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class aM extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new G,yi=new G,lu=new G,Si=new G,Yr=new G,Kr=new G,hm=new G,cu=new G,uu=new G,du=new G,fu=new wt,hu=new wt,pu=new wt;class ei{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),yi.subVectors(i,n),lu.subVectors(e,n);const a=qn.dot(qn),l=qn.dot(yi),c=qn.dot(lu),u=yi.dot(yi),h=yi.dot(lu),m=a*u-l*l;if(m===0)return s.set(0,0,0),null;const f=1/m,x=(u*c-l*h)*f,_=(a*h-l*c)*f;return s.set(1-x-_,_,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(l,Si.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return fu.setScalar(0),hu.setScalar(0),pu.setScalar(0),fu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(pu,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),yi.subVectors(e,n),qn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Yr.subVectors(r,i),Kr.subVectors(s,i),cu.subVectors(e,i);const c=Yr.dot(cu),u=Kr.dot(cu);if(c<=0&&u<=0)return n.copy(i);uu.subVectors(e,r);const h=Yr.dot(uu),m=Kr.dot(uu);if(h>=0&&m<=h)return n.copy(r);const f=c*m-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),n.copy(i).addScaledVector(Yr,a);du.subVectors(e,s);const x=Yr.dot(du),_=Kr.dot(du);if(_>=0&&x<=_)return n.copy(s);const b=x*u-c*_;if(b<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(i).addScaledVector(Kr,l);const v=h*_-x*m;if(v<=0&&m-h>=0&&x-_>=0)return hm.subVectors(s,r),l=(m-h)/(m-h+(x-_)),n.copy(r).addScaledVector(hm,l);const d=1/(v+b+f);return a=b*d,l=f*d,n.copy(i).addScaledVector(Yr,a).addScaledVector(Kr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Co.subVectors(this.max,Js),Zr.subVectors(e.a,Js),Qr.subVectors(e.b,Js),Jr.subVectors(e.c,Js),Gi.subVectors(Qr,Zr),ji.subVectors(Jr,Qr),yr.subVectors(Zr,Jr);let n=[0,-Gi.z,Gi.y,0,-ji.z,ji.y,0,-yr.z,yr.y,Gi.z,0,-Gi.x,ji.z,0,-ji.x,yr.z,0,-yr.x,-Gi.y,Gi.x,0,-ji.y,ji.x,0,-yr.y,yr.x,0];return!mu(n,Zr,Qr,Jr,Co)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,Zr,Qr,Jr,Co))?!1:(No.crossVectors(Gi,ji),n=[No.x,No.y,No.z],mu(n,Zr,Qr,Jr,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,Ro=new eo,Zr=new G,Qr=new G,Jr=new G,Gi=new G,ji=new G,yr=new G,Js=new G,Co=new G,No=new G,Sr=new G;function mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Sr.fromArray(t,s);const l=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=e.dot(Sr),u=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Lt=new G,Po=new qe;let oM=0;class Pr extends jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kS,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?fh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):WS(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):XS(e,this.array)}}class Hg extends Pr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gg extends Pr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends Pr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const lM=new eo,ea=new G,xu=new G;class mc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(xu)),this.expandByPoint(ea.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cM=0;const Fn=new Mt,gu=new Qt,es=new G,Tn=new eo,ta=new eo,jt=new G;class Kt extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BS(e)?Gg:Hg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];ta.setFromBufferAttribute(l),this.morphTargetsRelative?(jt.addVectors(Tn.min,ta.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,ta.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(ta.min),Tn.expandByPoint(ta.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)jt.fromBufferAttribute(l,u),c&&(es.fromBufferAttribute(e,u),jt.add(es)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[],u=new Uint8Array(i.count);for(let N=0;N<i.count;N++)l[N]=new G,c[N]=new G;const h=new G,m=new G,f=new G,x=new qe,_=new qe,b=new qe,v=new G,d=new G;function p(N,R,P){u[N]=u[R]=u[P]=1,h.fromBufferAttribute(i,N),m.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),x.fromBufferAttribute(s,N),_.fromBufferAttribute(s,R),b.fromBufferAttribute(s,P),m.sub(h),f.sub(h),_.sub(x),b.sub(x);const F=1/(_.x*b.y-b.x*_.y);isFinite(F)&&(v.copy(m).multiplyScalar(b.y).addScaledVector(f,-_.y).multiplyScalar(F),d.copy(f).multiplyScalar(_.x).addScaledVector(m,-b.x).multiplyScalar(F),l[N].add(v),l[R].add(v),l[P].add(v),c[N].add(d),c[R].add(d),c[P].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,R=S.length;N<R;++N){const P=S[N],F=P.start,z=P.count;for(let L=F,j=F+z;L<j;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new G,T=new G,E=new G,g=new G;function M(N){E.fromBufferAttribute(r,N),g.copy(E);const R=l[N];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(g,R);const F=T.dot(c[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,F)}for(let N=0,R=i.count;N<R;++N)u[N]&&M(N);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,x=i.count;f<x;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,l=new G,c=new G,u=new G,h=new G,m=new G;if(e)for(let f=0,x=e.count;f<x;f+=3){const _=e.getX(f+0),b=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,v),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,v),l.add(h),c.add(h),u.add(h),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,x=n.count;f<x;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,m=l.normalized,f=new u.constructor(c.length*h);let x=0,_=0;for(let b=0,v=c.length;b<v;b++){l.isInterleavedBufferAttribute?x=c[b]*l.data.stride+l.offset:x=c[b]*h;for(let d=0;d<h;d++)f[_++]=u[x++]}return new Pr(f,h,m)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,m=u.length;h<m;h++){const f=u[h],x=e(f,i);c.push(x)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let m=0,f=u.length;m<f;m++){const x=u[m];h.push(x.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let f=0,x=m.length;f<x;f++)h.push(m[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const m=a[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new G,uM=new G,dM=new Oe;class $i{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(uM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(vu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dM.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fM=0;class zs extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Sa,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xg,this.blendDst=gg,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new G,_u=new G,Lo=new G,Do=new G;class jg{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_u.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),Do.copy(this.origin).sub(_u);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Lo),l=Do.dot(this.direction),c=-Do.dot(Lo),u=Do.lengthSq(),h=Math.abs(1-a*a);let m,f,x,_;if(h>0)if(m=a*c-l,f=a*l-c,_=s*h,m>=0)if(f>=-_)if(f<=_){const b=1/h;m*=b,f*=b,x=m*(m+a*f+2*l)+f*(a*m+f+2*c)+u}else f=s,m=Math.max(0,-(a*f+l)),x=-m*m+f*(f+2*c)+u;else f=-s,m=Math.max(0,-(a*f+l)),x=-m*m+f*(f+2*c)+u;else f<=-_?(m=Math.max(0,-(-a*s+l)),f=m>0?-s:Math.min(Math.max(-s,-c),s),x=-m*m+f*(f+2*c)+u):f<=_?(m=0,f=Math.min(Math.max(-s,-c),s),x=f*(f+2*c)+u):(m=Math.max(0,-(a*s+l)),f=m>0?s:Math.min(Math.max(-s,-c),s),x=-m*m+f*(f+2*c)+u);else f=a>0?-s:s,m=Math.max(0,-(a*f+l)),x=-m*m+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(_u).addScaledVector(Lo,f),x}intersectSphere(e,n){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-f.z)*m,c=(e.max.z-f.z)*m):(l=(e.max.z-f.z)*m,c=(e.min.z-f.z)*m),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,l=this.direction,c=l.x,u=l.y,h=l.z,m=e.x-a.x,f=e.y-a.y,x=e.z-a.z,_=n.x-a.x,b=n.y-a.y,v=n.z-a.z,d=i.x-a.x,p=i.y-a.y,S=i.z-a.z,y=Math.abs(c),T=Math.abs(u),E=Math.abs(h);let g,M,N,R,P,F,z,L,j,Y,I,U;if(y>=T&&y>=E?(N=c,F=m,j=_,U=d,c>=0?(g=u,M=h,R=f,P=x,z=b,L=v,Y=p,I=S):(g=h,M=u,R=x,P=f,z=v,L=b,Y=S,I=p)):T>=E?(N=u,F=f,j=b,U=p,u>=0?(g=h,M=c,R=x,P=m,z=v,L=_,Y=S,I=d):(g=c,M=h,R=m,P=x,z=_,L=v,Y=d,I=S)):(N=h,F=x,j=v,U=S,h>=0?(g=c,M=u,R=m,P=f,z=_,L=b,Y=d,I=p):(g=u,M=c,R=f,P=m,z=b,L=_,Y=p,I=d)),N===0)return null;const O=g/N,H=M/N,q=1/N,ae=R-O*F,Ne=P-H*F,K=z-O*j,le=L-H*j,ve=Y-O*U,Ee=I-H*U,xe=ve*le-Ee*K,Ue=ae*Ee-Ne*ve,lt=K*Ne-le*ae;if(r){if(xe<0||Ue<0||lt<0)return null}else if((xe<0||Ue<0||lt<0)&&(xe>0||Ue>0||lt>0))return null;const Pe=xe+Ue+lt;if(Pe===0)return null;const Qe=q*(xe*F+Ue*j+lt*U);return(Pe>0?Qe<0:Qe>0)?null:this.at(Qe/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fl extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pm=new Mt,Mr=new jg,Io=new mc,mm=new G,Uo=new G,Fo=new G,Oo=new G,yu=new G,ko=new G,xm=new G,Bo=new G;class fn extends Qt{constructor(e=new Kt,n=new fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ko.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],m=s[c];h!==0&&(yu.fromBufferAttribute(m,e),a?ko.addScaledVector(yu,h):ko.addScaledVector(yu.sub(n),h))}n.add(ko)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Io.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Io,mm)===null||Mr.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(pm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,f=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const v=f[_],d=a[v.materialIndex],p=Math.max(v.start,x.start),S=Math.min(l.count,Math.min(v.start+v.count,x.start+x.count));for(let y=p,T=S;y<T;y+=3){const E=l.getX(y),g=l.getX(y+1),M=l.getX(y+2);r=zo(this,d,e,i,u,h,m,E,g,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,x.start),b=Math.min(l.count,x.start+x.count);for(let v=_,d=b;v<d;v+=3){const p=l.getX(v),S=l.getX(v+1),y=l.getX(v+2);r=zo(this,a,e,i,u,h,m,p,S,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const v=f[_],d=a[v.materialIndex],p=Math.max(v.start,x.start),S=Math.min(c.count,Math.min(v.start+v.count,x.start+x.count));for(let y=p,T=S;y<T;y+=3){const E=y,g=y+1,M=y+2;r=zo(this,d,e,i,u,h,m,E,g,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,x.start),b=Math.min(c.count,x.start+x.count);for(let v=_,d=b;v<d;v+=3){const p=v,S=v+1,y=v+2;r=zo(this,a,e,i,u,h,m,p,S,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function hM(t,e,n,i,r,s,a,l){let c;if(e.side===En?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===kr,l),c===null)return null;Bo.copy(l),Bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Bo);return u<n.near||u>n.far?null:{distance:u,point:Bo.clone(),object:t}}function zo(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,Uo),t.getVertexPosition(c,Fo),t.getVertexPosition(u,Oo);const h=hM(t,e,n,i,Uo,Fo,Oo,xm);if(h){const m=new G;ei.getBarycoord(xm,Uo,Fo,Oo,m),r&&(h.uv=ei.getInterpolatedAttribute(r,l,c,u,m,new qe)),s&&(h.uv1=ei.getInterpolatedAttribute(s,l,c,u,m,new qe)),a&&(h.normal=ei.getInterpolatedAttribute(a,l,c,u,m,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new G,materialIndex:0};ei.getNormal(Uo,Fo,Oo,f.normal),h.face=f,h.barycoord=m}return h}class pM extends pn{constructor(e=null,n=1,i=1,r,s,a,l,c,u=Yt,h=Yt,m,f){super(null,a,l,c,u,h,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new mc,mM=new qe(.5,.5),Ho=new G;class Wa{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,a=new $i){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],m=s[5],f=s[6],x=s[7],_=s[8],b=s[9],v=s[10],d=s[11],p=s[12],S=s[13],y=s[14],T=s[15];if(r[0].setComponents(u-a,x-h,d-_,T-p).normalize(),r[1].setComponents(u+a,x+h,d+_,T+p).normalize(),r[2].setComponents(u+l,x+m,d+b,T+S).normalize(),r[3].setComponents(u-l,x-m,d-b,T-S).normalize(),i)r[4].setComponents(c,f,v,y).normalize(),r[5].setComponents(u-c,x-f,d-v,T-y).normalize();else if(r[4].setComponents(u-c,x-f,d-v,T-y).normalize(),n===ti)r[5].setComponents(u+c,x+f,d+v,T+y).normalize();else if(n===Va)r[5].setComponents(c,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=mM.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gm=new Mt;class mh{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];gm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Wa),i[r].setFromProjectionMatrix(gm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Wa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new mh().copy(this)}}class xc extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new G,$l=new G,vm=new Mt,na=new jg,Go=new mc,Su=new G,_m=new G;class af extends Qt{constructor(e=new Kt,n=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Xl.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Xl.distanceTo($l);e.setAttribute("lineDistance",new xt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;vm.copy(r).invert(),na.copy(e.ray).applyMatrix4(vm);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const x=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=u){const d=h.getX(b),p=h.getX(b+1),S=jo(this,e,na,c,d,p,b);S&&n.push(S)}if(this.isLineLoop){const b=h.getX(_-1),v=h.getX(x),d=jo(this,e,na,c,b,v,_-1);d&&n.push(d)}}else{const x=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let b=x,v=_-1;b<v;b+=u){const d=jo(this,e,na,c,b,b+1,b);d&&n.push(d)}if(this.isLineLoop){const b=jo(this,e,na,c,_-1,x,_-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function jo(t,e,n,i,r,s,a){const l=t.geometry.attributes.position;if(Xl.fromBufferAttribute(l,r),$l.fromBufferAttribute(l,s),n.distanceSqToSegment(Xl,$l,Su,_m)>i)return;Su.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Su);if(!(u<e.near||u>e.far))return{distance:u,point:_m.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const ym=new G,Sm=new G;class xM extends af{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ym.fromBufferAttribute(n,r),Sm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ym.distanceTo(Sm);e.setAttribute("lineDistance",new xt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends pn{constructor(e=[],n=Ls,i,r,s,a,l,c,u,h){super(e,n,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Is extends pn{constructor(e,n,i=xi,r,s,a,l=Yt,c=Yt,u,h=fr,m=1){if(h!==fr&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Wg extends Is{constructor(e,n=xi,i=Ls,r,s,a=Yt,l=Yt,c,u=fr){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xg extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hs extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],m=[];let f=0,x=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(m,2));function _(b,v,d,p,S,y,T,E,g,M,N){const R=y/g,P=T/M,F=y/2,z=T/2,L=E/2,j=g+1,Y=M+1;let I=0,U=0;const O=new G;for(let H=0;H<Y;H++){const q=H*P-z;for(let ae=0;ae<j;ae++){const Ne=ae*R-F;O[b]=Ne*p,O[v]=q*S,O[d]=L,u.push(O.x,O.y,O.z),O[b]=0,O[v]=0,O[d]=E>0?1:-1,h.push(O.x,O.y,O.z),m.push(ae/g),m.push(1-H/M),I+=1}}for(let H=0;H<M;H++)for(let q=0;q<g;q++){const ae=f+q+j*H,Ne=f+q+j*(H+1),K=f+(q+1)+j*(H+1),le=f+(q+1)+j*H;c.push(ae,Ne,le),c.push(Ne,K,le),U+=6}l.addGroup(x,U,N),x+=U,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xh extends Kt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],m=[],f=[],x=[];let _=0;const b=[],v=i/2;let d=0;p(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(x,2));function p(){const y=new G,T=new G;let E=0;const g=(n-e)/i;for(let M=0;M<=s;M++){const N=[],R=M/s,P=R*(n-e)+e;for(let F=0;F<=r;F++){const z=F/r,L=z*c+l,j=Math.sin(L),Y=Math.cos(L);T.x=P*j,T.y=-R*i+v,T.z=P*Y,m.push(T.x,T.y,T.z),y.set(j,g,Y).normalize(),f.push(y.x,y.y,y.z),x.push(z,1-R),N.push(_++)}b.push(N)}for(let M=0;M<r;M++)for(let N=0;N<s;N++){const R=b[N][M],P=b[N+1][M],F=b[N+1][M+1],z=b[N][M+1];(e>0||N!==0)&&(h.push(R,P,z),E+=3),(n>0||N!==s-1)&&(h.push(P,F,z),E+=3)}u.addGroup(d,E,0),d+=E}function S(y){const T=_,E=new qe,g=new G;let M=0;const N=y===!0?e:n,R=y===!0?1:-1;for(let F=1;F<=r;F++)m.push(0,v*R,0),f.push(0,R,0),x.push(.5,.5),_++;const P=_;for(let F=0;F<=r;F++){const L=F/r*c+l,j=Math.cos(L),Y=Math.sin(L);g.x=N*Y,g.y=v*R,g.z=N*j,m.push(g.x,g.y,g.z),f.push(0,R,0),E.x=j*.5+.5,E.y=Y*.5*R+.5,x.push(E.x,E.y),_++}for(let F=0;F<r;F++){const z=T+F,L=P+F;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),M+=3}u.addGroup(d,M,y===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gh extends xh{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,l=Math.PI*2){super(0,e,n,i,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new gh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gc extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,m=e/l,f=n/c,x=[],_=[],b=[],v=[];for(let d=0;d<h;d++){const p=d*f-a;for(let S=0;S<u;S++){const y=S*m-s;_.push(y,-p,0),b.push(0,0,1),v.push(S/l),v.push(1-d/c)}}for(let d=0;d<c;d++)for(let p=0;p<l;p++){const S=p+u*d,y=p+u*(d+1),T=p+1+u*(d+1),E=p+1+u*d;x.push(S,y,E),x.push(y,T,E)}this.setIndex(x),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(b,3)),this.setAttribute("uv",new xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Kt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const l=[],c=[],u=[],h=[];let m=e;const f=(n-e)/r,x=new G,_=new qe;for(let b=0;b<=r;b++){for(let v=0;v<=i;v++){const d=s+v/i*a;x.x=m*Math.cos(d),x.y=m*Math.sin(d),c.push(x.x,x.y,x.z),u.push(0,0,1),_.x=(x.x/n+1)/2,_.y=(x.y/n+1)/2,h.push(_.x,_.y)}m+=f}for(let b=0;b<r;b++){const v=b*(i+1);for(let d=0;d<i;d++){const p=d+v,S=p,y=p+i+1,T=p+i+2,E=p+1;l.push(S,y,E),l.push(y,T,E)}}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ma extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const h=[],m=new G,f=new G,x=[],_=[],b=[],v=[];for(let d=0;d<=i;d++){const p=[],S=d/i,y=a+S*l,T=e*Math.cos(y),E=Math.sqrt(e*e-T*T);let g=0;d===0&&a===0?g=.5/n:d===i&&c===Math.PI&&(g=-.5/n);for(let M=0;M<=n;M++){const N=M/n,R=r+N*s;m.x=-E*Math.cos(R),m.y=T,m.z=E*Math.sin(R),_.push(m.x,m.y,m.z),f.copy(m).normalize(),b.push(f.x,f.y,f.z),v.push(N+g,1-S),p.push(u++)}h.push(p)}for(let d=0;d<i;d++)for(let p=0;p<n;p++){const S=h[d][p+1],y=h[d][p],T=h[d+1][p],E=h[d+1][p+1];(d!==0||a>0)&&x.push(S,y,E),(d!==i-1||c<Math.PI)&&x.push(y,T,E)}this.setIndex(x),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(b,3)),this.setAttribute("uv",new xt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vh extends Kt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],h=[],m=[],f=new G,x=new G,_=new G;for(let b=0;b<=i;b++){const v=a+b/i*l;for(let d=0;d<=r;d++){const p=d/r*s;x.x=(e+n*Math.cos(v))*Math.cos(p),x.y=(e+n*Math.cos(v))*Math.sin(p),x.z=n*Math.sin(v),u.push(x.x,x.y,x.z),f.x=e*Math.cos(p),f.y=e*Math.sin(p),_.subVectors(x,f).normalize(),h.push(_.x,_.y,_.z),m.push(d/r),m.push(b/i)}}for(let b=1;b<=i;b++)for(let v=1;v<=r;v++){const d=(r+1)*b+v-1,p=(r+1)*(b-1)+v-1,S=(r+1)*(b-1)+v,y=(r+1)*b+v;c.push(d,p,y),c.push(p,S,y)}this.setIndex(c),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Mm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Mm(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function Mm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function gM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $g(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const vM={clone:Us,merge:un};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class SM extends zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MM extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class EM extends xc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class _h extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Mu=new Mt,bm=new G,Em=new G;class qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Mu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Va||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),n.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new G,Wo=new Bs,ai=new G;class Yg extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Wo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Vo,Wo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new G,wm=new qe,Tm=new qe;class zn extends Yg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Tm),n.subVectors(Tm,wm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class wM extends qg{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class TM extends _h{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Kg extends Yg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AM extends qg{constructor(){super(new Kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RM extends _h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new AM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class CM extends _h{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ts=-90,ns=1;class of extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new zn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new zn(ts,ns,e,n);a.layers=this.layers,this.add(a);const l=new zn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new zn(ts,ns,e,n);c.layers=this.layers,this.add(c);const u=new zn(ts,ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,f,x),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class NM extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class PM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class LM extends xM{constructor(e=10,n=10,i=4473924,r=8947848){i=new je(i),r=new je(r);const s=n/2,a=e/n,l=e/2,c=[],u=[];for(let f=0,x=0,_=-l;f<=n;f++,_+=a){c.push(-l,0,_,l,0,_),c.push(_,0,-l,_,0,l);const b=f===s?i:r;b.toArray(u,x),x+=3,b.toArray(u,x),x+=3,b.toArray(u,x),x+=3,b.toArray(u,x),x+=3}const h=new Kt;h.setAttribute("position",new xt(c,3)),h.setAttribute("color",new xt(u,3));const m=new xc({vertexColors:!0,toneMapped:!1});super(h,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Am(t,e,n,i){const r=DM(i);switch(n){case Pg:return t*e;case Dg:return t*e/r.components*r.byteLength;case ch:return t*e/r.components*r.byteLength;case Br:return t*e*2/r.components*r.byteLength;case uh:return t*e*2/r.components*r.byteLength;case Lg:return t*e*3/r.components*r.byteLength;case fi:return t*e*4/r.components*r.byteLength;case dh:return t*e*4/r.components*r.byteLength;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Nd:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Hl:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Qd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gl:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DM(t){switch(t){case Rn:case Ag:return{byteLength:1,components:1};case ja:case Rg:case gi:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case xi:case ah:case di:return{byteLength:4,components:1};case Cg:case Ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IM(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,m=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=t.SHORT;else if(u instanceof Uint32Array)x=t.UNSIGNED_INT;else if(u instanceof Int32Array)x=t.INT;else if(u instanceof Int8Array)x=t.BYTE;else if(u instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,u){const h=c.array,m=c.updateRanges;if(t.bindBuffer(u,l),m.length===0)t.bufferSubData(u,0,h);else{m.sort((x,_)=>x.start-_.start);let f=0;for(let x=1;x<m.length;x++){const _=m[f],b=m[x];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,m[f]=b)}m.length=f+1;for(let x=0,_=m.length;x<_;x++){const b=m[x];t.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,T1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,A1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:UM,alphahash_pars_fragment:FM,alphamap_fragment:OM,alphamap_pars_fragment:kM,alphatest_fragment:BM,alphatest_pars_fragment:zM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:jM,batching_vertex:VM,begin_vertex:WM,beginnormal_vertex:XM,bsdfs:$M,iridescence_fragment:qM,bumpmap_pars_fragment:YM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:JM,color_fragment:e1,color_pars_fragment:t1,color_pars_vertex:n1,color_vertex:i1,common:r1,defaultnormal_vertex:s1,displacementmap_pars_vertex:a1,displacementmap_vertex:o1,emissivemap_fragment:l1,emissivemap_pars_fragment:c1,colorspace_fragment:u1,colorspace_pars_fragment:d1,envmap_fragment:f1,envmap_common_pars_fragment:h1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:T1,envmap_vertex:x1,fog_vertex:g1,fog_pars_vertex:v1,fog_fragment:_1,fog_pars_fragment:y1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:M1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:E1,lights_pars_begin:w1,lights_toon_fragment:A1,lights_toon_pars_fragment:R1,lights_phong_fragment:C1,lights_phong_pars_fragment:N1,lights_physical_fragment:P1,lights_physical_pars_fragment:L1,lights_fragment_begin:D1,lights_fragment_maps:I1,lights_fragment_end:U1,lightprobes_pars_fragment:F1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:z1,map_fragment:H1,map_pars_fragment:G1,map_particle_fragment:j1,map_particle_pars_fragment:V1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:X1,morphinstance_vertex:$1,morphcolor_vertex:q1,morphnormal_vertex:Y1,morphtarget_pars_vertex:K1,morphtarget_vertex:Z1,normal_fragment_begin:Q1,normal_fragment_maps:J1,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:rb,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:ab,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:db,dithering_fragment:fb,dithering_pars_fragment:hb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:gb,shadowmap_vertex:vb,shadowmask_pars_fragment:_b,skinbase_vertex:yb,skinning_pars_vertex:Sb,skinning_vertex:Mb,skinnormal_vertex:bb,specularmap_fragment:Eb,specularmap_pars_fragment:wb,tonemapping_fragment:Tb,tonemapping_pars_fragment:Ab,transmission_fragment:Rb,transmission_pars_fragment:Cb,uv_pars_fragment:Nb,uv_pars_vertex:Pb,uv_vertex:Lb,worldpos_vertex:Db,background_vert:Ib,background_frag:Ub,backgroundCube_vert:Fb,backgroundCube_frag:Ob,cube_vert:kb,cube_frag:Bb,depth_vert:zb,depth_frag:Hb,distance_vert:Gb,distance_frag:jb,equirect_vert:Vb,equirect_frag:Wb,linedashed_vert:Xb,linedashed_frag:$b,meshbasic_vert:qb,meshbasic_frag:Yb,meshlambert_vert:Kb,meshlambert_frag:Zb,meshmatcap_vert:Qb,meshmatcap_frag:Jb,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:rE,meshphysical_frag:sE,meshtoon_vert:aE,meshtoon_frag:oE,points_vert:lE,points_frag:cE,shadow_vert:uE,shadow_frag:dE,sprite_vert:fE,sprite_frag:hE},ye={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ci={basic:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:un([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:un([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:un([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:un([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:un([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:un([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:un([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:un([ye.lights,ye.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Xo={r:0,b:0,g:0},pE=new Mt,Qg=new Oe;Qg.set(-1,0,0,0,1,0,0,0,1);function mE(t,e,n,i,r,s){const a=new je(0);let l=r===!0?0:1,c,u,h=null,m=0,f=null;function x(p){let S=p.isScene===!0?p.background:null;if(S&&S.isTexture){const y=p.backgroundBlurriness>0;S=e.get(S,y)}return S}function _(p){let S=!1;const y=x(p);y===null?v(a,l):y&&y.isColor&&(v(y,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(p,S){const y=x(S);y&&y.isCubeTexture?(u===void 0&&(u=new fn(new Hs(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Us(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pE.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Qg),u.material.toneMapped=Ke.getTransfer(y.colorSpace)!==at,(h!==y||m!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,m=y.version,f=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fn(new gc(2,2),new zr({name:"BackgroundMaterial",uniforms:Us(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||m!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,m=y.version,f=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,S){p.getRGB(Xo,$g(t)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,S,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,S=1){a.set(p),l=S,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_,addToRenderList:b,dispose:d}}function xE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(P,F,z,L,j){let Y=!1;const I=m(P,L,z,F);s!==I&&(s=I,u(s.object)),Y=x(P,L,z,j),Y&&_(P,L,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(P,F,z,L),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function m(P,F,z,L){const j=L.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const I=P.isInstancedMesh===!0?P.id:0;let U=Y[I];U===void 0&&(U={},Y[I]=U);let O=U[z.id];O===void 0&&(O={},U[z.id]=O);let H=O[j];return H===void 0&&(H=f(c()),O[j]=H),H}function f(P){const F=[],z=[],L=[];for(let j=0;j<n;j++)F[j]=0,z[j]=0,L[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function x(P,F,z,L){const j=s.attributes,Y=F.attributes;let I=0;const U=z.getAttributes();for(const O in U)if(U[O].location>=0){const q=j[O];let ae=Y[O];if(ae===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;I++}return s.attributesNum!==I||s.index!==L}function _(P,F,z,L){const j={},Y=F.attributes;let I=0;const U=z.getAttributes();for(const O in U)if(U[O].location>=0){let q=Y[O];q===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),j[O]=ae,I++}s.attributes=j,s.attributesNum=I,s.index=L}function b(){const P=s.newAttributes;for(let F=0,z=P.length;F<z;F++)P[F]=0}function v(P){d(P,0)}function d(P,F){const z=s.newAttributes,L=s.enabledAttributes,j=s.attributeDivisors;z[P]=1,L[P]===0&&(t.enableVertexAttribArray(P),L[P]=1),j[P]!==F&&(t.vertexAttribDivisor(P,F),j[P]=F)}function p(){const P=s.newAttributes,F=s.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==P[z]&&(t.disableVertexAttribArray(z),F[z]=0)}function S(P,F,z,L,j,Y,I){I===!0?t.vertexAttribIPointer(P,F,z,j,Y):t.vertexAttribPointer(P,F,z,L,j,Y)}function y(P,F,z,L){b();const j=L.attributes,Y=z.getAttributes(),I=F.defaultAttributeValues;for(const U in Y){const O=Y[U];if(O.location>=0){let H=j[U];if(H===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const q=H.normalized,ae=H.itemSize,Ne=e.get(H);if(Ne===void 0)continue;const K=Ne.buffer,le=Ne.type,ve=Ne.bytesPerElement,Ee=le===t.INT||le===t.UNSIGNED_INT||H.gpuType===ah;if(H.isInterleavedBufferAttribute){const xe=H.data,Ue=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,lt=H.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Pe=0;Pe<O.locationSize;Pe++)d(O.location+Pe,xe.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)v(O.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,K);for(let Pe=0;Pe<O.locationSize;Pe++)S(O.location+Pe,ae/O.locationSize,le,q,Ue*ve,(lt+ae/O.locationSize*Pe)*ve,Ee)}else{if(H.isInstancedBufferAttribute){for(let xe=0;xe<O.locationSize;xe++)d(O.location+xe,H.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let xe=0;xe<O.locationSize;xe++)v(O.location+xe);t.bindBuffer(t.ARRAY_BUFFER,K);for(let xe=0;xe<O.locationSize;xe++)S(O.location+xe,ae/O.locationSize,le,q,ae*ve,ae/O.locationSize*xe*ve,Ee)}}else if(I!==void 0){const q=I[U];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(O.location,q);break;case 3:t.vertexAttrib3fv(O.location,q);break;case 4:t.vertexAttrib4fv(O.location,q);break;default:t.vertexAttrib1fv(O.location,q)}}}}p()}function T(){N();for(const P in i){const F=i[P];for(const z in F){const L=F[z];for(const j in L){const Y=L[j];for(const I in Y)h(Y[I].object),delete Y[I];delete L[j]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const z in F){const L=F[z];for(const j in L){const Y=L[j];for(const I in Y)h(Y[I].object),delete Y[I];delete L[j]}}delete i[P.id]}function g(P){for(const F in i){const z=i[F];for(const L in z){const j=z[L];if(j[P.id]===void 0)continue;const Y=j[P.id];for(const I in Y)h(Y[I].object),delete Y[I];delete j[P.id]}}}function M(P){for(const F in i){const z=i[F],L=P.isInstancedMesh===!0?P.id:0,j=z[L];if(j!==void 0){for(const Y in j){const I=j[Y];for(const U in I)h(I[U].object),delete I[U];delete j[Y]}delete z[L],Object.keys(z).length===0&&delete i[F]}}}function N(){R(),a=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:v,disableUnusedAttributes:p}}function gE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function vE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==fi&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(g){const M=g===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Rn&&g!==di&&!M&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Ie("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&m===!1;n.reversedDepthBuffer===!0&&m===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&m===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:E}}function _E(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new $i,l=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const x=m.length!==0||f||i!==0||r;return r=f,i=m.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=h(m,f,0)},this.setState=function(m,f,x){const _=m.clippingPlanes,b=m.clipIntersection,v=m.clipShadows,d=t.get(m);if(!r||_===null||_.length===0||s&&!v)s?h(null):u();else{const p=s?0:i,S=p*4;let y=d.clippingState||null;c.value=y,y=h(_,f,S,x);for(let T=0;T!==S;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=p}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,f,x,_){const b=m!==null?m.length:0;let v=null;if(b!==0){if(v=c.value,_!==!0||v===null){const d=x+b*4,p=f.matrixWorldInverse;l.getNormalMatrix(p),(v===null||v.length<d)&&(v=new Float32Array(d));for(let S=0,y=x;S!==b;++S,y+=4)a.copy(m[S]).applyMatrix4(p,l),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}class yh extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hs(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ms});s.uniforms.tEquirect.value=n;const a=new fn(r,s),l=n.minFilter;return n.minFilter===Ji&&(n.minFilter=yn),new of(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Rm=256,yE=3,SE=20,Jg=256,ev=16,ME=3,bE=new G,EE=new je;class Yl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new of(1,10,null),this._boxMesh=new fn(new Hs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=bE}=s,c=this._renderer;this._setSize(a);const u=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,f=c.autoClearColor,x=c.autoClearDepth,_=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(EE));const v=new of(i,r,h);return v.position.copy(l),v.update(c,e),c.autoClear=m,c.autoClearColor=f,c.autoClearDepth=x,c.autoClearStencil=_,e.background=b,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Rm,VS(e))}_fromTexture(e,n){e.mapping===Ls||e.mapping===Ga?this._setSize(e.image.length===0?Rm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Cm(e,!1,!1),i=Math.log2(e)-yE;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Cm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Ls||e.mapping===Ga?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wE(),this._integrationMaterial=TE());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/ev);for(let a=0;a<=i;a++){const l=Yl.lodToRoughness(a,i);if(a>i-ME)s.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const c=l>0?Math.log2(n)+.5*Math.log2(6/(Jg*Math.pow(l,4)))+.5:0;r.roughness.value=l,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=AE());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Cm(t,e,n){return new yh(t,{minFilter:Ji,generateMipmaps:e,type:gi,colorSpace:jl,depthBuffer:n})}function to(t,e,n){return new zr({name:t,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:n,side:En,blending:Ms,depthTest:!1,depthWrite:!1})}function wE(){return to("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function TE(){return to("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ev}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function AE(){return to("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${SE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nm(){return to("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pm(){return to("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function RE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,x=!1){return f==null?null:x?a(f):s(f)}function s(f){if(f&&f.isTexture){const x=f.mapping;if(x===Yc||x===Kc)if(e.has(f)){const _=e.get(f).texture;return l(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const b=new yh(_.height);return b.fromEquirectangularTexture(t,f),e.set(f,b),f.addEventListener("dispose",u),l(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const x=f.mapping,_=x===Yc||x===Kc,b=x===Ls||x===Ga;if(_||b){let v=n.get(f);const d=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Yl(t)),v=_?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const p=f.image;return _&&p&&p.height>0||b&&p&&c(p)?(i===null&&(i=new Yl(t)),v=_?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",h),v.texture):null}}}return f}function l(f,x){return x===Yc?f.mapping=Ls:x===Kc&&(f.mapping=Ga),f}function c(f){let x=0;const _=6;for(let b=0;b<_;b++)f[b]!==void 0&&x++;return x===_}function u(f){const x=f.target;x.removeEventListener("dispose",u);const _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function h(f){const x=f.target;x.removeEventListener("dispose",h);const _=n.get(x);_!==void 0&&(n.delete(x),_.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function CE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&dl("WebGLRenderer: "+i+" extension not supported."),r}}}function NE(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function l(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const v in _.attributes)e.remove(_.attributes[v]);_.removeEventListener("dispose",l),delete r[_.id],a.unregister(_);const b=s.get(_);b&&(e.remove(b),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(_,b){return r[b.id]!==void 0||(b.addEventListener("dispose",l),r[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++),b}function h(_){const b=_.attributes;for(const v in b)e.update(b[v],t.ARRAY_BUFFER)}function m(_){const b=_.index,v=_.attributes.position;let d=0;if(v===void 0)return;const p=b!==null?b.array.length:v.array.length/3-1,S=v.count>=65535?Gg:Hg,y=new S(Math.ceil(p/3)*6,1),T=y.array;if(b!==null){const g=b.array;d=b.version;for(let M=0,N=0;M<p;M+=3){const R=g[M+0],P=g[M+1],F=g[M+2];T[N++]=R,T[N++]=P,T[N++]=P,T[N++]=F,T[N++]=F,T[N++]=R}}else{d=v.version;for(let g=0,M=0;g<p;g+=3){const N=g+0,R=g+1,P=g+2;T[M++]=N,T[M++]=R,T[M++]=R,T[M++]=P,T[M++]=P,T[M++]=N}}y.version=d;const E=s.get(_);E&&e.remove(E),s.set(_,y)}function f(_){const b=s.get(_);if(b){const v=_.index;v!==null&&b.version<v.version&&m(_)}else m(_);return s.get(_)}function x(){for(const _ in r){const b=r[_].deref();b!==void 0&&c(b)}}return{get:u,update:h,getWireframeAttribute:f,dispose:x}}function PE(t,e,n){let i;function r(m){i=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function c(m,f){t.drawElements(i,f,s,m*a),n.update(f,i,1)}function u(m,f,x){x!==0&&(t.drawElementsInstanced(i,f,s,m*a,x),n.update(f,i,x))}function h(m,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,x);let b=0;for(let v=0;v<x;v++)b+=f[v];n.update(b,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function LE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DE(t,e,n){const i=new WeakMap,r=new wt;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==m){let R=function(){M.dispose(),i.delete(l),l.removeEventListener("dispose",R)};var x=R;f!==void 0&&f.texture.dispose();const _=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let y=0;_===!0&&(y=1),b===!0&&(y=2),v===!0&&(y=3);let T=l.attributes.position.count*y,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const g=new Float32Array(T*E*4*m),M=new kg(g,T,E,m);M.type=di,M.needsUpdate=!0;const N=y*4;for(let P=0;P<m;P++){const F=d[P],z=p[P],L=S[P],j=T*E*4*P;for(let Y=0;Y<F.count;Y++){const I=Y*N;_===!0&&(r.fromBufferAttribute(F,Y),g[j+I+0]=r.x,g[j+I+1]=r.y,g[j+I+2]=r.z,g[j+I+3]=0),b===!0&&(r.fromBufferAttribute(z,Y),g[j+I+4]=r.x,g[j+I+5]=r.y,g[j+I+6]=r.z,g[j+I+7]=0),v===!0&&(r.fromBufferAttribute(L,Y),g[j+I+8]=r.x,g[j+I+9]=r.y,g[j+I+10]=r.z,g[j+I+11]=L.itemSize===4?r.w:1)}}f={count:m,texture:M,size:new qe(T,E)},i.set(l,f),l.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let v=0;v<u.length;v++)_+=u[v];const b=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function IE(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,m=u.geometry,f=e.get(u,m);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const x=u.skeleton;s.get(x)!==h&&(x.update(),s.set(x,h))}return f}function l(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const UE={[_g]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Sg]:"CINEON_TONE_MAPPING",[Mg]:"ACES_FILMIC_TONE_MAPPING",[Eg]:"AGX_TONE_MAPPING",[wg]:"NEUTRAL_TONE_MAPPING",[bg]:"CUSTOM_TONE_MAPPING"};function FE(t,e,n,i,r,s){const a=new mi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,u=null;const h=new Kt;h.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xt([0,2,0,0,2,0],2));const m=new SM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fn(h,m),x=new Kg(-1,1,1,-1,0,1);let _=null,b=null,v=!1,d,p=null,S=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),l!==null&&l.setSize(T,E),c!==null&&c.setSize(T,E);for(let g=0;g<S.length;g++){const M=S[g];M.setSize&&M.setSize(T,E)}},this.setEffects=function(T){S=T,y=S.length>0&&S[0].isRenderPass===!0;const E=a.width,g=a.height;S.length>0&&l===null&&(l=new mi(E,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}),c=new mi(E,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&S.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&u===null&&(u=new Is(E,g),s===!0&&(u.format=er,u.type=Ds)),a.dispose(),a.depthTexture=M?u:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<S.length;N++){const R=S[N];R.setSize&&R.setSize(E,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(u)}},this.begin=function(T,E){if(v||T.toneMapping===Ni&&S.length===0)return!1;if(p=E,E!==null){const g=E.width,M=E.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return y===!1&&T.setRenderTarget(a),d=T.toneMapping,T.toneMapping=Ni,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=d,v=!0;let g=a,M=l;for(let N=0;N<S.length;N++){const R=S[N];R.enabled!==!1&&(R.render(T,M,g,E),R.needsSwap!==!1&&(g=M,M=M===l?c:l))}if(_!==T.outputColorSpace||b!==T.toneMapping){_=T.outputColorSpace,b=T.toneMapping,m.defines={},Ke.getTransfer(_)===at&&(m.defines.SRGB_TRANSFER="");const N=UE[b];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(p),T.render(f,x),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}const tv=new pn,nv=new Is(1,1),iv=new Wg(1),rv=new kg,sv=new QS,av=new Vg,Lm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Fm.set(i),t.uniformMatrix2fv(this.addr,!1,Fm),zt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),zt(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),zt(n,i)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function _c(t){return t.version===0&&(t.compareFunction=Fg,t.needsUpdate=!0),t}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=_c(nv):s=tv,n.setTexture2D(e||s,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sv,r)}function ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=_c(iv):s=av,n.setTextureCube(e||s,r)}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rv,r)}function nw(t){switch(t){case 5126:return OE;case 35664:return kE;case 35665:return BE;case 35666:return zE;case 35674:return HE;case 35675:return GE;case 35676:return jE;case 5124:case 35670:return VE;case 35667:case 35671:return WE;case 35668:case 35672:return XE;case 35669:case 35673:return $E;case 5125:return qE;case 36294:return YE;case 36295:return KE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(t,e){t.uniform1fv(this.addr,e)}function rw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function sw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function aw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function ow(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lw(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cw(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uw(t,e){t.uniform1iv(this.addr,e)}function dw(t,e){t.uniform2iv(this.addr,e)}function fw(t,e){t.uniform3iv(this.addr,e)}function hw(t,e){t.uniform4iv(this.addr,e)}function pw(t,e){t.uniform1uiv(this.addr,e)}function mw(t,e){t.uniform2uiv(this.addr,e)}function xw(t,e){t.uniform3uiv(this.addr,e)}function gw(t,e){t.uniform4uiv(this.addr,e)}function vw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=_c(nv):a=tv;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function _w(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sv,s[a])}function yw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=_c(iv):a=av;for(let l=0;l!==r;++l)n.setTextureCube(e[l]||a,s[l])}function Sw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||rv,s[a])}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return aw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return xw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nw(n.type)}}class Ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mw(n.type)}}class ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function Om(t,e){t.seq.push(e),t.map[e.id]=e}function Tw(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),a=bu.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Om(n,u===void 0?new bw(l,t,e):new Ew(l,t,e));break}else{let m=n.map[l];m===void 0&&(m=new ww(l),Om(n,m)),n=m}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);Tw(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Aw=37297;let Rw=0;function Cw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Bm=new Oe;function Nw(t){Ke._getMatrix(Bm,Ke.workingColorSpace,t);const e=`mat3( ${Bm.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Vl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Cw(t.getShaderSource(e),l)}else return s}function Pw(t,e){const n=Nw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Lw={[_g]:"Linear",[yg]:"Reinhard",[Sg]:"Cineon",[Mg]:"ACESFilmic",[Eg]:"AgX",[wg]:"Neutral",[bg]:"Custom"};function Dw(t,e){const n=Lw[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new G;function Iw(){Ke.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Fw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ow(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function da(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(t){return t.replace(kw,Bw)}function Bw(t,e){const n=Ge[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lf(n)}const zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(t){return t.replace(zw,Hw)}function Hw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gw={[al]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function jw(t){return Gw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Vw={[Ga]:"ENVMAP_MODE_REFRACTION"};function Ww(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Vw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xw={[vg]:"ENVMAP_BLENDING_MULTIPLY",[AS]:"ENVMAP_BLENDING_MIX",[RS]:"ENVMAP_BLENDING_ADD"};function $w(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Xw[t.combine]||"ENVMAP_BLENDING_NONE"}function qw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=jw(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ww(n),m=$w(n),f=Uw(n),x=Fw(s),_=r.createProgram();let b,v,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(da).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(da).join(`
`),v.length>0&&(v+=`
`)):(b=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),v=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ni?Dw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Pw("linearToOutputTexel",n.outputColorSpace),Iw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=lf(a),a=Hm(a,n),a=Gm(a,n),l=lf(l),l=Hm(l,n),l=Gm(l,n),a=jm(a),l=jm(l),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const p=d+b+a,S=d+v+l,y=km(r,r.VERTEX_SHADER,p),T=km(r,r.FRAGMENT_SHADER,S);r.attachShader(_,y),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(R){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(y)||"",z=r.getShaderInfoLog(T)||"",L=P.trim(),j=F.trim(),Y=z.trim();let I=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,y,T);else{const O=zm(r,y,"vertex"),H=zm(r,T,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+H)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(j===""||Y==="")&&(U=!1);U&&(R.diagnostics={runnable:I,programLog:L,vertexShader:{log:j,prefix:b},fragmentShader:{log:Y,prefix:v}})}r.deleteShader(y),r.deleteShader(T),g=new hl(r,_),M=Ow(r,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,Aw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let Yw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zw(e),n.set(e,i)),i}}class Zw{constructor(e){this.id=Yw++,this.code=e,this.usedTimes=0}}function Qw(t){return t===Br||t===Hl||t===Gl}function Jw(t,e,n,i,r,s){const a=new Bg,l=new Kw,c=new Set,u=[],h=new Map,m=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,M,N,R,P,F){const z=R.fog,L=P.geometry,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,I=e.get(g.envMap||j,Y),U=f[g.type];let O=i.precision;g.precision!==null&&(O=i.getMaxPrecision(g.precision),O!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",O,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=H!==void 0?H.length:0;let ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let Ne,K,le,ve;if(U){const _e=ci[U];Ne=_e.vertexShader,K=_e.fragmentShader}else{Ne=g.vertexShader,K=g.fragmentShader;const _e=l.getVertexShaderStage(g),st=l.getFragmentShaderStage(g);l.update(g,_e,st),le=_e.id,ve=st.id}const Ee=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ue=P.isInstancedMesh===!0,lt=P.isBatchedMesh===!0,Pe=!!g.map,Qe=!!g.matcap,Ye=!!I,Be=Ye&&I.isPMREMTexture===!0,Rt=!!g.aoMap,Se=!!g.lightMap,rt=!!g.bumpMap&&g.wireframe===!1,tt=!!g.normalMap,gn=!!g.displacementMap,gt=!!g.emissiveMap,It=!!g.metalnessMap,Ut=!!g.roughnessMap,In=g.anisotropy>0,B=g.clearcoat>0,Un=g.diffuseRoughness>0,vt=g.dispersion>0,_t=g.retroreflectivity>0,ge=g.iridescence>0,Ft=g.sheen>0,De=g.transmission>0,Fe=In&&!!g.anisotropyMap,C=B&&!!g.clearcoatMap,w=B&&!!g.clearcoatNormalMap,W=B&&!!g.clearcoatRoughnessMap,ie=Un&&!!g.diffuseRoughnessMap,te=ge&&!!g.iridescenceMap,ce=ge&&!!g.iridescenceThicknessMap,pe=Ft&&!!g.sheenColorMap,Q=Ft&&!!g.sheenRoughnessMap,J=!!g.specularMap,de=!!g.specularColorMap,D=!!g.specularIntensityMap,ee=De&&!!g.transmissionMap,Z=De&&!!g.thicknessMap,fe=!!g.gradientMap,oe=!!g.alphaMap,ue=g.alphaTest>0,Ce=!!g.alphaHash,He=!!g.extensions;let se=Ni;g.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(se=t.toneMapping);const Le=Be?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,ze={shaderID:U,shaderType:g.type,shaderName:g.name,vertexShader:Ne,fragmentShader:K,defines:g.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:O,batching:lt,batchingColor:lt&&P._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&P.instanceColor!==null,instancingMorph:Ue&&P.morphTexture!==null,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:Qe,envMap:Ye,envMapMode:Ye&&I.mapping,envMapPMREM:Be,envMapMaxLod:Be?Le.length-1:null,envMapSize:Be?Le[0].width:null,aoMap:Rt,lightMap:Se,bumpMap:rt,normalMap:tt,displacementMap:gn,emissiveMap:gt,normalMapObjectSpace:tt&&g.normalMapType===PS,normalMapTangentSpace:tt&&g.normalMapType===rf,packedNormalMap:tt&&g.normalMapType===rf&&Qw(g.normalMap.format),metalnessMap:It,roughnessMap:Ut,anisotropy:In,anisotropyMap:Fe,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:W,diffuseRoughness:Un,diffuseRoughnessMap:ie,dispersion:vt,retroreflection:_t,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:Ft,sheenColorMap:pe,sheenRoughnessMap:Q,specularMap:J,specularColorMap:de,specularIntensityMap:D,transmission:De,transmissionMap:ee,thicknessMap:Z,gradientMap:fe,opaque:g.transparent===!1&&g.blending===Sa&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ue,alphaHash:Ce,combine:g.combine,mapUv:Pe&&x(g.map.channel),aoMapUv:Rt&&x(g.aoMap.channel),lightMapUv:Se&&x(g.lightMap.channel),bumpMapUv:rt&&x(g.bumpMap.channel),normalMapUv:tt&&x(g.normalMap.channel),displacementMapUv:gn&&x(g.displacementMap.channel),emissiveMapUv:gt&&x(g.emissiveMap.channel),metalnessMapUv:It&&x(g.metalnessMap.channel),roughnessMapUv:Ut&&x(g.roughnessMap.channel),anisotropyMapUv:Fe&&x(g.anisotropyMap.channel),clearcoatMapUv:C&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:w&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&x(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&x(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(g.sheenRoughnessMap.channel),specularMapUv:J&&x(g.specularMap.channel),specularColorMapUv:de&&x(g.specularColorMap.channel),specularIntensityMapUv:D&&x(g.specularIntensityMap.channel),transmissionMapUv:ee&&x(g.transmissionMap.channel),thicknessMapUv:Z&&x(g.thicknessMap.channel),alphaMapUv:oe&&x(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(tt||In),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Pe||oe),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&tt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ae,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&Ke.getTransfer(g.map.colorSpace)===at,decodeVideoTextureEmissive:gt&&g.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(g.emissiveMap.colorSpace)===at,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Jn,flipSided:g.side===En,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function b(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const N in g.defines)M.push(N),M.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(v(M,g),d(M,g),M.push(t.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function v(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function d(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function p(g){const M=f[g.type];let N;if(M){const R=ci[M];N=vM.clone(R.uniforms)}else N=g.uniforms;return N}function S(g,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new qw(t,M,g,r),u.push(N),h.set(M,N)),N}function y(g){if(--g.usedTimes===0){const M=u.indexOf(g);u[M]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){l.remove(g)}function E(){l.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:p,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:u,dispose:E}}function eT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function tT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let x=0;return f.isInstancedMesh&&(x+=2),f.isSkinnedMesh&&(x+=1),x}function l(f,x,_,b,v,d){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:x,material:_,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:v,group:d},t[e]=p):(p.id=f.id,p.object=f,p.geometry=x,p.material=_,p.materialVariant=a(f),p.groupOrder=b,p.renderOrder=f.renderOrder,p.z=v,p.group=d),e++,p}function c(f,x,_,b,v,d,p){p.reversedDepth===!0&&(v=-v);const S=l(f,x,_,b,v,d);_.transmission>0?i.push(S):_.transparent===!0?r.push(S):n.push(S)}function u(f,x,_,b,v,d){const p=l(f,x,_,b,v,d);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function h(f,x){n.length>1&&n.sort(f||tT),i.length>1&&i.sort(x||Wm),r.length>1&&r.sort(x||Wm)}function m(){for(let f=e,x=t.length;f<x;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:m,sort:h}}function nT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Xm,t.set(i,[a])):r>=s.length?(a=new Xm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function iT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new je};break;case"SpotLight":n={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sT=0;function aT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oT(t){const e=new iT,n=rT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new Mt,a=new Mt;function l(u){let h=0,m=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,_=0,b=0,v=0,d=0,p=0,S=0,y=0,T=0,E=0,g=0,M=0,N=0,R=0;u.sort(aT);for(let F=0,z=u.length;F<z;F++){const L=u[F],j=L.color,Y=L.intensity,I=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Br?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=j.r*Y,m+=j.g*Y,f+=j.b*Y;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],Y);R++}else if(L.isSunLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,q=n.get(L);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[_]=q,i.sunShadowMap[_]=U;const ae=H.getViewportCount();for(let Ne=0;Ne<ae;Ne++)i.sunShadowMatrix[b+Ne]=H.getMatrix(Ne),i.sunShadowCascade[b+Ne]=H._cascadeData[Ne];b+=ae,_++}i.sun[x]=O,x++}else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,q=n.get(L);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.directionalShadow[v]=q,i.directionalShadowMap[v]=U,i.directionalShadowMatrix[v]=L.shadow.matrix,T++}i.directional[v]=O,v++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(j).multiplyScalar(Y),O.distance=I,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[p]=O;const H=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,H.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[p]=H.matrix,L.castShadow){const q=n.get(L);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=U,g++}p++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(j).multiplyScalar(Y),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=O,S++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,q=n.get(L);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=U,i.pointShadowMatrix[d]=L.shadow.matrix,E++}i.point[d]=O,d++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(Y),O.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[y]=O,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=f;const P=i.hash;(P.sunLength!==x||P.directionalLength!==v||P.pointLength!==d||P.spotLength!==p||P.rectAreaLength!==S||P.hemiLength!==y||P.numSunShadows!==_||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==g||P.numSpotMaps!==M||P.numLightProbes!==R)&&(i.sun.length=x,i.directional.length=v,i.spot.length=p,i.rectArea.length=S,i.point.length=d,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+M-N,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=R,P.sunLength=x,P.directionalLength=v,P.pointLength=d,P.spotLength=p,P.rectAreaLength=S,P.hemiLength=y,P.numSunShadows=_,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=g,P.numSpotMaps=M,P.numLightProbes=R,i.version=sT++)}function c(u,h){let m=0,f=0,x=0,_=0,b=0,v=0;const d=h.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const y=u[p];if(y.isSunLight){const T=i.sun[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}else if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(y.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){const T=i.point[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),x++}else if(y.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),v++}}}return{setup:l,setupView:c,state:i}}function $m(t){const e=new oT(t),n=[],i=[],r=[];function s(m){h.camera=m,n.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):n.push(m)}function l(m){i.push(m)}function c(){e.setup(n),r.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function u(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function lT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new $m(t),e.set(r,[l])):s>=a.length?(l=new $m(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const cT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dT=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],fT=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],qm=new Mt,ra=new G,Eu=new G;function hT(t,e,n){let i=new Wa;const r=new qe,s=new qe,a=new wt,l=new MM,c=new bM,u={},h=n.maxTextureSize,m={[kr]:En,[En]:kr,[Jn]:Jn},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:cT,fragmentShader:uT}),x=f.clone();x.defines.HORIZONTAL_PASS=1;const _=new Kt;_.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fn(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let d=this.type;this.render=function(E,g,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;this.type===lS&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=al);const N=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ms),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==this.type;z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(j=>j.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,j=E.length;L<j;L++){const Y=E[L],I=Y.shadow;if(I===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const U=I.getFrameExtents();r.multiply(U),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,I.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=O,I.map===null||z===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ca){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new mi(r.x,r.y,{format:Br,type:gi,minFilter:yn,magFilter:yn,generateMipmaps:!1}),I.map.texture.name=Y.name+".shadowMap",I.map.depthTexture=new Is(r.x,r.y,di),I.map.depthTexture.name=Y.name+".shadowMapDepth",I.map.depthTexture.format=fr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Yt,I.map.depthTexture.magFilter=Yt}else Y.isPointLight?(I.map=new yh(r.x),I.map.depthTexture=new Wg(r.x,xi)):(I.map=new mi(r.x,r.y),I.map.depthTexture=new Is(r.x,r.y,xi)),I.map.depthTexture.name=Y.name+".shadowMap",I.map.depthTexture.format=fr,this.type===al?(I.map.depthTexture.compareFunction=O?Ug:Ig,I.map.depthTexture.minFilter=yn,I.map.depthTexture.magFilter=yn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Yt,I.map.depthTexture.magFilter=Yt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);const H=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();Y.isPointLight!==!0&&I.updateMatrices(Y,M);const q=I.camera.layers.mask&4294967294?I.camera.layers:M.layers;for(let ae=0;ae<H;ae++){const Ne=I.getCamera(ae);if(Y.isPointLight){const K=I.camera,le=I.matrix,ve=Y.distance||K.far;ve!==K.far&&(K.far=ve,K.updateProjectionMatrix()),ra.setFromMatrixPosition(Y.matrixWorld),K.position.copy(ra),Eu.copy(K.position),Eu.add(dT[ae]),K.up.copy(fT[ae]),K.lookAt(Eu),K.updateMatrixWorld(),le.makeTranslation(-ra.x,-ra.y,-ra.z),qm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),I._frustum.setFromProjectionMatrix(qm,K.coordinateSystem,K.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(I.map),t.clear());const K=I.getViewport(ae);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),F.viewport(a)}i=I.getFrustum(ae),y(g,M,Ne,Y,q,this.type)}I.isPointLightShadow!==!0&&this.type===ca&&p(I,M),I.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(N,R,P)};function p(E,g){const M=e.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new mi(r.x,r.y,{format:Br,type:gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(g,null,M,f,b,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(g,null,M,x,b,null)}function S(E,g,M,N){let R=null;const P=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=M.isPointLight===!0?c:l,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=R.uuid,z=g.uuid;let L=u[F];L===void 0&&(L={},u[F]=L);let j=L[z];j===void 0&&(j=R.clone(),L[z]=j,g.addEventListener("dispose",T)),R=j}if(R.visible=g.visible,R.wireframe=g.wireframe,N===ca?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:m[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=M}return R}function y(E,g,M,N,R,P){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===ca)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const L=e.update(E),j=E.material;if(Array.isArray(j)){const Y=L.groups;for(let I=0,U=Y.length;I<U;I++){const O=Y[I],H=j[O.materialIndex];if(H&&H.visible){const q=S(E,H,N,P);E.onBeforeShadow(t,E,g,M,L,q,O),t.renderBufferDirect(M,null,L,q,E,O),E.onAfterShadow(t,E,g,M,L,q,O)}}}else if(j.visible){const Y=S(E,j,N,P);E.onBeforeShadow(t,E,g,M,L,Y,null),t.renderBufferDirect(M,null,L,Y,E,null),E.onAfterShadow(t,E,g,M,L,Y,null)}}const z=E.children;for(let L=0,j=z.length;L<j;L++)y(z[L],g,M,N,R,P)}function T(E){E.target.removeEventListener("dispose",T);for(const M in u){const N=u[M],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function pT(t,e){function n(){let D=!1;const ee=new wt;let Z=null;const fe=new wt(0,0,0,0);return{setMask:function(oe){Z!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){D=oe},setClear:function(oe,ue,Ce,He,se){se===!0&&(oe*=He,ue*=He,Ce*=He),ee.set(oe,ue,Ce,He),fe.equals(ee)===!1&&(t.clearColor(oe,ue,Ce,He),fe.copy(ee))},reset:function(){D=!1,Z=null,fe.set(-1,0,0,0)}}}function i(){let D=!1,ee=!1,Z=null,fe=null,oe=null;return{setReversed:function(ue){if(ee!==ue){const Ce=e.get("EXT_clip_control");ue?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;const He=oe;oe=null,this.setClear(He)}},getReversed:function(){return ee},setTest:function(ue){ue?xe(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!D&&(t.depthMask(ue),Z=ue)},setFunc:function(ue){if(ee&&(ue=GS[ue]),fe!==ue){switch(ue){case vd:t.depthFunc(t.NEVER);break;case _d:t.depthFunc(t.ALWAYS);break;case yd:t.depthFunc(t.LESS);break;case Ha:t.depthFunc(t.LEQUAL);break;case Sd:t.depthFunc(t.EQUAL);break;case Md:t.depthFunc(t.GEQUAL);break;case bd:t.depthFunc(t.GREATER);break;case Ed:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ue}},setLocked:function(ue){D=ue},setClear:function(ue){oe!==ue&&(oe=ue,ee&&(ue=1-ue),t.clearDepth(ue))},reset:function(){D=!1,Z=null,fe=null,oe=null,ee=!1}}}function r(){let D=!1,ee=null,Z=null,fe=null,oe=null,ue=null,Ce=null,He=null,se=null;return{setTest:function(Le){D||(Le?xe(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!D&&(t.stencilMask(Le),ee=Le)},setFunc:function(Le,ze,_e){(Z!==Le||fe!==ze||oe!==_e)&&(t.stencilFunc(Le,ze,_e),Z=Le,fe=ze,oe=_e)},setOp:function(Le,ze,_e){(ue!==Le||Ce!==ze||He!==_e)&&(t.stencilOp(Le,ze,_e),ue=Le,Ce=ze,He=_e)},setLocked:function(Le){D=Le},setClear:function(Le){se!==Le&&(t.clearStencil(Le),se=Le)},reset:function(){D=!1,ee=null,Z=null,fe=null,oe=null,ue=null,Ce=null,He=null,se=null}}}const s=new n,a=new i,l=new r;let c={};const u=new WeakMap;let h={},m={},f={},x=new WeakMap,_=[],b=null,v=!1,d=null,p=null,S=null,y=null,T=null,E=null,g=null,M=new je(0,0,0),N=0,R=!1,P=null,F=null,z=null,L=null,j=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=U>=2);let H=null,q={};const ae=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),K=new wt().fromArray(ae),le=new wt().fromArray(Ne);function ve(D,ee,Z,fe){const oe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(D,ue),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Z;Ce++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ee+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return ue}const Ee={};Ee[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),xe(t.DEPTH_TEST),a.setFunc(Ha),rt(!1),tt(Kp),xe(t.CULL_FACE),Rt(Ms);function xe(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Ue(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function lt(D,ee){return f[D]!==ee?(t.bindFramebuffer(D,ee),f[D]=ee,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(D,ee){let Z=_,fe=!1;if(D){Z=x.get(ee),Z===void 0&&(Z=[],x.set(ee,Z));const oe=D.textures;if(Z.length!==oe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ce=oe.length;ue<Ce;ue++)Z[ue]=t.COLOR_ATTACHMENT0+ue;Z.length=oe.length,fe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Z)}function Qe(D){return b!==D?(t.useProgram(D),b=D,!0):!1}const Ye={[is]:t.FUNC_ADD,[uS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};Ye[fS]=t.MIN,Ye[hS]=t.MAX;const Be={[pS]:t.ZERO,[mS]:t.ONE,[xS]:t.SRC_COLOR,[xg]:t.SRC_ALPHA,[MS]:t.SRC_ALPHA_SATURATE,[yS]:t.DST_COLOR,[vS]:t.DST_ALPHA,[gS]:t.ONE_MINUS_SRC_COLOR,[gg]:t.ONE_MINUS_SRC_ALPHA,[SS]:t.ONE_MINUS_DST_COLOR,[_S]:t.ONE_MINUS_DST_ALPHA,[bS]:t.CONSTANT_COLOR,[ES]:t.ONE_MINUS_CONSTANT_COLOR,[wS]:t.CONSTANT_ALPHA,[TS]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(D,ee,Z,fe,oe,ue,Ce,He,se,Le){if(D===Ms){v===!0&&(Ue(t.BLEND),v=!1);return}if(v===!1&&(xe(t.BLEND),v=!0),D!==cS){if(D!==d||Le!==R){if((p!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),p=is,T=is),Le)switch(D){case Sa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.ONE,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",D);break}else switch(D){case Sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qp:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jp:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",D);break}S=null,y=null,E=null,g=null,M.set(0,0,0),N=0,d=D,R=Le}return}oe=oe||ee,ue=ue||Z,Ce=Ce||fe,(ee!==p||oe!==T)&&(t.blendEquationSeparate(Ye[ee],Ye[oe]),p=ee,T=oe),(Z!==S||fe!==y||ue!==E||Ce!==g)&&(t.blendFuncSeparate(Be[Z],Be[fe],Be[ue],Be[Ce]),S=Z,y=fe,E=ue,g=Ce),(He.equals(M)===!1||se!==N)&&(t.blendColor(He.r,He.g,He.b,se),M.copy(He),N=se),d=D,R=!1}function Se(D,ee){D.side===Jn?Ue(t.CULL_FACE):xe(t.CULL_FACE);let Z=D.side===En;ee&&(Z=!Z),rt(Z),D.blending===Sa&&D.transparent===!1?Rt(Ms):Rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const fe=D.stencilWrite;l.setTest(fe),fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function tt(D){D!==aS?(xe(t.CULL_FACE),D!==F&&(D===Kp?t.cullFace(t.BACK):D===oS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),F=D}function gn(D){D!==z&&(I&&t.lineWidth(D),z=D)}function gt(D,ee,Z){D?(xe(t.POLYGON_OFFSET_FILL),(L!==ee||j!==Z)&&(L=ee,j=Z,a.getReversed()&&(ee=-ee,Z=-Z),t.polygonOffset(ee,Z))):Ue(t.POLYGON_OFFSET_FILL)}function It(D){D?xe(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function Ut(D){D===void 0&&(D=t.TEXTURE0+Y-1),H!==D&&(t.activeTexture(D),H=D)}function In(D,ee,Z){Z===void 0&&(H===null?Z=t.TEXTURE0+Y-1:Z=H);let fe=q[Z];fe===void 0&&(fe={type:void 0,texture:void 0},q[Z]=fe),(fe.type!==D||fe.texture!==ee)&&(H!==Z&&(t.activeTexture(Z),H=Z),t.bindTexture(D,ee||Ee[D]),fe.type=D,fe.texture=ee)}function B(){const D=q[H];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Un(){try{t.compressedTexImage2D(...arguments)}catch(D){it("WebGLState:",D)}}function vt(){try{t.compressedTexImage3D(...arguments)}catch(D){it("WebGLState:",D)}}function _t(){try{t.texSubImage2D(...arguments)}catch(D){it("WebGLState:",D)}}function ge(){try{t.texSubImage3D(...arguments)}catch(D){it("WebGLState:",D)}}function Ft(){try{t.compressedTexSubImage2D(...arguments)}catch(D){it("WebGLState:",D)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(D){it("WebGLState:",D)}}function Fe(){try{t.texStorage2D(...arguments)}catch(D){it("WebGLState:",D)}}function C(){try{t.texStorage3D(...arguments)}catch(D){it("WebGLState:",D)}}function w(){try{t.texImage2D(...arguments)}catch(D){it("WebGLState:",D)}}function W(){try{t.texImage3D(...arguments)}catch(D){it("WebGLState:",D)}}function ie(D){return m[D]!==void 0?m[D]:t.getParameter(D)}function te(D,ee){m[D]!==ee&&(t.pixelStorei(D,ee),m[D]=ee)}function ce(D){K.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function pe(D){le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function Q(D,ee){let Z=u.get(ee);Z===void 0&&(Z=new WeakMap,u.set(ee,Z));let fe=Z.get(D);fe===void 0&&(fe=t.getUniformBlockIndex(ee,D.name),t.uniformBlockBinding(ee,fe,fe),Z.set(D,fe))}function J(D,ee,Z){const oe=u.get(ee).get(D);c[oe]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,Z),c[oe]=Z)}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},H=null,q={},f={},c={},x=new WeakMap,_=[],b=null,v=!1,d=null,p=null,S=null,y=null,T=null,E=null,g=null,M=new je(0,0,0),N=0,R=!1,P=null,F=null,z=null,L=null,j=null,K.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:xe,disable:Ue,bindFramebuffer:lt,drawBuffers:Pe,useProgram:Qe,setBlending:Rt,setMaterial:Se,setFlipSided:rt,setCullFace:tt,setLineWidth:gn,setPolygonOffset:gt,setScissorTest:It,activeTexture:Ut,bindTexture:In,unbindTexture:B,compressedTexImage2D:Un,compressedTexImage3D:vt,texImage2D:w,texImage3D:W,pixelStorei:te,getParameter:ie,updateUBOMapping:Q,uniformBlockBinding:J,texStorage2D:Fe,texStorage3D:C,texSubImage2D:_t,texSubImage3D:ge,compressedTexSubImage2D:Ft,compressedTexSubImage3D:De,scissor:ce,viewport:pe,reset:de}}function mT(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,h=new WeakMap,m=new Set;let f;const x=new WeakMap,_=new Set,b=new FinalizationRegistry(C=>_.delete(C));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,w){return v?new OffscreenCanvas(C,w):Wl("canvas")}function p(C,w,W){let ie=1;const te=Fe(C);if((te.width>W||te.height>W)&&(ie=W/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ce=Math.floor(ie*te.width),pe=Math.floor(ie*te.height);f===void 0&&(f=d(ce,pe));const Q=w?d(ce,pe):f;return Q.width=ce,Q.height=pe,Q.getContext("2d").drawImage(C,0,0,ce,pe),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ce+"x"+pe+")."),Q}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function S(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(C,w,W,ie,te,ce=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;ie&&(pe=e.get("EXT_texture_norm16"),pe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),W===t.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),w===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),w===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),W===t.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),W===t.UNSIGNED_INT&&(Q=t.RGB32UI),W===t.BYTE&&(Q=t.RGB8I),W===t.SHORT&&(Q=t.RGB16I),W===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),W===t.UNSIGNED_INT&&(Q=t.RGBA32UI),W===t.BYTE&&(Q=t.RGBA8I),W===t.SHORT&&(Q=t.RGBA16I),W===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&(W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),W===t.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),w===t.RGBA){const J=ce?Vl:Ke.getTransfer(te);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=J===at?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),W===t.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(C,w){let W;return C?w===null||w===xi||w===Ds?W=t.DEPTH24_STENCIL8:w===di?W=t.DEPTH32F_STENCIL8:w===ja&&(W=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xi||w===Ds?W=t.DEPTH_COMPONENT24:w===di?W=t.DEPTH_COMPONENT32F:w===ja&&(W=t.DEPTH_COMPONENT16),W}function M(C,w){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function N(C){const w=new WeakRef(C);i.get(C).__ref=w,_.add(w),b.register(C,w,w)}function R(C){const w=i.get(C).__ref;w!==void 0&&(_.delete(w),b.unregister(w))}function P(C){z(C.target)}function F(C){L(C.target)}function z(C){C.removeEventListener("dispose",P),R(C),Y(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&m.delete(C)}function L(C){C.removeEventListener("dispose",F),R(C),U(C)}function j(){for(const C of _){const w=C.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):z(w))}_.clear(),m.clear()}function Y(C){const w=i.get(C);if(w.__webglInit===void 0)return;const W=C.source,ie=x.get(W);if(ie){const te=ie[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(C),Object.keys(ie).length===0&&x.delete(W)}i.remove(C)}function I(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const W=C.source,ie=x.get(W);delete ie[w.__cacheKey],a.memory.textures--}function U(C){const w=i.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();const W=C.depthTexture;if(W&&W.renderTarget===C&&z(W),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let ce=0;ce<w.__webglFramebuffer[te].length;ce++)t.deleteFramebuffer(w.__webglFramebuffer[te][ce]);else t.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)t.deleteFramebuffer(w.__webglFramebuffer[te]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=C.textures;for(let te=0,ce=ie.length;te<ce;te++){const pe=i.get(ie[te]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(ie[te])}i.remove(C)}let O=0;function H(){O=0}function q(){return O}function ae(C){O=C}function Ne(){const C=O;return C>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function K(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function le(C,w){const W=i.get(C);if(C.isVideoTexture&&Ft(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const ie=C.image;if(ie===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(W,C,w);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+w)}function ve(C,w){const W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Se(W,C,w);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+w)}function Ee(C,w){const W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Se(W,C,w);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+w)}function xe(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){rt(W,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+w)}const Ue={[wd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},lt={[Yt]:t.NEAREST,[CS]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Zc]:t.LINEAR_MIPMAP_NEAREST,[Ji]:t.LINEAR_MIPMAP_LINEAR},Pe={[DS]:t.NEVER,[Fg]:t.ALWAYS,[IS]:t.LESS,[Ig]:t.LEQUAL,[US]:t.EQUAL,[Ug]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function Qe(C,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===Zc||w.magFilter===Eo||w.magFilter===Ji||w.minFilter===yn||w.minFilter===Zc||w.minFilter===Eo||w.minFilter===Ji)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Ue[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Ue[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Ue[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,lt[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,lt[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==Eo&&w.minFilter!==Ji||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P),N(w));const ie=w.source;let te=x.get(ie);te===void 0&&(te={},x.set(ie,te));const ce=K(w);if(ce!==C.__cacheKey){te[ce]===void 0&&(te[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[ce].usedTimes++;const pe=te[C.__cacheKey];pe!==void 0&&(te[C.__cacheKey].usedTimes--,pe.usedTimes===0&&I(w)),C.__cacheKey=ce,C.__webglTexture=te[ce].texture}return W}function Be(C,w,W){return Math.floor(Math.floor(C/W)/w)}function Rt(C,w,W,ie){const ce=C.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,W,ie,w.data);else{ce.sort((D,ee)=>D.start-ee.start);let pe=0;for(let D=1;D<ce.length;D++){const ee=ce[pe],Z=ce[D],fe=ee.start+ee.count,oe=Be(Z.start,w.width,4),ue=Be(ee.start,w.width,4);Z.start<=fe+1&&oe===ue&&Be(Z.start+Z.count-1,w.width,4)===oe?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++pe,ce[pe]=Z)}ce.length=pe+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let D=0,ee=ce.length;D<ee;D++){const Z=ce[D],fe=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),ue=fe%w.width,Ce=Math.floor(fe/w.width),He=oe,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ce),n.texSubImage2D(t.TEXTURE_2D,0,ue,Ce,He,se,W,ie,w.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Se(C,w,W){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Ye(C,w),ce=w.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+W);const pe=i.get(ce);if(ce.version!==pe.__version||te===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const se=Ke.getPrimaries(Ke.workingColorSpace),Le=w.colorSpace===Ki?null:Ke.getPrimaries(w.colorSpace),ze=w.colorSpace===Ki||se===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let J=p(w.image,!1,r.maxTextureSize);J=De(w,J);const de=s.convert(w.format,w.colorSpace),D=s.convert(w.type);let ee=E(w.internalFormat,de,D,w.normalized,w.colorSpace,w.isVideoTexture);Qe(ie,w);let Z;const fe=w.mipmaps,oe=w.isVideoTexture!==!0,ue=pe.__version===void 0||te===!0,Ce=ce.dataReady,He=M(w,J);if(w.isDepthTexture)ee=g(w.format===er,w.type),ue&&(oe?n.texStorage2D(t.TEXTURE_2D,1,ee,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ee,J.width,J.height,0,de,D,null));else if(w.isDataTexture)if(fe.length>0){oe&&ue&&n.texStorage2D(t.TEXTURE_2D,He,ee,fe[0].width,fe[0].height);for(let se=0,Le=fe.length;se<Le;se++)Z=fe[se],oe?Ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,de,D,Z.data):n.texImage2D(t.TEXTURE_2D,se,ee,Z.width,Z.height,0,de,D,Z.data);w.generateMipmaps=!1}else oe?(ue&&n.texStorage2D(t.TEXTURE_2D,He,ee,J.width,J.height),Ce&&Rt(w,J,de,D)):n.texImage2D(t.TEXTURE_2D,0,ee,J.width,J.height,0,de,D,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){oe&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,fe[0].width,fe[0].height,J.depth);for(let se=0,Le=fe.length;se<Le;se++)if(Z=fe[se],w.format!==fi)if(de!==null)if(oe){if(Ce)if(w.layerUpdates.size>0){const ze=Am(Z.width,Z.height,w.format,w.type);for(const _e of w.layerUpdates){const st=Z.data.subarray(_e*ze/Z.data.BYTES_PER_ELEMENT,(_e+1)*ze/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,_e,Z.width,Z.height,1,de,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,J.depth,de,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,ee,Z.width,Z.height,J.depth,0,Z.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,Z.width,Z.height,J.depth,de,D,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,ee,Z.width,Z.height,J.depth,0,de,D,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{oe&&ue&&n.texStorage2D(t.TEXTURE_2D,He,ee,fe[0].width,fe[0].height);for(let se=0,Le=fe.length;se<Le;se++)Z=fe[se],w.format!==fi?de!==null?oe?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,de,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,se,ee,Z.width,Z.height,0,Z.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Z.width,Z.height,de,D,Z.data):n.texImage2D(t.TEXTURE_2D,se,ee,Z.width,Z.height,0,de,D,Z.data)}else if(w.isDataArrayTexture)if(oe){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,J.width,J.height,J.depth),Ce)if(w.layerUpdates.size>0){const se=Am(J.width,J.height,w.format,w.type);for(const Le of w.layerUpdates){const ze=J.data.subarray(Le*se/J.data.BYTES_PER_ELEMENT,(Le+1)*se/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,J.width,J.height,1,de,D,ze)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,J.width,J.height,J.depth,0,de,D,J.data);else if(w.isData3DTexture)oe?(ue&&n.texStorage3D(t.TEXTURE_3D,He,ee,J.width,J.height,J.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,D,J.data)):n.texImage3D(t.TEXTURE_3D,0,ee,J.width,J.height,J.depth,0,de,D,J.data);else if(w.isFramebufferTexture){if(ue)if(oe)n.texStorage2D(t.TEXTURE_2D,He,ee,J.width,J.height);else{let se=J.width,Le=J.height;for(let ze=0;ze<He;ze++)n.texImage2D(t.TEXTURE_2D,ze,ee,se,Le,0,de,D,null),se>>=1,Le>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),J.parentNode!==se){se.appendChild(J),m.add(w),se.onpaint=Le=>{const ze=Le.changedElements;for(const _e of m)ze.includes(_e.image)&&(_e.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const ze=t.RGBA,_e=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ze,_e,st,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&ue){const se=Fe(fe[0]);n.texStorage2D(t.TEXTURE_2D,He,ee,se.width,se.height)}for(let se=0,Le=fe.length;se<Le;se++)Z=fe[se],oe?Ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,de,D,Z):n.texImage2D(t.TEXTURE_2D,se,ee,de,D,Z);w.generateMipmaps=!1}else if(oe){if(ue){const se=Fe(J);n.texStorage2D(t.TEXTURE_2D,He,ee,se.width,se.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,D,J)}else n.texImage2D(t.TEXTURE_2D,0,ee,de,D,J);S(w)&&w.mipmapsAutoUpdate===!0&&y(ie),pe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function rt(C,w,W){if(w.image.length!==6)return;const ie=Ye(C,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const ce=i.get(te);if(te.version!==ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const pe=Ke.getPrimaries(Ke.workingColorSpace),Q=w.colorSpace===Ki?null:Ke.getPrimaries(w.colorSpace),J=w.colorSpace===Ki||pe===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!de&&!D?ee[_e]=p(w.image[_e],!0,r.maxCubemapSize):ee[_e]=D?w.image[_e].image:w.image[_e],ee[_e]=De(w,ee[_e]);const Z=ee[0],fe=s.convert(w.format,w.colorSpace),oe=s.convert(w.type);let ue=E(w.internalFormat,fe,oe,w.normalized,w.colorSpace);const Ce=w.isVideoTexture!==!0,He=ce.__version===void 0||ie===!0,se=te.dataReady;let Le=M(w,Z);Qe(t.TEXTURE_CUBE_MAP,w);let ze;if(w.isDepthTexture){if(ue=g(w.format===er,w.type),He)if(Ce)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,Z.width,Z.height,0,fe,oe,null)}else if(de){Ce&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ue,Z.width,Z.height);for(let _e=0;_e<6;_e++){ze=ee[_e].mipmaps;for(let st=0;st<ze.length;st++){const Ht=ze[st];w.format!==fi?fe!==null?Ce?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,Ht.width,Ht.height,fe,Ht.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,ue,Ht.width,Ht.height,0,Ht.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,Ht.width,Ht.height,fe,oe,Ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,ue,Ht.width,Ht.height,0,fe,oe,Ht.data)}}}else{if(ze=w.mipmaps,Ce&&He){ze.length>0&&Le++;const _e=Fe(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ue,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(D){Ce?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,fe,oe,ee[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,ee[_e].width,ee[_e].height,0,fe,oe,ee[_e].data);for(let st=0;st<ze.length;st++){const Oi=ze[st].image[_e].image;Ce?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,Oi.width,Oi.height,fe,oe,Oi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,ue,Oi.width,Oi.height,0,fe,oe,Oi.data)}}else{Ce?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe,oe,ee[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,fe,oe,ee[_e]);for(let st=0;st<ze.length;st++){const Ht=ze[st];Ce?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,fe,oe,Ht.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,ue,fe,oe,Ht.image[_e])}}}S(w)&&w.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),ce.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function tt(C,w,W,ie,te,ce){const pe=s.convert(W.format,W.colorSpace),Q=s.convert(W.type),J=E(W.internalFormat,pe,Q,W.normalized,W.colorSpace),de=i.get(w),D=i.get(W);if(D.__renderTarget=w,!de.__hasExternalTextures){const ee=Math.max(1,w.width>>ce),Z=Math.max(1,w.height>>ce);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ce,J,ee,Z,w.depth,0,pe,Q,null):n.texImage2D(te,ce,J,ee,Z,0,pe,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,D.__webglTexture,0,_t(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,D.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function gn(C,w,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const ie=w.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,ce=g(w.stencilBuffer,te),pe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(w),ce,w.width,w.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(w),ce,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ce,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,C)}else{const ie=w.textures;for(let te=0;te<ie.length;te++){const ce=ie[te],pe=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),J=E(ce.internalFormat,pe,Q,ce.normalized,ce.colorSpace);ge(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(w),J,w.width,w.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(w),J,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,J,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function gt(C,w,W){const ie=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(w.depthTexture);te.__renderTarget=w;const ce=ie?w.depthTexture.image[0]:w.depthTexture.image;(!te.__webglTexture||ce.width!==w.width||ce.height!==w.height)&&(ce.width=w.width,ce.height=w.height,w.depthTexture.needsUpdate=!0),ie?xe(w.depthTexture,0):le(w.depthTexture,0);const pe=te.__webglTexture,Q=_t(w),J=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,de=w.depthTexture.format===er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===fr)ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,J,pe,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,J,pe,0);else if(w.depthTexture.format===er)ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,J,pe,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,de,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(C){const w=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=ie}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)gt(w.__webglFramebuffer[ie],C,ie);else C.texture.mipmaps.length>0?gt(w.__webglFramebuffer[0],C,0):gt(w.__webglFramebuffer,C,0);else if(W){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=t.createRenderbuffer(),gn(w.__webglDepthbuffer[ie],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ce)}}else if(C.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),gn(w.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ce)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ut(C,w,W){const ie=i.get(C);w!==void 0&&tt(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&It(C)}function In(C){const w=C.texture,W=i.get(C),ie=i.get(w);C.addEventListener("dispose",F),N(C);const te=C.textures,ce=C.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,a.memory.textures++),ce){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let J=0;J<w.mipmaps.length;J++)W.__webglFramebuffer[Q][J]=t.createFramebuffer()}else W.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(w.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)W.__webglFramebuffer[Q]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(pe)for(let Q=0,J=te.length;Q<J;Q++){const de=i.get(te[Q]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&ge(C)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){const J=te[Q];W.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);const de=s.convert(J.format,J.colorSpace),D=s.convert(J.type),ee=E(J.internalFormat,de,D,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),Z=_t(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,ee,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),gn(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)tt(W.__webglFramebuffer[Q][J],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,J);else tt(W.__webglFramebuffer[Q],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);S(w)?y(t.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(pe){for(let Q=0,J=te.length;Q<J;Q++){const de=te[Q],D=i.get(de);let ee=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,D.__webglTexture),Qe(ee,de),tt(W.__webglFramebuffer,C,de,t.COLOR_ATTACHMENT0+Q,ee,0),S(de)&&y(ee)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ie.__webglTexture),Qe(Q,w),w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)tt(W.__webglFramebuffer[J],C,w,t.COLOR_ATTACHMENT0,Q,J);else tt(W.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,Q,0);S(w)?y(Q):w.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}C.depthBuffer&&It(C)}function B(C){const w=C.textures;for(let W=0,ie=w.length;W<ie;W++){const te=w[W];if(S(te)&&te.mipmapsAutoUpdate===!0){const ce=T(C),pe=i.get(te).__webglTexture;n.bindTexture(ce,pe),y(ce),n.unbindTexture()}}}const Un=[];function vt(C){if(C.samples>0){if(ge(C)===!1){const w=C.textures,W=C.width,ie=C.height;let te=t.COLOR_BUFFER_BIT;const ce=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),Q=w.length>1;if(Q)for(let de=0;de<w.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let de=0;de<w.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const D=i.get(w[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,W,ie,0,0,W,ie,te,t.NEAREST),c===!0&&(Un.length=0,Un.push(t.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Un.push(ce),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Un))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let de=0;de<w.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,pe.__webglColorRenderbuffer[de]);const D=i.get(w[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function _t(C){return Math.min(r.maxSamples,C.samples)}function ge(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ft(C){const w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function De(C,w){const W=C.colorSpace,ie=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==jl&&W!==Ki&&(Ke.getTransfer(W)===at?(ie!==fi||te!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",W)),w}function Fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=Ne,this.resetTextureUnits=H,this.getTextureUnits=q,this.setTextureUnits=ae,this.setTexture2D=le,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=xe,this.rebindTextures=Ut,this.setupRenderTarget=In,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=ge,this.dispose=j}function xT(t,e){function n(i,r=Ki){let s;const a=Ke.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Cg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ng)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ag)return t.BYTE;if(i===Rg)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===Pg)return t.ALPHA;if(i===Lg)return t.RGB;if(i===fi)return t.RGBA;if(i===fr)return t.DEPTH_COMPONENT;if(i===er)return t.DEPTH_STENCIL;if(i===Dg)return t.RED;if(i===ch)return t.RED_INTEGER;if(i===Br)return t.RG;if(i===uh)return t.RG_INTEGER;if(i===dh)return t.RGBA_INTEGER;if(i===ol||i===ll||i===cl||i===ul)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Rd||i===Cd||i===Nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===Hl||i===Fd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pd||i===Ld)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Id)return s.COMPRESSED_R11_EAC;if(i===Ud)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hl)return s.COMPRESSED_RG11_EAC;if(i===Fd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Gd||i===jd||i===Vd||i===Wd||i===Xd||i===$d||i===qd||i===Yd||i===Kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Od)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zd||i===Qd||i===Jd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zd)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ef||i===tf||i===Gl||i===nf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ef)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const gT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Xg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new zr({vertexShader:gT,fragmentShader:vT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,m=null,f=null,x=null,_=null;const b=typeof XRWebGLBinding<"u",v=new _T,d={},p=n.getContextAttributes();let S=null,y=null;const T=[],E=[],g=new qe;let M=null,N=null;const R=new zn;R.viewport=new wt;const P=new zn;P.viewport=new wt;const F=[R,P],z=new NM;let L=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=T[K];return le===void 0&&(le=new au,T[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=T[K];return le===void 0&&(le=new au,T[K]=le),le.getGripSpace()},this.getHand=function(K){let le=T[K];return le===void 0&&(le=new au,T[K]=le),le.getHandSpace()};function Y(K){const le=E.indexOf(K.inputSource);if(le===-1)return;const ve=T[le];ve!==void 0&&(ve.update(K.inputSource,K.frame,u||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",U);for(let K=0;K<T.length;K++){const le=E[K];le!==null&&(E[K]=null,T[K].disconnect(le))}L=null,j=null,v.reset();for(const K in d)delete d[K];if(e.setRenderTarget(S),x=null,f=null,m=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),N!==null){const K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",I),r.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ee=null,xe=null;p.depth&&(xe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=p.stencil?er:fr,Ee=p.stencil?Ds:xi);const Ue={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mi(f.textureWidth,f.textureHeight,{format:fi,type:Rn,depthTexture:new Is(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),y=new mi(x.framebufferWidth,x.framebufferHeight,{format:fi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function U(K){for(let le=0;le<K.removed.length;le++){const ve=K.removed[le],Ee=E.indexOf(ve);Ee>=0&&(E[Ee]=null,T[Ee].disconnect(ve))}for(let le=0;le<K.added.length;le++){const ve=K.added[le];let Ee=E.indexOf(ve);if(Ee===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(ve),Ee=Ue;break}else if(E[Ue]===null){E[Ue]=ve,Ee=Ue;break}if(Ee===-1)break}const xe=T[Ee];xe&&xe.connect(ve)}}function O(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let le=K.near,ve=K.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),z.near=P.near=R.near=le,z.far=P.far=R.far=ve,(L!==z.near||j!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,j=z.far),z.layers.mask=K.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Ee=K.parent,xe=z.cameras;O(z,Ee);for(let Ue=0;Ue<xe.length;Ue++)O(xe[Ue],Ee);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),H(K,z,Ee)};function H(K,le,ve){ve===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&x===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(K){return d[K]};let q=null;function ae(K,le){if(h=le.getViewerPose(u||a),_=le,h!==null){const ve=h.views;x!==null&&(e.setRenderTargetFramebuffer(y,x.framebuffer),e.setRenderTarget(y));let Ee=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Ee=!0);for(let Pe=0;Pe<ve.length;Pe++){const Qe=ve[Pe];let Ye=null;if(x!==null)Ye=x.getViewport(Qe);else{const Rt=m.getViewSubImage(f,Qe);Ye=Rt.viewport,Pe===0&&(e.setRenderTargetTextures(y,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(y))}let Be=F[Pe];Be===void 0&&(Be=new zn,Be.layers.enable(Pe),Be.viewport=new wt,F[Pe]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Pe===0&&(z.matrix.copy(Be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ee===!0&&z.cameras.push(Be)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const Pe=m.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(Pe,r.renderState)}if(xe&&xe.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let Pe=0;Pe<ve.length;Pe++){const Qe=ve[Pe].camera;if(Qe){let Ye=d[Qe];Ye||(Ye=new Xg,d[Qe]=Ye);const Be=m.getCameraImage(Qe);Ye.sourceTexture=Be}}}}for(let ve=0;ve<T.length;ve++){const Ee=E[ve],xe=T[ve];Ee!==null&&xe!==void 0&&xe.update(Ee,le,u||a)}q&&q(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ne=new Zg;Ne.setAnimationLoop(ae),this.setAnimationLoop=function(K){q=K},this.dispose=function(){}}}const ST=new Mt,ov=new Oe;ov.set(-1,0,0,0,1,0,0,0,1);function MT(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,$g(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,p,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),m(v,d)):d.isMeshPhongMaterial?(s(v,d),h(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&x(v,d,y)):d.isMeshMatcapMaterial?(s(v,d),_(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),b(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&l(v,d)):d.isPointsMaterial?c(v,d,p,S):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===En&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===En&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const p=e.get(d),S=p.envMap,y=p.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(ov),v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function l(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function c(v,d,p,S){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*p,v.scale.value=S*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function h(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function m(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function x(v,d,p){v.ior.value=d.ior,d.diffuseRoughness>0&&(v.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.retroreflectivity>0&&(v.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=p.texture,v.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,d){d.matcap&&(v.matcap.value=d.matcap)}function b(v,d){const p=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(p.matrixWorld),v.nearDistance.value=p.shadow.camera.near,v.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bT(t,e,n,i){let r={},s={};function a(p,S){const y=S.program;i.uniformBlockBinding(p,y,r[p.id])}function l(p,S){let y=r[p.id];y===void 0&&(_(p),y=c(p),r[p.id]=y,p.addEventListener("dispose",v));const T=S.program;i.updateUBOMapping(p,T);const E=e.render.frame;s[p.id]!==E&&(u(p),s[p.id]=E)}function c(p){const S=t.createBuffer(),y=p.__size,T=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,y,T),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function u(p){const S=r[p.id],y=p.uniforms,T=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let E=0,g=y.length;E<g;E++){const M=y[E];if(Array.isArray(M))for(let N=0,R=M.length;N<R;N++)h(M[N],E,N,T);else h(M,E,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(p,S,y,T){if(f(p,S,y,T)===!0){const E=p.__offset,g=p.value;if(Array.isArray(g)){let M=0;for(let N=0;N<g.length;N++){const R=g[N],P=b(R,!0);m(R,p.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,p.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,p.__data)}}function m(p,S,y){typeof p=="number"||typeof p=="boolean"?S[y]=p:p.isMatrix3?(S[y]=p.elements[0],S[y+1]=p.elements[1],S[y+2]=p.elements[2],S[y+3]=0,S[y+4]=p.elements[3],S[y+5]=p.elements[4],S[y+6]=p.elements[5],S[y+7]=0,S[y+8]=p.elements[6],S[y+9]=p.elements[7],S[y+10]=p.elements[8],S[y+11]=0):ArrayBuffer.isView(p)?S.set(p.subarray(0,S.length-y),y):p.toArray(S,y)}function f(p,S,y,T){const E=p.value,g=S+"_"+y;if(Array.isArray(E)){T[g]===void 0&&(T[g]=[]);const M=T[g];let N=!1;for(let R=0;R<E.length;R++)x(E[R],M,R)===!0&&(N=!0);return N}return x(E,T,g)}function x(p,S,y){if(S[y]===void 0)return typeof p=="number"||typeof p=="boolean"?S[y]=p:ArrayBuffer.isView(p)?S[y]=p.slice():S[y]=p.clone(),!0;{const T=S[y];if(typeof p=="number"||typeof p=="boolean"){if(T!==p)return S[y]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(T.equals(p)===!1)return T.copy(p),!0}}return!1}function _(p){const S=p.uniforms;let y=0;const T=16;for(let g=0,M=S.length;g<M;g++){const N=Array.isArray(S[g])?S[g]:[S[g]];for(let R=0,P=N.length;R<P;R++){const F=N[R],z=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(S[g])||Array.isArray(F.value);let j=y;for(let I=0,U=z.length;I<U;I++){const O=z[I],H=b(O,L),q=y%T,ae=q%H.boundary,Ne=q+ae;y+=ae,Ne!==0&&T-Ne<H.storage&&(y+=T-Ne),I===0&&(j=y),y+=H.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((y-j)/Float32Array.BYTES_PER_ELEMENT),F.__offset=j}}const E=y%T;return E>0&&(y+=T-E),p.__size=y,p.__cache={},this}function b(p,S){const y={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(y.boundary=4,y.storage=4):p.isVector2?(y.boundary=8,y.storage=8):p.isVector3||p.isColor?(y.boundary=16,y.storage=12):p.isVector4?(y.boundary=16,y.storage=16):p.isMatrix3?(y.boundary=16,y.storage=48):p.isMatrix4?(y.boundary=16,y.storage=64):p.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(y.boundary=16,y.storage=p.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",p),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function v(p){const S=p.target;S.removeEventListener("dispose",v),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);r={},s={}}return{bind:a,update:l,dispose:d}}const ET=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function wT(){return oi===null&&(oi=new pM(ET,16,16,Br,gi),oi.name="DFG_LUT",oi.minFilter=yn,oi.magFilter=yn,oi.wrapS=Ri,oi.wrapT=Ri,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class TT{constructor(e={}){const{canvas:n=zS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:x=Rn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const b=x,v=new Set([dh,uh,ch]),d=new Set([Rn,xi,ja,Ds,oh,lh]),p=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,E=null;const g=[],M=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,F=null,z=null,L=null,j=null;this._outputColorSpace=On;let Y=0,I=0,U=null,O=-1,H=null;const q=new wt,ae=new wt;let Ne=null;const K=new je(0);let le=0,ve=n.width,Ee=n.height,xe=1,Ue=null,lt=null;const Pe=new wt(0,0,ve,Ee),Qe=new wt(0,0,ve,Ee);let Ye=!1;const Be=new Wa,Rt=new mh;let Se=!1,rt=!1;const tt=new Mt,gn=new G,gt=new wt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function In(){return U===null?xe:1}let B=i;function Un(A,k){return n.getContext(A,k)}let vt,_t,ge,Ft,De,Fe,C,w,W,ie,te,ce,pe,Q,J,de,D,ee,Z,fe,oe,ue,Ce;try{const A={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",_e,!1),B===null){const k="webgl2";if(B=Un(k,A),B===null)throw Un(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),it("WebGLRenderer: "+A.message),A}function He(){vt=new CE(B),vt.init(),oe=new xT(B,vt),_t=new vE(B,vt,e,oe),ge=new pT(B,vt),_t.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),j=B.createFramebuffer(),Ft=new LE(B),De=new eT,Fe=new mT(B,vt,ge,De,_t,oe,Ft),C=new RE(R),w=new IM(B),ue=new xE(B,w),W=new NE(B,w,Ft,ue),ie=new IE(B,W,w,ue,Ft),ee=new DE(B,_t,Fe),J=new _E(De),te=new Jw(R,C,vt,_t,ue,J),ce=new MT(R,De),pe=new nT,Q=new lT(vt),D=new mE(R,C,ge,ie,_,c),de=new hT(R,ie,_t),Ce=new bT(B,Ft,_t,ge),Z=new gE(B,vt,Ft),fe=new PE(B,vt,Ft),Ft.programs=te.programs,R.capabilities=_t,R.extensions=vt,R.properties=De,R.renderLists=pe,R.shadowMap=de,R.state=ge,R.info=Ft}b!==Rn&&(N=new FE(b,n.width,n.height,l,r,s));const se=new yT(R,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(ve,Ee,!1))},this.getSize=function(A){return A.set(ve,Ee)},this.setSize=function(A,k,$=!0){if(se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Ee=k,n.width=Math.floor(A*xe),n.height=Math.floor(k*xe),$===!0&&(n.style.width=A+"px",n.style.height=k+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ve*xe,Ee*xe).floor()},this.setDrawingBufferSize=function(A,k,$){ve=A,Ee=k,xe=$,n.width=Math.floor(A*$),n.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(b===Rn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(Pe)},this.setViewport=function(A,k,$,V){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,k,$,V),ge.viewport(q.copy(Pe).multiplyScalar(In()).round())},this.getScissor=function(A){return A.copy(Qe)},this.setScissor=function(A,k,$,V){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,k,$,V),ge.scissor(ae.copy(Qe).multiplyScalar(In()).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(A){ge.setScissorTest(Ye=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,$=!0){let V=0;if(A){let X=!1;if(U!==null){const me=U.texture.format;X=v.has(me)}if(X){const me=U.texture.type,we=d.has(me),he=D.getClearColor(),Me=D.getClearAlpha(),Re=he.r,ke=he.g,Xe=he.b;we?(p[0]=Re,p[1]=ke,p[2]=Xe,p[3]=Me,B.clearBufferuiv(B.COLOR,0,p)):(S[0]=Re,S[1]=ke,S[2]=Xe,S[3]=Me,B.clearBufferiv(B.COLOR,0,S))}else V|=B.COLOR_BUFFER_BIT}k&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),D.dispose(),pe.dispose(),Q.dispose(),Fe.dispose(),De.dispose(),C.dispose(),ie.dispose(),W.dispose(),ue.dispose(),Ce.dispose(),te.dispose(),se.dispose(),se.removeEventListener("sessionstart",Th),se.removeEventListener("sessionend",Ah),gr.stop()};function Le(A){A.preventDefault(),nm("WebGLRenderer: Context Lost."),P=!0}function ze(){nm("WebGLRenderer: Context Restored."),P=!1;const A=Ft.autoReset,k=de.enabled,$=de.autoUpdate,V=de.needsUpdate,X=de.type;He(),Ft.autoReset=A,de.enabled=k,de.autoUpdate=$,de.needsUpdate=V,de.type=X}function _e(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const k=A.target;k.removeEventListener("dispose",st),Ht(k)}function Ht(A){Oi(A),De.remove(A)}function Oi(A){const k=De.get(A).programs;k!==void 0&&(k.forEach(function($){te.releaseProgram($)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,V,X,me){k===null&&(k=It);const we=X.isMesh&&X.matrixWorld.determinantAffine()<0,he=uv(A,k,$,V,X);ge.setMaterial(V,we);let Me=$.index,Re=1;if(V.wireframe===!0){if(Me=W.getWireframeAttribute($),Me===void 0)return;Re=2}const ke=$.drawRange,Xe=$.attributes.position;let Te=ke.start*Re,$e=(ke.start+ke.count)*Re;me!==null&&(Te=Math.max(Te,me.start*Re),$e=Math.min($e,(me.start+me.count)*Re)),Me!==null?(Te=Math.max(Te,0),$e=Math.min($e,Me.count)):Xe!=null&&(Te=Math.max(Te,0),$e=Math.min($e,Xe.count));const Pt=$e-Te;if(Pt<0||Pt===1/0)return;ue.setup(X,V,he,$,Me);let ut,ct=Z;if(Me!==null&&(ut=w.get(Me),ct=fe,ct.setIndex(ut)),X.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*In()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(X.isLine){let en=V.linewidth;en===void 0&&(en=1),ge.setLineWidth(en*In()),X.isLineSegments?ct.setMode(B.LINES):X.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else X.isPoints?ct.setMode(B.POINTS):X.isSprite&&ct.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const en=X._multiDrawStarts,Ae=X._multiDrawCounts,cn=X._multiDrawCount,nt=Me?w.get(Me).bytesPerElement:1,vr=De.get(V).currentProgram.getUniforms();for(let tn=0;tn<cn;tn++)vr.setValue(B,"_gl_DrawID",tn),ct.render(en[tn]/nt,Ae[tn])}else if(X.isInstancedMesh)ct.renderInstances(Te,Pt,X.count);else if($.isInstancedBufferGeometry){const en=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,en);ct.renderInstances(Te,Pt,Ae)}else ct.render(Te,Pt)};function wh(A,k,$,V){F!==null&&A.isNodeMaterial&&F.setObject(V,A),Se===!0&&J.setState(A,$,!1),A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,js(A,k,V),A.side=kr,A.needsUpdate=!0,js(A,k,V),A.side=Jn):js(A,k,V)}this.compile=function(A,k,$=null){$===null&&($=A),F!==null&&F.renderStart(A,k,$),E=Q.get($),E.init(k),M.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),A!==$&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),rt=this.localClippingEnabled,Se=J.init(this.clippingPlanes,rt),Se===!0&&J.setGlobalState(this.clippingPlanes,k),F!==null&&de.render(E.state.shadowsArray,$,k);const V=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const me=X.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const he=me[we];wh(he,$,k,X),V.add(he)}else wh(me,$,k,X),V.add(me)}),E=M.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(A,k,$=null){const V=this.compile(A,k,$);return new Promise(X=>{function me(){if(V.forEach(function(we){const Me=De.get(we).currentProgram;(Me===void 0||Me.isReady())&&V.delete(we)}),V.size===0){X(A);return}setTimeout(me,10)}vt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let yc=null;function lv(A){yc&&yc(A)}function Th(){gr.stop()}function Ah(){gr.start()}const gr=new Zg;gr.setAnimationLoop(lv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){yc=A,se.setAnimationLoop(A),A===null?gr.stop():gr.start()},se.addEventListener("sessionstart",Th),se.addEventListener("sessionend",Ah),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(A,k);const $=se.enabled===!0&&se.isPresenting===!0,V=N!==null&&(U===null||$)&&N.begin(R,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,k,U),E=Q.get(A,M.length),E.init(k),E.state.textureUnits=Fe.getTextureUnits(),M.push(E),tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Rt.setFromArrayCamera(k):Be.setFromProjectionMatrix(tt,ti,k.reversedDepth),rt=this.localClippingEnabled,Se=J.init(this.clippingPlanes,rt),T=pe.get(A,g.length),T.init(),g.push(T),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Sc(we,k,-1/0,R.sortObjects)}Sc(A,k,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Ue,lt),Ut=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ut&&D.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),Se===!0&&J.beginShadows();const X=E.state.shadowsArray;if(de.render(X,A,k),Se===!0&&J.endShadows(),(V&&N.hasRenderPass())===!1){const we=T.opaque,he=T.transmissive;if(E.setupLights(),k.isArrayCamera){const Me=k.cameras;if(he.length>0)for(let Re=0,ke=Me.length;Re<ke;Re++){const Xe=Me[Re];Ch(we,he,A,Xe)}Ut&&D.render(A);for(let Re=0,ke=Me.length;Re<ke;Re++){const Xe=Me[Re];Rh(T,A,Xe,Xe.viewport)}}else he.length>0&&Ch(we,he,A,k),Ut&&D.render(A),Rh(T,A,k)}U!==null&&I===0&&(Fe.updateMultisampleRenderTarget(U),Fe.updateRenderTargetMipmap(U)),V&&N.end(R),A.isScene===!0&&A.onAfterRender(R,A,k),ue.resetDefaultState(),O=-1,H=null,M.pop(),M.length>0?(E=M[M.length-1],Fe.setTextureUnits(E.state.textureUnits),Se===!0&&J.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,F!==null&&F.renderEnd()};function Sc(A,k,$,V){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){const we=k.isArrayCamera?Rt:Be;if(!A.frustumCulled||A.intersectsFrustum(we)){V&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tt);const he=ie.update(A),Me=A.material;Me.visible&&T.push(A,he,Me,$,gt.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){const we=k.isArrayCamera?Rt:Be;if(!A.frustumCulled||A.intersectsFrustum(we)){const he=ie.update(A),Me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),gt.copy(he.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(tt)),Array.isArray(Me)){const Re=he.groups;for(let ke=0,Xe=Re.length;ke<Xe;ke++){const Te=Re[ke],$e=Me[Te.materialIndex];$e&&$e.visible&&T.push(A,he,$e,$,gt.z,Te,k)}}else Me.visible&&T.push(A,he,Me,$,gt.z,null,k)}}}const me=A.children;for(let we=0,he=me.length;we<he;we++)Sc(me[we],k,$,V)}function Rh(A,k,$,V){const{opaque:X,transmissive:me,transparent:we}=A;E.setupLightsView($),Se===!0&&J.setGlobalState(R.clippingPlanes,$),V&&ge.viewport(q.copy(V)),X.length>0&&no(X,k,$),me.length>0&&no(me,k,$),we.length>0&&no(we,k,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ch(A,k,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Te=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new mi(1,1,{generateMipmaps:!0,type:Te?gi:Rn,minFilter:Ji,samples:Math.max(4,_t.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const me=E.state.transmissionRenderTarget[V.id],we=V.viewport||q;me.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const he=R.getRenderTarget(),Me=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(K),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&D.render($);const ke=R.toneMapping;R.toneMapping=Ni;const Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Se===!0&&J.setGlobalState(R.clippingPlanes,V),no(A,$,V),Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let $e=0,Pt=k.length;$e<Pt;$e++){const ut=k[$e],{object:ct,geometry:en,material:Ae,group:cn}=ut;if(Ae.side===Jn&&ct.layers.test(V.layers)){const nt=Ae.side;Ae.side=En,Ae.needsUpdate=!0,Nh(ct,$,V,en,Ae,cn),Ae.side=nt,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(Fe.updateMultisampleRenderTarget(me),Fe.updateRenderTargetMipmap(me))}R.setRenderTarget(he,Me,Re),R.setClearColor(K,le),Xe!==void 0&&(V.viewport=Xe),R.toneMapping=ke}function no(A,k,$){const V=k.isScene===!0?k.overrideMaterial:null;for(let X=0,me=A.length;X<me;X++){const we=A[X],{object:he,geometry:Me,group:Re}=we;let ke=we.material;ke.allowOverride===!0&&V!==null&&(ke=V),he.layers.test($.layers)&&Nh(he,k,$,Me,ke,Re)}}function Nh(A,k,$,V,X,me){F!==null&&X.isNodeMaterial&&F.setObject(A,X),A.onBeforeRender(R,k,$,V,X,me),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(R,k,$,V,A,me),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,R.renderBufferDirect($,k,V,X,A,me),X.side=kr,X.needsUpdate=!0,R.renderBufferDirect($,k,V,X,A,me),X.side=Jn):R.renderBufferDirect($,k,V,X,A,me),A.onAfterRender(R,k,$,V,X,me)}function Ph(A){let k=0;for(const $ of A)$.texture!==null&&k++;return k}function js(A,k,$){k.isScene!==!0&&(k=It);const V=De.get(A),X=E.state.lights,me=E.state.shadowsArray,we=X.state.version,he=te.getParameters(A,X.state,me,k,$,E.state.lightProbeGridArray),Me=te.getProgramCacheKey(he);let Re=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;const ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=C.get(A.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",st),Re=new Map,V.programs=Re,V.programVariants=new Map);let Xe=Re.get(Me);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===we)return Dh(A,he),Xe}else he.uniforms=te.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,$,he),A.onBeforeCompile(he,R),Xe=te.acquireProgram(he,Me),Re.set(Me,Xe),V.uniforms=he.uniforms;const Te=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=J.uniform),Dh(A,he),V.needsLights=fv(A),V.lightsStateVersion=we,V.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.sunLights.value=X.state.sun,Te.sunLightShadows.value=X.state.sunShadow,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.sunShadowMatrix.value=X.state.sunShadowMatrix,Te.sunShadowCascade.value=X.state.sunShadowCascade,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Ph(E.state.lightProbeGridArray),V.currentProgram=Xe,V.uniformsList=null,Xe}function cv(A,k,$,V,X){const me=De.get(A),we=me.currentProgram.id+","+V+","+X;let he=me.programVariants.get(we);return he===void 0?(he=js(A,k,$),me.programVariants.set(we,he)):(me.currentProgram=he,me.uniformsList=null,me.outputColorSpace=V,me.toneMapping=X),he}function Lh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=hl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Dh(A,k){const $=De.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function uv(A,k,$,V,X){k.isScene!==!0&&(k=It),Fe.resetTextureUnits();const me=k.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,he=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ke.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=C.get(V.envMap||we,Me),ke=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,Pt=!!$.morphAttributes.color;let ut=Ni;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ut=R.toneMapping);const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,en=ct!==void 0?ct.length:0,Ae=De.get(V),cn=E.state.lights;if(Se===!0&&(rt===!0||A!==H)){const bt=A===H&&V.id===O;J.setState(V,A,bt)}let nt=!1,vr=!1;V.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Re||V.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==ke||Ae.vertexTangents!==Xe||Ae.morphTargets!==Te||Ae.morphNormals!==$e||Ae.morphColors!==Pt||Ae.morphTargetsCount!==en||Ae.numLightProbeGrids!==Ph(E.state.lightProbeGridArray)?nt=!0:(Ae.outputColorSpace!==he||Ae.toneMapping!==ut)&&(vr=!0):(nt=!0,Ae.__version=V.version);let tn=Ae.currentProgram;(nt===!0||vr===!0)&&(tn=vr===!0?cv(V,k,X,he,ut):js(V,k,X),F&&V.isNodeMaterial&&F.onUpdateProgram(V,tn,Ae));let io=!1,ki=!1,_r=!1;const Je=tn.getUniforms(),Xt=Ae.uniforms;if(ge.useProgram(tn.program)&&(io=!0,ki=!0,_r=!0),V.id!==O&&(O=V.id,ki=!0),io||H!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Je.setValue(B,"projectionMatrix",A.projectionMatrix),Je.setValue(B,"viewMatrix",A.matrixWorldInverse);const Gt=Je.map.cameraPosition;Gt!==void 0&&Gt.setValue(B,gn.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&Je.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Je.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,ki=!0,_r=!0)}if(Ae.needsLights&&(cn.state.sunShadowMap.length>0&&Je.setValue(B,"sunShadowMap",cn.state.sunShadowMap,Fe),cn.state.directionalShadowMap.length>0&&Je.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,Fe),cn.state.spotShadowMap.length>0&&Je.setValue(B,"spotShadowMap",cn.state.spotShadowMap,Fe),cn.state.pointShadowMap.length>0&&Je.setValue(B,"pointShadowMap",cn.state.pointShadowMap,Fe)),X.isSkinnedMesh){Je.setOptional(B,X,"bindMatrix"),Je.setOptional(B,X,"bindMatrixInverse");const bt=X.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Je.setValue(B,"boneTexture",bt.boneTexture,Fe))}X.isBatchedMesh&&(Je.setOptional(B,X,"batchingTexture"),Je.setValue(B,"batchingTexture",X._matricesTexture,Fe),Je.setOptional(B,X,"batchingIdTexture"),Je.setValue(B,"batchingIdTexture",X._indirectTexture,Fe),Je.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Je.setValue(B,"batchingColorTexture",X._colorsTexture,Fe));const Wn=$.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ee.update(X,$,tn),(ki||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,Je.setValue(B,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=wT()),ki){if(Je.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&dv(Xt,_r),me&&V.fog===!0&&ce.refreshFogUniforms(Xt,me),ce.refreshMaterialUniforms(Xt,V,xe,Ee,E.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const bt=y;let Gt=0;for(const vi of E.state.lightProbeGridArray)vi.texture!==null&&(bt.textures[Gt]=vi.texture,bt.min[Gt]=vi.boundingBox.min,bt.max[Gt]=vi.boundingBox.max,bt.resolution[Gt]=vi.resolution,Gt++);for(const vi in bt)bt[vi].length=Gt;Xt.probesSH.value=bt.textures,Xt.probesMin.value=bt.min,Xt.probesMax.value=bt.max,Xt.probesResolution.value=bt.resolution}hl.upload(B,Lh(Ae),Xt,Fe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hl.upload(B,Lh(Ae),Xt,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Je.setValue(B,"center",X.center),Je.setValue(B,"modelViewMatrix",X.modelViewMatrix),Je.setValue(B,"normalMatrix",X.normalMatrix),Je.setValue(B,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const bt=V.uniformsGroups;for(let Gt=0,vi=bt.length;Gt<vi;Gt++){const Uh=bt[Gt];Ce.update(Uh,tn),Ce.bind(Uh,tn)}}return tn}function dv(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function fv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,k,$){const V=De.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),De.get(A.texture).__webglTexture=k,De.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const $=De.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){U=A,Y=k,I=$;let V=null,X=!1,me=!1;if(A){const he=De.get(A);if(he.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,he.__webglFramebuffer),q.copy(A.viewport),ae.copy(A.scissor),Ne=A.scissorTest,ge.viewport(q),ge.scissor(ae),ge.setScissorTest(Ne),O=-1;return}else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(A);else if(he.__hasExternalTextures)Fe.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(A)}}const Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Re=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[k])?V=Re[k][$]:V=Re[k],X=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?V=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[$]:V=Re,q.copy(A.viewport),ae.copy(A.scissor),Ne=A.scissorTest}else q.copy(Pe).multiplyScalar(xe).floor(),ae.copy(Qe).multiplyScalar(xe).floor(),Ne=Ye;if($!==0&&(V=z),ge.bindFramebuffer(B.FRAMEBUFFER,V)&&ge.drawBuffers(A,V),ge.viewport(q),ge.scissor(ae),ge.setScissorTest(Ne),X){const he=De.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,$)}else if(me){const he=k;for(let Me=0;Me<A.textures.length;Me++){const Re=De.get(A.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,Re.__webglTexture,$,he)}}else if(A!==null&&$!==0){const he=De.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,he.__webglTexture,$)}O=-1};function Ih(A){const k=De.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=_t.textureFormatReadable(A.format),k.__typeReadable=_t.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,$,V,X,me,we,he=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(B.FRAMEBUFFER,Me);try{const Re=A.textures[he],ke=Re.format,Xe=Re.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);const Te=Ih(Re);if(Te.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-V&&$>=0&&$<=A.height-X&&B.readPixels(k,$,V,X,oe.convert(ke),oe.convert(Xe),me)}finally{const Re=U!==null?De.get(U).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,V,X,me,we,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me)if(k>=0&&k<=A.width-V&&$>=0&&$<=A.height-X){ge.bindFramebuffer(B.FRAMEBUFFER,Me);const Re=A.textures[he],ke=Re.format,Xe=Re.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);const Te=Ih(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(k,$,V,X,oe.convert(ke),oe.convert(Xe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Pt=U!==null?De.get(U).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Pt);const ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await HS(B,ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer($e),B.deleteSync(ut),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,$=0){const V=Math.pow(2,-$),X=Math.floor(A.image.width*V),me=Math.floor(A.image.height*V),we=k!==null?k.x:0,he=k!==null?k.y:0;Fe.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,we,he,X,me),ge.unbindTexture()},this.copyTextureToTexture=function(A,k,$=null,V=null,X=0,me=0){let we,he,Me,Re,ke,Xe,Te,$e,Pt;const ut=A.isCompressedTexture?A.mipmaps[me]:A.image;if($!==null)we=$.max.x-$.min.x,he=$.max.y-$.min.y,Me=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,ke=$.min.y,Xe=$.isBox3?$.min.z:0;else{const Je=Math.pow(2,-X);we=Math.floor(ut.width*Je),he=Math.floor(ut.height*Je),A.isDataArrayTexture?Me=ut.depth:A.isData3DTexture?Me=Math.floor(ut.depth*Je):Me=1,Re=0,ke=0,Xe=0}V!==null?(Te=V.x,$e=V.y,Pt=V.z):(Te=0,$e=0,Pt=0);const ct=oe.convert(k.format),en=oe.convert(k.type);let Ae;k.isData3DTexture?(Fe.setTexture3D(k,0),Ae=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Fe.setTexture2DArray(k,0),Ae=B.TEXTURE_2D_ARRAY):(Fe.setTexture2D(k,0),Ae=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const cn=ge.getParameter(B.UNPACK_ROW_LENGTH),nt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),vr=ge.getParameter(B.UNPACK_SKIP_PIXELS),tn=ge.getParameter(B.UNPACK_SKIP_ROWS),io=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),ge.pixelStorei(B.UNPACK_SKIP_ROWS,ke),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const ki=A.isDataArrayTexture||A.isData3DTexture,_r=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Je=De.get(A),Xt=De.get(k),Wn=De.get(Je.__renderTarget),bt=De.get(Xt.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Gt=0;Gt<Me;Gt++)ki&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(A).__webglTexture,X,Xe+Gt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(k).__webglTexture,me,Pt+Gt)),B.blitFramebuffer(Re,ke,Re+we,ke+he,Te,$e,Te+we,$e+he,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||De.has(A)){const Je=De.get(A),Xt=De.get(k);ge.bindFramebuffer(B.READ_FRAMEBUFFER,L),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,j);for(let Wn=0;Wn<Me;Wn++)ki?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Je.__webglTexture,X,Xe+Wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Je.__webglTexture,X),_r?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,me,Pt+Wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,me),X!==0?B.blitFramebuffer(Re,ke,Re+we,ke+he,Te,$e,Te+we,$e+he,B.COLOR_BUFFER_BIT,B.NEAREST):_r?B.copyTexSubImage3D(Ae,me,Te,$e,Pt+Wn,Re,ke,we,he):B.copyTexSubImage2D(Ae,me,Te,$e,Re,ke,we,he);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else _r?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ae,me,Te,$e,Pt,we,he,Me,ct,en,ut.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ae,me,Te,$e,Pt,we,he,Me,ct,ut.data):B.texSubImage3D(Ae,me,Te,$e,Pt,we,he,Me,ct,en,ut):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,Te,$e,we,he,ct,en,ut.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,Te,$e,ut.width,ut.height,ct,ut.data):B.texSubImage2D(B.TEXTURE_2D,me,Te,$e,we,he,ct,en,ut);ge.pixelStorei(B.UNPACK_ROW_LENGTH,cn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,vr),ge.pixelStorei(B.UNPACK_SKIP_ROWS,tn),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,io),me===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&B.generateMipmap(Ae),ge.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&Fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){Y=0,I=0,U=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}function AT({layout:t="5.1",pos:e={x:0,y:.4,z:0},onChangePos:n,speakerGains:i={},isBinaural:r=!1}){const s=ne.useRef(null),a=ne.useRef(null),l=ne.useRef(null),c=ne.useRef(null),u=ne.useRef(null),h=ne.useRef(null),m=ne.useRef([]),f=ne.useRef([]),x=ne.useRef(!1),_=ne.useRef(!1),b=ne.useRef({x:0,y:0}),v=ne.useRef({theta:Math.PI/4,phi:Math.PI/4,radius:8.5}),d={"2.0":[{id:"L",name:"Left",x:-1,y:1,z:0},{id:"R",name:"Right",x:1,y:1,z:0}],"2.1":[{id:"L",name:"Left",x:-1,y:1,z:0},{id:"R",name:"Right",x:1,y:1,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.2,z:-.6,isLfe:!0}],"5.1":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Surround L",x:-.95,y:-.7,z:0},{id:"Rs",name:"Surround R",x:.95,y:-.7,z:0}],"7.1":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Side Surr L",x:-1,y:0,z:0},{id:"Rs",name:"Side Surr R",x:1,y:0,z:0},{id:"Rls",name:"Rear Surr L",x:-.75,y:-.9,z:0},{id:"Rrs",name:"Rear Surr R",x:.75,y:-.9,z:0}],"7.1.4":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Side Surr L",x:-1,y:0,z:0},{id:"Rs",name:"Side Surr R",x:1,y:0,z:0},{id:"Rls",name:"Rear Surr L",x:-.75,y:-.9,z:0},{id:"Rrs",name:"Rear Surr R",x:.75,y:-.9,z:0},{id:"TFL",name:"Top Front L",x:-.75,y:.6,z:.95,isHeight:!0},{id:"TFR",name:"Top Front R",x:.75,y:.6,z:.95,isHeight:!0},{id:"TRL",name:"Top Rear L",x:-.75,y:-.6,z:.95,isHeight:!0},{id:"TRR",name:"Top Rear R",x:.75,y:-.6,z:.95,isHeight:!0}]},p=d[t]||d["5.1"];ne.useEffect(()=>{const N=s.current;if(!N)return;const R=N.clientWidth||700,P=N.clientHeight||480,F=new aM;F.background=new je(395278),F.fog=new ph(395278,.04),a.current=F;const z=new zn(45,R/P,.1,100);c.current=z,S();const L=new TT({antialias:!0,alpha:!0});L.setSize(R,P),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.shadowMap.enabled=!0,N.innerHTML="",N.appendChild(L.domElement),l.current=L;const j=new CM(16777215,.7);F.add(j);const Y=new RM(62206,1.2);Y.position.set(5,10,7),Y.castShadow=!0,F.add(Y);const I=new TM(11032055,2,15);I.position.set(-4,5,-4),F.add(I);const U=new LM(10,20,62206,1976635);U.position.y=0,F.add(U);const O=new ql(2.95,3.05,64),H=new fl({color:62206,side:Jn,transparent:!0,opacity:.35}),q=new fn(O,H);q.rotation.x=Math.PI/2,F.add(q);const ae=new Ma(.28,24,24),Ne=new ia({color:988970,roughness:.4,metalness:.8}),K=new fn(ae,Ne);K.position.set(0,1.1,0),F.add(K);const le=new vh(.3,.04,16,32,Math.PI),ve=new ia({color:62206,metalness:.9,roughness:.1}),Ee=new fn(le,ve);Ee.rotation.x=Math.PI/2,Ee.position.set(0,1.15,0),F.add(Ee);const xe=new Ma(.25,32,32),Ue=new ia({color:62206,emissive:62206,emissiveIntensity:.8,roughness:.1,metalness:.5}),lt=new fn(xe,Ue);F.add(lt),u.current=lt;const Pe=new Ma(.35,16,16),Qe=new fl({color:11032055,wireframe:!0,transparent:!0,opacity:.6}),Ye=new fn(Pe,Qe);lt.add(Ye);const Be=new EM({color:62206,dashSize:.1,gapSize:.05}),Rt=new Kt().setFromPoints([new G(0,0,0),new G(0,1,0)]),Se=new af(Rt,Be);Se.computeLineDistances(),F.add(Se),h.current=Se;const rt=()=>{if(!N)return;const It=N.clientWidth,Ut=N.clientHeight;z.aspect=It/Ut,z.updateProjectionMatrix(),L.setSize(It,Ut)};window.addEventListener("resize",rt);let tt;const gn=new PM,gt=()=>{tt=requestAnimationFrame(gt);const It=gn.getElapsedTime();Ye.rotation.y=It*.8,Ye.rotation.x=It*.5;const Ut=1+Math.sin(It*4)*.08;Ye.scale.set(Ut,Ut,Ut),L.render(F,z)};return gt(),()=>{window.removeEventListener("resize",rt),cancelAnimationFrame(tt),L.dispose()}},[]);const S=()=>{if(!c.current)return;const{theta:N,phi:R,radius:P}=v.current;c.current.position.x=P*Math.sin(R)*Math.sin(N),c.current.position.y=P*Math.cos(R),c.current.position.z=P*Math.sin(R)*Math.cos(N),c.current.lookAt(0,1,0)};ne.useEffect(()=>{const N=a.current;N&&(f.current.forEach(R=>N.remove(R)),f.current=[],m.current.forEach(R=>N.remove(R)),m.current=[],p.forEach(R=>{const P=new ua,F=R.x*2.8,z=R.z*1.8+1.2,L=-R.y*2.8;P.position.set(F,z,L);let j=R.isLfe?14251782:R.isHeight?9647082:165063;const Y=new Hs(.35,.45,.3),I=new ia({color:j,roughness:.3,metalness:.7}),U=new fn(Y,I);P.add(U);const O=new gh(.12,.08,16),H=new ia({color:988970,roughness:.9}),q=new fn(O,H);q.rotation.x=Math.PI/2,q.position.z=.14,P.add(q);const ae=new ql(.18,.22,24),Ne=new fl({color:R.isLfe?16096779:R.isHeight?12616956:3718648,side:Jn,transparent:!0,opacity:.8}),K=new fn(ae,Ne);K.position.z=.16,P.add(K),P.lookAt(0,1.1,0),N.add(P),f.current.push(P);const le=new Kt().setFromPoints([new G(0,0,0),new G(F,z,L)]),ve=new xc({color:j,transparent:!0,opacity:.25}),Ee=new af(le,ve);N.add(Ee),m.current.push({beam:Ee,spk:R,targetPos:new G(F,z,L)})}))},[t]),ne.useEffect(()=>{const N=u.current,R=h.current;if(!N||!R)return;const P=e.x*2.8,F=e.z*1.8+1.2,z=-e.y*2.8;N.position.set(P,F,z),R.geometry.dispose(),R.geometry=new Kt().setFromPoints([new G(P,0,z),new G(P,F,z)]),R.computeLineDistances(),m.current.forEach(({beam:L,targetPos:j})=>{L.geometry.dispose(),L.geometry=new Kt().setFromPoints([new G(P,F,z),j])})},[e]);const y=N=>{N.button===0&&!N.shiftKey?_.current=!0:x.current=!0,b.current={x:N.clientX,y:N.clientY}},T=N=>{const R=N.clientX-b.current.x,P=N.clientY-b.current.y;if(b.current={x:N.clientX,y:N.clientY},_.current)v.current.theta-=R*.008,v.current.phi=Math.max(.15,Math.min(Math.PI/2-.05,v.current.phi-P*.008)),S();else if(x.current){const F=Math.max(-1,Math.min(1,e.x+R*.005)),z=Math.max(-1,Math.min(1,e.y-P*.005));n({...e,x:F,y:z})}},E=()=>{_.current=!1,x.current=!1},g=N=>{N.preventDefault(),v.current.radius=Math.max(4,Math.min(15,v.current.radius+N.deltaY*.01)),S()},M=N=>{N==="iso"?v.current={theta:Math.PI/4,phi:Math.PI/3.5,radius:8.5}:N==="top"?v.current={theta:0,phi:.15,radius:9}:N==="sweetspot"&&(v.current={theta:0,phi:Math.PI/2.2,radius:4.5}),S()};return o.jsxs("div",{className:"relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-[#06080e] shadow-2xl select-none",children:[o.jsx("div",{ref:s,onMouseDown:y,onMouseMove:T,onMouseUp:E,onWheel:g,className:"w-full h-full cursor-grab active:cursor-grabbing"}),o.jsxs("div",{className:"absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-xs font-mono",children:[o.jsxs("div",{className:"flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),o.jsxs("span",{className:"text-white font-bold",children:[t," Room View"]}),o.jsx("span",{className:"text-slate-400",children:"•"}),o.jsxs("span",{className:"text-cyan-300",children:["X: ",e.x.toFixed(2)]}),o.jsxs("span",{className:"text-emerald-300",children:["Y: ",e.y.toFixed(2)]}),o.jsxs("span",{className:"text-purple-300",children:["Z: ",e.z.toFixed(2)]})]}),r&&o.jsxs("div",{className:"flex items-center space-x-1.5 bg-purple-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/60 text-purple-200",children:[o.jsx("span",{className:"text-sm",children:"🎧"}),o.jsx("span",{className:"font-bold",children:"Binaural HRTF Headphone Virtualization Active"})]})]}),o.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 text-[10px] font-mono",children:[o.jsx("span",{className:"text-slate-400 px-1",children:"Camera:"}),o.jsx("button",{onClick:()=>M("iso"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"3D Perspective"}),o.jsx("button",{onClick:()=>M("top"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"Top Down"}),o.jsx("button",{onClick:()=>M("sweetspot"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"Sweet Spot"})]}),o.jsx("div",{className:"absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-mono text-slate-400 pointer-events-none",children:"Click + Drag: Orbit 3D Room • Shift + Drag: Pan Sound Orb • Scroll: Zoom"})]})}function RT({activeFile:t,tracks:e=[]}){var xe,Ue,lt,Pe,Qe,Ye,Be,Rt;const[n,i]=ne.useState("3d_room"),[r,s]=ne.useState("7.1.4"),[a,l]=ne.useState("3d"),[c,u]=ne.useState({x:0,y:.4,z:.2}),[h,m]=ne.useState(80),[f,x]=ne.useState(!1),[_,b]=ne.useState(!1),[v,d]=ne.useState(null),[p,S]=ne.useState("dolby"),[y,T]=ne.useState("dolby_atmos_7_1_4"),[E,g]=ne.useState("dts_x_7_1_4"),[M,N]=ne.useState(-27),[R,P]=ne.useState("film_standard"),[F,z]=ne.useState(4),[L,j]=ne.useState(80),[Y,I]=ne.useState(!1),[U,O]=ne.useState(null),[H,q]=ne.useState(""),ae={"2.0":[{id:"L",name:"Left",x:25,y:25},{id:"R",name:"Right",x:75,y:25}],"2.1":[{id:"L",name:"Left",x:25,y:25},{id:"R",name:"Right",x:75,y:25},{id:"LFE",name:"Subwoofer",x:50,y:50,isLfe:!0}],"5.1":[{id:"L",name:"Front Left",x:20,y:20},{id:"C",name:"Center",x:50,y:15},{id:"R",name:"Front Right",x:80,y:20},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Surround L",x:15,y:80},{id:"Rs",name:"Surround R",x:85,y:80}],"7.1":[{id:"L",name:"Front Left",x:20,y:20},{id:"C",name:"Center",x:50,y:15},{id:"R",name:"Front Right",x:80,y:20},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Side Surr L",x:10,y:50},{id:"Rs",name:"Side Surr R",x:90,y:50},{id:"Rls",name:"Rear Surr L",x:25,y:85},{id:"Rrs",name:"Rear Surr R",x:75,y:85}],"7.1.4":[{id:"L",name:"Front Left",x:20,y:25},{id:"C",name:"Center",x:50,y:18},{id:"R",name:"Front Right",x:80,y:25},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Side Surr L",x:10,y:50},{id:"Rs",name:"Side Surr R",x:90,y:50},{id:"Rls",name:"Rear Surr L",x:25,y:85},{id:"Rrs",name:"Rear Surr R",x:75,y:85},{id:"TFL",name:"Top Front L",x:30,y:35,isHeight:!0},{id:"TFR",name:"Top Front R",x:70,y:35,isHeight:!0},{id:"TRL",name:"Top Rear L",x:30,y:65,isHeight:!0},{id:"TRR",name:"Top Rear R",x:70,y:65,isHeight:!0}]},Ne=ae[r]||ae["5.1"];ne.useEffect(()=>{dt.setBinauralSpatialPosition(c.x,c.y,c.z)},[c]);const K=()=>{const Se=!f;x(Se),dt.setBinauralMode(Se),dt.setBinauralSpatialPosition(c.x,c.y,c.z)},le=Se=>{if(Se.isLfe)return .65;const rt=(Se.x-50)/40,tt=-(Se.y-50)/40,gn=Se.isHeight?.9:0,gt=Math.sqrt(Math.pow(c.x-rt,2)+Math.pow(c.y-tt,2)+Math.pow(c.z-gn,2));return Math.max(.05,Math.min(1,1/(gt*gt+.5)))},ve=async()=>{const Se=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!Se){alert("Please import an audio file or record a track first.");return}b(!0);try{const rt=await yt(pt("/api/v1/audio/surround"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:Se,layout:r,x:c.x,y:c.y,z:c.z,crossover_hz:h})});d(rt)}catch(rt){alert(`Surround render error: ${rt.message}`)}finally{b(!1)}},Ee=async()=>{const Se=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!Se){alert("Please import an audio file or record a track first.");return}I(!0),q("");try{const rt=await yt(pt("/api/v1/audio/cinema-process"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:Se,processor_type:p,profile:p==="dolby"?y:E,dialnorm_db:M,drc_profile:R,dialogue_boost_db:F,crossover_hz:L,generate_binaural:!0})});O(rt)}catch(rt){q(rt.message),alert(`Cinema Processing error: ${rt.message}`)}finally{I(!1)}};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1750px] mx-auto",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(kl,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"3D SPATIAL STUDIO, DOLBY® & DTS® CINEMA PROCESSOR"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:"Interactive WebGL 3D Room, Dolby Atmos® 7.1.4, Dolby Pro Logic II®, DTS:X® Immersive, and DTS Dialogue Clarity."})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[o.jsxs("div",{className:"flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:[o.jsxs("button",{onClick:()=>i("3d_room"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${n==="3d_room"?"bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[o.jsx(Wp,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"3D Spatial Room"})]}),o.jsxs("button",{onClick:()=>i("cinema_processor"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${n==="cinema_processor"?"bg-gradient-to-r from-amber-500 to-rose-600 text-black shadow-md shadow-amber-500/20":"text-slate-400 hover:text-white"}`,children:[o.jsx(qp,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Dolby® & DTS® Suite"})]})]}),n==="3d_room"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:[o.jsxs("button",{onClick:()=>l("3d"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${a==="3d"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[o.jsx(Wp,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"3D Room"})]}),o.jsxs("button",{onClick:()=>l("2d"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${a==="2d"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[o.jsx(Vy,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"2D Top-Down"})]})]}),o.jsxs("button",{onClick:K,className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-md cursor-pointer ${f?"bg-purple-900/80 text-purple-200 border-purple-500/80 shadow-purple-900/30 ring-2 ring-purple-500/30":"bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700"}`,children:[o.jsx(qc,{className:`w-4 h-4 ${f?"text-purple-300 animate-pulse":"text-slate-400"}`}),o.jsx("span",{children:f?"Binaural 3D Headphone: ON":"Binaural HRTF Mode: OFF"})]}),o.jsx("div",{className:"flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:["2.0","2.1","5.1","7.1","7.1.4"].map(Se=>o.jsx("button",{onClick:()=>s(Se),className:`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${r===Se?"bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:Se},Se))})]})]})]}),n==="3d_room"?o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[a==="3d"?o.jsx(AT,{layout:r,pos:c,onChangePos:u,isBinaural:f}):o.jsxs("div",{className:"bg-[#0a0d15] p-6 rounded-2xl border border-slate-800 shadow-2xl relative flex flex-col items-center justify-center min-h-[500px]",children:[o.jsx("div",{className:"absolute top-4 left-4 text-xs font-mono text-slate-400",children:"Acoustic Listening Arena (2D Polar Coordinates)"}),o.jsxs("div",{className:"w-[380px] h-[380px] rounded-full border border-dashed border-slate-700 relative flex items-center justify-center bg-black/40",children:[o.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30",children:o.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300",children:"ENG"})}),o.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 border-2 border-white absolute shadow-lg shadow-violet-500/50 flex items-center justify-center cursor-move",style:{left:`${(c.x+1)/2*85+7.5}%`,top:`${(1-c.y)/2*85+7.5}%`},title:"Audio Source",children:o.jsx("div",{className:"w-2 h-2 rounded-full bg-black animate-ping"})}),Ne.map(Se=>o.jsxs("div",{className:`absolute px-2 py-0.5 rounded-lg border text-xs font-mono font-bold shadow-lg flex flex-col items-center ${Se.isLfe?"bg-amber-950 text-amber-300 border-amber-600":Se.isHeight?"bg-purple-950 text-purple-300 border-purple-500":"bg-slate-900 text-cyan-300 border-slate-700"}`,style:{left:`${Se.x}%`,top:`${Se.y}%`,transform:"translate(-50%, -50%)"},children:[o.jsx("span",{children:Se.id}),o.jsx("span",{className:"text-[8px] text-slate-400 font-normal",children:Se.name})]},Se.id))]})]}),o.jsxs("div",{className:"bg-[#0b0e17] p-4 rounded-xl border border-slate-800/80 shadow-lg",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5",children:[o.jsx("span",{className:"font-bold text-cyan-300 uppercase",children:"VBAP Real-Time Speaker Energy Radiation:"}),o.jsx("span",{className:"text-[10px] text-slate-500",children:"Sum of Squares Normalised"})]}),o.jsx("div",{className:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 text-xs font-mono",children:Ne.map(Se=>{const rt=le(Se),tt=Math.round(rt*100);return o.jsxs("div",{className:"bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center space-y-1",children:[o.jsx("span",{className:`text-[10px] font-bold ${Se.isLfe?"text-amber-400":Se.isHeight?"text-purple-400":"text-cyan-400"}`,children:Se.id}),o.jsx("div",{className:"w-full h-14 bg-black/60 rounded-md relative flex flex-col justify-end p-0.5 overflow-hidden",children:o.jsx("div",{className:`w-full rounded-sm transition-all duration-100 ${Se.isLfe?"bg-gradient-to-t from-amber-600 to-amber-400":Se.isHeight?"bg-gradient-to-t from-purple-600 to-purple-400":"bg-gradient-to-t from-cyan-600 to-cyan-300"}`,style:{height:`${tt}%`}})}),o.jsxs("span",{className:"text-[9px] text-slate-400",children:[tt,"%"]})]},Se.id)})})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[o.jsxs("h3",{className:"font-mono text-xs font-bold text-cyan-300 uppercase flex items-center space-x-1.5",children:[o.jsx(Bl,{className:"w-4 h-4 text-cyan-400"}),o.jsx("span",{children:"3D Spatial Coordinates"})]}),o.jsxs("button",{onClick:()=>u({x:0,y:.4,z:0}),className:"text-[10px] font-mono text-slate-400 hover:text-white flex items-center space-x-1",title:"Reset to Center",children:[o.jsx(Ky,{className:"w-3 h-3"}),o.jsx("span",{children:"Reset"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"Azimuth Pan (X: Left / Right)"}),o.jsx("span",{className:"text-cyan-400 font-bold",children:c.x.toFixed(2)})]}),o.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:c.x,onChange:Se=>u({...c,x:parseFloat(Se.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-cyan-400"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"Distance Pan (Y: Front / Rear)"}),o.jsx("span",{className:"text-emerald-400 font-bold",children:c.y.toFixed(2)})]}),o.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:c.y,onChange:Se=>u({...c,y:parseFloat(Se.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-emerald-400"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"Elevation Height (Z: Floor / Ceiling)"}),o.jsx("span",{className:"text-purple-400 font-bold",children:c.z.toFixed(2)})]}),o.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:c.z,onChange:Se=>u({...c,z:parseFloat(Se.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-purple-400"}),o.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-slate-500 mt-0.5",children:[o.jsx("span",{children:"-1.0 (Floor)"}),o.jsx("span",{children:"0.0 (Ear Level)"}),o.jsx("span",{children:"+1.0 (Ceiling Height)"})]})]}),o.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"Subwoofer LFE Crossover"}),o.jsxs("span",{className:"text-amber-400 font-bold",children:[h," Hz"]})]}),o.jsx("input",{type:"range",min:"50",max:"160",step:"10",value:h,onChange:Se=>m(parseInt(Se.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-400"}),o.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"4th-order Linkwitz-Riley 24dB/octave phase-aligned crossover."})]}),o.jsx("button",{onClick:ve,disabled:_,className:"w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-xs font-mono shadow-xl shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center justify-center space-x-2",children:_?o.jsxs(o.Fragment,{children:[o.jsx(Ps,{className:"w-4 h-4 animate-spin text-cyan-300"}),o.jsxs("span",{children:["Spatially Bouncing ",r," & Binaural Master..."]})]}):o.jsxs(o.Fragment,{children:[o.jsx(Or,{className:"w-4 h-4"}),o.jsxs("span",{children:["Render ",r," Spatial Audio & Binaural HRTF"]})]})})]}),o.jsxs("div",{className:"bg-black/60 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 text-amber-400 font-bold",children:[o.jsx(pc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"ITU-R BS.775 & Dolby Atmos Specification"})]}),o.jsx("p",{className:"leading-relaxed",children:"Discrete multi-point VBAP spatialization across all calibrated channels. Height channels (7.1.4) adhere to ITU 4-ceiling layout. Binaural mode applies Interaural Time & Level Differences for 3D headphones."})]})]})]}):o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{onClick:()=>S("dolby"),className:`p-5 rounded-2xl border-2 transition-all cursor-pointer ${p==="dolby"?"border-cyan-400 bg-gradient-to-br from-cyan-950/40 via-[#0b0e17] to-violet-950/40 shadow-xl shadow-cyan-500/10":"border-slate-800 bg-[#0a0d15]/60 hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800/80",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-md",children:o.jsx(qp,{className:"w-5 h-5 text-black stroke-[2.5]"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-bold text-white font-mono tracking-wider",children:"DOLBY® PROCESSING SUITE"}),o.jsx("p",{className:"text-[11px] text-cyan-400 font-mono",children:"Dolby Atmos® 7.1.4 • Pro Logic II® • Dialnorm"})]})]}),o.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${p==="dolby"?"bg-cyan-950 text-cyan-300 border-cyan-700":"bg-slate-900 text-slate-500 border-slate-800"}`,children:p==="dolby"?"ACTIVE":"SELECT"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono mt-3 leading-relaxed",children:"Cinema broadcast standard processing with 90° Hilbert surround matrixing, ITU-R BS.1770 Dialnorm speech normalization (-27 LUFS), and theatrical Dynamic Range Control (DRC)."})]}),o.jsxs("div",{onClick:()=>S("dts"),className:`p-5 rounded-2xl border-2 transition-all cursor-pointer ${p==="dts"?"border-amber-400 bg-gradient-to-br from-amber-950/40 via-[#0b0e17] to-orange-950/40 shadow-xl shadow-amber-500/10":"border-slate-800 bg-[#0a0d15]/60 hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800/80",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-md",children:o.jsx(Qy,{className:"w-5 h-5 text-black stroke-[2.5]"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-bold text-white font-mono tracking-wider",children:"DTS® PROCESSING SUITE"}),o.jsx("p",{className:"text-[11px] text-amber-400 font-mono",children:"DTS:X® 7.1.4 • Neural:X® • Dialogue Clarity"})]})]}),o.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${p==="dts"?"bg-amber-950 text-amber-300 border-amber-700":"bg-slate-900 text-slate-500 border-slate-800"}`,children:p==="dts"?"ACTIVE":"SELECT"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono mt-3 leading-relaxed",children:"Acoustic immersion featuring wide-angle Haas surround delays, interaural phase correlation steering, 2.4kHz vocal formant boost, and stereo masking reduction."})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:p==="dolby"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{onClick:()=>T("dolby_atmos_7_1_4"),className:`p-4 rounded-xl border transition-all cursor-pointer ${y==="dolby_atmos_7_1_4"?"border-cyan-400 bg-cyan-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-cyan-300",children:"Dolby Atmos® 7.1.4 Bed"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-cyan-900 text-cyan-200",children:"12 Channels"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Full 12-channel spatial height bed (L, R, C, LFE, Ls, Rs, Rls, Rrs, Tfl, Tfr, Trl, Trr) with diffuse ceiling radiation and 3D binaural headphone virtualization."})]}),o.jsxs("div",{onClick:()=>T("dolby_pro_logic_ii"),className:`p-4 rounded-xl border transition-all cursor-pointer ${y==="dolby_pro_logic_ii"?"border-violet-400 bg-violet-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-violet-300",children:"Dolby Pro Logic II® Matrix"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-violet-900 text-violet-200",children:"5.1 Matrix"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Active matrix steering with 90° Hilbert transform surround phase decorrelation and 4th-order Linkwitz-Riley LFE subwoofer bass crossover."})]}),o.jsxs("div",{onClick:()=>T("dolby_digital_5_1"),className:`p-4 rounded-xl border transition-all cursor-pointer ${y==="dolby_digital_5_1"?"border-blue-400 bg-blue-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-blue-300",children:"Dolby Digital® 5.1 Master"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-blue-900 text-blue-200",children:"Broadcast QC"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Theatrical broadcast standard with speech Dialnorm (-27 LUFS) normalization and multi-profile Dynamic Range Control (DRC) compression curves."})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{onClick:()=>g("dts_x_7_1_4"),className:`p-4 rounded-xl border transition-all cursor-pointer ${E==="dts_x_7_1_4"?"border-amber-400 bg-amber-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-amber-300",children:"DTS:X® 7.1.4 Immersive"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-amber-900 text-amber-200",children:"12 Channels"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Acoustic spatial object & height expansion with DTS:X energy dispersion across front, side, rear, and overhead coordinates."})]}),o.jsxs("div",{onClick:()=>g("dts_neo_6_cinema"),className:`p-4 rounded-xl border transition-all cursor-pointer ${E==="dts_neo_6_cinema"?"border-orange-400 bg-orange-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-orange-300",children:"DTS Neo:6® Cinema Upmixer"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-orange-900 text-orange-200",children:"7.1 Matrix"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Steered discrete 7.1 upmixing with asymmetric Haas acoustic delays (15ms / 25ms) and high-shelf diffuse air synthesis."})]}),o.jsxs("div",{onClick:()=>g("dts_dialogue_clarity"),className:`p-4 rounded-xl border transition-all cursor-pointer ${E==="dts_dialogue_clarity"?"border-yellow-400 bg-yellow-950/30 shadow-lg":"border-slate-800 bg-[#0c101a] hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-bold text-yellow-300",children:"DTS Dialogue Clarity Master"}),o.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-yellow-900 text-yellow-200",children:"Speech Focus"})]}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-2 leading-relaxed",children:"Isolates 2.4 kHz vocal formant articulation on the Center channel while applying psychoacoustic -2 dB ducking on Left/Right masking frequencies."})]})]})}),o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("span",{className:"font-bold text-white flex items-center space-x-2",children:[o.jsx(Bl,{className:"w-4 h-4 text-cyan-400"}),o.jsxs("span",{children:["Cinema Audio Engineering Calibrations (",p.toUpperCase(),")"]})]}),o.jsx("span",{className:"text-[10px] text-slate-500",children:"64-bit Floating-Point DSP Processing"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[p==="dolby"?o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[o.jsx("span",{children:"Target Dialnorm Speech Level"}),o.jsxs("span",{className:"text-cyan-400 font-bold",children:[M," dBFS"]})]}),o.jsx("input",{type:"range",min:"-31",max:"-20",step:"1",value:M,onChange:Se=>N(parseFloat(Se.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-cyan-400"}),o.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 mt-1",children:[o.jsx("span",{children:"-31 (Cinema Reference)"}),o.jsx("span",{children:"-27 (Streaming)"}),o.jsx("span",{children:"-20 (Broadcast)"})]})]}):o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[o.jsx("span",{children:"DTS Dialogue Clarity Articulation Boost"}),o.jsxs("span",{className:"text-amber-400 font-bold",children:["+",F.toFixed(1)," dB"]})]}),o.jsx("input",{type:"range",min:"0.0",max:"9.0",step:"0.5",value:F,onChange:Se=>z(parseFloat(Se.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-400"}),o.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 mt-1",children:[o.jsx("span",{children:"0 dB (Natural)"}),o.jsx("span",{children:"+4 dB (Standard)"}),o.jsx("span",{children:"+9 dB (Maximum Speech)"})]})]}),p==="dolby"?o.jsxs("div",{children:[o.jsx("label",{className:"text-slate-400 block mb-1",children:"Dolby Dynamic Range Control (DRC)"}),o.jsxs("select",{value:R,onChange:Se=>P(Se.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:"film_standard",children:"Film Standard (Theatrical Full Dynamic)"}),o.jsx("option",{value:"film_light",children:"Film Light (Home Cinema Gentle Control)"}),o.jsx("option",{value:"music_light",children:"Music Light (Audiophile Master)"}),o.jsx("option",{value:"speech",children:"Speech (High Intelligibility Dialogue)"})]})]}):o.jsxs("div",{children:[o.jsx("label",{className:"text-slate-400 block mb-1",children:"DTS Spatial Soundstage Mode"}),o.jsxs("select",{defaultValue:"cinema",className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:"cinema",children:"Cinema (Wide Discrete Surround Steering)"}),o.jsx("option",{value:"music",children:"Music (Coherent Stage Front Width)"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-slate-400 mb-1",children:[o.jsx("span",{children:"Subwoofer LFE Crossover"}),o.jsxs("span",{className:"text-emerald-400 font-bold",children:[L," Hz"]})]}),o.jsx("input",{type:"range",min:"40",max:"160",step:"10",value:L,onChange:Se=>j(parseInt(Se.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-emerald-400"}),o.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"4th-order Linkwitz-Riley 24 dB/octave LFE Bass Filter"})]})]}),o.jsx("button",{onClick:Ee,disabled:Y,className:`w-full py-3 rounded-xl font-extrabold text-xs shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 ${p==="dolby"?"bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-cyan-500/20":"bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-black shadow-amber-500/20"}`,children:Y?o.jsxs(o.Fragment,{children:[o.jsx(Ps,{className:"w-4 h-4 animate-spin"}),o.jsxs("span",{children:["Processing ",p.toUpperCase()," Matrix & Binaural Virtualization..."]})]}):o.jsxs(o.Fragment,{children:[o.jsx(Or,{className:"w-4 h-4"}),o.jsxs("span",{children:["Process Audio with ",p==="dolby"?"Dolby® Suite":"DTS® Suite"]})]})})]}),U&&o.jsxs("div",{className:"bg-[#0b0f1a] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl animate-in fade-in duration-200 font-mono text-xs",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800",children:[o.jsxs("div",{className:"space-y-0.5",children:[o.jsxs("div",{className:"text-sm font-bold text-white flex items-center space-x-2",children:[o.jsx(hc,{className:"w-4 h-4 text-emerald-400"}),o.jsxs("span",{children:[U.processor_type," Cinema Master Processed (",U.channels_count," Discrete Channels • ",U.channels_layout,")"]})]}),o.jsxs("div",{className:"text-xs text-slate-400",children:["Profile: ",U.profile," • ",U.sample_rate_hz," Hz • ",U.bit_depth]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[U.binaural_download_url&&o.jsxs("a",{href:qt(U.binaural_download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-900/30 cursor-pointer",children:[o.jsx(qc,{className:"w-4 h-4 text-purple-200"}),o.jsx("span",{children:"Download 3D Binaural Headphone WAV"})]}),o.jsxs("a",{href:qt(U.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer",children:[o.jsx(dr,{className:"w-4 h-4"}),o.jsxs("span",{children:["Download ",U.channels_layout," Cinema Multichannel WAV"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),o.jsxs("div",{className:"text-cyan-400 font-bold mt-1",children:[(xe=U.acoustic_qc)==null?void 0:xe.integrated_lufs," LUFS"]})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak Ceiling"}),o.jsxs("div",{className:"text-emerald-400 font-bold mt-1",children:[(Ue=U.acoustic_qc)==null?void 0:Ue.true_peak_dbtp," dBTP"]})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Phase Correlation"}),o.jsxs("div",{className:"text-purple-400 font-bold mt-1",children:["+",(lt=U.acoustic_qc)==null?void 0:lt.phase_correlation]})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Dynamic Range (LRA)"}),o.jsxs("div",{className:"text-amber-400 font-bold mt-1",children:[(Pe=U.acoustic_qc)==null?void 0:Pe.loudness_range_lra," LU"]})]})]}),o.jsx("div",{className:"bg-black/40 p-3 rounded-xl border border-slate-800 text-[10px] text-slate-400",children:U.disclaimer})]})]}),n==="3d_room"&&v&&o.jsxs("div",{className:"bg-[#0b0f1a] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl animate-in fade-in duration-200",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800",children:[o.jsxs("div",{className:"space-y-0.5",children:[o.jsxs("div",{className:"text-sm font-bold text-cyan-300 font-mono flex items-center space-x-2",children:[o.jsx(kl,{className:"w-4 h-4 text-cyan-400"}),o.jsxs("span",{children:["Multichannel ",v.channel_layout," Spatial Audio Bounced (",v.channel_count," Discrete Channels)"]})]}),o.jsxs("div",{className:"text-xs text-slate-400 font-mono",children:["Coordinates: X ",(Qe=v.coordinates)==null?void 0:Qe.x," • Y ",(Ye=v.coordinates)==null?void 0:Ye.y," • Z ",(Be=v.coordinates)==null?void 0:Be.z," • ",(Rt=v.bass_management)==null?void 0:Rt.crossover_hz,"Hz Sub Crossover"]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.binaural_download_url&&o.jsxs("a",{href:qt(v.binaural_download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-900/30",children:[o.jsx(qc,{className:"w-4 h-4 text-purple-200"}),o.jsx("span",{children:"Download 3D Binaural Headphone WAV"})]}),o.jsxs("a",{href:qt(v.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20",children:[o.jsx(dr,{className:"w-4 h-4"}),o.jsxs("span",{children:["Download ",v.channel_layout," Multichannel WAV"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono",children:[o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Speaker Channel Count"}),o.jsxs("div",{className:"text-cyan-400 font-bold mt-1",children:[v.channel_count," Discrete Tracks"]})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Bass Management Type"}),o.jsx("div",{className:"text-amber-400 font-bold mt-1",children:"4th-Order Linkwitz-Riley"})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Headphone Virtualization"}),o.jsx("div",{className:"text-purple-400 font-bold mt-1",children:"HRTF ITD / ILD Synthesized"})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Standards Conformance"}),o.jsx("div",{className:"text-emerald-400 font-bold mt-1",children:"ITU-R BS.775 / SMPTE 3D"})]})]})]})]})}function CT({onAddTrackFromAudio:t}){const[e,n]=ne.useState("subtractive"),[i,r]=ne.useState(60),[s,a]=ne.useState(1.5),[l,c]=ne.useState("saw"),[u,h]=ne.useState("square"),[m,f]=ne.useState(8),[x,_]=ne.useState(2400),[b,v]=ne.useState({kick:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],hihat:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],clap:[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]}),[d,p]=ne.useState(!1),[S,y]=ne.useState(null),T=[{note:60,name:"C4",isBlack:!1},{note:61,name:"C#4",isBlack:!0},{note:62,name:"D4",isBlack:!1},{note:63,name:"D#4",isBlack:!0},{note:64,name:"E4",isBlack:!1},{note:65,name:"F4",isBlack:!1},{note:66,name:"F#4",isBlack:!0},{note:67,name:"G4",isBlack:!1},{note:68,name:"G#4",isBlack:!0},{note:69,name:"A4",isBlack:!1},{note:70,name:"A#4",isBlack:!0},{note:71,name:"B4",isBlack:!1},{note:72,name:"C5",isBlack:!1}],E=async M=>{p(!0);const N=M||e;try{let R={synth_type:N,note:i,duration_sec:s,waveform_1:l,waveform_2:u,detune_cents:m,cutoff_hz:x};if(N==="drum_pattern"){const F=[];Object.entries(b).forEach(([L,j])=>{j.forEach((Y,I)=>{Y&&F.push({drum_type:L,start:I*.125,duration:.3,velocity:110})})}),R={synth_type:"midi_sequence",midi_events:F}}const P=await yt(pt("/api/v1/synth/generate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});y(P),t&&t(P)}catch(R){alert(`Synthesis error: ${R.message}`)}finally{p(!1)}},g=(M,N)=>{v(R=>{const P=[...R[M]];return P[N]=P[N]?0:1,{...R,[M]:P}})};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(dg,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"SYNTHESIZERS & SOUND DESIGN LAB"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Dual-Oscillator Subtractive Synth, 4-Operator FM Synthesis, and 808/909 Electronic Drum Sequencer."})]}),o.jsxs("div",{className:"flex space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-mono text-xs font-bold",children:[o.jsx("button",{onClick:()=>n("subtractive"),className:`px-3 py-1 rounded-lg ${e==="subtractive"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"SUBTRACTIVE"}),o.jsx("button",{onClick:()=>n("fm"),className:`px-3 py-1 rounded-lg ${e==="fm"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"FM SYNTH"}),o.jsx("button",{onClick:()=>n("drum_pattern"),className:`px-3 py-1 rounded-lg ${e==="drum_pattern"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"808 DRUM MACHINE"})]})]}),o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-xs font-mono font-bold text-cyan-300",children:["Virtual Keyboard (Click to Trigger Note: ",i,")"]}),o.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"MIDI C4 - C5"})]}),o.jsx("div",{className:"h-32 bg-black/60 rounded-xl border border-slate-800 flex p-2 relative overflow-hidden select-none",children:T.map(M=>o.jsx("div",{onClick:()=>{r(M.note),E(e)},className:`flex-1 rounded-b-md flex flex-col justify-end p-1 cursor-pointer transition-all ${M.isBlack?"bg-slate-950 text-slate-500 h-[65%] border border-slate-800 hover:bg-slate-800 -mx-2 z-10":"bg-slate-200 text-black h-full border border-slate-300 hover:bg-white z-0"} ${i===M.note?"ring-2 ring-cyan-400":""}`,children:o.jsx("span",{className:"text-[8px] font-mono font-bold text-center",children:M.name})},M.note))})]}),e!=="drum_pattern"?o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[o.jsx("span",{className:"text-xs font-bold text-cyan-400",children:"Oscillator 1 & 2"}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400",children:"Waveform 1"}),o.jsxs("select",{value:l,onChange:M=>c(M.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1",children:[o.jsx("option",{value:"saw",children:"Sawtooth"}),o.jsx("option",{value:"square",children:"Square / Pulse"}),o.jsx("option",{value:"triangle",children:"Triangle"}),o.jsx("option",{value:"sine",children:"Sine"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400",children:"Waveform 2"}),o.jsxs("select",{value:u,onChange:M=>h(M.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1",children:[o.jsx("option",{value:"square",children:"Square / Pulse"}),o.jsx("option",{value:"saw",children:"Sawtooth"}),o.jsx("option",{value:"sine",children:"Sine"}),o.jsx("option",{value:"triangle",children:"Triangle"})]})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[o.jsx("span",{className:"text-xs font-bold text-violet-400",children:"Filter Cutoff & Detune"}),o.jsxs("div",{children:[o.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:o.jsxs("span",{children:["Cutoff: ",x," Hz"]})}),o.jsx("input",{type:"range",min:"100",max:"8000",step:"50",value:x,onChange:M=>_(parseInt(M.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]}),o.jsxs("div",{children:[o.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:o.jsxs("span",{children:["Detune: ",m," cents"]})}),o.jsx("input",{type:"range",min:"0",max:"50",value:m,onChange:M=>f(parseInt(M.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[o.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"Duration & Articulation"}),o.jsxs("div",{children:[o.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:o.jsxs("span",{children:["Note Length: ",s,"s"]})}),o.jsx("input",{type:"range",min:"0.2",max:"4.0",step:"0.1",value:s,onChange:M=>a(parseFloat(M.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 flex flex-col justify-between",children:[o.jsx("div",{className:"font-mono text-xs text-slate-400",children:"Generate 64-bit synthesized audio buffer and import to DAW timeline."}),o.jsx("button",{onClick:()=>E(e),disabled:d,className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg font-mono disabled:opacity-50",children:d?"Rendering Oscillator...":"Synthesize Note to Audio"})]})]}):o.jsxs("div",{className:"bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[o.jsx("span",{className:"text-xs font-mono font-bold text-amber-300",children:"808 Step Sequencer (16-Step Pattern @ 120 BPM)"}),o.jsx("button",{onClick:()=>E("drum_pattern"),disabled:d,className:"px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-amber-500/20 disabled:opacity-50",children:d?"Bouncing Beats...":"Render Drum Pattern to Track"})]}),o.jsx("div",{className:"space-y-2",children:["kick","snare","hihat","clap"].map(M=>o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"w-16 text-[10px] font-mono uppercase font-bold text-slate-300",children:M}),o.jsx("div",{className:"flex-1 grid grid-cols-16 gap-1",children:b[M].map((N,R)=>o.jsx("button",{onClick:()=>g(M,R),className:`h-7 rounded text-[9px] font-mono font-bold transition-all ${N?"bg-amber-400 text-black shadow-sm shadow-amber-500/40":R%4===0?"bg-slate-800 text-slate-500":"bg-slate-900 text-slate-600"}`,children:R+1},R))})]},M))})]}),S&&o.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-cyan-500/40 flex items-center justify-between",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("div",{className:"text-xs font-bold text-cyan-300 font-mono",children:"Synthesized Audio Rendered Successfully"}),o.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:"24-bit 48kHz Stereo PCM • Clip added to session"})]}),o.jsxs("a",{href:qt(S.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-colors",children:[o.jsx(dr,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Download Synth Clip WAV"})]})]})]})}function NT({activeFile:t,tracks:e=[]}){var _,b,v,d,p,S,y,T,E,g,M,N;const[n,i]=ne.useState("streaming"),[r,s]=ne.useState(-14),[a,l]=ne.useState(-1),[c,u]=ne.useState(!1),[h,m]=ne.useState(null),f=[{id:"streaming",name:"Streaming (Spotify, Apple, Tidal)",lufs:-14,ceiling:-1,color:"text-cyan-400"},{id:"cd",name:"Commercial CD / Club Loudness",lufs:-9,ceiling:-.1,color:"text-violet-400"},{id:"broadcast",name:"Broadcast TV/Radio (EBU R128)",lufs:-23,ceiling:-1,color:"text-emerald-400"},{id:"cinema",name:"Cinema / Theatrical Standard",lufs:-27,ceiling:-2,color:"text-amber-400"},{id:"audiophile",name:"Audiophile Hi-Res / Classical",lufs:-16,ceiling:-1,color:"text-pink-400"}],x=async()=>{const R=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!R){alert("Please import an audio file or record a track first.");return}u(!0);try{const P=await yt(pt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:R,profile:n,custom_target_lufs:r,custom_ceiling_dbtp:a})});m(P)}catch(P){alert(`Mastering error: ${P.message}`)}finally{u(!1)}};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(Qa,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"STATUTORY MASTERING SUITE (EBU R128 / ITU-R BS.1770-4)"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Target loudness normalisation, multiband dynamic control, tape saturation, and zero-overshoot true-peak brickwall limiting."})]}),o.jsx("button",{onClick:x,disabled:c,className:"px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:c?"Mastering in Progress...":"Execute Full Mastering Chain"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3",children:f.map(R=>{const P=n===R.id;return o.jsxs("div",{onClick:()=>{i(R.id),s(R.lufs),l(R.ceiling)},className:`p-4 rounded-xl border cursor-pointer transition-all ${P?"bg-slate-900 border-cyan-400 shadow-md shadow-cyan-500/10":"bg-[#0c101a] border-slate-800 hover:border-slate-700"}`,children:[o.jsx("div",{className:`font-mono text-xs font-bold ${R.color}`,children:R.name}),o.jsxs("div",{className:"mt-2 space-y-1 font-mono text-[11px]",children:[o.jsxs("div",{className:"text-white font-semibold",children:["Target: ",R.lufs," LUFS"]}),o.jsxs("div",{className:"text-slate-400",children:["Ceiling: ",R.ceiling," dBTP"]})]})]},R.id)})}),o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4",children:[o.jsx("h3",{className:"font-mono text-xs font-bold text-cyan-300 uppercase",children:"Mastering Target Parameters"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"Integrated Loudness Target (LUFS)"}),o.jsxs("span",{className:"text-white font-bold",children:[r," LUFS"]})]}),o.jsx("input",{type:"range",min:"-30.0",max:"-6.0",step:"0.5",value:r,onChange:R=>s(parseFloat(R.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[o.jsx("span",{children:"True-Peak Limiter Ceiling (dBTP)"}),o.jsxs("span",{className:"text-white font-bold",children:[a," dBTP"]})]}),o.jsx("input",{type:"range",min:"-3.0",max:"0.0",step:"0.1",value:a,onChange:R=>l(parseFloat(R.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer"})]})]})]}),h&&o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(hc,{className:"w-5 h-5 text-emerald-400"}),o.jsxs("span",{className:"font-mono text-xs font-bold text-white",children:["Mastering Audit Report (",(_=h.mastering_report)==null?void 0:_.profile_used,")"]})]}),o.jsxs("a",{href:qt(h.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors",children:[o.jsx(dr,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Download Mastered WAV"})]})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono",children:[o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),o.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(v=(b=h.mastering_report)==null?void 0:b.pre_mastering_metrics)==null?void 0:v.integrated_lufs," →"," ",o.jsxs("span",{className:"text-cyan-400",children:[(p=(d=h.mastering_report)==null?void 0:d.post_mastering_metrics)==null?void 0:p.integrated_lufs," LUFS"]})]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak"}),o.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(y=(S=h.mastering_report)==null?void 0:S.pre_mastering_metrics)==null?void 0:y.true_peak_dbtp," →"," ",o.jsxs("span",{className:"text-emerald-400",children:[(E=(T=h.mastering_report)==null?void 0:T.post_mastering_metrics)==null?void 0:E.true_peak_dbtp," dBTP"]})]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Loudness Range (LRA)"}),o.jsxs("div",{className:"text-sm font-bold text-violet-400 mt-1",children:[(M=(g=h.mastering_report)==null?void 0:g.post_mastering_metrics)==null?void 0:M.loudness_range_lra," LU"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Applied Gain Adjustment"}),o.jsxs("div",{className:"text-sm font-bold text-amber-400 mt-1",children:[(N=h.mastering_report)==null?void 0:N.applied_gain_db," dB"]})]})]})]})]})}function PT({activeFile:t,tracks:e=[]}){var c,u,h,m,f,x,_,b,v;const[n,i]=ne.useState(null),[r,s]=ne.useState(!1),a=ne.useRef(null),l=async()=>{const d=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!d){alert("Please import an audio file or record a track first.");return}s(!0);try{const p=new FormData;p.append("file_path",d);const S=await yt(pt("/api/v1/audio/analyze"),{method:"POST",body:p});i(S)}catch(p){alert(`Analysis error: ${p.message}`)}finally{s(!1)}};return ne.useEffect(()=>{let d;const p=a.current;if(!p)return;const S=p.getContext("2d"),y=()=>{const T=p.width,E=p.height;S.clearRect(0,0,T,E);const M=dt.getTelemetry().fftData||new Uint8Array(64),N=T/M.length;for(let R=0;R<M.length;R++){const F=M[R]/255*E,z=R*N,L=E-F,j=S.createLinearGradient(0,L,0,E);j.addColorStop(0,"#00f2fe"),j.addColorStop(1,"#7928ca"),S.fillStyle=j,S.fillRect(z,L,N-1.5,F)}d=requestAnimationFrame(y)};return y(),()=>cancelAnimationFrame(d)},[]),o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(Ps,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"PROFESSIONAL ACOUSTIC ANALYSIS & RTA VECTOR LAB"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Conforming to ITU-R BS.1770-4, EBU R128, FFT spectral distribution, phase correlation, and crest factor."})]}),o.jsx("button",{onClick:l,disabled:r,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:r?"Measuring Acoustics...":"Run Deep Acoustic Audit"})]}),o.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-xs font-mono font-bold text-cyan-300",children:"Real-Time FFT Spectrum Analyzer (RTA 64-Band Octave)"}),o.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"LIVE AUDIO MONITOR"})]}),o.jsx("canvas",{ref:a,width:800,height:180,className:"w-full h-44 bg-black/60 rounded-xl border border-slate-800"})]}),n&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-3 text-xs font-mono",children:[o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),o.jsxs("div",{className:"text-base font-bold text-cyan-400 mt-1",children:[(c=n.acoustic_analysis)==null?void 0:c.integrated_lufs," LUFS"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak"}),o.jsxs("div",{className:"text-base font-bold text-emerald-400 mt-1",children:[(u=n.acoustic_analysis)==null?void 0:u.true_peak_dbtp," dBTP"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Phase Correlation"}),o.jsx("div",{className:"text-base font-bold text-violet-400 mt-1",children:(h=n.acoustic_analysis)==null?void 0:h.phase_correlation})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Dynamic Range (DR)"}),o.jsxs("div",{className:"text-base font-bold text-amber-400 mt-1",children:["DR ",(m=n.acoustic_analysis)==null?void 0:m.dynamic_range_dr]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Crest Factor"}),o.jsxs("div",{className:"text-base font-bold text-white mt-1",children:[(f=n.acoustic_analysis)==null?void 0:f.crest_factor_db," dB"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Clipping Status"}),o.jsx("div",{className:`text-base font-bold mt-1 ${(_=(x=n.acoustic_analysis)==null?void 0:x.clipping)!=null&&_.has_clipping?"text-rose-400":"text-emerald-400"}`,children:(v=(b=n.acoustic_analysis)==null?void 0:b.clipping)!=null&&v.has_clipping?"CLIPPING":"CLEAN"})]})]}),n.ai_engineer_notes&&o.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-cyan-800/80 text-xs font-mono space-y-1",children:[o.jsx("div",{className:"font-bold text-cyan-400 uppercase",children:"Agent 01 Evaluation:"}),o.jsx("p",{className:"text-slate-300 leading-relaxed",children:n.ai_engineer_notes})]})]})]})}function LT({onAddTrackFromAudio:t}){const[e,n]=ne.useState(!1),[i,r]=ne.useState([]),[s,a]=ne.useState(0),l=async()=>{try{await dt.startRecording(),n(!0),a(0);const u=setInterval(()=>{a(h=>h+1)},1e3);window._recInterval=u}catch(u){alert(`Recording error: ${u.message}. Ensure microphone permissions are granted.`)}},c=async()=>{if(!e)return;clearInterval(window._recInterval),n(!1);const u=await dt.stopRecording();if(u){const h=`Take_${i.length+1}`,m=URL.createObjectURL(u),f={id:h,name:`Microphone_${h}`,url:m,duration:s,blob:u};r(x=>[f,...x])}};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(Za,{className:"w-5 h-5 text-rose-500"}),o.jsx("span",{children:"LIVE MICROPHONE & AUDIO INTERFACE RECORDING STUDIO"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Low-latency audio capture via MediaDevices and AudioWorklet with non-destructive take comping."})]})}),o.jsxs("div",{className:"bg-[#0b0e17] p-8 rounded-2xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center space-y-6",children:[o.jsxs("div",{className:"text-4xl font-mono font-bold text-white tracking-widest",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),o.jsx("div",{className:"flex items-center space-x-4",children:e?o.jsxs("button",{onClick:c,className:"px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-sm flex items-center space-x-2 border border-slate-700 transition-all",children:[o.jsx(hg,{className:"w-5 h-5 fill-current text-rose-500"}),o.jsx("span",{children:"Stop & Save Recording Take"})]}):o.jsxs("button",{onClick:l,className:"px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-sm flex items-center space-x-2 shadow-xl shadow-rose-600/30 transition-all",children:[o.jsx(ih,{className:"w-5 h-5 fill-current animate-pulse"}),o.jsx("span",{children:"Start Microphone Recording"})]})}),o.jsx("p",{className:"text-xs font-mono text-slate-500",children:"Capture 24-bit PCM mono or stereo microphone audio non-destructively."})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("h3",{className:"font-mono text-xs font-bold text-slate-300 uppercase",children:["Captured Audio Takes (",i.length,")"]}),i.length===0?o.jsx("div",{className:"p-8 text-center bg-[#0c101a] rounded-xl border border-slate-800 text-xs font-mono text-slate-500",children:"No microphone takes recorded yet in this session."}):o.jsx("div",{className:"space-y-2",children:i.map(u=>o.jsxs("div",{className:"bg-[#0c101a] p-3 rounded-xl border border-slate-800 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 font-mono text-xs font-bold border border-rose-800",children:"REC"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-mono font-bold text-white",children:u.name}),o.jsxs("div",{className:"text-[10px] font-mono text-slate-400",children:[u.duration," seconds duration"]})]})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("audio",{src:u.url,controls:!0,className:"h-8 w-48"}),o.jsxs("button",{onClick:()=>{t&&t({name:u.name,file_path:u.url,category:"Recording",color:"#f43f5e"})},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 text-xs font-mono font-bold transition-colors",children:[o.jsx(za,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Add to DAW Timeline"})]})]})]},u.id))})]})]})}function DT({activeFile:t,tracks:e=[]}){var d,p,S,y,T,E,g;const[n,i]=ne.useState("FLAC"),[r,s]=ne.useState("24"),[a,l]=ne.useState(96e3),[c,u]=ne.useState("stereo"),[h,m]=ne.useState(!1),[f,x]=ne.useState(null),[_,b]=ne.useState(""),v=async()=>{b("");const M=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!M){alert("Please import an audio file or record a track first.");return}m(!0);try{const N=await yt(pt("/api/v1/export/render"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:M,project_name:"SONIQ_Session",export_name:"Final_Master",output_format:n,bit_depth:r,sample_rate:a,channels_layout:c})});x(N)}catch(N){b(N.message),alert(`Export error: ${N.message}`)}finally{m(!1)}};return o.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[o.jsx(cg,{className:"w-5 h-5 text-cyan-400"}),o.jsx("span",{children:"PROFESSIONAL AUDIO EXPORT & DELIVERY CENTRE"})]}),o.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Lossless FLAC, Broadcast WAV PCM, Multichannel 5.1/7.1, 16/24/32-bit float, and Technical QC Certificate."})]}),o.jsx("button",{onClick:v,disabled:h,className:"px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono cursor-pointer",children:h?"Rendering & Analyzing Master QC...":`Export Master ${n} (${r}-bit / ${a/1e3}kHz)`})]}),_&&o.jsxs("div",{className:"bg-rose-950/40 p-4 rounded-xl border border-rose-800 text-rose-300 text-xs font-mono flex items-center justify-between shadow-lg",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(Yp,{className:"w-4 h-4 text-rose-400 shrink-0"}),o.jsxs("span",{children:["Export Error: ",_]})]}),o.jsx("button",{onClick:()=>b(""),className:"text-slate-400 hover:text-white text-xs underline cursor-pointer",children:"Dismiss"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[o.jsx("label",{className:"text-cyan-400 font-bold",children:"Delivery Format"}),o.jsxs("select",{value:n,onChange:M=>i(M.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:"FLAC",children:"Lossless FLAC"}),o.jsx("option",{value:"WAV",children:"Broadcast WAV PCM"}),o.jsx("option",{value:"AIFF",children:"AIFF"}),o.jsx("option",{value:"AC3",children:"Dolby Digital 5.1 (.ac3 640k)"}),o.jsx("option",{value:"EAC3",children:"Dolby Digital Plus (.eac3 768k)"}),o.jsx("option",{value:"DTS",children:"DTS Coherent Acoustics (.dts 1536k)"}),o.jsx("option",{value:"MP3",children:"MP3 (320 kbps Perceptual)"}),o.jsx("option",{value:"OGG",children:"OGG Vorbis"})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[o.jsx("label",{className:"text-violet-400 font-bold",children:"Bit Depth Precision"}),o.jsxs("select",{value:r,onChange:M=>s(M.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:"24",children:"24-bit Studio Standard"}),o.jsx("option",{value:"16",children:"16-bit Red Book CD"}),o.jsx("option",{value:"32f",children:"32-bit Floating Point (Zero-Clip)"})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[o.jsx("label",{className:"text-emerald-400 font-bold",children:"Sample Rate (Hz)"}),o.jsxs("select",{value:a,onChange:M=>l(parseInt(M.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:96e3,children:"96 kHz (High-Resolution Studio)"}),o.jsx("option",{value:48e3,children:"48 kHz (Broadcast & Cinema Standard)"}),o.jsx("option",{value:44100,children:"44.1 kHz (Commercial CD)"}),o.jsx("option",{value:192e3,children:"192 kHz (Ultra High-Fidelity)"})]})]}),o.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[o.jsx("label",{className:"text-amber-400 font-bold",children:"Channel Configuration"}),o.jsxs("select",{value:c,onChange:M=>u(M.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[o.jsx("option",{value:"stereo",children:"Stereo 2.0"}),o.jsx("option",{value:"5.1",children:"5.1 Multichannel Surround"}),o.jsx("option",{value:"7.1",children:"7.1 Multichannel Surround"}),o.jsx("option",{value:"7.1.4",children:"7.1.4 Dolby Atmos / DTS:X Height Bed"})]})]})]}),["MP3","OGG"].includes(n)&&o.jsxs("div",{className:"bg-amber-950/30 p-3.5 rounded-xl border border-amber-800/80 text-amber-200 text-xs font-mono flex items-center space-x-2",children:[o.jsx(Yp,{className:"w-4 h-4 text-amber-400 shrink-0"}),o.jsx("span",{children:"Notice: MP3/OGG utilizes lossy perceptual psychoacoustic encoding. For bit-transparent archiving, use 24-bit FLAC or Broadcast WAV."})]}),f&&o.jsxs("div",{className:"bg-[#0b0e17] p-6 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(hc,{className:"w-5 h-5 text-emerald-400"}),o.jsxs("span",{className:"font-mono text-xs font-bold text-white",children:["Technical Delivery Certificate (",f.certificate_id,")"]})]}),o.jsx("div",{className:"flex items-center space-x-3",children:o.jsxs("a",{href:qt(f.download_path),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-lg shadow-emerald-900/30",children:[o.jsx(dr,{className:"w-4 h-4"}),o.jsx("span",{children:"Download Master Audio File"})]})})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono",children:[o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Codec / Format"}),o.jsxs("div",{className:"text-sm font-bold text-cyan-400 mt-1",children:[(d=f.technical_specifications)==null?void 0:d.format," (",(p=f.technical_specifications)==null?void 0:p.codec,")"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Sample Rate & Bit Depth"}),o.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(S=f.technical_specifications)==null?void 0:S.sample_rate_hz," Hz • ",(y=f.technical_specifications)==null?void 0:y.bit_depth,"-bit"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),o.jsxs("div",{className:"text-sm font-bold text-violet-400 mt-1",children:[(T=f.acoustic_measurements)==null?void 0:T.integrated_lufs," LUFS"]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak Ceiling"}),o.jsxs("div",{className:"text-sm font-bold text-emerald-400 mt-1",children:[(E=f.acoustic_measurements)==null?void 0:E.true_peak_dbtp," dBTP"]})]})]}),o.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono",children:[o.jsx("span",{className:"text-slate-400",children:"Pre-Export Quality Assurance Status:"}),o.jsxs("span",{className:"text-emerald-400 font-bold bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800",children:[(g=f.quality_audit)==null?void 0:g.overall_status," (ALL CHECKS PASSED)"]})]})]})]})}function IT({isOpen:t,onClose:e,track:n,onApplyEffect:i,onAddStemTracks:r,onNavigateTab:s}){if(!t||!n)return null;const[a,l]=ne.useState(!1),[c,u]=ne.useState(null),[h,m]=ne.useState(""),[f,x]=ne.useState(null),_=[{id:"streaming_master",name:"Streaming Master (-14 LUFS)",badge:"POPULAR",icon:Qa,color:"from-cyan-500 to-blue-600",description:"EBU R128 / ITU-R BS.1770-4 normalization, multiband dynamics, tape warmth & -1 dBTP true peak brickwall limiter.",category:"Mastering",run:async()=>await yt(pt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,profile:"streaming",custom_target_lufs:-14,custom_ceiling_dbtp:-1})})},{id:"vocal_polish",name:"Vocal Polish & De-Ess",badge:"STUDIO AIR",icon:Za,color:"from-pink-500 to-rose-600",description:"6.5 kHz sibilance de-essing, pitch centering, smooth opto-compression & high-shelf studio air lift.",category:"Vocals",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),d.append("target_scale","A Minor"),d.append("de_ess_db","4.5"),await yt(pt("/api/v1/audio/vocal-process"),{method:"POST",body:d})}},{id:"ai_restore",name:"AI Noise & Hum Removal",badge:"AGENT 03",icon:pc,color:"from-emerald-500 to-teal-600",description:"Spectral noise suppression, 50Hz/60Hz ground loop removal, and peak declipping restoration.",category:"Restoration",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),d.append("denoise","true"),d.append("dehum_freq","50.0"),d.append("declip","true"),await yt(pt("/api/v1/audio/restore"),{method:"POST",body:d})}},{id:"analog_warmth",name:"Analog Tube Warmth & Punch",badge:"64-BIT DSP",icon:Xy,color:"from-amber-500 to-orange-600",description:"Tube saturation warmth, 80Hz low-end lift, optical compression (3.5:1), and subtle Haas stereo widening.",category:"DSP Rack",run:async()=>await yt(pt("/api/v1/dsp/process"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,operations:[{type:"eq",bands:[{type:"lowshelf",freq:80,gain_db:2.5,q:.707},{type:"peaking",freq:3200,gain_db:1.8,q:1.2},{type:"highshelf",freq:11e3,gain_db:2,q:.707}]},{type:"saturation",drive_db:4.5,mode:"tube",warmth:.8},{type:"compressor",threshold_db:-16,ratio:3.5,attack_ms:18,release_ms:110,makeup_gain_db:2.5},{type:"widener",width_pct:125}]})})},{id:"cd_master",name:"Commercial CD / Club (-9 LUFS)",badge:"LOUD",icon:fg,color:"from-violet-500 to-purple-700",description:"High-energy commercial club loudness, aggressive multiband glue, and true peak ceiling at -0.1 dBTP.",category:"Mastering",run:async()=>await yt(pt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,profile:"cd",custom_target_lufs:-9,custom_ceiling_dbtp:-.1})})},{id:"surround_51",name:"5.1 Spatial Surround Mix",badge:"IMMERSIVE",icon:kl,color:"from-blue-500 to-indigo-600",description:"VBAP panner across 6 discrete channels (L, R, C, LFE, Ls, Rs) with 80Hz Linkwitz-Riley sub crossover.",category:"Surround",run:async()=>await yt(pt("/api/v1/audio/surround"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,layout:"5.1",x:0,y:.4,crossover_hz:80})})},{id:"separate_stems",name:"Separate into 4 Stems",badge:"AGENT 02",icon:rh,color:"from-cyan-400 to-emerald-500",description:"Deconstructs the track into isolated Vocals, Drums, Bass, and Other instruments imported directly to your timeline.",category:"AI Separation",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),await yt(pt("/api/v1/audio/separate-stems"),{method:"POST",body:d})}},{id:"ai_orchestration",name:"Full Autonomous AI Production Swarm",badge:"AGENT 10",icon:Or,color:"from-amber-400 to-pink-500",description:"Runs all 10 autonomous agents: full acoustic inspection, dynamic repair, stereo widening, and master export.",category:"Full Autonomous",run:async()=>await yt(pt("/api/v1/audio/orchestrate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:"Clean noise, optimize dynamics, enhance vocals, and master for streaming at -14 LUFS",file_path:n.file_path})})}],b=async d=>{if(!n.file_path){alert("Selected track has no audio source path.");return}l(!0),u(d.id),m(`Running ${d.name}...`),x(null);try{const p=await d.run();x({preset:d,data:p}),m(`${d.name} applied successfully!`)}catch(p){m(`Error: ${p.message}`)}finally{l(!1)}},v=d=>{var E,g,M,N,R,P,F;if(!d)return{};const p=d.download_url||(d.processed_file?`/api/v1/audio/download/${d.processed_file.split("/").pop()}`:"")||"",S=d.output_file||d.processed_file||d.restored_file||d.file_path||n.file_path,y=((g=(E=d.mastering_report)==null?void 0:E.post_mastering_metrics)==null?void 0:g.integrated_lufs)??((M=d.metrics)==null?void 0:M.integrated_lufs)??((N=d.post_restoration_metrics)==null?void 0:N.integrated_lufs)??null,T=((P=(R=d.mastering_report)==null?void 0:R.post_mastering_metrics)==null?void 0:P.true_peak_dbtp)??((F=d.metrics)==null?void 0:F.sample_peak_dbfs)??null;return{downloadUrl:p,filePath:S,lufs:y,truePeak:T}};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:o.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0e17] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden",children:[o.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-[#0d121f] to-slate-900",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center",children:o.jsx(zl,{className:"w-5 h-5 text-cyan-400"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("h2",{className:"text-sm font-bold font-mono text-white",children:"INSTANT EFFECTS & MASTERING ASSISTANT"}),o.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800",children:"1-Click DSP"})]}),o.jsxs("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:["Target Track: ",o.jsx("span",{className:"text-cyan-300 font-semibold",children:n.name})," • 64-bit Non-Destructive"]})]})]}),o.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:o.jsx(pg,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3",children:"Select 1-Click Studio Treatment:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:_.map(d=>{const p=d.icon,S=c===d.id;return o.jsxs("button",{disabled:a,onClick:()=>b(d),className:`text-left p-4 rounded-xl border transition-all relative flex flex-col justify-between group ${S&&a?"bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20":S&&f?"bg-emerald-950/30 border-emerald-500/80 shadow-lg shadow-emerald-500/10":"bg-slate-900/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700"}`,children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("div",{className:`w-8 h-8 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center text-black font-bold shadow-md`,children:o.jsx(p,{className:"w-4 h-4 text-white"})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold font-mono text-white group-hover:text-cyan-300 transition-colors",children:d.name}),o.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:d.category})]})]}),o.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-400 border border-slate-800 font-bold",children:d.badge})]}),o.jsx("p",{className:"text-[11px] text-slate-300 font-mono mt-2.5 leading-relaxed",children:d.description}),o.jsxs("div",{className:"mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono",children:[o.jsx("span",{className:"text-slate-500 group-hover:text-slate-400",children:"1-Click Apply"}),o.jsxs("span",{className:"text-cyan-400 font-bold flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform",children:[o.jsx("span",{children:"Execute"}),o.jsx(Mo,{className:"w-3 h-3"})]})]})]},d.id)})})]}),a&&o.jsxs("div",{className:"bg-cyan-950/30 border border-cyan-500/40 p-4 rounded-xl flex items-center space-x-3 text-xs font-mono text-cyan-300 animate-pulse",children:[o.jsx(Ps,{className:"w-5 h-5 text-cyan-400 animate-spin shrink-0"}),o.jsxs("div",{children:[o.jsx("div",{className:"font-bold",children:h}),o.jsx("div",{className:"text-[10px] text-cyan-400/80",children:"Applying 64-bit floating point mathematical DSP to preserve transients..."})]})]}),f&&o.jsxs("div",{className:"bg-[#0f1422] border border-emerald-500/50 p-5 rounded-2xl space-y-4 shadow-xl",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("div",{className:"w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center",children:o.jsx(Xp,{className:"w-4 h-4"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"text-xs font-bold font-mono text-emerald-400",children:[f.preset.name," Complete!"]}),o.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"Audio processed non-destructively in RAM & sovereign disk"})]})]}),v(f.data).downloadUrl&&o.jsxs("a",{href:qt(v(f.data).downloadUrl),download:!0,className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-md",children:[o.jsx(dr,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Download WAV"})]})]}),v(f.data).lufs!==null&&o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono",children:[o.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),o.jsxs("div",{className:"text-cyan-400 font-bold mt-0.5",children:[v(f.data).lufs," LUFS"]})]}),o.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak Ceiling"}),o.jsxs("div",{className:"text-emerald-400 font-bold mt-0.5",children:[v(f.data).truePeak??-1," dBTP"]})]}),o.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Sample Rate & Depth"}),o.jsx("div",{className:"text-white font-bold mt-0.5",children:"48 kHz • 24-bit"})]}),o.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[o.jsx("div",{className:"text-[10px] text-slate-400",children:"Headroom Status"}),o.jsx("div",{className:"text-emerald-400 font-bold mt-0.5",children:"0.0 Overshoots"})]})]}),f.preset.id==="separate_stems"&&f.data.stems&&o.jsxs("div",{className:"space-y-2",children:[o.jsx("div",{className:"text-xs font-mono font-bold text-cyan-300",children:"4 Isolated Stems Generated:"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono",children:Object.entries(f.data.stems).map(([d,p])=>o.jsxs("div",{className:"bg-black/60 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between",children:[o.jsx("span",{className:"font-bold capitalize text-white",children:d}),o.jsxs("span",{className:"text-[10px] text-slate-400",children:[p.duration_seconds,"s"]})]},d))}),o.jsxs("button",{onClick:()=>{r&&(r(Object.values(f.data.stems)),e())},className:"w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-extrabold font-mono text-xs flex items-center justify-center space-x-2 transition-all shadow-lg",children:[o.jsx(za,{className:"w-4 h-4"}),o.jsx("span",{children:"Import All 4 Stems As DAW Tracks"})]})]}),f.preset.id!=="separate_stems"&&o.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-3 pt-2",children:[o.jsxs("button",{onClick:()=>{const d=v(f.data);i(n.id,{file_path:d.filePath,download_url:d.downloadUrl,name:`${n.name} [${f.preset.name.split(" ")[0]}]`},"new_track"),e()},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-colors flex items-center space-x-1.5",children:[o.jsx(za,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"Add As New Track (A/B Test)"})]}),o.jsxs("button",{onClick:()=>{const d=v(f.data);i(n.id,{file_path:d.filePath,download_url:d.downloadUrl,name:`${n.name} (${f.preset.name.split(" ")[0]})`},"replace"),e()},className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-mono text-xs font-extrabold transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-1.5",children:[o.jsx(Xp,{className:"w-4 h-4"}),o.jsx("span",{children:"Update Current Track Audio"})]})]})]})]}),o.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-[#080a10] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400",children:[o.jsx("span",{children:"Need full manual parameter tweaking?"}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("button",{onClick:()=>{s("dsp"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[o.jsx("span",{children:"64-bit DSP Rack"}),o.jsx(Mo,{className:"w-3 h-3"})]}),o.jsx("span",{children:"•"}),o.jsxs("button",{onClick:()=>{s("mastering"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[o.jsx("span",{children:"Mastering Suite"}),o.jsx(Mo,{className:"w-3 h-3"})]}),o.jsx("span",{children:"•"}),o.jsxs("button",{onClick:()=>{s("surround"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[o.jsx("span",{children:"5.1 Surround Studio"}),o.jsx(Mo,{className:"w-3 h-3"})]})]})]})]})})}function UT({track:t,onOpenQuickFX:e,onApplyEffect:n,onAddStemTracks:i,onDismiss:r}){if(!t)return null;const[s,a]=ne.useState(null),l=async c=>{if(t.file_path){a(c);try{if(c==="master"){const u=await yt(pt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:t.file_path,profile:"streaming",custom_target_lufs:-14,custom_ceiling_dbtp:-1})}),h=u.download_url||"";n(t.id,{file_path:u.output_file||t.file_path,download_url:h,name:`${t.name} (Mastered -14 LUFS)`},"replace")}else if(c==="vocal"){const u=new FormData;u.append("file_path",t.file_path),u.append("target_scale","A Minor"),u.append("de_ess_db","4.5");const h=await yt(pt("/api/v1/audio/vocal-process"),{method:"POST",body:u}),m=h.download_url||"";n(t.id,{file_path:h.processed_file||t.file_path,download_url:m,name:`${t.name} (Vocal Polished)`},"replace")}else if(c==="denoise"){const u=new FormData;u.append("file_path",t.file_path),u.append("denoise","true"),u.append("dehum_freq","50.0"),u.append("declip","true");const h=await yt(pt("/api/v1/audio/restore"),{method:"POST",body:u}),m=h.download_url||"";n(t.id,{file_path:h.restored_file||t.file_path,download_url:m,name:`${t.name} (Restored & Clean)`},"replace")}else if(c==="stems"){const u=new FormData;u.append("file_path",t.file_path);const h=await yt(pt("/api/v1/audio/separate-stems"),{method:"POST",body:u});h.stems&&i&&i(Object.values(h.stems))}}catch(u){alert(`Action error: ${u.message}`)}finally{a(null)}}};return o.jsxs("div",{className:"mx-4 mb-2 p-3 bg-gradient-to-r from-[#0d1527] via-[#091e2b] to-[#0d1527] border border-cyan-500/40 rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono animate-in slide-in-from-top-2 duration-300",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40",children:o.jsx(zl,{className:"w-4 h-4 text-cyan-300 animate-pulse"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx("span",{className:"text-white font-bold truncate max-w-xs",children:t.name}),o.jsx("span",{className:"text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-800",children:"Active File"})]}),o.jsx("p",{className:"text-[10px] text-slate-400",children:"Apply 1-click sovereign DSP effect or AI mastering:"})]})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsxs("button",{disabled:!!s,onClick:()=>l("master"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/50 transition-all font-bold disabled:opacity-50",children:[s==="master"?o.jsx(bo,{className:"w-3.5 h-3.5 animate-spin"}):o.jsx(Qa,{className:"w-3.5 h-3.5 text-cyan-400"}),o.jsx("span",{children:"1-Click Master (-14 LUFS)"})]}),o.jsxs("button",{disabled:!!s,onClick:()=>l("vocal"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 text-pink-200 border border-pink-500/40 transition-all font-bold disabled:opacity-50",children:[s==="vocal"?o.jsx(bo,{className:"w-3.5 h-3.5 animate-spin"}):o.jsx(Za,{className:"w-3.5 h-3.5 text-pink-400"}),o.jsx("span",{children:"Vocal Polish"})]}),o.jsxs("button",{disabled:!!s,onClick:()=>l("denoise"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-200 border border-emerald-500/40 transition-all font-bold disabled:opacity-50",children:[s==="denoise"?o.jsx(bo,{className:"w-3.5 h-3.5 animate-spin"}):o.jsx(pc,{className:"w-3.5 h-3.5 text-emerald-400"}),o.jsx("span",{children:"AI De-Noise"})]}),o.jsxs("button",{disabled:!!s,onClick:()=>l("stems"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 text-violet-200 border border-violet-500/40 transition-all font-bold disabled:opacity-50",children:[s==="stems"?o.jsx(bo,{className:"w-3.5 h-3.5 animate-spin"}):o.jsx(rh,{className:"w-3.5 h-3.5 text-violet-400"}),o.jsx("span",{children:"Split 4 Stems"})]}),o.jsxs("button",{onClick:e,className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold transition-all shadow-md shadow-cyan-500/20",children:[o.jsx(Or,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"More Effects..."})]}),r&&o.jsx("button",{onClick:r,className:"p-1 rounded text-slate-500 hover:text-slate-300 ml-1 transition-colors",title:"Dismiss Banner",children:o.jsx(pg,{className:"w-4 h-4"})})]})]})}function FT(){const[t,e]=ne.useState("studio"),[n,i]=ne.useState([]),[r,s]=ne.useState(null),[a,l]=ne.useState(null),[c,u]=ne.useState(!1),[h,m]=ne.useState(120),[f,x]=ne.useState(!1),[_,b]=ne.useState(""),[v,d]=ne.useState(null),[p,S]=ne.useState(!1),[y,T]=ne.useState(!0),E=()=>{dt.clearAllTracks(),i([]),s(null),l(null),u(!1)},g=async()=>{x(!0),b("");try{const I=await yt(pt("/api/v1/projects/demo"));if(i(I.tracks||[]),m(I.tempo_bpm||120),I.tracks&&I.tracks.length>0){s(I.tracks[0].id),l({file_path:I.tracks[0].file_path});for(const U of I.tracks){const O=qt(U.download_url);await dt.loadTrackAudio(U.id,O)}}}catch(I){console.error("Failed to load studio demo project:",I),b(`Demo Load Notice: ${I.message}`)}finally{x(!1)}},M=()=>{dt.playAll(),u(!0)},N=()=>{dt.pauseAll(),u(!1)},R=()=>{dt.stopAll(),u(!1)},P=(I,U)=>{i(O=>O.map(H=>H.id===I?{...H,...U}:H))},F=()=>{const I=`Track_${n.length+1}`,U={id:I,name:`Audio Track ${n.length+1}`,category:"Audio",color:"#06b6d4",volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(O=>[...O,U]),s(I)},z=async I=>{const U=new FormData;U.append("file",I);try{const O=await yt(pt("/api/v1/audio/upload"),{method:"POST",body:U}),H={id:O.file_id,name:I.name.replace(/\.[^/.]+$/,""),category:"Import",color:"#8b5cf6",file_path:O.file_path,download_url:O.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:O.waveform_preview||[]};i(q=>[...q,H]),s(H.id),l({file_path:O.file_path}),d(H),T(!0),S(!0),await dt.loadTrackAudio(H.id,qt(O.download_url))}catch(O){alert(`Upload error: ${O.message}`)}},L=async(I,U,O="replace")=>{if(O==="replace")i(H=>H.map(q=>q.id===I?{...q,name:U.name||q.name,file_path:U.file_path,download_url:U.download_url}:q)),r===I&&l({file_path:U.file_path}),U.download_url&&await dt.loadTrackAudio(I,qt(U.download_url));else{const H=`Track_FX_${Date.now()}`,q={id:H,name:U.name||"Track (FX)",category:"Processed",color:"#10b981",file_path:U.file_path,download_url:U.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(ae=>[...ae,q]),s(H),l({file_path:U.file_path}),U.download_url&&await dt.loadTrackAudio(H,qt(U.download_url))}},j=async I=>{const U={vocals:"#ec4899",drums:"#f59e0b",bass:"#8b5cf6",other:"#06b6d4"};for(const O of I){const H=`Stem_${O.stem_name}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,q={id:H,name:`Stem: ${O.stem_name.toUpperCase()}`,category:"Stem",color:U[O.stem_name]||"#10b981",file_path:O.file_path,download_url:O.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(ae=>[...ae,q]),O.download_url&&await dt.loadTrackAudio(H,qt(O.download_url))}},Y=async I=>{const U=`Synth_${n.length+1}`,O={id:U,name:I.name||`Clip ${n.length+1}`,category:"Synth",color:"#f59e0b",file_path:I.file_path,download_url:I.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:I.waveform_preview||[]};i(H=>[...H,O]),s(U),I.download_url&&await dt.loadTrackAudio(U,qt(I.download_url))};return o.jsxs("div",{className:"min-h-screen flex flex-col bg-[#07090e] text-slate-100",children:[o.jsx(Jy,{activeTab:t,setActiveTab:e,isPlaying:c}),o.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[t==="studio"&&o.jsxs(o.Fragment,{children:[y&&n.length>0&&o.jsx(UT,{track:n.find(I=>I.id===r)||n[0],onOpenQuickFX:()=>{const I=n.find(U=>U.id===r)||n[0];I&&(d(I),S(!0))},onApplyEffect:L,onAddStemTracks:j,onDismiss:()=>T(!1)}),o.jsx(nS,{tracks:n,onUpdateTrack:P,onAddTrack:F,onUploadFile:z,onClearSession:E,onLoadDemo:g,loadingDemo:f,onNavigateTab:I=>e(I),activeTrackId:r,setActiveTrackId:I=>{s(I);const U=n.find(O=>O.id===I);U&&l({file_path:U.file_path})},onOpenQuickFX:I=>{d(I),S(!0)}})]}),t==="mixer"&&o.jsx(iS,{tracks:n,onUpdateTrack:P}),t==="ai_agents"&&o.jsx(rS,{activeFile:a,tracks:n,onRefreshTracks:g}),t==="dsp_rack"&&o.jsx(sS,{activeFile:a,tracks:n}),t==="surround"&&o.jsx(RT,{activeFile:a,tracks:n}),t==="synths"&&o.jsx(CT,{onAddTrackFromAudio:Y}),t==="mastering"&&o.jsx(NT,{activeFile:a,tracks:n}),t==="analysis"&&o.jsx(PT,{activeFile:a,tracks:n}),t==="recording"&&o.jsx(LT,{onAddTrackFromAudio:Y}),t==="exports"&&o.jsx(DT,{activeFile:a,tracks:n})]}),o.jsx(tS,{isPlaying:c,onPlay:M,onPause:N,onStop:R,bpm:h,setBpm:m,onLoadDemo:g,loadingDemo:f}),o.jsx(IT,{isOpen:p,onClose:()=>S(!1),track:v||n.find(I=>I.id===r)||n[0],onApplyEffect:L,onAddStemTracks:j,onNavigateTab:I=>e(I)})]})}wu.createRoot(document.getElementById("root")).render(o.jsx(Cv.StrictMode,{children:o.jsx(FT,{})}));
