(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},Yl={},Xm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),xv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),Uh=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Ym={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||qm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=Is.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||qm}var of=af.prototype=new Km;of.constructor=af;$m(of,Is.prototype);of.isPureReactComponent=!0;var Fh=Array.isArray,Zm=Object.prototype.hasOwnProperty,lf={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,i)&&!Jm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:lf.current}}function Sv(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oh=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function Xo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+yc(a,0):i,Fh(r)?(n="",t!=null&&(n=t.replace(Oh,"$&/")+"/"),Xo(r,e,n,"",function(u){return u})):r!=null&&(cf(r)&&(r=Sv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Oh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Fh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+yc(s,o);a+=Xo(s,e,n,l,r)}else if(l=yv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+yc(s,o++),a+=Xo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Xo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},qo={transition:null},wv={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:qo,ReactCurrentOwner:lf};function e0(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Is;Ve.Fragment=dv;Ve.Profiler=hv;Ve.PureComponent=af;Ve.StrictMode=fv;Ve.Suspense=xv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Ve.act=e0;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$m({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Zm.call(e,l)&&!Jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Ve.createElement=Qm;Ve.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:gv,render:t}};Ve.isValidElement=cf;Ve.lazy=function(t){return{$$typeof:_v,_payload:{_status:-1,_result:t},_init:Ev}};Ve.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};Ve.unstable_act=e0;Ve.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ve.useContext=function(t){return mn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ve.useId=function(){return mn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ve.useRef=function(t){return mn.current.useRef(t)};Ve.useState=function(t){return mn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return mn.current.useTransition()};Ve.version="18.3.1";Xm.exports=Ve;var ne=Xm.exports;const bv=cv(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=ne,Av=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Nv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Cv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:a,props:r,_owner:Nv.current}}Yl.Fragment=Rv;Yl.jsx=t0;Yl.jsxs=t0;Wm.exports=Yl;var c=Wm.exports,Mu={},n0={exports:{}},Pn={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,F){var V=k.length;k.push(F);e:for(;0<V;){var Z=V-1>>>1,ce=k[Z];if(0<r(ce,F))k[Z]=F,k[V]=ce,V=Z;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var F=k[0],V=k.pop();if(V!==F){k[0]=V;e:for(var Z=0,ce=k.length,Ne=ce>>>1;Z<Ne;){var Y=2*(Z+1)-1,fe=k[Y],xe=Y+1,we=k[xe];if(0>r(fe,V))xe<ce&&0>r(we,fe)?(k[Z]=we,k[xe]=V,Z=xe):(k[Z]=fe,k[Y]=V,Z=Y);else if(xe<ce&&0>r(we,V))k[Z]=we,k[xe]=V,Z=xe;else break e}}return F}function r(k,F){var V=k.sortIndex-F.sortIndex;return V!==0?V:k.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,f=3,g=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=k)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function M(k){if(S=!1,y(k),!_)if(n(l)!==null)_=!0,z(A);else{var F=n(u);F!==null&&O(M,F.startTime-k)}}function A(k,F){_=!1,S&&(S=!1,d(E),E=-1),g=!0;var V=f;try{for(y(F),p=n(l);p!==null&&(!(p.expirationTime>F)||k&&!P());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,f=p.priorityLevel;var ce=Z(p.expirationTime<=F);F=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(l)&&i(l),y(F)}else i(l);p=n(l)}if(p!==null)var Ne=!0;else{var Y=n(u);Y!==null&&O(M,Y.startTime-F),Ne=!1}return Ne}finally{p=null,f=V,g=!1}}var b=!1,v=null,E=-1,C=5,R=-1;function P(){return!(t.unstable_now()-R<C)}function I(){if(v!==null){var k=t.unstable_now();R=k;var F=!0;try{F=v(!0,k)}finally{F?H():(b=!1,v=null)}}else b=!1}var H;if(typeof m=="function")H=function(){m(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,W=L.port2;L.port1.onmessage=I,H=function(){W.postMessage(null)}}else H=function(){x(I,0)};function z(k){v=k,b||(b=!0,H())}function O(k,F){E=x(function(){k(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,z(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return k()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var V=f;f=k;try{return F()}finally{f=V}},t.unstable_scheduleCallback=function(k,F,V){var Z=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Z+V:Z):V=Z,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,k={id:h++,callback:F,priorityLevel:k,startTime:V,expirationTime:ce,sortIndex:-1},V>Z?(k.sortIndex=V,e(u,k),n(l)===null&&k===n(u)&&(S?(d(E),E=-1):S=!0,O(M,V-Z))):(k.sortIndex=ce,e(l,k),_||g||(_=!0,z(A))),k},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(k){var F=f;return function(){var V=f;f=F;try{return k.apply(this,arguments)}finally{f=V}}}})(r0);i0.exports=r0;var Lv=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=ne,Nn=Lv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Sa={};function Br(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Sa[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kh={},Bh={};function Uv(t){return Eu.call(Bh,t)?!0:Eu.call(kh,t)?!1:Iv.test(t)?Bh[t]=!0:(kh[t]=!0,!1)}function Fv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ov(t,e,n,i){if(e===null||typeof e>"u"||Fv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);Jt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ov(e,n,r,i)&&(n=null),i||r===null?Uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Tu=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),zh=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Sc;function ia(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Mc=!1;function Ec(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function kv(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case wu:return"Profiler";case hf:return"StrictMode";case bu:return"Suspense";case Tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Au(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Au(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=zv(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function Cu(t,e){d0(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ra(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function f0(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){Hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uu=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,gs=null,xs=null;function Wh(t){if(t=Xa(t)){if(typeof Fu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ec(e),Fu(t.stateNode,t.type,e))}}function x0(t){gs?xs?xs.push(t):xs=[t]:gs=t}function v0(){if(gs){var t=gs,e=xs;if(xs=gs=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function _0(t,e){return t(e)}function y0(){}var wc=!1;function S0(t,e,n){if(wc)return t(e,n);wc=!0;try{return _0(t,e,n)}finally{wc=!1,(gs!==null||xs!==null)&&(y0(),v0())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ou=!1;if(Li)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Ou=!1}function Vv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var da=!1,hl=null,pl=!1,ku=null,jv={onError:function(t){da=!0,hl=t}};function Wv(t,e,n,i,r,s,a,o,l){da=!1,hl=null,Vv.apply(jv,arguments)}function Xv(t,e,n,i,r,s,a,o,l){if(Wv.apply(this,arguments),da){if(da){var u=hl;da=!1,hl=null}else throw Error(re(198));pl||(pl=!0,ku=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(zr(t)!==t)throw Error(re(188))}function qv(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xh(r),t;if(s===i)return Xh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function E0(t){return t=qv(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var b0=Nn.unstable_scheduleCallback,qh=Nn.unstable_cancelCallback,$v=Nn.unstable_shouldYield,Yv=Nn.unstable_requestPaint,Rt=Nn.unstable_now,Kv=Nn.unstable_getCurrentPriorityLevel,xf=Nn.unstable_ImmediatePriority,T0=Nn.unstable_UserBlockingPriority,ml=Nn.unstable_NormalPriority,Zv=Nn.unstable_LowPriority,A0=Nn.unstable_IdlePriority,Kl=null,hi=null;function Jv(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:t_,Qv=Math.log,e_=Math.LN2;function t_(t){return t>>>=0,t===0?32:31-(Qv(t)/e_|0)|0}var ao=64,oo=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function n_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=n_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function r_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function C0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N0,_f,P0,L0,D0,zu=!1,lo=[],tr=null,nr=null,ir=null,wa=new Map,ba=new Map,$i=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function a_(t,e,n,i,r){switch(e){case"focusin":return tr=js(tr,t,e,n,i,r),!0;case"dragenter":return nr=js(nr,t,e,n,i,r),!0;case"mouseover":return ir=js(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,js(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,js(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function I0(t){var e=br(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){P0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uu=i,n.target.dispatchEvent(i),Uu=null}else return e=Xa(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){$o(t)&&n.delete(e)}function o_(){zu=!1,tr!==null&&$o(tr)&&(tr=null),nr!==null&&$o(nr)&&(nr=null),ir!==null&&$o(ir)&&(ir=null),wa.forEach(Yh),ba.forEach(Yh)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,o_)))}function Ta(t){function e(r){return Ws(r,t)}if(0<lo.length){Ws(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&Ws(tr,t),nr!==null&&Ws(nr,t),ir!==null&&Ws(ir,t),wa.forEach(e),ba.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&$i.shift()}var vs=Fi.ReactCurrentBatchConfig,xl=!0;function l_(t,e,n,i){var r=rt,s=vs.transition;vs.transition=null;try{rt=1,yf(t,e,n,i)}finally{rt=r,vs.transition=s}}function c_(t,e,n,i){var r=rt,s=vs.transition;vs.transition=null;try{rt=4,yf(t,e,n,i)}finally{rt=r,vs.transition=s}}function yf(t,e,n,i){if(xl){var r=Hu(t,e,n,i);if(r===null)Uc(t,e,i,vl,n),$h(t,i);else if(a_(r,t,e,n,i))i.stopPropagation();else if($h(t,i),e&4&&-1<s_.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&N0(s),s=Hu(t,e,n,i),s===null&&Uc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var vl=null;function Hu(t,e,n,i){if(vl=null,t=gf(i),t=br(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case xf:return 1;case T0:return 4;case ml:case Zv:return 16;case A0:return 536870912;default:return 16}default:return 16}}var Zi=null,Sf=null,Yo=null;function F0(){if(Yo)return Yo;var t,e=Sf,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Kh(){return!1}function Ln(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Kh,this.isPropagationStopped=Kh,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=Ln(Us),Wa=bt({},Us,{view:0,detail:0}),u_=Ln(Wa),Tc,Ac,Xs,Zl=bt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Tc=t.screenX-Xs.screenX,Ac=t.screenY-Xs.screenY):Ac=Tc=0,Xs=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Zh=Ln(Zl),d_=bt({},Zl,{dataTransfer:0}),f_=Ln(d_),h_=bt({},Wa,{relatedTarget:0}),Rc=Ln(h_),p_=bt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=Ln(p_),g_=bt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x_=Ln(g_),v_=bt({},Us,{data:0}),Jh=Ln(v_),__={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S_[t])?!!e[t]:!1}function Ef(){return M_}var E_=bt({},Wa,{key:function(t){if(t.key){var e=__[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w_=Ln(E_),b_=bt({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Ln(b_),T_=bt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),A_=Ln(T_),R_=bt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Ln(R_),N_=bt({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=Ln(N_),L_=[9,13,27,32],wf=Li&&"CompositionEvent"in window,fa=null;Li&&"documentMode"in document&&(fa=document.documentMode);var D_=Li&&"TextEvent"in window&&!fa,O0=Li&&(!wf||fa&&8<fa&&11>=fa),ep=" ",tp=!1;function k0(t,e){switch(t){case"keyup":return L_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function I_(t,e){switch(t){case"compositionend":return B0(e);case"keypress":return e.which!==32?null:(tp=!0,ep);case"textInput":return t=e.data,t===ep&&tp?null:t;default:return null}}function U_(t,e){if(ss)return t==="compositionend"||!wf&&k0(t,e)?(t=F0(),Yo=Sf=Zi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F_[t.type]:e==="textarea"}function z0(t,e,n,i){x0(i),e=_l(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Aa=null;function O_(t){Z0(t,0)}function Jl(t){var e=ls(t);if(u0(e))return t}function k_(t,e){if(t==="change")return e}var H0=!1;if(Li){var Cc;if(Li){var Nc="oninput"in document;if(!Nc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),Nc=typeof ip.oninput=="function"}Cc=Nc}else Cc=!1;H0=Cc&&(!document.documentMode||9<document.documentMode)}function rp(){ha&&(ha.detachEvent("onpropertychange",G0),Aa=ha=null)}function G0(t){if(t.propertyName==="value"&&Jl(Aa)){var e=[];z0(e,Aa,t,gf(t)),S0(O_,e)}}function B_(t,e,n){t==="focusin"?(rp(),ha=e,Aa=n,ha.attachEvent("onpropertychange",G0)):t==="focusout"&&rp()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Aa)}function H_(t,e){if(t==="click")return Jl(e)}function G_(t,e){if(t==="input"||t==="change")return Jl(e)}function V_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:V_;function Ra(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function V0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j_(t){var e=j0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V0(n.ownerDocument.documentElement,n)){if(i!==null&&bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ap(n,s);var a=ap(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W_=Li&&"documentMode"in document&&11>=document.documentMode,as=null,Gu=null,pa=null,Vu=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||as==null||as!==fl(i)||(i=as,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Ra(pa,i)||(pa=i,i=_l(Gu,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Pc={},W0={};Li&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Ql(t){if(Pc[t])return Pc[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W0)return Pc[t]=e[n];return t}var X0=Ql("animationend"),q0=Ql("animationiteration"),$0=Ql("animationstart"),Y0=Ql("transitionend"),K0=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){K0.set(t,e),Br(e,[t])}for(var Lc=0;Lc<lp.length;Lc++){var Dc=lp[Lc],X_=Dc.toLowerCase(),q_=Dc[0].toUpperCase()+Dc.slice(1);hr(X_,"on"+q_)}hr(X0,"onAnimationEnd");hr(q0,"onAnimationIteration");hr($0,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Y0,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function cp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xv(i,e,void 0,t),t.currentTarget=null}function Z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;cp(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;cp(r,o,u),s=l}}}if(pl)throw t=ku,pl=!1,ku=null,t}function ct(t,e){var n=e[$u];n===void 0&&(n=e[$u]=new Set);var i=t+"__bubble";n.has(i)||(J0(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),J0(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[fo]){t[fo]=!0,s0.forEach(function(n){n!=="selectionchange"&&($_.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Ic("selectionchange",!1,e))}}function J0(t,e,n,i){switch(U0(e)){case 1:var r=l_;break;case 4:r=c_;break;default:r=yf}n=r.bind(null,e,n,t),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}S0(function(){var u=s,h=gf(n),p=[];e:{var f=K0.get(t);if(f!==void 0){var g=Mf,_=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":g=w_;break;case"focusin":_="focus",g=Rc;break;case"focusout":_="blur",g=Rc;break;case"beforeblur":case"afterblur":g=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=A_;break;case X0:case q0:case $0:g=m_;break;case Y0:g=C_;break;case"scroll":g=u_;break;case"wheel":g=P_;break;case"copy":case"cut":case"paste":g=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qh}var S=(e&4)!==0,x=!S&&t==="scroll",d=S?f!==null?f+"Capture":null:f;S=[];for(var m=u,y;m!==null;){y=m;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,d!==null&&(M=Ea(m,d),M!=null&&S.push(Na(m,M,y)))),x)break;m=m.return}0<S.length&&(f=new g(f,_,null,n,h),p.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Uu&&(_=n.relatedTarget||n.fromElement)&&(br(_)||_[Di]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?br(_):null,_!==null&&(x=zr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(S=Zh,M="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Qh,M="onPointerLeave",d="onPointerEnter",m="pointer"),x=g==null?f:ls(g),y=_==null?f:ls(_),f=new S(M,m+"leave",g,n,h),f.target=x,f.relatedTarget=y,M=null,br(h)===u&&(S=new S(d,m+"enter",_,n,h),S.target=y,S.relatedTarget=x,M=S),x=M,g&&_)t:{for(S=g,d=_,m=0,y=S;y;y=Vr(y))m++;for(y=0,M=d;M;M=Vr(M))y++;for(;0<m-y;)S=Vr(S),m--;for(;0<y-m;)d=Vr(d),y--;for(;m--;){if(S===d||d!==null&&S===d.alternate)break t;S=Vr(S),d=Vr(d)}S=null}else S=null;g!==null&&up(p,f,g,S,!1),_!==null&&x!==null&&up(p,x,_,S,!0)}}e:{if(f=u?ls(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var A=k_;else if(np(f))if(H0)A=G_;else{A=z_;var b=B_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=H_);if(A&&(A=A(t,u))){z0(p,A,n,h);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Nu(f,"number",f.value)}switch(b=u?ls(u):window,t){case"focusin":(np(b)||b.contentEditable==="true")&&(as=b,Gu=u,pa=null);break;case"focusout":pa=Gu=as=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,op(p,n,h);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":op(p,n,h)}var v;if(wf)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ss?k0(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(O0&&n.locale!=="ko"&&(ss||E!=="onCompositionStart"?E==="onCompositionEnd"&&ss&&(v=F0()):(Zi=h,Sf="value"in Zi?Zi.value:Zi.textContent,ss=!0)),b=_l(u,E),0<b.length&&(E=new Jh(E,t,null,n,h),p.push({event:E,listeners:b}),v?E.data=v:(v=B0(n),v!==null&&(E.data=v)))),(v=D_?I_(t,n):U_(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(h=new Jh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=v))}Z0(p,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ea(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ea(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=Ea(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Y_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(Y_,`
`).replace(K_,"")}function ho(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(re(425))}function yl(){}var ju=null,Wu=null;function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(Q_)}:qu;function Q_(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),ui="__reactFiber$"+Fs,Pa="__reactProps$"+Fs,Di="__reactContainer$"+Fs,$u="__reactEvents$"+Fs,ey="__reactListeners$"+Fs,ty="__reactHandles$"+Fs;function br(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hp(t);t!==null;){if(n=t[ui])return n;t=hp(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ui]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ec(t){return t[Pa]||null}var Yu=[],cs=-1;function pr(t){return{current:t}}function dt(t){0>cs||(t.current=Yu[cs],Yu[cs]=null,cs--)}function lt(t,e){cs++,Yu[cs]=t.current,t.current=e}var ur={},on=pr(ur),yn=pr(!1),Pr=ur;function ws(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Sl(){dt(yn),dt(on)}function pp(t,e,n){if(on.current!==ur)throw Error(re(168));lt(on,e),lt(yn,n)}function Q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Bv(t)||"Unknown",r));return bt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Pr=on.current,lt(on,t),lt(yn,yn.current),!0}function mp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Q0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,dt(yn),dt(on),lt(on,t)):dt(yn),lt(yn,n)}var bi=null,tc=!1,Oc=!1;function eg(t){bi===null?bi=[t]:bi.push(t)}function ny(t){tc=!0,eg(t)}function mr(){if(!Oc&&bi!==null){Oc=!0;var t=0,e=rt;try{var n=bi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,tc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),b0(xf,mr),r}finally{rt=e,Oc=!1}}return null}var us=[],ds=0,El=null,wl=0,kn=[],Bn=0,Lr=null,Ti=1,Ai="";function Er(t,e){us[ds++]=wl,us[ds++]=El,El=t,wl=e}function tg(t,e,n){kn[Bn++]=Ti,kn[Bn++]=Ai,kn[Bn++]=Lr,Lr=t;var i=Ti;t=Ai;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-ni(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function Tf(t){t.return!==null&&(Er(t,1),tg(t,1,0))}function Af(t){for(;t===El;)El=us[--ds],us[ds]=null,wl=us[--ds],us[ds]=null;for(;t===Lr;)Lr=kn[--Bn],kn[Bn]=null,Ai=kn[--Bn],kn[Bn]=null,Ti=kn[--Bn],kn[Bn]=null}var Cn=null,Rn=null,xt=!1,Jn=null;function ng(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Rn=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(xt){var e=Rn;if(e){var n=e;if(!gp(t,e)){if(Ku(t))throw Error(re(418));e=rr(n.nextSibling);var i=Cn;e&&gp(t,e)?ng(i,n):(t.flags=t.flags&-4097|2,xt=!1,Cn=t)}}else{if(Ku(t))throw Error(re(418));t.flags=t.flags&-4097|2,xt=!1,Cn=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function po(t){if(t!==Cn)return!1;if(!xt)return xp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xu(t.type,t.memoizedProps)),e&&(e=Rn)){if(Ku(t))throw ig(),Error(re(418));for(;e;)ng(t,e),e=rr(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Cn?rr(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Rn;t;)t=rr(t.nextSibling)}function bs(){Rn=Cn=null,xt=!1}function Rf(t){Jn===null?Jn=[t]:Jn.push(t)}var iy=Fi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function rg(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=lr(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,m,y,M){return m===null||m.tag!==6?(m=jc(y,d.mode,M),m.return=d,m):(m=r(m,y),m.return=d,m)}function l(d,m,y,M){var A=y.type;return A===rs?h(d,m,y.props.children,M,y.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Wi&&vp(A)===m.type)?(M=r(m,y.props),M.ref=qs(d,m,y),M.return=d,M):(M=il(y.type,y.key,y.props,null,d.mode,M),M.ref=qs(d,m,y),M.return=d,M)}function u(d,m,y,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Wc(y,d.mode,M),m.return=d,m):(m=r(m,y.children||[]),m.return=d,m)}function h(d,m,y,M,A){return m===null||m.tag!==7?(m=Cr(y,d.mode,M,A),m.return=d,m):(m=r(m,y),m.return=d,m)}function p(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jc(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case io:return y=il(m.type,m.key,m.props,null,d.mode,y),y.ref=qs(d,null,m),y.return=d,y;case is:return m=Wc(m,d.mode,y),m.return=d,m;case Wi:var M=m._init;return p(d,M(m._payload),y)}if(ra(m)||Gs(m))return m=Cr(m,d.mode,y,null),m.return=d,m;mo(d,m)}return null}function f(d,m,y,M){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(d,m,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case io:return y.key===A?l(d,m,y,M):null;case is:return y.key===A?u(d,m,y,M):null;case Wi:return A=y._init,f(d,m,A(y._payload),M)}if(ra(y)||Gs(y))return A!==null?null:h(d,m,y,M,null);mo(d,y)}return null}function g(d,m,y,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(y)||null,o(m,d,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case io:return d=d.get(M.key===null?y:M.key)||null,l(m,d,M,A);case is:return d=d.get(M.key===null?y:M.key)||null,u(m,d,M,A);case Wi:var b=M._init;return g(d,m,y,b(M._payload),A)}if(ra(M)||Gs(M))return d=d.get(y)||null,h(m,d,M,A,null);mo(m,M)}return null}function _(d,m,y,M){for(var A=null,b=null,v=m,E=m=0,C=null;v!==null&&E<y.length;E++){v.index>E?(C=v,v=null):C=v.sibling;var R=f(d,v,y[E],M);if(R===null){v===null&&(v=C);break}t&&v&&R.alternate===null&&e(d,v),m=s(R,m,E),b===null?A=R:b.sibling=R,b=R,v=C}if(E===y.length)return n(d,v),xt&&Er(d,E),A;if(v===null){for(;E<y.length;E++)v=p(d,y[E],M),v!==null&&(m=s(v,m,E),b===null?A=v:b.sibling=v,b=v);return xt&&Er(d,E),A}for(v=i(d,v);E<y.length;E++)C=g(v,d,E,y[E],M),C!==null&&(t&&C.alternate!==null&&v.delete(C.key===null?E:C.key),m=s(C,m,E),b===null?A=C:b.sibling=C,b=C);return t&&v.forEach(function(P){return e(d,P)}),xt&&Er(d,E),A}function S(d,m,y,M){var A=Gs(y);if(typeof A!="function")throw Error(re(150));if(y=A.call(y),y==null)throw Error(re(151));for(var b=A=null,v=m,E=m=0,C=null,R=y.next();v!==null&&!R.done;E++,R=y.next()){v.index>E?(C=v,v=null):C=v.sibling;var P=f(d,v,R.value,M);if(P===null){v===null&&(v=C);break}t&&v&&P.alternate===null&&e(d,v),m=s(P,m,E),b===null?A=P:b.sibling=P,b=P,v=C}if(R.done)return n(d,v),xt&&Er(d,E),A;if(v===null){for(;!R.done;E++,R=y.next())R=p(d,R.value,M),R!==null&&(m=s(R,m,E),b===null?A=R:b.sibling=R,b=R);return xt&&Er(d,E),A}for(v=i(d,v);!R.done;E++,R=y.next())R=g(v,d,E,R.value,M),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?E:R.key),m=s(R,m,E),b===null?A=R:b.sibling=R,b=R);return t&&v.forEach(function(I){return e(d,I)}),xt&&Er(d,E),A}function x(d,m,y,M){if(typeof y=="object"&&y!==null&&y.type===rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case io:e:{for(var A=y.key,b=m;b!==null;){if(b.key===A){if(A=y.type,A===rs){if(b.tag===7){n(d,b.sibling),m=r(b,y.props.children),m.return=d,d=m;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Wi&&vp(A)===b.type){n(d,b.sibling),m=r(b,y.props),m.ref=qs(d,b,y),m.return=d,d=m;break e}n(d,b);break}else e(d,b);b=b.sibling}y.type===rs?(m=Cr(y.props.children,d.mode,M,y.key),m.return=d,d=m):(M=il(y.type,y.key,y.props,null,d.mode,M),M.ref=qs(d,m,y),M.return=d,d=M)}return a(d);case is:e:{for(b=y.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),m=r(m,y.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Wc(y,d.mode,M),m.return=d,d=m}return a(d);case Wi:return b=y._init,x(d,m,b(y._payload),M)}if(ra(y))return _(d,m,y,M);if(Gs(y))return S(d,m,y,M);mo(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,y),m.return=d,d=m):(n(d,m),m=jc(y,d.mode,M),m.return=d,d=m),a(d)):n(d,m)}return x}var Ts=rg(!0),sg=rg(!1),bl=pr(null),Tl=null,fs=null,Cf=null;function Nf(){Cf=fs=Tl=null}function Pf(t){var e=bl.current;dt(bl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Tl=t,Cf=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(Tl===null)throw Error(re(308));fs=t,Tl.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var Tr=null;function Lf(t){Tr===null?Tr=[t]:Tr.push(t)}function ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var f=o.lane,g=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(g,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(g,p,f):_,f==null)break e;p=bt({},p,f);break e;case 2:Xi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=g,l=p):h=h.next=g,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=p}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var qa={},pi=pr(qa),La=pr(qa),Da=pr(qa);function Ar(t){if(t===qa)throw Error(re(174));return t}function If(t,e){switch(lt(Da,e),lt(La,t),lt(pi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lu(e,t)}dt(pi),lt(pi,e)}function As(){dt(pi),dt(La),dt(Da)}function lg(t){Ar(Da.current);var e=Ar(pi.current),n=Lu(e,t.type);e!==n&&(lt(La,t),lt(pi,n))}function Uf(t){La.current===t&&(dt(pi),dt(La))}var St=pr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Ff(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Jo=Fi.ReactCurrentDispatcher,Bc=Fi.ReactCurrentBatchConfig,Dr=0,wt=null,Ft=null,Vt=null,Cl=!1,ma=!1,Ia=0,ry=0;function tn(){throw Error(re(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(Dr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?ly:cy,t=n(i,r),ma){s=0;do{if(ma=!1,Ia=0,25<=s)throw Error(re(301));s+=1,Vt=Ft=null,e.updateQueue=null,Jo.current=uy,t=n(i,r)}while(ma)}if(Jo.current=Nl,e=Ft!==null&&Ft.next!==null,Dr=0,Vt=Ft=wt=null,Cl=!1,e)throw Error(re(300));return t}function Bf(){var t=Ia!==0;return Ia=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function jn(){if(Ft===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?wt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(re(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ua(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=jn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Dr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,wt.lanes|=h,Ir|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,ri(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=jn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ri(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cg(){}function ug(t,e){var n=wt,i=jn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,zf(hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,fg.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(re(349));Dr&30||dg(n,e,r)}return r}function dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fg(t,e,n,i){e.value=n,e.getSnapshot=i,pg(e)&&mg(t)}function hg(t,e,n){return n(function(){pg(e)&&mg(t)})}function pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function mg(t){var e=Ii(t,1);e!==null&&ii(e,t,1,-1)}function Sp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=oy.bind(null,wt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gg(){return jn().memoizedState}function Qo(t,e,n,i){var r=li();wt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function nc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function Mp(t,e){return Qo(8390656,8,t,e)}function zf(t,e){return nc(2048,8,t,e)}function xg(t,e){return nc(4,2,t,e)}function vg(t,e){return nc(4,4,t,e)}function _g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yg(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,_g.bind(null,e,t),n)}function Hf(){}function Sg(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mg(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Eg(t,e,n){return Dr&21?(ri(n,e)||(n=R0(),wt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function sy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Bc.transition;Bc.transition={};try{t(!1),e()}finally{rt=n,Bc.transition=i}}function wg(){return jn().memoizedState}function ay(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},bg(t))Tg(e,n);else if(n=ag(t,e,n,i),n!==null){var r=hn();ii(n,t,i,r),Ag(n,e,i)}}function oy(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(bg(t))Tg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ri(o,a)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ag(t,e,r,i),n!==null&&(r=hn(),ii(n,t,i,r),Ag(n,e,i))}}function bg(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Tg(t,e){ma=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ag(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var Nl={readContext:Vn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},ly={readContext:Vn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4194308,4,_g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qo(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Sp,useDebugValue:Hf,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Sp(!1),e=t[0];return t=sy.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=li();if(xt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),jt===null)throw Error(re(349));Dr&30||dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mp(hg.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,fg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=jt.identifierPrefix;if(xt){var n=Ai,i=Ti;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cy={readContext:Vn,useCallback:Sg,useContext:Vn,useEffect:zf,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:vg,useMemo:Mg,useReducer:zc,useRef:gg,useState:function(){return zc(Ua)},useDebugValue:Hf,useDeferredValue:function(t){var e=jn();return Eg(e,Ft.memoizedState,t)},useTransition:function(){var t=zc(Ua)[0],e=jn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:wg,unstable_isNewReconciler:!1},uy={readContext:Vn,useCallback:Sg,useContext:Vn,useEffect:zf,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:vg,useMemo:Mg,useReducer:Hc,useRef:gg,useState:function(){return Hc(Ua)},useDebugValue:Hf,useDeferredValue:function(t){var e=jn();return Ft===null?e.memoizedState=t:Eg(e,Ft.memoizedState,t)},useTransition:function(){var t=Hc(Ua)[0],e=jn().memoizedState;return[t,e]},useMutableSource:cg,useSyncExternalStore:ug,useId:wg,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=or(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ii(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=or(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ii(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=or(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ii(e,t,i,n),Zo(e,t,i))}};function Ep(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function Rg(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=Sn(e)?Pr:on.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=Sn(e)?Pr:on.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ic.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=kv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function Cg(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,dd=i),td(t,e)},n}function Ng(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=by.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var fy=Fi.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?sg(e,null,n,i):Ts(e,t.child,n,i)}function Rp(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=kf(t,e,n,i,s,r),n=Bf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&n&&Tf(e),e.flags|=1,un(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pg(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Pg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return nd(t,e,n,i,r)}function Lg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ps,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(ps,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(ps,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(ps,Tn),Tn|=i;return un(t,e,r,n),e.child}function Dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,i,r){var s=Sn(n)?Pr:on.current;return s=ws(e,s),_s(e,r),n=kf(t,e,n,i,s,r),i=Bf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(xt&&i&&Tf(e),e.flags|=1,un(t,e,n,r),e.child)}function Np(t,e,n,i,r){if(Sn(n)){var s=!0;Ml(e)}else s=!1;if(_s(e,r),e.stateNode===null)el(t,e),Rg(e,n,i),ed(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=Sn(n)?Pr:on.current,u=ws(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&wp(e,a,i,u),Xi=!1;var f=e.memoizedState;a.state=f,Al(e,i,a,r),l=e.memoizedState,o!==i||f!==l||yn.current||Xi?(typeof h=="function"&&(Qu(e,n,h,i),l=e.memoizedState),(o=Xi||Ep(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,og(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Kn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=Sn(n)?Pr:on.current,l=ws(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&wp(e,a,i,l),Xi=!1,f=e.memoizedState,a.state=f,Al(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||yn.current||Xi?(typeof g=="function"&&(Qu(e,n,g,i),_=e.memoizedState),(u=Xi||Ep(e,n,u,i,f,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return id(t,e,n,i,s,r)}function id(t,e,n,i,r,s){Dg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&mp(e,n,!1),Ui(t,e,s);i=e.stateNode,fy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&mp(e,n,!0),e.child}function Ig(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),If(t,e.containerInfo)}function Pp(t,e,n,i,r){return bs(),Rf(r),e.flags|=256,un(t,e,n,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(St,r&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ac(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=rd,t):Gf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return hy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=lr(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?sd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=rd,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&Rf(i),Ts(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(re(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ac({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=sd(a),e.memoizedState=rd,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Gc(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ii(i,t,r,-1))}return $f(),i=Gc(Error(re(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ty.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=rr(r.nextSibling),Cn=e,xt=!0,Jn=null,t!==null&&(kn[Bn++]=Ti,kn[Bn++]=Ai,kn[Bn++]=Lr,Ti=t.id,Ai=t.overflow,Lr=e),e=Gf(e,i.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:Ig(e),bs();break;case 5:lg(e);break;case 1:Sn(e.type)&&Ml(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(lt(St,St.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);lt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return Ui(t,e,n)}var Og,ad,kg,Bg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(pi.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(t,r),i=Pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}Du(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return Sn(e.type)&&Sl(),nn(e),null;case 3:return i=e.stateNode,As(),dt(yn),dt(on),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(pd(Jn),Jn=null))),ad(t,e),nn(e),null;case 5:Uf(e);var r=Ar(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return nn(e),null}if(t=Ar(pi.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Hh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Vh(i,s),ct("invalid",i)}Du(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":ro(i),Gh(i,s,!0);break;case"textarea":ro(i),jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Pa]=i,Og(t,e,!1,!1),e.stateNode=t;e:{switch(a=Iu(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)ct(aa[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Hh(t,i),r=Ru(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Vh(t,i),r=Pu(t,i),ct("invalid",t);break;default:r=i}Du(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&ff(t,s,l,a))}switch(n){case"input":ro(t),Gh(t,i,!1);break;case"textarea":ro(t),jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Ar(Da.current),Ar(pi.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return nn(e),null;case 13:if(dt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Rn!==null&&e.mode&1&&!(e.flags&128))ig(),bs(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ui]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else Jn!==null&&(pd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ot===0&&(Ot=3):$f())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return As(),ad(t,e),t===null&&Ca(e.stateNode.containerInfo),nn(e),null;case 10:return Pf(e.type._context),nn(e),null;case 17:return Sn(e.type)&&Sl(),nn(e),null;case 19:if(dt(St),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Cs&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return nn(e),null}else 2*Rt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,lt(St,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function gy(t,e){switch(Af(e),e.tag){case 1:return Sn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),dt(yn),dt(on),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(dt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(St),null;case 4:return As(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var xo=!1,an=!1,xy=typeof WeakSet=="function"?WeakSet:Set,Me=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Dp=!1;function vy(t,e){if(ju=xl,t=j0(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(l=a),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},xl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,x=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Kn(e.type,S),x);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=Dp,Dp=!1,_}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,n,s)}r=r.next}while(r!==i)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zg(t){var e=t.alternate;e!==null&&(t.alternate=null,zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Pa],delete e[$u],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hg(t){return t.tag===5||t.tag===3||t.tag===4}function Ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var qt=null,Zn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)Gg(t,e,n),n=n.sibling}function Gg(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:an||hs(n,e);case 6:var i=qt,r=Zn;qt=null,Bi(t,e,n),qt=i,Zn=r,qt!==null&&(Zn?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(Zn?(t=qt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Ta(t)):Fc(qt,n.stateNode));break;case 4:i=qt,r=Zn,qt=n.stateNode.containerInfo,Zn=!0,Bi(t,e,n),qt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&od(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!an&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,Bi(t,e,n),an=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=Ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,Zn=!1;break e;case 3:qt=o.stateNode.containerInfo,Zn=!0;break e;case 4:qt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(qt===null)throw Error(re(160));Gg(s,a,r),qt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vg(e,t),e=e.sibling}function Vg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),si(t),i&4){try{ga(3,t,t.return),rc(3,t)}catch(S){Tt(t,t.return,S)}try{ga(5,t,t.return)}catch(S){Tt(t,t.return,S)}}break;case 1:Xn(e,t),si(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Xn(e,t),si(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(S){Tt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&d0(r,s),Iu(o,a);var u=Iu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?g0(r,p):h==="dangerouslySetInnerHTML"?p0(r,p):h==="children"?Ma(r,p):ff(r,h,p,u)}switch(o){case"input":Cu(r,s);break;case"textarea":f0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ms(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(S){Tt(t,t.return,S)}}break;case 6:if(Xn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Tt(t,t.return,S)}}break;case 3:if(Xn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(S){Tt(t,t.return,S)}break;case 4:Xn(e,t),si(t);break;case 13:Xn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wf=Rt())),i&4&&Up(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(an=(u=an)||h,Xn(e,t),an=u):Xn(e,t),si(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Me=t,h=t.child;h!==null;){for(p=Me=h;Me!==null;){switch(f=Me,g=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:hs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Tt(i,n,S)}}break;case 5:hs(f,f.return);break;case 22:if(f.memoizedState!==null){Op(p);continue}}g!==null?(g.return=f,Me=g):Op(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=m0("display",a))}catch(S){Tt(t,t.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){Tt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xn(e,t),si(t),i&4&&Up(t);break;case 21:break;default:Xn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=Ip(t);ud(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Ip(t);cd(t,o,a);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _y(t,e,n){Me=t,jg(t)}function jg(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=xo;var u=an;if(xo=a,(an=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?kp(r):l!==null?(l.return=a,Me=l):kp(r);for(;s!==null;)Me=s,jg(s),s=s.sibling;Me=r,xo=o,an=u}Fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Fp(t)}}function Fp(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}an||e.flags&512&&ld(e)}catch(f){Tt(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Op(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function kp(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{ld(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{ld(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var yy=Math.ceil,Pl=Fi.ReactCurrentDispatcher,Vf=Fi.ReactCurrentOwner,Gn=Fi.ReactCurrentBatchConfig,Ze=0,jt=null,Pt=null,Kt=0,Tn=0,ps=pr(0),Ot=0,Oa=null,Ir=0,sc=0,jf=0,xa=null,xn=null,Wf=0,Cs=1/0,wi=null,Ll=!1,dd=null,ar=null,vo=!1,Ji=null,Dl=0,va=0,fd=null,tl=-1,nl=0;function hn(){return Ze&6?Rt():tl!==-1?tl:tl=Rt()}function or(t){return t.mode&1?Ze&2&&Kt!==0?Kt&-Kt:iy.transition!==null?(nl===0&&(nl=R0()),nl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function ii(t,e,n,i){if(50<va)throw va=0,fd=null,Error(re(185));ja(t,n,i),(!(Ze&2)||t!==jt)&&(t===jt&&(!(Ze&2)&&(sc|=n),Ot===4&&Yi(t,Kt)),Mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Cs=Rt()+500,tc&&mr()))}function Mn(t,e){var n=t.callbackNode;i_(t,e);var i=gl(t,t===jt?Kt:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?ny(Bp.bind(null,t)):eg(Bp.bind(null,t)),J_(function(){!(Ze&6)&&mr()}),n=null;else{switch(C0(i)){case 1:n=xf;break;case 4:n=T0;break;case 16:n=ml;break;case 536870912:n=A0;break;default:n=ml}n=Jg(n,Wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wg(t,e){if(tl=-1,nl=0,Ze&6)throw Error(re(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=gl(t,t===jt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=Ze;Ze|=2;var s=qg();(jt!==t||Kt!==e)&&(wi=null,Cs=Rt()+500,Rr(t,e));do try{Ey();break}catch(o){Xg(t,o)}while(!0);Nf(),Pl.current=s,Ze=r,Pt!==null?e=0:(jt=null,Kt=0,e=Ot)}if(e!==0){if(e===2&&(r=Bu(t),r!==0&&(i=r,e=hd(t,r))),e===1)throw n=Oa,Rr(t,0),Yi(t,i),Mn(t,Rt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sy(r)&&(e=Il(t,i),e===2&&(s=Bu(t),s!==0&&(i=s,e=hd(t,s))),e===1))throw n=Oa,Rr(t,0),Yi(t,i),Mn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:wr(t,xn,wi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Wf+500-Rt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qu(wr.bind(null,t,xn,wi),e);break}wr(t,xn,wi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yy(i/1960))-i,10<i){t.timeoutHandle=qu(wr.bind(null,t,xn,wi),i);break}wr(t,xn,wi);break;case 5:wr(t,xn,wi);break;default:throw Error(re(329))}}}return Mn(t,Rt()),t.callbackNode===n?Wg.bind(null,t):null}function hd(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=xn,xn=n,e!==null&&pd(e)),t}function pd(t){xn===null?xn=t:xn.push.apply(xn,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~jf,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Bp(t){if(Ze&6)throw Error(re(327));ys();var e=gl(t,0);if(!(e&1))return Mn(t,Rt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Bu(t);i!==0&&(e=i,n=hd(t,i))}if(n===1)throw n=Oa,Rr(t,0),Yi(t,e),Mn(t,Rt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,xn,wi),Mn(t,Rt()),null}function Xf(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Cs=Rt()+500,tc&&mr())}}function Ur(t){Ji!==null&&Ji.tag===0&&!(Ze&6)&&ys();var e=Ze;Ze|=1;var n=Gn.transition,i=rt;try{if(Gn.transition=null,rt=1,t)return t()}finally{rt=i,Gn.transition=n,Ze=e,!(Ze&6)&&mr()}}function qf(){Tn=ps.current,dt(ps)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z_(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:As(),dt(yn),dt(on),Ff();break;case 5:Uf(i);break;case 4:As();break;case 13:dt(St);break;case 19:dt(St);break;case 10:Pf(i.type._context);break;case 22:case 23:qf()}n=n.return}if(jt=t,Pt=t=lr(t.current,null),Kt=Tn=e,Ot=0,Oa=null,jf=sc=Ir=0,xn=xa=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function Xg(t,e){do{var n=Pt;try{if(Nf(),Jo.current=Nl,Cl){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Dr=0,Vt=Ft=wt=null,ma=!1,Ia=0,Vf.current=null,n===null||n.return===null){Ot=1,Oa=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Tp(a);if(g!==null){g.flags&=-257,Ap(g,a,o,s,e),g.mode&1&&bp(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){bp(s,u,e),$f();break e}l=Error(re(426))}}else if(xt&&o.mode&1){var x=Tp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ap(x,a,o,s,e),Rf(Rs(l,o));break e}}s=l=Rs(l,o),Ot!==4&&(Ot=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Cg(s,l,e);_p(s,d);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ar===null||!ar.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ng(s,o,e);_p(s,M);break e}}s=s.return}while(s!==null)}Yg(n)}catch(A){e=A,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function qg(){var t=Pl.current;return Pl.current=Nl,t===null?Nl:t}function $f(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),jt===null||!(Ir&268435455)&&!(sc&268435455)||Yi(jt,Kt)}function Il(t,e){var n=Ze;Ze|=2;var i=qg();(jt!==t||Kt!==e)&&(wi=null,Rr(t,e));do try{My();break}catch(r){Xg(t,r)}while(!0);if(Nf(),Ze=n,Pl.current=i,Pt!==null)throw Error(re(261));return jt=null,Kt=0,Ot}function My(){for(;Pt!==null;)$g(Pt)}function Ey(){for(;Pt!==null&&!$v();)$g(Pt)}function $g(t){var e=Zg(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Yg(t):Pt=e,Vf.current=null}function Yg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Pt=null;return}}else if(n=my(n,e,Tn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ot===0&&(Ot=5)}function wr(t,e,n){var i=rt,r=Gn.transition;try{Gn.transition=null,rt=1,wy(t,e,n,i)}finally{Gn.transition=r,rt=i}return null}function wy(t,e,n,i){do ys();while(Ji!==null);if(Ze&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r_(t,s),t===jt&&(Pt=jt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Jg(ml,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=rt;rt=1;var o=Ze;Ze|=4,Vf.current=null,vy(t,n),Vg(n,t),j_(Wu),xl=!!ju,Wu=ju=null,t.current=n,_y(n),Yv(),Ze=o,rt=a,Gn.transition=s}else t.current=n;if(vo&&(vo=!1,Ji=t,Dl=r),s=t.pendingLanes,s===0&&(ar=null),Jv(n.stateNode),Mn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=dd,dd=null,t;return Dl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===fd?va++:(va=0,fd=t):va=0,mr(),null}function ys(){if(Ji!==null){var t=C0(Dl),e=Gn.transition,n=rt;try{if(Gn.transition=null,rt=16>t?16:t,Ji===null)var i=!1;else{if(t=Ji,Ji=null,Dl=0,Ze&6)throw Error(re(331));var r=Ze;for(Ze|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Me=u;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:ga(8,h,s)}var p=h.child;if(p!==null)p.return=h,Me=p;else for(;Me!==null;){h=Me;var f=h.sibling,g=h.return;if(zg(h),h===u){Me=null;break}if(f!==null){f.return=g,Me=f;break}Me=g}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var m=t.current;for(Me=m;Me!==null;){a=Me;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Me=y;else e:for(a=m;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:rc(9,o)}}catch(A){Tt(o,o.return,A)}if(o===a){Me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Me=M;break e}Me=o.return}}if(Ze=r,mr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Kl,t)}catch{}i=!0}return i}finally{rt=n,Gn.transition=e}}return!1}function zp(t,e,n){e=Rs(n,e),e=Cg(t,e,1),t=sr(t,e,1),e=hn(),t!==null&&(ja(t,1,e),Mn(t,e))}function Tt(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Rs(n,t),t=Ng(e,t,1),e=sr(e,t,1),t=hn(),e!==null&&(ja(e,1,t),Mn(e,t));break}}e=e.return}}function by(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Kt&n)===n&&(Ot===4||Ot===3&&(Kt&130023424)===Kt&&500>Rt()-Wf?Rr(t,0):jf|=n),Mn(t,e)}function Kg(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=hn();t=Ii(t,e),t!==null&&(ja(t,e,n),Mn(t,n))}function Ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kg(t,n)}function Ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Kg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,py(t,e,n);vn=!!(t.flags&131072)}else vn=!1,xt&&e.flags&1048576&&tg(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=ws(e,on.current);_s(e,n),r=kf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=ic,e.stateNode=r,r._reactInternals=e,ed(e,i,t,n),e=id(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Tf(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cy(i),t=Kn(i,t),r){case 0:e=nd(null,e,i,t,n);break e;case 1:e=Np(null,e,i,t,n);break e;case 11:e=Rp(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Kn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Np(t,e,i,r,n);case 3:e:{if(Ig(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,og(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(re(423)),e),e=Pp(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(re(424)),e),e=Pp(t,e,i,n,r);break e}else for(Rn=rr(e.stateNode.containerInfo.firstChild),Cn=e,xt=!0,Jn=null,n=sg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Ui(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return lg(e),t===null&&Zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Xu(i,r)?a=null:s!==null&&Xu(i,s)&&(e.flags|=32),Dg(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return Ug(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Rp(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(bl,i._currentValue),i._currentValue=a,s!==null)if(ri(s.value,a)){if(s.children===r.children&&!yn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Vn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Cp(t,e,i,r,n);case 15:return Pg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),el(t,e),e.tag=1,Sn(i)?(t=!0,Ml(e)):t=!1,_s(e,n),Rg(e,i,r),ed(e,i,r,n),id(null,e,i,!0,t,n);case 19:return Fg(t,e,n);case 22:return Lg(t,e,n)}throw Error(re(156,e.tag))};function Jg(t,e){return b0(t,e)}function Ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Ry(t,e,n,i)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cy(t){if(typeof t=="function")return Yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case rs:return Cr(n.children,r,s,e);case hf:a=8,r|=8;break;case wu:return t=Hn(12,n,e,r|2),t.elementType=wu,t.lanes=s,t;case bu:return t=Hn(13,n,e,r),t.elementType=bu,t.lanes=s,t;case Tu:return t=Hn(19,n,e,r),t.elementType=Tu,t.lanes=s,t;case l0:return ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:a=10;break e;case o0:a=9;break e;case pf:a=11;break e;case mf:a=14;break e;case Wi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function ac(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,a,o,l){return t=new Ny(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function Py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qg(t){if(!t)return ur;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Q0(t,n,e)}return e}function ex(t,e,n,i,r,s,a,o,l){return t=Kf(n,i,!0,t,r,s,a,o,l),t.context=Qg(null),n=t.current,i=hn(),r=or(n),s=Ci(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,ja(t,r,i),Mn(t,i),t}function oc(t,e,n,i){var r=e.current,s=hn(),a=or(r);return n=Qg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,a),t!==null&&(ii(t,r,a,s),Zo(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function Ly(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}lc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));oc(t,e,null,null)};lc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){oc(null,t,null,null)}),e[Di]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=L0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&I0(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function Dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(a);s.call(u)}}var a=ex(e,i,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=a,t[Di]=a.current,Ca(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ul(l);o.call(u)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[Di]=l.current,Ca(t.nodeType===8?t.parentNode:t),Ur(function(){oc(e,l,n,i)}),l}function uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ul(a);o.call(l)}}oc(e,a,t,r)}else a=Dy(n,e,t,r,i);return Ul(a)}N0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(vf(e,n|1),Mn(e,Rt()),!(Ze&6)&&(Cs=Rt()+500,mr()))}break;case 13:Ur(function(){var i=Ii(t,1);if(i!==null){var r=hn();ii(i,t,1,r)}}),Zf(t,1)}};_f=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=hn();ii(e,t,134217728,n)}Zf(t,134217728)}};P0=function(t){if(t.tag===13){var e=or(t),n=Ii(t,e);if(n!==null){var i=hn();ii(n,t,e,i)}Zf(t,e)}};L0=function(){return rt};D0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Fu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ec(i);if(!r)throw Error(re(90));u0(i),Cu(i,r)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};_0=Xf;y0=Ur;var Iy={usingClientEntryPoint:!1,Events:[Xa,ls,ec,x0,v0,Xf]},Ys={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Kl=_o.inject(Uy),hi=_o}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(re(200));return Py(t,e,null,n)};Pn.createRoot=function(t,e){if(!Qf(t))throw Error(re(299));var n=!1,i="",r=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Ca(t.nodeType===8?t.parentNode:t),new Jf(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Ur(t)};Pn.hydrate=function(t,e,n){if(!cc(e))throw Error(re(200));return uc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=tx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ex(e,null,t,1,n??null,r,!1,s,a),t[Di]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lc(e)};Pn.render=function(t,e,n){if(!cc(e))throw Error(re(200));return uc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!cc(t))throw Error(re(40));return t._reactRootContainer?(Ur(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Pn.unstable_batchedUpdates=Xf;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return uc(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),n0.exports=Pn;var Fy=n0.exports,Vp=Fy;Mu.createRoot=Vp.createRoot,Mu.hydrateRoot=Vp.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ix=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ne.createElement("svg",{ref:l,...ky,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ix("lucide",r),...o},[...a.map(([u,h])=>ne.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(t,e)=>{const n=ne.forwardRef(({className:i,...r},s)=>ne.createElement(By,{ref:s,iconNode:e,className:ix(`lucide-${Oy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=Ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=Ye("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=Ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=Ye("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Ye("CloudDownload",[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Ye("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=Ye("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=Ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Ye("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Ye("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=Ye("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Ye("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Ye("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Ye("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Ye("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=Ye("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=Ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Ye("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Ye("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=Ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Ye("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Ye("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=Ye("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=Ye("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Ky({activeTab:t,setActiveTab:e,isPlaying:n}){const i=[{id:"studio",label:"DAW Studio",icon:nh},{id:"mixer",label:"Console Mixer",icon:ih},{id:"ai_agents",label:"AI Agents (10)",icon:rx,badge:"AUTO"},{id:"dsp_rack",label:"DSP Rack",icon:ax},{id:"surround",label:"Surround 5.1/7.1",icon:Fl},{id:"synths",label:"Synths & MIDI",icon:ox},{id:"mastering",label:"Mastering Suite",icon:Ka},{id:"analysis",label:"Acoustic RTA",icon:$a},{id:"recording",label:"Live Mic Rec",icon:dc},{id:"exports",label:"Export & QC",icon:sx}];return c.jsx("header",{className:"bg-[#0b0e17] border-b border-slate-800/80 sticky top-0 z-50",children:c.jsxs("div",{className:"max-w-[1920px] mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-4",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:c.jsx(lx,{className:"w-5 h-5 text-black stroke-[2.5]"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"font-extrabold tracking-wider text-base text-white font-mono",children:"SONIQ AI"}),c.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800",children:"PRO v1.0"})]}),c.jsx("p",{className:"text-[11px] text-slate-400 font-mono",children:"Autonomous Studio & Surround Engineering"})]})]}),c.jsx("nav",{className:"flex items-center space-x-1 overflow-x-auto py-1",children:i.map(r=>{const s=r.icon,a=t===r.id;return c.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${a?"bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10":"text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent"}`,children:[c.jsx(s,{className:`w-3.5 h-3.5 ${a?"text-cyan-400":"text-slate-500"}`}),c.jsx("span",{children:r.label}),r.badge&&c.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-violet-950 text-violet-300 border border-violet-800",children:r.badge})]},r.id)})}),c.jsxs("div",{className:"hidden lg:flex items-center space-x-3 text-[11px] font-mono",children:[c.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60",children:[c.jsx(fc,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"64-bit Float DSP"})]}),c.jsx("div",{className:"text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800",children:c.jsx("span",{children:"48k/96k/192k Hz"})})]})]})})}const dx=()=>{if(typeof window<"u"){const t=localStorage.getItem("SONIQ_API_BASE");if(t)return t.replace(/\/+$/,"");const e=window.location.hostname;if(e!=="localhost"&&e!=="127.0.0.1"&&!e.startsWith("192.168."))return"https://n8n.rydetechglobal.com/soniq-api"}return""},gt=t=>{const e=dx(),n=t.startsWith("/")?t:`/${t}`;return e?`${e}${n}`:n},fn=t=>t?t.startsWith("http://")||t.startsWith("https://")||t.startsWith("blob:")?t:gt(t):"",Mt=async(t,e={})=>{const n=await fetch(t,e),i=await n.text();try{const r=JSON.parse(i);if(!n.ok)throw new Error(r.detail||`Server error (${n.status})`);return r}catch(r){throw n.ok?r:new Error(`API error (${n.status}): The backend returned HTML instead of JSON. Ensure the backend is reachable at ${dx()||"localhost"}.`)}};class Zy{constructor(){this.ctx=null,this.masterGain=null,this.analyser=null,this.tracks=new Map,this.isPlaying=!1,this.startTime=0,this.pauseOffset=0,this.mediaRecorder=null,this.recordedChunks=[],this.isBinauralMode=!1,this.spatialPos={x:0,y:.4,z:0},this.spatialPannerNode=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85;try{this.spatialPannerNode=this.ctx.createPanner(),this.spatialPannerNode.panningModel="HRTF",this.spatialPannerNode.distanceModel="inverse",this.spatialPannerNode.refDistance=1,this.spatialPannerNode.maxDistance=1e3,this.spatialPannerNode.rolloffFactor=.8,this.spatialPannerNode.coneInnerAngle=360,this.ctx.listener.forwardX?(this.ctx.listener.forwardX.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.forwardY.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.forwardZ.setValueAtTime(-1,this.ctx.currentTime),this.ctx.listener.upX.setValueAtTime(0,this.ctx.currentTime),this.ctx.listener.upY.setValueAtTime(1,this.ctx.currentTime),this.ctx.listener.upZ.setValueAtTime(0,this.ctx.currentTime)):this.ctx.listener.setOrientation&&this.ctx.listener.setOrientation(0,0,-1,0,1,0)}catch(n){console.warn("HRTF Panner initialization fallback:",n)}this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}setBinauralSpatialPosition(e,n,i=0){if(this.init(),this.spatialPos={x:e,y:n,z:i},!this.ctx||!this.spatialPannerNode)return;const r=e*2.8,s=i*2.2,a=-n*2.8,o=this.ctx.currentTime;try{this.spatialPannerNode.positionX?(this.spatialPannerNode.positionX.setTargetAtTime(r,o,.02),this.spatialPannerNode.positionY.setTargetAtTime(s,o,.02),this.spatialPannerNode.positionZ.setTargetAtTime(a,o,.02)):this.spatialPannerNode.setPosition&&this.spatialPannerNode.setPosition(r,s,a)}catch{}}setBinauralMode(e){if(this.isBinauralMode=!!e,this.isPlaying){const n=this.ctx.currentTime-this.startTime;this.playAll(n)}}async loadTrackAudio(e,n){this.init();try{const i=fn(n),s=await(await fetch(i)).arrayBuffer(),a=await this.ctx.decodeAudioData(s),o=this.tracks.get(e);return this.tracks.set(e,{buffer:a,volume:o?o.volume:1,pan:o?o.pan:0,mute:o?o.mute:!1,solo:o?o.solo:!1,source:null,gainNode:null,panNode:null}),a}catch(i){return console.error(`Failed to load audio for track ${e}:`,i),null}}playAll(e=0){this.init(),this.stopAll(),this.isPlaying=!0,this.startTime=this.ctx.currentTime-e,this.pauseOffset=e;const n=Array.from(this.tracks.values()).some(i=>i.solo);this.tracks.forEach((i,r)=>{if(!i.buffer)return;const s=this.ctx.createBufferSource();s.buffer=i.buffer;const a=this.ctx.createGain(),o=n?i.solo:!i.mute;a.gain.value=o?i.volume:0;let l=null;if(this.ctx.createStereoPanner?(l=this.ctx.createStereoPanner(),l.pan.value=i.pan,s.connect(l),l.connect(a)):s.connect(a),this.isBinauralMode&&this.spatialPannerNode){a.connect(this.spatialPannerNode);try{this.spatialPannerNode.disconnect()}catch{}this.spatialPannerNode.connect(this.masterGain)}else a.connect(this.masterGain);const u=Math.min(e,i.buffer.duration);s.start(0,u),i.source=s,i.gainNode=a,i.panNode=l})}pauseAll(){this.isPlaying&&(this.pauseOffset=this.ctx.currentTime-this.startTime,this.stopAll(),this.isPlaying=!1)}stopAll(){this.tracks.forEach(e=>{if(e.source){try{e.source.stop(),e.source.disconnect()}catch{}e.source=null}}),this.isPlaying=!1}setTrackVolume(e,n){const i=this.tracks.get(e);i&&(i.volume=n,i.gainNode&&!i.mute&&i.gainNode.gain.setValueAtTime(n,this.ctx?this.ctx.currentTime:0))}setTrackPan(e,n){const i=this.tracks.get(e);i&&(i.pan=Math.max(-1,Math.min(1,n)),i.panNode&&i.panNode.pan.setValueAtTime(i.pan,this.ctx?this.ctx.currentTime:0))}setTrackMute(e,n){const i=this.tracks.get(e);i&&(i.mute=n,this.updateSoloMuteStates())}setTrackSolo(e,n){const i=this.tracks.get(e);i&&(i.solo=n,this.updateSoloMuteStates())}updateSoloMuteStates(){const e=Array.from(this.tracks.values()).some(n=>n.solo);this.tracks.forEach(n=>{if(n.gainNode){const i=e?n.solo:!n.mute;n.gainNode.gain.setValueAtTime(i?n.volume:0,this.ctx?this.ctx.currentTime:0)}})}setMasterVolume(e){this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(e,this.ctx.currentTime)}getTelemetry(){if(!this.analyser)return{peak:-60,rms:-60,fftData:new Uint8Array(64)};const e=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(e);let n=0,i=0;for(let l=0;l<e.length;l++){const u=Math.abs(e[l]);u>i&&(i=u),n+=u*u}const r=Math.sqrt(n/e.length),s=i>1e-4?20*Math.log10(i):-60,a=r>1e-4?20*Math.log10(r):-60,o=new Uint8Array(64);return this.analyser.getByteFrequencyData(o),{peak:Math.round(s),rms:Math.round(a),fftData:o}}async startRecording(){this.init();const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});this.recordedChunks=[],this.mediaRecorder=new MediaRecorder(e),this.mediaRecorder.ondataavailable=n=>{n.data.size>0&&this.recordedChunks.push(n.data)},this.mediaRecorder.start()}async stopRecording(){return new Promise(e=>{if(!this.mediaRecorder)return e(null);this.mediaRecorder.onstop=()=>{const n=new Blob(this.recordedChunks,{type:"audio/wav"});e(n)},this.mediaRecorder.stop(),this.mediaRecorder.stream.getTracks().forEach(n=>n.stop())})}}const ut=new Zy;function Jy({isPlaying:t,onPlay:e,onPause:n,onStop:i,bpm:r=120,setBpm:s,onLoadDemo:a,loadingDemo:o}){const[l,u]=ne.useState(0),[h,p]=ne.useState(.85),[f,g]=ne.useState({peak:-60,rms:-60});ne.useEffect(()=>{let m;return t?m=setInterval(()=>{u(M=>M+.1);const y=ut.getTelemetry();g(y)},100):g({peak:-60,rms:-60}),()=>clearInterval(m)},[t]);const _=()=>{u(0),i()},S=m=>{const y=parseFloat(m.target.value);p(y),ut.setMasterVolume(y)},x=m=>{const y=Math.floor(m/60),M=Math.floor(m%60),A=Math.floor(m%1*100);return`${String(y).padStart(2,"0")}:${String(M).padStart(2,"0")}.${String(A).padStart(2,"0")}`},d=m=>{const y=r/60,M=Math.floor(m*y),A=Math.floor(M/4)+1,b=M%4+1;return`${A}.${b}.1`};return c.jsxs("div",{className:"bg-[#0e111a] border-t border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-50",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:_,className:"p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors",title:"Stop (Return to zero)",children:c.jsx(cx,{className:"w-4 h-4"})}),t?c.jsx("button",{onClick:n,className:"p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500/30 transition-colors",title:"Pause",children:c.jsx(Wy,{className:"w-5 h-5 fill-current"})}):c.jsx("button",{onClick:e,className:"p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors",title:"Play",children:c.jsx(Xy,{className:"w-5 h-5 fill-current"})}),c.jsx("button",{onClick:()=>{},className:"p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors",title:"Loop Playback",children:c.jsx(qy,{className:"w-4 h-4"})}),c.jsx("button",{onClick:()=>{},className:"p-2 rounded-lg bg-slate-800/80 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors",title:"Record Arm",children:c.jsx(th,{className:"w-4 h-4 fill-rose-600/60"})})]}),c.jsxs("div",{className:"flex items-center space-x-3 bg-black/60 px-4 py-1.5 rounded-lg border border-slate-800 font-mono text-center",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Timecode"}),c.jsx("div",{className:"text-sm font-bold text-cyan-400 tracking-wider",children:x(l)})]}),c.jsx("div",{className:"w-px h-6 bg-slate-800"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Bar.Beat"}),c.jsx("div",{className:"text-sm font-bold text-violet-400 tracking-wider",children:d(l)})]}),c.jsx("div",{className:"w-px h-6 bg-slate-800"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"Tempo"}),c.jsxs("div",{className:"text-sm font-bold text-slate-200",children:[r," BPM"]})]})]}),c.jsx("div",{className:"flex items-center space-x-2",children:c.jsxs("button",{onClick:a,disabled:o,className:"flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-violet-900/30 transition-all disabled:opacity-50",children:[c.jsx(Ya,{className:"w-3.5 h-3.5 animate-pulse"}),c.jsx("span",{children:o?"Generating Demo...":"Load Studio Demo Project"})]})}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx(Ka,{className:"w-4 h-4 text-slate-400"}),c.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",value:h,onChange:S,className:"w-24 h-1.5 bg-slate-800 rounded-lg cursor-pointer"}),c.jsxs("div",{className:"flex flex-col space-y-0.5",children:[c.jsx("div",{className:"w-16 h-2 bg-slate-900 rounded-sm overflow-hidden flex",children:c.jsx("div",{className:`h-full transition-all duration-75 ${f.peak>-3?"bg-rose-500":f.peak>-12?"bg-amber-400":"bg-emerald-400"}`,style:{width:`${Math.max(0,Math.min(100,(f.peak+60)*1.66))}%`}})}),c.jsx("span",{className:"text-[9px] font-mono text-slate-500 text-right",children:f.peak>-59?`${f.peak} dB`:"-inf"})]})]})]})}function Qy({tracks:t=[],onUpdateTrack:e,onAddTrack:n,onUploadFile:i,activeTrackId:r,setActiveTrackId:s,onOpenQuickFX:a}){const[o,l]=ne.useState(1),u=ne.useRef(null),h=p=>{const f=p.target.files[0];f&&i(f)};return c.jsxs("div",{className:"flex-1 flex flex-col bg-[#080a10] border border-slate-800/80 rounded-xl overflow-hidden m-4 shadow-2xl",children:[c.jsxs("div",{className:"bg-[#0f131d] px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsxs("span",{className:"font-mono font-bold text-slate-300 uppercase tracking-wider text-[11px]",children:["Multitrack Session (",t.length," Tracks)"]}),c.jsx("span",{className:"text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 font-mono",children:"Non-Destructive 64-bit"})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[t.length>0&&a&&c.jsxs("button",{onClick:()=>{const p=t.find(f=>f.id===r)||t[0];p&&a(p)},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 text-cyan-300 border border-cyan-500/40 transition-colors font-bold",children:[c.jsx(kl,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"1-Click Quick FX"})]}),c.jsx("input",{type:"file",ref:u,onChange:h,className:"hidden",accept:".wav,.flac,.mp3,.aiff,.ogg,.opus,.m4a"}),c.jsxs("button",{onClick:()=>{var p;return(p=u.current)==null?void 0:p.click()},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors",children:[c.jsx(Hy,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"Import Audio File"})]}),c.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 transition-colors",children:[c.jsx(Ol,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Add Audio Track"})]})]})]}),c.jsx("div",{className:"flex-1 overflow-y-auto",children:t.length===0?c.jsxs("div",{className:"h-64 flex flex-col items-center justify-center text-center p-6 space-y-3",children:[c.jsx(jy,{className:"w-12 h-12 text-slate-700 animate-pulse"}),c.jsx("div",{className:"text-slate-400 text-sm font-semibold",children:"No Tracks In Session"}),c.jsx("p",{className:"text-slate-600 text-xs max-w-md",children:'Click "Load Studio Demo Project" below, or import your own audio files to begin autonomous editing and mixing.'})]}):c.jsx("div",{className:"divide-y divide-slate-850",children:t.map(p=>{const f=r===p.id;return c.jsxs("div",{onClick:()=>s(p.id),className:`flex transition-colors cursor-pointer ${f?"bg-slate-900/90":"bg-[#0a0d14] hover:bg-slate-900/40"}`,children:[c.jsxs("div",{className:"w-64 p-3 border-r border-slate-800/80 flex flex-col justify-between shrink-0 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("div",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:p.color||"#00f2fe"}}),c.jsx("span",{className:"font-mono text-xs font-bold text-slate-200 truncate",children:p.name})]}),c.jsx("span",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400",children:p.category||"Audio"})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400",children:[c.jsx("span",{children:"VOL"}),c.jsx("span",{children:p.volume_db?`${p.volume_db} dB`:"0 dB"})]}),c.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.02",defaultValue:1,onChange:g=>{const _=parseFloat(g.target.value);ut.setTrackVolume(p.id,_),e(p.id,{volume:_})},className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{className:"flex items-center space-x-1.5 pt-1",children:[c.jsx("button",{onClick:g=>{g.stopPropagation();const _=!p.mute;ut.setTrackMute(p.id,_),e(p.id,{mute:_})},className:`px-2 py-0.5 text-[10px] font-bold rounded ${p.mute?"bg-amber-500 text-black":"bg-slate-800 text-slate-400 hover:text-white"}`,children:"M"}),c.jsx("button",{onClick:g=>{g.stopPropagation();const _=!p.solo;ut.setTrackSolo(p.id,_),e(p.id,{solo:_})},className:`px-2 py-0.5 text-[10px] font-bold rounded ${p.solo?"bg-cyan-400 text-black":"bg-slate-800 text-slate-400 hover:text-white"}`,children:"S"}),c.jsx("button",{onClick:g=>g.stopPropagation(),className:"p-1 rounded bg-slate-800 text-slate-500 hover:text-rose-400",title:"Record Arm",children:c.jsx(th,{className:"w-3 h-3 fill-rose-600/40"})}),a&&c.jsxs("button",{onClick:g=>{g.stopPropagation(),a(p)},className:"flex items-center space-x-1 px-2 py-0.5 text-[10px] font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-700 hover:bg-cyan-900 transition-colors ml-auto",title:"Instant Effects & Mastering",children:[c.jsx(kl,{className:"w-2.5 h-2.5 text-cyan-400"}),c.jsx("span",{children:"FX"})]})]})]}),c.jsx("div",{className:"flex-1 p-3 flex items-center relative overflow-hidden bg-black/30",children:c.jsxs("div",{className:"w-full h-16 rounded-lg border border-slate-800/80 relative flex items-center px-2 overflow-hidden",style:{backgroundColor:`${p.color||"#00f2fe"}10`,borderColor:`${p.color||"#00f2fe"}40`},children:[c.jsx("div",{className:"w-full h-full flex items-center space-x-0.5",children:(p.waveform||Array.from({length:80}).map((g,_)=>Math.sin(_*.2)*.5+.5)).map((g,_)=>{const S=Math.max(8,Math.min(95,g*100));return c.jsx("div",{className:"flex-1 rounded-sm",style:{height:`${S}%`,backgroundColor:p.color||"#00f2fe"}},_)})}),c.jsxs("div",{className:"absolute top-1 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 rounded",children:[p.name,".wav"]})]})})]},p.id)})})})]})}function eS({tracks:t=[],onUpdateTrack:e}){return c.jsxs("div",{className:"flex-1 flex flex-col bg-[#07090f] p-4 overflow-x-auto",children:[c.jsx("div",{className:"flex items-center justify-between mb-4",children:c.jsxs("div",{children:[c.jsxs("h2",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(ih,{className:"w-4 h-4 text-cyan-400"}),c.jsx("span",{children:"STUDIO MIXING CONSOLE (64-BIT DUAL-PRECISION)"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Direct fader gain staging, rotary pan, inserts, sends, and master summing bus."})]})}),c.jsxs("div",{className:"flex items-stretch space-x-3 pb-6 flex-1 min-h-[500px]",children:[t.map(n=>c.jsxs("div",{className:"w-36 bg-[#0c101a] border border-slate-800 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-lg relative",children:[c.jsxs("div",{className:"text-center pb-2 border-b border-slate-800/80",children:[c.jsx("div",{className:"w-3 h-1 rounded mx-auto mb-1",style:{backgroundColor:n.color||"#00f2fe"}}),c.jsx("div",{className:"font-mono text-xs font-bold text-slate-100 truncate",children:n.name}),c.jsx("div",{className:"text-[10px] font-mono text-slate-500 uppercase",children:n.category})]}),c.jsxs("div",{className:"space-y-1 my-2",children:[c.jsx("div",{className:"text-[8px] font-mono text-slate-500 uppercase",children:"Inserts"}),c.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 truncate",children:"1. Parametric EQ"}),c.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-800 truncate",children:"2. Opto Compressor"})]}),c.jsxs("div",{className:"my-2 text-center",children:[c.jsxs("div",{className:"text-[9px] font-mono text-slate-400",children:["PAN: ",n.pan||0]}),c.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.05",defaultValue:n.pan||0,onChange:i=>{const r=parseFloat(i.target.value);ut.setTrackPan(n.id,r),e(n.id,{pan:r})},className:"w-20 h-1 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{className:"flex-1 flex justify-center items-center space-x-3 my-4",children:[c.jsx("div",{className:"h-44 flex items-center",children:c.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",defaultValue:n.volume||1,onChange:i=>{const r=parseFloat(i.target.value);ut.setTrackVolume(n.id,r),e(n.id,{volume:r})},className:"h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"})}),c.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-850 overflow-hidden flex flex-col-reverse p-0.5",children:c.jsx("div",{className:"w-full bg-emerald-400 rounded-sm h-[65%]"})})]}),c.jsxs("div",{className:"flex items-center space-x-1.5 pt-2 border-t border-slate-800/80",children:[c.jsx("button",{onClick:()=>{const i=!n.mute;ut.setTrackMute(n.id,i),e(n.id,{mute:i})},className:`flex-1 py-1 text-[10px] font-bold rounded ${n.mute?"bg-amber-500 text-black":"bg-slate-800 text-slate-400"}`,children:"MUTE"}),c.jsx("button",{onClick:()=>{const i=!n.solo;ut.setTrackSolo(n.id,i),e(n.id,{solo:i})},className:`flex-1 py-1 text-[10px] font-bold rounded ${n.solo?"bg-cyan-400 text-black":"bg-slate-800 text-slate-400"}`,children:"SOLO"})]}),c.jsx("div",{className:"text-center mt-2 text-[10px] font-mono text-cyan-400 font-bold",children:n.volume_db||"0.0 dB"})]},n.id)),c.jsxs("div",{className:"w-44 bg-[#111624] border-2 border-cyan-500/40 rounded-xl p-3 flex flex-col justify-between shrink-0 shadow-2xl relative",children:[c.jsxs("div",{className:"text-center pb-2 border-b border-cyan-500/30",children:[c.jsx("div",{className:"font-mono text-xs font-black text-cyan-300 tracking-wider",children:"MASTER SUM"}),c.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"BUS 1-2 (STEREO)"})]}),c.jsxs("div",{className:"space-y-1 my-2",children:[c.jsx("div",{className:"text-[8px] font-mono text-slate-400 uppercase",children:"Master Chain"}),c.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-emerald-300 border border-emerald-900 truncate",children:"True-Peak Limiter"}),c.jsx("div",{className:"text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-900 truncate",children:"Tape Saturation"})]}),c.jsxs("div",{className:"flex-1 flex justify-center items-center space-x-3 my-4",children:[c.jsx("div",{className:"h-44 flex items-center",children:c.jsx("input",{type:"range",min:"0.0",max:"1.2",step:"0.01",defaultValue:.85,onChange:n=>ut.setMasterVolume(parseFloat(n.target.value)),className:"h-36 -rotate-90 w-36 bg-slate-800 rounded-lg cursor-pointer"})}),c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5",children:c.jsx("div",{className:"w-full bg-cyan-400 rounded-sm h-[72%]"})}),c.jsx("div",{className:"w-2.5 h-40 bg-slate-950 rounded border border-slate-800 overflow-hidden flex flex-col-reverse p-0.5",children:c.jsx("div",{className:"w-full bg-cyan-400 rounded-sm h-[70%]"})})]})]}),c.jsx("div",{className:"text-center text-[10px] font-mono text-emerald-400 font-bold",children:"-0.1 dBTP CEILING"})]})]})]})}function tS({activeFile:t,tracks:e=[],onRefreshTracks:n}){const[i,r]=ne.useState(""),[s,a]=ne.useState(!1),[o,l]=ne.useState(null),[u,h]=ne.useState(null),[p,f]=ne.useState(""),g=["Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC.","Analyze frequency balance and propose an editable multitrack mix.","Tune vocals, apply 6.5kHz de-essing, and master for streaming at -14 LUFS.","De-noise old recording and repair peak clipping."],_=async d=>{const m=d||i;if(!m)return;const y=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!y){alert("Please load a demo project or upload an audio file first.");return}a(!0),f("Agent 10: Formulating Autonomous Multi-Agent Production Plan...");try{const M=await Mt(gt("/api/v1/audio/orchestrate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:m,file_path:y})});l(M),f("Autonomous Production Pipeline Executed Successfully!")}catch(M){f(`Error: ${M.message}`)}finally{a(!1)}},S=async(d,m,y)=>{const M=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!M){alert("Please load a demo project or upload an audio file first.");return}a(!0),f(`Executing ${d}...`);try{let A;if(m==="/api/v1/audio/mix-proposal")A=await Mt(gt(m),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});else{const b=new FormData;b.append("file_path",M),A=await Mt(gt(m),{method:"POST",body:b})}h({agentId:d,data:A}),f(`${d} completed successfully!`)}catch(A){f(`Error: ${A.message}`)}finally{a(!1)}},x=[{id:"Agent 01: Audio Analyst",role:"Acoustic inspection, LUFS, True Peak, Phase",endpoint:"/api/v1/audio/analyze",color:"text-cyan-400",border:"border-cyan-800"},{id:"Agent 02: Stem Separator",role:"Harmonic/Percussive stem isolation (Vocals, Drums, Bass, Other)",endpoint:"/api/v1/audio/separate-stems",color:"text-violet-400",border:"border-violet-800"},{id:"Agent 03: Audio Restoration",role:"Spectral de-noise, 50/60Hz notch de-hum, de-clip",endpoint:"/api/v1/audio/restore",color:"text-emerald-400",border:"border-emerald-800"},{id:"Agent 04: Mixing Engineer",role:"Multitrack gain staging, pan, EQ and dynamics proposal",endpoint:"/api/v1/audio/mix-proposal",color:"text-amber-400",border:"border-amber-800"},{id:"Agent 05: Music Arranger",role:"BPM detection, musical key, song sections",endpoint:"/api/v1/audio/arrangement",color:"text-pink-400",border:"border-pink-800"},{id:"Agent 06: Vocal Engineer",role:"Pitch tuning, sibilance de-essing, opto compression",endpoint:"/api/v1/audio/vocal-process",color:"text-indigo-400",border:"border-indigo-800"},{id:"Agent 07: Mastering Engineer",role:"EBU R128 / ITU-R BS.1770 loudness normalizer",endpoint:"/api/v1/audio/master",color:"text-yellow-400",border:"border-yellow-800"},{id:"Agent 08: Surround Engineer",role:"5.1 / 7.1 VBAP spatial upmix and LFE crossover",endpoint:"/api/v1/audio/surround",color:"text-teal-400",border:"border-teal-800"},{id:"Agent 09: Quality Control",role:"Pre-flight delivery verification & clipping check",endpoint:"/api/v1/audio/qc-audit",color:"text-rose-400",border:"border-rose-800"}];return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"bg-gradient-to-r from-violet-950/60 via-slate-900 to-cyan-950/60 p-6 rounded-2xl border border-slate-800 shadow-2xl space-y-4",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:c.jsx(rx,{className:"w-6 h-6 text-black stroke-[2.5]"})}),c.jsxs("div",{children:[c.jsxs("h1",{className:"text-lg font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx("span",{children:"AGENT 10: PRODUCTION MANAGER"}),c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800",children:"SOVEREIGN LLM + DETERMINISTIC ACOUSTICS"})]}),c.jsx("p",{className:"text-xs text-slate-400",children:"Instruct the multi-agent system in natural language. Formulates production plans and executes them through actual DSP tools."})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:i,onChange:d=>r(d.target.value),placeholder:"e.g. Clean background noise, separate stems, pan into 5.1 surround and master to 24-bit 96kHz FLAC.",className:"flex-1 bg-black/80 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"}),c.jsxs("button",{onClick:()=>_(i),disabled:s,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all shrink-0",children:[c.jsx(Ya,{className:"w-4 h-4 fill-black"}),c.jsx("span",{children:s?"Orchestrating...":"Execute Autonomous Plan"})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[c.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"Quick Directives:"}),g.map((d,m)=>c.jsxs("button",{onClick:()=>{r(d),_(d)},className:"text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors",children:['"',d.slice(0,48),'..."']},m))]}),p&&c.jsxs("div",{className:"text-xs font-mono text-cyan-300 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-800/60 flex items-center space-x-2",children:[c.jsx($a,{className:"w-4 h-4 animate-spin text-cyan-400"}),c.jsx("span",{children:p})]})]}),o&&c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("span",{className:"font-mono text-xs font-bold text-cyan-300 flex items-center space-x-2",children:[c.jsx(eh,{className:"w-4 h-4 text-emerald-400"}),c.jsx("span",{children:"Production Plan Execution Complete"})]}),c.jsxs("a",{href:fn(o.download_url),download:!0,className:"flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors",children:[c.jsx(Hr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Download Final Master FLAC"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono",children:o.pipeline_executed.map((d,m)=>c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1",children:[c.jsxs("div",{className:"text-[10px] text-cyan-400 font-bold uppercase",children:["Step ",d.step]}),c.jsx("div",{className:"text-white font-semibold",children:d.agent}),c.jsx("p",{className:"text-[10px] text-slate-400",children:d.description})]},m))})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-sm font-bold text-white font-mono uppercase tracking-wider mb-3",children:"Specialist Autonomous Engineering Agents"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:x.map(d=>c.jsxs("div",{className:`bg-[#0c101a] p-4 rounded-xl border ${d.border} flex flex-col justify-between space-y-3 shadow-lg`,children:[c.jsxs("div",{children:[c.jsx("div",{className:`font-mono text-xs font-bold ${d.color}`,children:d.id}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d.role})]}),c.jsx("button",{onClick:()=>S(d.id,d.endpoint),disabled:s,className:"w-full py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700 transition-colors flex items-center justify-center space-x-2",children:c.jsxs("span",{children:["Trigger ",d.id.split(":")[0]]})})]},d.id))})]}),u&&c.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-slate-800 space-y-2",children:[c.jsxs("div",{className:"text-xs font-bold text-cyan-400 font-mono",children:[u.agentId," Output"]}),c.jsx("pre",{className:"text-[11px] font-mono text-slate-300 bg-slate-950 p-3 rounded-lg overflow-x-auto max-h-60",children:JSON.stringify(u.data,null,2)})]})]})}function nS({activeFile:t,tracks:e=[],onApplyDSP:n}){var y,M;const[i,r]=ne.useState([{type:"highpass",freq:30,gain_db:0,q:.707},{type:"lowshelf",freq:100,gain_db:2.5,q:.707},{type:"peaking",freq:350,gain_db:-1.5,q:1.2},{type:"peaking",freq:1e3,gain_db:1,q:1},{type:"peaking",freq:3500,gain_db:2,q:1.2},{type:"highshelf",freq:1e4,gain_db:2,q:.707}]),[s,a]=ne.useState({threshold_db:-18,ratio:3.5,attack_ms:15,release_ms:120,makeup_gain_db:2}),[o,l]=ne.useState({room_size:.7,damping:.3,wet_level:.25}),[u,h]=ne.useState({drive_db:3,mode:"tape"}),[p,f]=ne.useState(115),[g,_]=ne.useState(!1),[S,x]=ne.useState(null),d=ne.useRef(null);ne.useEffect(()=>{const A=d.current;if(!A)return;const b=A.getContext("2d"),v=A.width,E=A.height;b.clearRect(0,0,v,E),b.strokeStyle="#1e2638",b.lineWidth=1;for(let C of[50,100,250,500,1e3,2500,5e3,1e4,2e4]){const R=Math.log10(C/20)/Math.log10(1e3)*v;b.beginPath(),b.moveTo(R,0),b.lineTo(R,E),b.stroke()}b.strokeStyle="#334155",b.beginPath(),b.moveTo(0,E/2),b.lineTo(v,E/2),b.stroke(),b.strokeStyle="#00f2fe",b.lineWidth=2.5,b.beginPath();for(let C=0;C<v;C++){const R=20*Math.pow(1e3,C/v);let P=0;i.forEach(H=>{const L=Math.abs(Math.log10(R/H.freq));H.type==="peaking"?P+=H.gain_db*Math.exp(-L*L*H.q*3):(H.type==="lowshelf"&&R<H.freq||H.type==="highshelf"&&R>H.freq)&&(P+=H.gain_db)});const I=E/2-P*4;C===0?b.moveTo(C,I):b.lineTo(C,I)}b.stroke()},[i]);const m=async()=>{const A=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!A){alert("Please load a demo project or upload an audio file first.");return}_(!0);try{const b=[{type:"eq",bands:i},{type:"compressor",...s},{type:"reverb",...o},{type:"saturation",...u},{type:"widener",width_pct:p}],v=await Mt(gt("/api/v1/dsp/process"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:A,operations:b})});x(v)}catch(b){alert(`DSP error: ${b.message}`)}finally{_(!1)}};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(ax,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"STUDIO DSP HARDWARE-EMULATION RACK"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"64-bit float precision modules: Parametric EQ, Opto-Compressor, Tube/Tape Saturation, Algorithmic Reverb, Stereo Imager."})]}),c.jsx("button",{onClick:m,disabled:g,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:g?"Processing 64-bit Audio...":"Apply DSP Rack to Track"})]}),c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-mono text-xs font-bold text-cyan-300",children:"8-Band Studio Parametric Equalizer (RBJ Biquad Cookbook)"}),c.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"20 Hz - 20 kHz Frequency Spectrum"})]}),c.jsx("canvas",{ref:d,width:800,height:160,className:"w-full h-36 bg-black/60 rounded-xl border border-slate-800"}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-6 gap-3",children:i.map((A,b)=>c.jsxs("div",{className:"bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[c.jsx("div",{className:"text-[10px] text-cyan-400 font-bold uppercase",children:A.type}),c.jsxs("div",{className:"text-[10px] text-slate-400",children:[A.freq," Hz"]}),c.jsx("input",{type:"range",min:"-12",max:"12",step:"0.5",value:A.gain_db,onChange:v=>{const E=[...i];E[b].gain_db=parseFloat(v.target.value),r(E)},className:"w-full h-1 bg-slate-800 rounded cursor-pointer"}),c.jsxs("div",{className:"text-[9px] text-slate-500 text-right",children:[A.gain_db," dB"]})]},b))})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[c.jsx("div",{className:"font-mono text-xs font-bold text-violet-300",children:"Dynamic Optical Compressor"}),c.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsx("span",{children:"Threshold"}),c.jsxs("span",{children:[s.threshold_db," dB"]})]}),c.jsx("input",{type:"range",min:"-40",max:"0",value:s.threshold_db,onChange:A=>a({...s,threshold_db:parseFloat(A.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsx("span",{children:"Ratio"}),c.jsxs("span",{children:[s.ratio,":1"]})]}),c.jsx("input",{type:"range",min:"1",max:"12",step:"0.5",value:s.ratio,onChange:A=>a({...s,ratio:parseFloat(A.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[c.jsx("div",{className:"font-mono text-xs font-bold text-emerald-300",children:"Moorer/Schroeder Reverb"}),c.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsx("span",{children:"Room Size"}),c.jsxs("span",{children:[Math.round(o.room_size*100),"%"]})]}),c.jsx("input",{type:"range",min:"0.1",max:"0.95",step:"0.05",value:o.room_size,onChange:A=>l({...o,room_size:parseFloat(A.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsx("span",{children:"Wet Mix"}),c.jsxs("span",{children:[Math.round(o.wet_level*100),"%"]})]}),c.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:o.wet_level,onChange:A=>l({...o,wet_level:parseFloat(A.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3",children:[c.jsx("div",{className:"font-mono text-xs font-bold text-amber-300",children:"Harmonic Saturation & Stereo Imager"}),c.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsxs("span",{children:["Drive (",u.mode.toUpperCase(),")"]}),c.jsxs("span",{children:[u.drive_db," dB"]})]}),c.jsx("input",{type:"range",min:"0",max:"12",step:"0.5",value:u.drive_db,onChange:A=>h({...u,drive_db:parseFloat(A.target.value)}),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[c.jsx("span",{children:"Stereo Width"}),c.jsxs("span",{children:[p,"%"]})]}),c.jsx("input",{type:"range",min:"50",max:"200",step:"5",value:p,onChange:A=>f(parseInt(A.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer"})]})]})]})]}),S&&c.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-emerald-500/40 flex items-center justify-between",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("div",{className:"text-xs font-bold text-emerald-400 font-mono",children:"DSP Rack Processed Successfully"}),c.jsxs("div",{className:"text-[10px] text-slate-400 font-mono",children:["Peak: ",(y=S.metrics)==null?void 0:y.sample_peak_dbfs," dBFS • Integrated: ",(M=S.metrics)==null?void 0:M.integrated_lufs," LUFS"]})]}),c.jsxs("a",{href:fn(S.download_url),download:!0,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors",children:[c.jsx(Hr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Download Processed WAV"})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="187",iS=0,Xp=1,rS=2,rl=1,sS=2,oa=3,Fr=0,En=1,Qn=2,Ss=0,_a=1,qp=2,$p=3,Yp=4,aS=5,ns=100,oS=101,lS=102,cS=103,uS=104,dS=200,fS=201,hS=202,pS=203,fx=204,hx=205,mS=206,gS=207,xS=208,vS=209,_S=210,yS=211,SS=212,MS=213,ES=214,md=0,gd=1,xd=2,ka=3,vd=4,_d=5,yd=6,Sd=7,px=0,wS=1,bS=2,Ni=0,mx=1,gx=2,xx=3,vx=4,_x=5,yx=6,Sx=7,Mx=300,Ns=301,Ba=302,Xc=303,qc=304,Md=1e3,Ri=1001,Ed=1002,$t=1003,TS=1004,Mo=1005,_n=1006,$c=1007,Qi=1008,An=1009,Ex=1010,wx=1011,za=1012,sh=1013,gi=1014,di=1015,xi=1016,ah=1017,oh=1018,Ps=1020,bx=35902,Tx=35899,Ax=1021,Rx=1022,fi=1023,dr=1026,er=1027,Cx=1028,lh=1029,Or=1030,ch=1031,uh=1033,sl=33776,al=33777,ol=33778,ll=33779,wd=35840,bd=35841,Td=35842,Ad=35843,Rd=36196,Cd=37492,Nd=37496,Pd=37488,Ld=37489,Bl=37490,Dd=37491,Id=37808,Ud=37809,Fd=37810,Od=37811,kd=37812,Bd=37813,zd=37814,Hd=37815,Gd=37816,Vd=37817,jd=37818,Wd=37819,Xd=37820,qd=37821,$d=36492,Yd=36494,Kd=36495,Zd=36283,Jd=36284,zl=36285,Qd=36286,AS=3200,ef=0,RS=1,Ki="",On="srgb",Hl="srgb-linear",Gl="linear",it="srgb",Yc=7680,CS=519,NS=512,PS=513,LS=514,Nx=515,DS=516,IS=517,Px=518,Lx=519,US=35044,Kp="300 es",ti=2e3,Ha=2001;function FS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OS(){const t=Vl("canvas");return t.style.display="block",t}const Zp={};function Jp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Dx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=Dx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=Dx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function cl(...t){const e=t.join(" ");e in Zp||(Zp[e]=!0,De(...t))}function kS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const BS={[md]:md,[xd]:yd,[vd]:vd,[ka]:_d,[gd]:gd,[yd]:xd,[Sd]:Sd,[_d]:ka};class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=Math.PI/180,tf=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function zS(t,e){return(t%e+e)%e}function Zc(t,e,n){return(1-n)*t+n*e}function HS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function GS(t,e){if(e.constructor===Float32Array)return t;const n=dh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function VS(t,e){if(e.constructor===Float32Array)return t;const n=dh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const yh=class yh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;let Xe=yh;class Os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],g=s[a+1],_=s[a+2],S=s[a+3];if(p!==S||l!==f||u!==g||h!==_){let x=l*f+u*g+h*_+p*S;x<0&&(f=-f,g=-g,_=-_,S=-S,x=-x);let d=1-o;if(x<.9995){const m=Math.acos(x),y=Math.sin(m);d=Math.sin(d*m)/y,o=Math.sin(o*m)/y,l=l*d+f*o,u=u*d+g*o,h=h*d+_*o,p=p*d+S*o}else{l=l*d+f*o,u=u*d+g*o,h=h*d+_*o,p=p*d+S*o;const m=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=m,u*=m,h*=m,p*=m}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+h*p+l*g-u*f,e[n+1]=l*_+h*f+u*p-o*g,e[n+2]=u*_+h*g+o*f-l*p,e[n+3]=h*_-o*p-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*p+u*g*_,this._y=u*g*p-f*h*_,this._z=u*h*_+f*g*p,this._w=u*h*p-f*g*_;break;case"YXZ":this._x=f*h*p+u*g*_,this._y=u*g*p-f*h*_,this._z=u*h*_-f*g*p,this._w=u*h*p+f*g*_;break;case"ZXY":this._x=f*h*p-u*g*_,this._y=u*g*p+f*h*_,this._z=u*h*_+f*g*p,this._w=u*h*p-f*g*_;break;case"ZYX":this._x=f*h*p-u*g*_,this._y=u*g*p+f*h*_,this._z=u*h*_-f*g*p,this._w=u*h*p+f*g*_;break;case"YZX":this._x=f*h*p+u*g*_,this._y=u*g*p+f*h*_,this._z=u*h*_-f*g*p,this._w=u*h*p-f*g*_;break;case"XZY":this._x=f*h*p-u*g*_,this._y=u*g*p-f*h*_,this._z=u*h*_+f*g*p,this._w=u*h*p+f*g*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sh=class Sh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;let G=Sh;const Jc=new G,Qp=new Os,Mh=class Mh{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],f=i[2],g=i[5],_=i[8],S=r[0],x=r[3],d=r[6],m=r[1],y=r[4],M=r[7],A=r[2],b=r[5],v=r[8];return s[0]=a*S+o*m+l*A,s[3]=a*x+o*y+l*b,s[6]=a*d+o*M+l*v,s[1]=u*S+h*m+p*A,s[4]=u*x+h*y+p*b,s[7]=u*d+h*M+p*v,s[2]=f*S+g*m+_*A,s[5]=f*x+g*y+_*b,s[8]=f*d+g*M+_*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*l-h*s,g=u*s-a*l,_=n*p+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*u-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-u*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return cl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return cl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return cl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;let Fe=Mh;const Qc=new Fe,em=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const t={enabled:!0,workingColorSpace:Hl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Gl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hl]:{primaries:e,whitePoint:i,transfer:Gl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:it,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const qe=jS();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ms(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class WS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Vl("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XS=0;class fh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?WS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let qS=0;const tu=new G;class pn extends Gr{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Ri,r=Ri,s=_n,a=Qi,o=fi,l=An,u=pn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Za(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Mx;pn.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],f=l[1],g=l[5],_=l[9],S=l[2],x=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+x)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,M=(g+1)/2,A=(d+1)/2,b=(h+f)/4,v=(p+S)/4,E=(_+x)/4;return y>M&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=v/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=E/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=E/s),this.set(i,r,s,n),this}let m=Math.sqrt((x-_)*(x-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(m)<.001&&(m=1),this.x=(x-_)/m,this.y=(p-S)/m,this.z=(f-h)/m,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let Et=Eh;class $S extends Gr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new pn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends $S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ix extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,n,i,r,s,a,o,l,u,h,p,f,g,_,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,f,g,_,S,x)}set(e,n,i,r,s,a,o,l,u,h,p,f,g,_,S,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=g,d[7]=_,d[11]=S,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,g=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=g+_*u,n[5]=f-S*u,n[9]=-o*l,n[2]=S-f*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,g=l*p,_=u*h,S=u*p;n[0]=f+S*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=g*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,g=l*p,_=u*h,S=u*p;n[0]=f-S*o,n[4]=-a*p,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*h,n[9]=S-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,g=a*p,_=o*h,S=o*p;n[0]=l*h,n[4]=_*u-g,n[8]=f*u+S,n[1]=l*p,n[5]=S*u+f,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*u,_=o*l,S=o*u;n[0]=l*h,n[4]=S-f*p,n[8]=_*p+g,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=g*p+_,n[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,g=a*u,_=o*l,S=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=f*p+S,n[5]=a*h,n[9]=g*p-_,n[2]=_*p-g,n[6]=o*h,n[10]=S*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(i,wn),zi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(i,wn)),zi.normalize(),Eo.crossVectors(wn,zi),r[0]=zi.x,r[4]=Eo.x,r[8]=wn.x,r[1]=zi.y,r[5]=Eo.y,r[9]=wn.y,r[2]=zi.z,r[6]=Eo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],f=i[9],g=i[13],_=i[2],S=i[6],x=i[10],d=i[14],m=i[3],y=i[7],M=i[11],A=i[15],b=r[0],v=r[4],E=r[8],C=r[12],R=r[1],P=r[5],I=r[9],H=r[13],L=r[2],W=r[6],z=r[10],O=r[14],k=r[3],F=r[7],V=r[11],Z=r[15];return s[0]=a*b+o*R+l*L+u*k,s[4]=a*v+o*P+l*W+u*F,s[8]=a*E+o*I+l*z+u*V,s[12]=a*C+o*H+l*O+u*Z,s[1]=h*b+p*R+f*L+g*k,s[5]=h*v+p*P+f*W+g*F,s[9]=h*E+p*I+f*z+g*V,s[13]=h*C+p*H+f*O+g*Z,s[2]=_*b+S*R+x*L+d*k,s[6]=_*v+S*P+x*W+d*F,s[10]=_*E+S*I+x*z+d*V,s[14]=_*C+S*H+x*O+d*Z,s[3]=m*b+y*R+M*L+A*k,s[7]=m*v+y*P+M*W+A*F,s[11]=m*E+y*I+M*z+A*V,s[15]=m*C+y*H+M*O+A*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],f=e[10],g=e[14],_=e[3],S=e[7],x=e[11],d=e[15],m=l*g-u*f,y=o*g-u*p,M=o*f-l*p,A=a*g-u*h,b=a*f-l*h,v=a*p-o*h;return n*(S*m-x*y+d*M)-i*(_*m-x*A+d*b)+r*(_*y-S*A+d*v)-s*(_*M-S*b+x*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],f=e[10],g=e[11],_=e[12],S=e[13],x=e[14],d=e[15],m=n*o-i*a,y=n*l-r*a,M=n*u-s*a,A=i*l-r*o,b=i*u-s*o,v=r*u-s*l,E=h*S-p*_,C=h*x-f*_,R=h*d-g*_,P=p*x-f*S,I=p*d-g*S,H=f*d-g*x,L=m*H-y*I+M*P+A*R-b*C+v*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/L;return e[0]=(o*H-l*I+u*P)*W,e[1]=(r*I-i*H-s*P)*W,e[2]=(S*v-x*b+d*A)*W,e[3]=(f*b-p*v-g*A)*W,e[4]=(l*R-a*H-u*C)*W,e[5]=(n*H-r*R+s*C)*W,e[6]=(x*M-_*v-d*y)*W,e[7]=(h*v-f*M+g*y)*W,e[8]=(a*I-o*R+u*E)*W,e[9]=(i*R-n*I-s*E)*W,e[10]=(_*b-S*M+d*m)*W,e[11]=(p*M-h*b-g*m)*W,e[12]=(o*C-a*P-l*E)*W,e[13]=(n*P-i*C+r*E)*W,e[14]=(S*y-_*A-x*m)*W,e[15]=(h*A-p*y+f*m)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,f=s*u,g=s*h,_=s*p,S=a*h,x=a*p,d=o*p,m=l*u,y=l*h,M=l*p,A=i.x,b=i.y,v=i.z;return r[0]=(1-(S+d))*A,r[1]=(g+M)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(f+d))*b,r[6]=(x+m)*b,r[7]=0,r[8]=(_+y)*v,r[9]=(x-m)*v,r[10]=(1-(f+S))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),l=Wr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);const u=1/a,h=1/o,p=1/l;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,n.setFromRotationMatrix(qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ti,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===ti)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ha)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ti,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===ti)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ha)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$l.prototype.isMatrix4=!0;let vt=$l;const Wr=new G,qn=new vt,KS=new G(0,0,0),ZS=new G(1,1,1),zi=new G,Eo=new G,wn=new G,nm=new vt,im=new Os;class fr{constructor(e=0,n=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const rm=new G,Xr=new Os,_i=new vt,wo=new G,Ks=new G,QS=new G,eM=new Os,sm=new G(1,0,0),am=new G(0,1,0),om=new G(0,0,1),lm={type:"added"},tM={type:"removed"},qr={type:"childadded",child:null},nu={type:"childremoved",child:null};class Zt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new G,n=new fr,i=new Os,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Fe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ks,wo,this.up):_i.lookAt(wo,Ks,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(_i),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),qr.child=e,this.dispatchEvent(qr),qr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tM),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new G(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class la extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),d=this._getHandJoint(u,S);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new la;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=zS(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ru(a,s,e+1/3),this.g=ru(a,s,e),this.b=ru(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return qe.workingToColorSpace(sn.copy(this),e),Math.round($e(sn.r*255,0,255))*65536+Math.round($e(sn.g*255,0,255))*256+Math.round($e(sn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=On){qe.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(bo);const i=Zc(Hi.h,bo.h,n),r=Zc(Hi.s,bo.s,n),s=Zc(Hi.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Ge;Ge.NAMES=Fx;class hh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iM extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new G,yi=new G,su=new G,Si=new G,$r=new G,Yr=new G,cm=new G,au=new G,ou=new G,lu=new G,cu=new Et,uu=new Et,du=new Et;class ei{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),yi.subVectors(i,n),su.subVectors(e,n);const a=$n.dot($n),o=$n.dot(yi),l=$n.dot(su),u=yi.dot(yi),h=yi.dot(su),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,g=(u*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return cu.setScalar(0),uu.setScalar(0),du.setScalar(0),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cu,s.x),a.addScaledVector(uu,s.y),a.addScaledVector(du,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),yi.subVectors(e,n),$n.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),Yr.subVectors(s,i),au.subVectors(e,i);const l=$r.dot(au),u=Yr.dot(au);if(l<=0&&u<=0)return n.copy(i);ou.subVectors(e,r);const h=$r.dot(ou),p=Yr.dot(ou);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*u;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),n.copy(i).addScaledVector($r,a);lu.subVectors(e,s);const g=$r.dot(lu),_=Yr.dot(lu);if(_>=0&&g<=_)return n.copy(s);const S=g*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Yr,o);const x=h*_-g*p;if(x<=0&&p-h>=0&&g-_>=0)return cm.subVectors(s,r),o=(p-h)/(p-h+(g-_)),n.copy(r).addScaledVector(cm,o);const d=1/(x+S+f);return a=S*d,o=f*d,n.copy(i).addScaledVector($r,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ao.subVectors(this.max,Zs),Kr.subVectors(e.a,Zs),Zr.subVectors(e.b,Zs),Jr.subVectors(e.c,Zs),Gi.subVectors(Zr,Kr),Vi.subVectors(Jr,Zr),_r.subVectors(Kr,Jr);let n=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-_r.z,_r.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,_r.z,0,-_r.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-_r.y,_r.x,0];return!fu(n,Kr,Zr,Jr,Ao)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,Kr,Zr,Jr,Ao))?!1:(Ro.crossVectors(Gi,Vi),n=[Ro.x,Ro.y,Ro.z],fu(n,Kr,Zr,Jr,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,To=new Ja,Kr=new G,Zr=new G,Jr=new G,Gi=new G,Vi=new G,_r=new G,Zs=new G,Ao=new G,Ro=new G,yr=new G;function fu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=n.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Nt=new G,Co=new Xe;let rM=0;class Nr extends Gr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=US,this.updateRanges=[],this.gpuType=di,this.version=0,this._normalizationScale=e!==void 0?dh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):GS(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):VS(e,this.array)}}class Ox extends Nr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class kx extends Nr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ft extends Nr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const sM=new Ja,Js=new G,hu=new G;class hc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(hu)),this.expandByPoint(Js.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aM=0;const Fn=new vt,pu=new Zt,Qr=new G,bn=new Ja,Qs=new Ja,Gt=new G;class Yt extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FS(e)?kx:Ox)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(bn.min,Qs.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Qs.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Qs.min),bn.expandByPoint(Qs.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Gt.fromBufferAttribute(o,u),l&&(Qr.fromBufferAttribute(e,u),Gt.add(Qr)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Nr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],u=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new G,l[C]=new G;const h=new G,p=new G,f=new G,g=new Xe,_=new Xe,S=new Xe,x=new G,d=new G;function m(C,R,P){u[C]=u[R]=u[P]=1,h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,R),S.fromBufferAttribute(s,P),p.sub(h),f.sub(h),_.sub(g),S.sub(g);const I=1/(_.x*S.y-S.x*_.y);isFinite(I)&&(x.copy(p).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(I),d.copy(f).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(I),o[C].add(x),o[R].add(x),o[P].add(x),l[C].add(d),l[R].add(d),l[P].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,R=y.length;C<R;++C){const P=y[C],I=P.start,H=P.count;for(let L=I,W=I+H;L<W;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new G,A=new G,b=new G,v=new G;function E(C){b.fromBufferAttribute(r,C),v.copy(b);const R=o[C];M.copy(R),M.sub(b.multiplyScalar(b.dot(R))).normalize(),A.crossVectors(v,R);const I=A.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,I)}for(let C=0,R=i.count;C<R;++C)u[C]&&E(C);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Nr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,h=new G,p=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),S=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,x),o.add(h),l.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(l.length*h);let g=0,_=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*h;for(let d=0;d<h;d++)f[_++]=u[g++]}return new Nr(f,h,p)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,f=u.length;p<f;p++){const g=u[p];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,g=p.length;f<g;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new G,oM=new G,lM=new Fe;class qi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(oM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(mu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lM.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let cM=0;class ks extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=_a,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fx,this.blendDst=hx,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new G,gu=new G,No=new G,Po=new G;class Bx{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gu.copy(e).add(n).multiplyScalar(.5),No.copy(n).sub(e).normalize(),Po.copy(this.origin).sub(gu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(No),o=Po.dot(this.direction),l=-Po.dot(No),u=Po.lengthSq(),h=Math.abs(1-a*a);let p,f,g,_;if(h>0)if(p=a*l-o,f=a*o-l,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,g=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(gu).addScaledVector(No,f),g}intersectSphere(e,n){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,g=e.z-a.z,_=n.x-a.x,S=n.y-a.y,x=n.z-a.z,d=i.x-a.x,m=i.y-a.y,y=i.z-a.z,M=Math.abs(l),A=Math.abs(u),b=Math.abs(h);let v,E,C,R,P,I,H,L,W,z,O,k;if(M>=A&&M>=b?(C=l,I=p,W=_,k=d,l>=0?(v=u,E=h,R=f,P=g,H=S,L=x,z=m,O=y):(v=h,E=u,R=g,P=f,H=x,L=S,z=y,O=m)):A>=b?(C=u,I=f,W=S,k=m,u>=0?(v=h,E=l,R=g,P=p,H=x,L=_,z=y,O=d):(v=l,E=h,R=p,P=g,H=_,L=x,z=d,O=y)):(C=h,I=g,W=x,k=y,h>=0?(v=l,E=u,R=p,P=f,H=_,L=S,z=d,O=m):(v=u,E=l,R=f,P=p,H=S,L=_,z=m,O=d)),C===0)return null;const F=v/C,V=E/C,Z=1/C,ce=R-F*I,Ne=P-V*I,Y=H-F*W,fe=L-V*W,xe=z-F*k,we=O-V*k,ve=xe*fe-we*Y,Ie=ce*we-Ne*xe,ht=Y*Ne-fe*ce;if(r){if(ve<0||Ie<0||ht<0)return null}else if((ve<0||Ie<0||ht<0)&&(ve>0||Ie>0||ht>0))return null;const Pe=ve+Ie+ht;if(Pe===0)return null;const Qe=Z*(ve*I+Ie*W+ht*k);return(Pe>0?Qe<0:Qe>0)?null:this.at(Qe/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ul extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const um=new vt,Sr=new Bx,Lo=new hc,dm=new G,Do=new G,Io=new G,Uo=new G,xu=new G,Fo=new G,fm=new G,Oo=new G;class dn extends Zt{constructor(e=new Yt,n=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(xu.fromBufferAttribute(p,e),a?Fo.addScaledVector(xu,h):Fo.addScaledVector(xu.sub(n),h))}n.add(Fo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Lo.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Lo,dm)===null||Sr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(um.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(um),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const x=f[_],d=a[x.materialIndex],m=Math.max(x.start,g.start),y=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let M=m,A=y;M<A;M+=3){const b=o.getX(M),v=o.getX(M+1),E=o.getX(M+2);r=ko(this,d,e,i,u,h,p,b,v,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let x=_,d=S;x<d;x+=3){const m=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);r=ko(this,a,e,i,u,h,p,m,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const x=f[_],d=a[x.materialIndex],m=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=m,A=y;M<A;M+=3){const b=M,v=M+1,E=M+2;r=ko(this,d,e,i,u,h,p,b,v,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let x=_,d=S;x<d;x+=3){const m=x,y=x+1,M=x+2;r=ko(this,a,e,i,u,h,p,m,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function uM(t,e,n,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Fr,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Oo);return u<n.near||u>n.far?null:{distance:u,point:Oo.clone(),object:t}}function ko(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Do),t.getVertexPosition(l,Io),t.getVertexPosition(u,Uo);const h=uM(t,e,n,i,Do,Io,Uo,fm);if(h){const p=new G;ei.getBarycoord(fm,Do,Io,Uo,p),r&&(h.uv=ei.getInterpolatedAttribute(r,o,l,u,p,new Xe)),s&&(h.uv1=ei.getInterpolatedAttribute(s,o,l,u,p,new Xe)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,u,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new G,materialIndex:0};ei.getNormal(Do,Io,Uo,f.normal),h.face=f,h.barycoord=p}return h}class dM extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=$t,h=$t,p,f){super(null,a,o,l,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mr=new hc,fM=new Xe(.5,.5),Bo=new G;class Ga{constructor(e=new qi,n=new qi,i=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],f=s[6],g=s[7],_=s[8],S=s[9],x=s[10],d=s[11],m=s[12],y=s[13],M=s[14],A=s[15];if(r[0].setComponents(u-a,g-h,d-_,A-m).normalize(),r[1].setComponents(u+a,g+h,d+_,A+m).normalize(),r[2].setComponents(u+o,g+p,d+S,A+y).normalize(),r[3].setComponents(u-o,g-p,d-S,A-y).normalize(),i)r[4].setComponents(l,f,x,M).normalize(),r[5].setComponents(u-l,g-f,d-x,A-M).normalize();else if(r[4].setComponents(u-l,g-f,d-x,A-M).normalize(),n===ti)r[5].setComponents(u+l,g+f,d+x,A+M).normalize();else if(n===Ha)r[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const n=fM.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const hm=new vt;class ph{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];hm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ga),i[r].setFromProjectionMatrix(hm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Ga),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new ph().copy(this)}}class pc extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new G,Wl=new G,pm=new vt,ea=new Bx,zo=new hc,vu=new G,mm=new G;class nf extends Zt{constructor(e=new Yt,n=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jl.fromBufferAttribute(n,r-1),Wl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jl.distanceTo(Wl);e.setAttribute("lineDistance",new ft(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;pm.copy(r).invert(),ea.copy(e.ray).applyMatrix4(pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=g,x=_-1;S<x;S+=u){const d=h.getX(S),m=h.getX(S+1),y=Ho(this,e,ea,l,d,m,S);y&&n.push(y)}if(this.isLineLoop){const S=h.getX(_-1),x=h.getX(g),d=Ho(this,e,ea,l,S,x,_-1);d&&n.push(d)}}else{const g=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=g,x=_-1;S<x;S+=u){const d=Ho(this,e,ea,l,S,S+1,S);d&&n.push(d)}if(this.isLineLoop){const S=Ho(this,e,ea,l,_-1,g,_-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ho(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(jl.fromBufferAttribute(o,r),Wl.fromBufferAttribute(o,s),n.distanceSqToSegment(jl,Wl,vu,mm)>i)return;vu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(vu);if(!(u<e.near||u>e.far))return{distance:u,point:mm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const gm=new G,xm=new G;class hM extends nf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)gm.fromBufferAttribute(n,r),xm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gm.distanceTo(xm);e.setAttribute("lineDistance",new ft(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zx extends pn{constructor(e=[],n=Ns,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ls extends pn{constructor(e,n,i=gi,r,s,a,o=$t,l=$t,u,h=dr,p=1){if(h!==dr&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Hx extends Ls{constructor(e,n=gi,i=Ns,r,s,a=$t,o=$t,l,u=dr){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gx extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bs extends Yt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function _(S,x,d,m,y,M,A,b,v,E,C){const R=M/v,P=A/E,I=M/2,H=A/2,L=b/2,W=v+1,z=E+1;let O=0,k=0;const F=new G;for(let V=0;V<z;V++){const Z=V*P-H;for(let ce=0;ce<W;ce++){const Ne=ce*R-I;F[S]=Ne*m,F[x]=Z*y,F[d]=L,u.push(F.x,F.y,F.z),F[S]=0,F[x]=0,F[d]=b>0?1:-1,h.push(F.x,F.y,F.z),p.push(ce/v),p.push(1-V/E),O+=1}}for(let V=0;V<E;V++)for(let Z=0;Z<v;Z++){const ce=f+Z+W*V,Ne=f+Z+W*(V+1),Y=f+(Z+1)+W*(V+1),fe=f+(Z+1)+W*V;l.push(ce,Ne,fe),l.push(Ne,Y,fe),k+=6}o.addGroup(g,k,C),g+=k,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mh extends Yt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],g=[];let _=0;const S=[],x=i/2;let d=0;m(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(g,2));function m(){const M=new G,A=new G;let b=0;const v=(n-e)/i;for(let E=0;E<=s;E++){const C=[],R=E/s,P=R*(n-e)+e;for(let I=0;I<=r;I++){const H=I/r,L=H*l+o,W=Math.sin(L),z=Math.cos(L);A.x=P*W,A.y=-R*i+x,A.z=P*z,p.push(A.x,A.y,A.z),M.set(W,v,z).normalize(),f.push(M.x,M.y,M.z),g.push(H,1-R),C.push(_++)}S.push(C)}for(let E=0;E<r;E++)for(let C=0;C<s;C++){const R=S[C][E],P=S[C+1][E],I=S[C+1][E+1],H=S[C][E+1];(e>0||C!==0)&&(h.push(R,P,H),b+=3),(n>0||C!==s-1)&&(h.push(P,I,H),b+=3)}u.addGroup(d,b,0),d+=b}function y(M){const A=_,b=new Xe,v=new G;let E=0;const C=M===!0?e:n,R=M===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,x*R,0),f.push(0,R,0),g.push(.5,.5),_++;const P=_;for(let I=0;I<=r;I++){const L=I/r*l+o,W=Math.cos(L),z=Math.sin(L);v.x=C*z,v.y=x*R,v.z=C*W,p.push(v.x,v.y,v.z),f.push(0,R,0),b.x=W*.5+.5,b.y=z*.5*R+.5,g.push(b.x,b.y),_++}for(let I=0;I<r;I++){const H=A+I,L=P+I;M===!0?h.push(L,L+1,H):h.push(L+1,L,H),E+=3}u.addGroup(d,E,M===!0?1:2),d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gh extends mh{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new gh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mc extends Yt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,f=n/l,g=[],_=[],S=[],x=[];for(let d=0;d<h;d++){const m=d*f-a;for(let y=0;y<u;y++){const M=y*p-s;_.push(M,-m,0),S.push(0,0,1),x.push(y/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){const y=m+u*d,M=m+u*(d+1),A=m+1+u*(d+1),b=m+1+u*d;g.push(y,M,b),g.push(M,A,b)}this.setIndex(g),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends Yt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let p=e;const f=(n-e)/r,g=new G,_=new Xe;for(let S=0;S<=r;S++){for(let x=0;x<=i;x++){const d=s+x/i*a;g.x=p*Math.cos(d),g.y=p*Math.sin(d),l.push(g.x,g.y,g.z),u.push(0,0,1),_.x=(g.x/n+1)/2,_.y=(g.y/n+1)/2,h.push(_.x,_.y)}p+=f}for(let S=0;S<r;S++){const x=S*(i+1);for(let d=0;d<i;d++){const m=d+x,y=m,M=m+i+1,A=m+i+2,b=m+1;o.push(y,M,b),o.push(M,A,b)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ya extends Yt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],p=new G,f=new G,g=[],_=[],S=[],x=[];for(let d=0;d<=i;d++){const m=[],y=d/i,M=a+y*o,A=e*Math.cos(M),b=Math.sqrt(e*e-A*A);let v=0;d===0&&a===0?v=.5/n:d===i&&l===Math.PI&&(v=-.5/n);for(let E=0;E<=n;E++){const C=E/n,R=r+C*s;p.x=-b*Math.cos(R),p.y=A,p.z=b*Math.sin(R),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),x.push(C+v,1-y),m.push(u++)}h.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const y=h[d][m+1],M=h[d][m],A=h[d+1][m],b=h[d+1][m+1];(d!==0||a>0)&&g.push(y,M,b),(d!==i-1||l<Math.PI)&&g.push(M,A,b)}this.setIndex(g),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xh extends Yt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],h=[],p=[],f=new G,g=new G,_=new G;for(let S=0;S<=i;S++){const x=a+S/i*o;for(let d=0;d<=r;d++){const m=d/r*s;g.x=(e+n*Math.cos(x))*Math.cos(m),g.y=(e+n*Math.cos(x))*Math.sin(m),g.z=n*Math.sin(x),u.push(g.x,g.y,g.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),_.subVectors(g,f).normalize(),h.push(_.x,_.y,_.z),p.push(d/r),p.push(S/i)}}for(let S=1;S<=i;S++)for(let x=1;x<=r;x++){const d=(r+1)*S+x-1,m=(r+1)*(S-1)+x-1,y=(r+1)*(S-1)+x,M=(r+1)*S+x;l.push(d,m,M),l.push(m,y,M)}this.setIndex(l),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(vm(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(vm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function vm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function pM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const mM={clone:Ds,merge:cn};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vM extends kr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ta extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class SM extends pc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class vh extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const _u=new vt,_m=new G,ym=new G;class jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ha||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new G,Vo=new Os,ai=new G;class Wx extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Vo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Go,Vo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new G,Sm=new Xe,Mm=new Xe;class zn extends Wx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,Mm),n.subVectors(Mm,Sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class MM extends jx{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class EM extends vh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new MM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Xx extends Wx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wM extends jx{constructor(){super(new Xx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bM extends vh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new wM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class TM extends vh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const es=-90,ts=1;class rf extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new zn(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new zn(es,ts,e,n);a.layers=this.layers,this.add(a);const o=new zn(es,ts,e,n);o.layers=this.layers,this.add(o);const l=new zn(es,ts,e,n);l.layers=this.layers,this.add(l);const u=new zn(es,ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class AM extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class CM extends hM{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let f=0,g=0,_=-o;f<=n;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const S=f===s?i:r;S.toArray(u,g),g+=3,S.toArray(u,g),g+=3,S.toArray(u,g),g+=3,S.toArray(u,g),g+=3}const h=new Yt;h.setAttribute("position",new ft(l,3)),h.setAttribute("color",new ft(u,3));const p=new pc({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Em(t,e,n,i){const r=NM(i);switch(n){case Ax:return t*e;case Cx:return t*e/r.components*r.byteLength;case lh:return t*e/r.components*r.byteLength;case Or:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case Rx:return t*e*3/r.components*r.byteLength;case fi:return t*e*4/r.components*r.byteLength;case uh:return t*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ad:return Math.max(t,16)*Math.max(e,8)/4;case wd:case Td:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Cd:case Pd:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:case Bl:case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $d:case Yd:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zl:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NM(t){switch(t){case An:case Ex:return{byteLength:1,components:1};case za:case wx:case xi:return{byteLength:2,components:1};case ah:case oh:return{byteLength:2,components:4};case gi:case sh:case di:return{byteLength:4,components:1};case bx:case Tx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function PM(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<p.length;g++){const _=p[f],S=p[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let g=0,_=p.length;g<_;g++){const S=p[g];t.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,XM=`#ifdef USE_BUMPMAP
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`vec3 transformedNormal = objectNormal;
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
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
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
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,E1=`#ifdef USE_ENVMAP
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
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
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
#endif`,C1=`uniform sampler2D dfgLUT;
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
}`,N1=`
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H1=`#if defined( USE_POINTS_UV )
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
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
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
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
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
#endif`,$1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform float backgroundBlurriness;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,XE=`uniform vec3 diffuse;
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
}`,qE=`#define LAMBERT
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
}`,$E=`#define LAMBERT
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
}`,YE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,ew=`#define PHONG
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
}`,tw=`#define STANDARD
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
}`,nw=`#define STANDARD
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
}`,iw=`#define TOON
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
}`,rw=`#define TOON
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
}`,sw=`uniform float size;
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
}`,aw=`uniform vec3 diffuse;
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
}`,ow=`#include <common>
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
}`,lw=`uniform vec3 color;
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
}`,cw=`uniform float rotation;
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
}`,uw=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:LM,alphahash_pars_fragment:DM,alphamap_fragment:IM,alphamap_pars_fragment:UM,alphatest_fragment:FM,alphatest_pars_fragment:OM,aomap_fragment:kM,aomap_pars_fragment:BM,batching_pars_vertex:zM,batching_vertex:HM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:jM,iridescence_fragment:WM,bumpmap_pars_fragment:XM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:YM,clipping_planes_vertex:KM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:e1,common:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:a1,colorspace_fragment:o1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:E1,envmap_vertex:h1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:x1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:w1,lights_toon_pars_fragment:b1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:C1,lights_fragment_begin:N1,lights_fragment_maps:P1,lights_fragment_end:L1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:O1,map_fragment:k1,map_pars_fragment:B1,map_particle_fragment:z1,map_particle_pars_fragment:H1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:V1,morphinstance_vertex:j1,morphcolor_vertex:W1,morphnormal_vertex:X1,morphtarget_pars_vertex:q1,morphtarget_vertex:$1,normal_fragment_begin:Y1,normal_fragment_maps:K1,normal_pars_fragment:Z1,normal_pars_vertex:J1,normal_vertex:Q1,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:aE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:xE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:wE,transmission_fragment:bE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:RE,uv_vertex:CE,worldpos_vertex:NE,background_vert:PE,background_frag:LE,backgroundCube_vert:DE,backgroundCube_frag:IE,cube_vert:UE,cube_frag:FE,depth_vert:OE,depth_frag:kE,distance_vert:BE,distance_frag:zE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:jE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:qE,meshlambert_frag:$E,meshmatcap_vert:YE,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:ew,meshphysical_vert:tw,meshphysical_frag:nw,meshtoon_vert:iw,meshtoon_frag:rw,points_vert:sw,points_frag:aw,shadow_vert:ow,shadow_frag:lw,sprite_vert:cw,sprite_frag:uw},ye={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ci={basic:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:cn([ye.points,ye.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:cn([ye.common,ye.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:cn([ye.sprite,ye.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:cn([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:cn([ye.lights,ye.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const jo={r:0,b:0,g:0},dw=new vt,$x=new Fe;$x.set(-1,0,0,0,1,0,0,0,1);function fw(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,u,h=null,p=0,f=null;function g(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const M=m.backgroundBlurriness>0;y=e.get(y,M)}return y}function _(m){let y=!1;const M=g(m);M===null?x(a,o):M&&M.isColor&&(x(M,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(m,y){const M=g(y);M&&M.isCubeTexture?(u===void 0&&(u=new dn(new Bs(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dw.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply($x),u.material.toneMapped=qe.getTransfer(M.colorSpace)!==it,(h!==M||p!==M.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new dn(new mc(2,2),new kr({name:"BackgroundMaterial",uniforms:Ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,y){m.getRGB(jo,Vx(t)),n.buffers.color.setClear(jo.r,jo.g,jo.b,y,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(a,o)},render:_,addToRenderList:S,dispose:d}}function hw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,I,H,L,W){let z=!1;const O=p(P,L,H,I);s!==O&&(s=O,u(s.object)),z=g(P,L,H,W),z&&_(P,L,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(P,I,H,L),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function p(P,I,H,L){const W=L.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const O=P.isInstancedMesh===!0?P.id:0;let k=z[O];k===void 0&&(k={},z[O]=k);let F=k[H.id];F===void 0&&(F={},k[H.id]=F);let V=F[W];return V===void 0&&(V=f(l()),F[W]=V),V}function f(P){const I=[],H=[],L=[];for(let W=0;W<n;W++)I[W]=0,H[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:L,object:P,attributes:{},index:null}}function g(P,I,H,L){const W=s.attributes,z=I.attributes;let O=0;const k=H.getAttributes();for(const F in k)if(k[F].location>=0){const Z=W[F];let ce=z[F];if(ce===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function _(P,I,H,L){const W={},z=I.attributes;let O=0;const k=H.getAttributes();for(const F in k)if(k[F].location>=0){let Z=z[F];Z===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),W[F]=ce,O++}s.attributes=W,s.attributesNum=O,s.index=L}function S(){const P=s.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function x(P){d(P,0)}function d(P,I){const H=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;H[P]=1,L[P]===0&&(t.enableVertexAttribArray(P),L[P]=1),W[P]!==I&&(t.vertexAttribDivisor(P,I),W[P]=I)}function m(){const P=s.newAttributes,I=s.enabledAttributes;for(let H=0,L=I.length;H<L;H++)I[H]!==P[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function y(P,I,H,L,W,z,O){O===!0?t.vertexAttribIPointer(P,I,H,W,z):t.vertexAttribPointer(P,I,H,L,W,z)}function M(P,I,H,L){S();const W=L.attributes,z=H.getAttributes(),O=I.defaultAttributeValues;for(const k in z){const F=z[k];if(F.location>=0){let V=W[k];if(V===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const Z=V.normalized,ce=V.itemSize,Ne=e.get(V);if(Ne===void 0)continue;const Y=Ne.buffer,fe=Ne.type,xe=Ne.bytesPerElement,we=fe===t.INT||fe===t.UNSIGNED_INT||V.gpuType===sh;if(V.isInterleavedBufferAttribute){const ve=V.data,Ie=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,ht=V.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<F.locationSize;Pe++)d(F.location+Pe,ve.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)x(F.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let Pe=0;Pe<F.locationSize;Pe++)y(F.location+Pe,ce/F.locationSize,fe,Z,Ie*xe,(ht+ce/F.locationSize*Pe)*xe,we)}else{if(V.isInstancedBufferAttribute){for(let ve=0;ve<F.locationSize;ve++)d(F.location+ve,V.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ve=0;ve<F.locationSize;ve++)x(F.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let ve=0;ve<F.locationSize;ve++)y(F.location+ve,ce/F.locationSize,fe,Z,ce*xe,ce/F.locationSize*ve*xe,we)}}else if(O!==void 0){const Z=O[k];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(F.location,Z);break;case 3:t.vertexAttrib3fv(F.location,Z);break;case 4:t.vertexAttrib4fv(F.location,Z);break;default:t.vertexAttrib1fv(F.location,Z)}}}}m()}function A(){C();for(const P in i){const I=i[P];for(const H in I){const L=I[H];for(const W in L){const z=L[W];for(const O in z)h(z[O].object),delete z[O];delete L[W]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const H in I){const L=I[H];for(const W in L){const z=L[W];for(const O in z)h(z[O].object),delete z[O];delete L[W]}}delete i[P.id]}function v(P){for(const I in i){const H=i[I];for(const L in H){const W=H[L];if(W[P.id]===void 0)continue;const z=W[P.id];for(const O in z)h(z[O].object),delete z[O];delete W[P.id]}}}function E(P){for(const I in i){const H=i[I],L=P.isInstancedMesh===!0?P.id:0,W=H[L];if(W!==void 0){for(const z in W){const O=W[z];for(const k in O)h(O[k].object),delete O[k];delete W[z]}delete H[L],Object.keys(H).length===0&&delete i[I]}}}function C(){R(),a=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:S,enableAttribute:x,disableUnusedAttributes:m}}function pw(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==fi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const E=v===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==An&&v!==di&&!E&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(De("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:b}}function gw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||i!==0||r;return r=f,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,g){const _=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!x)s?h(null):u();else{const m=s?0:i,y=m*4;let M=d.clippingState||null;l.value=M,M=h(_,f,y,g);for(let A=0;A!==y;++A)M[A]=n[A];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,g,_){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=l.value,_!==!0||x===null){const d=g+S*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,M=g;y!==S;++y,M+=4)a.copy(p[y]).applyMatrix4(m,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}class _h extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bs(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ss});s.uniforms.tEquirect.value=n;const a=new dn(r,s),o=n.minFilter;return n.minFilter===Qi&&(n.minFilter=_n),new rf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const wm=256,xw=3,vw=20,Yx=256,Kx=16,_w=3,yw=new G,Sw=new Ge;class ql{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rf(1,10,null),this._boxMesh=new dn(new Bs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=yw}=s,l=this._renderer;this._setSize(a);const u=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,f=l.autoClearColor,g=l.autoClearDepth,_=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(Sw));const x=new rf(i,r,h);return x.position.copy(o),x.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=g,l.autoClearStencil=_,e.background=S,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(wm,HS(e))}_fromTexture(e,n){e.mapping===Ns||e.mapping===Ba?this._setSize(e.image.length===0?wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=bm(e,!1,!1),i=Math.log2(e)-xw;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Ns||e.mapping===Ba?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Mw(),this._integrationMaterial=Ew());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Kx);for(let a=0;a<=i;a++){const o=ql.lodToRoughness(a,i);if(a>i-_w)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Yx*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=ww());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function bm(t,e,n){return new _h(t,{minFilter:Qi,generateMipmaps:e,type:xi,colorSpace:Hl,depthBuffer:n})}function Qa(t,e,n){return new kr({name:t,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:n,side:En,blending:Ss,depthTest:!1,depthWrite:!1})}function Mw(){return Qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yx}u

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
	`)}function Ew(){return Qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kx}},`

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
	`)}function ww(){return Qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vw}
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
	`)}function Tm(){return Qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Am(){return Qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?a(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Xc||g===qc)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new _h(_.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",u),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const g=f.mapping,_=g===Xc||g===qc,S=g===Ns||g===Ba;if(_||S){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new ql(t)),x=_?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const m=f.image;return _&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new ql(t)),x=_?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function o(f,g){return g===Xc?f.mapping=Ns:g===qc&&(f.mapping=Ba),f}function l(f){let g=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&g++;return g===_}function u(f){const g=f.target;g.removeEventListener("dispose",u);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function h(f){const g=f.target;g.removeEventListener("dispose",h);const _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Tw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&cl("WebGLRenderer: "+i+" extension not supported."),r}}}function Aw(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const S=s.get(_);S&&(e.remove(S),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(_,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),n.memory.geometries++),S}function h(_){const S=_.attributes;for(const x in S)e.update(S[x],t.ARRAY_BUFFER)}function p(_){const S=_.index,x=_.attributes.position;let d=0;if(x===void 0)return;const m=S!==null?S.array.length:x.array.length/3-1,y=x.count>=65535?kx:Ox,M=new y(Math.ceil(m/3)*6,1),A=M.array;if(S!==null){const v=S.array;d=S.version;for(let E=0,C=0;E<m;E+=3){const R=v[E+0],P=v[E+1],I=v[E+2];A[C++]=R,A[C++]=P,A[C++]=P,A[C++]=I,A[C++]=I,A[C++]=R}}else{d=x.version;for(let v=0,E=0;v<m;v+=3){const C=v+0,R=v+1,P=v+2;A[E++]=C,A[E++]=R,A[E++]=R,A[E++]=P,A[E++]=P,A[E++]=C}}M.version=d;const b=s.get(_);b&&e.remove(b),s.set(_,M)}function f(_){const S=s.get(_);if(S){const x=_.index;x!==null&&S.version<x.version&&p(_)}else p(_);return s.get(_)}function g(){for(const _ in r){const S=r[_].deref();S!==void 0&&l(S)}}return{get:u,update:h,getWireframeAttribute:f,dispose:g}}function Rw(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,p*a,g),n.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let S=0;for(let x=0;x<g;x++)S+=f[x];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function Cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Nw(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let R=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var g=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),x===!0&&(M=3);let A=o.attributes.position.count*M,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const v=new Float32Array(A*b*4*p),E=new Ix(v,A,b,p);E.type=di,E.needsUpdate=!0;const C=M*4;for(let P=0;P<p;P++){const I=d[P],H=m[P],L=y[P],W=A*b*4*P;for(let z=0;z<I.count;z++){const O=z*C;_===!0&&(r.fromBufferAttribute(I,z),v[W+O+0]=r.x,v[W+O+1]=r.y,v[W+O+2]=r.z,v[W+O+3]=0),S===!0&&(r.fromBufferAttribute(H,z),v[W+O+4]=r.x,v[W+O+5]=r.y,v[W+O+6]=r.z,v[W+O+7]=0),x===!0&&(r.fromBufferAttribute(L,z),v[W+O+8]=r.x,v[W+O+9]=r.y,v[W+O+10]=r.z,v[W+O+11]=L.itemSize===4?r.w:1)}}f={count:p,texture:E,size:new Xe(A,b)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Pw(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return f}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const Lw={[mx]:"LINEAR_TONE_MAPPING",[gx]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[vx]:"ACES_FILMIC_TONE_MAPPING",[yx]:"AGX_TONE_MAPPING",[Sx]:"NEUTRAL_TONE_MAPPING",[_x]:"CUSTOM_TONE_MAPPING"};function Dw(t,e,n,i,r,s){const a=new mi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,u=null;const h=new Yt;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));const p=new vM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dn(h,p),g=new Xx(-1,1,1,-1,0,1);let _=null,S=null,x=!1,d,m=null,y=[],M=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),l!==null&&l.setSize(A,b);for(let v=0;v<y.length;v++){const E=y[v];E.setSize&&E.setSize(A,b)}},this.setEffects=function(A){y=A,M=y.length>0&&y[0].isRenderPass===!0;const b=a.width,v=a.height;y.length>0&&o===null&&(o=new mi(b,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new mi(b,v,{type:xi,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&y.some(C=>C.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&u===null&&(u=new Ls(b,v),s===!0&&(u.format=er,u.type=Ps)),a.dispose(),a.depthTexture=E?u:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let C=0;C<y.length;C++){const R=y[C];R.setSize&&R.setSize(b,v),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(u)}},this.begin=function(A,b){if(x||A.toneMapping===Ni&&y.length===0)return!1;if(m=b,b!==null){const v=b.width,E=b.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return M===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Ni,!0},this.hasRenderPass=function(){return M},this.end=function(A,b){A.toneMapping=d,x=!0;let v=a,E=o;for(let C=0;C<y.length;C++){const R=y[C];R.enabled!==!1&&(R.render(A,E,v,b),R.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,p.defines={},qe.getTransfer(_)===it&&(p.defines.SRGB_TRANSFER="");const C=Lw[S];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(m),A.render(f,g),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}const Zx=new pn,Jx=new Ls(1,1),Qx=new Hx(1),ev=new Ix,tv=new YS,nv=new zx,Rm=[],Cm=[],Nm=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rm[r];if(s===void 0&&(s=new Float32Array(r),Rm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gc(t,e){let n=Cm[e];n===void 0&&(n=new Int32Array(e),Cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Lm.set(i),t.uniformMatrix2fv(this.addr,!1,Lm),Bt(n,i)}}function Bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Pm.set(i),t.uniformMatrix3fv(this.addr,!1,Pm),Bt(n,i)}}function zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Nm.set(i),t.uniformMatrix4fv(this.addr,!1,Nm),Bt(n,i)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function xc(t){return t.version===0&&(t.compareFunction=Lx,t.needsUpdate=!0),t}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=xc(Jx):s=Zx,n.setTexture2D(e||s,r)}function Kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tv,r)}function Zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=xc(Qx):s=nv,n.setTextureCube(e||s,r)}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ev,r)}function Qw(t){switch(t){case 5126:return Iw;case 35664:return Uw;case 35665:return Fw;case 35666:return Ow;case 35674:return kw;case 35675:return Bw;case 35676:return zw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return jw;case 5125:return Ww;case 36294:return Xw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Jw}}function eb(t,e){t.uniform1fv(this.addr,e)}function tb(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function nb(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function ib(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function rb(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sb(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ab(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ob(t,e){t.uniform1iv(this.addr,e)}function lb(t,e){t.uniform2iv(this.addr,e)}function cb(t,e){t.uniform3iv(this.addr,e)}function ub(t,e){t.uniform4iv(this.addr,e)}function db(t,e){t.uniform1uiv(this.addr,e)}function fb(t,e){t.uniform2uiv(this.addr,e)}function hb(t,e){t.uniform3uiv(this.addr,e)}function pb(t,e){t.uniform4uiv(this.addr,e)}function mb(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=xc(Jx):a=Zx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function gb(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||tv,s[a])}function xb(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=xc(Qx):a=nv;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function vb(t,e,n){const i=this.cache,r=e.length,s=gc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ev,s[a])}function _b(t){switch(t){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return rb;case 35675:return sb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return hb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return vb}}class yb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qw(n.type)}}class Sb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_b(n.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function Dm(t,e){t.seq.push(e),t.map[e.id]=e}function Eb(t,e,n){const i=t.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),a=yu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Dm(n,u===void 0?new yb(o,t,e):new Sb(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Mb(o),Dm(n,p)),n=p}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Eb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Im(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wb=37297;let bb=0;function Tb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Um=new Fe;function Ab(t){qe._getMatrix(Um,qe.workingColorSpace,t);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Gl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Tb(t.getShaderSource(e),o)}else return s}function Rb(t,e){const n=Ab(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cb={[mx]:"Linear",[gx]:"Reinhard",[xx]:"Cineon",[vx]:"ACESFilmic",[yx]:"AgX",[Sx]:"Neutral",[_x]:"Custom"};function Nb(t,e){const n=Cb[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wo=new G;function Pb(){qe.getLuminanceCoefficients(Wo);const t=Wo.x.toFixed(4),e=Wo.y.toFixed(4),n=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Db(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ib(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ca(t){return t!==""}function Om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(t){return t.replace(Ub,Fb)}function Fb(t,e){const n=ze[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sf(n)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(t){return t.replace(Ob,kb)}function kb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Bb={[rl]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function zb(t){return Bb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hb={[Ba]:"ENVMAP_MODE_REFRACTION"};function Gb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vb={[px]:"ENVMAP_BLENDING_MULTIPLY",[wS]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function jb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Vb[t.combine]||"ENVMAP_BLENDING_NONE"}function Wb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=zb(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gb(n),p=jb(n),f=Lb(n),g=Db(s),_=r.createProgram();let S,x,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ca).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ca).join(`
`),x.length>0&&(x+=`
`)):(S=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),x=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ni?Nb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Rb("linearToOutputTexel",n.outputColorSpace),Pb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),a=sf(a),a=Om(a,n),a=km(a,n),o=sf(o),o=Om(o,n),o=km(o,n),a=Bm(a),o=Bm(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=d+S+a,y=d+x+o,M=Im(r,r.VERTEX_SHADER,m),A=Im(r,r.FRAGMENT_SHADER,y);r.attachShader(_,M),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(R){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(M)||"",H=r.getShaderInfoLog(A)||"",L=P.trim(),W=I.trim(),z=H.trim();let O=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,M,A);else{const F=Fm(r,M,"vertex"),V=Fm(r,A,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+F+`
`+V)}else L!==""?De("WebGLProgram: Program Info Log:",L):(W===""||z==="")&&(k=!1);k&&(R.diagnostics={runnable:O,programLog:L,vertexShader:{log:W,prefix:S},fragmentShader:{log:z,prefix:x}})}r.deleteShader(M),r.deleteShader(A),v=new dl(r,_),E=Ib(r,_)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,wb)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=A,this}let Xb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $b(e),n.set(e,i)),i}}class $b{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Yb(t){return t===Or||t===Bl||t===zl}function Kb(t,e,n,i,r,s){const a=new Ux,o=new qb,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,C,R,P,I){const H=R.fog,L=P.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||W,z),k=f[v.type];let F=i.precision;v.precision!==null&&(F=i.getMaxPrecision(v.precision),F!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));const V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=V!==void 0?V.length:0;let ce=0;L.morphAttributes.position!==void 0&&(ce=1),L.morphAttributes.normal!==void 0&&(ce=2),L.morphAttributes.color!==void 0&&(ce=3);let Ne,Y,fe,xe;if(k){const _e=ci[k];Ne=_e.vertexShader,Y=_e.fragmentShader}else{Ne=v.vertexShader,Y=v.fragmentShader;const _e=o.getVertexShaderStage(v),nt=o.getFragmentShaderStage(v);o.update(v,_e,nt),fe=_e.id,xe=nt.id}const we=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,ht=P.isBatchedMesh===!0,Pe=!!v.map,Qe=!!v.matcap,Je=!!O,He=Je&&O.isPMREMTexture===!0,Lt=!!v.aoMap,_t=!!v.lightMap,Wt=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,Dn=!!v.displacementMap,At=!!v.emissiveMap,Dt=!!v.metalnessMap,It=!!v.roughnessMap,In=v.anisotropy>0,B=v.clearcoat>0,Un=v.diffuseRoughness>0,pt=v.dispersion>0,mt=v.retroreflectivity>0,ge=v.iridescence>0,Ut=v.sheen>0,Le=v.transmission>0,Ue=In&&!!v.anisotropyMap,N=B&&!!v.clearcoatMap,w=B&&!!v.clearcoatNormalMap,X=B&&!!v.clearcoatRoughnessMap,ie=Un&&!!v.diffuseRoughnessMap,te=ge&&!!v.iridescenceMap,oe=ge&&!!v.iridescenceThicknessMap,pe=Ut&&!!v.sheenColorMap,J=Ut&&!!v.sheenRoughnessMap,Q=!!v.specularMap,ue=!!v.specularColorMap,D=!!v.specularIntensityMap,ee=Le&&!!v.transmissionMap,K=Le&&!!v.thicknessMap,de=!!v.gradientMap,ae=!!v.alphaMap,le=v.alphaTest>0,Re=!!v.alphaHash,Be=!!v.extensions;let se=Ni;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(se=t.toneMapping);const Ce=He?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ke={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:Y,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:ht,batchingColor:ht&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Qe,envMap:Je,envMapMode:Je&&O.mapping,envMapPMREM:He,envMapMaxLod:He?Ce.length-1:null,envMapSize:He?Ce[0].width:null,aoMap:Lt,lightMap:_t,bumpMap:Wt,normalMap:at,displacementMap:Dn,emissiveMap:At,normalMapObjectSpace:at&&v.normalMapType===RS,normalMapTangentSpace:at&&v.normalMapType===ef,packedNormalMap:at&&v.normalMapType===ef&&Yb(v.normalMap.format),metalnessMap:Dt,roughnessMap:It,anisotropy:In,anisotropyMap:Ue,clearcoat:B,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:Un,diffuseRoughnessMap:ie,dispersion:pt,retroreflection:mt,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:Ut,sheenColorMap:pe,sheenRoughnessMap:J,specularMap:Q,specularColorMap:ue,specularIntensityMap:D,transmission:Le,transmissionMap:ee,thicknessMap:K,gradientMap:de,opaque:v.transparent===!1&&v.blending===_a&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Re,combine:v.combine,mapUv:Pe&&g(v.map.channel),aoMapUv:Lt&&g(v.aoMap.channel),lightMapUv:_t&&g(v.lightMap.channel),bumpMapUv:Wt&&g(v.bumpMap.channel),normalMapUv:at&&g(v.normalMap.channel),displacementMapUv:Dn&&g(v.displacementMap.channel),emissiveMapUv:At&&g(v.emissiveMap.channel),metalnessMapUv:Dt&&g(v.metalnessMap.channel),roughnessMapUv:It&&g(v.roughnessMap.channel),anisotropyMapUv:Ue&&g(v.anisotropyMap.channel),clearcoatMapUv:N&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:w&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&g(v.diffuseRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(v.sheenRoughnessMap.channel),specularMapUv:Q&&g(v.specularMap.channel),specularColorMapUv:ue&&g(v.specularColorMap.channel),specularIntensityMapUv:D&&g(v.specularIntensityMap.channel),transmissionMapUv:ee&&g(v.transmissionMap.channel),thicknessMapUv:K&&g(v.thicknessMap.channel),alphaMapUv:ae&&g(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(at||In),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Pe||ae),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qn,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&v.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function S(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(x(E,v),d(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function d(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function m(v){const E=f[v.type];let C;if(E){const R=ci[E];C=mM.clone(R.uniforms)}else C=v.uniforms;return C}function y(v,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new Wb(t,E,v,r),u.push(C),h.set(E,C)),C}function M(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:m,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:b}}function Zb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,_,S,x,d){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:g,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:x,group:d},t[e]=m):(m.id=f.id,m.object=f,m.geometry=g,m.material=_,m.materialVariant=a(f),m.groupOrder=S,m.renderOrder=f.renderOrder,m.z=x,m.group=d),e++,m}function l(f,g,_,S,x,d,m){m.reversedDepth===!0&&(x=-x);const y=o(f,g,_,S,x,d);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function u(f,g,_,S,x,d){const m=o(f,g,_,S,x,d);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function h(f,g){n.length>1&&n.sort(f||Jb),i.length>1&&i.sort(g||Hm),r.length>1&&r.sort(g||Hm)}function p(){for(let f=e,g=t.length;f<g;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function Qb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gm,t.set(i,[a])):r>=s.length?(a=new Gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function eT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new Ge};break;case"SpotLight":n={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function tT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nT=0;function iT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rT(t){const e=new eT,n=tT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new vt,a=new vt;function o(u){let h=0,p=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let g=0,_=0,S=0,x=0,d=0,m=0,y=0,M=0,A=0,b=0,v=0,E=0,C=0,R=0;u.sort(iT);for(let I=0,H=u.length;I<H;I++){const L=u[I],W=L.color,z=L.intensity,O=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Or?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*z,p+=W.g*z,f+=W.b*z;else if(L.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(L.sh.coefficients[F],z);R++}else if(L.isSunLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[_]=Z,i.sunShadowMap[_]=k;const ce=V.getViewportCount();for(let Ne=0;Ne<ce;Ne++)i.sunShadowMatrix[S+Ne]=V.getMatrix(Ne),i.sunShadowCascade[S+Ne]=V._cascadeData[Ne];S+=ce,_++}i.sun[g]=F,g++}else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.directionalShadow[x]=Z,i.directionalShadowMap[x]=k,i.directionalShadowMatrix[x]=L.shadow.matrix,A++}i.directional[x]=F,x++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(W).multiplyScalar(z),F.distance=O,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,i.spot[m]=F;const V=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,V.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=V.matrix,L.castShadow){const Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=k,v++}m++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(W).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=F,y++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=k,i.pointShadowMatrix[d]=L.shadow.matrix,b++}i.point[d]=F,d++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(z),F.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[M]=F,M++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const P=i.hash;(P.sunLength!==g||P.directionalLength!==x||P.pointLength!==d||P.spotLength!==m||P.rectAreaLength!==y||P.hemiLength!==M||P.numSunShadows!==_||P.numDirectionalShadows!==A||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==E||P.numLightProbes!==R)&&(i.sun.length=g,i.directional.length=x,i.spot.length=m,i.rectArea.length=y,i.point.length=d,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.sunLength=g,P.directionalLength=x,P.pointLength=d,P.spotLength=m,P.rectAreaLength=y,P.hemiLength=M,P.numSunShadows=_,P.numDirectionalShadows=A,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=E,P.numLightProbes=R,i.version=nT++)}function l(u,h){let p=0,f=0,g=0,_=0,S=0,x=0;const d=h.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const M=u[m];if(M.isSunLight){const A=i.sun[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),p++}else if(M.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(M.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const A=i.rectArea[S];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(d),g++}else if(M.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function Vm(t){const e=new rT(t),n=[],i=[],r=[];function s(p){h.camera=p,n.length=0,i.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):n.push(p)}function o(p){i.push(p)}function l(){e.setup(n),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function u(p){e.setupView(n,p)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function sT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vm(t),e.set(r,[o])):s>=a.length?(o=new Vm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const aT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oT=`uniform sampler2D shadow_pass;
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
}`,lT=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],cT=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jm=new vt,na=new G,Su=new G;function uT(t,e,n){let i=new Ga;const r=new Xe,s=new Xe,a=new Et,o=new _M,l=new yM,u={},h=n.maxTextureSize,p={[Fr]:En,[En]:Fr,[Qn]:Qn},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:aT,fragmentShader:oT}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new dn(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let d=this.type;this.render=function(b,v,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===sS&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rl);const C=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ss),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const H=d!==this.type;H&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=b.length;L<W;L++){const z=b[L],O=z.shadow;if(O===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const k=O.getFrameExtents();r.multiply(k),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,O.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===oa){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new mi(r.x,r.y,{format:Or,type:xi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Ls(r.x,r.y,di),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=dr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t}else z.isPointLight?(O.map=new _h(r.x),O.map.depthTexture=new Hx(r.x,gi)):(O.map=new mi(r.x,r.y),O.map.depthTexture=new Ls(r.x,r.y,gi)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=dr,this.type===rl?(O.map.depthTexture.compareFunction=F?Px:Nx,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);const V=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();z.isPointLight!==!0&&O.updateMatrices(z,E);const Z=O.camera.layers.mask&4294967294?O.camera.layers:E.layers;for(let ce=0;ce<V;ce++){const Ne=O.getCamera(ce);if(z.isPointLight){const Y=O.camera,fe=O.matrix,xe=z.distance||Y.far;xe!==Y.far&&(Y.far=xe,Y.updateProjectionMatrix()),na.setFromMatrixPosition(z.matrixWorld),Y.position.copy(na),Su.copy(Y.position),Su.add(lT[ce]),Y.up.copy(cT[ce]),Y.lookAt(Su),Y.updateMatrixWorld(),fe.makeTranslation(-na.x,-na.y,-na.z),jm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(jm,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ce),t.clear();else{ce===0&&(t.setRenderTarget(O.map),t.clear());const Y=O.getViewport(ce);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),I.viewport(a)}i=O.getFrustum(ce),M(v,E,Ne,z,Z,this.type)}O.isPointLightShadow!==!0&&this.type===oa&&m(O,E),O.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(C,R,P)};function m(b,v){const E=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null?b.mapPass=new mi(r.x,r.y,{format:Or,type:xi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(v,null,E,f,S,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value.set(b.map.width,b.map.height),g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(v,null,E,g,S,null)}function y(b,v,E,C){let R=null;const P=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)R=P;else if(R=E.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const I=R.uuid,H=v.uuid;let L=u[I];L===void 0&&(L={},u[I]=L);let W=L[H];W===void 0&&(W=R.clone(),L[H]=W,v.addEventListener("dispose",A)),R=W}if(R.visible=v.visible,R.wireframe=v.wireframe,C===oa?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:p[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=t.properties.get(R);I.light=E}return R}function M(b,v,E,C,R,P){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===oa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const L=e.update(b),W=b.material;if(Array.isArray(W)){const z=L.groups;for(let O=0,k=z.length;O<k;O++){const F=z[O],V=W[F.materialIndex];if(V&&V.visible){const Z=y(b,V,C,P);b.onBeforeShadow(t,b,v,E,L,Z,F),t.renderBufferDirect(E,null,L,Z,b,F),b.onAfterShadow(t,b,v,E,L,Z,F)}}}else if(W.visible){const z=y(b,W,C,P);b.onBeforeShadow(t,b,v,E,L,z,null),t.renderBufferDirect(E,null,L,z,b,null),b.onAfterShadow(t,b,v,E,L,z,null)}}const H=b.children;for(let L=0,W=H.length;L<W;L++)M(H[L],v,E,C,R,P)}function A(b){b.target.removeEventListener("dispose",A);for(const E in u){const C=u[E],R=b.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function dT(t,e){function n(){let D=!1;const ee=new Et;let K=null;const de=new Et(0,0,0,0);return{setMask:function(ae){K!==ae&&!D&&(t.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){D=ae},setClear:function(ae,le,Re,Be,se){se===!0&&(ae*=Be,le*=Be,Re*=Be),ee.set(ae,le,Re,Be),de.equals(ee)===!1&&(t.clearColor(ae,le,Re,Be),de.copy(ee))},reset:function(){D=!1,K=null,de.set(-1,0,0,0)}}}function i(){let D=!1,ee=!1,K=null,de=null,ae=null;return{setReversed:function(le){if(ee!==le){const Re=e.get("EXT_clip_control");le?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ee=le;const Be=ae;ae=null,this.setClear(Be)}},getReversed:function(){return ee},setTest:function(le){le?ve(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(le){K!==le&&!D&&(t.depthMask(le),K=le)},setFunc:function(le){if(ee&&(le=BS[le]),de!==le){switch(le){case md:t.depthFunc(t.NEVER);break;case gd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case ka:t.depthFunc(t.LEQUAL);break;case vd:t.depthFunc(t.EQUAL);break;case _d:t.depthFunc(t.GEQUAL);break;case yd:t.depthFunc(t.GREATER);break;case Sd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=le}},setLocked:function(le){D=le},setClear:function(le){ae!==le&&(ae=le,ee&&(le=1-le),t.clearDepth(le))},reset:function(){D=!1,K=null,de=null,ae=null,ee=!1}}}function r(){let D=!1,ee=null,K=null,de=null,ae=null,le=null,Re=null,Be=null,se=null;return{setTest:function(Ce){D||(Ce?ve(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(Ce){ee!==Ce&&!D&&(t.stencilMask(Ce),ee=Ce)},setFunc:function(Ce,ke,_e){(K!==Ce||de!==ke||ae!==_e)&&(t.stencilFunc(Ce,ke,_e),K=Ce,de=ke,ae=_e)},setOp:function(Ce,ke,_e){(le!==Ce||Re!==ke||Be!==_e)&&(t.stencilOp(Ce,ke,_e),le=Ce,Re=ke,Be=_e)},setLocked:function(Ce){D=Ce},setClear:function(Ce){se!==Ce&&(t.clearStencil(Ce),se=Ce)},reset:function(){D=!1,ee=null,K=null,de=null,ae=null,le=null,Re=null,Be=null,se=null}}}const s=new n,a=new i,o=new r;let l={};const u=new WeakMap;let h={},p={},f={},g=new WeakMap,_=[],S=null,x=!1,d=null,m=null,y=null,M=null,A=null,b=null,v=null,E=new Ge(0,0,0),C=0,R=!1,P=null,I=null,H=null,L=null,W=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=k>=2);let V=null,Z={};const ce=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),Y=new Et().fromArray(ce),fe=new Et().fromArray(Ne);function xe(D,ee,K,de){const ae=new Uint8Array(4),le=t.createTexture();t.bindTexture(D,le),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<K;Re++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ee+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return le}const we={};we[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),a.setFunc(ka),Wt(!1),at(Xp),ve(t.CULL_FACE),Lt(Ss);function ve(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function ht(D,ee){return f[D]!==ee?(t.bindFramebuffer(D,ee),f[D]=ee,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(D,ee){let K=_,de=!1;if(D){K=g.get(ee),K===void 0&&(K=[],g.set(ee,K));const ae=D.textures;if(K.length!==ae.length||K[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Re=ae.length;le<Re;le++)K[le]=t.COLOR_ATTACHMENT0+le;K.length=ae.length,de=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,de=!0);de&&t.drawBuffers(K)}function Qe(D){return S!==D?(t.useProgram(D),S=D,!0):!1}const Je={[ns]:t.FUNC_ADD,[oS]:t.FUNC_SUBTRACT,[lS]:t.FUNC_REVERSE_SUBTRACT};Je[cS]=t.MIN,Je[uS]=t.MAX;const He={[dS]:t.ZERO,[fS]:t.ONE,[hS]:t.SRC_COLOR,[fx]:t.SRC_ALPHA,[_S]:t.SRC_ALPHA_SATURATE,[xS]:t.DST_COLOR,[mS]:t.DST_ALPHA,[pS]:t.ONE_MINUS_SRC_COLOR,[hx]:t.ONE_MINUS_SRC_ALPHA,[vS]:t.ONE_MINUS_DST_COLOR,[gS]:t.ONE_MINUS_DST_ALPHA,[yS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function Lt(D,ee,K,de,ae,le,Re,Be,se,Ce){if(D===Ss){x===!0&&(Ie(t.BLEND),x=!1);return}if(x===!1&&(ve(t.BLEND),x=!0),D!==aS){if(D!==d||Ce!==R){if((m!==ns||A!==ns)&&(t.blendEquation(t.FUNC_ADD),m=ns,A=ns),Ce)switch(D){case _a:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFunc(t.ONE,t.ONE);break;case $p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case _a:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $p:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yp:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}y=null,M=null,b=null,v=null,E.set(0,0,0),C=0,d=D,R=Ce}return}ae=ae||ee,le=le||K,Re=Re||de,(ee!==m||ae!==A)&&(t.blendEquationSeparate(Je[ee],Je[ae]),m=ee,A=ae),(K!==y||de!==M||le!==b||Re!==v)&&(t.blendFuncSeparate(He[K],He[de],He[le],He[Re]),y=K,M=de,b=le,v=Re),(Be.equals(E)===!1||se!==C)&&(t.blendColor(Be.r,Be.g,Be.b,se),E.copy(Be),C=se),d=D,R=!1}function _t(D,ee){D.side===Qn?Ie(t.CULL_FACE):ve(t.CULL_FACE);let K=D.side===En;ee&&(K=!K),Wt(K),D.blending===_a&&D.transparent===!1?Lt(Ss):Lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function at(D){D!==iS?(ve(t.CULL_FACE),D!==I&&(D===Xp?t.cullFace(t.BACK):D===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),I=D}function Dn(D){D!==H&&(O&&t.lineWidth(D),H=D)}function At(D,ee,K){D?(ve(t.POLYGON_OFFSET_FILL),(L!==ee||W!==K)&&(L=ee,W=K,a.getReversed()&&(ee=-ee,K=-K),t.polygonOffset(ee,K))):Ie(t.POLYGON_OFFSET_FILL)}function Dt(D){D?ve(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function It(D){D===void 0&&(D=t.TEXTURE0+z-1),V!==D&&(t.activeTexture(D),V=D)}function In(D,ee,K){K===void 0&&(V===null?K=t.TEXTURE0+z-1:K=V);let de=Z[K];de===void 0&&(de={type:void 0,texture:void 0},Z[K]=de),(de.type!==D||de.texture!==ee)&&(V!==K&&(t.activeTexture(K),V=K),t.bindTexture(D,ee||we[D]),de.type=D,de.texture=ee)}function B(){const D=Z[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Un(){try{t.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function pt(){try{t.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function mt(){try{t.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function ge(){try{t.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ut(){try{t.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ue(){try{t.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function N(){try{t.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function w(){try{t.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function X(){try{t.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function ie(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function te(D,ee){p[D]!==ee&&(t.pixelStorei(D,ee),p[D]=ee)}function oe(D){Y.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function pe(D){fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function J(D,ee){let K=u.get(ee);K===void 0&&(K=new WeakMap,u.set(ee,K));let de=K.get(D);de===void 0&&(de=t.getUniformBlockIndex(ee,D.name),t.uniformBlockBinding(ee,de,de),K.set(D,de))}function Q(D,ee,K){const ae=u.get(ee).get(D);l[ae]!==K&&(t.bindBufferBase(t.UNIFORM_BUFFER,ae,K),l[ae]=K)}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,Z={},f={},l={},g=new WeakMap,_=[],S=null,x=!1,d=null,m=null,y=null,M=null,A=null,b=null,v=null,E=new Ge(0,0,0),C=0,R=!1,P=null,I=null,H=null,L=null,W=null,Y.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ve,disable:Ie,bindFramebuffer:ht,drawBuffers:Pe,useProgram:Qe,setBlending:Lt,setMaterial:_t,setFlipSided:Wt,setCullFace:at,setLineWidth:Dn,setPolygonOffset:At,setScissorTest:Dt,activeTexture:It,bindTexture:In,unbindTexture:B,compressedTexImage2D:Un,compressedTexImage3D:pt,texImage2D:w,texImage3D:X,pixelStorei:te,getParameter:ie,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Ue,texStorage3D:N,texSubImage2D:mt,texSubImage3D:ge,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Le,scissor:oe,viewport:pe,reset:ue}}function fT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,h=new WeakMap,p=new Set;let f;const g=new WeakMap,_=new Set,S=new FinalizationRegistry(N=>_.delete(N));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(N,w){return x?new OffscreenCanvas(N,w):Vl("canvas")}function m(N,w,X){let ie=1;const te=Ue(N);if((te.width>X||te.height>X)&&(ie=X/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(ie*te.width),pe=Math.floor(ie*te.height);f===void 0&&(f=d(oe,pe));const J=w?d(oe,pe):f;return J.width=oe,J.height=pe,J.getContext("2d").drawImage(N,0,0,oe,pe),De("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+pe+")."),J}else return"data"in N&&De("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function y(N){return N.generateMipmaps}function M(N){t.generateMipmap(N)}function A(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(N,w,X,ie,te,oe=!1){if(N!==null){if(t[N]!==void 0)return t[N];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe;ie&&(pe=e.get("EXT_texture_norm16"),pe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=w;if(w===t.RED&&(X===t.FLOAT&&(J=t.R32F),X===t.HALF_FLOAT&&(J=t.R16F),X===t.UNSIGNED_BYTE&&(J=t.R8),X===t.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),X===t.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.R8UI),X===t.UNSIGNED_SHORT&&(J=t.R16UI),X===t.UNSIGNED_INT&&(J=t.R32UI),X===t.BYTE&&(J=t.R8I),X===t.SHORT&&(J=t.R16I),X===t.INT&&(J=t.R32I)),w===t.RG&&(X===t.FLOAT&&(J=t.RG32F),X===t.HALF_FLOAT&&(J=t.RG16F),X===t.UNSIGNED_BYTE&&(J=t.RG8),X===t.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),X===t.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RG8UI),X===t.UNSIGNED_SHORT&&(J=t.RG16UI),X===t.UNSIGNED_INT&&(J=t.RG32UI),X===t.BYTE&&(J=t.RG8I),X===t.SHORT&&(J=t.RG16I),X===t.INT&&(J=t.RG32I)),w===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RGB8UI),X===t.UNSIGNED_SHORT&&(J=t.RGB16UI),X===t.UNSIGNED_INT&&(J=t.RGB32UI),X===t.BYTE&&(J=t.RGB8I),X===t.SHORT&&(J=t.RGB16I),X===t.INT&&(J=t.RGB32I)),w===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),X===t.UNSIGNED_INT&&(J=t.RGBA32UI),X===t.BYTE&&(J=t.RGBA8I),X===t.SHORT&&(J=t.RGBA16I),X===t.INT&&(J=t.RGBA32I)),w===t.RGB&&(X===t.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),X===t.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),w===t.RGBA){const Q=oe?Gl:qe.getTransfer(te);X===t.FLOAT&&(J=t.RGBA32F),X===t.HALF_FLOAT&&(J=t.RGBA16F),X===t.UNSIGNED_BYTE&&(J=Q===it?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),X===t.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(N,w){let X;return N?w===null||w===gi||w===Ps?X=t.DEPTH24_STENCIL8:w===di?X=t.DEPTH32F_STENCIL8:w===za&&(X=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gi||w===Ps?X=t.DEPTH_COMPONENT24:w===di?X=t.DEPTH_COMPONENT32F:w===za&&(X=t.DEPTH_COMPONENT16),X}function E(N,w){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==$t&&N.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function C(N){const w=new WeakRef(N);i.get(N).__ref=w,_.add(w),S.register(N,w,w)}function R(N){const w=i.get(N).__ref;w!==void 0&&(_.delete(w),S.unregister(w))}function P(N){H(N.target)}function I(N){L(N.target)}function H(N){N.removeEventListener("dispose",P),R(N),z(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&p.delete(N)}function L(N){N.removeEventListener("dispose",I),R(N),k(N)}function W(){for(const N of _){const w=N.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):H(w))}_.clear(),p.clear()}function z(N){const w=i.get(N);if(w.__webglInit===void 0)return;const X=N.source,ie=g.get(X);if(ie){const te=ie[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(N),Object.keys(ie).length===0&&g.delete(X)}i.remove(N)}function O(N){const w=i.get(N);t.deleteTexture(w.__webglTexture);const X=N.source,ie=g.get(X);delete ie[w.__cacheKey],a.memory.textures--}function k(N){const w=i.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();const X=N.depthTexture;if(X&&X.renderTarget===N&&H(X),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let oe=0;oe<w.__webglFramebuffer[te].length;oe++)t.deleteFramebuffer(w.__webglFramebuffer[te][oe]);else t.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)t.deleteFramebuffer(w.__webglFramebuffer[te]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=N.textures;for(let te=0,oe=ie.length;te<oe;te++){const pe=i.get(ie[te]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(ie[te])}i.remove(N)}let F=0;function V(){F=0}function Z(){return F}function ce(N){F=N}function Ne(){const N=F;return N>=r.maxTextures&&De("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,N}function Y(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function fe(N,w){const X=i.get(N);if(N.isVideoTexture&&Ut(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){const ie=N.image;if(ie===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(X,N,w);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function xe(N,w){const X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){_t(X,N,w);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function we(N,w){const X=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){_t(X,N,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function ve(N,w){const X=i.get(N);if(N.version>0&&X.__version!==N.version){Wt(X,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const Ie={[Md]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},ht={[$t]:t.NEAREST,[TS]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[$c]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},Pe={[NS]:t.NEVER,[Lx]:t.ALWAYS,[PS]:t.LESS,[Nx]:t.LEQUAL,[LS]:t.EQUAL,[Px]:t.GEQUAL,[DS]:t.GREATER,[IS]:t.NOTEQUAL};function Qe(N,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===$c||w.magFilter===Mo||w.magFilter===Qi||w.minFilter===_n||w.minFilter===$c||w.minFilter===Mo||w.minFilter===Qi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,Ie[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,Ie[w.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,Ie[w.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,ht[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$t||w.minFilter!==Mo&&w.minFilter!==Qi||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Je(N,w){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",P),C(w));const ie=w.source;let te=g.get(ie);te===void 0&&(te={},g.set(ie,te));const oe=Y(w);if(oe!==N.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[oe].usedTimes++;const pe=te[N.__cacheKey];pe!==void 0&&(te[N.__cacheKey].usedTimes--,pe.usedTimes===0&&O(w)),N.__cacheKey=oe,N.__webglTexture=te[oe].texture}return X}function He(N,w,X){return Math.floor(Math.floor(N/X)/w)}function Lt(N,w,X,ie){const oe=N.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,X,ie,w.data);else{oe.sort((D,ee)=>D.start-ee.start);let pe=0;for(let D=1;D<oe.length;D++){const ee=oe[pe],K=oe[D],de=ee.start+ee.count,ae=He(K.start,w.width,4),le=He(ee.start,w.width,4);K.start<=de+1&&ae===le&&He(K.start+K.count-1,w.width,4)===ae?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++pe,oe[pe]=K)}oe.length=pe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let D=0,ee=oe.length;D<ee;D++){const K=oe[D],de=Math.floor(K.start/4),ae=Math.ceil(K.count/4),le=de%w.width,Re=Math.floor(de/w.width),Be=ae,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,Re),n.texSubImage2D(t.TEXTURE_2D,0,le,Re,Be,se,X,ie,w.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function _t(N,w,X){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const te=Je(N,w),oe=w.source;n.bindTexture(ie,N.__webglTexture,t.TEXTURE0+X);const pe=i.get(oe);if(oe.version!==pe.__version||te===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const se=qe.getPrimaries(qe.workingColorSpace),Ce=w.colorSpace===Ki?null:qe.getPrimaries(w.colorSpace),ke=w.colorSpace===Ki||se===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let Q=m(w.image,!1,r.maxTextureSize);Q=Le(w,Q);const ue=s.convert(w.format,w.colorSpace),D=s.convert(w.type);let ee=b(w.internalFormat,ue,D,w.normalized,w.colorSpace,w.isVideoTexture);Qe(ie,w);let K;const de=w.mipmaps,ae=w.isVideoTexture!==!0,le=pe.__version===void 0||te===!0,Re=oe.dataReady,Be=E(w,Q);if(w.isDepthTexture)ee=v(w.format===er,w.type),le&&(ae?n.texStorage2D(t.TEXTURE_2D,1,ee,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,ue,D,null));else if(w.isDataTexture)if(de.length>0){ae&&le&&n.texStorage2D(t.TEXTURE_2D,Be,ee,de[0].width,de[0].height);for(let se=0,Ce=de.length;se<Ce;se++)K=de[se],ae?Re&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,K.width,K.height,ue,D,K.data):n.texImage2D(t.TEXTURE_2D,se,ee,K.width,K.height,0,ue,D,K.data);w.generateMipmaps=!1}else ae?(le&&n.texStorage2D(t.TEXTURE_2D,Be,ee,Q.width,Q.height),Re&&Lt(w,Q,ue,D)):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,ue,D,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ae&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,ee,de[0].width,de[0].height,Q.depth);for(let se=0,Ce=de.length;se<Ce;se++)if(K=de[se],w.format!==fi)if(ue!==null)if(ae){if(Re)if(w.layerUpdates.size>0){const ke=Em(K.width,K.height,w.format,w.type);for(const _e of w.layerUpdates){const nt=K.data.subarray(_e*ke/K.data.BYTES_PER_ELEMENT,(_e+1)*ke/K.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,_e,K.width,K.height,1,ue,nt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,Q.depth,ue,K.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,ee,K.width,K.height,Q.depth,0,K.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,Q.depth,ue,D,K.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,ee,K.width,K.height,Q.depth,0,ue,D,K.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ae&&le&&n.texStorage2D(t.TEXTURE_2D,Be,ee,de[0].width,de[0].height);for(let se=0,Ce=de.length;se<Ce;se++)K=de[se],w.format!==fi?ue!==null?ae?Re&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,K.width,K.height,ue,K.data):n.compressedTexImage2D(t.TEXTURE_2D,se,ee,K.width,K.height,0,K.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Re&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,K.width,K.height,ue,D,K.data):n.texImage2D(t.TEXTURE_2D,se,ee,K.width,K.height,0,ue,D,K.data)}else if(w.isDataArrayTexture)if(ae){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,ee,Q.width,Q.height,Q.depth),Re)if(w.layerUpdates.size>0){const se=Em(Q.width,Q.height,w.format,w.type);for(const Ce of w.layerUpdates){const ke=Q.data.subarray(Ce*se/Q.data.BYTES_PER_ELEMENT,(Ce+1)*se/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,Q.width,Q.height,1,ue,D,ke)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,D,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,ue,D,Q.data);else if(w.isData3DTexture)ae?(le&&n.texStorage3D(t.TEXTURE_3D,Be,ee,Q.width,Q.height,Q.depth),Re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,D,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,ue,D,Q.data);else if(w.isFramebufferTexture){if(le)if(ae)n.texStorage2D(t.TEXTURE_2D,Be,ee,Q.width,Q.height);else{let se=Q.width,Ce=Q.height;for(let ke=0;ke<Be;ke++)n.texImage2D(t.TEXTURE_2D,ke,ee,se,Ce,0,ue,D,null),se>>=1,Ce>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Q.parentNode!==se){se.appendChild(Q),p.add(w),se.onpaint=Ce=>{const ke=Ce.changedElements;for(const _e of p)ke.includes(_e.image)&&(_e.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ke=t.RGBA,_e=t.RGBA,nt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ke,_e,nt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const se=Ue(de[0]);n.texStorage2D(t.TEXTURE_2D,Be,ee,se.width,se.height)}for(let se=0,Ce=de.length;se<Ce;se++)K=de[se],ae?Re&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,ue,D,K):n.texImage2D(t.TEXTURE_2D,se,ee,ue,D,K);w.generateMipmaps=!1}else if(ae){if(le){const se=Ue(Q);n.texStorage2D(t.TEXTURE_2D,Be,ee,se.width,se.height)}Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,D,Q)}else n.texImage2D(t.TEXTURE_2D,0,ee,ue,D,Q);y(w)&&w.mipmapsAutoUpdate===!0&&M(ie),pe.__version=oe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Wt(N,w,X){if(w.image.length!==6)return;const ie=Je(N,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+X);const oe=i.get(te);if(te.version!==oe.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const pe=qe.getPrimaries(qe.workingColorSpace),J=w.colorSpace===Ki?null:qe.getPrimaries(w.colorSpace),Q=w.colorSpace===Ki||pe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ue=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!ue&&!D?ee[_e]=m(w.image[_e],!0,r.maxCubemapSize):ee[_e]=D?w.image[_e].image:w.image[_e],ee[_e]=Le(w,ee[_e]);const K=ee[0],de=s.convert(w.format,w.colorSpace),ae=s.convert(w.type);let le=b(w.internalFormat,de,ae,w.normalized,w.colorSpace);const Re=w.isVideoTexture!==!0,Be=oe.__version===void 0||ie===!0,se=te.dataReady;let Ce=E(w,K);Qe(t.TEXTURE_CUBE_MAP,w);let ke;if(w.isDepthTexture){if(le=v(w.format===er,w.type),Be)if(Re)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,le,K.width,K.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,K.width,K.height,0,de,ae,null)}else if(ue){Re&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,le,K.width,K.height);for(let _e=0;_e<6;_e++){ke=ee[_e].mipmaps;for(let nt=0;nt<ke.length;nt++){const zt=ke[nt];w.format!==fi?de!==null?Re?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,zt.width,zt.height,de,zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,le,zt.width,zt.height,0,zt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,zt.width,zt.height,de,ae,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,le,zt.width,zt.height,0,de,ae,zt.data)}}}else{if(ke=w.mipmaps,Re&&Be){ke.length>0&&Ce++;const _e=Ue(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,le,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(D){Re?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,de,ae,ee[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,ee[_e].width,ee[_e].height,0,de,ae,ee[_e].data);for(let nt=0;nt<ke.length;nt++){const Oi=ke[nt].image[_e].image;Re?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,Oi.width,Oi.height,de,ae,Oi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,le,Oi.width,Oi.height,0,de,ae,Oi.data)}}else{Re?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,ae,ee[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,de,ae,ee[_e]);for(let nt=0;nt<ke.length;nt++){const zt=ke[nt];Re?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,de,ae,zt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,le,de,ae,zt.image[_e])}}}y(w)&&w.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),oe.__version=te.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function at(N,w,X,ie,te,oe){const pe=s.convert(X.format,X.colorSpace),J=s.convert(X.type),Q=b(X.internalFormat,pe,J,X.normalized,X.colorSpace),ue=i.get(w),D=i.get(X);if(D.__renderTarget=w,!ue.__hasExternalTextures){const ee=Math.max(1,w.width>>oe),K=Math.max(1,w.height>>oe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,oe,Q,ee,K,w.depth,0,pe,J,null):n.texImage2D(te,oe,Q,ee,K,0,pe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),ge(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,D.__webglTexture,0,mt(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,D.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dn(N,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer){const ie=w.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,oe=v(w.stencilBuffer,te),pe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(w),oe,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(w),oe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,oe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,N)}else{const ie=w.textures;for(let te=0;te<ie.length;te++){const oe=ie[te],pe=s.convert(oe.format,oe.colorSpace),J=s.convert(oe.type),Q=b(oe.internalFormat,pe,J,oe.normalized,oe.colorSpace);ge(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(w),Q,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(w),Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function At(N,w,X){const ie=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(w.depthTexture);te.__renderTarget=w;const oe=ie?w.depthTexture.image[0]:w.depthTexture.image;(!te.__webglTexture||oe.width!==w.width||oe.height!==w.height)&&(oe.width=w.width,oe.height=w.height,w.depthTexture.needsUpdate=!0),ie?ve(w.depthTexture,0):fe(w.depthTexture,0);const pe=te.__webglTexture,J=mt(w),Q=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,ue=w.depthTexture.format===er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===dr)ge(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,Q,pe,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,ue,Q,pe,0);else if(w.depthTexture.format===er)ge(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,Q,pe,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,ue,Q,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(N){const w=i.get(N),X=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=ie}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let ie=0;ie<6;ie++)At(w.__webglFramebuffer[ie],N,ie);else N.texture.mipmaps.length>0?At(w.__webglFramebuffer[0],N,0):At(w.__webglFramebuffer,N,0);else if(X){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=t.createRenderbuffer(),Dn(w.__webglDepthbuffer[ie],N,!1);else{const te=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,oe)}}else if(N.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),Dn(w.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function It(N,w,X){const ie=i.get(N);w!==void 0&&at(ie.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Dt(N)}function In(N){const w=N.texture,X=i.get(N),ie=i.get(w);N.addEventListener("dispose",I),C(N);const te=N.textures,oe=N.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,a.memory.textures++),oe){X.__webglFramebuffer=[];for(let J=0;J<6;J++)if(w.mipmaps.length>0){X.__webglFramebuffer[J]=[];for(let Q=0;Q<w.mipmaps.length;Q++)X.__webglFramebuffer[J][Q]=t.createFramebuffer()}else X.__webglFramebuffer[J]=t.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let J=0;J<w.mipmaps.length;J++)X.__webglFramebuffer[J]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(pe)for(let J=0,Q=te.length;J<Q;J++){const ue=i.get(te[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&ge(N)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){const Q=te[J];X.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[J]);const ue=s.convert(Q.format,Q.colorSpace),D=s.convert(Q.type),ee=b(Q.internalFormat,ue,D,Q.normalized,Q.colorSpace,N.isXRRenderTarget===!0),K=mt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,K,ee,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,X.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Dn(X.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(t.TEXTURE_CUBE_MAP,w);for(let J=0;J<6;J++)if(w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)at(X.__webglFramebuffer[J][Q],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else at(X.__webglFramebuffer[J],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);y(w)?M(t.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(pe){for(let J=0,Q=te.length;J<Q;J++){const ue=te[J],D=i.get(ue);let ee=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,D.__webglTexture),Qe(ee,ue),at(X.__webglFramebuffer,N,ue,t.COLOR_ATTACHMENT0+J,ee,0),y(ue)&&M(ee)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(J=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,ie.__webglTexture),Qe(J,w),w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)at(X.__webglFramebuffer[Q],N,w,t.COLOR_ATTACHMENT0,J,Q);else at(X.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,J,0);y(w)?M(J):w.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}N.depthBuffer&&Dt(N)}function B(N){const w=N.textures;for(let X=0,ie=w.length;X<ie;X++){const te=w[X];if(y(te)&&te.mipmapsAutoUpdate===!0){const oe=A(N),pe=i.get(te).__webglTexture;n.bindTexture(oe,pe),M(oe),n.unbindTexture()}}}const Un=[];function pt(N){if(N.samples>0){if(ge(N)===!1){const w=N.textures,X=N.width,ie=N.height;let te=t.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(N),J=w.length>1;if(J)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const D=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,X,ie,0,0,X,ie,te,t.NEAREST),l===!0&&(Un.length=0,Un.push(t.COLOR_ATTACHMENT0+ue),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Un.push(oe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Un))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const D=i.get(w[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function mt(N){return Math.min(r.maxSamples,N.samples)}function ge(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(N){const w=a.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function Le(N,w){const X=N.colorSpace,ie=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==Hl&&X!==Ki&&(qe.getTransfer(X)===it?(ie!==fi||te!==An)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",X)),w}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=Ne,this.resetTextureUnits=V,this.getTextureUnits=Z,this.setTextureUnits=ce,this.setTexture2D=fe,this.setTexture2DArray=xe,this.setTexture3D=we,this.setTextureCube=ve,this.rebindTextures=It,this.setupRenderTarget=In,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ge,this.dispose=W}function hT(t,e){function n(i,r=Ki){let s;const a=qe.getTransfer(r);if(i===An)return t.UNSIGNED_BYTE;if(i===ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===oh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Tx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ex)return t.BYTE;if(i===wx)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===sh)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===xi)return t.HALF_FLOAT;if(i===Ax)return t.ALPHA;if(i===Rx)return t.RGB;if(i===fi)return t.RGBA;if(i===dr)return t.DEPTH_COMPONENT;if(i===er)return t.DEPTH_STENCIL;if(i===Cx)return t.RED;if(i===lh)return t.RED_INTEGER;if(i===Or)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===uh)return t.RGBA_INTEGER;if(i===sl||i===al||i===ol||i===ll)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===bd||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Cd||i===Nd||i===Pd||i===Ld||i===Bl||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rd||i===Cd)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pd)return s.COMPRESSED_R11_EAC;if(i===Ld)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bl)return s.COMPRESSED_RG11_EAC;if(i===Dd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Gd||i===Vd||i===jd||i===Wd||i===Xd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$d||i===Yd||i===Kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$d)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zd||i===Jd||i===zl||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const pT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mT=`
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

}`;class gT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Gx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new kr({vertexShader:pT,fragmentShader:mT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dn(new mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xT extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,f=null,g=null,_=null;const S=typeof XRWebGLBinding<"u",x=new gT,d={},m=n.getContextAttributes();let y=null,M=null;const A=[],b=[],v=new Xe;let E=null,C=null;const R=new zn;R.viewport=new Et;const P=new zn;P.viewport=new Et;const I=[R,P],H=new AM;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=A[Y];return fe===void 0&&(fe=new iu,A[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=A[Y];return fe===void 0&&(fe=new iu,A[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=A[Y];return fe===void 0&&(fe=new iu,A[Y]=fe),fe.getHandSpace()};function z(Y){const fe=b.indexOf(Y.inputSource);if(fe===-1)return;const xe=A[fe];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,u||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<A.length;Y++){const fe=b[Y];fe!==null&&(b[Y]=null,A[Y].disconnect(fe))}L=null,W=null,x.reset();for(const Y in d)delete d[Y];if(e.setRenderTarget(y),g=null,f=null,p=null,r=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),C!==null){const Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,we=null,ve=null;m.depth&&(ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=m.stencil?er:dr,we=m.stencil?Ps:gi);const Ie={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new mi(f.textureWidth,f.textureHeight,{format:fi,type:An,depthTexture:new Ls(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new mi(g.framebufferWidth,g.framebufferHeight,{format:fi,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(Y){for(let fe=0;fe<Y.removed.length;fe++){const xe=Y.removed[fe],we=b.indexOf(xe);we>=0&&(b[we]=null,A[we].disconnect(xe))}for(let fe=0;fe<Y.added.length;fe++){const xe=Y.added[fe];let we=b.indexOf(xe);if(we===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=b.length){b.push(xe),we=Ie;break}else if(b[Ie]===null){b[Ie]=xe,we=Ie;break}if(we===-1)break}const ve=A[we];ve&&ve.connect(xe)}}function F(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let fe=Y.near,xe=Y.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),H.near=P.near=R.near=fe,H.far=P.far=R.far=xe,(L!==H.near||W!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,W=H.far),H.layers.mask=Y.layers.mask|6,R.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;const we=Y.parent,ve=H.cameras;F(H,we);for(let Ie=0;Ie<ve.length;Ie++)F(ve[Ie],we);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),V(Y,H,we)};function V(Y,fe,xe){xe===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=tf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(Y){return d[Y]};let Z=null;function ce(Y,fe){if(h=fe.getViewerPose(u||a),_=fe,h!==null){const xe=h.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let we=!1;xe.length!==H.cameras.length&&(H.cameras.length=0,we=!0);for(let Pe=0;Pe<xe.length;Pe++){const Qe=xe[Pe];let Je=null;if(g!==null)Je=g.getViewport(Qe);else{const Lt=p.getViewSubImage(f,Qe);Je=Lt.viewport,Pe===0&&(e.setRenderTargetTextures(M,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(M))}let He=I[Pe];He===void 0&&(He=new zn,He.layers.enable(Pe),He.viewport=new Et,I[Pe]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Je.x,Je.y,Je.width,Je.height),Pe===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),we===!0&&H.cameras.push(He)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const Pe=p.getDepthInformation(xe[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,r.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let Pe=0;Pe<xe.length;Pe++){const Qe=xe[Pe].camera;if(Qe){let Je=d[Qe];Je||(Je=new Gx,d[Qe]=Je);const He=p.getCameraImage(Qe);Je.sourceTexture=He}}}}for(let xe=0;xe<A.length;xe++){const we=b[xe],ve=A[xe];we!==null&&ve!==void 0&&ve.update(we,fe,u||a)}Z&&Z(Y,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Ne=new qx;Ne.setAnimationLoop(ce),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}const vT=new vt,iv=new Fe;iv.set(-1,0,0,0,1,0,0,0,1);function _T(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,Vx(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,m,y,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&g(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),S(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,m,y):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===En&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===En&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const m=e.get(d),y=m.envMap,M=m.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(vT.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(iv),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,m,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*m,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,m){x.ior.value=d.ior,d.diffuseRoughness>0&&(x.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function S(x,d){const m=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yT(t,e,n,i){let r={},s={};function a(m,y){const M=y.program;i.uniformBlockBinding(m,M,r[m.id])}function o(m,y){let M=r[m.id];M===void 0&&(_(m),M=l(m),r[m.id]=M,m.addEventListener("dispose",x));const A=y.program;i.updateUBOMapping(m,A);const b=e.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function l(m){const y=t.createBuffer(),M=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(m){const y=r[m.id],M=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,v=M.length;b<v;b++){const E=M[b];if(Array.isArray(E))for(let C=0,R=E.length;C<R;C++)h(E[C],b,C,A);else h(E,b,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(m,y,M,A){if(f(m,y,M,A)===!0){const b=m.__offset,v=m.value;if(Array.isArray(v)){let E=0;for(let C=0;C<v.length;C++){const R=v[C],P=S(R,!0);p(R,m.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,b,m.__data)}}function p(m,y,M){typeof m=="number"||typeof m=="boolean"?y[M]=m:m.isMatrix3?(y[M]=m.elements[0],y[M+1]=m.elements[1],y[M+2]=m.elements[2],y[M+3]=0,y[M+4]=m.elements[3],y[M+5]=m.elements[4],y[M+6]=m.elements[5],y[M+7]=0,y[M+8]=m.elements[6],y[M+9]=m.elements[7],y[M+10]=m.elements[8],y[M+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-M),M):m.toArray(y,M)}function f(m,y,M,A){const b=m.value,v=y+"_"+M;if(Array.isArray(b)){A[v]===void 0&&(A[v]=[]);const E=A[v];let C=!1;for(let R=0;R<b.length;R++)g(b[R],E,R)===!0&&(C=!0);return C}return g(b,A,v)}function g(m,y,M){if(y[M]===void 0)return typeof m=="number"||typeof m=="boolean"?y[M]=m:ArrayBuffer.isView(m)?y[M]=m.slice():y[M]=m.clone(),!0;{const A=y[M];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function _(m){const y=m.uniforms;let M=0;const A=16;for(let v=0,E=y.length;v<E;v++){const C=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,P=C.length;R<P;R++){const I=C[R],H=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(y[v])||Array.isArray(I.value);let W=M;for(let O=0,k=H.length;O<k;O++){const F=H[O],V=S(F,L),Z=M%A,ce=Z%V.boundary,Ne=Z+ce;M+=ce,Ne!==0&&A-Ne<V.storage&&(M+=A-Ne),O===0&&(W=M),M+=V.storage}const z=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new z((M-W)/Float32Array.BYTES_PER_ELEMENT),I.__offset=W}}const b=M%A;return b>0&&(M+=A-b),m.__size=M,m.__cache={},this}function S(m,y){const M={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(M.boundary=4,M.storage=4):m.isVector2?(M.boundary=8,M.storage=8):m.isVector3||m.isColor?(M.boundary=16,M.storage=12):m.isVector4?(M.boundary=16,M.storage=16):m.isMatrix3?(M.boundary=16,M.storage=48):m.isMatrix4?(M.boundary=16,M.storage=64):m.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(M.boundary=16,M.storage=m.byteLength):De("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(m){const y=m.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:o,dispose:d}}const ST=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function MT(){return oi===null&&(oi=new dM(ST,16,16,Or,xi),oi.name="DFG_LUT",oi.minFilter=_n,oi.magFilter=_n,oi.wrapS=Ri,oi.wrapT=Ri,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class ET{constructor(e={}){const{canvas:n=OS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=An}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=g,x=new Set([uh,ch,lh]),d=new Set([An,gi,za,Ps,ah,oh]),m=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let A=null,b=null;const v=[],E=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,I=null,H=null,L=null,W=null;this._outputColorSpace=On;let z=0,O=0,k=null,F=-1,V=null;const Z=new Et,ce=new Et;let Ne=null;const Y=new Ge(0);let fe=0,xe=n.width,we=n.height,ve=1,Ie=null,ht=null;const Pe=new Et(0,0,xe,we),Qe=new Et(0,0,xe,we);let Je=!1;const He=new Ga,Lt=new ph;let _t=!1,Wt=!1;const at=new vt,Dn=new G,At=new Et,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function In(){return k===null?ve:1}let B=i;function Un(T,U){return n.getContext(T,U)}let pt,mt,ge,Ut,Le,Ue,N,w,X,ie,te,oe,pe,J,Q,ue,D,ee,K,de,ae,le,Re;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",_e,!1),B===null){const U="webgl2";if(B=Un(U,T),B===null)throw Un(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(T){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),tt("WebGLRenderer: "+T.message),T}function Be(){pt=new Tw(B),pt.init(),ae=new hT(B,pt),mt=new mw(B,pt,e,ae),ge=new dT(B,pt),mt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),H=B.createFramebuffer(),L=B.createFramebuffer(),W=B.createFramebuffer(),Ut=new Cw(B),Le=new Zb,Ue=new fT(B,pt,ge,Le,mt,ae,Ut),N=new bw(R),w=new PM(B),le=new hw(B,w),X=new Aw(B,w,Ut,le),ie=new Pw(B,X,w,le,Ut),ee=new Nw(B,mt,Ue),Q=new gw(Le),te=new Kb(R,N,pt,mt,le,Q),oe=new _T(R,Le),pe=new Qb,J=new sT(pt),D=new fw(R,N,ge,ie,_,l),ue=new uT(R,ie,mt),Re=new yT(B,Ut,mt,ge),K=new pw(B,pt,Ut),de=new Rw(B,pt,Ut),Ut.programs=te.programs,R.capabilities=mt,R.extensions=pt,R.properties=Le,R.renderLists=pe,R.shadowMap=ue,R.state=ge,R.info=Ut}S!==An&&(C=new Dw(S,n.width,n.height,o,r,s));const se=new xT(R,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(xe,we,!1))},this.getSize=function(T){return T.set(xe,we)},this.setSize=function(T,U,$=!0){if(se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,we=U,n.width=Math.floor(T*ve),n.height=Math.floor(U*ve),$===!0&&(n.style.width=T+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(xe*ve,we*ve).floor()},this.setDrawingBufferSize=function(T,U,$){xe=T,we=U,ve=$,n.width=Math.floor(T*$),n.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(S===An){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,U,$,j){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,U,$,j),ge.viewport(Z.copy(Pe).multiplyScalar(In()).round())},this.getScissor=function(T){return T.copy(Qe)},this.setScissor=function(T,U,$,j){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,U,$,j),ge.scissor(ce.copy(Qe).multiplyScalar(In()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){ge.setScissorTest(Je=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let j=0;if(T){let q=!1;if(k!==null){const me=k.texture.format;q=x.has(me)}if(q){const me=k.texture.type,Ee=d.has(me),he=D.getClearColor(),Se=D.getClearAlpha(),Ae=he.r,Oe=he.g,je=he.b;Ee?(m[0]=Ae,m[1]=Oe,m[2]=je,m[3]=Se,B.clearBufferuiv(B.COLOR,0,m)):(y[0]=Ae,y[1]=Oe,y[2]=je,y[3]=Se,B.clearBufferiv(B.COLOR,0,y))}else j|=B.COLOR_BUFFER_BIT}U&&(j|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),D.dispose(),pe.dispose(),J.dispose(),Ue.dispose(),Le.dispose(),N.dispose(),ie.dispose(),X.dispose(),le.dispose(),Re.dispose(),te.dispose(),se.dispose(),se.removeEventListener("sessionstart",bh),se.removeEventListener("sessionend",Th),gr.stop()};function Ce(T){T.preventDefault(),Jp("WebGLRenderer: Context Lost."),P=!0}function ke(){Jp("WebGLRenderer: Context Restored."),P=!1;const T=Ut.autoReset,U=ue.enabled,$=ue.autoUpdate,j=ue.needsUpdate,q=ue.type;Be(),Ut.autoReset=T,ue.enabled=U,ue.autoUpdate=$,ue.needsUpdate=j,ue.type=q}function _e(T){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nt(T){const U=T.target;U.removeEventListener("dispose",nt),zt(U)}function zt(T){Oi(T),Le.remove(T)}function Oi(T){const U=Le.get(T).programs;U!==void 0&&(U.forEach(function($){te.releaseProgram($)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,j,q,me){U===null&&(U=Dt);const Ee=q.isMesh&&q.matrixWorld.determinantAffine()<0,he=av(T,U,$,j,q);ge.setMaterial(j,Ee);let Se=$.index,Ae=1;if(j.wireframe===!0){if(Se=X.getWireframeAttribute($),Se===void 0)return;Ae=2}const Oe=$.drawRange,je=$.attributes.position;let be=Oe.start*Ae,We=(Oe.start+Oe.count)*Ae;me!==null&&(be=Math.max(be,me.start*Ae),We=Math.min(We,(me.start+me.count)*Ae)),Se!==null?(be=Math.max(be,0),We=Math.min(We,Se.count)):je!=null&&(be=Math.max(be,0),We=Math.min(We,je.count));const Ct=We-be;if(Ct<0||Ct===1/0)return;le.setup(q,j,he,$,Se);let ot,st=K;if(Se!==null&&(ot=w.get(Se),st=de,st.setIndex(ot)),q.isMesh)j.wireframe===!0?(ge.setLineWidth(j.wireframeLinewidth*In()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(q.isLine){let Qt=j.linewidth;Qt===void 0&&(Qt=1),ge.setLineWidth(Qt*In()),q.isLineSegments?st.setMode(B.LINES):q.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else q.isPoints?st.setMode(B.POINTS):q.isSprite&&st.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))st.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,Te=q._multiDrawCounts,ln=q._multiDrawCount,et=Se?w.get(Se).bytesPerElement:1,xr=Le.get(j).currentProgram.getUniforms();for(let en=0;en<ln;en++)xr.setValue(B,"_gl_DrawID",en),st.render(Qt[en]/et,Te[en])}else if(q.isInstancedMesh)st.renderInstances(be,Ct,q.count);else if($.isInstancedBufferGeometry){const Qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Te=Math.min($.instanceCount,Qt);st.renderInstances(be,Ct,Te)}else st.render(be,Ct)};function wh(T,U,$,j){I!==null&&T.isNodeMaterial&&I.setObject(j,T),_t===!0&&Q.setState(T,$,!1),T.transparent===!0&&T.side===Qn&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Hs(T,U,j),T.side=Fr,T.needsUpdate=!0,Hs(T,U,j),T.side=Qn):Hs(T,U,j)}this.compile=function(T,U,$=null){$===null&&($=T),I!==null&&I.renderStart(T,U,$),b=J.get($),b.init(U),E.push(b),$.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),T!==$&&T.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),Wt=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,Wt),_t===!0&&Q.setGlobalState(this.clippingPlanes,U),I!==null&&ue.render(b.state.shadowsArray,$,U);const j=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const he=me[Ee];wh(he,$,U,q),j.add(he)}else wh(me,$,U,q),j.add(me)}),b=E.pop(),I!==null&&I.renderEnd(),j},this.compileAsync=function(T,U,$=null){const j=this.compile(T,U,$);return new Promise(q=>{function me(){if(j.forEach(function(Ee){const Se=Le.get(Ee).currentProgram;(Se===void 0||Se.isReady())&&j.delete(Ee)}),j.size===0){q(T);return}setTimeout(me,10)}pt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let vc=null;function rv(T){vc&&vc(T)}function bh(){gr.stop()}function Th(){gr.start()}const gr=new qx;gr.setAnimationLoop(rv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(T){vc=T,se.setAnimationLoop(T),T===null?gr.stop():gr.start()},se.addEventListener("sessionstart",bh),se.addEventListener("sessionend",Th),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(T,U);const $=se.enabled===!0&&se.isPresenting===!0,j=C!==null&&(k===null||$)&&C.begin(R,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,k),b=J.get(T,E.length),b.init(U),b.state.textureUnits=Ue.getTextureUnits(),E.push(b),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Lt.setFromArrayCamera(U):He.setFromProjectionMatrix(at,ti,U.reversedDepth),Wt=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,Wt),A=pe.get(T,v.length),A.init(),v.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&_c(Ee,U,-1/0,R.sortObjects)}_c(T,U,0,R.sortObjects),A.finish(),I!==null&&I.updateLights(b.state.lightsArray),R.sortObjects===!0&&A.sort(Ie,ht),It=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,It&&D.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),_t===!0&&Q.beginShadows();const q=b.state.shadowsArray;if(ue.render(q,T,U),_t===!0&&Q.endShadows(),(j&&C.hasRenderPass())===!1){const Ee=A.opaque,he=A.transmissive;if(b.setupLights(),U.isArrayCamera){const Se=U.cameras;if(he.length>0)for(let Ae=0,Oe=Se.length;Ae<Oe;Ae++){const je=Se[Ae];Rh(Ee,he,T,je)}It&&D.render(T);for(let Ae=0,Oe=Se.length;Ae<Oe;Ae++){const je=Se[Ae];Ah(A,T,je,je.viewport)}}else he.length>0&&Rh(Ee,he,T,U),It&&D.render(T),Ah(A,T,U)}k!==null&&O===0&&(Ue.updateMultisampleRenderTarget(k),Ue.updateRenderTargetMipmap(k)),j&&C.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),le.resetDefaultState(),F=-1,V=null,E.pop(),E.length>0?(b=E[E.length-1],Ue.setTextureUnits(b.state.textureUnits),_t===!0&&Q.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,I!==null&&I.renderEnd()};function _c(T,U,$,j){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Ee=U.isArrayCamera?Lt:He;if(!T.frustumCulled||T.intersectsFrustum(Ee)){j&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const he=ie.update(T),Se=T.material;Se.visible&&A.push(T,he,Se,$,At.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){const Ee=U.isArrayCamera?Lt:He;if(!T.frustumCulled||T.intersectsFrustum(Ee)){const he=ie.update(T),Se=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),At.copy(he.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(Se)){const Ae=he.groups;for(let Oe=0,je=Ae.length;Oe<je;Oe++){const be=Ae[Oe],We=Se[be.materialIndex];We&&We.visible&&A.push(T,he,We,$,At.z,be,U)}}else Se.visible&&A.push(T,he,Se,$,At.z,null,U)}}}const me=T.children;for(let Ee=0,he=me.length;Ee<he;Ee++)_c(me[Ee],U,$,j)}function Ah(T,U,$,j){const{opaque:q,transmissive:me,transparent:Ee}=T;b.setupLightsView($),_t===!0&&Q.setGlobalState(R.clippingPlanes,$),j&&ge.viewport(Z.copy(j)),q.length>0&&eo(q,U,$),me.length>0&&eo(me,U,$),Ee.length>0&&eo(Ee,U,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Rh(T,U,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const be=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new mi(1,1,{generateMipmaps:!0,type:be?xi:An,minFilter:Qi,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=b.state.transmissionRenderTarget[j.id],Ee=j.viewport||Z;me.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const he=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ae=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(Y),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),It&&D.render($);const Oe=R.toneMapping;R.toneMapping=Ni;const je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),_t===!0&&Q.setGlobalState(R.clippingPlanes,j),eo(T,$,j),Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me),pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let We=0,Ct=U.length;We<Ct;We++){const ot=U[We],{object:st,geometry:Qt,material:Te,group:ln}=ot;if(Te.side===Qn&&st.layers.test(j.layers)){const et=Te.side;Te.side=En,Te.needsUpdate=!0,Ch(st,$,j,Qt,Te,ln),Te.side=et,Te.needsUpdate=!0,be=!0}}be===!0&&(Ue.updateMultisampleRenderTarget(me),Ue.updateRenderTargetMipmap(me))}R.setRenderTarget(he,Se,Ae),R.setClearColor(Y,fe),je!==void 0&&(j.viewport=je),R.toneMapping=Oe}function eo(T,U,$){const j=U.isScene===!0?U.overrideMaterial:null;for(let q=0,me=T.length;q<me;q++){const Ee=T[q],{object:he,geometry:Se,group:Ae}=Ee;let Oe=Ee.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),he.layers.test($.layers)&&Ch(he,U,$,Se,Oe,Ae)}}function Ch(T,U,$,j,q,me){I!==null&&q.isNodeMaterial&&I.setObject(T,q),T.onBeforeRender(R,U,$,j,q,me),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(R,U,$,j,T,me),q.transparent===!0&&q.side===Qn&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,R.renderBufferDirect($,U,j,q,T,me),q.side=Fr,q.needsUpdate=!0,R.renderBufferDirect($,U,j,q,T,me),q.side=Qn):R.renderBufferDirect($,U,j,q,T,me),T.onAfterRender(R,U,$,j,q,me)}function Nh(T){let U=0;for(const $ of T)$.texture!==null&&U++;return U}function Hs(T,U,$){U.isScene!==!0&&(U=Dt);const j=Le.get(T),q=b.state.lights,me=b.state.shadowsArray,Ee=q.state.version,he=te.getParameters(T,q.state,me,U,$,b.state.lightProbeGridArray),Se=te.getProgramCacheKey(he);let Ae=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,j.fog=U.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=N.get(T.envMap||j.environment,Oe),j.envMapRotation=j.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",nt),Ae=new Map,j.programs=Ae,j.programVariants=new Map);let je=Ae.get(Se);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Ee)return Lh(T,he),je}else he.uniforms=te.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,$,he),T.onBeforeCompile(he,R),je=te.acquireProgram(he,Se),Ae.set(Se,je),j.uniforms=he.uniforms;const be=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Q.uniform),Lh(T,he),j.needsLights=lv(T),j.lightsStateVersion=Ee,j.needsLights&&(be.ambientLightColor.value=q.state.ambient,be.lightProbe.value=q.state.probe,be.sunLights.value=q.state.sun,be.sunLightShadows.value=q.state.sunShadow,be.directionalLights.value=q.state.directional,be.directionalLightShadows.value=q.state.directionalShadow,be.spotLights.value=q.state.spot,be.spotLightShadows.value=q.state.spotShadow,be.rectAreaLights.value=q.state.rectArea,be.ltc_1.value=q.state.rectAreaLTC1,be.ltc_2.value=q.state.rectAreaLTC2,be.pointLights.value=q.state.point,be.pointLightShadows.value=q.state.pointShadow,be.hemisphereLights.value=q.state.hemi,be.sunShadowMatrix.value=q.state.sunShadowMatrix,be.sunShadowCascade.value=q.state.sunShadowCascade,be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,be.spotLightMatrix.value=q.state.spotLightMatrix,be.spotLightMap.value=q.state.spotLightMap,be.pointShadowMatrix.value=q.state.pointShadowMatrix),j.numLightProbeGrids=Nh(b.state.lightProbeGridArray),j.currentProgram=je,j.uniformsList=null,je}function sv(T,U,$,j,q){const me=Le.get(T),Ee=me.currentProgram.id+","+j+","+q;let he=me.programVariants.get(Ee);return he===void 0?(he=Hs(T,U,$),me.programVariants.set(Ee,he)):(me.currentProgram=he,me.uniformsList=null,me.outputColorSpace=j,me.toneMapping=q),he}function Ph(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=dl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Lh(T,U){const $=Le.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function av(T,U,$,j,q){U.isScene!==!0&&(U=Dt),Ue.resetTextureUnits();const me=U.fog,Ee=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?U.environment:null,he=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qe.workingColorSpace,Se=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ae=N.get(j.envMap||Ee,Se),Oe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!$.morphAttributes.position,We=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color;let ot=Ni;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ot=R.toneMapping);const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=st!==void 0?st.length:0,Te=Le.get(j),ln=b.state.lights;if(_t===!0&&(Wt===!0||T!==V)){const yt=T===V&&j.id===F;Q.setState(j,T,yt)}let et=!1,xr=!1;j.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==ln.state.version||q.isBatchedMesh&&Te.batching===!1||!q.isBatchedMesh&&Te.batching===!0||q.isBatchedMesh&&Te.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Te.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Te.instancing===!1||!q.isInstancedMesh&&Te.instancing===!0||q.isSkinnedMesh&&Te.skinning===!1||!q.isSkinnedMesh&&Te.skinning===!0||q.isInstancedMesh&&Te.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Te.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Te.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Te.instancingMorph===!1&&q.morphTexture!==null||Te.envMap!==Ae||j.fog===!0&&Te.fog!==me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Q.numPlanes||Te.numIntersection!==Q.numIntersection)||Te.vertexAlphas!==Oe||Te.vertexTangents!==je||Te.morphTargets!==be||Te.morphNormals!==We||Te.morphColors!==Ct||Te.morphTargetsCount!==Qt||Te.numLightProbeGrids!==Nh(b.state.lightProbeGridArray)?et=!0:(Te.outputColorSpace!==he||Te.toneMapping!==ot)&&(xr=!0):(et=!0,Te.__version=j.version);let en=Te.currentProgram;(et===!0||xr===!0)&&(en=xr===!0?sv(j,U,q,he,ot):Hs(j,U,q),I&&j.isNodeMaterial&&I.onUpdateProgram(j,en,Te));let to=!1,ki=!1,vr=!1;const Ke=en.getUniforms(),Xt=Te.uniforms;if(ge.useProgram(en.program)&&(to=!0,ki=!0,vr=!0),j.id!==F&&(F=j.id,ki=!0),to||V!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ke.setValue(B,"projectionMatrix",T.projectionMatrix),Ke.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ht=Ke.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,Dn.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&Ke.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ke.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,ki=!0,vr=!0)}if(Te.needsLights&&(ln.state.sunShadowMap.length>0&&Ke.setValue(B,"sunShadowMap",ln.state.sunShadowMap,Ue),ln.state.directionalShadowMap.length>0&&Ke.setValue(B,"directionalShadowMap",ln.state.directionalShadowMap,Ue),ln.state.spotShadowMap.length>0&&Ke.setValue(B,"spotShadowMap",ln.state.spotShadowMap,Ue),ln.state.pointShadowMap.length>0&&Ke.setValue(B,"pointShadowMap",ln.state.pointShadowMap,Ue)),q.isSkinnedMesh){Ke.setOptional(B,q,"bindMatrix"),Ke.setOptional(B,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Ke.setValue(B,"boneTexture",yt.boneTexture,Ue))}q.isBatchedMesh&&(Ke.setOptional(B,q,"batchingTexture"),Ke.setValue(B,"batchingTexture",q._matricesTexture,Ue),Ke.setOptional(B,q,"batchingIdTexture"),Ke.setValue(B,"batchingIdTexture",q._indirectTexture,Ue),Ke.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Ke.setValue(B,"batchingColorTexture",q._colorsTexture,Ue));const Wn=$.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ee.update(q,$,en),(ki||Te.receiveShadow!==q.receiveShadow)&&(Te.receiveShadow=q.receiveShadow,Ke.setValue(B,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=MT()),ki){if(Ke.setValue(B,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&ov(Xt,vr),me&&j.fog===!0&&oe.refreshFogUniforms(Xt,me),oe.refreshMaterialUniforms(Xt,j,ve,we,b.state.transmissionRenderTarget[T.id]),Te.needsLights&&Te.numLightProbeGrids>0){const yt=M;let Ht=0;for(const vi of b.state.lightProbeGridArray)vi.texture!==null&&(yt.textures[Ht]=vi.texture,yt.min[Ht]=vi.boundingBox.min,yt.max[Ht]=vi.boundingBox.max,yt.resolution[Ht]=vi.resolution,Ht++);for(const vi in yt)yt[vi].length=Ht;Xt.probesSH.value=yt.textures,Xt.probesMin.value=yt.min,Xt.probesMax.value=yt.max,Xt.probesResolution.value=yt.resolution}dl.upload(B,Ph(Te),Xt,Ue)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(dl.upload(B,Ph(Te),Xt,Ue),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ke.setValue(B,"center",q.center),Ke.setValue(B,"modelViewMatrix",q.modelViewMatrix),Ke.setValue(B,"normalMatrix",q.normalMatrix),Ke.setValue(B,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){const yt=j.uniformsGroups;for(let Ht=0,vi=yt.length;Ht<vi;Ht++){const Ih=yt[Ht];Re.update(Ih,en),Re.bind(Ih,en)}}return en}function ov(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function lv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,U,$){const j=Le.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Le.get(T.texture).__webglTexture=U,Le.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const $=Le.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){k=T,z=U,O=$;let j=null,q=!1,me=!1;if(T){const he=Le.get(T);if(he.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,he.__webglFramebuffer),Z.copy(T.viewport),ce.copy(T.scissor),Ne=T.scissorTest,ge.viewport(Z),ge.scissor(ce),ge.setScissorTest(Ne),F=-1;return}else if(he.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(he.__hasExternalTextures)Ue.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&Le.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}const Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Ae=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?j=Ae[U][$]:j=Ae[U],q=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?j=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?j=Ae[$]:j=Ae,Z.copy(T.viewport),ce.copy(T.scissor),Ne=T.scissorTest}else Z.copy(Pe).multiplyScalar(ve).floor(),ce.copy(Qe).multiplyScalar(ve).floor(),Ne=Je;if($!==0&&(j=H),ge.bindFramebuffer(B.FRAMEBUFFER,j)&&ge.drawBuffers(T,j),ge.viewport(Z),ge.scissor(ce),ge.setScissorTest(Ne),q){const he=Le.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,$)}else if(me){const he=U;for(let Se=0;Se<T.textures.length;Se++){const Ae=Le.get(T.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,$,he)}}else if(T!==null&&$!==0){const he=Le.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,he.__webglTexture,$)}F=-1};function Dh(T){const U=Le.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=mt.textureFormatReadable(T.format),U.__typeReadable=mt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,j,q,me,Ee,he=0){if(!(T&&T.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se){ge.bindFramebuffer(B.FRAMEBUFFER,Se);try{const Ae=T.textures[he],Oe=Ae.format,je=Ae.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);const be=Dh(Ae);if(be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-j&&$>=0&&$<=T.height-q&&B.readPixels(U,$,j,q,ae.convert(Oe),ae.convert(je),me)}finally{const Ae=k!==null?Le.get(k).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,j,q,me,Ee,he=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se)if(U>=0&&U<=T.width-j&&$>=0&&$<=T.height-q){ge.bindFramebuffer(B.FRAMEBUFFER,Se);const Ae=T.textures[he],Oe=Ae.format,je=Ae.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+he);const be=Dh(Ae);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(U,$,j,q,ae.convert(Oe),ae.convert(je),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Ct=k!==null?Le.get(k).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ct);const ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await kS(B,ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(We),B.deleteSync(ot),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){const j=Math.pow(2,-$),q=Math.floor(T.image.width*j),me=Math.floor(T.image.height*j),Ee=U!==null?U.x:0,he=U!==null?U.y:0;Ue.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ee,he,q,me),ge.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,j=null,q=0,me=0){let Ee,he,Se,Ae,Oe,je,be,We,Ct;const ot=T.isCompressedTexture?T.mipmaps[me]:T.image;if($!==null)Ee=$.max.x-$.min.x,he=$.max.y-$.min.y,Se=$.isBox3?$.max.z-$.min.z:1,Ae=$.min.x,Oe=$.min.y,je=$.isBox3?$.min.z:0;else{const Ke=Math.pow(2,-q);Ee=Math.floor(ot.width*Ke),he=Math.floor(ot.height*Ke),T.isDataArrayTexture?Se=ot.depth:T.isData3DTexture?Se=Math.floor(ot.depth*Ke):Se=1,Ae=0,Oe=0,je=0}j!==null?(be=j.x,We=j.y,Ct=j.z):(be=0,We=0,Ct=0);const st=ae.convert(U.format),Qt=ae.convert(U.type);let Te;U.isData3DTexture?(Ue.setTexture3D(U,0),Te=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ue.setTexture2DArray(U,0),Te=B.TEXTURE_2D_ARRAY):(Ue.setTexture2D(U,0),Te=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const ln=ge.getParameter(B.UNPACK_ROW_LENGTH),et=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),xr=ge.getParameter(B.UNPACK_SKIP_PIXELS),en=ge.getParameter(B.UNPACK_SKIP_ROWS),to=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Ae),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const ki=T.isDataArrayTexture||T.isData3DTexture,vr=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Ke=Le.get(T),Xt=Le.get(U),Wn=Le.get(Ke.__renderTarget),yt=Le.get(Xt.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ht=0;Ht<Se;Ht++)ki&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,q,je+Ht),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(U).__webglTexture,me,Ct+Ht)),B.blitFramebuffer(Ae,Oe,Ae+Ee,Oe+he,be,We,be+Ee,We+he,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Le.has(T)){const Ke=Le.get(T),Xt=Le.get(U);ge.bindFramebuffer(B.READ_FRAMEBUFFER,L),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,W);for(let Wn=0;Wn<Se;Wn++)ki?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ke.__webglTexture,q,je+Wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ke.__webglTexture,q),vr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,me,Ct+Wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,me),q!==0?B.blitFramebuffer(Ae,Oe,Ae+Ee,Oe+he,be,We,be+Ee,We+he,B.COLOR_BUFFER_BIT,B.NEAREST):vr?B.copyTexSubImage3D(Te,me,be,We,Ct+Wn,Ae,Oe,Ee,he):B.copyTexSubImage2D(Te,me,be,We,Ae,Oe,Ee,he);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Te,me,be,We,Ct,Ee,he,Se,st,Qt,ot.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,me,be,We,Ct,Ee,he,Se,st,ot.data):B.texSubImage3D(Te,me,be,We,Ct,Ee,he,Se,st,Qt,ot):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,be,We,Ee,he,st,Qt,ot.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,be,We,ot.width,ot.height,st,ot.data):B.texSubImage2D(B.TEXTURE_2D,me,be,We,Ee,he,st,Qt,ot);ge.pixelStorei(B.UNPACK_ROW_LENGTH,ln),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,xr),ge.pixelStorei(B.UNPACK_SKIP_ROWS,en),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,to),me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Te),ge.unbindTexture()},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){z=0,O=0,k=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}function wT({layout:t="5.1",pos:e={x:0,y:.4,z:0},onChangePos:n,speakerGains:i={},isBinaural:r=!1}){const s=ne.useRef(null),a=ne.useRef(null),o=ne.useRef(null),l=ne.useRef(null),u=ne.useRef(null),h=ne.useRef(null),p=ne.useRef([]),f=ne.useRef([]),g=ne.useRef(!1),_=ne.useRef(!1),S=ne.useRef({x:0,y:0}),x=ne.useRef({theta:Math.PI/4,phi:Math.PI/4,radius:8.5}),d={"2.0":[{id:"L",name:"Left",x:-1,y:1,z:0},{id:"R",name:"Right",x:1,y:1,z:0}],"2.1":[{id:"L",name:"Left",x:-1,y:1,z:0},{id:"R",name:"Right",x:1,y:1,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.2,z:-.6,isLfe:!0}],"5.1":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Surround L",x:-.95,y:-.7,z:0},{id:"Rs",name:"Surround R",x:.95,y:-.7,z:0}],"7.1":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Side Surr L",x:-1,y:0,z:0},{id:"Rs",name:"Side Surr R",x:1,y:0,z:0},{id:"Rls",name:"Rear Surr L",x:-.75,y:-.9,z:0},{id:"Rrs",name:"Rear Surr R",x:.75,y:-.9,z:0}],"7.1.4":[{id:"L",name:"Front Left",x:-.9,y:.8,z:0},{id:"C",name:"Center",x:0,y:1,z:0},{id:"R",name:"Front Right",x:.9,y:.8,z:0},{id:"LFE",name:"Subwoofer",x:0,y:.1,z:-.6,isLfe:!0},{id:"Ls",name:"Side Surr L",x:-1,y:0,z:0},{id:"Rs",name:"Side Surr R",x:1,y:0,z:0},{id:"Rls",name:"Rear Surr L",x:-.75,y:-.9,z:0},{id:"Rrs",name:"Rear Surr R",x:.75,y:-.9,z:0},{id:"TFL",name:"Top Front L",x:-.75,y:.6,z:.95,isHeight:!0},{id:"TFR",name:"Top Front R",x:.75,y:.6,z:.95,isHeight:!0},{id:"TRL",name:"Top Rear L",x:-.75,y:-.6,z:.95,isHeight:!0},{id:"TRR",name:"Top Rear R",x:.75,y:-.6,z:.95,isHeight:!0}]},m=d[t]||d["5.1"];ne.useEffect(()=>{const C=s.current;if(!C)return;const R=C.clientWidth||700,P=C.clientHeight||480,I=new iM;I.background=new Ge(395278),I.fog=new hh(395278,.04),a.current=I;const H=new zn(45,R/P,.1,100);l.current=H,y();const L=new ET({antialias:!0,alpha:!0});L.setSize(R,P),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.shadowMap.enabled=!0,C.innerHTML="",C.appendChild(L.domElement),o.current=L;const W=new TM(16777215,.7);I.add(W);const z=new bM(62206,1.2);z.position.set(5,10,7),z.castShadow=!0,I.add(z);const O=new EM(11032055,2,15);O.position.set(-4,5,-4),I.add(O);const k=new CM(10,20,62206,1976635);k.position.y=0,I.add(k);const F=new Xl(2.95,3.05,64),V=new ul({color:62206,side:Qn,transparent:!0,opacity:.35}),Z=new dn(F,V);Z.rotation.x=Math.PI/2,I.add(Z);const ce=new ya(.28,24,24),Ne=new ta({color:988970,roughness:.4,metalness:.8}),Y=new dn(ce,Ne);Y.position.set(0,1.1,0),I.add(Y);const fe=new xh(.3,.04,16,32,Math.PI),xe=new ta({color:62206,metalness:.9,roughness:.1}),we=new dn(fe,xe);we.rotation.x=Math.PI/2,we.position.set(0,1.15,0),I.add(we);const ve=new ya(.25,32,32),Ie=new ta({color:62206,emissive:62206,emissiveIntensity:.8,roughness:.1,metalness:.5}),ht=new dn(ve,Ie);I.add(ht),u.current=ht;const Pe=new ya(.35,16,16),Qe=new ul({color:11032055,wireframe:!0,transparent:!0,opacity:.6}),Je=new dn(Pe,Qe);ht.add(Je);const He=new SM({color:62206,dashSize:.1,gapSize:.05}),Lt=new Yt().setFromPoints([new G(0,0,0),new G(0,1,0)]),_t=new nf(Lt,He);_t.computeLineDistances(),I.add(_t),h.current=_t;const Wt=()=>{if(!C)return;const Dt=C.clientWidth,It=C.clientHeight;H.aspect=Dt/It,H.updateProjectionMatrix(),L.setSize(Dt,It)};window.addEventListener("resize",Wt);let at;const Dn=new RM,At=()=>{at=requestAnimationFrame(At);const Dt=Dn.getElapsedTime();Je.rotation.y=Dt*.8,Je.rotation.x=Dt*.5;const It=1+Math.sin(Dt*4)*.08;Je.scale.set(It,It,It),L.render(I,H)};return At(),()=>{window.removeEventListener("resize",Wt),cancelAnimationFrame(at),L.dispose()}},[]);const y=()=>{if(!l.current)return;const{theta:C,phi:R,radius:P}=x.current;l.current.position.x=P*Math.sin(R)*Math.sin(C),l.current.position.y=P*Math.cos(R),l.current.position.z=P*Math.sin(R)*Math.cos(C),l.current.lookAt(0,1,0)};ne.useEffect(()=>{const C=a.current;C&&(f.current.forEach(R=>C.remove(R)),f.current=[],p.current.forEach(R=>C.remove(R)),p.current=[],m.forEach(R=>{const P=new la,I=R.x*2.8,H=R.z*1.8+1.2,L=-R.y*2.8;P.position.set(I,H,L);let W=R.isLfe?14251782:R.isHeight?9647082:165063;const z=new Bs(.35,.45,.3),O=new ta({color:W,roughness:.3,metalness:.7}),k=new dn(z,O);P.add(k);const F=new gh(.12,.08,16),V=new ta({color:988970,roughness:.9}),Z=new dn(F,V);Z.rotation.x=Math.PI/2,Z.position.z=.14,P.add(Z);const ce=new Xl(.18,.22,24),Ne=new ul({color:R.isLfe?16096779:R.isHeight?12616956:3718648,side:Qn,transparent:!0,opacity:.8}),Y=new dn(ce,Ne);Y.position.z=.16,P.add(Y),P.lookAt(0,1.1,0),C.add(P),f.current.push(P);const fe=new Yt().setFromPoints([new G(0,0,0),new G(I,H,L)]),xe=new pc({color:W,transparent:!0,opacity:.25}),we=new nf(fe,xe);C.add(we),p.current.push({beam:we,spk:R,targetPos:new G(I,H,L)})}))},[t]),ne.useEffect(()=>{const C=u.current,R=h.current;if(!C||!R)return;const P=e.x*2.8,I=e.z*1.8+1.2,H=-e.y*2.8;C.position.set(P,I,H),R.geometry.dispose(),R.geometry=new Yt().setFromPoints([new G(P,0,H),new G(P,I,H)]),R.computeLineDistances(),p.current.forEach(({beam:L,targetPos:W})=>{L.geometry.dispose(),L.geometry=new Yt().setFromPoints([new G(P,I,H),W])})},[e]);const M=C=>{C.button===0&&!C.shiftKey?_.current=!0:g.current=!0,S.current={x:C.clientX,y:C.clientY}},A=C=>{const R=C.clientX-S.current.x,P=C.clientY-S.current.y;if(S.current={x:C.clientX,y:C.clientY},_.current)x.current.theta-=R*.008,x.current.phi=Math.max(.15,Math.min(Math.PI/2-.05,x.current.phi-P*.008)),y();else if(g.current){const I=Math.max(-1,Math.min(1,e.x+R*.005)),H=Math.max(-1,Math.min(1,e.y-P*.005));n({...e,x:I,y:H})}},b=()=>{_.current=!1,g.current=!1},v=C=>{C.preventDefault(),x.current.radius=Math.max(4,Math.min(15,x.current.radius+C.deltaY*.01)),y()},E=C=>{C==="iso"?x.current={theta:Math.PI/4,phi:Math.PI/3.5,radius:8.5}:C==="top"?x.current={theta:0,phi:.15,radius:9}:C==="sweetspot"&&(x.current={theta:0,phi:Math.PI/2.2,radius:4.5}),y()};return c.jsxs("div",{className:"relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-[#06080e] shadow-2xl select-none",children:[c.jsx("div",{ref:s,onMouseDown:M,onMouseMove:A,onMouseUp:b,onWheel:v,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsxs("div",{className:"absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none text-xs font-mono",children:[c.jsxs("div",{className:"flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),c.jsxs("span",{className:"text-white font-bold",children:[t," Room View"]}),c.jsx("span",{className:"text-slate-400",children:"•"}),c.jsxs("span",{className:"text-cyan-300",children:["X: ",e.x.toFixed(2)]}),c.jsxs("span",{className:"text-emerald-300",children:["Y: ",e.y.toFixed(2)]}),c.jsxs("span",{className:"text-purple-300",children:["Z: ",e.z.toFixed(2)]})]}),r&&c.jsxs("div",{className:"flex items-center space-x-1.5 bg-purple-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-500/60 text-purple-200",children:[c.jsx("span",{className:"text-sm",children:"🎧"}),c.jsx("span",{className:"font-bold",children:"Binaural HRTF Headphone Virtualization Active"})]})]}),c.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 text-[10px] font-mono",children:[c.jsx("span",{className:"text-slate-400 px-1",children:"Camera:"}),c.jsx("button",{onClick:()=>E("iso"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"3D Perspective"}),c.jsx("button",{onClick:()=>E("top"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"Top Down"}),c.jsx("button",{onClick:()=>E("sweetspot"),className:"px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200",children:"Sweet Spot"})]}),c.jsx("div",{className:"absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-mono text-slate-400 pointer-events-none",children:"Click + Drag: Orbit 3D Room • Shift + Drag: Pan Sound Orb • Scroll: Zoom"})]})}function bT({activeFile:t,tracks:e=[]}){var A,b,v,E;const[n,i]=ne.useState("7.1.4"),[r,s]=ne.useState("3d"),[a,o]=ne.useState({x:0,y:.4,z:.2}),[l,u]=ne.useState(80),[h,p]=ne.useState(!1),[f,g]=ne.useState(!1),[_,S]=ne.useState(null),x={"2.0":[{id:"L",name:"Left",x:25,y:25},{id:"R",name:"Right",x:75,y:25}],"2.1":[{id:"L",name:"Left",x:25,y:25},{id:"R",name:"Right",x:75,y:25},{id:"LFE",name:"Subwoofer",x:50,y:50,isLfe:!0}],"5.1":[{id:"L",name:"Front Left",x:20,y:20},{id:"C",name:"Center",x:50,y:15},{id:"R",name:"Front Right",x:80,y:20},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Surround L",x:15,y:80},{id:"Rs",name:"Surround R",x:85,y:80}],"7.1":[{id:"L",name:"Front Left",x:20,y:20},{id:"C",name:"Center",x:50,y:15},{id:"R",name:"Front Right",x:80,y:20},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Side Surr L",x:10,y:50},{id:"Rs",name:"Side Surr R",x:90,y:50},{id:"Rls",name:"Rear Surr L",x:25,y:85},{id:"Rrs",name:"Rear Surr R",x:75,y:85}],"7.1.4":[{id:"L",name:"Front Left",x:20,y:25},{id:"C",name:"Center",x:50,y:18},{id:"R",name:"Front Right",x:80,y:25},{id:"LFE",name:"LFE Sub",x:50,y:50,isLfe:!0},{id:"Ls",name:"Side Surr L",x:10,y:50},{id:"Rs",name:"Side Surr R",x:90,y:50},{id:"Rls",name:"Rear Surr L",x:25,y:85},{id:"Rrs",name:"Rear Surr R",x:75,y:85},{id:"TFL",name:"Top Front L",x:30,y:35,isHeight:!0},{id:"TFR",name:"Top Front R",x:70,y:35,isHeight:!0},{id:"TRL",name:"Top Rear L",x:30,y:65,isHeight:!0},{id:"TRR",name:"Top Rear R",x:70,y:65,isHeight:!0}]},d=x[n]||x["5.1"];ne.useEffect(()=>{ut.setBinauralSpatialPosition(a.x,a.y,a.z)},[a]);const m=()=>{const C=!h;p(C),ut.setBinauralMode(C),ut.setBinauralSpatialPosition(a.x,a.y,a.z)},y=C=>{if(C.isLfe)return .65;const R=(C.x-50)/40,P=-(C.y-50)/40,I=C.isHeight?.9:0,H=Math.sqrt(Math.pow(a.x-R,2)+Math.pow(a.y-P,2)+Math.pow(a.z-I,2));return Math.max(.05,Math.min(1,1/(H*H+.5)))},M=async()=>{const C=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!C){alert("Please load a demo project or upload an audio file first.");return}g(!0);try{const R=await Mt(gt("/api/v1/audio/surround"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:C,layout:n,x:a.x,y:a.y,z:a.z,crossover_hz:l})});S(R)}catch(R){alert(`Surround render error: ${R.message}`)}finally{g(!1)}};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1750px] mx-auto",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(Fl,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"3D IMMERSIVE SPATIAL STUDIO (VBAP & BINAURAL HRTF)"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:"Full 3D WebGL Virtual Room, XYZ spatial placement, Dolby Atmos 7.1.4 height speakers, and Binaural Headphone simulation."})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[c.jsxs("div",{className:"flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:[c.jsxs("button",{onClick:()=>s("3d"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${r==="3d"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[c.jsx(zy,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"3D Room"})]}),c.jsxs("button",{onClick:()=>s("2d"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${r==="2d"?"bg-cyan-500 text-black shadow-md shadow-cyan-500/20":"text-slate-400 hover:text-white"}`,children:[c.jsx(Gy,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"2D Top-Down"})]})]}),c.jsxs("button",{onClick:m,className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-md ${h?"bg-purple-900/80 text-purple-200 border-purple-500/80 shadow-purple-900/30 ring-2 ring-purple-500/30":"bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700"}`,children:[c.jsx(Wp,{className:`w-4 h-4 ${h?"text-purple-300 animate-pulse":"text-slate-400"}`}),c.jsx("span",{children:h?"Binaural 3D Headphone: ON":"Binaural HRTF Mode: OFF"})]}),c.jsx("div",{className:"flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:["2.0","2.1","5.1","7.1","7.1.4"].map(C=>c.jsx("button",{onClick:()=>i(C),className:`px-2.5 py-1.5 rounded-lg font-bold transition-all ${n===C?"bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-md":"text-slate-400 hover:text-white"}`,children:C},C))})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[r==="3d"?c.jsx(wT,{layout:n,pos:a,onChangePos:o,isBinaural:h}):c.jsxs("div",{className:"bg-[#0a0d15] p-6 rounded-2xl border border-slate-800 shadow-2xl relative flex flex-col items-center justify-center min-h-[500px]",children:[c.jsx("div",{className:"absolute top-4 left-4 text-xs font-mono text-slate-400",children:"Acoustic Listening Arena (2D Polar Coordinates)"}),c.jsxs("div",{className:"w-[380px] h-[380px] rounded-full border border-dashed border-slate-700 relative flex items-center justify-center bg-black/40",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30",children:c.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-300",children:"ENG"})}),c.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 border-2 border-white absolute shadow-lg shadow-violet-500/50 flex items-center justify-center cursor-move",style:{left:`${(a.x+1)/2*85+7.5}%`,top:`${(1-a.y)/2*85+7.5}%`},title:"Audio Source",children:c.jsx("div",{className:"w-2 h-2 rounded-full bg-black animate-ping"})}),d.map(C=>c.jsxs("div",{className:`absolute px-2 py-0.5 rounded-lg border text-xs font-mono font-bold shadow-lg flex flex-col items-center ${C.isLfe?"bg-amber-950 text-amber-300 border-amber-600":C.isHeight?"bg-purple-950 text-purple-300 border-purple-500":"bg-slate-900 text-cyan-300 border-slate-700"}`,style:{left:`${C.x}%`,top:`${C.y}%`,transform:"translate(-50%, -50%)"},children:[c.jsx("span",{children:C.id}),c.jsx("span",{className:"text-[8px] text-slate-400 font-normal",children:C.name})]},C.id))]})]}),c.jsxs("div",{className:"bg-[#0b0e17] p-4 rounded-xl border border-slate-800/80 shadow-lg",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5",children:[c.jsx("span",{className:"font-bold text-cyan-300 uppercase",children:"VBAP Real-Time Speaker Energy Radiation:"}),c.jsx("span",{className:"text-[10px] text-slate-500",children:"Sum of Squares Normalised"})]}),c.jsx("div",{className:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 text-xs font-mono",children:d.map(C=>{const R=y(C),P=Math.round(R*100);return c.jsxs("div",{className:"bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col items-center space-y-1",children:[c.jsx("span",{className:`text-[10px] font-bold ${C.isLfe?"text-amber-400":C.isHeight?"text-purple-400":"text-cyan-400"}`,children:C.id}),c.jsx("div",{className:"w-full h-14 bg-black/60 rounded-md relative flex flex-col justify-end p-0.5 overflow-hidden",children:c.jsx("div",{className:`w-full rounded-sm transition-all duration-100 ${C.isLfe?"bg-gradient-to-t from-amber-600 to-amber-400":C.isHeight?"bg-gradient-to-t from-purple-600 to-purple-400":"bg-gradient-to-t from-cyan-600 to-cyan-300"}`,style:{height:`${P}%`}})}),c.jsxs("span",{className:"text-[9px] text-slate-400",children:[P,"%"]})]},C.id)})})]})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[c.jsxs("h3",{className:"font-mono text-xs font-bold text-cyan-300 uppercase flex items-center space-x-1.5",children:[c.jsx(ih,{className:"w-4 h-4 text-cyan-400"}),c.jsx("span",{children:"3D Spatial Coordinates"})]}),c.jsxs("button",{onClick:()=>o({x:0,y:.4,z:0}),className:"text-[10px] font-mono text-slate-400 hover:text-white flex items-center space-x-1",title:"Reset to Center",children:[c.jsx($y,{className:"w-3 h-3"}),c.jsx("span",{children:"Reset"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"Azimuth Pan (X: Left / Right)"}),c.jsx("span",{className:"text-cyan-400 font-bold",children:a.x.toFixed(2)})]}),c.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:a.x,onChange:C=>o({...a,x:parseFloat(C.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-cyan-400"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"Distance Pan (Y: Front / Rear)"}),c.jsx("span",{className:"text-emerald-400 font-bold",children:a.y.toFixed(2)})]}),c.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:a.y,onChange:C=>o({...a,y:parseFloat(C.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-emerald-400"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"Elevation Height (Z: Floor / Ceiling)"}),c.jsx("span",{className:"text-purple-400 font-bold",children:a.z.toFixed(2)})]}),c.jsx("input",{type:"range",min:"-1.0",max:"1.0",step:"0.02",value:a.z,onChange:C=>o({...a,z:parseFloat(C.target.value)}),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-purple-400"}),c.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-slate-500 mt-0.5",children:[c.jsx("span",{children:"-1.0 (Floor)"}),c.jsx("span",{children:"0.0 (Ear Level)"}),c.jsx("span",{children:"+1.0 (Ceiling Height)"})]})]}),c.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"Subwoofer LFE Crossover"}),c.jsxs("span",{className:"text-amber-400 font-bold",children:[l," Hz"]})]}),c.jsx("input",{type:"range",min:"50",max:"160",step:"10",value:l,onChange:C=>u(parseInt(C.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-400"}),c.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-1",children:"4th-order Linkwitz-Riley 24dB/octave phase-aligned crossover."})]}),c.jsx("button",{onClick:M,disabled:f,className:"w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-xs font-mono shadow-xl shadow-cyan-500/20 disabled:opacity-50 transition-all flex items-center justify-center space-x-2",children:f?c.jsxs(c.Fragment,{children:[c.jsx($a,{className:"w-4 h-4 animate-spin text-cyan-300"}),c.jsxs("span",{children:["Spatially Bouncing ",n," & Binaural Master..."]})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ya,{className:"w-4 h-4"}),c.jsxs("span",{children:["Render ",n," Spatial Audio & Binaural HRTF"]})]})})]}),c.jsxs("div",{className:"bg-black/60 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-1.5 text-amber-400 font-bold",children:[c.jsx(fc,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"ITU-R BS.775 & Dolby Atmos Specification"})]}),c.jsx("p",{className:"leading-relaxed",children:"Discrete multi-point VBAP spatialization across all calibrated channels. Height channels (7.1.4) adhere to ITU 4-ceiling layout. Binaural mode applies Interaural Time & Level Differences for 3D headphones."})]})]})]}),_&&c.jsxs("div",{className:"bg-[#0b0f1a] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl animate-in fade-in duration-200",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800",children:[c.jsxs("div",{className:"space-y-0.5",children:[c.jsxs("div",{className:"text-sm font-bold text-cyan-300 font-mono flex items-center space-x-2",children:[c.jsx(Fl,{className:"w-4 h-4 text-cyan-400"}),c.jsxs("span",{children:["Multichannel ",_.channel_layout," Spatial Audio Bounced (",_.channel_count," Discrete Channels)"]})]}),c.jsxs("div",{className:"text-xs text-slate-400 font-mono",children:["Coordinates: X ",(A=_.coordinates)==null?void 0:A.x," • Y ",(b=_.coordinates)==null?void 0:b.y," • Z ",(v=_.coordinates)==null?void 0:v.z," • ",(E=_.bass_management)==null?void 0:E.crossover_hz,"Hz Sub Crossover"]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[_.binaural_download_url&&c.jsxs("a",{href:fn(_.binaural_download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-900/30",children:[c.jsx(Wp,{className:"w-4 h-4 text-purple-200"}),c.jsx("span",{children:"Download 3D Binaural Headphone WAV"})]}),c.jsxs("a",{href:fn(_.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20",children:[c.jsx(Hr,{className:"w-4 h-4"}),c.jsxs("span",{children:["Download ",_.channel_layout," Multichannel WAV"]})]})]})]}),c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono",children:[c.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Speaker Channel Count"}),c.jsxs("div",{className:"text-cyan-400 font-bold mt-1",children:[_.channel_count," Discrete Tracks"]})]}),c.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Bass Management Type"}),c.jsx("div",{className:"text-amber-400 font-bold mt-1",children:"4th-Order Linkwitz-Riley"})]}),c.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Headphone Virtualization"}),c.jsx("div",{className:"text-purple-400 font-bold mt-1",children:"HRTF ITD / ILD Synthesized"})]}),c.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Standards Conformance"}),c.jsx("div",{className:"text-emerald-400 font-bold mt-1",children:"ITU-R BS.775 / SMPTE 3D"})]})]})]})]})}function TT({onAddTrackFromAudio:t}){const[e,n]=ne.useState("subtractive"),[i,r]=ne.useState(60),[s,a]=ne.useState(1.5),[o,l]=ne.useState("saw"),[u,h]=ne.useState("square"),[p,f]=ne.useState(8),[g,_]=ne.useState(2400),[S,x]=ne.useState({kick:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],hihat:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],clap:[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]}),[d,m]=ne.useState(!1),[y,M]=ne.useState(null),A=[{note:60,name:"C4",isBlack:!1},{note:61,name:"C#4",isBlack:!0},{note:62,name:"D4",isBlack:!1},{note:63,name:"D#4",isBlack:!0},{note:64,name:"E4",isBlack:!1},{note:65,name:"F4",isBlack:!1},{note:66,name:"F#4",isBlack:!0},{note:67,name:"G4",isBlack:!1},{note:68,name:"G#4",isBlack:!0},{note:69,name:"A4",isBlack:!1},{note:70,name:"A#4",isBlack:!0},{note:71,name:"B4",isBlack:!1},{note:72,name:"C5",isBlack:!1}],b=async E=>{m(!0);const C=E||e;try{let R={synth_type:C,note:i,duration_sec:s,waveform_1:o,waveform_2:u,detune_cents:p,cutoff_hz:g};if(C==="drum_pattern"){const I=[];Object.entries(S).forEach(([L,W])=>{W.forEach((z,O)=>{z&&I.push({drum_type:L,start:O*.125,duration:.3,velocity:110})})}),R={synth_type:"midi_sequence",midi_events:I}}const P=await Mt(gt("/api/v1/synth/generate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});M(P),t&&t(P)}catch(R){alert(`Synthesis error: ${R.message}`)}finally{m(!1)}},v=(E,C)=>{x(R=>{const P=[...R[E]];return P[C]=P[C]?0:1,{...R,[E]:P}})};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(ox,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"SYNTHESIZERS & SOUND DESIGN LAB"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Dual-Oscillator Subtractive Synth, 4-Operator FM Synthesis, and 808/909 Electronic Drum Sequencer."})]}),c.jsxs("div",{className:"flex space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-mono text-xs font-bold",children:[c.jsx("button",{onClick:()=>n("subtractive"),className:`px-3 py-1 rounded-lg ${e==="subtractive"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"SUBTRACTIVE"}),c.jsx("button",{onClick:()=>n("fm"),className:`px-3 py-1 rounded-lg ${e==="fm"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"FM SYNTH"}),c.jsx("button",{onClick:()=>n("drum_pattern"),className:`px-3 py-1 rounded-lg ${e==="drum_pattern"?"bg-cyan-500 text-black":"text-slate-400 hover:text-white"}`,children:"808 DRUM MACHINE"})]})]}),c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-mono font-bold text-cyan-300",children:["Virtual Keyboard (Click to Trigger Note: ",i,")"]}),c.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"MIDI C4 - C5"})]}),c.jsx("div",{className:"h-32 bg-black/60 rounded-xl border border-slate-800 flex p-2 relative overflow-hidden select-none",children:A.map(E=>c.jsx("div",{onClick:()=>{r(E.note),b(e)},className:`flex-1 rounded-b-md flex flex-col justify-end p-1 cursor-pointer transition-all ${E.isBlack?"bg-slate-950 text-slate-500 h-[65%] border border-slate-800 hover:bg-slate-800 -mx-2 z-10":"bg-slate-200 text-black h-full border border-slate-300 hover:bg-white z-0"} ${i===E.note?"ring-2 ring-cyan-400":""}`,children:c.jsx("span",{className:"text-[8px] font-mono font-bold text-center",children:E.name})},E.note))})]}),e!=="drum_pattern"?c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[c.jsx("span",{className:"text-xs font-bold text-cyan-400",children:"Oscillator 1 & 2"}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[10px] text-slate-400",children:"Waveform 1"}),c.jsxs("select",{value:o,onChange:E=>l(E.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1",children:[c.jsx("option",{value:"saw",children:"Sawtooth"}),c.jsx("option",{value:"square",children:"Square / Pulse"}),c.jsx("option",{value:"triangle",children:"Triangle"}),c.jsx("option",{value:"sine",children:"Sine"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[10px] text-slate-400",children:"Waveform 2"}),c.jsxs("select",{value:u,onChange:E=>h(E.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 mt-1",children:[c.jsx("option",{value:"square",children:"Square / Pulse"}),c.jsx("option",{value:"saw",children:"Sawtooth"}),c.jsx("option",{value:"sine",children:"Sine"}),c.jsx("option",{value:"triangle",children:"Triangle"})]})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[c.jsx("span",{className:"text-xs font-bold text-violet-400",children:"Filter Cutoff & Detune"}),c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:c.jsxs("span",{children:["Cutoff: ",g," Hz"]})}),c.jsx("input",{type:"range",min:"100",max:"8000",step:"50",value:g,onChange:E=>_(parseInt(E.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:c.jsxs("span",{children:["Detune: ",p," cents"]})}),c.jsx("input",{type:"range",min:"0",max:"50",value:p,onChange:E=>f(parseInt(E.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[c.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"Duration & Articulation"}),c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-between text-[10px] text-slate-400",children:c.jsxs("span",{children:["Note Length: ",s,"s"]})}),c.jsx("input",{type:"range",min:"0.2",max:"4.0",step:"0.1",value:s,onChange:E=>a(parseFloat(E.target.value)),className:"w-full h-1 bg-slate-800 rounded cursor-pointer mt-2"})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 flex flex-col justify-between",children:[c.jsx("div",{className:"font-mono text-xs text-slate-400",children:"Generate 64-bit synthesized audio buffer and import to DAW timeline."}),c.jsx("button",{onClick:()=>b(e),disabled:d,className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg font-mono disabled:opacity-50",children:d?"Rendering Oscillator...":"Synthesize Note to Audio"})]})]}):c.jsxs("div",{className:"bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4",children:[c.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-amber-300",children:"808 Step Sequencer (16-Step Pattern @ 120 BPM)"}),c.jsx("button",{onClick:()=>b("drum_pattern"),disabled:d,className:"px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold shadow-md shadow-amber-500/20 disabled:opacity-50",children:d?"Bouncing Beats...":"Render Drum Pattern to Track"})]}),c.jsx("div",{className:"space-y-2",children:["kick","snare","hihat","clap"].map(E=>c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"w-16 text-[10px] font-mono uppercase font-bold text-slate-300",children:E}),c.jsx("div",{className:"flex-1 grid grid-cols-16 gap-1",children:S[E].map((C,R)=>c.jsx("button",{onClick:()=>v(E,R),className:`h-7 rounded text-[9px] font-mono font-bold transition-all ${C?"bg-amber-400 text-black shadow-sm shadow-amber-500/40":R%4===0?"bg-slate-800 text-slate-500":"bg-slate-900 text-slate-600"}`,children:R+1},R))})]},E))})]}),y&&c.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-cyan-500/40 flex items-center justify-between",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("div",{className:"text-xs font-bold text-cyan-300 font-mono",children:"Synthesized Audio Rendered Successfully"}),c.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:"24-bit 48kHz Stereo PCM • Clip added to session"})]}),c.jsxs("a",{href:fn(y.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-colors",children:[c.jsx(Hr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Download Synth Clip WAV"})]})]})]})}function AT({activeFile:t,tracks:e=[]}){var _,S,x,d,m,y,M,A,b,v,E,C;const[n,i]=ne.useState("streaming"),[r,s]=ne.useState(-14),[a,o]=ne.useState(-1),[l,u]=ne.useState(!1),[h,p]=ne.useState(null),f=[{id:"streaming",name:"Streaming (Spotify, Apple, Tidal)",lufs:-14,ceiling:-1,color:"text-cyan-400"},{id:"cd",name:"Commercial CD / Club Loudness",lufs:-9,ceiling:-.1,color:"text-violet-400"},{id:"broadcast",name:"Broadcast TV/Radio (EBU R128)",lufs:-23,ceiling:-1,color:"text-emerald-400"},{id:"cinema",name:"Cinema / Theatrical Standard",lufs:-27,ceiling:-2,color:"text-amber-400"},{id:"audiophile",name:"Audiophile Hi-Res / Classical",lufs:-16,ceiling:-1,color:"text-pink-400"}],g=async()=>{const R=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!R){alert("Please load a demo project or upload an audio file first.");return}u(!0);try{const P=await Mt(gt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:R,profile:n,custom_target_lufs:r,custom_ceiling_dbtp:a})});p(P)}catch(P){alert(`Mastering error: ${P.message}`)}finally{u(!1)}};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(Ka,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"STATUTORY MASTERING SUITE (EBU R128 / ITU-R BS.1770-4)"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Target loudness normalisation, multiband dynamic control, tape saturation, and zero-overshoot true-peak brickwall limiting."})]}),c.jsx("button",{onClick:g,disabled:l,className:"px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:l?"Mastering in Progress...":"Execute Full Mastering Chain"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-3",children:f.map(R=>{const P=n===R.id;return c.jsxs("div",{onClick:()=>{i(R.id),s(R.lufs),o(R.ceiling)},className:`p-4 rounded-xl border cursor-pointer transition-all ${P?"bg-slate-900 border-cyan-400 shadow-md shadow-cyan-500/10":"bg-[#0c101a] border-slate-800 hover:border-slate-700"}`,children:[c.jsx("div",{className:`font-mono text-xs font-bold ${R.color}`,children:R.name}),c.jsxs("div",{className:"mt-2 space-y-1 font-mono text-[11px]",children:[c.jsxs("div",{className:"text-white font-semibold",children:["Target: ",R.lufs," LUFS"]}),c.jsxs("div",{className:"text-slate-400",children:["Ceiling: ",R.ceiling," dBTP"]})]})]},R.id)})}),c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4",children:[c.jsx("h3",{className:"font-mono text-xs font-bold text-cyan-300 uppercase",children:"Mastering Target Parameters"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"Integrated Loudness Target (LUFS)"}),c.jsxs("span",{className:"text-white font-bold",children:[r," LUFS"]})]}),c.jsx("input",{type:"range",min:"-30.0",max:"-6.0",step:"0.5",value:r,onChange:R=>s(parseFloat(R.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-400 mb-1",children:[c.jsx("span",{children:"True-Peak Limiter Ceiling (dBTP)"}),c.jsxs("span",{className:"text-white font-bold",children:[a," dBTP"]})]}),c.jsx("input",{type:"range",min:"-3.0",max:"0.0",step:"0.1",value:a,onChange:R=>o(parseFloat(R.target.value)),className:"w-full h-1.5 bg-slate-800 rounded cursor-pointer"})]})]})]}),h&&c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(eh,{className:"w-5 h-5 text-emerald-400"}),c.jsxs("span",{className:"font-mono text-xs font-bold text-white",children:["Mastering Audit Report (",(_=h.mastering_report)==null?void 0:_.profile_used,")"]})]}),c.jsxs("a",{href:fn(h.download_url),download:!0,className:"flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors",children:[c.jsx(Hr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Download Mastered WAV"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono",children:[c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),c.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(x=(S=h.mastering_report)==null?void 0:S.pre_mastering_metrics)==null?void 0:x.integrated_lufs," →"," ",c.jsxs("span",{className:"text-cyan-400",children:[(m=(d=h.mastering_report)==null?void 0:d.post_mastering_metrics)==null?void 0:m.integrated_lufs," LUFS"]})]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak"}),c.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(M=(y=h.mastering_report)==null?void 0:y.pre_mastering_metrics)==null?void 0:M.true_peak_dbtp," →"," ",c.jsxs("span",{className:"text-emerald-400",children:[(b=(A=h.mastering_report)==null?void 0:A.post_mastering_metrics)==null?void 0:b.true_peak_dbtp," dBTP"]})]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Loudness Range (LRA)"}),c.jsxs("div",{className:"text-sm font-bold text-violet-400 mt-1",children:[(E=(v=h.mastering_report)==null?void 0:v.post_mastering_metrics)==null?void 0:E.loudness_range_lra," LU"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Applied Gain Adjustment"}),c.jsxs("div",{className:"text-sm font-bold text-amber-400 mt-1",children:[(C=h.mastering_report)==null?void 0:C.applied_gain_db," dB"]})]})]})]})]})}function RT({activeFile:t,tracks:e=[]}){var l,u,h,p,f,g,_,S,x;const[n,i]=ne.useState(null),[r,s]=ne.useState(!1),a=ne.useRef(null),o=async()=>{const d=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!d){alert("Please load a demo project or upload an audio file first.");return}s(!0);try{const m=new FormData;m.append("file_path",d);const y=await Mt(gt("/api/v1/audio/analyze"),{method:"POST",body:m});i(y)}catch(m){alert(`Analysis error: ${m.message}`)}finally{s(!1)}};return ne.useEffect(()=>{let d;const m=a.current;if(!m)return;const y=m.getContext("2d"),M=()=>{const A=m.width,b=m.height;y.clearRect(0,0,A,b);const E=ut.getTelemetry().fftData||new Uint8Array(64),C=A/E.length;for(let R=0;R<E.length;R++){const I=E[R]/255*b,H=R*C,L=b-I,W=y.createLinearGradient(0,L,0,b);W.addColorStop(0,"#00f2fe"),W.addColorStop(1,"#7928ca"),y.fillStyle=W,y.fillRect(H,L,C-1.5,I)}d=requestAnimationFrame(M)};return M(),()=>cancelAnimationFrame(d)},[]),c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx($a,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"PROFESSIONAL ACOUSTIC ANALYSIS & RTA VECTOR LAB"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Conforming to ITU-R BS.1770-4, EBU R128, FFT spectral distribution, phase correlation, and crest factor."})]}),c.jsx("button",{onClick:o,disabled:r,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:r?"Measuring Acoustics...":"Run Deep Acoustic Audit"})]}),c.jsxs("div",{className:"bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-cyan-300",children:"Real-Time FFT Spectrum Analyzer (RTA 64-Band Octave)"}),c.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"LIVE AUDIO MONITOR"})]}),c.jsx("canvas",{ref:a,width:800,height:180,className:"w-full h-44 bg-black/60 rounded-xl border border-slate-800"})]}),n&&c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-3 text-xs font-mono",children:[c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),c.jsxs("div",{className:"text-base font-bold text-cyan-400 mt-1",children:[(l=n.acoustic_analysis)==null?void 0:l.integrated_lufs," LUFS"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak"}),c.jsxs("div",{className:"text-base font-bold text-emerald-400 mt-1",children:[(u=n.acoustic_analysis)==null?void 0:u.true_peak_dbtp," dBTP"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Phase Correlation"}),c.jsx("div",{className:"text-base font-bold text-violet-400 mt-1",children:(h=n.acoustic_analysis)==null?void 0:h.phase_correlation})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Dynamic Range (DR)"}),c.jsxs("div",{className:"text-base font-bold text-amber-400 mt-1",children:["DR ",(p=n.acoustic_analysis)==null?void 0:p.dynamic_range_dr]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Crest Factor"}),c.jsxs("div",{className:"text-base font-bold text-white mt-1",children:[(f=n.acoustic_analysis)==null?void 0:f.crest_factor_db," dB"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Clipping Status"}),c.jsx("div",{className:`text-base font-bold mt-1 ${(_=(g=n.acoustic_analysis)==null?void 0:g.clipping)!=null&&_.has_clipping?"text-rose-400":"text-emerald-400"}`,children:(x=(S=n.acoustic_analysis)==null?void 0:S.clipping)!=null&&x.has_clipping?"CLIPPING":"CLEAN"})]})]}),n.ai_engineer_notes&&c.jsxs("div",{className:"bg-black/80 p-4 rounded-xl border border-cyan-800/80 text-xs font-mono space-y-1",children:[c.jsx("div",{className:"font-bold text-cyan-400 uppercase",children:"Agent 01 Evaluation:"}),c.jsx("p",{className:"text-slate-300 leading-relaxed",children:n.ai_engineer_notes})]})]})]})}function CT({onAddTrackFromAudio:t}){const[e,n]=ne.useState(!1),[i,r]=ne.useState([]),[s,a]=ne.useState(0),o=async()=>{try{await ut.startRecording(),n(!0),a(0);const u=setInterval(()=>{a(h=>h+1)},1e3);window._recInterval=u}catch(u){alert(`Recording error: ${u.message}. Ensure microphone permissions are granted.`)}},l=async()=>{if(!e)return;clearInterval(window._recInterval),n(!1);const u=await ut.stopRecording();if(u){const h=`Take_${i.length+1}`,p=URL.createObjectURL(u),f={id:h,name:`Microphone_${h}`,url:p,duration:s,blob:u};r(g=>[f,...g])}};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(dc,{className:"w-5 h-5 text-rose-500"}),c.jsx("span",{children:"LIVE MICROPHONE & AUDIO INTERFACE RECORDING STUDIO"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Low-latency audio capture via MediaDevices and AudioWorklet with non-destructive take comping."})]})}),c.jsxs("div",{className:"bg-[#0b0e17] p-8 rounded-2xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center space-y-6",children:[c.jsxs("div",{className:"text-4xl font-mono font-bold text-white tracking-widest",children:[String(Math.floor(s/60)).padStart(2,"0"),":",String(s%60).padStart(2,"0")]}),c.jsx("div",{className:"flex items-center space-x-4",children:e?c.jsxs("button",{onClick:l,className:"px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-bold text-sm flex items-center space-x-2 border border-slate-700 transition-all",children:[c.jsx(cx,{className:"w-5 h-5 fill-current text-rose-500"}),c.jsx("span",{children:"Stop & Save Recording Take"})]}):c.jsxs("button",{onClick:o,className:"px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-sm flex items-center space-x-2 shadow-xl shadow-rose-600/30 transition-all",children:[c.jsx(th,{className:"w-5 h-5 fill-current animate-pulse"}),c.jsx("span",{children:"Start Microphone Recording"})]})}),c.jsx("p",{className:"text-xs font-mono text-slate-500",children:"Capture 24-bit PCM mono or stereo microphone audio non-destructively."})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("h3",{className:"font-mono text-xs font-bold text-slate-300 uppercase",children:["Captured Audio Takes (",i.length,")"]}),i.length===0?c.jsx("div",{className:"p-8 text-center bg-[#0c101a] rounded-xl border border-slate-800 text-xs font-mono text-slate-500",children:"No microphone takes recorded yet in this session."}):c.jsx("div",{className:"space-y-2",children:i.map(u=>c.jsxs("div",{className:"bg-[#0c101a] p-3 rounded-xl border border-slate-800 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 font-mono text-xs font-bold border border-rose-800",children:"REC"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-mono font-bold text-white",children:u.name}),c.jsxs("div",{className:"text-[10px] font-mono text-slate-400",children:[u.duration," seconds duration"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("audio",{src:u.url,controls:!0,className:"h-8 w-48"}),c.jsxs("button",{onClick:()=>{t&&t({name:u.name,file_path:u.url,category:"Recording",color:"#f43f5e"})},className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/40 text-xs font-mono font-bold transition-colors",children:[c.jsx(Ol,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Add to DAW Timeline"})]})]})]},u.id))})]})]})}function NT({activeFile:t,tracks:e=[]}){var S,x,d,m,y,M,A;const[n,i]=ne.useState("FLAC"),[r,s]=ne.useState("24"),[a,o]=ne.useState(96e3),[l,u]=ne.useState("stereo"),[h,p]=ne.useState(!1),[f,g]=ne.useState(null),_=async()=>{const b=(t==null?void 0:t.file_path)||(e[0]?e[0].file_path:null);if(!b){alert("Please load a demo project or upload an audio file first.");return}p(!0);try{const v=await Mt(gt("/api/v1/export/render"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:b,project_name:"SONIQ_Session",export_name:"Final_Master",output_format:n,bit_depth:r,sample_rate:a,channels_layout:l})});g(v)}catch(v){alert(`Export error: ${v.message}`)}finally{p(!1)}};return c.jsxs("div",{className:"flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h1",{className:"text-base font-bold text-white font-mono flex items-center space-x-2",children:[c.jsx(sx,{className:"w-5 h-5 text-cyan-400"}),c.jsx("span",{children:"PROFESSIONAL AUDIO EXPORT & DELIVERY CENTRE"})]}),c.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Lossless FLAC, Broadcast WAV PCM, Multichannel 5.1/7.1, 16/24/32-bit float, and Technical QC Certificate."})]}),c.jsx("button",{onClick:_,disabled:h,className:"px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono",children:h?"Rendering Audio...":`Export Master ${n} (${r}-bit / ${a/1e3}kHz)`})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[c.jsx("label",{className:"text-cyan-400 font-bold",children:"Delivery Format"}),c.jsxs("select",{value:n,onChange:b=>i(b.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[c.jsx("option",{value:"FLAC",children:"Lossless FLAC"}),c.jsx("option",{value:"WAV",children:"Broadcast WAV PCM"}),c.jsx("option",{value:"AIFF",children:"AIFF"}),c.jsx("option",{value:"MP3",children:"MP3 (320 kbps Perceptual)"}),c.jsx("option",{value:"OGG",children:"OGG Vorbis"})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[c.jsx("label",{className:"text-violet-400 font-bold",children:"Bit Depth Precision"}),c.jsxs("select",{value:r,onChange:b=>s(b.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[c.jsx("option",{value:"24",children:"24-bit Studio Standard"}),c.jsx("option",{value:"16",children:"16-bit Red Book CD"}),c.jsx("option",{value:"32f",children:"32-bit Floating Point (Zero-Clip)"})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[c.jsx("label",{className:"text-emerald-400 font-bold",children:"Sample Rate (Hz)"}),c.jsxs("select",{value:a,onChange:b=>o(parseInt(b.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[c.jsx("option",{value:96e3,children:"96 kHz (High-Resolution Studio)"}),c.jsx("option",{value:48e3,children:"48 kHz (Broadcast & Cinema Standard)"}),c.jsx("option",{value:44100,children:"44.1 kHz (Commercial CD)"}),c.jsx("option",{value:192e3,children:"192 kHz (Ultra High-Fidelity)"})]})]}),c.jsxs("div",{className:"bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[c.jsx("label",{className:"text-amber-400 font-bold",children:"Channel Configuration"}),c.jsxs("select",{value:l,onChange:b=>u(b.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 mt-1",children:[c.jsx("option",{value:"stereo",children:"Stereo 2.0"}),c.jsx("option",{value:"5.1",children:"5.1 Multichannel Surround"}),c.jsx("option",{value:"7.1",children:"7.1 Multichannel Surround"})]})]})]}),["MP3","OGG"].includes(n)&&c.jsxs("div",{className:"bg-amber-950/30 p-3.5 rounded-xl border border-amber-800/80 text-amber-200 text-xs font-mono flex items-center space-x-2",children:[c.jsx(Yy,{className:"w-4 h-4 text-amber-400 shrink-0"}),c.jsx("span",{children:"Notice: MP3/OGG utilizes lossy perceptual psychoacoustic encoding. For bit-transparent archiving, use 24-bit FLAC or Broadcast WAV."})]}),f&&c.jsxs("div",{className:"bg-[#0b0e17] p-6 rounded-2xl border border-cyan-500/40 space-y-4 shadow-2xl",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(eh,{className:"w-5 h-5 text-emerald-400"}),c.jsxs("span",{className:"font-mono text-xs font-bold text-white",children:["Technical Delivery Certificate (",f.certificate_id,")"]})]}),c.jsx("div",{className:"flex items-center space-x-3",children:c.jsxs("a",{href:fn(f.download_path),download:!0,className:"flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-lg shadow-emerald-900/30",children:[c.jsx(Hr,{className:"w-4 h-4"}),c.jsx("span",{children:"Download Master Audio File"})]})})]}),c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono",children:[c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Codec / Format"}),c.jsxs("div",{className:"text-sm font-bold text-cyan-400 mt-1",children:[(S=f.technical_specifications)==null?void 0:S.format," (",(x=f.technical_specifications)==null?void 0:x.codec,")"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Sample Rate & Bit Depth"}),c.jsxs("div",{className:"text-sm font-bold text-white mt-1",children:[(d=f.technical_specifications)==null?void 0:d.sample_rate_hz," Hz • ",(m=f.technical_specifications)==null?void 0:m.bit_depth,"-bit"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),c.jsxs("div",{className:"text-sm font-bold text-violet-400 mt-1",children:[(y=f.acoustic_measurements)==null?void 0:y.integrated_lufs," LUFS"]})]}),c.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak Ceiling"}),c.jsxs("div",{className:"text-sm font-bold text-emerald-400 mt-1",children:[(M=f.acoustic_measurements)==null?void 0:M.true_peak_dbtp," dBTP"]})]})]}),c.jsxs("div",{className:"bg-black/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono",children:[c.jsx("span",{className:"text-slate-400",children:"Pre-Export Quality Assurance Status:"}),c.jsxs("span",{className:"text-emerald-400 font-bold bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800",children:[(A=f.quality_audit)==null?void 0:A.overall_status," (ALL CHECKS PASSED)"]})]})]})]})}function PT({isOpen:t,onClose:e,track:n,onApplyEffect:i,onAddStemTracks:r,onNavigateTab:s}){if(!t||!n)return null;const[a,o]=ne.useState(!1),[l,u]=ne.useState(null),[h,p]=ne.useState(""),[f,g]=ne.useState(null),_=[{id:"streaming_master",name:"Streaming Master (-14 LUFS)",badge:"POPULAR",icon:Ka,color:"from-cyan-500 to-blue-600",description:"EBU R128 / ITU-R BS.1770-4 normalization, multiband dynamics, tape warmth & -1 dBTP true peak brickwall limiter.",category:"Mastering",run:async()=>await Mt(gt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,profile:"streaming",custom_target_lufs:-14,custom_ceiling_dbtp:-1})})},{id:"vocal_polish",name:"Vocal Polish & De-Ess",badge:"STUDIO AIR",icon:dc,color:"from-pink-500 to-rose-600",description:"6.5 kHz sibilance de-essing, pitch centering, smooth opto-compression & high-shelf studio air lift.",category:"Vocals",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),d.append("target_scale","A Minor"),d.append("de_ess_db","4.5"),await Mt(gt("/api/v1/audio/vocal-process"),{method:"POST",body:d})}},{id:"ai_restore",name:"AI Noise & Hum Removal",badge:"AGENT 03",icon:fc,color:"from-emerald-500 to-teal-600",description:"Spectral noise suppression, 50Hz/60Hz ground loop removal, and peak declipping restoration.",category:"Restoration",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),d.append("denoise","true"),d.append("dehum_freq","50.0"),d.append("declip","true"),await Mt(gt("/api/v1/audio/restore"),{method:"POST",body:d})}},{id:"analog_warmth",name:"Analog Tube Warmth & Punch",badge:"64-BIT DSP",icon:Vy,color:"from-amber-500 to-orange-600",description:"Tube saturation warmth, 80Hz low-end lift, optical compression (3.5:1), and subtle Haas stereo widening.",category:"DSP Rack",run:async()=>await Mt(gt("/api/v1/dsp/process"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,operations:[{type:"eq",bands:[{type:"lowshelf",freq:80,gain_db:2.5,q:.707},{type:"peaking",freq:3200,gain_db:1.8,q:1.2},{type:"highshelf",freq:11e3,gain_db:2,q:.707}]},{type:"saturation",drive_db:4.5,mode:"tube",warmth:.8},{type:"compressor",threshold_db:-16,ratio:3.5,attack_ms:18,release_ms:110,makeup_gain_db:2.5},{type:"widener",width_pct:125}]})})},{id:"cd_master",name:"Commercial CD / Club (-9 LUFS)",badge:"LOUD",icon:lx,color:"from-violet-500 to-purple-700",description:"High-energy commercial club loudness, aggressive multiband glue, and true peak ceiling at -0.1 dBTP.",category:"Mastering",run:async()=>await Mt(gt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,profile:"cd",custom_target_lufs:-9,custom_ceiling_dbtp:-.1})})},{id:"surround_51",name:"5.1 Spatial Surround Mix",badge:"IMMERSIVE",icon:Fl,color:"from-blue-500 to-indigo-600",description:"VBAP panner across 6 discrete channels (L, R, C, LFE, Ls, Rs) with 80Hz Linkwitz-Riley sub crossover.",category:"Surround",run:async()=>await Mt(gt("/api/v1/audio/surround"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:n.file_path,layout:"5.1",x:0,y:.4,crossover_hz:80})})},{id:"separate_stems",name:"Separate into 4 Stems",badge:"AGENT 02",icon:nh,color:"from-cyan-400 to-emerald-500",description:"Deconstructs the track into isolated Vocals, Drums, Bass, and Other instruments imported directly to your timeline.",category:"AI Separation",run:async()=>{const d=new FormData;return d.append("file_path",n.file_path),await Mt(gt("/api/v1/audio/separate-stems"),{method:"POST",body:d})}},{id:"ai_orchestration",name:"Full Autonomous AI Production Swarm",badge:"AGENT 10",icon:Ya,color:"from-amber-400 to-pink-500",description:"Runs all 10 autonomous agents: full acoustic inspection, dynamic repair, stereo widening, and master export.",category:"Full Autonomous",run:async()=>await Mt(gt("/api/v1/audio/orchestrate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:"Clean noise, optimize dynamics, enhance vocals, and master for streaming at -14 LUFS",file_path:n.file_path})})}],S=async d=>{if(!n.file_path){alert("Selected track has no audio source path.");return}o(!0),u(d.id),p(`Running ${d.name}...`),g(null);try{const m=await d.run();g({preset:d,data:m}),p(`${d.name} applied successfully!`)}catch(m){p(`Error: ${m.message}`)}finally{o(!1)}},x=d=>{var b,v,E,C,R,P,I;if(!d)return{};const m=d.download_url||(d.processed_file?`/api/v1/audio/download/${d.processed_file.split("/").pop()}`:"")||"",y=d.output_file||d.processed_file||d.restored_file||d.file_path||n.file_path,M=((v=(b=d.mastering_report)==null?void 0:b.post_mastering_metrics)==null?void 0:v.integrated_lufs)??((E=d.metrics)==null?void 0:E.integrated_lufs)??((C=d.post_restoration_metrics)==null?void 0:C.integrated_lufs)??null,A=((P=(R=d.mastering_report)==null?void 0:R.post_mastering_metrics)==null?void 0:P.true_peak_dbtp)??((I=d.metrics)==null?void 0:I.sample_peak_dbfs)??null;return{downloadUrl:m,filePath:y,lufs:M,truePeak:A}};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:c.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0e17] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden",children:[c.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-900 via-[#0d121f] to-slate-900",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center",children:c.jsx(kl,{className:"w-5 h-5 text-cyan-400"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("h2",{className:"text-sm font-bold font-mono text-white",children:"INSTANT EFFECTS & MASTERING ASSISTANT"}),c.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800",children:"1-Click DSP"})]}),c.jsxs("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:["Target Track: ",c.jsx("span",{className:"text-cyan-300 font-semibold",children:n.name})," • 64-bit Non-Destructive"]})]})]}),c.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:c.jsx(ux,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3",children:"Select 1-Click Studio Treatment:"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:_.map(d=>{const m=d.icon,y=l===d.id;return c.jsxs("button",{disabled:a,onClick:()=>S(d),className:`text-left p-4 rounded-xl border transition-all relative flex flex-col justify-between group ${y&&a?"bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20":y&&f?"bg-emerald-950/30 border-emerald-500/80 shadow-lg shadow-emerald-500/10":"bg-slate-900/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700"}`,children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:`w-8 h-8 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center text-black font-bold shadow-md`,children:c.jsx(m,{className:"w-4 h-4 text-white"})}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs font-bold font-mono text-white group-hover:text-cyan-300 transition-colors",children:d.name}),c.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:d.category})]})]}),c.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-400 border border-slate-800 font-bold",children:d.badge})]}),c.jsx("p",{className:"text-[11px] text-slate-300 font-mono mt-2.5 leading-relaxed",children:d.description}),c.jsxs("div",{className:"mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono",children:[c.jsx("span",{className:"text-slate-500 group-hover:text-slate-400",children:"1-Click Apply"}),c.jsxs("span",{className:"text-cyan-400 font-bold flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform",children:[c.jsx("span",{children:"Execute"}),c.jsx(yo,{className:"w-3 h-3"})]})]})]},d.id)})})]}),a&&c.jsxs("div",{className:"bg-cyan-950/30 border border-cyan-500/40 p-4 rounded-xl flex items-center space-x-3 text-xs font-mono text-cyan-300 animate-pulse",children:[c.jsx($a,{className:"w-5 h-5 text-cyan-400 animate-spin shrink-0"}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold",children:h}),c.jsx("div",{className:"text-[10px] text-cyan-400/80",children:"Applying 64-bit floating point mathematical DSP to preserve transients..."})]})]}),f&&c.jsxs("div",{className:"bg-[#0f1422] border border-emerald-500/50 p-5 rounded-2xl space-y-4 shadow-xl",children:[c.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center",children:c.jsx(jp,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"text-xs font-bold font-mono text-emerald-400",children:[f.preset.name," Complete!"]}),c.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"Audio processed non-destructively in RAM & sovereign disk"})]})]}),x(f.data).downloadUrl&&c.jsxs("a",{href:fn(x(f.data).downloadUrl),download:!0,className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors shadow-md",children:[c.jsx(Hr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Download WAV"})]})]}),x(f.data).lufs!==null&&c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono",children:[c.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Integrated Loudness"}),c.jsxs("div",{className:"text-cyan-400 font-bold mt-0.5",children:[x(f.data).lufs," LUFS"]})]}),c.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"True Peak Ceiling"}),c.jsxs("div",{className:"text-emerald-400 font-bold mt-0.5",children:[x(f.data).truePeak??-1," dBTP"]})]}),c.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Sample Rate & Depth"}),c.jsx("div",{className:"text-white font-bold mt-0.5",children:"48 kHz • 24-bit"})]}),c.jsxs("div",{className:"bg-black/60 p-2.5 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"text-[10px] text-slate-400",children:"Headroom Status"}),c.jsx("div",{className:"text-emerald-400 font-bold mt-0.5",children:"0.0 Overshoots"})]})]}),f.preset.id==="separate_stems"&&f.data.stems&&c.jsxs("div",{className:"space-y-2",children:[c.jsx("div",{className:"text-xs font-mono font-bold text-cyan-300",children:"4 Isolated Stems Generated:"}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono",children:Object.entries(f.data.stems).map(([d,m])=>c.jsxs("div",{className:"bg-black/60 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between",children:[c.jsx("span",{className:"font-bold capitalize text-white",children:d}),c.jsxs("span",{className:"text-[10px] text-slate-400",children:[m.duration_seconds,"s"]})]},d))}),c.jsxs("button",{onClick:()=>{r&&(r(Object.values(f.data.stems)),e())},className:"w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-extrabold font-mono text-xs flex items-center justify-center space-x-2 transition-all shadow-lg",children:[c.jsx(Ol,{className:"w-4 h-4"}),c.jsx("span",{children:"Import All 4 Stems As DAW Tracks"})]})]}),f.preset.id!=="separate_stems"&&c.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-3 pt-2",children:[c.jsxs("button",{onClick:()=>{const d=x(f.data);i(n.id,{file_path:d.filePath,download_url:d.downloadUrl,name:`${n.name} [${f.preset.name.split(" ")[0]}]`},"new_track"),e()},className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-colors flex items-center space-x-1.5",children:[c.jsx(Ol,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"Add As New Track (A/B Test)"})]}),c.jsxs("button",{onClick:()=>{const d=x(f.data);i(n.id,{file_path:d.filePath,download_url:d.downloadUrl,name:`${n.name} (${f.preset.name.split(" ")[0]})`},"replace"),e()},className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-mono text-xs font-extrabold transition-all shadow-lg shadow-cyan-500/20 flex items-center space-x-1.5",children:[c.jsx(jp,{className:"w-4 h-4"}),c.jsx("span",{children:"Update Current Track Audio"})]})]})]})]}),c.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-[#080a10] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400",children:[c.jsx("span",{children:"Need full manual parameter tweaking?"}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsxs("button",{onClick:()=>{s("dsp"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[c.jsx("span",{children:"64-bit DSP Rack"}),c.jsx(yo,{className:"w-3 h-3"})]}),c.jsx("span",{children:"•"}),c.jsxs("button",{onClick:()=>{s("mastering"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[c.jsx("span",{children:"Mastering Suite"}),c.jsx(yo,{className:"w-3 h-3"})]}),c.jsx("span",{children:"•"}),c.jsxs("button",{onClick:()=>{s("surround"),e()},className:"text-cyan-400 hover:underline flex items-center space-x-1",children:[c.jsx("span",{children:"5.1 Surround Studio"}),c.jsx(yo,{className:"w-3 h-3"})]})]})]})]})})}function LT({track:t,onOpenQuickFX:e,onApplyEffect:n,onAddStemTracks:i,onDismiss:r}){if(!t)return null;const[s,a]=ne.useState(null),o=async l=>{if(t.file_path){a(l);try{if(l==="master"){const u=await Mt(gt("/api/v1/audio/master"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:t.file_path,profile:"streaming",custom_target_lufs:-14,custom_ceiling_dbtp:-1})}),h=u.download_url||"";n(t.id,{file_path:u.output_file||t.file_path,download_url:h,name:`${t.name} (Mastered -14 LUFS)`},"replace")}else if(l==="vocal"){const u=new FormData;u.append("file_path",t.file_path),u.append("target_scale","A Minor"),u.append("de_ess_db","4.5");const h=await Mt(gt("/api/v1/audio/vocal-process"),{method:"POST",body:u}),p=h.download_url||"";n(t.id,{file_path:h.processed_file||t.file_path,download_url:p,name:`${t.name} (Vocal Polished)`},"replace")}else if(l==="denoise"){const u=new FormData;u.append("file_path",t.file_path),u.append("denoise","true"),u.append("dehum_freq","50.0"),u.append("declip","true");const h=await Mt(gt("/api/v1/audio/restore"),{method:"POST",body:u}),p=h.download_url||"";n(t.id,{file_path:h.restored_file||t.file_path,download_url:p,name:`${t.name} (Restored & Clean)`},"replace")}else if(l==="stems"){const u=new FormData;u.append("file_path",t.file_path);const h=await Mt(gt("/api/v1/audio/separate-stems"),{method:"POST",body:u});h.stems&&i&&i(Object.values(h.stems))}}catch(u){alert(`Action error: ${u.message}`)}finally{a(null)}}};return c.jsxs("div",{className:"mx-4 mb-2 p-3 bg-gradient-to-r from-[#0d1527] via-[#091e2b] to-[#0d1527] border border-cyan-500/40 rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono animate-in slide-in-from-top-2 duration-300",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40",children:c.jsx(kl,{className:"w-4 h-4 text-cyan-300 animate-pulse"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-white font-bold truncate max-w-xs",children:t.name}),c.jsx("span",{className:"text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-800",children:"Active File"})]}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Apply 1-click sovereign DSP effect or AI mastering:"})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[c.jsxs("button",{disabled:!!s,onClick:()=>o("master"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/50 transition-all font-bold disabled:opacity-50",children:[s==="master"?c.jsx(So,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(Ka,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"1-Click Master (-14 LUFS)"})]}),c.jsxs("button",{disabled:!!s,onClick:()=>o("vocal"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 text-pink-200 border border-pink-500/40 transition-all font-bold disabled:opacity-50",children:[s==="vocal"?c.jsx(So,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(dc,{className:"w-3.5 h-3.5 text-pink-400"}),c.jsx("span",{children:"Vocal Polish"})]}),c.jsxs("button",{disabled:!!s,onClick:()=>o("denoise"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-200 border border-emerald-500/40 transition-all font-bold disabled:opacity-50",children:[s==="denoise"?c.jsx(So,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(fc,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{children:"AI De-Noise"})]}),c.jsxs("button",{disabled:!!s,onClick:()=>o("stems"),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 text-violet-200 border border-violet-500/40 transition-all font-bold disabled:opacity-50",children:[s==="stems"?c.jsx(So,{className:"w-3.5 h-3.5 animate-spin"}):c.jsx(nh,{className:"w-3.5 h-3.5 text-violet-400"}),c.jsx("span",{children:"Split 4 Stems"})]}),c.jsxs("button",{onClick:e,className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold transition-all shadow-md shadow-cyan-500/20",children:[c.jsx(Ya,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"More Effects..."})]}),r&&c.jsx("button",{onClick:r,className:"p-1 rounded text-slate-500 hover:text-slate-300 ml-1 transition-colors",title:"Dismiss Banner",children:c.jsx(ux,{className:"w-4 h-4"})})]})]})}function DT(){const[t,e]=ne.useState("studio"),[n,i]=ne.useState([]),[r,s]=ne.useState(null),[a,o]=ne.useState(null),[l,u]=ne.useState(!1),[h,p]=ne.useState(120),[f,g]=ne.useState(!1),[_,S]=ne.useState(""),[x,d]=ne.useState(null),[m,y]=ne.useState(!1),[M,A]=ne.useState(!0);ne.useEffect(()=>{b()},[]);const b=async()=>{g(!0),S("");try{const z=await Mt(gt("/api/v1/projects/demo"));if(i(z.tracks||[]),p(z.tempo_bpm||120),z.tracks&&z.tracks.length>0){s(z.tracks[0].id),o({file_path:z.tracks[0].file_path});for(const O of z.tracks){const k=fn(O.download_url);await ut.loadTrackAudio(O.id,k)}}}catch(z){console.error("Failed to load studio demo project:",z),S(`Demo Load Notice: ${z.message}`)}finally{g(!1)}},v=()=>{ut.playAll(),u(!0)},E=()=>{ut.pauseAll(),u(!1)},C=()=>{ut.stopAll(),u(!1)},R=(z,O)=>{i(k=>k.map(F=>F.id===z?{...F,...O}:F))},P=()=>{const z=`Track_${n.length+1}`,O={id:z,name:`Audio Track ${n.length+1}`,category:"Audio",color:"#06b6d4",volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(k=>[...k,O]),s(z)},I=async z=>{const O=new FormData;O.append("file",z);try{const k=await Mt(gt("/api/v1/audio/upload"),{method:"POST",body:O}),F={id:k.file_id,name:z.name.replace(/\.[^/.]+$/,""),category:"Import",color:"#8b5cf6",file_path:k.file_path,download_url:k.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:k.waveform_preview||[]};i(V=>[...V,F]),s(F.id),o({file_path:k.file_path}),d(F),A(!0),y(!0),await ut.loadTrackAudio(F.id,fn(k.download_url))}catch(k){alert(`Upload error: ${k.message}`)}},H=async(z,O,k="replace")=>{if(k==="replace")i(F=>F.map(V=>V.id===z?{...V,name:O.name||V.name,file_path:O.file_path,download_url:O.download_url}:V)),r===z&&o({file_path:O.file_path}),O.download_url&&await ut.loadTrackAudio(z,fn(O.download_url));else{const F=`Track_FX_${Date.now()}`,V={id:F,name:O.name||"Track (FX)",category:"Processed",color:"#10b981",file_path:O.file_path,download_url:O.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(Z=>[...Z,V]),s(F),o({file_path:O.file_path}),O.download_url&&await ut.loadTrackAudio(F,fn(O.download_url))}},L=async z=>{const O={vocals:"#ec4899",drums:"#f59e0b",bass:"#8b5cf6",other:"#06b6d4"};for(const k of z){const F=`Stem_${k.stem_name}_${Date.now()}_${Math.floor(Math.random()*1e3)}`,V={id:F,name:`Stem: ${k.stem_name.toUpperCase()}`,category:"Stem",color:O[k.stem_name]||"#10b981",file_path:k.file_path,download_url:k.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:Array.from({length:60}).map(()=>Math.random()*.8+.1)};i(Z=>[...Z,V]),k.download_url&&await ut.loadTrackAudio(F,fn(k.download_url))}},W=async z=>{const O=`Synth_${n.length+1}`,k={id:O,name:z.name||`Clip ${n.length+1}`,category:"Synth",color:"#f59e0b",file_path:z.file_path,download_url:z.download_url,volume_db:"0.0 dB",volume:1,pan:0,mute:!1,solo:!1,waveform:z.waveform_preview||[]};i(F=>[...F,k]),s(O),z.download_url&&await ut.loadTrackAudio(O,fn(z.download_url))};return c.jsxs("div",{className:"min-h-screen flex flex-col bg-[#07090e] text-slate-100",children:[c.jsx(Ky,{activeTab:t,setActiveTab:e,isPlaying:l}),c.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[t==="studio"&&c.jsxs(c.Fragment,{children:[M&&n.length>0&&c.jsx(LT,{track:n.find(z=>z.id===r)||n[0],onOpenQuickFX:()=>{const z=n.find(O=>O.id===r)||n[0];z&&(d(z),y(!0))},onApplyEffect:H,onAddStemTracks:L,onDismiss:()=>A(!1)}),c.jsx(Qy,{tracks:n,onUpdateTrack:R,onAddTrack:P,onUploadFile:I,activeTrackId:r,setActiveTrackId:z=>{s(z);const O=n.find(k=>k.id===z);O&&o({file_path:O.file_path})},onOpenQuickFX:z=>{d(z),y(!0)}})]}),t==="mixer"&&c.jsx(eS,{tracks:n,onUpdateTrack:R}),t==="ai_agents"&&c.jsx(tS,{activeFile:a,tracks:n,onRefreshTracks:b}),t==="dsp_rack"&&c.jsx(nS,{activeFile:a,tracks:n}),t==="surround"&&c.jsx(bT,{activeFile:a,tracks:n}),t==="synths"&&c.jsx(TT,{onAddTrackFromAudio:W}),t==="mastering"&&c.jsx(AT,{activeFile:a,tracks:n}),t==="analysis"&&c.jsx(RT,{activeFile:a,tracks:n}),t==="recording"&&c.jsx(CT,{onAddTrackFromAudio:W}),t==="exports"&&c.jsx(NT,{activeFile:a,tracks:n})]}),c.jsx(Jy,{isPlaying:l,onPlay:v,onPause:E,onStop:C,bpm:h,setBpm:p,onLoadDemo:b,loadingDemo:f}),c.jsx(PT,{isOpen:m,onClose:()=>y(!1),track:x||n.find(z=>z.id===r)||n[0],onApplyEffect:H,onAddStemTracks:L,onNavigateTab:z=>e(z)})]})}Mu.createRoot(document.getElementById("root")).render(c.jsx(bv.StrictMode,{children:c.jsx(DT,{})}));
