const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-CK0lOtdp.js","assets/Header-rb_AFkcD.css","assets/HeroSection-B9ULzTcm.js","assets/HeroSection-Dh3q21l6.css","assets/Sections-CLuoPZRP.js","assets/Sections-BYRtBqQ3.css","assets/Phrase-ChsCVNpt.js","assets/Phrase-CRB0RN55.css","assets/Present-DrEXpG3m.js","assets/Present-Bud_qEhl.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},gr=[],gn=()=>{},Eg=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),iu=t=>t.startsWith("onUpdate:"),Ye=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vb=Object.prototype.hasOwnProperty,ve=(t,e)=>Vb.call(t,e),ne=Array.isArray,mr=t=>Ra(t)==="[object Map]",Tg=t=>Ra(t)==="[object Set]",ie=t=>typeof t=="function",Fe=t=>typeof t=="string",yi=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Sg=t=>(xe(t)||ie(t))&&ie(t.then)&&ie(t.catch),Ag=Object.prototype.toString,Ra=t=>Ag.call(t),Bb=t=>Ra(t).slice(8,-1),Cg=t=>Ra(t)==="[object Object]",su=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Hb=/-\w/g,Ut=Pa(t=>t.replace(Hb,e=>e.slice(1).toUpperCase())),Wb=/\B([A-Z])/g,Zi=Pa(t=>t.replace(Wb,"-$1").toLowerCase()),Na=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),_l=Pa(t=>t?`on${Na(t)}`:""),ai=(t,e)=>!Object.is(t,e),yl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},zb=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qb=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let gf;const Oa=()=>gf||(gf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xa(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Fe(i)?Xb(i):xa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Fe(t)||xe(t))return t}const Gb=/;(?![^(]*\))/g,Kb=/:([^]+)/,Yb=/\/\*[^]*?\*\//g;function Xb(t){const e={};return t.replace(Yb,"").split(Gb).forEach(n=>{if(n){const i=n.split(Kb);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ou(t){let e="";if(Fe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=ou(t[n]);i&&(e+=i+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qb=nu(Jb);function Rg(t){return!!t||t===""}const Pg=t=>!!(t&&t.__v_isRef===!0),Zb=t=>Fe(t)?t:t==null?"":ne(t)||xe(t)&&(t.toString===Ag||!ie(t.toString))?Pg(t)?Zb(t.value):JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>Pg(e)?Ng(t,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[vl(i,s)+" =>"]=r,n),{})}:Tg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:yi(e)?vl(e):xe(e)&&!ne(e)&&!Cg(e)?String(e):e,vl=(t,e="")=>{var n;return yi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class e0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function t0(){return wt}let Ce;const bl=new WeakSet;class Og{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bl.has(this)&&(bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mf(this),Mg(this);const e=Ce,n=Zt;Ce=this,Zt=!0;try{return this.fn()}finally{Lg(this),Ce=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cu(e);this.deps=this.depsTail=void 0,mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let xg=0,ps,gs;function Dg(t,e=!1){if(t.flags|=8,e){t.next=gs,gs=t;return}t.next=ps,ps=t}function au(){xg++}function lu(){if(--xg>0)return;if(gs){let e=gs;for(gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ps;){let e=ps;for(ps=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Mg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lg(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),cu(i),n0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xs)||(t.globalVersion=xs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rc(t))))return;t.flags|=2;const e=t.dep,n=Ce,i=Zt;Ce=t,Zt=!0;try{Mg(t);const r=t.fn(t._value);(e.version===0||ai(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ce=n,Zt=i,Lg(t),t.flags&=-3}}function cu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)cu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function n0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Ug=[];function On(){Ug.push(Zt),Zt=!1}function xn(){const t=Ug.pop();Zt=t===void 0?!0:t}function mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let xs=0;class i0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Zt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new i0(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,jg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=i)}return n}trigger(e){this.version++,xs++,this.notify(e)}notify(e){au();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lu()}}}function jg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sc=new WeakMap,Ui=Symbol(""),oc=Symbol(""),Ds=Symbol("");function ct(t,e,n){if(Zt&&Ce){let i=sc.get(t);i||sc.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new uu),r.map=i,r.key=n),r.track()}}function Sn(t,e,n,i,r,s){const o=sc.get(t);if(!o){xs++;return}const l=c=>{c&&c.trigger()};if(au(),e==="clear")o.forEach(l);else{const c=ne(t),u=c&&su(n);if(c&&n==="length"){const f=Number(i);o.forEach((p,g)=>{(g==="length"||g===Ds||!yi(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ds)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ui)),mr(t)&&l(o.get(oc)));break;case"delete":c||(l(o.get(Ui)),mr(t)&&l(o.get(oc)));break;case"set":mr(t)&&l(o.get(Ui));break}}lu()}function ar(t){const e=me(t);return e===t?e:(ct(e,"iterate",Ds),Ft(t)?e:e.map(Qe))}function Da(t){return ct(t=me(t),"iterate",Ds),t}const r0={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,Qe)},concat(...t){return ar(this).concat(...t.map(e=>ne(e)?ar(e):e))},entries(){return wl(this,"entries",t=>(t[1]=Qe(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(Qe),arguments)},find(t,e){return bn(this,"find",t,e,Qe,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,Qe,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Il(this,"includes",t)},indexOf(...t){return Il(this,"indexOf",t)},join(t){return ar(this).join(t)},lastIndexOf(...t){return Il(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return rs(this,"pop")},push(...t){return rs(this,"push",t)},reduce(t,...e){return _f(this,"reduce",t,e)},reduceRight(t,...e){return _f(this,"reduceRight",t,e)},shift(){return rs(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return rs(this,"splice",t)},toReversed(){return ar(this).toReversed()},toSorted(t){return ar(this).toSorted(t)},toSpliced(...t){return ar(this).toSpliced(...t)},unshift(...t){return rs(this,"unshift",t)},values(){return wl(this,"values",Qe)}};function wl(t,e,n){const i=Da(t),r=i[e]();return i!==t&&!Ft(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const s0=Array.prototype;function bn(t,e,n,i,r,s){const o=Da(t),l=o!==t&&!Ft(t),c=o[e];if(c!==s0[e]){const p=c.apply(t,s);return l?Qe(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,Qe(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,i);return l&&r?r(f):f}function _f(t,e,n,i){const r=Da(t);let s=n;return r!==t&&(Ft(t)?n.length>3&&(s=function(o,l,c){return n.call(this,o,l,c,t)}):s=function(o,l,c){return n.call(this,o,Qe(l),c,t)}),r[e](s,...i)}function Il(t,e,n){const i=me(t);ct(i,"iterate",Ds);const r=i[e](...n);return(r===-1||r===!1)&&pu(n[0])?(n[0]=me(n[0]),i[e](...n)):r}function rs(t,e,n=[]){On(),au();const i=me(t)[e].apply(t,n);return lu(),xn(),i}const o0=nu("__proto__,__v_isRef,__isVue"),$g=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yi));function a0(t){yi(t)||(t=String(t));const e=me(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?_0:zg:s?Wg:Hg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ne(e);if(!r){let c;if(o&&(c=r0[n]))return c;if(n==="hasOwnProperty")return a0}const l=Reflect.get(e,n,dt(e)?e:i);return(yi(n)?$g.has(n):o0(n))||(r||ct(e,"get",n),s)?l:dt(l)?o&&su(n)?l:l.value:xe(l)?r?qg(l):fu(l):l}}class Bg extends Vg{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const c=hi(s);if(!Ft(i)&&!hi(i)&&(s=me(s),i=me(i)),!ne(e)&&dt(s)&&!dt(i))return c||(s.value=i),!0}const o=ne(e)&&su(n)?Number(n)<e.length:ve(e,n),l=Reflect.set(e,n,i,dt(e)?e:r);return e===me(r)&&(o?ai(i,s)&&Sn(e,"set",n,i):Sn(e,"add",n,i)),l}deleteProperty(e,n){const i=ve(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Sn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!yi(n)||!$g.has(n))&&ct(e,"has",n),i}ownKeys(e){return ct(e,"iterate",ne(e)?"length":Ui),Reflect.ownKeys(e)}}class l0 extends Vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c0=new Bg,u0=new l0,h0=new Bg(!0);const ac=t=>t,_o=t=>Reflect.getPrototypeOf(t);function f0(t,e,n){return function(...i){const r=this.__v_raw,s=me(r),o=mr(s),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...i),f=n?ac:e?Wo:Qe;return!e&&ct(s,"iterate",c?oc:Ui),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d0(t,e){const n={get(r){const s=this.__v_raw,o=me(s),l=me(r);t||(ai(r,l)&&ct(o,"get",r),ct(o,"get",l));const{has:c}=_o(o),u=e?ac:t?Wo:Qe;if(c.call(o,r))return u(s.get(r));if(c.call(o,l))return u(s.get(l));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&ct(me(r),"iterate",Ui),r.size},has(r){const s=this.__v_raw,o=me(s),l=me(r);return t||(ai(r,l)&&ct(o,"has",r),ct(o,"has",l)),r===l?s.has(r):s.has(r)||s.has(l)},forEach(r,s){const o=this,l=o.__v_raw,c=me(l),u=e?ac:t?Wo:Qe;return!t&&ct(c,"iterate",Ui),l.forEach((f,p)=>r.call(s,u(f),u(p),o))}};return Ye(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(r){!e&&!Ft(r)&&!hi(r)&&(r=me(r));const s=me(this);return _o(s).has.call(s,r)||(s.add(r),Sn(s,"add",r,r)),this},set(r,s){!e&&!Ft(s)&&!hi(s)&&(s=me(s));const o=me(this),{has:l,get:c}=_o(o);let u=l.call(o,r);u||(r=me(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,s),u?ai(s,f)&&Sn(o,"set",r,s):Sn(o,"add",r,s),this},delete(r){const s=me(this),{has:o,get:l}=_o(s);let c=o.call(s,r);c||(r=me(r),c=o.call(s,r)),l&&l.call(s,r);const u=s.delete(r);return c&&Sn(s,"delete",r,void 0),u},clear(){const r=me(this),s=r.size!==0,o=r.clear();return s&&Sn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=f0(r,t,e)}),n}function hu(t,e){const n=d0(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ve(n,r)&&r in i?n:i,r,s)}const p0={get:hu(!1,!1)},g0={get:hu(!1,!0)},m0={get:hu(!0,!1)};const Hg=new WeakMap,Wg=new WeakMap,zg=new WeakMap,_0=new WeakMap;function y0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v0(t){return t.__v_skip||!Object.isExtensible(t)?0:y0(Bb(t))}function fu(t){return hi(t)?t:du(t,!1,c0,p0,Hg)}function b0(t){return du(t,!1,h0,g0,Wg)}function qg(t){return du(t,!0,u0,m0,zg)}function du(t,e,n,i,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=v0(t);if(s===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,s===2?i:n);return r.set(t,l),l}function _r(t){return hi(t)?_r(t.__v_raw):!!(t&&t.__v_isReactive)}function hi(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function w0(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&kg(t,"__v_skip",!0),t}const Qe=t=>xe(t)?fu(t):t,Wo=t=>xe(t)?qg(t):t;function dt(t){return t?t.__v_isRef===!0:!1}function yr(t){return I0(t,!1)}function I0(t,e){return dt(t)?t:new E0(t,e)}class E0{constructor(e,n){this.dep=new uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Qe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Ft(e)||hi(e);e=i?e:me(e),ai(e,n)&&(this._rawValue=e,this._value=i?e:Qe(e),this.dep.trigger())}}function In(t){return dt(t)?t.value:t}const T0={get:(t,e,n)=>e==="__v_raw"?t:In(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return dt(r)&&!dt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Gg(t){return _r(t)?t:new Proxy(t,T0)}class S0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return Dg(this,!0),!0}get value(){const e=this.dep.track();return Fg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function A0(t,e,n=!1){let i,r;return ie(t)?i=t:(i=t.get,r=t.set),new S0(i,r,n)}const vo={},zo=new WeakMap;let Ri;function C0(t,e=!1,n=Ri){if(n){let i=zo.get(n);i||zo.set(n,i=[]),i.push(t)}}function k0(t,e,n=ke){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:l,call:c}=n,u=U=>r?U:Ft(U)||r===!1||r===0?ni(U,1):ni(U);let f,p,g,E,C=!1,P=!1;if(dt(t)?(p=()=>t.value,C=Ft(t)):_r(t)?(p=()=>u(t),C=!0):ne(t)?(P=!0,C=t.some(U=>_r(U)||Ft(U)),p=()=>t.map(U=>{if(dt(U))return U.value;if(_r(U))return u(U);if(ie(U))return c?c(U,2):U()})):ie(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){On();try{g()}finally{xn()}}const U=Ri;Ri=f;try{return c?c(t,3,[E]):t(E)}finally{Ri=U}}:p=gn,e&&r){const U=p,Y=r===!0?1/0:r;p=()=>ni(U(),Y)}const M=t0(),O=()=>{f.stop(),M&&M.active&&ru(M.effects,f)};if(s&&e){const U=e;e=(...Y)=>{U(...Y),O()}}let x=P?new Array(t.length).fill(vo):vo;const j=U=>{if(!(!(f.flags&1)||!f.dirty&&!U))if(e){const Y=f.run();if(r||C||(P?Y.some((X,A)=>ai(X,x[A])):ai(Y,x))){g&&g();const X=Ri;Ri=f;try{const A=[Y,x===vo?void 0:P&&x[0]===vo?[]:x,E];x=Y,c?c(e,3,A):e(...A)}finally{Ri=X}}}else f.run()};return l&&l(j),f=new Og(p),f.scheduler=o?()=>o(j,!1):j,E=U=>C0(U,!1,f),g=f.onStop=()=>{const U=zo.get(f);if(U){if(c)c(U,4);else for(const Y of U)Y();zo.delete(f)}},e?i?j(!0):x=f.run():o?o(j.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function ni(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,dt(t))ni(t.value,e,n);else if(ne(t))for(let i=0;i<t.length;i++)ni(t[i],e,n);else if(Tg(t)||mr(t))t.forEach(i=>{ni(i,e,n)});else if(Cg(t)){for(const i in t)ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qs(t,e,n,i){try{return i?t(...i):t()}catch(r){Gs(r,e,n)}}function tn(t,e,n,i){if(ie(t)){const r=qs(t,e,n,i);return r&&Sg(r)&&r.catch(s=>{Gs(s,e,n)}),r}if(ne(t)){const r=[];for(let s=0;s<t.length;s++)r.push(tn(t[s],e,n,i));return r}}function Gs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(s){On(),qs(s,null,10,[t,c,u]),xn();return}}R0(t,n,r,i,o)}function R0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const mt=[];let ln=-1;const vr=[];let Zn=null,ur=0;const Kg=Promise.resolve();let qo=null;function P0(t){const e=qo||Kg;return t?e.then(this?t.bind(this):t):e}function N0(t){let e=ln+1,n=mt.length;for(;e<n;){const i=e+n>>>1,r=mt[i],s=Ms(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function gu(t){if(!(t.flags&1)){const e=Ms(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=Ms(n)?mt.push(t):mt.splice(N0(e),0,t),t.flags|=1,Yg()}}function Yg(){qo||(qo=Kg.then(Jg))}function O0(t){ne(t)?vr.push(...t):Zn&&t.id===-1?Zn.splice(ur+1,0,t):t.flags&1||(vr.push(t),t.flags|=1),Yg()}function yf(t,e,n=ln+1){for(;n<mt.length;n++){const i=mt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;mt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xg(t){if(vr.length){const e=[...new Set(vr)].sort((n,i)=>Ms(n)-Ms(i));if(vr.length=0,Zn){Zn.push(...e);return}for(Zn=e,ur=0;ur<Zn.length;ur++){const n=Zn[ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zn=null,ur=0}}const Ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Jg(t){try{for(ln=0;ln<mt.length;ln++){const e=mt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<mt.length;ln++){const e=mt[ln];e&&(e.flags&=-2)}ln=-1,mt.length=0,Xg(),qo=null,(mt.length||vr.length)&&Jg()}}let Gt=null,Qg=null;function Go(t){const e=Gt;return Gt=t,Qg=t&&t.type.__scopeId||null,e}function x0(t,e=Gt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Xo(-1);const s=Go(e);let o;try{o=t(...r)}finally{Go(s),i._d&&Xo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Si(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];s&&(l.oldValue=s[o].value);let c=l.dir[i];c&&(On(),tn(c,n,8,[t.el,l,t,e]),xn())}}const D0=Symbol("_vte"),Zg=t=>t.__isTeleport,Tn=Symbol("_leaveCb"),bo=Symbol("_enterCb");function M0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yu(()=>{t.isMounted=!0}),om(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],em={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},tm=t=>{const e=t.subTree;return e.component?tm(e.component):e},L0={name:"BaseTransition",props:em,setup(t,{slots:e}){const n=Cm(),i=M0();return()=>{const r=e.default&&rm(e.default(),!0);if(!r||!r.length)return;const s=nm(r),o=me(t),{mode:l}=o;if(i.isLeaving)return El(s);const c=vf(s);if(!c)return El(s);let u=lc(c,o,i,n,p=>u=p);c.type!==_t&&Ls(c,u);let f=n.subTree&&vf(n.subTree);if(f&&f.type!==_t&&!Oi(f,c)&&tm(n).type!==_t){let p=lc(f,o,i,n);if(Ls(f,p),l==="out-in"&&c.type!==_t)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},El(s);l==="in-out"&&c.type!==_t?p.delayLeave=(g,E,C)=>{const P=im(i,f);P[String(f.key)]=f,g[Tn]=()=>{E(),g[Tn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function nm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_t){e=n;break}}return e}const F0=L0;function im(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function lc(t,e,n,i,r){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:C,onLeaveCancelled:P,onBeforeAppear:M,onAppear:O,onAfterAppear:x,onAppearCancelled:j}=e,U=String(t.key),Y=im(n,t),X=(b,T)=>{b&&tn(b,i,9,T)},A=(b,T)=>{const w=T[1];X(b,T),ne(b)?b.every(_=>_.length<=1)&&w():b.length<=1&&w()},v={mode:o,persisted:l,beforeEnter(b){let T=c;if(!n.isMounted)if(s)T=M||c;else return;b[Tn]&&b[Tn](!0);const w=Y[U];w&&Oi(t,w)&&w.el[Tn]&&w.el[Tn](),X(T,[b])},enter(b){let T=u,w=f,_=p;if(!n.isMounted)if(s)T=O||u,w=x||f,_=j||p;else return;let y=!1;const q=b[bo]=ce=>{y||(y=!0,ce?X(_,[b]):X(w,[b]),v.delayedLeave&&v.delayedLeave(),b[bo]=void 0)};T?A(T,[b,q]):q()},leave(b,T){const w=String(t.key);if(b[bo]&&b[bo](!0),n.isUnmounting)return T();X(g,[b]);let _=!1;const y=b[Tn]=q=>{_||(_=!0,T(),q?X(P,[b]):X(C,[b]),b[Tn]=void 0,Y[w]===t&&delete Y[w])};Y[w]=t,E?A(E,[b,y]):y()},clone(b){const T=lc(b,e,n,i,r);return r&&r(T),T}};return v}function El(t){if(Ks(t))return t=fi(t),t.children=null,t}function vf(t){if(!Ks(t))return Zg(t.type)&&t.children?nm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ie(n.default))return n.default()}}function Ls(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ls(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rm(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Wt?(o.patchFlag&128&&r++,i=i.concat(rm(o.children,e,l))):(e||o.type!==_t)&&i.push(l!=null?fi(o,{key:l}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function mu(t,e){return ie(t)?Ye({name:t.name},e,{setup:t}):t}function _u(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ko=new WeakMap;function ms(t,e,n,i,r=!1){if(ne(t)){t.forEach((C,P)=>ms(C,e&&(ne(e)?e[P]:e),n,i,r));return}if(_s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ms(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Eu(i.component):i.el,o=r?null:s,{i:l,r:c}=t,u=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,p=l.setupState,g=me(p),E=p===ke?Eg:C=>ve(g,C);if(u!=null&&u!==c){if(bf(e),Fe(u))f[u]=null,E(u)&&(p[u]=null);else if(dt(u)){u.value=null;const C=e;C.k&&(f[C.k]=null)}}if(ie(c))qs(c,l,12,[o,f]);else{const C=Fe(c),P=dt(c);if(C||P){const M=()=>{if(t.f){const O=C?E(c)?p[c]:f[c]:c.value;if(r)ne(O)&&ru(O,s);else if(ne(O))O.includes(s)||O.push(s);else if(C)f[c]=[s],E(c)&&(p[c]=f[c]);else{const x=[s];c.value=x,t.k&&(f[t.k]=x)}}else C?(f[c]=o,E(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const O=()=>{M(),Ko.delete(t)};O.id=-1,Ko.set(t,O),At(O,n)}else bf(t),M()}}}function bf(t){const e=Ko.get(t);e&&(e.flags|=8,Ko.delete(t))}const wf=t=>t.nodeType===8;Oa().requestIdleCallback;Oa().cancelIdleCallback;function U0(t,e){if(wf(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(wf(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const _s=t=>!!t.type.__asyncLoader;function Yn(t){ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:l=!0,onError:c}=t;let u=null,f,p=0;const g=()=>(p++,u=null,E()),E=()=>{let C;return u||(C=u=e().catch(P=>{if(P=P instanceof Error?P:new Error(String(P)),c)return new Promise((M,O)=>{c(P,()=>M(g()),()=>O(P),p+1)});throw P}).then(P=>C!==u&&u?u:(P&&(P.__esModule||P[Symbol.toStringTag]==="Module")&&(P=P.default),f=P,P)))};return mu({name:"AsyncComponentWrapper",__asyncLoader:E,__asyncHydrate(C,P,M){let O=!1;(P.bu||(P.bu=[])).push(()=>O=!0);const x=()=>{O||M()},j=s?()=>{const U=s(x,Y=>U0(C,Y));U&&(P.bum||(P.bum=[])).push(U)}:x;f?j():E().then(()=>!P.isUnmounted&&j())},get __asyncResolved(){return f},setup(){const C=Ze;if(_u(C),f)return()=>Tl(f,C);const P=j=>{u=null,Gs(j,C,13,!i)};if(l&&C.suspense||kr)return E().then(j=>()=>Tl(j,C)).catch(j=>(P(j),()=>i?Me(i,{error:j}):null));const M=yr(!1),O=yr(),x=yr(!!r);return r&&setTimeout(()=>{x.value=!1},r),o!=null&&setTimeout(()=>{if(!M.value&&!O.value){const j=new Error(`Async component timed out after ${o}ms.`);P(j),O.value=j}},o),E().then(()=>{M.value=!0,C.parent&&Ks(C.parent.vnode)&&C.parent.update()}).catch(j=>{P(j),O.value=j}),()=>{if(M.value&&f)return Tl(f,C);if(O.value&&i)return Me(i,{error:O.value});if(n&&!x.value)return Me(n)}}})}function Tl(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Me(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ks=t=>t.type.__isKeepAlive;function j0(t,e){sm(t,"a",e)}function $0(t,e){sm(t,"da",e)}function sm(t,e,n=Ze){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ks(r.parent.vnode)&&V0(i,e,n,r),r=r.parent}}function V0(t,e,n,i){const r=Ma(e,t,i,!0);vu(()=>{ru(i[e],r)},n)}function Ma(t,e,n=Ze,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{On();const l=Ys(n),c=tn(e,n,t,o);return l(),xn(),c});return i?r.unshift(s):r.push(s),s}}const jn=t=>(e,n=Ze)=>{(!kr||t==="sp")&&Ma(t,(...i)=>e(...i),n)},B0=jn("bm"),yu=jn("m"),H0=jn("bu"),W0=jn("u"),om=jn("bum"),vu=jn("um"),z0=jn("sp"),q0=jn("rtg"),G0=jn("rtc");function K0(t,e=Ze){Ma("ec",t,e)}const Y0="components";function Cx(t,e){return J0(Y0,t,!0,e)||t}const X0=Symbol.for("v-ndc");function J0(t,e,n=!0,i=!1){const r=Gt||Ze;if(r){const s=r.type;{const l=B1(s,!1);if(l&&(l===e||l===Ut(e)||l===Na(Ut(e))))return s}const o=If(r[t]||s[t],e)||If(r.appContext[t],e);return!o&&i?s:o}}function If(t,e){return t&&(t[e]||t[Ut(e)]||t[Na(Ut(e))])}function kx(t,e,n,i){let r;const s=n,o=ne(t);if(o||Fe(t)){const l=o&&_r(t);let c=!1,u=!1;l&&(c=!Ft(t),u=hi(t),t=Da(t)),r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=e(c?u?Wo(Qe(t[f])):Qe(t[f]):t[f],f,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,s)}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,s));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];r[c]=e(t[f],f,c,s)}}else r=[];return r}const cc=t=>t?km(t)?Eu(t):cc(t.parent):null,ys=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cc(t.parent),$root:t=>cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lm(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=P0.bind(t.proxy)),$watch:t=>v1.bind(t)}),Sl=(t,e)=>t!==ke&&!t.__isScriptSetup&&ve(t,e),Q0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Sl(i,e))return o[e]=1,i[e];if(r!==ke&&ve(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ve(u,e))return o[e]=3,s[e];if(n!==ke&&ve(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const f=ys[e];let p,g;if(f)return e==="$attrs"&&ct(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ke&&ve(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ve(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Sl(r,e)?(r[e]=n,!0):i!==ke&&ve(i,e)?(i[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},l){let c,u;return!!(n[l]||t!==ke&&l[0]!=="$"&&ve(t,l)||Sl(e,l)||(c=s[0])&&ve(c,l)||ve(i,l)||ve(ys,l)||ve(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ef(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function Z0(t){const e=lm(t),n=t.proxy,i=t.ctx;uc=!1,e.beforeCreate&&Tf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:C,activated:P,deactivated:M,beforeDestroy:O,beforeUnmount:x,destroyed:j,unmounted:U,render:Y,renderTracked:X,renderTriggered:A,errorCaptured:v,serverPrefetch:b,expose:T,inheritAttrs:w,components:_,directives:y,filters:q}=e;if(u&&e1(u,i,null),o)for(const ue in o){const se=o[ue];ie(se)&&(i[ue]=se.bind(n))}if(r){const ue=r.call(n,n);xe(ue)&&(t.data=fu(ue))}if(uc=!0,s)for(const ue in s){const se=s[ue],Ue=ie(se)?se.bind(n,n):ie(se.get)?se.get.bind(n,n):gn,Vt=!ie(se)&&ie(se.set)?se.set.bind(n):gn,bt=ti({get:Ue,set:Vt});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Ve=>bt.value=Ve})}if(l)for(const ue in l)am(l[ue],i,n,ue);if(c){const ue=ie(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(se=>{o1(se,ue[se])})}f&&Tf(f,t,"c");function ge(ue,se){ne(se)?se.forEach(Ue=>ue(Ue.bind(n))):se&&ue(se.bind(n))}if(ge(B0,p),ge(yu,g),ge(H0,E),ge(W0,C),ge(j0,P),ge($0,M),ge(K0,v),ge(G0,X),ge(q0,A),ge(om,x),ge(vu,U),ge(z0,b),ne(T))if(T.length){const ue=t.exposed||(t.exposed={});T.forEach(se=>{Object.defineProperty(ue,se,{get:()=>n[se],set:Ue=>n[se]=Ue,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===gn&&(t.render=Y),w!=null&&(t.inheritAttrs=w),_&&(t.components=_),y&&(t.directives=y),b&&_u(t)}function e1(t,e,n=gn){ne(t)&&(t=hc(t));for(const i in t){const r=t[i];let s;xe(r)?"default"in r?s=Po(r.from||i,r.default,!0):s=Po(r.from||i):s=Po(r),dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Tf(t,e,n){tn(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function am(t,e,n,i){let r=i.includes(".")?wm(n,i):()=>n[i];if(Fe(t)){const s=e[t];ie(s)&&No(r,s)}else if(ie(t))No(r,t.bind(n));else if(xe(t))if(ne(t))t.forEach(s=>am(s,e,n,i));else{const s=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(s)&&No(r,s,t)}}function lm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,l=s.get(e);let c;return l?c=l:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(u=>Yo(c,u,o,!0)),Yo(c,e,o)),xe(e)&&s.set(e,c),c}function Yo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Yo(t,s,n,!0),r&&r.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=t1[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const t1={data:Sf,props:Af,emits:Af,methods:us,computed:us,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:us,directives:us,watch:i1,provide:Sf,inject:n1};function Sf(t,e){return e?t?function(){return Ye(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function n1(t,e){return us(hc(t),hc(e))}function hc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function us(t,e){return t?Ye(Object.create(null),t,e):e}function Af(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Ef(t),Ef(e??{})):e}function i1(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const i in e)n[i]=gt(t[i],e[i]);return n}function cm(){return{app:null,config:{isNativeTag:Eg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r1=0;function s1(t,e){return function(i,r=null){ie(i)||(i=Ye({},i)),r!=null&&!xe(r)&&(r=null);const s=cm(),o=new WeakSet,l=[];let c=!1;const u=s.app={_uid:r1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:W1,get config(){return s.config},set config(f){},use(f,...p){return o.has(f)||(f&&ie(f.install)?(o.add(f),f.install(u,...p)):ie(f)&&(o.add(f),f(u,...p))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,p){return p?(s.components[f]=p,u):s.components[f]},directive(f,p){return p?(s.directives[f]=p,u):s.directives[f]},mount(f,p,g){if(!c){const E=u._ceVNode||Me(i,r);return E.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(E,f,g),c=!0,u._container=f,f.__vue_app__=u,Eu(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return s.provides[f]=p,u},runWithContext(f){const p=br;br=u;try{return f()}finally{br=p}}};return u}}let br=null;function o1(t,e){if(Ze){let n=Ze.provides;const i=Ze.parent&&Ze.parent.provides;i===n&&(n=Ze.provides=Object.create(i)),n[t]=e}}function Po(t,e,n=!1){const i=Cm();if(i||br){let r=br?br._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}const um={},hm=()=>Object.create(um),fm=t=>Object.getPrototypeOf(t)===um;function a1(t,e,n,i=!1){const r={},s=hm();t.propsDefaults=Object.create(null),dm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:b0(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function l1(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,l=me(r),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(La(t.emitsOptions,g))continue;const E=e[g];if(c)if(ve(s,g))E!==s[g]&&(s[g]=E,u=!0);else{const C=Ut(g);r[C]=fc(c,l,C,E,t,!1)}else E!==s[g]&&(s[g]=E,u=!0)}}}else{dm(t,e,r,s)&&(u=!0);let f;for(const p in l)(!e||!ve(e,p)&&((f=Zi(p))===p||!ve(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=fc(c,l,p,void 0,t,!0)):delete r[p]);if(s!==l)for(const p in s)(!e||!ve(e,p))&&(delete s[p],u=!0)}u&&Sn(t.attrs,"set","")}function dm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ds(c))continue;const u=e[c];let f;r&&ve(r,f=Ut(c))?!s||!s.includes(f)?n[f]=u:(l||(l={}))[f]=u:La(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=me(n),u=l||ke;for(let f=0;f<s.length;f++){const p=s[f];n[p]=fc(r,c,p,u[p],t,!ve(u,p))}}return o}function fc(t,e,n,i,r,s){const o=t[n];if(o!=null){const l=ve(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const f=Ys(r);i=u[n]=c.call(null,e),f()}}else i=c;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!l?i=!1:o[1]&&(i===""||i===Zi(n))&&(i=!0))}return i}const c1=new WeakMap;function pm(t,e,n=!1){const i=n?c1:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},l=[];let c=!1;if(!ie(t)){const f=p=>{c=!0;const[g,E]=pm(p,e,!0);Ye(o,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!c)return xe(t)&&i.set(t,gr),gr;if(ne(s))for(let f=0;f<s.length;f++){const p=Ut(s[f]);Cf(p)&&(o[p]=ke)}else if(s)for(const f in s){const p=Ut(f);if(Cf(p)){const g=s[f],E=o[p]=ne(g)||ie(g)?{type:g}:Ye({},g),C=E.type;let P=!1,M=!0;if(ne(C))for(let O=0;O<C.length;++O){const x=C[O],j=ie(x)&&x.name;if(j==="Boolean"){P=!0;break}else j==="String"&&(M=!1)}else P=ie(C)&&C.name==="Boolean";E[0]=P,E[1]=M,(P||ve(E,"default"))&&l.push(p)}}const u=[o,l];return xe(t)&&i.set(t,u),u}function Cf(t){return t[0]!=="$"&&!ds(t)}const bu=t=>t==="_"||t==="_ctx"||t==="$stable",wu=t=>ne(t)?t.map(un):[un(t)],u1=(t,e,n)=>{if(e._n)return e;const i=x0((...r)=>wu(e(...r)),n);return i._c=!1,i},gm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(bu(r))continue;const s=t[r];if(ie(s))e[r]=u1(r,s,i);else if(s!=null){const o=wu(s);e[r]=()=>o}}},mm=(t,e)=>{const n=wu(e);t.slots.default=()=>n},_m=(t,e,n)=>{for(const i in e)(n||!bu(i))&&(t[i]=e[i])},h1=(t,e,n)=>{const i=t.slots=hm();if(t.vnode.shapeFlag&32){const r=e._;r?(_m(i,e,n),n&&kg(i,"_",r,!0)):gm(e,i)}else e&&mm(t,e)},f1=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ke;if(i.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:_m(r,e,n):(s=!e.$stable,gm(e,r)),o=e}else e&&(mm(t,e),o={default:1});if(s)for(const l in r)!bu(l)&&o[l]==null&&delete r[l]},At=C1;function d1(t){return p1(t)}function p1(t,e){const n=Oa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=gn,insertStaticContent:C}=t,P=(I,S,R,L=null,D=null,F=null,z=void 0,B=null,$=!!S.dynamicChildren)=>{if(I===S)return;I&&!Oi(I,S)&&(L=Ae(I),Ve(I,D,F,!0),I=null),S.patchFlag===-2&&($=!1,S.dynamicChildren=null);const{type:V,ref:Z,shapeFlag:K}=S;switch(V){case Fa:M(I,S,R,L);break;case _t:O(I,S,R,L);break;case Oo:I==null&&x(S,R,L,z);break;case Wt:_(I,S,R,L,D,F,z,B,$);break;default:K&1?Y(I,S,R,L,D,F,z,B,$):K&6?y(I,S,R,L,D,F,z,B,$):(K&64||K&128)&&V.process(I,S,R,L,D,F,z,B,$,st)}Z!=null&&D?ms(Z,I&&I.ref,F,S||I,!S):Z==null&&I&&I.ref!=null&&ms(I.ref,null,F,I,!0)},M=(I,S,R,L)=>{if(I==null)i(S.el=l(S.children),R,L);else{const D=S.el=I.el;S.children!==I.children&&u(D,S.children)}},O=(I,S,R,L)=>{I==null?i(S.el=c(S.children||""),R,L):S.el=I.el},x=(I,S,R,L)=>{[I.el,I.anchor]=C(I.children,S,R,L,I.el,I.anchor)},j=({el:I,anchor:S},R,L)=>{let D;for(;I&&I!==S;)D=g(I),i(I,R,L),I=D;i(S,R,L)},U=({el:I,anchor:S})=>{let R;for(;I&&I!==S;)R=g(I),r(I),I=R;r(S)},Y=(I,S,R,L,D,F,z,B,$)=>{S.type==="svg"?z="svg":S.type==="math"&&(z="mathml"),I==null?X(S,R,L,D,F,z,B,$):b(I,S,D,F,z,B,$)},X=(I,S,R,L,D,F,z,B)=>{let $,V;const{props:Z,shapeFlag:K,transition:Q,dirs:ee}=I;if($=I.el=o(I.type,F,Z&&Z.is,Z),K&8?f($,I.children):K&16&&v(I.children,$,null,L,D,Al(I,F),z,B),ee&&Si(I,null,L,"created"),A($,I,I.scopeId,z,L),Z){for(const Ie in Z)Ie!=="value"&&!ds(Ie)&&s($,Ie,null,Z[Ie],F,L);"value"in Z&&s($,"value",null,Z.value,F),(V=Z.onVnodeBeforeMount)&&an(V,L,I)}ee&&Si(I,null,L,"beforeMount");const oe=g1(D,Q);oe&&Q.beforeEnter($),i($,S,R),((V=Z&&Z.onVnodeMounted)||oe||ee)&&At(()=>{V&&an(V,L,I),oe&&Q.enter($),ee&&Si(I,null,L,"mounted")},D)},A=(I,S,R,L,D)=>{if(R&&E(I,R),L)for(let F=0;F<L.length;F++)E(I,L[F]);if(D){let F=D.subTree;if(S===F||Em(F.type)&&(F.ssContent===S||F.ssFallback===S)){const z=D.vnode;A(I,z,z.scopeId,z.slotScopeIds,D.parent)}}},v=(I,S,R,L,D,F,z,B,$=0)=>{for(let V=$;V<I.length;V++){const Z=I[V]=B?ei(I[V]):un(I[V]);P(null,Z,S,R,L,D,F,z,B)}},b=(I,S,R,L,D,F,z)=>{const B=S.el=I.el;let{patchFlag:$,dynamicChildren:V,dirs:Z}=S;$|=I.patchFlag&16;const K=I.props||ke,Q=S.props||ke;let ee;if(R&&Ai(R,!1),(ee=Q.onVnodeBeforeUpdate)&&an(ee,R,S,I),Z&&Si(S,I,R,"beforeUpdate"),R&&Ai(R,!0),(K.innerHTML&&Q.innerHTML==null||K.textContent&&Q.textContent==null)&&f(B,""),V?T(I.dynamicChildren,V,B,R,L,Al(S,D),F):z||se(I,S,B,null,R,L,Al(S,D),F,!1),$>0){if($&16)w(B,K,Q,R,D);else if($&2&&K.class!==Q.class&&s(B,"class",null,Q.class,D),$&4&&s(B,"style",K.style,Q.style,D),$&8){const oe=S.dynamicProps;for(let Ie=0;Ie<oe.length;Ie++){const pe=oe[Ie],ot=K[pe],at=Q[pe];(at!==ot||pe==="value")&&s(B,pe,ot,at,D,R)}}$&1&&I.children!==S.children&&f(B,S.children)}else!z&&V==null&&w(B,K,Q,R,D);((ee=Q.onVnodeUpdated)||Z)&&At(()=>{ee&&an(ee,R,S,I),Z&&Si(S,I,R,"updated")},L)},T=(I,S,R,L,D,F,z)=>{for(let B=0;B<S.length;B++){const $=I[B],V=S[B],Z=$.el&&($.type===Wt||!Oi($,V)||$.shapeFlag&198)?p($.el):R;P($,V,Z,null,L,D,F,z,!0)}},w=(I,S,R,L,D)=>{if(S!==R){if(S!==ke)for(const F in S)!ds(F)&&!(F in R)&&s(I,F,S[F],null,D,L);for(const F in R){if(ds(F))continue;const z=R[F],B=S[F];z!==B&&F!=="value"&&s(I,F,B,z,D,L)}"value"in R&&s(I,"value",S.value,R.value,D)}},_=(I,S,R,L,D,F,z,B,$)=>{const V=S.el=I?I.el:l(""),Z=S.anchor=I?I.anchor:l("");let{patchFlag:K,dynamicChildren:Q,slotScopeIds:ee}=S;ee&&(B=B?B.concat(ee):ee),I==null?(i(V,R,L),i(Z,R,L),v(S.children||[],R,Z,D,F,z,B,$)):K>0&&K&64&&Q&&I.dynamicChildren?(T(I.dynamicChildren,Q,R,D,F,z,B),(S.key!=null||D&&S===D.subTree)&&ym(I,S,!0)):se(I,S,R,Z,D,F,z,B,$)},y=(I,S,R,L,D,F,z,B,$)=>{S.slotScopeIds=B,I==null?S.shapeFlag&512?D.ctx.activate(S,R,L,z,$):q(S,R,L,D,F,z,$):ce(I,S,$)},q=(I,S,R,L,D,F,z)=>{const B=I.component=F1(I,L,D);if(Ks(I)&&(B.ctx.renderer=st),U1(B,!1,z),B.asyncDep){if(D&&D.registerDep(B,ge,z),!I.el){const $=B.subTree=Me(_t);O(null,$,S,R),I.placeholder=$.el}}else ge(B,I,S,R,D,F,z)},ce=(I,S,R)=>{const L=S.component=I.component;if(S1(I,S,R))if(L.asyncDep&&!L.asyncResolved){ue(L,S,R);return}else L.next=S,L.update();else S.el=I.el,L.vnode=S},ge=(I,S,R,L,D,F,z)=>{const B=()=>{if(I.isMounted){let{next:K,bu:Q,u:ee,parent:oe,vnode:Ie}=I;{const Ot=vm(I);if(Ot){K&&(K.el=Ie.el,ue(I,K,z)),Ot.asyncDep.then(()=>{I.isUnmounted||B()});return}}let pe=K,ot;Ai(I,!1),K?(K.el=Ie.el,ue(I,K,z)):K=Ie,Q&&yl(Q),(ot=K.props&&K.props.onVnodeBeforeUpdate)&&an(ot,oe,K,Ie),Ai(I,!0);const at=Rf(I),St=I.subTree;I.subTree=at,P(St,at,p(St.el),Ae(St),I,D,F),K.el=at.el,pe===null&&A1(I,at.el),ee&&At(ee,D),(ot=K.props&&K.props.onVnodeUpdated)&&At(()=>an(ot,oe,K,Ie),D)}else{let K;const{el:Q,props:ee}=S,{bm:oe,m:Ie,parent:pe,root:ot,type:at}=I,St=_s(S);Ai(I,!1),oe&&yl(oe),!St&&(K=ee&&ee.onVnodeBeforeMount)&&an(K,pe,S),Ai(I,!0);{ot.ce&&ot.ce._def.shadowRoot!==!1&&ot.ce._injectChildStyle(at);const Ot=I.subTree=Rf(I);P(null,Ot,R,L,I,D,F),S.el=Ot.el}if(Ie&&At(Ie,D),!St&&(K=ee&&ee.onVnodeMounted)){const Ot=S;At(()=>an(K,pe,Ot),D)}(S.shapeFlag&256||pe&&_s(pe.vnode)&&pe.vnode.shapeFlag&256)&&I.a&&At(I.a,D),I.isMounted=!0,S=R=L=null}};I.scope.on();const $=I.effect=new Og(B);I.scope.off();const V=I.update=$.run.bind($),Z=I.job=$.runIfDirty.bind($);Z.i=I,Z.id=I.uid,$.scheduler=()=>gu(Z),Ai(I,!0),V()},ue=(I,S,R)=>{S.component=I;const L=I.vnode.props;I.vnode=S,I.next=null,l1(I,S.props,L,R),f1(I,S.children,R),On(),yf(I),xn()},se=(I,S,R,L,D,F,z,B,$=!1)=>{const V=I&&I.children,Z=I?I.shapeFlag:0,K=S.children,{patchFlag:Q,shapeFlag:ee}=S;if(Q>0){if(Q&128){Vt(V,K,R,L,D,F,z,B,$);return}else if(Q&256){Ue(V,K,R,L,D,F,z,B,$);return}}ee&8?(Z&16&&je(V,D,F),K!==V&&f(R,K)):Z&16?ee&16?Vt(V,K,R,L,D,F,z,B,$):je(V,D,F,!0):(Z&8&&f(R,""),ee&16&&v(K,R,L,D,F,z,B,$))},Ue=(I,S,R,L,D,F,z,B,$)=>{I=I||gr,S=S||gr;const V=I.length,Z=S.length,K=Math.min(V,Z);let Q;for(Q=0;Q<K;Q++){const ee=S[Q]=$?ei(S[Q]):un(S[Q]);P(I[Q],ee,R,null,D,F,z,B,$)}V>Z?je(I,D,F,!0,!1,K):v(S,R,L,D,F,z,B,$,K)},Vt=(I,S,R,L,D,F,z,B,$)=>{let V=0;const Z=S.length;let K=I.length-1,Q=Z-1;for(;V<=K&&V<=Q;){const ee=I[V],oe=S[V]=$?ei(S[V]):un(S[V]);if(Oi(ee,oe))P(ee,oe,R,null,D,F,z,B,$);else break;V++}for(;V<=K&&V<=Q;){const ee=I[K],oe=S[Q]=$?ei(S[Q]):un(S[Q]);if(Oi(ee,oe))P(ee,oe,R,null,D,F,z,B,$);else break;K--,Q--}if(V>K){if(V<=Q){const ee=Q+1,oe=ee<Z?S[ee].el:L;for(;V<=Q;)P(null,S[V]=$?ei(S[V]):un(S[V]),R,oe,D,F,z,B,$),V++}}else if(V>Q)for(;V<=K;)Ve(I[V],D,F,!0),V++;else{const ee=V,oe=V,Ie=new Map;for(V=oe;V<=Q;V++){const Xe=S[V]=$?ei(S[V]):un(S[V]);Xe.key!=null&&Ie.set(Xe.key,V)}let pe,ot=0;const at=Q-oe+1;let St=!1,Ot=0;const Ht=new Array(at);for(V=0;V<at;V++)Ht[V]=0;for(V=ee;V<=K;V++){const Xe=I[V];if(ot>=at){Ve(Xe,D,F,!0);continue}let Je;if(Xe.key!=null)Je=Ie.get(Xe.key);else for(pe=oe;pe<=Q;pe++)if(Ht[pe-oe]===0&&Oi(Xe,S[pe])){Je=pe;break}Je===void 0?Ve(Xe,D,F,!0):(Ht[Je-oe]=V+1,Je>=Ot?Ot=Je:St=!0,P(Xe,S[Je],R,null,D,F,z,B,$),ot++)}const nr=St?m1(Ht):gr;for(pe=nr.length-1,V=at-1;V>=0;V--){const Xe=oe+V,Je=S[Xe],Hr=S[Xe+1],ir=Xe+1<Z?Hr.el||Hr.placeholder:L;Ht[V]===0?P(null,Je,R,ir,D,F,z,B,$):St&&(pe<0||V!==nr[pe]?bt(Je,R,ir,2):pe--)}}},bt=(I,S,R,L,D=null)=>{const{el:F,type:z,transition:B,children:$,shapeFlag:V}=I;if(V&6){bt(I.component.subTree,S,R,L);return}if(V&128){I.suspense.move(S,R,L);return}if(V&64){z.move(I,S,R,st);return}if(z===Wt){i(F,S,R);for(let K=0;K<$.length;K++)bt($[K],S,R,L);i(I.anchor,S,R);return}if(z===Oo){j(I,S,R);return}if(L!==2&&V&1&&B)if(L===0)B.beforeEnter(F),i(F,S,R),At(()=>B.enter(F),D);else{const{leave:K,delayLeave:Q,afterLeave:ee}=B,oe=()=>{I.ctx.isUnmounted?r(F):i(F,S,R)},Ie=()=>{F._isLeaving&&F[Tn](!0),K(F,()=>{oe(),ee&&ee()})};Q?Q(F,oe,Ie):Ie()}else i(F,S,R)},Ve=(I,S,R,L=!1,D=!1)=>{const{type:F,props:z,ref:B,children:$,dynamicChildren:V,shapeFlag:Z,patchFlag:K,dirs:Q,cacheIndex:ee}=I;if(K===-2&&(D=!1),B!=null&&(On(),ms(B,null,R,I,!0),xn()),ee!=null&&(S.renderCache[ee]=void 0),Z&256){S.ctx.deactivate(I);return}const oe=Z&1&&Q,Ie=!_s(I);let pe;if(Ie&&(pe=z&&z.onVnodeBeforeUnmount)&&an(pe,S,I),Z&6)rt(I.component,R,L);else{if(Z&128){I.suspense.unmount(R,L);return}oe&&Si(I,null,S,"beforeUnmount"),Z&64?I.type.remove(I,S,R,st,L):V&&!V.hasOnce&&(F!==Wt||K>0&&K&64)?je(V,S,R,!1,!0):(F===Wt&&K&384||!D&&Z&16)&&je($,S,R),L&&it(I)}(Ie&&(pe=z&&z.onVnodeUnmounted)||oe)&&At(()=>{pe&&an(pe,S,I),oe&&Si(I,null,S,"unmounted")},R)},it=I=>{const{type:S,el:R,anchor:L,transition:D}=I;if(S===Wt){Be(R,L);return}if(S===Oo){U(I);return}const F=()=>{r(R),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(I.shapeFlag&1&&D&&!D.persisted){const{leave:z,delayLeave:B}=D,$=()=>z(R,F);B?B(I.el,F,$):$()}else F()},Be=(I,S)=>{let R;for(;I!==S;)R=g(I),r(I),I=R;r(S)},rt=(I,S,R)=>{const{bum:L,scope:D,job:F,subTree:z,um:B,m:$,a:V}=I;kf($),kf(V),L&&yl(L),D.stop(),F&&(F.flags|=8,Ve(z,I,S,R)),B&&At(B,S),At(()=>{I.isUnmounted=!0},S)},je=(I,S,R,L=!1,D=!1,F=0)=>{for(let z=F;z<I.length;z++)Ve(I[z],S,R,L,D)},Ae=I=>{if(I.shapeFlag&6)return Ae(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=g(I.anchor||I.el),R=S&&S[D0];return R?g(R):S};let Te=!1;const He=(I,S,R)=>{I==null?S._vnode&&Ve(S._vnode,null,null,!0):P(S._vnode||null,I,S,null,null,null,R),S._vnode=I,Te||(Te=!0,yf(),Xg(),Te=!1)},st={p:P,um:Ve,m:bt,r:it,mt:q,mc:v,pc:se,pbc:T,n:Ae,o:t};return{render:He,hydrate:void 0,createApp:s1(He)}}function Al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ai({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function g1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ym(t,e,n=!1){const i=t.children,r=e.children;if(ne(i)&&ne(r))for(let s=0;s<i.length;s++){const o=i[s];let l=r[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[s]=ei(r[s]),l.el=o.el),!n&&l.patchFlag!==-2&&ym(o,l)),l.type===Fa&&l.patchFlag!==-1&&(l.el=o.el),l.type===_t&&!l.el&&(l.el=o.el)}}function m1(t){const e=t.slice(),n=[0];let i,r,s,o,l;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,t[n[l]]<u?s=l+1:o=l;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function vm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vm(e)}function kf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _1=Symbol.for("v-scx"),y1=()=>Po(_1);function No(t,e,n){return bm(t,e,n)}function bm(t,e,n=ke){const{immediate:i,deep:r,flush:s,once:o}=n,l=Ye({},n),c=e&&i||!e&&s!=="post";let u;if(kr){if(s==="sync"){const E=y1();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=gn,E.resume=gn,E.pause=gn,E}}const f=Ze;l.call=(E,C,P)=>tn(E,f,C,P);let p=!1;s==="post"?l.scheduler=E=>{At(E,f&&f.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(E,C)=>{C?E():gu(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const g=k0(t,e,l);return kr&&(u?u.push(g):c&&g()),g}function v1(t,e,n){const i=this.proxy,r=Fe(t)?t.includes(".")?wm(i,t):()=>i[t]:t.bind(i,i);let s;ie(e)?s=e:(s=e.handler,n=e);const o=Ys(this),l=bm(r,s.bind(i),n);return o(),l}function wm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const b1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Zi(e)}Modifiers`];function w1(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ke;let r=n;const s=e.startsWith("update:"),o=s&&b1(i,e.slice(7));o&&(o.trim&&(r=n.map(f=>Fe(f)?f.trim():f)),o.number&&(r=n.map(zb)));let l,c=i[l=_l(e)]||i[l=_l(Ut(e))];!c&&s&&(c=i[l=_l(Zi(e))]),c&&tn(c,t,6,r);const u=i[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,r)}}const I1=new WeakMap;function Im(t,e,n=!1){const i=n?I1:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},l=!1;if(!ie(t)){const c=u=>{const f=Im(u,e,!0);f&&(l=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(xe(t)&&i.set(t,null),null):(ne(s)?s.forEach(c=>o[c]=null):Ye(o,s),xe(t)&&i.set(t,o),o)}function La(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Zi(e))||ve(t,e))}function Rf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:E,ctx:C,inheritAttrs:P}=t,M=Go(t);let O,x;try{if(n.shapeFlag&4){const U=r||i,Y=U;O=un(u.call(Y,U,f,p,E,g,C)),x=l}else{const U=e;O=un(U.length>1?U(p,{attrs:l,slots:o,emit:c}):U(p,null)),x=e.props?l:E1(l)}}catch(U){vs.length=0,Gs(U,t,1),O=Me(_t)}let j=O;if(x&&P!==!1){const U=Object.keys(x),{shapeFlag:Y}=j;U.length&&Y&7&&(s&&U.some(iu)&&(x=T1(x,s)),j=fi(j,x,!1,!0))}return n.dirs&&(j=fi(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Ls(j,n.transition),O=j,Go(M),O}const E1=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},T1=(t,e)=>{const n={};for(const i in t)(!iu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function S1(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Pf(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==i[g]&&!La(u,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Pf(i,o,u):!0:!!o;return!1}function Pf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!La(n,s))return!0}return!1}function A1({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Em=t=>t.__isSuspense;function C1(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):O0(t)}const Wt=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),vs=[];let kt=null;function Tm(t=!1){vs.push(kt=t?null:[])}function k1(){vs.pop(),kt=vs[vs.length-1]||null}let Fs=1;function Xo(t,e=!1){Fs+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function Sm(t){return t.dynamicChildren=Fs>0?kt||gr:null,k1(),Fs>0&&kt&&kt.push(t),t}function R1(t,e,n,i,r,s){return Sm(bs(t,e,n,i,r,s,!0))}function P1(t,e,n,i,r){return Sm(Me(t,e,n,i,r,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Oi(t,e){return t.type===e.type&&t.key===e.key}const Am=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||dt(t)||ie(t)?{i:Gt,r:t,k:e,f:!!n}:t:null);function bs(t,e=null,n=null,i=0,r=null,s=t===Wt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&xo(e),scopeId:Qg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gt};return l?(Iu(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Fs>0&&!o&&kt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&kt.push(c),c}const Me=N1;function N1(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===X0)&&(t=_t),Jo(t)){const l=fi(t,e,!0);return n&&Iu(l,n),Fs>0&&!s&&kt&&(l.shapeFlag&6?kt[kt.indexOf(t)]=l:kt.push(l)),l.patchFlag=-2,l}if(H1(t)&&(t=t.__vccOpts),e){e=O1(e);let{class:l,style:c}=e;l&&!Fe(l)&&(e.class=ou(l)),xe(c)&&(pu(c)&&!ne(c)&&(c=Ye({},c)),e.style=xa(c))}const o=Fe(t)?1:Em(t)?128:Zg(t)?64:xe(t)?4:ie(t)?2:0;return bs(t,e,n,i,r,o,s,!0)}function O1(t){return t?pu(t)||fm(t)?Ye({},t):t:null}function fi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:l,transition:c}=t,u=e?D1(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Am(u),ref:e&&e.ref?n&&s?ne(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&Ls(f,c.clone(f)),f}function x1(t=" ",e=0){return Me(Fa,null,t,e)}function Rx(t,e){const n=Me(Oo,null,t);return n.staticCount=e,n}function Px(t="",e=!1){return e?(Tm(),P1(_t,null,t)):Me(_t,null,t)}function un(t){return t==null||typeof t=="boolean"?Me(_t):ne(t)?Me(Wt,null,t.slice()):Jo(t)?ei(t):Me(Fa,null,String(t))}function ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function Iu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Iu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!fm(e)?e._ctx=Gt:r===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Gt},n=32):(e=String(e),i&64?(n=16,e=[x1(e)]):n=8);t.children=e,t.shapeFlag|=n}function D1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ou([e.class,i.class]));else if(r==="style")e.style=xa([e.style,i.style]);else if(ka(r)){const s=e[r],o=i[r];o&&s!==o&&!(ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function an(t,e,n,i=null){tn(t,e,7,[n,i])}const M1=cm();let L1=0;function F1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||M1,s={uid:L1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new e0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(i,r),emitsOptions:Im(i,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:i.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=w1.bind(null,s),t.ce&&t.ce(s),s}let Ze=null;const Cm=()=>Ze||Gt;let Qo,dc;{const t=Oa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Qo=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),dc=e("__VUE_SSR_SETTERS__",n=>kr=n)}const Ys=t=>{const e=Ze;return Qo(t),t.scope.on(),()=>{t.scope.off(),Qo(e)}},Nf=()=>{Ze&&Ze.scope.off(),Qo(null)};function km(t){return t.vnode.shapeFlag&4}let kr=!1;function U1(t,e=!1,n=!1){e&&dc(e);const{props:i,children:r}=t.vnode,s=km(t);a1(t,i,s,e),h1(t,r,n||e);const o=s?j1(t,e):void 0;return e&&dc(!1),o}function j1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Q0);const{setup:i}=n;if(i){On();const r=t.setupContext=i.length>1?V1(t):null,s=Ys(t),o=qs(i,t,0,[t.props,r]),l=Sg(o);if(xn(),s(),(l||t.sp)&&!_s(t)&&_u(t),l){if(o.then(Nf,Nf),e)return o.then(c=>{Of(t,c)}).catch(c=>{Gs(c,t,0)});t.asyncDep=o}else Of(t,o)}else Rm(t)}function Of(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Gg(e)),Rm(t)}function Rm(t,e,n){const i=t.type;t.render||(t.render=i.render||gn);{const r=Ys(t);On();try{Z0(t)}finally{xn(),r()}}}const $1={get(t,e){return ct(t,"get",""),t[e]}};function V1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$1),slots:t.slots,emit:t.emit,expose:e}}function Eu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gg(w0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ys)return ys[n](t)},has(e,n){return n in e||n in ys}})):t.proxy}function B1(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function H1(t){return ie(t)&&"__vccOpts"in t}const ti=(t,e)=>A0(t,e,kr);function Pm(t,e,n){const i=(s,o,l)=>{Xo(-1);try{return Me(s,o,l)}finally{Xo(1)}},r=arguments.length;return r===2?xe(e)&&!ne(e)?Jo(e)?i(t,null,[e]):i(t,e):i(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jo(n)&&(n=[n]),i(t,e,n))}const W1="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pc;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{pc=xf.createPolicy("vue",{createHTML:t=>t})}catch{}const Nm=pc?t=>pc.createHTML(t):t=>t,z1="http://www.w3.org/2000/svg",q1="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Df=En&&En.createElement("template"),G1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?En.createElementNS(z1,t):e==="mathml"?En.createElementNS(q1,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Df.innerHTML=Nm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Df.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xn="transition",ss="animation",Us=Symbol("_vtc"),Om={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K1=Ye({},em,Om),Y1=t=>(t.displayName="Transition",t.props=K1,t),Nx=Y1((t,{slots:e})=>Pm(F0,X1(t),e)),Ci=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},Mf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function X1(t){const e={};for(const _ in t)_ in Om||(e[_]=t[_]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,C=J1(r),P=C&&C[0],M=C&&C[1],{onBeforeEnter:O,onEnter:x,onEnterCancelled:j,onLeave:U,onLeaveCancelled:Y,onBeforeAppear:X=O,onAppear:A=x,onAppearCancelled:v=j}=e,b=(_,y,q,ce)=>{_._enterCancelled=ce,ki(_,y?f:l),ki(_,y?u:o),q&&q()},T=(_,y)=>{_._isLeaving=!1,ki(_,p),ki(_,E),ki(_,g),y&&y()},w=_=>(y,q)=>{const ce=_?A:x,ge=()=>b(y,_,q);Ci(ce,[y,ge]),Lf(()=>{ki(y,_?c:s),wn(y,_?f:l),Mf(ce)||Ff(y,i,P,ge)})};return Ye(e,{onBeforeEnter(_){Ci(O,[_]),wn(_,s),wn(_,o)},onBeforeAppear(_){Ci(X,[_]),wn(_,c),wn(_,u)},onEnter:w(!1),onAppear:w(!0),onLeave(_,y){_._isLeaving=!0;const q=()=>T(_,y);wn(_,p),_._enterCancelled?(wn(_,g),$f()):($f(),wn(_,g)),Lf(()=>{_._isLeaving&&(ki(_,p),wn(_,E),Mf(U)||Ff(_,i,M,q))}),Ci(U,[_,q])},onEnterCancelled(_){b(_,!1,void 0,!0),Ci(j,[_])},onAppearCancelled(_){b(_,!0,void 0,!0),Ci(v,[_])},onLeaveCancelled(_){T(_),Ci(Y,[_])}})}function J1(t){if(t==null)return null;if(xe(t))return[Cl(t.enter),Cl(t.leave)];{const e=Cl(t);return[e,e]}}function Cl(t){return qb(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function Lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Q1=0;function Ff(t,e,n,i){const r=t._endId=++Q1,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:l,propCount:c}=Z1(t,e);if(!o)return i();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),s()},g=E=>{E.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Z1(t,e){const n=window.getComputedStyle(t),i=C=>(n[C]||"").split(", "),r=i(`${Xn}Delay`),s=i(`${Xn}Duration`),o=Uf(r,s),l=i(`${ss}Delay`),c=i(`${ss}Duration`),u=Uf(l,c);let f=null,p=0,g=0;e===Xn?o>0&&(f=Xn,p=o,g=s.length):e===ss?u>0&&(f=ss,p=u,g=c.length):(p=Math.max(o,u),f=p>0?o>u?Xn:ss:null,g=f?f===Xn?s.length:c.length:0);const E=f===Xn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Xn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:E}}function Uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>jf(n)+jf(t[i])))}function jf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function $f(){return document.body.offsetHeight}function ew(t,e,n){const i=t[Us];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vf=Symbol("_vod"),tw=Symbol("_vsh"),nw=Symbol(""),iw=/(?:^|;)\s*display\s*:/;function rw(t,e,n){const i=t.style,r=Fe(n);let s=!1;if(n&&!r){if(e)if(Fe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Do(i,l,"")}else for(const o in e)n[o]==null&&Do(i,o,"");for(const o in n)o==="display"&&(s=!0),Do(i,o,n[o])}else if(r){if(e!==n){const o=i[nw];o&&(n+=";"+o),i.cssText=n,s=iw.test(n)}}else e&&t.removeAttribute("style");Vf in t&&(t[Vf]=s?i.display:"",t[tw]&&(i.display="none"))}const Bf=/\s*!important$/;function Do(t,e,n){if(ne(n))n.forEach(i=>Do(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sw(t,e);Bf.test(n)?t.setProperty(Zi(i),n.replace(Bf,""),"important"):t[i]=n}}const Hf=["Webkit","Moz","ms"],kl={};function sw(t,e){const n=kl[e];if(n)return n;let i=Ut(e);if(i!=="filter"&&i in t)return kl[e]=i;i=Na(i);for(let r=0;r<Hf.length;r++){const s=Hf[r]+i;if(s in t)return kl[e]=s}return e}const Wf="http://www.w3.org/1999/xlink";function zf(t,e,n,i,r,s=Qb(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wf,e.slice(6,e.length)):t.setAttributeNS(Wf,e,n):n==null||s&&!Rg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":yi(n)?String(n):n)}function qf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Nm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Rg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ow(t,e,n,i){t.addEventListener(e,n,i)}function aw(t,e,n,i){t.removeEventListener(e,n,i)}const Gf=Symbol("_vei");function lw(t,e,n,i,r=null){const s=t[Gf]||(t[Gf]={}),o=s[e];if(i&&o)o.value=i;else{const[l,c]=cw(e);if(i){const u=s[e]=fw(i,r);ow(t,l,u,c)}else o&&(aw(t,l,o,c),s[e]=void 0)}}const Kf=/(?:Once|Passive|Capture)$/;function cw(t){let e;if(Kf.test(t)){e={};let i;for(;i=t.match(Kf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zi(t.slice(2)),e]}let Rl=0;const uw=Promise.resolve(),hw=()=>Rl||(uw.then(()=>Rl=0),Rl=Date.now());function fw(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tn(dw(i,n.value),e,5,[i])};return n.value=t,n.attached=hw(),n}function dw(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pw=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?ew(t,i,o):e==="style"?rw(t,n,i):ka(e)?iu(e)||lw(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gw(t,e,i,o))?(qf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(i))?qf(t,Ut(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),zf(t,e,i,o))};function gw(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yf(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yf(e)&&Fe(n)?!1:e in t}const mw=Ye({patchProp:pw},G1);let Xf;function _w(){return Xf||(Xf=d1(mw))}const yw=((...t)=>{const e=_w().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=bw(i);if(!r)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,vw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function vw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bw(t){return Fe(t)?document.querySelector(t):t}const ww="modulepreload",Iw=function(t){return"/Erika-website/"+t},Jf={},Jn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=Iw(u),u in Jf)return;Jf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":ww,f||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((E,C)=>{g.addEventListener("load",E),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Ew=mu({__name:"App",setup(t){const e=Yn(()=>Jn(()=>import("./Header-CK0lOtdp.js"),__vite__mapDeps([0,1]))),n=Yn(()=>Jn(()=>import("./HeroSection-B9ULzTcm.js"),__vite__mapDeps([2,3]))),i=Yn(()=>Jn(()=>import("./Sections-CLuoPZRP.js"),__vite__mapDeps([4,5]))),r=Yn(()=>Jn(()=>import("./Phrase-ChsCVNpt.js"),__vite__mapDeps([6,7]))),s=Yn(()=>Jn(()=>import("./TimeLine-DW_mUw08.js"),[])),o=Yn(()=>Jn(()=>import("./Present-DrEXpG3m.js"),__vite__mapDeps([8,9]))),l=Yn(()=>Jn(()=>import("./Conctact-CcLgKV0m.js"),[])),c=Yn(()=>Jn(()=>import("./Footer-COfxUCKL.js"),[])),u=yr(null),f=yr(null),p=yr(80),g=ti(()=>({height:`calc(var(--app-height) - ${p.value}px)`,"margin-top":`${p.value}px`})),E=()=>{u.value&&(p.value=u.value.$el.offsetHeight)};return yu(()=>{E(),window.addEventListener("resize",E)}),vu(()=>{window.removeEventListener("resize",E)}),document.addEventListener("DOMContentLoaded",()=>{const C=document.getElementById("scrollToTopBtn");C&&(window.addEventListener("scroll",()=>{window.scrollY>300?(C.classList.remove("opacity-0","invisible"),C.classList.add("opacity-100","visible")):(C.classList.remove("opacity-100","visible"),C.classList.add("opacity-0","invisible"))}),C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}),(C,P)=>(Tm(),R1(Wt,null,[Me(In(e),{ref_key:"HeaderRef",ref:u,class:"header"},null,512),Me(In(n),{ref_key:"HeroSectionRef",ref:f,style:xa(g.value)},null,8,["style"]),Me(In(i)),Me(In(r)),Me(In(s)),Me(In(o)),Me(In(l)),Me(In(c)),P[0]||(P[0]=bs("button",{id:"scrollToTopBtn",class:"fixed bottom-5 right-5 z-100 p-3 bg-(--primary) text-white shadow-lg transition-all duration-300 opacity-0 invisible hover:scale-110 focus:outline-none",title:"Ir arriba"},[bs("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[bs("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 10l7-7m0 0l7 7m-7-7v18"})])],-1))],64))}}),Tw=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Sw=Tw(Ew,[["__scopeId","data-v-7acbe49a"]]);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function gc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function Aw(t){if(Array.isArray(t))return t}function Cw(t){if(Array.isArray(t))return gc(t)}function kw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rw(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,xm(i.key),i)}}function Pw(t,e,n){return e&&Rw(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mo(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Tu(t))||e){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){l=!0,s=c},f:function(){try{o||n.return==null||n.return()}finally{if(l)throw s}}}}function ae(t,e,n){return(e=xm(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ow(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,l=[],c=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=s.call(n)).done)&&(l.push(i.value),l.length!==e);c=!0);}catch(f){u=!0,r=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}function xw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qf(Object(n),!0).forEach(function(i){ae(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ua(t,e){return Aw(t)||Ow(t,e)||Tu(t,e)||xw()}function nn(t){return Cw(t)||Nw(t)||Tu(t)||Dw()}function Mw(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xm(t){var e=Mw(t,"string");return typeof e=="symbol"?e:e+""}function Zo(t){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zo(t)}function Tu(t,e){if(t){if(typeof t=="string")return gc(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gc(t,e):void 0}}var Zf=function(){},Su={},Dm={},Mm=null,Lm={mark:Zf,measure:Zf};try{typeof window<"u"&&(Su=window),typeof document<"u"&&(Dm=document),typeof MutationObserver<"u"&&(Mm=MutationObserver),typeof performance<"u"&&(Lm=performance)}catch{}var Lw=Su.navigator||{},ed=Lw.userAgent,td=ed===void 0?"":ed,di=Su,Oe=Dm,nd=Mm,wo=Lm;di.document;var $n=!!Oe.documentElement&&!!Oe.head&&typeof Oe.addEventListener=="function"&&typeof Oe.createElement=="function",Fm=~td.indexOf("MSIE")||~td.indexOf("Trident/"),Pl,Fw=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Uw=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Um={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},jw={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},jm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],nt="classic",Xs="duotone",$m="sharp",Vm="sharp-duotone",Bm="chisel",Hm="etch",Wm="jelly",zm="jelly-duo",qm="jelly-fill",Gm="notdog",Km="notdog-duo",Ym="slab",Xm="slab-press",Jm="thumbprint",Qm="whiteboard",$w="Classic",Vw="Duotone",Bw="Sharp",Hw="Sharp Duotone",Ww="Chisel",zw="Etch",qw="Jelly",Gw="Jelly Duo",Kw="Jelly Fill",Yw="Notdog",Xw="Notdog Duo",Jw="Slab",Qw="Slab Press",Zw="Thumbprint",eI="Whiteboard",Zm=[nt,Xs,$m,Vm,Bm,Hm,Wm,zm,qm,Gm,Km,Ym,Xm,Jm,Qm];Pl={},ae(ae(ae(ae(ae(ae(ae(ae(ae(ae(Pl,nt,$w),Xs,Vw),$m,Bw),Vm,Hw),Bm,Ww),Hm,zw),Wm,qw),zm,Gw),qm,Kw),Gm,Yw),ae(ae(ae(ae(ae(Pl,Km,Xw),Ym,Jw),Xm,Qw),Jm,Zw),Qm,eI);var tI={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},nI={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},iI=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),rI={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},e_=["fak","fa-kit","fakd","fa-kit-duotone"],id={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sI=["kit"],oI="kit",aI="kit-duotone",lI="Kit",cI="Kit Duotone";ae(ae({},oI,lI),aI,cI);var uI={kit:{"fa-kit":"fak"}},hI={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fI={kit:{fak:"fa-kit"}},rd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nl,Io={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dI=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],pI="classic",gI="duotone",mI="sharp",_I="sharp-duotone",yI="chisel",vI="etch",bI="jelly",wI="jelly-duo",II="jelly-fill",EI="notdog",TI="notdog-duo",SI="slab",AI="slab-press",CI="thumbprint",kI="whiteboard",RI="Classic",PI="Duotone",NI="Sharp",OI="Sharp Duotone",xI="Chisel",DI="Etch",MI="Jelly",LI="Jelly Duo",FI="Jelly Fill",UI="Notdog",jI="Notdog Duo",$I="Slab",VI="Slab Press",BI="Thumbprint",HI="Whiteboard";Nl={},ae(ae(ae(ae(ae(ae(ae(ae(ae(ae(Nl,pI,RI),gI,PI),mI,NI),_I,OI),yI,xI),vI,DI),bI,MI),wI,LI),II,FI),EI,UI),ae(ae(ae(ae(ae(Nl,TI,jI),SI,$I),AI,VI),CI,BI),kI,HI);var WI="kit",zI="kit-duotone",qI="Kit",GI="Kit Duotone";ae(ae({},WI,qI),zI,GI);var KI={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},YI={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},mc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},XI=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],t_=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(dI,XI),JI=["solid","regular","light","thin","duotone","brands","semibold"],n_=[1,2,3,4,5,6,7,8,9,10],QI=n_.concat([11,12,13,14,15,16,17,18,19,20]),ZI=["aw","fw","pull-left","pull-right"],eE=[].concat(nn(Object.keys(YI)),JI,ZI,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Io.GROUP,Io.SWAP_OPACITY,Io.PRIMARY,Io.SECONDARY]).concat(n_.map(function(t){return"".concat(t,"x")})).concat(QI.map(function(t){return"w-".concat(t)})),tE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Dn="___FONT_AWESOME___",_c=16,i_="fa",r_="svg-inline--fa",Bi="data-fa-i2svg",yc="data-fa-pseudo-element",nE="data-fa-pseudo-element-pending",Au="data-prefix",Cu="data-icon",sd="fontawesome-i2svg",iE="async",rE=["HTML","HEAD","STYLE","SCRIPT"],s_=["::before","::after",":before",":after"],o_=(function(){try{return!0}catch{return!1}})();function Js(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[nt]}})}var a_=H({},Um);a_[nt]=H(H(H(H({},{"fa-duotone":"duotone"}),Um[nt]),id.kit),id["kit-duotone"]);var sE=Js(a_),vc=H({},rI);vc[nt]=H(H(H(H({},{duotone:"fad"}),vc[nt]),rd.kit),rd["kit-duotone"]);var od=Js(vc),bc=H({},mc);bc[nt]=H(H({},bc[nt]),fI.kit);var ku=Js(bc),wc=H({},KI);wc[nt]=H(H({},wc[nt]),uI.kit);Js(wc);var oE=Fw,l_="fa-layers-text",aE=Uw,lE=H({},tI);Js(lE);var cE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ol=jw,uE=[].concat(nn(sI),nn(eE)),ws=di.FontAwesomeConfig||{};function hE(t){var e=Oe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function fE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Oe&&typeof Oe.querySelector=="function"){var dE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dE.forEach(function(t){var e=Ua(t,2),n=e[0],i=e[1],r=fE(hE(n));r!=null&&(ws[i]=r)})}var c_={styleDefault:"solid",familyDefault:nt,cssPrefix:i_,replacementClass:r_,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ws.familyPrefix&&(ws.cssPrefix=ws.familyPrefix);var Rr=H(H({},c_),ws);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var J={};Object.keys(c_).forEach(function(t){Object.defineProperty(J,t,{enumerable:!0,set:function(n){Rr[t]=n,Is.forEach(function(i){return i(J)})},get:function(){return Rr[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(e){Rr.cssPrefix=e,Is.forEach(function(n){return n(J)})},get:function(){return Rr.cssPrefix}});di.FontAwesomeConfig=J;var Is=[];function pE(t){return Is.push(t),function(){Is.splice(Is.indexOf(t),1)}}var lr=_c,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gE(t){if(!(!t||!$n)){var e=Oe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Oe.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Oe.head.insertBefore(e,i),t}}var mE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ad(){for(var t=12,e="";t-- >0;)e+=mE[Math.random()*62|0];return e}function Dr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ru(t){return t.classList?Dr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function u_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _E(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(u_(t[n]),'" ')},"").trim()}function ja(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Pu(t){return t.size!==fn.size||t.x!==fn.x||t.y!==fn.y||t.rotate!==fn.rotate||t.flipX||t.flipY}function yE(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:u}}function vE(t){var e=t.transform,n=t.width,i=n===void 0?_c:n,r=t.height,s=r===void 0?_c:r,o="";return Fm?o+="translate(".concat(e.x/lr-i/2,"em, ").concat(e.y/lr-s/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/lr,"em), calc(-50% + ").concat(e.y/lr,"em)) "),o+="scale(".concat(e.size/lr*(e.flipX?-1:1),", ").concat(e.size/lr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var bE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function h_(){var t=i_,e=r_,n=J.cssPrefix,i=J.replacementClass,r=bE;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(i))}return r}var ld=!1;function xl(){J.autoAddCss&&!ld&&(gE(h_()),ld=!0)}var wE={mixout:function(){return{dom:{css:h_,insertCss:xl}}},hooks:function(){return{beforeDOMElementCreation:function(){xl()},beforeI2svg:function(){xl()}}}},Mn=di||{};Mn[Dn]||(Mn[Dn]={});Mn[Dn].styles||(Mn[Dn].styles={});Mn[Dn].hooks||(Mn[Dn].hooks={});Mn[Dn].shims||(Mn[Dn].shims=[]);var Kt=Mn[Dn],f_=[],d_=function(){Oe.removeEventListener("DOMContentLoaded",d_),ea=1,f_.map(function(e){return e()})},ea=!1;$n&&(ea=(Oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Oe.readyState),ea||Oe.addEventListener("DOMContentLoaded",d_));function IE(t){$n&&(ea?setTimeout(t,0):f_.push(t))}function Qs(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?u_(t):"<".concat(e," ").concat(_E(i),">").concat(s.map(Qs).join(""),"</").concat(e,">")}function cd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Dl=function(e,n,i,r){var s=Object.keys(e),o=s.length,l=n,c,u,f;for(i===void 0?(c=1,f=e[s[0]]):(c=0,f=i);c<o;c++)u=s[c],f=l(f,e[u],u,e);return f};function p_(t){return nn(t).length!==1?null:t.codePointAt(0).toString(16)}function ud(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Ic(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=ud(e);typeof Kt.hooks.addPack=="function"&&!r?Kt.hooks.addPack(t,ud(e)):Kt.styles[t]=H(H({},Kt.styles[t]||{}),s),t==="fas"&&Ic("fa",e)}var js=Kt.styles,EE=Kt.shims,g_=Object.keys(ku),TE=g_.reduce(function(t,e){return t[e]=Object.keys(ku[e]),t},{}),Nu=null,m_={},__={},y_={},v_={},b_={};function SE(t){return~uE.indexOf(t)}function AE(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!SE(r)?r:null}var w_=function(){var e=function(s){return Dl(js,function(o,l,c){return o[c]=Dl(l,s,{}),o},{})};m_=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var l=s[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),__=e(function(r,s,o){if(r[o]=o,s[2]){var l=s[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),b_=e(function(r,s,o){var l=s[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var n="far"in js||J.autoFetchSvg,i=Dl(EE,function(r,s){var o=s[0],l=s[1],c=s[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});y_=i.names,v_=i.unicodes,Nu=$a(J.styleDefault,{family:J.familyDefault})};pE(function(t){Nu=$a(t.styleDefault,{family:J.familyDefault})});w_();function Ou(t,e){return(m_[t]||{})[e]}function CE(t,e){return(__[t]||{})[e]}function Di(t,e){return(b_[t]||{})[e]}function I_(t){return y_[t]||{prefix:null,iconName:null}}function kE(t){var e=v_[t],n=Ou("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pi(){return Nu}var E_=function(){return{prefix:null,iconName:null,rest:[]}};function RE(t){var e=nt,n=g_.reduce(function(i,r){return i[r]="".concat(J.cssPrefix,"-").concat(r),i},{});return Zm.forEach(function(i){(t.includes(n[i])||t.some(function(r){return TE[i].includes(r)}))&&(e=i)}),e}function $a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?nt:n,r=sE[i][t];if(i===Xs&&!t)return"fad";var s=od[i][t]||od[i][r],o=t in Kt.styles?t:null,l=s||o||null;return l}function PE(t){var e=[],n=null;return t.forEach(function(i){var r=AE(J.cssPrefix,i);r?n=r:i&&e.push(i)}),{iconName:n,rest:e}}function hd(t){return t.sort().filter(function(e,n,i){return i.indexOf(e)===n})}var fd=t_.concat(e_);function Va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,i=n===void 0?!1:n,r=null,s=hd(t.filter(function(E){return fd.includes(E)})),o=hd(t.filter(function(E){return!fd.includes(E)})),l=s.filter(function(E){return r=E,!jm.includes(E)}),c=Ua(l,1),u=c[0],f=u===void 0?null:u,p=RE(s),g=H(H({},PE(o)),{},{prefix:$a(f,{family:p})});return H(H(H({},g),DE({values:t,family:p,styles:js,config:J,canonical:g,givenPrefix:r})),NE(i,r,g))}function NE(t,e,n){var i=n.prefix,r=n.iconName;if(t||!i||!r)return{prefix:i,iconName:r};var s=e==="fa"?I_(r):{},o=Di(i,r);return r=s.iconName||o||r,i=s.prefix||i,i==="far"&&!js.far&&js.fas&&!J.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var OE=Zm.filter(function(t){return t!==nt||t!==Xs}),xE=Object.keys(mc).filter(function(t){return t!==nt}).map(function(t){return Object.keys(mc[t])}).flat();function DE(t){var e=t.values,n=t.family,i=t.canonical,r=t.givenPrefix,s=r===void 0?"":r,o=t.styles,l=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===Xs,p=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",E=i.prefix==="fad"||i.prefix==="fa-duotone";if(!f&&(p||g||E)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&OE.includes(n)){var C=Object.keys(l).find(function(M){return xE.includes(M)});if(C||u.autoFetchSvg){var P=iI.get(n).defaultShortPrefixId;i.prefix=P,i.iconName=Di(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||s==="fa")&&(i.prefix=pi()||"fas"),i}var ME=(function(){function t(){kw(this,t),this.definitions={}}return Pw(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=H(H({},n.definitions[l]||{}),o[l]),Ic(l,o[l]);var c=ku[nt][l];c&&Ic(c,o[l]),w_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][c]=u}),n}}])})(),dd=[],hr={},wr={},LE=Object.keys(wr);function FE(t,e){var n=e.mixoutsTo;return dd=t,hr={},Object.keys(wr).forEach(function(i){LE.indexOf(i)===-1&&delete wr[i]}),dd.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Zo(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){hr[o]||(hr[o]=[]),hr[o].push(s[o])})}i.provides&&i.provides(wr)}),n}function Ec(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=hr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Hi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=hr[t]||[];r.forEach(function(s){s.apply(null,n)})}function gi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wr[t]?wr[t].apply(null,e):void 0}function Tc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||pi();if(e)return e=Di(n,e)||e,cd(T_.definitions,n,e)||cd(Kt.styles,n,e)}var T_=new ME,UE=function(){J.autoReplaceSvg=!1,J.observeMutations=!1,Hi("noAuto")},jE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $n?(Hi("beforeI2svg",e),gi("pseudoElements2svg",e),gi("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,IE(function(){VE({autoReplaceSvgRoot:n}),Hi("watch",e)})}},$E={icon:function(e){if(e===null)return null;if(Zo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Di(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=$a(e[0]);return{prefix:i,iconName:Di(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(J.cssPrefix,"-"))>-1||e.match(oE))){var r=Va(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||pi(),iconName:Di(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=pi();return{prefix:s,iconName:Di(s,e)||e}}}},Nt={noAuto:UE,config:J,dom:jE,parse:$E,library:T_,findIconDefinition:Tc,toHtml:Qs},VE=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Oe:n;(Object.keys(Kt.styles).length>0||J.autoFetchSvg)&&$n&&J.autoReplaceSvg&&Nt.dom.i2svg({node:i})};function Ba(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Qs(i)})}}),Object.defineProperty(t,"node",{get:function(){if($n){var i=Oe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function BE(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Pu(o)&&n.found&&!i.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};r.style=ja(H(H({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function HE(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},r),{},{id:o}),children:i}]}]}function WE(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function xu(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,l=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,p=f===void 0?!1:f,g=i.found?i:n,E=g.width,C=g.height,P=[J.replacementClass,s?"".concat(J.cssPrefix,"-").concat(s):""].filter(function(Y){return u.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(u.classes).join(" "),M={children:[],attributes:H(H({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:P,role:u.attributes.role||"img",viewBox:"0 0 ".concat(E," ").concat(C)})};!WE(u.attributes)&&!u.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),p&&(M.attributes[Bi]="");var O=H(H({},M),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:l,styles:H({},u.styles)}),x=i.found&&n.found?gi("generateAbstractMask",O)||{children:[],attributes:{}}:gi("generateAbstractIcon",O)||{children:[],attributes:{}},j=x.children,U=x.attributes;return O.children=j,O.attributes=U,l?HE(O):BE(O)}function pd(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.extra,o=t.watchable,l=o===void 0?!1:o,c=H(H({},s.attributes),{},{class:s.classes.join(" ")});l&&(c[Bi]="");var u=H({},s.styles);Pu(r)&&(u.transform=vE({transform:r,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=ja(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),p}function zE(t){var e=t.content,n=t.extra,i=H(H({},n.attributes),{},{class:n.classes.join(" ")}),r=ja(n.styles);r.length>0&&(i.style=r);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),s}var Ml=Kt.styles;function Sc(t){var e=t[0],n=t[1],i=t.slice(4),r=Ua(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(Ol.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(Ol.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(Ol.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var qE={found:!1,width:512,height:512};function GE(t,e){!o_&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ac(t,e){var n=e;return e==="fa"&&J.styleDefault!==null&&(e=pi()),new Promise(function(i,r){if(n==="fa"){var s=I_(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ml[e]&&Ml[e][t]){var o=Ml[e][t];return i(Sc(o))}GE(t,e),i(H(H({},qE),{},{icon:J.showMissingIcons&&t?gi("missingIconAbstract")||{}:{}}))})}var gd=function(){},Cc=J.measurePerformance&&wo&&wo.mark&&wo.measure?wo:{mark:gd,measure:gd},hs='FA "7.0.1"',KE=function(e){return Cc.mark("".concat(hs," ").concat(e," begins")),function(){return S_(e)}},S_=function(e){Cc.mark("".concat(hs," ").concat(e," ends")),Cc.measure("".concat(hs," ").concat(e),"".concat(hs," ").concat(e," begins"),"".concat(hs," ").concat(e," ends"))},Du={begin:KE,end:S_},Lo=function(){};function md(t){var e=t.getAttribute?t.getAttribute(Bi):null;return typeof e=="string"}function YE(t){var e=t.getAttribute?t.getAttribute(Au):null,n=t.getAttribute?t.getAttribute(Cu):null;return e&&n}function XE(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function JE(){if(J.autoReplaceSvg===!0)return Fo.replace;var t=Fo[J.autoReplaceSvg];return t||Fo.replace}function QE(t){return Oe.createElementNS("http://www.w3.org/2000/svg",t)}function ZE(t){return Oe.createElement(t)}function A_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?QE:ZE:n;if(typeof t=="string")return Oe.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(A_(o,{ceFn:i}))}),r}function eT(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Fo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(A_(r),n)}),n.getAttribute(Bi)===null&&J.keepOriginalSource){var i=Oe.createComment(eT(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Ru(n).indexOf(J.replacementClass))return Fo.replace(e);var r=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(l,c){return c===J.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(l){return Qs(l)}).join(`
`);n.setAttribute(Bi,""),n.innerHTML=o}};function _d(t){t()}function C_(t,e){var n=typeof e=="function"?e:Lo;if(t.length===0)n();else{var i=_d;J.mutateApproach===iE&&(i=di.requestAnimationFrame||_d),i(function(){var r=JE(),s=Du.begin("mutate");t.map(r),s(),n()})}}var Mu=!1;function k_(){Mu=!0}function kc(){Mu=!1}var ta=null;function yd(t){if(nd&&J.observeMutations){var e=t.treeCallback,n=e===void 0?Lo:e,i=t.nodeCallback,r=i===void 0?Lo:i,s=t.pseudoElementsCallback,o=s===void 0?Lo:s,l=t.observeMutationsRoot,c=l===void 0?Oe:l;ta=new nd(function(u){if(!Mu){var f=pi();Dr(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!md(p.addedNodes[0])&&(J.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&J.searchPseudoElements&&o([p.target],!0),p.type==="attributes"&&md(p.target)&&~cE.indexOf(p.attributeName))if(p.attributeName==="class"&&YE(p.target)){var g=Va(Ru(p.target)),E=g.prefix,C=g.iconName;p.target.setAttribute(Au,E||f),C&&p.target.setAttribute(Cu,C)}else XE(p.target)&&r(p.target)})}}),$n&&ta.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tT(){ta&&ta.disconnect()}function nT(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(i[o]=l.join(":").trim()),i},{})),n}function iT(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Va(Ru(t));return r.prefix||(r.prefix=pi()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=CE(r.prefix,t.innerText)||Ou(r.prefix,p_(t.innerText))),!r.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function rT(t){var e=Dr(t.attributes).reduce(function(n,i){return n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n},{});return e}function sT(){return{iconName:null,prefix:null,transform:fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iT(t),i=n.iconName,r=n.prefix,s=n.rest,o=rT(t),l=Ec("parseNodeAttributes",{},t),c=e.styleParser?nT(t):[];return H({iconName:i,prefix:r,transform:fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},l)}var oT=Kt.styles;function R_(t){var e=J.autoReplaceSvg==="nest"?vd(t,{styleParser:!1}):vd(t);return~e.extra.classes.indexOf(l_)?gi("generateLayersText",t,e):gi("generateSvgReplacementMutation",t,e)}function aT(){return[].concat(nn(e_),nn(t_))}function bd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$n)return Promise.resolve();var n=Oe.documentElement.classList,i=function(p){return n.add("".concat(sd,"-").concat(p))},r=function(p){return n.remove("".concat(sd,"-").concat(p))},s=J.autoFetchSvg?aT():jm.concat(Object.keys(oT));s.includes("fa")||s.push("fa");var o=[".".concat(l_,":not([").concat(Bi,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(Bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Dr(t.querySelectorAll(o))}catch{}if(l.length>0)i("pending"),r("complete");else return Promise.resolve();var c=Du.begin("onTree"),u=l.reduce(function(f,p){try{var g=R_(p);g&&f.push(g)}catch(E){o_||E.name==="MissingIcon"&&console.error(E)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(g){C_(g,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(g){c(),p(g)})})}function lT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;R_(t).then(function(n){n&&C_([n],e)})}function cT(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Tc(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tc(r||{})),t(i,H(H({},n),{},{mask:r}))}}var uT=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?fn:i,s=n.symbol,o=s===void 0?!1:s,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,p=n.classes,g=p===void 0?[]:p,E=n.attributes,C=E===void 0?{}:E,P=n.styles,M=P===void 0?{}:P;if(e){var O=e.prefix,x=e.iconName,j=e.icon;return Ba(H({type:"icon"},e),function(){return Hi("beforeDOMElementCreation",{iconDefinition:e,params:n}),xu({icons:{main:Sc(j),mask:c?Sc(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:x,transform:H(H({},fn),r),symbol:o,maskId:f,extra:{attributes:C,styles:M,classes:g}})})}},hT={mixout:function(){return{icon:cT(uT)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bd,n.nodeCallback=lT,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Oe:i,s=n.callback,o=s===void 0?function(){}:s;return bd(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.prefix,o=i.transform,l=i.symbol,c=i.mask,u=i.maskId,f=i.extra;return new Promise(function(p,g){Promise.all([Ac(r,s),c.iconName?Ac(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var C=Ua(E,2),P=C[0],M=C[1];p([n,xu({icons:{main:P,mask:M},prefix:s,iconName:r,transform:o,symbol:l,maskId:u,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,l=n.styles,c=ja(l);c.length>0&&(r.style=c);var u;return Pu(o)&&(u=gi("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(u||s.icon),{children:i,attributes:r}}}},fT={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Ba({type:"layer"},function(){Hi("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers")].concat(nn(s)).join(" ")},children:o}]})}}}},dT={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i.title;var r=i.classes,s=r===void 0?[]:r,o=i.attributes,l=o===void 0?{}:o,c=i.styles,u=c===void 0?{}:c;return Ba({type:"counter",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:i}),zE({content:n.toString(),extra:{attributes:l,styles:u,classes:["".concat(J.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},pT={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?fn:r,o=i.classes,l=o===void 0?[]:o,c=i.attributes,u=c===void 0?{}:c,f=i.styles,p=f===void 0?{}:f;return Ba({type:"text",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:i}),pd({content:n,transform:H(H({},fn),s),extra:{attributes:u,styles:p,classes:["".concat(J.cssPrefix,"-layers-text")].concat(nn(l))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.transform,s=i.extra,o=null,l=null;if(Fm){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return Promise.resolve([n,pd({content:n.innerHTML,width:o,height:l,transform:r,extra:s,watchable:!0})])}}},P_=new RegExp('"',"ug"),wd=[1105920,1112319],Id=H(H(H(H({},{FontAwesome:{normal:"fas",400:"fas"}}),nI),tE),hI),Rc=Object.keys(Id).reduce(function(t,e){return t[e.toLowerCase()]=Id[e],t},{}),gT=Object.keys(Rc).reduce(function(t,e){var n=Rc[e];return t[e]=n[900]||nn(Object.entries(n))[0][1],t},{});function mT(t){var e=t.replace(P_,"");return p_(nn(e)[0]||"")}function _T(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),i=n.replace(P_,""),r=i.codePointAt(0),s=r>=wd[0]&&r<=wd[1],o=i.length===2?i[0]===i[1]:!1;return s||o||e}function yT(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Rc[n]||{})[r]||gT[n]}function Ed(t,e){var n="".concat(nE).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Dr(t.children),o=s.filter(function(X){return X.getAttribute(yc)===e})[0],l=di.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(aE),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&p!=="none"&&p!==""){var g=l.getPropertyValue("content"),E=yT(c,f),C=mT(g),P=u[0].startsWith("FontAwesome"),M=_T(l),O=Ou(E,C),x=O;if(P){var j=kE(C);j.iconName&&j.prefix&&(O=j.iconName,E=j.prefix)}if(O&&!M&&(!o||o.getAttribute(Au)!==E||o.getAttribute(Cu)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var U=sT(),Y=U.extra;Y.attributes[yc]=e,Ac(O,E).then(function(X){var A=xu(H(H({},U),{},{icons:{main:X,mask:E_()},prefix:E,iconName:x,extra:Y,watchable:!0})),v=Oe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=A.map(function(b){return Qs(b)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function vT(t){return Promise.all([Ed(t,"::before"),Ed(t,"::after")])}function bT(t){return t.parentNode!==document.head&&!~rE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var wT=function(e){return!!e&&s_.some(function(n){return e.includes(n)})},IT=function(e){if(!e)return[];var n=new Set,i=e.split(/,(?![^()]*\))/).map(function(c){return c.trim()});i=i.flatMap(function(c){return c.includes("(")?c:c.split(",").map(function(u){return u.trim()})});var r=Mo(i),s;try{for(r.s();!(s=r.n()).done;){var o=s.value;if(wT(o)){var l=s_.reduce(function(c,u){return c.replace(u,"")},o);l!==""&&l!=="*"&&n.add(l)}}}catch(c){r.e(c)}finally{r.f()}return n};function Td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if($n){var n;if(e)n=t;else if(J.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var i=new Set,r=Mo(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var o=s.value;try{var l=Mo(o.cssRules),c;try{for(l.s();!(c=l.n()).done;){var u=c.value,f=IT(u.selectorText),p=Mo(f),g;try{for(p.s();!(g=p.n()).done;){var E=g.value;i.add(E)}}catch(P){p.e(P)}finally{p.f()}}}catch(P){l.e(P)}finally{l.f()}}catch(P){J.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(P.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(P){r.e(P)}finally{r.f()}if(!i.size)return;var C=Array.from(i).join(", ");try{n=t.querySelectorAll(C)}catch{}}return new Promise(function(P,M){var O=Dr(n).filter(bT).map(vT),x=Du.begin("searchPseudoElements");k_(),Promise.all(O).then(function(){x(),kc(),P()}).catch(function(){x(),kc(),M()})})}}var ET={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Td,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Oe:i;J.searchPseudoElements&&Td(r)}}},Sd=!1,TT={mixout:function(){return{dom:{unwatch:function(){k_(),Sd=!0}}}},hooks:function(){return{bootstrap:function(){yd(Ec("mutationObserverCallbacks",{}))},noAuto:function(){tT()},watch:function(n){var i=n.observeMutationsRoot;Sd?kc():yd(Ec("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ad=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return i.flipX=!0,i;if(o&&l==="v")return i.flipY=!0,i;if(l=parseFloat(l),isNaN(l))return i;switch(o){case"grow":i.size=i.size+l;break;case"shrink":i.size=i.size-l;break;case"left":i.x=i.x-l;break;case"right":i.x=i.x+l;break;case"up":i.y=i.y-l;break;case"down":i.y=i.y+l;break;case"rotate":i.rotate=i.rotate+l;break}return i},n)},ST={mixout:function(){return{parse:{transform:function(n){return Ad(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Ad(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(c," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},E={outer:l,inner:p,path:g};return{tag:"g",attributes:H({},E.outer),children:[{tag:"g",attributes:H({},E.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:H(H({},i.icon.attributes),E.path)}]}]}}}},Ll={x:0,y:0,width:"100%",height:"100%"};function Cd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function AT(t){return t.tag==="g"?t.children:[t]}var CT={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Va(r.split(" ").map(function(o){return o.trim()})):E_();return s.prefix||(s.prefix=pi()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,l=n.maskId,c=n.transform,u=s.width,f=s.icon,p=o.width,g=o.icon,E=yE({transform:c,containerWidth:p,iconWidth:u}),C={tag:"rect",attributes:H(H({},Ll),{},{fill:"white"})},P=f.children?{children:f.children.map(Cd)}:{},M={tag:"g",attributes:H({},E.inner),children:[Cd(H({tag:f.tag,attributes:H(H({},f.attributes),E.path)},P))]},O={tag:"g",attributes:H({},E.outer),children:[M]},x="mask-".concat(l||ad()),j="clip-".concat(l||ad()),U={tag:"mask",attributes:H(H({},Ll),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,O]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:AT(g)},U]};return i.push(Y,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(x,")")},Ll)}),{children:i,attributes:r}}}},kT={provides:function(e){var n=!1;di.matchMedia&&(n=di.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:H(H({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=H(H({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:H(H({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:H(H({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(l),i.push({tag:"path",attributes:H(H({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:H(H({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:H(H({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},RT={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},PT=[wE,hT,fT,dT,pT,ET,TT,ST,CT,kT,RT];FE(PT,{mixoutsTo:Nt});Nt.noAuto;Nt.config;var NT=Nt.library;Nt.dom;var Pc=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var OT=Nt.icon;Nt.layer;Nt.text;Nt.counter;function lt(t,e,n){return(e=LT(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function An(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kd(Object(n),!0).forEach(function(i){lt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xT(t,e){if(t==null)return{};var n,i,r=DT(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function DT(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function MT(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LT(t){var e=MT(t,"string");return typeof e=="symbol"?e:e+""}function na(t){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},na(t)}function Fl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?lt({},t,e):{}}function FT(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},lt(lt(lt(lt(lt(lt(lt(lt(lt(lt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),lt(lt(lt(lt(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}var UT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N_={exports:{}};(function(t){(function(e){var n=function(O,x,j){if(!u(x)||p(x)||g(x)||E(x)||c(x))return x;var U,Y=0,X=0;if(f(x))for(U=[],X=x.length;Y<X;Y++)U.push(n(O,x[Y],j));else{U={};for(var A in x)Object.prototype.hasOwnProperty.call(x,A)&&(U[O(A,j)]=n(O,x[A],j))}return U},i=function(O,x){x=x||{};var j=x.separator||"_",U=x.split||/(?=[A-Z])/;return O.split(U).join(j)},r=function(O){return C(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(x,j){return j?j.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},s=function(O){var x=r(O);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(O,x){return i(O,x).toLowerCase()},l=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},f=function(O){return l.call(O)=="[object Array]"},p=function(O){return l.call(O)=="[object Date]"},g=function(O){return l.call(O)=="[object RegExp]"},E=function(O){return l.call(O)=="[object Boolean]"},C=function(O){return O=O-0,O===O},P=function(O,x){var j=x&&"process"in x?x.process:x;return typeof j!="function"?O:function(U,Y){return j(U,O,Y)}},M={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(O,x){return n(P(r,x),O)},decamelizeKeys:function(O,x){return n(P(o,x),O,x)},pascalizeKeys:function(O,x){return n(P(s,x),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=M:e.humps=M})(UT)})(N_);var jT=N_.exports,$T=["class","style"];function VT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=jT.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function BT(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function O_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(c){return O_(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=BT(f);break;case"style":c.style=VT(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,l=xT(n,$T);return Pm(t.tag,An(An(An({},e),{},{class:r.class,style:An(An({},r.style),o)},r.attrs),l),i)}var x_=!1;try{x_=!0}catch{}function HT(){if(!x_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rd(t){if(t&&na(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pc.icon)return Pc.icon(t);if(t===null)return null;if(na(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var WT=mu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=ti(function(){return Rd(e.icon)}),s=ti(function(){return Fl("classes",FT(e))}),o=ti(function(){return Fl("transform",typeof e.transform=="string"?Pc.transform(e.transform):e.transform)}),l=ti(function(){return Fl("mask",Rd(e.mask))}),c=ti(function(){var f=An(An(An(An({},s.value),o.value),l.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,OT(r.value,f)});No(c,function(f){if(!f)return HT("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=ti(function(){return c.value?O_(c.value.abstract[0],{},i):null});return function(){return u.value}}});function zT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uo={exports:{}},qT=Uo.exports,Pd;function GT(){return Pd||(Pd=1,(function(t,e){(function(n,i){t.exports=i()})(qT,function(){return(function(n){function i(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return n[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)})([function(n,i,r){function s(q){return q&&q.__esModule?q:{default:q}}var o=Object.assign||function(q){for(var ce=1;ce<arguments.length;ce++){var ge=arguments[ce];for(var ue in ge)Object.prototype.hasOwnProperty.call(ge,ue)&&(q[ue]=ge[ue])}return q},l=r(1),c=(s(l),r(6)),u=s(c),f=r(7),p=s(f),g=r(8),E=s(g),C=r(9),P=s(C),M=r(10),O=s(M),x=r(11),j=s(x),U=r(14),Y=s(U),X=[],A=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){var q=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(q&&(A=!0),A)return X=(0,j.default)(X,v),(0,O.default)(X,v.once),X},T=function(){X=(0,Y.default)(),b()},w=function(){X.forEach(function(q,ce){q.node.removeAttribute("data-aos"),q.node.removeAttribute("data-aos-easing"),q.node.removeAttribute("data-aos-duration"),q.node.removeAttribute("data-aos-delay")})},_=function(q){return q===!0||q==="mobile"&&P.default.mobile()||q==="phone"&&P.default.phone()||q==="tablet"&&P.default.tablet()||typeof q=="function"&&q()===!0},y=function(q){v=o(v,q),X=(0,Y.default)();var ce=document.all&&!window.atob;return _(v.disable)||ce?w():(v.disableMutationObserver||E.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){b(!0)}):document.addEventListener(v.startEvent,function(){b(!0)}),window.addEventListener("resize",(0,p.default)(b,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,p.default)(b,v.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,O.default)(X,v.once)},v.throttleDelay)),v.disableMutationObserver||E.default.ready("[data-aos]",T),X)};n.exports={init:y,refresh:b,refreshHard:T}},function(n,i){},,,,,function(n,i){(function(r){function s(_,y,q){function ce(R){var L=Be,D=rt;return Be=rt=void 0,st=R,Ae=_.apply(D,L)}function ge(R){return st=R,Te=setTimeout(Ue,y),Bt?ce(R):Ae}function ue(R){var L=R-He,D=R-st,F=y-L;return I?T(F,je-D):F}function se(R){var L=R-He,D=R-st;return He===void 0||L>=y||L<0||I&&D>=je}function Ue(){var R=w();return se(R)?Vt(R):void(Te=setTimeout(Ue,ue(R)))}function Vt(R){return Te=void 0,S&&Be?ce(R):(Be=rt=void 0,Ae)}function bt(){Te!==void 0&&clearTimeout(Te),st=0,Be=He=rt=Te=void 0}function Ve(){return Te===void 0?Ae:Vt(w())}function it(){var R=w(),L=se(R);if(Be=arguments,rt=this,He=R,L){if(Te===void 0)return ge(He);if(I)return Te=setTimeout(Ue,y),ce(He)}return Te===void 0&&(Te=setTimeout(Ue,y)),Ae}var Be,rt,je,Ae,Te,He,st=0,Bt=!1,I=!1,S=!0;if(typeof _!="function")throw new TypeError(g);return y=f(y)||0,l(q)&&(Bt=!!q.leading,I="maxWait"in q,je=I?b(f(q.maxWait)||0,y):je,S="trailing"in q?!!q.trailing:S),it.cancel=bt,it.flush=Ve,it}function o(_,y,q){var ce=!0,ge=!0;if(typeof _!="function")throw new TypeError(g);return l(q)&&(ce="leading"in q?!!q.leading:ce,ge="trailing"in q?!!q.trailing:ge),s(_,y,{leading:ce,maxWait:y,trailing:ge})}function l(_){var y=typeof _>"u"?"undefined":p(_);return!!_&&(y=="object"||y=="function")}function c(_){return!!_&&(typeof _>"u"?"undefined":p(_))=="object"}function u(_){return(typeof _>"u"?"undefined":p(_))=="symbol"||c(_)&&v.call(_)==C}function f(_){if(typeof _=="number")return _;if(u(_))return E;if(l(_)){var y=typeof _.valueOf=="function"?_.valueOf():_;_=l(y)?y+"":y}if(typeof _!="string")return _===0?_:+_;_=_.replace(P,"");var q=O.test(_);return q||x.test(_)?j(_.slice(2),q?2:8):M.test(_)?E:+_}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},g="Expected a function",E=NaN,C="[object Symbol]",P=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,x=/^0o[0-7]+$/i,j=parseInt,U=(typeof r>"u"?"undefined":p(r))=="object"&&r&&r.Object===Object&&r,Y=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,X=U||Y||Function("return this")(),A=Object.prototype,v=A.toString,b=Math.max,T=Math.min,w=function(){return X.Date.now()};n.exports=o}).call(i,(function(){return this})())},function(n,i){(function(r){function s(w,_,y){function q(S){var R=it,L=Be;return it=Be=void 0,He=S,je=w.apply(L,R)}function ce(S){return He=S,Ae=setTimeout(se,_),st?q(S):je}function ge(S){var R=S-Te,L=S-He,D=_-R;return Bt?b(D,rt-L):D}function ue(S){var R=S-Te,L=S-He;return Te===void 0||R>=_||R<0||Bt&&L>=rt}function se(){var S=T();return ue(S)?Ue(S):void(Ae=setTimeout(se,ge(S)))}function Ue(S){return Ae=void 0,I&&it?q(S):(it=Be=void 0,je)}function Vt(){Ae!==void 0&&clearTimeout(Ae),He=0,it=Te=Be=Ae=void 0}function bt(){return Ae===void 0?je:Ue(T())}function Ve(){var S=T(),R=ue(S);if(it=arguments,Be=this,Te=S,R){if(Ae===void 0)return ce(Te);if(Bt)return Ae=setTimeout(se,_),q(Te)}return Ae===void 0&&(Ae=setTimeout(se,_)),je}var it,Be,rt,je,Ae,Te,He=0,st=!1,Bt=!1,I=!0;if(typeof w!="function")throw new TypeError(p);return _=u(_)||0,o(y)&&(st=!!y.leading,Bt="maxWait"in y,rt=Bt?v(u(y.maxWait)||0,_):rt,I="trailing"in y?!!y.trailing:I),Ve.cancel=Vt,Ve.flush=bt,Ve}function o(w){var _=typeof w>"u"?"undefined":f(w);return!!w&&(_=="object"||_=="function")}function l(w){return!!w&&(typeof w>"u"?"undefined":f(w))=="object"}function c(w){return(typeof w>"u"?"undefined":f(w))=="symbol"||l(w)&&A.call(w)==E}function u(w){if(typeof w=="number")return w;if(c(w))return g;if(o(w)){var _=typeof w.valueOf=="function"?w.valueOf():w;w=o(_)?_+"":_}if(typeof w!="string")return w===0?w:+w;w=w.replace(C,"");var y=M.test(w);return y||O.test(w)?x(w.slice(2),y?2:8):P.test(w)?g:+w}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},p="Expected a function",g=NaN,E="[object Symbol]",C=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,O=/^0o[0-7]+$/i,x=parseInt,j=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,U=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,Y=j||U||Function("return this")(),X=Object.prototype,A=X.toString,v=Math.max,b=Math.min,T=function(){return Y.Date.now()};n.exports=s}).call(i,(function(){return this})())},function(n,i){function r(f){var p=void 0,g=void 0;for(p=0;p<f.length;p+=1)if(g=f[p],g.dataset&&g.dataset.aos||g.children&&r(g.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function l(f,p){var g=window.document,E=s(),C=new E(c);u=p,C.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(f){f&&f.forEach(function(p){var g=Array.prototype.slice.call(p.addedNodes),E=Array.prototype.slice.call(p.removedNodes),C=g.concat(E);if(r(C))return u()})}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){};i.default={isSupported:o,ready:l}},function(n,i){function r(g,E){if(!(g instanceof E))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=(function(){function g(E,C){for(var P=0;P<C.length;P++){var M=C[P];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(E,M.key,M)}}return function(E,C,P){return C&&g(E.prototype,C),P&&g(E,P),E}})(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=(function(){function g(){r(this,g)}return o(g,[{key:"phone",value:function(){var E=s();return!(!l.test(E)&&!c.test(E.substr(0,4)))}},{key:"mobile",value:function(){var E=s();return!(!u.test(E)&&!f.test(E.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g})();i.default=new p},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,l,c){var u=o.node.getAttribute("data-aos-once");l>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!c&&u!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,l){var c=window.pageYOffset,u=window.innerHeight;o.forEach(function(f,p){r(f,u+c,l)})};i.default=s},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),l=s(o),c=function(u,f){return u.forEach(function(p,g){p.node.classList.add("aos-init"),p.position=(0,l.default)(p.node,f.offset)}),u};i.default=c},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),l=s(o),c=function(u,f){var p=0,g=0,E=window.innerHeight,C={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(C.offset&&!isNaN(C.offset)&&(g=parseInt(C.offset)),C.anchor&&document.querySelectorAll(C.anchor)&&(u=document.querySelectorAll(C.anchor)[0]),p=(0,l.default)(u).top,C.anchorPlacement){case"top-bottom":break;case"center-bottom":p+=u.offsetHeight/2;break;case"bottom-bottom":p+=u.offsetHeight;break;case"top-center":p+=E/2;break;case"bottom-center":p+=E/2+u.offsetHeight;break;case"center-center":p+=E/2+u.offsetHeight/2;break;case"top-top":p+=E;break;case"bottom-top":p+=u.offsetHeight+E;break;case"center-top":p+=u.offsetHeight/2+E}return C.anchorPlacement||C.offset||isNaN(f)||(g=f),p+g};i.default=c},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var o=0,l=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),l+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:l,left:o}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};i.default=r}])})})(Uo)),Uo.exports}var KT=GT();const YT=zT(KT),XT=()=>{};var Nd={};/**
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
 */const D_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const G=function(t,e){if(!t)throw Mr(e)},Mr=function(t){return new Error("Firebase Database ("+D_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const M_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},JT=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(g=64)),i.push(n[f],n[p],n[g],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||l==null||u==null||p==null)throw new QT;const g=s<<2|l>>4;if(i.push(g),u!==64){const E=l<<4&240|u>>2;if(i.push(E),p!==64){const C=u<<6&192|p;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L_=function(t){const e=M_(t);return Ha.encodeByteArray(e,!0)},F_=function(t){return L_(t).replace(/\./g,"")},ia=function(t){try{return Ha.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZT(t){return U_(void 0,t)}function U_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eS(n)||(t[n]=U_(t[n],e[n]));return t}function eS(t){return t!=="__proto__"}/**
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
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nS=()=>tS().__FIREBASE_DEFAULTS__,iS=()=>{if(typeof process>"u"||typeof Nd>"u")return;const t=Nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ia(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return XT()||nS()||iS()||rS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sS=t=>Lu()?.emulatorHosts?.[t],j_=()=>Lu()?.config,$_=t=>Lu()?.[`_${t}`];/**
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
 */class $s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function oS(t){return(await fetch(t,{credentials:"include"})).ok}const Es={};function aS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Es))Es[e]?t.emulator.push(e):t.prod.push(e);return t}function lS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Od=!1;function cS(t,e){if(typeof window>"u"||typeof document>"u"||!Wa(window.location.host)||Es[t]===e||Es[t]||Od)return;Es[t]=e;function n(g){return`__firebase__banner__${g}`}const i="__firebase__banner",s=aS().prod.length>0;function o(){const g=document.getElementById(i);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Od=!0,o()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=lS(i),E=n("text"),C=document.getElementById(E)||document.createElement("span"),P=n("learnmore"),M=document.getElementById(P)||document.createElement("a"),O=n("preprendIcon"),x=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(M,P);const U=u();c(x,O),j.append(x,C,M,U),document.body.appendChild(j)}s?(C.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function uS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function V_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function B_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hS(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fS(){return D_.NODE_ADMIN===!0}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function H_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}function dS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pS="FirebaseError";class $t extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=pS,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?gS(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new $t(r,l,i)}}function gS(t,e){return t.replace(mS,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const mS=/\{\$([^}]+)}/g;/**
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
 */function Vs(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
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
 */const W_=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Vs(ia(s[0])||""),n=Vs(ia(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},_S=function(t){const e=W_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yS=function(t){const e=W_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(xd(s)&&xd(o)){if(!Wi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function xd(t){return t!==null&&typeof t=="object"}/**
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
 */function Lr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class vS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)i[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):p<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const g=(r<<5|r>>>27)+u+c+f+i[p]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function bS(t,e){const n=new wS(t,e);return n.subscribe.bind(n)}class wS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");IS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Ul),r.error===void 0&&(r.error=Ul),r.complete===void 0&&(r.complete=Ul);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}function ES(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TS=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,G(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},za=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const SS=1e3,AS=2,CS=14400*1e3,kS=.5;function Dd(t,e=SS,n=AS){const i=e*Math.pow(n,t),r=Math.round(kS*i*(Math.random()-.5)*2);return Math.min(CS,i+r)}/**
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
 */function Bn(t){return t&&t._delegate?t._delegate:t}class vt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class RS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new $s;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NS(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PS(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PS(t){return t===Pi?void 0:t}function NS(t){return t.instantiationMode==="EAGER"}/**
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
 */class OS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const xS={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},DS=be.INFO,MS={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},LS=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=MS[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fr{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=LS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const FS=(t,e)=>e.some(n=>t instanceof n);let Md,Ld;function US(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,Oc=new WeakMap,q_=new WeakMap,jl=new WeakMap,ju=new WeakMap;function $S(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z_.set(n,t)}).catch(()=>{}),ju.set(e,t),e}function VS(t){if(Oc.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BS(t){xc=t(xc)}function HS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($l(this),e,...n);return q_.set(i,e.sort?e.sort():[e]),li(i)}:jS().includes(t)?function(...e){return t.apply($l(this),e),li(z_.get(this))}:function(...e){return li(t.apply($l(this),e))}}function WS(t){return typeof t=="function"?HS(t):(t instanceof IDBTransaction&&VS(t),FS(t,US())?new Proxy(t,xc):t)}function li(t){if(t instanceof IDBRequest)return $S(t);if(jl.has(t))return jl.get(t);const e=WS(t);return e!==t&&(jl.set(t,e),ju.set(e,t)),e}const $l=t=>ju.get(t);function G_(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),l=li(o);return i&&o.addEventListener("upgradeneeded",c=>{i(li(o.result),c.oldVersion,c.newVersion,li(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const zS=["get","getKey","getAll","getAllKeys","count"],qS=["put","add","delete","clear"],Vl=new Map;function Fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=qS.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||zS.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Vl.set(e,s),s}BS(t=>({...t,get:(e,n,i)=>Fd(e,n)||t.get(e,n,i),has:(e,n)=>!!Fd(e,n)||t.has(e,n)}));/**
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
 */class GS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KS(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function KS(t){return t.getComponent()?.type==="VERSION"}const Dc="@firebase/app",Ud="0.14.3";/**
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
 */const Ln=new Fr("@firebase/app"),YS="@firebase/app-compat",XS="@firebase/analytics-compat",JS="@firebase/analytics",QS="@firebase/app-check-compat",ZS="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",iA="@firebase/data-connect",rA="@firebase/database-compat",sA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",cA="@firebase/messaging",uA="@firebase/messaging-compat",hA="@firebase/performance",fA="@firebase/performance-compat",dA="@firebase/remote-config",pA="@firebase/remote-config-compat",gA="@firebase/storage",mA="@firebase/storage-compat",_A="@firebase/firestore",yA="@firebase/ai",vA="@firebase/firestore-compat",bA="firebase",wA="12.3.0";/**
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
 */const Mc="[DEFAULT]",IA={[Dc]:"fire-core",[YS]:"fire-core-compat",[JS]:"fire-analytics",[XS]:"fire-analytics-compat",[ZS]:"fire-app-check",[QS]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[iA]:"fire-data-connect",[rA]:"fire-rtdb-compat",[sA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[cA]:"fire-fcm",[uA]:"fire-fcm-compat",[hA]:"fire-perf",[fA]:"fire-perf-compat",[dA]:"fire-rc",[pA]:"fire-rc-compat",[gA]:"fire-gcs",[mA]:"fire-gcs-compat",[_A]:"fire-fst",[vA]:"fire-fst-compat",[yA]:"fire-vertex","fire-js":"fire-js",[bA]:"fire-js-all"};/**
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
 */const sa=new Map,EA=new Map,Lc=new Map;function jd(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t){const e=t.name;if(Lc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,t);for(const n of sa.values())jd(n,t);for(const n of EA.values())jd(n,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const TA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new vi("app","Firebase",TA);/**
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
 */class SA{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=wA;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Mc,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw ci.create("bad-app-name",{appName:String(r)});if(n||(n=j_()),!n)throw ci.create("no-options");const s=sa.get(r);if(s){if(Wi(n,s.options)&&Wi(i,s.config))return s;throw ci.create("duplicate-app",{appName:r})}const o=new OS(r);for(const c of Lc.values())o.addComponent(c);const l=new SA(n,i,o);return sa.set(r,l),l}function Y_(t=Mc){const e=sa.get(t);if(!e&&t===Mc&&j_())return K_();if(!e)throw ci.create("no-app",{appName:t});return e}function tt(t,e,n){let i=IA[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}Tt(new vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AA="firebase-heartbeat-database",CA=1,Bs="firebase-heartbeat-store";let Bl=null;function X_(){return Bl||(Bl=G_(AA,CA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw ci.create("idb-open",{originalErrorMessage:t.message})})),Bl}async function kA(t){try{const n=(await X_()).transaction(Bs),i=await n.objectStore(Bs).get(J_(t));return await n.done,i}catch(e){if(e instanceof $t)Ln.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:e?.message});Ln.warn(n.message)}}}async function $d(t,e){try{const i=(await X_()).transaction(Bs,"readwrite");await i.objectStore(Bs).put(e,J_(t)),await i.done}catch(n){if(n instanceof $t)Ln.warn(n.message);else{const i=ci.create("idb-set",{originalErrorMessage:n?.message});Ln.warn(i.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RA=1024,PA=30;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>PA){const r=DA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ln.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vd(),{heartbeatsToSend:n,unsentEntries:i}=OA(this._heartbeatsCache.heartbeats),r=F_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Ln.warn(e),""}}}function Vd(){return new Date().toISOString().substring(0,10)}function OA(t,e=RA){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Bd(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?H_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return F_(JSON.stringify({version:2,heartbeats:t})).length}function DA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function MA(t){Tt(new vt("platform-logger",e=>new GS(e),"PRIVATE")),Tt(new vt("heartbeat",e=>new NA(e),"PRIVATE")),tt(Dc,Ud,t),tt(Dc,Ud,"esm2020"),tt("fire-js","")}MA("");function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LA=Q_,Z_=new vi("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Fr("@firebase/auth");function FA(t,...e){oa.logLevel<=be.WARN&&oa.warn(`Auth (${bi}): ${t}`,...e)}function jo(t,...e){oa.logLevel<=be.ERROR&&oa.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,...e){throw $u(t,...e)}function mn(t,...e){return $u(t,...e)}function ey(t,e,n){const i={...LA(),[e]:n};return new vi("auth","Firebase",i).create(e,{appName:t.name})}function ji(t){return ey(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $u(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Z_.create(t,...e)}function te(t,e,...n){if(!t)throw $u(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function Un(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return typeof self<"u"&&self.location?.href||""}function UA(){return Hd()==="http:"||Hd()==="https:"}function Hd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||V_()||"connection"in navigator)?navigator.onLine:!0}function $A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Fu()||B_()}get(){return jA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HA=new Zs(3e4,6e4);function Bu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function jr(t,e,n,i,r={}){return ny(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=Lr({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return uS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Wa(t.emulatorConfig.host)&&(u.credentials="include"),ty.fetch()(await iy(t,t.config.apiHost,n,l),u)})}async function ny(t,e,n){t._canInitEmulator=!1;const i={...VA,...e};try{const r=new zA(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Eo(t,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ey(t,f,u);Fn(t,f)}}catch(r){if(r instanceof $t)throw r;Fn(t,"network-request-failed",{message:String(r)})}}async function WA(t,e,n,i,r={}){const s=await jr(t,e,n,i,r);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function iy(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?Vu(t.config,r):`${t.config.apiScheme}://${r}`;return BA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class zA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mn(this.auth,"network-request-failed")),HA.get())})}}function Eo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=mn(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function aa(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GA(t,e=!1){const n=Bn(t),i=await n.getIdToken(e),r=Hu(i);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:Ts(Hl(r.auth_time)),issuedAtTime:Ts(Hl(r.iat)),expirationTime:Ts(Hl(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Hl(t){return Number(t)*1e3}function Hu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const r=ia(n);return r?JSON.parse(r):(jo("Failed to decode base64 JWT payload"),null)}catch(r){return jo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Wd(t){const e=Hu(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof $t&&KA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function KA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){const e=t.auth,n=await t.getIdToken(),i=await Hs(t,aa(e,{idToken:n}));te(i?.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=r.providerUserInfo?.length?ry(r.providerUserInfo):[],o=JA(t.providerData,s),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Uc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function XA(t){const e=Bn(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JA(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ry(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){const n=await ny(t,{},async()=>{const i=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await iy(t,r,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:i};return t.emulatorConfig&&Wa(t.emulatorConfig.host)&&(c.credentials="include"),ty.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZA(t,e){return jr(t,"POST","/v2/accounts:revokeToken",Bu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Wd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await QA(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ir;return i&&(te(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new YA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Uc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GA(this,e)}reload(){return XA(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await Hs(this,qA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:E,providerData:C,stsTokenManager:P}=n;te(p&&P,e,"internal-error");const M=Ir.fromJSON(this.name,P);te(typeof p=="string",e,"internal-error"),Qn(i,e.name),Qn(r,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof E=="boolean",e,"internal-error"),Qn(s,e.name),Qn(o,e.name),Qn(l,e.name),Qn(c,e.name),Qn(u,e.name),Qn(f,e.name);const O=new Yt({uid:p,auth:e,email:r,emailVerified:g,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(O.providerData=C.map(x=>({...x}))),c&&(O._redirectEventId=c),O}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ir;r.updateFromServerResponse(n);const s=new Yt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await la(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];te(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ry(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!s?.length,l=new Ir;l.updateFromIdToken(i);const c=new Yt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Uc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function Rn(t){Un(t instanceof Function,"Expected a class definition");let e=zd.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zd.set(t,e),e)}/**
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
 */class sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sy.type="NONE";const qd=sy;/**
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
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=$o(this.userKey,r.apiKey,s),this.fullPersistenceKey=$o("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await aa(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Er(Rn(qd),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Rn(qd);const o=$o(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await aa(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Yt._fromGetAccountInfoResponse(e,g,f)}else p=Yt._fromJSON(e,f);u!==s&&(l=p),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Er(s,e,i):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hy(e))return"Blackberry";if(fy(e))return"Webos";if(ay(e))return"Safari";if((e.includes("chrome/")||ly(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function oy(t=yt()){return/firefox\//i.test(t)}function ay(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ly(t=yt()){return/crios\//i.test(t)}function cy(t=yt()){return/iemobile/i.test(t)}function uy(t=yt()){return/android/i.test(t)}function hy(t=yt()){return/blackberry/i.test(t)}function fy(t=yt()){return/webos/i.test(t)}function Wu(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=yt()){return Wu(t)&&!!window.navigator?.standalone}function tC(){return hS()&&document.documentMode===10}function dy(t=yt()){return Wu(t)||uy(t)||fy(t)||hy(t)||/windows phone/i.test(t)||cy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e=[]){let n;switch(t){case"Browser":n=Gd(yt());break;case"Worker":n=`${Gd(yt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${i}`}/**
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
 */class nC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function iC(t,e={}){return jr(t,"GET","/v2/passwordPolicy",Bu(t,e))}/**
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
 */const rC=6;class sC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await aa(this,{idToken:e}),i=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===o)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(ji(this));const n=e?Bn(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iC(this),n=new sC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ZA(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function zu(t){return Bn(t)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=bS(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aC(t){qu=t}function lC(t){return qu.loadJS(t)}function cC(){return qu.gapiScript}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Wi(s,e??{}))return r;Fn(r,"already-initialized")}return n.initialize({options:e})}function fC(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Rn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function dC(t,e,n){const i=zu(t);te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=gy(e),{host:o,port:l}=pC(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){te(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),te(Wi(u,i.config.emulator)&&Wi(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Wa(o)?(oS(`${s}//${o}${c}`),cS("Auth",!0)):gC()}function gy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pC(t){const e=gy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Yd(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Yd(o)}}}function Yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return WA(t,"POST","/v1/accounts:signInWithIdp",Bu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="http://localhost";class zi extends my{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new zi(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Tr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends _y{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends eo{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ri.credential(n,i)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends eo{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends eo{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return oi.credential(n,i)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Yt._fromIdTokenResponse(e,i,r),o=Xd(i);return new Nr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Xd(i);return new Nr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends $t{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ca(e,n,i,r)}}function yy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(t,s,e,i):s})}async function _C(t,e,n=!1){const i=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",i)}/**
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
 */async function yC(t,e,n=!1){const{auth:i}=t;if(Mt(i.app))return Promise.reject(ji(i));const r="reauthenticate";try{const s=await Hs(t,yy(i,r,e,t),n);te(s.idToken,i,"internal-error");const o=Hu(s.idToken);te(o,i,"internal-error");const{sub:l}=o;return te(t.uid===l,i,"user-mismatch"),Nr._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&Fn(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e,n=!1){if(Mt(t.app))return Promise.reject(ji(t));const i="signIn",r=await yy(t,i,e),s=await Nr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function bC(t,e,n,i){return Bn(t).onIdTokenChanged(e,n,i)}function wC(t,e,n){return Bn(t).beforeAuthStateChanged(e,n)}const ua="__sak";/**
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
 */class vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,EC=10;class by extends vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);tC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,EC):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}by.type="LOCAL";const TC=by;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wy.type="SESSION";const Iy=wy;/**
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
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new qa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await SC(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Gu("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function CC(t){_n().location.href=t}/**
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
 */function Ey(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function kC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RC(){return navigator?.serviceWorker?.controller||null}function PC(){return Ey()?self:null}/**
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
 */const Ty="firebaseLocalStorageDb",NC=1,ha="firebaseLocalStorage",Sy="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ga(t,e){return t.transaction([ha],e?"readwrite":"readonly").objectStore(ha)}function OC(){const t=indexedDB.deleteDatabase(Ty);return new to(t).toPromise()}function jc(){const t=indexedDB.open(Ty,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ha,{keyPath:Sy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ha)?e(i):(i.close(),await OC(),e(await jc()))})})}async function Jd(t,e,n){const i=Ga(t,!0).put({[Sy]:e,value:n});return new to(i).toPromise()}async function xC(t,e){const n=Ga(t,!1).get(e),i=await new to(n).toPromise();return i===void 0?null:i.value}function Qd(t,e){const n=Ga(t,!0).delete(e);return new to(n).toPromise()}const DC=800,MC=3;class Ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>MC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(PC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new AC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await Jd(e,ua,"1"),await Qd(e,ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jd(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>xC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ga(r,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ay.type="LOCAL";const LC=Ay;new Zs(3e4,6e4);/**
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
 */function FC(t,e){return e?Rn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ku extends my{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return vC(t.auth,new Ku(t),t.bypassAuthState)}function jC(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),yC(n,new Ku(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),_C(n,new Ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return jC;default:Fn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=new Zs(2e3,1e4);class fr extends Cy{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VC.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="pendingRedirect",Vo=new Map;class HC extends Cy{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const i=await WC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(t,e){const n=GC(e),i=qC(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function zC(t,e){Vo.set(t._key(),e)}function qC(t){return Rn(t._redirectPersistence)}function GC(t){return $o(BC,t.config.apiKey,t.name)}async function KC(t,e,n=!1){if(Mt(t.app))return Promise.reject(ji(t));const i=zu(t),r=FC(i,e),o=await new HC(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=600*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ky(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zd(e))}saveEventToCache(e){this.cachedEventUids.add(Zd(e)),this.lastProcessedEventTime=Date.now()}}function Zd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ky({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function JC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ky(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e2=/^https?/;async function t2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QC(t);for(const n of e)try{if(n2(n))return}catch{}Fn(t,"unauthorized-domain")}function n2(t){const e=Fc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!e2.test(n))return!1;if(ZC.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const i2=new Zs(3e4,6e4);function ep(){const t=_n().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function r2(t){return new Promise((e,n)=>{function i(){ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ep(),n(mn(t,"network-request-failed"))},timeout:i2.get()})}if(_n().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(_n().gapi?.load)i();else{const r=uC("iframefcb");return _n()[r]=()=>{gapi.load?i():n(mn(t,"network-request-failed"))},lC(`${cC()}?onload=${r}`).catch(s=>n(s))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function s2(t){return Bo=Bo||r2(t),Bo}/**
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
 */const o2=new Zs(5e3,15e3),a2="__/auth/iframe",l2="emulator/auth/iframe",c2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h2(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vu(e,l2):`https://${t.config.authDomain}/${a2}`,i={apiKey:e.apiKey,appName:t.name,v:bi},r=u2.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Lr(i).slice(1)}`}async function f2(t){const e=await s2(t),n=_n().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:h2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c2,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=_n().setTimeout(()=>{s(o)},o2.get());function c(){_n().clearTimeout(l),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const d2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p2=500,g2=600,m2="_blank",_2="http://localhost";class tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y2(t,e,n,i=p2,r=g2){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c={...d2,width:i.toString(),height:r.toString(),top:s,left:o},u=yt().toLowerCase();n&&(l=ly(u)?m2:n),oy(u)&&(e=e||_2,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(eC(u)&&l!=="_self")return v2(e||"",l),new tp(null);const p=window.open(e||"",l,f);te(p,t,"popup-blocked");try{p.focus()}catch{}return new tp(p)}function v2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const b2="__/auth/handler",w2="emulator/auth/handler",I2=encodeURIComponent("fac");async function np(t,e,n,i,r,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:bi,eventId:r};if(e instanceof _y){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${I2}=${encodeURIComponent(c)}`:"";return`${E2(t)}?${Lr(l).slice(1)}${u}`}function E2({config:t}){return t.emulator?Vu(t,w2):`https://${t.authDomain}/${b2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iy,this._completeRedirectFn=KC,this._overrideRedirectResult=zC}async _openPopup(e,n,i,r){Un(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await np(e,n,i,Fc(),r);return y2(e,s,Gu())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await np(e,n,i,Fc(),r);return CC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Un(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await f2(e),i=new XC(e);return n.register("authEvent",r=>(te(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wl,{type:Wl},r=>{const s=r?.[0]?.[Wl];s!==void 0&&n(!!s),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dy()||ay()||Wu()}}const S2=T2;var ip="@firebase/auth",rp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k2(t){Tt(new vt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(t)},u=new oC(i,r,s,c);return fC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Tt(new vt("auth-internal",e=>{const n=zu(e.getProvider("auth").getImmediate());return(i=>new A2(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(ip,rp,C2(t)),tt(ip,rp,"esm2020")}/**
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
 */const R2=300,P2=$_("authIdTokenMaxAge")||R2;let sp=null;const N2=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>P2)return;const r=n?.token;sp!==r&&(sp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function O2(t=Y_()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hC(t,{popupRedirectResolver:S2,persistence:[LC,TC,Iy]}),i=$_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=N2(s.toString());wC(n,o,()=>o(n.currentUser)),bC(n,l=>o(l))}}const r=sS("auth");return r&&dC(n,`http://${r}`),n}function x2(){return document.getElementsByTagName("head")?.[0]??document}aC({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=mn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",x2().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k2("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new Map,M2={activated:!1,tokenObservers:[]};function rn(t){return D2.get(t)||{...M2}}const op={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n,i,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $s,this.pending.promise.catch(n=>{}),await F2(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $s,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function F2(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},fa=new vi("appCheck","AppCheck",U2);function Ry(t){if(!rn(t).activated)throw fa.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="firebase-app-check-database",$2=1,$c="firebase-app-check-store";let To=null;function V2(){return To||(To=new Promise((t,e)=>{try{const n=indexedDB.open(j2,$2);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{e(fa.create("storage-open",{originalErrorMessage:i.target.error?.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore($c,{keyPath:"compositeKey"})}}}catch(n){e(fa.create("storage-open",{originalErrorMessage:n?.message}))}}),To)}function B2(t,e){return H2(W2(t),e)}async function H2(t,e){const i=(await V2()).transaction($c,"readwrite"),s=i.objectStore($c).put({compositeKey:t,value:e});return new Promise((o,l)=>{s.onsuccess=c=>{o()},i.onerror=c=>{l(fa.create("storage-set",{originalErrorMessage:c.target.error?.message}))}})}function W2(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Fr("@firebase/app-check");function ap(t,e){return Uu()?B2(t,e).catch(n=>{Vc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={error:"UNKNOWN_ERROR"};function q2(t){return Ha.encodeString(JSON.stringify(t),!1)}async function Bc(t,e=!1,n=!1){const i=t.app;Ry(i);const r=rn(i);let s=r.token,o;if(s&&!fs(s)&&(r.token=void 0,s=void 0),!s){const u=await r.cachedTokenPromise;u&&(fs(u)?s=u:await ap(i,void 0))}if(!e&&s&&fs(s))return{token:s.token};let l=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),l=!0),s=await rn(i).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Vc.warn(u.message):n&&Vc.error(u),o=u}let c;return s?o?fs(s)?c={token:s.token,internalError:o}:c=cp(o):(c={token:s.token},r.token=s,await ap(i,s)):c=cp(o),l&&X2(i,c),c}async function G2(t){const e=t.app;Ry(e);const{provider:n}=rn(e);{const{token:i}=await n.getToken();return{token:i}}}function K2(t,e,n,i){const{app:r}=t,s=rn(r),o={next:n,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&fs(s.token)){const l=s.token;Promise.resolve().then(()=>{n({token:l.token}),lp(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>lp(t))}function Py(t,e){const n=rn(t),i=n.tokenObservers.filter(r=>r.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function lp(t){const{app:e}=t,n=rn(e);let i=n.tokenRefresher;i||(i=Y2(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Y2(t){const{app:e}=t;return new L2(async()=>{const n=rn(e);let i;if(n.token?i=await Bc(t,!0):i=await Bc(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=rn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-300*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},op.RETRIAL_MIN_WAIT,op.RETRIAL_MAX_WAIT)}function X2(t,e){const n=rn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function fs(t){return t.expireTimeMillis-Date.now()>0}function cp(t){return{token:q2(z2),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rn(this.app);for(const n of e)Py(this.app,n.next);return Promise.resolve()}}function Q2(t,e){return new J2(t,e)}function Z2(t){return{getToken:e=>Bc(t,e),getLimitedUseToken:()=>G2(t),addTokenListener:e=>K2(t,"INTERNAL",e),removeTokenListener:e=>Py(t.app,e)}}const ek="@firebase/app-check",tk="0.11.0",nk="app-check",up="app-check-internal";function ik(){Tt(new vt(nk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Q2(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(up).initialize()})),Tt(new vt(up,t=>{const e=t.getProvider("app-check").getImmediate();return Z2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),tt(ek,tk)}ik();var rk="firebase",sk="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(rk,sk,"app");const ok=Symbol("firebaseApp");var hp={};const fp="@firebase/database",dp="1.1.0";/**
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
 */let Ny="";function ak(t){Ny=t}/**
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
 */class lk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ck{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Oy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lk(e)}}catch{}return new ck},Mi=Oy("localStorage"),uk=Oy("sessionStorage");/**
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
 */const Sr=new Fr("@firebase/database"),hk=(function(){let t=1;return function(){return t++}})(),xy=function(t){const e=TS(t),n=new vS;n.update(e);const i=n.digest();return Ha.encodeByteArray(i)},no=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=no.apply(null,i):typeof i=="object"?e+=et(i):e+=i,e+=" "}return e};let Ss=null,pp=!0;const fk=function(t,e){G(!0,"Can't turn on custom loggers persistently."),Sr.logLevel=be.VERBOSE,Ss=Sr.log.bind(Sr)},ut=function(...t){if(pp===!0&&(pp=!1,Ss===null&&uk.get("logging_enabled")===!0&&fk()),Ss){const e=no.apply(null,t);Ss(e)}},io=function(t){return function(...e){ut(t,...e)}},Hc=function(...t){const e="FIREBASE INTERNAL ERROR: "+no(...t);Sr.error(e)},qi=function(...t){const e=`FIREBASE FATAL ERROR: ${no(...t)}`;throw Sr.error(e),new Error(e)},Rt=function(...t){const e="FIREBASE WARNING: "+no(...t);Sr.warn(e)},dk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Or="[MIN_NAME]",Gi="[MAX_NAME]",$r=function(t,e){if(t===e)return 0;if(t===Or||e===Gi)return-1;if(e===Or||t===Gi)return 1;{const n=gp(t),i=gp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},gk=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},Yu=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=et(e[i]),n+=":",n+=Yu(t[e[i]]);return n+="}",n},My=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ly=function(t){G(!Dy(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,l,c;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},mk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_k=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},yk=new RegExp("^-?(0*)\\d{1,10}$"),vk=-2147483648,bk=2147483647,gp=function(t){if(yk.test(t)){const e=Number(t);if(e>=vk&&e<=bk)return e}return null},ro=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Rt("Exception was thrown by user callback.",n),e},Math.floor(0))}},wk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},As=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ik{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ek{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}}/**
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
 */const Xu="5",Fy="v",Uy="s",jy="r",$y="f",Vy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,By="ls",Hy="p",Wc="ac",Wy="websocket",zy="long_polling";/**
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
 */class Tk{constructor(e,n,i,r,s=!1,o="",l=!1,c=!1,u=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qy(t,e,n){G(typeof e=="string","typeof type must == string"),G(typeof n=="object","typeof params must == object");let i;if(e===Wy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zy)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sk(t)&&(n.ns=t.namespace);const r=[];return jt(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class Ak{constructor(){this.counters_={}}incrementCounter(e,n=1){Vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZT(this.counters_)}}/**
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
 */const zl={},ql={};function Ju(t){const e=t.toString();return zl[e]||(zl[e]=new Ak),zl[e]}function Ck(t,e){const n=t.toString();return ql[n]||(ql[n]=e()),ql[n]}/**
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
 */class kk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&ro(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mp="start",Rk="close",Pk="pLPCommand",Nk="pRTLPCB",Gy="id",Ky="pw",Yy="ser",Ok="cb",xk="seg",Dk="ts",Mk="d",Lk="dframe",Xy=1870,Jy=30,Fk=Xy-Jy,Uk=25e3,jk=3e4;class dr{constructor(e,n,i,r,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=Ju(n),this.urlFn=c=>(this.appCheckToken&&(c[Wc]=this.appCheckToken),qy(n,zy,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jk)),pk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qu((...s)=>{const[o,l,c,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mp)this.id=l,this.password=c;else if(o===Rk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[mp]="t",i[Yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ok]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Fy]=Xu,this.transportSessionId&&(i[Uy]=this.transportSessionId),this.lastSessionId&&(i[By]=this.lastSessionId),this.applicationId&&(i[Hy]=this.applicationId),this.appCheckToken&&(i[Wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vy.test(location.hostname)&&(i[jy]=$y);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dr.forceAllow_=!0}static forceDisallow(){dr.forceDisallow_=!0}static isAvailable(){return dr.forceAllow_?!0:!dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mk()&&!_k()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=L_(n),r=My(i,Fk);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Lk]="t",i[Gy]=e,i[Ky]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qu{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hk(),window[Pk+this.uniqueCallbackIdentifier]=e,window[Nk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ut("frame writing exception"),l.stack&&ut(l.stack),ut(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ut("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gy]=this.myID,e[Ky]=this.myPW,e[Yy]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jy+i.length<=Xy;){const o=this.pendingSegs.shift();i=i+"&"+xk+r+"="+o.seg+"&"+Dk+r+"="+o.ts+"&"+Mk+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Uk)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const $k=16384,Vk=45e3;let da=null;typeof MozWebSocket<"u"?da=MozWebSocket:typeof WebSocket<"u"&&(da=WebSocket);class qt{constructor(e,n,i,r,s,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=Ju(n),this.connURL=qt.connectionURL_(n,o,l,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Fy]=Xu,typeof location<"u"&&location.hostname&&Vy.test(location.hostname)&&(o[jy]=$y),n&&(o[Uy]=n),i&&(o[By]=i),r&&(o[Wc]=r),s&&(o[Hy]=s),qy(e,Wy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mi.set("previous_websocket_failure",!0);try{let i;fS(),this.mySock=new da(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&da!==null&&!qt.forceDisallow_}static previouslyFailed(){return Mi.isInMemoryStorage||Mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Vs(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(G(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=My(n,$k);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
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
 */class Ws{static get ALL_TRANSPORTS(){return[dr,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qt&&qt.isAvailable();let i=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[qt];else{const r=this.transports_=[];for(const s of Ws.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ws.globalTransportInitialized_=!1;/**
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
 */const Bk=6e4,Hk=5e3,Wk=10*1024,zk=100*1024,Gl="t",_p="d",qk="s",yp="r",Gk="e",vp="o",bp="a",wp="n",Ip="p",Kk="h";class Yk{constructor(e,n,i,r,s,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=As(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gl in e){const n=e[Gl];n===bp?this.upgradeIfSecondaryHealthy_():n===yp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),i=os("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ip,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),i=os("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(Gl,e);if(_p in e){const i=e[_p];if(n===Kk){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qk?this.onConnectionShutdown_(i):n===yp?this.onReset_(i):n===Gk?Hc("Server Error: "+i):n===vp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xu!==i&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),As(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):As(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ip,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qy{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Zy{constructor(e){this.allowedEvents_=e,this.listeners_={},G(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){G(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class pa extends Zy{static getInstance(){return new pa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return G(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ep=32,Tp=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new De("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mi(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function ev(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Xk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function Ke(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof De)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new De(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=fe(t),i=fe(e);if(n===null)return e;if(n===i)return Lt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iv(t,e){if(mi(t)!==mi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(mi(t)>mi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Jk{constructor(e,n){this.errorPrefix_=n,this.parts_=tv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=za(this.parts_[i]);rv(this)}}function Qk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=za(e),rv(t)}function Zk(t){const e=t.parts_.pop();t.byteLength_-=za(e),t.parts_.length>0&&(t.byteLength_-=1)}function rv(t){if(t.byteLength_>Tp)throw new Error(t.errorPrefix_+"has a key path longer than "+Tp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ep)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ep+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Zu extends Zy{static getInstance(){return new Zu}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return G(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const as=1e3,eR=300*1e3,Sp=30*1e3,tR=1.3,nR=3e4,iR="server_kill",Ap=3;class Nn extends Qy{constructor(e,n,i,r,s,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Nn.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=as,this.maxReconnectDelay_=eR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(et(s)),G(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new $s,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),G(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const c=l.d,u=l.s;Nn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vn(e,"w")){const i=Pr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_S(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hc("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){G(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nR&&(this.reconnectDelay_=as),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){G(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Yk(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,E=>{Rt(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(iR)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Rt(p),c())}}}interrupt(e){ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Yu(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new De(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ap&&(this.reconnectDelay_=Sp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ap&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ny.replace(/\./g,"-")]=1,Fu()?e["framework.cordova"]=1:B_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pa.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
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
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
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
 */class Ka{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new de(Or,e),r=new de(Or,n);return this.compare(i,r)!==0}minPost(){return de.MIN}}/**
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
 */let So;class sv extends Ka{static get __EMPTY_NODE(){return So}static set __EMPTY_NODE(e){So=e}compare(e,n){return $r(e.name,n.name)}isDefinedOn(e){throw Mr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(Gi,So)}makePost(e,n){return G(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,So)}toString(){return".key"}}const Ar=new sv;/**
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
 */class Ao{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Ge.RED,this.left=r??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,n,i,r,s){return new Ge(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class rR{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ao(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ao(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ao(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ao(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new rR;/**
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
 */function sR(t,e){return $r(t.name,e.name)}function eh(t,e){return $r(t,e)}/**
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
 */let zc;function oR(t){zc=t}const ov=function(t){return typeof t=="number"?"number:"+Ly(t):"string:"+t},av=function(t){if(t.isLeafNode()){const e=t.val();G(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vn(e,".sv"),"Priority must be a string or number.")}else G(t===zc||t.isEmpty(),"priority of unexpected type.");G(t===zc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cp;class qe{static set __childrenNodeConstructor(e){Cp=e}static get __childrenNodeConstructor(){return Cp}constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,G(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),av(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:fe(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=fe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(G(i!==".priority"||mi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ov(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ly(this.value_):e+=this.value_,this.lazyHash_=xy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(G(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(i);return G(r>=0,"Unknown leaf type: "+n),G(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let lv,cv;function aR(t){lv=t}function lR(t){cv=t}class cR extends Ka{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?$r(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Gi,new qe("[PRIORITY-POST]",cv))}makePost(e,n){const i=lv(e);return new de(n,new qe("[PRIORITY-POST]",i))}toString(){return".priority"}}const ft=new cR;/**
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
 */const uR=Math.log(2);class hR{constructor(e){const n=s=>parseInt(Math.log(s)/uR,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ga=function(t,e,n,i){t.sort(e);const r=function(c,u){const f=u-c;let p,g;if(f===0)return null;if(f===1)return p=t[c],g=n?n(p):p,new Ge(g,p.node,Ge.BLACK,null,null);{const E=parseInt(f/2,10)+c,C=r(c,E),P=r(E+1,u);return p=t[E],g=n?n(p):p,new Ge(g,p.node,Ge.BLACK,C,P)}},s=function(c){let u=null,f=null,p=t.length;const g=function(C,P){const M=p-C,O=p;p-=C;const x=r(M+1,O),j=t[M],U=n?n(j):j;E(new Ge(U,j.node,P,null,x))},E=function(C){u?(u.left=C,u=C):(f=C,u=C)};for(let C=0;C<c.count;++C){const P=c.nextBitIsOne(),M=Math.pow(2,c.count-(C+1));P?g(M,Ge.BLACK):(g(M,Ge.BLACK),g(M,Ge.RED))}return f},o=new hR(t.length),l=s(o);return new It(i||e,l)};/**
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
 */let Kl;const cr={};class Pn{static get Default(){return G(cr&&ft,"ChildrenNode.ts has not been loaded"),Kl=Kl||new Pn({".priority":cr},{".priority":ft}),Kl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return Vn(this.indexSet_,e.toString())}addIndex(e,n){G(e!==Ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(de.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let l;r?l=ga(i,e.getCompare()):l=cr;const c=e.toString(),u={...this.indexSet_};u[c]=e;const f={...this.indexes_};return f[c]=l,new Pn(f,u)}addToIndexes(e,n){const i=ra(this.indexes_,(r,s)=>{const o=Pr(this.indexSet_,s);if(G(o,"Missing index implementation for "+s),r===cr)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(de.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),ga(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let c=r;return l&&(c=c.remove(new de(e.name,l))),c.insert(e,e.node)}});return new Pn(i,this.indexSet_)}removeFromIndexes(e,n){const i=ra(this.indexes_,r=>{if(r===cr)return r;{const s=n.get(e.name);return s?r.remove(new de(e.name,s)):r}});return new Pn(i,this.indexSet_)}}/**
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
 */let ls;class we{static get EMPTY_NODE(){return ls||(ls=new we(new It(eh),null,Pn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&av(this.priorityNode_),this.children_.isEmpty()&&G(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ls}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ls:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(G(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new de(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ls:this.priorityNode_;return new we(r,o,s)}}updateChild(e,n){const i=fe(e);if(i===null)return n;{G(fe(e)!==".priority"||mi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ne(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(ft,(o,l)=>{n[o]=l.val(e),i++,s&&we.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ov(this.getPriority().val())+":"),this.forEachChild(ft,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":xy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new de(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,de.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===Ar||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ft),r=n.getIterator(ft);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ar?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fR extends we{constructor(){super(new It(eh),we.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const so=new fR;Object.defineProperties(de,{MIN:{value:new de(Or,we.EMPTY_NODE)},MAX:{value:new de(Gi,so)}});sv.__EMPTY_NODE=we.EMPTY_NODE;qe.__childrenNodeConstructor=we;oR(so);lR(so);/**
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
 */const dR=!0;function ht(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),G(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,ht(e))}if(!(t instanceof Array)&&dR){const n=[];let i=!1;if(jt(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ht(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new de(o,c)))}}),n.length===0)return we.EMPTY_NODE;const s=ga(n,sR,o=>o.name,eh);if(i){const o=ga(n,ft.getCompare());return new we(s,ht(e),new Pn({".priority":o},{".priority":ft}))}else return new we(s,ht(e),Pn.Default)}else{let n=we.EMPTY_NODE;return jt(t,(i,r)=>{if(Vn(t,i)&&i.substring(0,1)!=="."){const s=ht(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(ht(e))}}aR(ht);/**
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
 */class pR extends Ka{constructor(e){super(),this.indexPath_=e,G(!le(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?$r(e.name,n.name):s}makePost(e,n){const i=ht(e),r=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new de(n,r)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,so);return new de(Gi,e)}toString(){return tv(this.indexPath_,0).join("/")}}/**
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
 */class gR extends Ka{compare(e,n){const i=e.node.compareTo(n.node);return i===0?$r(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const i=ht(e);return new de(n,i)}toString(){return".value"}}const mR=new gR;/**
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
 */function _R(t){return{type:"value",snapshotNode:t}}function yR(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vR(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return G(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return G(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Or}hasEnd(){return this.endSet_}getIndexEndValue(){return G(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return G(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return G(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new th;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ft?n="$priority":t.index_===mR?n="$value":t.index_===Ar?n="$key":(G(t.index_ instanceof pR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=et(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+et(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=et(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ft&&(e.i=t.index_.toString()),e}/**
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
 */class ma extends Qy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(G(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=io("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ma.getListenId_(e,i),l={};this.listens_[o]=l;const c=Rp(e._queryParams);this.restRequest_(s+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(s,p,!1,i),Pr(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,n){const i=ma.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Rp(e._queryParams),i=e._path.toString(),r=new $s;return this.restRequest_(i+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Lr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Vs(l.responseText)}catch{Rt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&Rt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class wR{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _a(){return{value:null,children:new Map}}function uv(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=fe(e);t.children.has(i)||t.children.set(i,_a());const r=t.children.get(i);e=Ne(e),uv(r,e,n)}}function qc(t,e,n){t.value!==null?n(e,t.value):IR(t,(i,r)=>{const s=new De(e.toString()+"/"+i);qc(r,s,n)})}function IR(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class ER{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&jt(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Np=10*1e3,TR=30*1e3,SR=300*1e3;class AR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ER(e);const i=Np+(TR-Np)*Math.random();As(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;jt(e,(r,s)=>{s>0&&Vn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),As(this.reportStats_.bind(this),Math.floor(Math.random()*2*SR))}}/**
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
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function hv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ya{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=dn.ACK_USER_WRITE,this.source=hv()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return G(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new ya(Ee(),n,this.revert)}}else return G(fe(this.path)===e,"operationForChild called for unrelated child."),new ya(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ki{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=dn.OVERWRITE}operationForChild(e){return le(this.path)?new Ki(this.source,Ee(),this.snap.getImmediateChild(e)):new Ki(this.source,Ne(this.path),this.snap)}}/**
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
 */class zs{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=dn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Ki(this.source,Ee(),n.value):new zs(this.source,Ee(),n)}else return G(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zs(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class nh{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function CR(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bR(o.childName,o.snapshotNode))}),cs(t,r,"child_removed",e,i,n),cs(t,r,"child_added",e,i,n),cs(t,r,"child_moved",s,i,n),cs(t,r,"child_changed",e,i,n),cs(t,r,"value",e,i,n),r}function cs(t,e,n,i,r,s){const o=i.filter(l=>l.type===n);o.sort((l,c)=>RR(t,l,c)),o.forEach(l=>{const c=kR(t,l,s);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function kR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RR(t,e,n){if(e.childName==null||n.childName==null)throw Mr("Should only compare child_ events.");const i=new de(e.childName,e.snapshotNode),r=new de(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function pv(t,e){return{eventCache:t,serverCache:e}}function Cs(t,e,n,i){return pv(new nh(e,n,i),t.serverCache)}function gv(t,e,n,i){return pv(t.eventCache,new nh(e,n,i))}function Gc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yl;const PR=()=>(Yl||(Yl=new It(gk)),Yl);class Pe{static fromObject(e){let n=new Pe(null);return jt(e,(i,r)=>{n=n.set(new De(i),r)}),n}constructor(e,n=PR()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(le(e))return null;{const i=fe(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Ne(e),n);return s!=null?{path:Ke(new De(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=fe(e),i=this.children.get(n);return i!==null?i.subtree(Ne(e)):new Pe(null)}}set(e,n){if(le(e))return new Pe(n,this.children);{const i=fe(e),s=(this.children.get(i)||new Pe(null)).set(Ne(e),n),o=this.children.insert(i,s);return new Pe(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=fe(e),i=this.children.get(n);if(i){const r=i.remove(Ne(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=fe(e),i=this.children.get(n);return i?i.get(Ne(e)):null}}setTree(e,n){if(le(e))return n;{const i=fe(e),s=(this.children.get(i)||new Pe(null)).setTree(Ne(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Pe(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ke(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(le(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(Ne(e),Ke(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,i){if(le(e))return this;{this.value&&i(n,this.value);const r=fe(e),s=this.children.get(r);return s?s.foreachOnPath_(Ne(e),Ke(n,r),i):new Pe(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ke(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new Pe(null))}}function ks(t,e,n){if(le(e))return new en(new Pe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Lt(r,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(r,s))}else{const r=new Pe(n),s=t.writeTree_.setTree(e,r);return new en(s)}}}function Op(t,e,n){let i=t;return jt(n,(r,s)=>{i=ks(i,Ke(e,r),s)}),i}function xp(t,e){if(le(e))return en.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new en(n)}}function Kc(t,e){return er(t,e)!=null}function er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function Dp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ft,(i,r)=>{e.push(new de(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new de(i,r.value))}),e}function ui(t,e){if(le(e))return t;{const n=er(t,e);return n!=null?new en(new Pe(n)):new en(t.writeTree_.subtree(e))}}function Yc(t){return t.writeTree_.isEmpty()}function xr(t,e){return mv(Ee(),t.writeTree_,e)}function mv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(G(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=mv(Ke(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ke(t,".priority"),i)),n}}/**
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
 */function _v(t,e){return Iv(e,t)}function NR(t,e,n,i,r){G(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ks(t.visibleWrites,e,n)),t.lastWriteId=i}function OR(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function xR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);G(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&DR(l,i.path)?r=!1:Xt(i.path,l.path)&&(s=!0)),o--}if(r){if(s)return MR(t),!0;if(i.snap)t.visibleWrites=xp(t.visibleWrites,i.path);else{const l=i.children;jt(l,c=>{t.visibleWrites=xp(t.visibleWrites,Ke(i.path,c))})}return!0}else return!1}function DR(t,e){if(t.snap)return Xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xt(Ke(t.path,n),e))return!0;return!1}function MR(t){t.visibleWrites=yv(t.allWrites,LR,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function LR(t){return t.visible}function yv(t,e,n){let i=en.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let l;if(s.snap)Xt(n,o)?(l=Lt(n,o),i=ks(i,l,s.snap)):Xt(o,n)&&(l=Lt(o,n),i=ks(i,Ee(),s.snap.getChild(l)));else if(s.children){if(Xt(n,o))l=Lt(n,o),i=Op(i,l,s.children);else if(Xt(o,n))if(l=Lt(o,n),le(l))i=Op(i,Ee(),s.children);else{const c=Pr(s.children,fe(l));if(c){const u=c.getChild(Ne(l));i=ks(i,Ee(),u)}}}else throw Mr("WriteRecord should have .snap or .children")}}return i}function vv(t,e,n,i,r){if(!i&&!r){const s=er(t.visibleWrites,e);if(s!=null)return s;{const o=ui(t.visibleWrites,e);if(Yc(o))return n;if(n==null&&!Kc(o,Ee()))return null;{const l=n||we.EMPTY_NODE;return xr(o,l)}}}else{const s=ui(t.visibleWrites,e);if(!r&&Yc(s))return n;if(!r&&n==null&&!Kc(s,Ee()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Xt(u.path,e)||Xt(e,u.path))},l=yv(t.allWrites,o,e),c=n||we.EMPTY_NODE;return xr(l,c)}}}function FR(t,e,n){let i=we.EMPTY_NODE;const r=er(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ft,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=ui(t.visibleWrites,e);return n.forEachChild(ft,(o,l)=>{const c=xr(ui(s,new De(o)),l);i=i.updateImmediateChild(o,c)}),Dp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=ui(t.visibleWrites,e);return Dp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function UR(t,e,n,i,r){G(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(Kc(t.visibleWrites,s))return null;{const o=ui(t.visibleWrites,s);return Yc(o)?r.getChild(n):xr(o,r.getChild(n))}}function jR(t,e,n,i){const r=Ke(e,n),s=er(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=ui(t.visibleWrites,r);return xr(o,i.getNode().getImmediateChild(n))}else return null}function $R(t,e){return er(t.visibleWrites,e)}function VR(t,e,n,i,r,s,o){let l;const c=ui(t.visibleWrites,e),u=er(c,Ee());if(u!=null)l=u;else if(n!=null)l=xr(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let E=g.getNext();for(;E&&f.length<r;)p(E,i)!==0&&f.push(E),E=g.getNext();return f}else return[]}function BR(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Xc(t,e,n,i){return vv(t.writeTree,t.treePath,e,n,i)}function bv(t,e){return FR(t.writeTree,t.treePath,e)}function Mp(t,e,n,i){return UR(t.writeTree,t.treePath,e,n,i)}function va(t,e){return $R(t.writeTree,Ke(t.treePath,e))}function HR(t,e,n,i,r,s){return VR(t.writeTree,t.treePath,e,n,i,r,s)}function ih(t,e,n){return jR(t.writeTree,t.treePath,e,n)}function wv(t,e){return Iv(Ke(t.treePath,e),t.writeTree)}function Iv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class WR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;G(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),G(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,kp(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,vR(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,yR(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,kp(i,e.snapshotNode,r.oldSnap));else throw Mr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ev=new zR;class rh{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new nh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ih(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yi(this.viewCache_),s=HR(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function qR(t,e){G(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),G(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GR(t,e,n,i,r){const s=new WR;let o,l;if(n.type===dn.OVERWRITE){const u=n;u.source.fromUser?o=Jc(t,e,u.path,u.snap,i,r,s):(G(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=ba(t,e,u.path,u.snap,i,r,l,s))}else if(n.type===dn.MERGE){const u=n;u.source.fromUser?o=YR(t,e,u.path,u.children,i,r,s):(G(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Qc(t,e,u.path,u.children,i,r,l,s))}else if(n.type===dn.ACK_USER_WRITE){const u=n;u.revert?o=QR(t,e,u.path,i,r,s):o=XR(t,e,u.path,u.affectedTree,i,r,s)}else if(n.type===dn.LISTEN_COMPLETE)o=JR(t,e,n.path,i,s);else throw Mr("Unknown operation type: "+n.type);const c=s.getChanges();return KR(e,o,c),{viewCache:o,changes:c}}function KR(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Gc(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(_R(Gc(e)))}}function Tv(t,e,n,i,r,s){const o=e.eventCache;if(va(i,n)!=null)return e;{let l,c;if(le(n))if(G(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Yi(e),f=u instanceof we?u:we.EMPTY_NODE,p=bv(i,f);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const u=Xc(i,Yi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=fe(n);if(u===".priority"){G(mi(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=Mp(i,n,f,c);p!=null?l=t.filter.updatePriority(f,p):l=o.getNode()}else{const f=Ne(n);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Mp(i,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(f,g):p=o.getNode().getImmediateChild(u)}else p=ih(i,u,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),u,p,f,r,s):l=o.getNode()}}return Cs(e,l,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function ba(t,e,n,i,r,s,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const E=c.getNode().updateChild(n,i);u=f.updateFullNode(c.getNode(),E,null)}else{const E=fe(n);if(!c.isCompleteForPath(n)&&mi(n)>1)return e;const C=Ne(n),M=c.getNode().getImmediateChild(E).updateChild(C,i);E===".priority"?u=f.updatePriority(c.getNode(),M):u=f.updateChild(c.getNode(),E,M,C,Ev,null)}const p=gv(e,u,c.isFullyInitialized()||le(n),f.filtersNodes()),g=new rh(r,p,s);return Tv(t,p,n,r,g,l)}function Jc(t,e,n,i,r,s,o){const l=e.eventCache;let c,u;const f=new rh(r,e,s);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Cs(e,u,!0,t.filter.filtersNodes());else{const p=fe(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=Cs(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Ne(n),E=l.getNode().getImmediateChild(p);let C;if(le(g))C=i;else{const P=f.getCompleteChild(p);P!=null?ev(g)===".priority"&&P.getChild(nv(g)).isEmpty()?C=P:C=P.updateChild(g,i):C=we.EMPTY_NODE}if(E.equals(C))c=e;else{const P=t.filter.updateChild(l.getNode(),p,C,g,f,o);c=Cs(e,P,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Lp(t,e){return t.eventCache.isCompleteForChild(e)}function YR(t,e,n,i,r,s,o){let l=e;return i.foreach((c,u)=>{const f=Ke(n,c);Lp(e,fe(f))&&(l=Jc(t,l,f,u,r,s,o))}),i.foreach((c,u)=>{const f=Ke(n,c);Lp(e,fe(f))||(l=Jc(t,l,f,u,r,s,o))}),l}function Fp(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Qc(t,e,n,i,r,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;le(n)?u=i:u=new Pe(null).setTree(n,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const E=e.serverCache.getNode().getImmediateChild(p),C=Fp(t,E,g);c=ba(t,c,new De(p),C,r,s,o,l)}}),u.children.inorderTraversal((p,g)=>{const E=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!E){const C=e.serverCache.getNode().getImmediateChild(p),P=Fp(t,C,g);c=ba(t,c,new De(p),P,r,s,o,l)}}),c}function XR(t,e,n,i,r,s,o){if(va(r,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ba(t,e,n,c.getNode().getChild(n),r,s,l,o);if(le(n)){let u=new Pe(null);return c.getNode().forEachChild(Ar,(f,p)=>{u=u.set(new De(f),p)}),Qc(t,e,n,u,r,s,l,o)}else return e}else{let u=new Pe(null);return i.foreach((f,p)=>{const g=Ke(n,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),Qc(t,e,n,u,r,s,l,o)}}function JR(t,e,n,i,r){const s=e.serverCache,o=gv(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return Tv(t,o,n,i,Ev,r)}function QR(t,e,n,i,r,s){let o;if(va(i,n)!=null)return e;{const l=new rh(i,e,r),c=e.eventCache.getNode();let u;if(le(n)||fe(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Xc(i,Yi(e));else{const p=e.serverCache.getNode();G(p instanceof we,"serverChildren would be complete if leaf node"),f=bv(i,p)}f=f,u=t.filter.updateFullNode(c,f,s)}else{const f=fe(n);let p=ih(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=t.filter.updateChild(c,f,p,Ne(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,we.EMPTY_NODE,Ne(n),l,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xc(i,Yi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||va(i,Ee())!=null,Cs(e,u,o,t.filter.filtersNodes())}}function ZR(t,e){const n=Yi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Up(t,e,n,i){e.type===dn.MERGE&&e.source.queryId!==null&&(G(Yi(t.viewCache_),"We should always have a full cache before handling merges"),G(Gc(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=GR(t.processor_,r,e,n,i);return qR(t.processor_,s.viewCache),G(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,eP(t,s.changes,s.viewCache.eventCache.getNode())}function eP(t,e,n,i){const r=t.eventRegistrations_;return CR(t.eventGenerator_,e,n,r)}/**
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
 */let jp;function tP(t){G(!jp,"__referenceConstructor has already been defined"),jp=t}function sh(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return G(s!=null,"SyncTree gave us an op for an invalid query."),Up(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Up(o,e,n,i));return s}}function oh(t,e){let n=null;for(const i of t.views.values())n=n||ZR(i,e);return n}/**
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
 */let $p;function nP(t){G(!$p,"__referenceConstructor has already been defined"),$p=t}class Vp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=BR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iP(t,e,n,i,r){return NR(t.pendingWriteTree_,e,n,i,r),r?Xa(t,new Ki(hv(),e,n)):[]}function pr(t,e,n=!1){const i=OR(t.pendingWriteTree_,e);if(xR(t.pendingWriteTree_,e)){let s=new Pe(null);return i.snap!=null?s=s.set(Ee(),!0):jt(i.children,o=>{s=s.set(new De(o),!0)}),Xa(t,new ya(i.path,s,n))}else return[]}function Ya(t,e,n){return Xa(t,new Ki(fv(),e,n))}function rP(t,e,n){const i=Pe.fromObject(n);return Xa(t,new zs(fv(),e,i))}function sP(t,e,n,i){const r=kv(t,i);if(r!=null){const s=Rv(r),o=s.path,l=s.queryId,c=Lt(o,e),u=new Ki(dv(l),c,n);return Pv(t,o,u)}else return[]}function oP(t,e,n,i){const r=kv(t,i);if(r){const s=Rv(r),o=s.path,l=s.queryId,c=Lt(o,e),u=Pe.fromObject(n),f=new zs(dv(l),c,u);return Pv(t,o,f)}else return[]}function Sv(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Lt(o,e),u=oh(l,c);if(u)return u});return vv(r,e,s,n,!0)}function Xa(t,e){return Av(e,t.syncPointTree_,null,_v(t.pendingWriteTree_,Ee()))}function Av(t,e,n,i){if(le(t.path))return Cv(t,e,n,i);{const r=e.get(Ee());n==null&&r!=null&&(n=oh(r,Ee()));let s=[];const o=fe(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=wv(i,o);s=s.concat(Av(l,c,u,f))}return r&&(s=s.concat(sh(r,t,i,n))),s}}function Cv(t,e,n,i){const r=e.get(Ee());n==null&&r!=null&&(n=oh(r,Ee()));let s=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=wv(i,o),f=t.operationForChild(o);f&&(s=s.concat(Cv(f,l,c,u)))}),r&&(s=s.concat(sh(r,t,i,n))),s}function kv(t,e){return t.tagToQueryMap.get(e)}function Rv(t){const e=t.indexOf("$");return G(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function Pv(t,e,n){const i=t.syncPointTree_.get(e);G(i,"Missing sync point for query tag that we're tracking");const r=_v(t.pendingWriteTree_,e);return sh(i,n,r,null)}/**
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
 */class ah{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ah(n)}node(){return this.node_}}class lh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new lh(this.syncTree_,n)}node(){return Sv(this.syncTree_,this.path_)}}const aP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bp=function(t,e,n){if(!t||typeof t!="object")return t;if(G(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cP(t[".sv"],e);G(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:G(!1,"Unexpected server value: "+t)}},cP=function(t,e,n){t.hasOwnProperty("increment")||G(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&G(!1,"Unexpected increment value: "+i);const r=e.node();if(G(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},uP=function(t,e,n,i){return ch(e,new lh(n,t),i)},hP=function(t,e,n){return ch(t,new ah(e),n)};function ch(t,e,n){const i=t.getPriority().val(),r=Bp(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Bp(o.getValue(),e,n);return l!==o.getValue()||r!==o.getPriority().val()?new qe(l,ht(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new qe(r))),o.forEachChild(ft,(l,c)=>{const u=ch(c,e.getImmediateChild(l),n);u!==c&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class uh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function hh(t,e){let n=e instanceof De?e:new De(e),i=t,r=fe(n);for(;r!==null;){const s=Pr(i.node.children,r)||{children:{},childCount:0};i=new uh(r,i,s),n=Ne(n),r=fe(n)}return i}function Vr(t){return t.node.value}function Nv(t,e){t.node.value=e,Zc(t)}function Ov(t){return t.node.childCount>0}function fP(t){return Vr(t)===void 0&&!Ov(t)}function Ja(t,e){jt(t.node.children,(n,i)=>{e(new uh(n,t,i))})}function xv(t,e,n,i){n&&e(t),Ja(t,r=>{xv(r,e,!0)})}function dP(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function oo(t){return new De(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Zc(t){t.parent!==null&&pP(t.parent,t.name,t)}function pP(t,e,n){const i=fP(n),r=Vn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Zc(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Zc(t))}/**
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
 */const gP=/[\[\].#$\/\u0000-\u001F\u007F]/,mP=/[\[\].#$\u0000-\u001F\u007F]/,Xl=10*1024*1024,Dv=function(t){return typeof t=="string"&&t.length!==0&&!gP.test(t)},_P=function(t){return typeof t=="string"&&t.length!==0&&!mP.test(t)},yP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_P(t)},Mv=function(t,e,n){const i=n instanceof De?new Jk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(i)+" with contents = "+e.toString());if(Dy(e))throw new Error(t+"contains "+e.toString()+" "+Ni(i));if(typeof e=="string"&&e.length>Xl/3&&za(e)>Xl)throw new Error(t+"contains a string greater than "+Xl+" utf8 bytes "+Ni(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(jt(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ni(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qk(i,o),Mv(t,l,i),Zk(i)}),r&&s)throw new Error(t+' contains ".value" child '+Ni(i)+" in addition to actual children.")}},vP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yP(n))throw new Error(ES(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class bP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wP(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!iv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function tr(t,e,n){wP(t,n),IP(t,i=>Xt(i,e)||Xt(e,i))}function IP(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(EP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function EP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ss&&ut("event: "+n.toString()),ro(i)}}}/**
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
 */const TP="repo_interrupt",SP=25;class AP{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_a(),this.transactionQueueTree_=new uh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CP(t,e,n){if(t.stats_=Ju(t.repoInfo_),t.forceRestClient_||wk())t.server_=new ma(t.repoInfo_,(i,r,s,o)=>{Hp(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(i,r,s,o)=>{Hp(t,i,r,s,o)},i=>{Wp(t,i)},i=>{RP(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Ck(t.repoInfo_,()=>new AR(t.stats_,t.server_)),t.infoData_=new wR,t.infoSyncTree_=new Vp({startListening:(i,r,s,o)=>{let l=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(l=Ya(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),fh(t,"connected",!1),t.serverSyncTree_=new Vp({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(l,c)=>{const u=o(l,c);tr(t.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function kP(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Lv(t){return aP({timestamp:kP(t)})}function Hp(t,e,n,i,r){t.dataUpdateCount++;const s=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const c=ra(n,u=>ht(u));o=oP(t.serverSyncTree_,s,c,r)}else{const c=ht(n);o=sP(t.serverSyncTree_,s,c,r)}else if(i){const c=ra(n,u=>ht(u));o=rP(t.serverSyncTree_,s,c)}else{const c=ht(n);o=Ya(t.serverSyncTree_,s,c)}let l=s;o.length>0&&(l=ph(t,s)),tr(t.eventQueue_,l,o)}function Wp(t,e){fh(t,"connected",e),e===!1&&NP(t)}function RP(t,e){jt(e,(n,i)=>{fh(t,n,i)})}function fh(t,e,n){const i=new De("/.info/"+e),r=ht(n);t.infoData_.updateSnapshot(i,r);const s=Ya(t.infoSyncTree_,i,r);tr(t.eventQueue_,i,s)}function PP(t){return t.nextWriteId_++}function NP(t){Fv(t,"onDisconnectEvents");const e=Lv(t),n=_a();qc(t.onDisconnect_,Ee(),(r,s)=>{const o=uP(r,s,t.serverSyncTree_,e);uv(n,r,o)});let i=[];qc(n,Ee(),(r,s)=>{i=i.concat(Ya(t.serverSyncTree_,r,s));const o=MP(t,r);ph(t,o)}),t.onDisconnect_=_a(),tr(t.eventQueue_,Ee(),i)}function OP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(TP)}function Fv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ut(n,...e)}function Uv(t,e,n){return Sv(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function dh(t,e=t.transactionQueueTree_){if(e||Qa(t,e),Vr(e)){const n=$v(t,e);G(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&xP(t,oo(e),n)}else Ov(e)&&Ja(e,n=>{dh(t,n)})}function xP(t,e,n){const i=n.map(u=>u.currentWriteId),r=Uv(t,e,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const f=n[u];G(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Lt(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;t.server_.put(c.toString(),l,u=>{Fv(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(pr(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Qa(t,hh(t.transactionQueueTree_,e)),dh(t,t.transactionQueueTree_),tr(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)ro(p[g])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Rt("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}ph(t,e)}},o)}function ph(t,e){const n=jv(t,e),i=oo(n),r=$v(t,n);return DP(t,r,i),i}function DP(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Lt(n,c.path);let f=!1,p;if(G(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,r=r.concat(pr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=SP)f=!0,p="maxretry",r=r.concat(pr(t.serverSyncTree_,c.currentWriteId,!0));else{const g=Uv(t,c.path,o);c.currentInputSnapshot=g;const E=e[l].update(g.val());if(E!==void 0){Mv("transaction failed: Data returned ",E,c.path);let C=ht(E);typeof E=="object"&&E!=null&&Vn(E,".priority")||(C=C.updatePriority(g.getPriority()));const M=c.currentWriteId,O=Lv(t),x=hP(C,g,O);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=x,c.currentWriteId=PP(t),o.splice(o.indexOf(M),1),r=r.concat(iP(t.serverSyncTree_,c.path,x,c.currentWriteId,c.applyLocally)),r=r.concat(pr(t.serverSyncTree_,M,!0))}else f=!0,p="nodata",r=r.concat(pr(t.serverSyncTree_,c.currentWriteId,!0))}tr(t.eventQueue_,n,r),r=[],f&&(e[l].status=2,(function(g){setTimeout(g,Math.floor(0))})(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}Qa(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)ro(i[l]);dh(t,t.transactionQueueTree_)}function jv(t,e){let n,i=t.transactionQueueTree_;for(n=fe(e);n!==null&&Vr(i)===void 0;)i=hh(i,n),e=Ne(e),n=fe(e);return i}function $v(t,e){const n=[];return Vv(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Vv(t,e,n){const i=Vr(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ja(e,r=>{Vv(t,r,n)})}function Qa(t,e){const n=Vr(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Nv(e,n.length>0?n:void 0)}Ja(e,i=>{Qa(t,i)})}function MP(t,e){const n=oo(jv(t,e)),i=hh(t.transactionQueueTree_,e);return dP(i,r=>{Jl(t,r)}),Jl(t,i),xv(i,r=>{Jl(t,r)}),n}function Jl(t,e){const n=Vr(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(G(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(G(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(pr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Nv(e,void 0):n.length=s+1,tr(t.eventQueue_,oo(e),r);for(let o=0;o<i.length;o++)ro(i[o])}}/**
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
 */function LP(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function FP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Rt(`Invalid query segment '${n}' in query '${t}'`)}return e}const zp=function(t,e){const n=UP(t),i=n.namespace;n.domain==="firebase.com"&&qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tk(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new De(n.pathString)}},UP=function(t){let e="",n="",i="",r="",s="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(r=LP(t.substring(f,p)));const g=FP(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const E=e.slice(0,u);if(E.toLowerCase()==="localhost")n="localhost";else if(E.split(".").length<=2)n=E;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=i}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return le(this._path)?null:ev(this._path)}get ref(){return new Br(this._repo,this._path)}get _queryIdentifier(){const e=Pp(this._queryParams),n=Yu(e);return n==="{}"?"default":n}get _queryObject(){return Pp(this._queryParams)}isEqual(e){if(e=Bn(e),!(e instanceof gh))return!1;const n=this._repo===e._repo,i=iv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xk(this._path)}}class Br extends gh{constructor(e,n){super(e,n,new th,!1)}get parent(){const e=nv(this._path);return e===null?null:new Br(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}tP(Br);nP(Br);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="FIREBASE_DATABASE_EMULATOR_HOST",eu={};let $P=!1;function VP(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zp(s,r),l=o.repoInfo,c;typeof process<"u"&&hp&&(c=hp[jP]),c?(s=`http://${c}?ns=${l.namespace}`,o=zp(s,r),l=o.repoInfo):o.repoInfo.secure;const u=new Ek(t.name,t.options,e);vP("Invalid Firebase Database URL",o),le(o.path)||qi("Database URL must point to the root of a Firebase Database (not including a child path).");const f=HP(l,t,u,new Ik(t,n));return new WP(f,t)}function BP(t,e){const n=eu[e];(!n||n[t.key]!==t)&&qi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),OP(t),delete n[t.key]}function HP(t,e,n,i){let r=eu[e.name];r||(r={},eu[e.name]=r);let s=r[t.toURLString()];return s&&qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new AP(t,$P,n,i),r[t.toURLString()]=s,s}class WP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Br(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(BP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function zP(t){ak(bi),Tt(new vt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return VP(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),tt(fp,dp,t),tt(fp,dp,"esm2020")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zP();var qp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function b(){}b.prototype=v.prototype,A.F=v.prototype,A.prototype=new b,A.prototype.constructor=A,A.D=function(T,w,_){for(var y=Array(arguments.length-2),q=2;q<arguments.length;q++)y[q-2]=arguments[q];return v.prototype[w].apply(T,y)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,v,b){b||(b=0);const T=Array(16);if(typeof v=="string")for(var w=0;w<16;++w)T[w]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(w=0;w<16;++w)T[w]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=A.g[0],b=A.g[1],w=A.g[2];let _=A.g[3],y;y=v+(_^b&(w^_))+T[0]+3614090360&4294967295,v=b+(y<<7&4294967295|y>>>25),y=_+(w^v&(b^w))+T[1]+3905402710&4294967295,_=v+(y<<12&4294967295|y>>>20),y=w+(b^_&(v^b))+T[2]+606105819&4294967295,w=_+(y<<17&4294967295|y>>>15),y=b+(v^w&(_^v))+T[3]+3250441966&4294967295,b=w+(y<<22&4294967295|y>>>10),y=v+(_^b&(w^_))+T[4]+4118548399&4294967295,v=b+(y<<7&4294967295|y>>>25),y=_+(w^v&(b^w))+T[5]+1200080426&4294967295,_=v+(y<<12&4294967295|y>>>20),y=w+(b^_&(v^b))+T[6]+2821735955&4294967295,w=_+(y<<17&4294967295|y>>>15),y=b+(v^w&(_^v))+T[7]+4249261313&4294967295,b=w+(y<<22&4294967295|y>>>10),y=v+(_^b&(w^_))+T[8]+1770035416&4294967295,v=b+(y<<7&4294967295|y>>>25),y=_+(w^v&(b^w))+T[9]+2336552879&4294967295,_=v+(y<<12&4294967295|y>>>20),y=w+(b^_&(v^b))+T[10]+4294925233&4294967295,w=_+(y<<17&4294967295|y>>>15),y=b+(v^w&(_^v))+T[11]+2304563134&4294967295,b=w+(y<<22&4294967295|y>>>10),y=v+(_^b&(w^_))+T[12]+1804603682&4294967295,v=b+(y<<7&4294967295|y>>>25),y=_+(w^v&(b^w))+T[13]+4254626195&4294967295,_=v+(y<<12&4294967295|y>>>20),y=w+(b^_&(v^b))+T[14]+2792965006&4294967295,w=_+(y<<17&4294967295|y>>>15),y=b+(v^w&(_^v))+T[15]+1236535329&4294967295,b=w+(y<<22&4294967295|y>>>10),y=v+(w^_&(b^w))+T[1]+4129170786&4294967295,v=b+(y<<5&4294967295|y>>>27),y=_+(b^w&(v^b))+T[6]+3225465664&4294967295,_=v+(y<<9&4294967295|y>>>23),y=w+(v^b&(_^v))+T[11]+643717713&4294967295,w=_+(y<<14&4294967295|y>>>18),y=b+(_^v&(w^_))+T[0]+3921069994&4294967295,b=w+(y<<20&4294967295|y>>>12),y=v+(w^_&(b^w))+T[5]+3593408605&4294967295,v=b+(y<<5&4294967295|y>>>27),y=_+(b^w&(v^b))+T[10]+38016083&4294967295,_=v+(y<<9&4294967295|y>>>23),y=w+(v^b&(_^v))+T[15]+3634488961&4294967295,w=_+(y<<14&4294967295|y>>>18),y=b+(_^v&(w^_))+T[4]+3889429448&4294967295,b=w+(y<<20&4294967295|y>>>12),y=v+(w^_&(b^w))+T[9]+568446438&4294967295,v=b+(y<<5&4294967295|y>>>27),y=_+(b^w&(v^b))+T[14]+3275163606&4294967295,_=v+(y<<9&4294967295|y>>>23),y=w+(v^b&(_^v))+T[3]+4107603335&4294967295,w=_+(y<<14&4294967295|y>>>18),y=b+(_^v&(w^_))+T[8]+1163531501&4294967295,b=w+(y<<20&4294967295|y>>>12),y=v+(w^_&(b^w))+T[13]+2850285829&4294967295,v=b+(y<<5&4294967295|y>>>27),y=_+(b^w&(v^b))+T[2]+4243563512&4294967295,_=v+(y<<9&4294967295|y>>>23),y=w+(v^b&(_^v))+T[7]+1735328473&4294967295,w=_+(y<<14&4294967295|y>>>18),y=b+(_^v&(w^_))+T[12]+2368359562&4294967295,b=w+(y<<20&4294967295|y>>>12),y=v+(b^w^_)+T[5]+4294588738&4294967295,v=b+(y<<4&4294967295|y>>>28),y=_+(v^b^w)+T[8]+2272392833&4294967295,_=v+(y<<11&4294967295|y>>>21),y=w+(_^v^b)+T[11]+1839030562&4294967295,w=_+(y<<16&4294967295|y>>>16),y=b+(w^_^v)+T[14]+4259657740&4294967295,b=w+(y<<23&4294967295|y>>>9),y=v+(b^w^_)+T[1]+2763975236&4294967295,v=b+(y<<4&4294967295|y>>>28),y=_+(v^b^w)+T[4]+1272893353&4294967295,_=v+(y<<11&4294967295|y>>>21),y=w+(_^v^b)+T[7]+4139469664&4294967295,w=_+(y<<16&4294967295|y>>>16),y=b+(w^_^v)+T[10]+3200236656&4294967295,b=w+(y<<23&4294967295|y>>>9),y=v+(b^w^_)+T[13]+681279174&4294967295,v=b+(y<<4&4294967295|y>>>28),y=_+(v^b^w)+T[0]+3936430074&4294967295,_=v+(y<<11&4294967295|y>>>21),y=w+(_^v^b)+T[3]+3572445317&4294967295,w=_+(y<<16&4294967295|y>>>16),y=b+(w^_^v)+T[6]+76029189&4294967295,b=w+(y<<23&4294967295|y>>>9),y=v+(b^w^_)+T[9]+3654602809&4294967295,v=b+(y<<4&4294967295|y>>>28),y=_+(v^b^w)+T[12]+3873151461&4294967295,_=v+(y<<11&4294967295|y>>>21),y=w+(_^v^b)+T[15]+530742520&4294967295,w=_+(y<<16&4294967295|y>>>16),y=b+(w^_^v)+T[2]+3299628645&4294967295,b=w+(y<<23&4294967295|y>>>9),y=v+(w^(b|~_))+T[0]+4096336452&4294967295,v=b+(y<<6&4294967295|y>>>26),y=_+(b^(v|~w))+T[7]+1126891415&4294967295,_=v+(y<<10&4294967295|y>>>22),y=w+(v^(_|~b))+T[14]+2878612391&4294967295,w=_+(y<<15&4294967295|y>>>17),y=b+(_^(w|~v))+T[5]+4237533241&4294967295,b=w+(y<<21&4294967295|y>>>11),y=v+(w^(b|~_))+T[12]+1700485571&4294967295,v=b+(y<<6&4294967295|y>>>26),y=_+(b^(v|~w))+T[3]+2399980690&4294967295,_=v+(y<<10&4294967295|y>>>22),y=w+(v^(_|~b))+T[10]+4293915773&4294967295,w=_+(y<<15&4294967295|y>>>17),y=b+(_^(w|~v))+T[1]+2240044497&4294967295,b=w+(y<<21&4294967295|y>>>11),y=v+(w^(b|~_))+T[8]+1873313359&4294967295,v=b+(y<<6&4294967295|y>>>26),y=_+(b^(v|~w))+T[15]+4264355552&4294967295,_=v+(y<<10&4294967295|y>>>22),y=w+(v^(_|~b))+T[6]+2734768916&4294967295,w=_+(y<<15&4294967295|y>>>17),y=b+(_^(w|~v))+T[13]+1309151649&4294967295,b=w+(y<<21&4294967295|y>>>11),y=v+(w^(b|~_))+T[4]+4149444226&4294967295,v=b+(y<<6&4294967295|y>>>26),y=_+(b^(v|~w))+T[11]+3174756917&4294967295,_=v+(y<<10&4294967295|y>>>22),y=w+(v^(_|~b))+T[2]+718787259&4294967295,w=_+(y<<15&4294967295|y>>>17),y=b+(_^(w|~v))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+w&4294967295,A.g[3]=A.g[3]+_&4294967295}i.prototype.v=function(A,v){v===void 0&&(v=A.length);const b=v-this.blockSize,T=this.C;let w=this.h,_=0;for(;_<v;){if(w==0)for(;_<=b;)r(this,A,_),_+=this.blockSize;if(typeof A=="string"){for(;_<v;)if(T[w++]=A.charCodeAt(_++),w==this.blockSize){r(this,T),w=0;break}}else for(;_<v;)if(T[w++]=A[_++],w==this.blockSize){r(this,T),w=0;break}}this.h=w,this.o+=v},i.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var b=A.length-8;b<A.length;++b)A[b]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,b=0;b<4;++b)for(let T=0;T<32;T+=8)A[v++]=this.g[b]>>>T&255;return A};function s(A,v){var b=l;return Object.prototype.hasOwnProperty.call(b,A)?b[A]:b[A]=v(A)}function o(A,v){this.h=v;const b=[];let T=!0;for(let w=A.length-1;w>=0;w--){const _=A[w]|0;T&&_==v||(b[w]=_,T=!1)}this.g=b}var l={};function c(A){return-128<=A&&A<128?s(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return M(u(-A));const v=[];let b=1;for(let T=0;A>=b;T++)v[T]=A/b|0,b*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return M(f(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=u(Math.pow(v,8));let T=p;for(let _=0;_<A.length;_+=8){var w=Math.min(8,A.length-_);const y=parseInt(A.substring(_,_+w),v);w<8?(w=u(Math.pow(v,w)),T=T.j(w).add(u(y))):(T=T.j(b),T=T.add(u(y)))}return T}var p=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-M(this).m();let A=0,v=1;for(let b=0;b<this.g.length;b++){const T=this.i(b);A+=(T>=0?T:4294967296+T)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(P(this))return"-"+M(this).toString(A);const v=u(Math.pow(A,6));var b=this;let T="";for(;;){const w=U(b,v).g;b=O(b,w.j(v));let _=((b.g.length>0?b.g[0]:b.h)>>>0).toString(A);if(b=w,C(b))return _+T;for(;_.length<6;)_="0"+_;T=_+T}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=O(this,A),P(A)?-1:C(A)?0:1};function M(A){const v=A.g.length,b=[];for(let T=0;T<v;T++)b[T]=~A.g[T];return new o(b,~A.h).add(g)}t.abs=function(){return P(this)?M(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),b=[];let T=0;for(let w=0;w<=v;w++){let _=T+(this.i(w)&65535)+(A.i(w)&65535),y=(_>>>16)+(this.i(w)>>>16)+(A.i(w)>>>16);T=y>>>16,_&=65535,y&=65535,b[w]=y<<16|_}return new o(b,b[b.length-1]&-2147483648?-1:0)};function O(A,v){return A.add(M(v))}t.j=function(A){if(C(this)||C(A))return p;if(P(this))return P(A)?M(this).j(M(A)):M(M(this).j(A));if(P(A))return M(this.j(M(A)));if(this.l(E)<0&&A.l(E)<0)return u(this.m()*A.m());const v=this.g.length+A.g.length,b=[];for(var T=0;T<2*v;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(let w=0;w<A.g.length;w++){const _=this.i(T)>>>16,y=this.i(T)&65535,q=A.i(w)>>>16,ce=A.i(w)&65535;b[2*T+2*w]+=y*ce,x(b,2*T+2*w),b[2*T+2*w+1]+=_*ce,x(b,2*T+2*w+1),b[2*T+2*w+1]+=y*q,x(b,2*T+2*w+1),b[2*T+2*w+2]+=_*q,x(b,2*T+2*w+2)}for(A=0;A<v;A++)b[A]=b[2*A+1]<<16|b[2*A];for(A=v;A<2*v;A++)b[A]=0;return new o(b,0)};function x(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function j(A,v){this.g=A,this.h=v}function U(A,v){if(C(v))throw Error("division by zero");if(C(A))return new j(p,p);if(P(A))return v=U(M(A),v),new j(M(v.g),M(v.h));if(P(v))return v=U(A,M(v)),new j(M(v.g),v.h);if(A.g.length>30){if(P(A)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var b=g,T=v;T.l(A)<=0;)b=Y(b),T=Y(T);var w=X(b,1),_=X(T,1);for(T=X(T,2),b=X(b,2);!C(T);){var y=_.add(T);y.l(A)<=0&&(w=w.add(b),_=y),T=X(T,1),b=X(b,1)}return v=O(A,w.j(v)),new j(w,v)}for(w=p;A.l(v)>=0;){for(b=Math.max(1,Math.floor(A.m()/v.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),_=u(b),y=_.j(v);P(y)||y.l(A)>0;)b-=T,_=u(b),y=_.j(v);C(_)&&(_=g),w=w.add(_),A=O(A,y)}return new j(w,A)}t.B=function(A){return U(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),b=[];for(let T=0;T<v;T++)b[T]=this.i(T)&A.i(T);return new o(b,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),b=[];for(let T=0;T<v;T++)b[T]=this.i(T)|A.i(T);return new o(b,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),b=[];for(let T=0;T<v;T++)b[T]=this.i(T)^A.i(T);return new o(b,this.h^A.h)};function Y(A){const v=A.g.length+1,b=[];for(let T=0;T<v;T++)b[T]=A.i(T)<<1|A.i(T-1)>>>31;return new o(b,A.h)}function X(A,v){const b=v>>5;v%=32;const T=A.g.length-b,w=[];for(let _=0;_<T;_++)w[_]=v>0?A.i(_+b)>>>v|A.i(_+b+1)<<32-v:A.i(_+b);return new o(w,A.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,mh=o}).apply(typeof qp<"u"?qp:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=n(this);function r(a,h){if(h)e:{var d=i;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in d))break e;d=d[k]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,k,N){for(var W=Array(arguments.length-2),re=2;re<arguments.length;re++)W[re-2]=arguments[re];return h.prototype[k].apply(m,W)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function C(a,h){for(let m=1;m<arguments.length;m++){const k=arguments[m];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=a.length||0;const N=k.length||0;a.length=d+N;for(let W=0;W<N;W++)a[d+W]=k[W]}else a.push(k)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){o.setTimeout(()=>{throw a},0)}function O(){var a=A;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,d){const m=j.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var j=new P(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,X=!1,A=new x,v=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(b)}};function b(){for(var a;a=O();){try{a.h.call(a.g)}catch(d){M(d)}var h=j;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}X=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var _=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function q(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(q,w),q.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ce="closure_listenable_"+(Math.random()*1e6|0),ge=0;function ue(a,h,d,m,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=k,this.key=++ge,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ue(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Vt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function bt(a){const h={};for(const d in a)h[d]=a[d];return h}const Ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(a,h){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)a[d]=m[d];for(let N=0;N<Ve.length;N++)d=Ve[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Be(a){this.src=a,this.g={},this.h=0}Be.prototype.add=function(a,h,d,m,k){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=je(a,h,m,k);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new ue(h,this.src,N,!!m,k),h.fa=d,a.push(h)),h};function rt(a,h){const d=h.type;if(d in a.g){var m=a.g[d],k=Array.prototype.indexOf.call(m,h,void 0),N;(N=k>=0)&&Array.prototype.splice.call(m,k,1),N&&(se(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function je(a,h,d,m){for(let k=0;k<a.length;++k){const N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return k}return-1}var Ae="closure_lm_"+(Math.random()*1e6|0),Te={};function He(a,h,d,m,k){if(Array.isArray(h)){for(let N=0;N<h.length;N++)He(a,h[N],d,m,k);return null}return d=z(d),a&&a[ce]?a.J(h,d,l(m)?!!m.capture:!1,k):st(a,h,d,!1,m,k)}function st(a,h,d,m,k,N){if(!h)throw Error("Invalid event type");const W=l(k)?!!k.capture:!!k;let re=D(a);if(re||(a[Ae]=re=new Be(a)),d=re.add(h,d,m,W,N),d.proxy)return d;if(m=Bt(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)_||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),m,k);else if(a.attachEvent)a.attachEvent(R(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Bt(){function a(d){return h.call(a.src,a.listener,d)}const h=L;return a}function I(a,h,d,m,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)I(a,h[N],d,m,k);else m=l(m)?!!m.capture:!!m,d=z(d),a&&a[ce]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=je(h,d,m,k),d>-1&&(se(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=D(a))&&(h=a.g[h.toString()],a=-1,h&&(a=je(h,d,m,k)),(d=a>-1?h[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ce])rt(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(R(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=D(h))?(rt(d,a),d.h==0&&(d.src=null,h[Ae]=null)):se(a)}}}function R(a){return a in Te?Te[a]:Te[a]="on"+a}function L(a,h){if(a.da)a=!0;else{h=new q(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,h)}return a}function D(a){return a=a[Ae],a instanceof Be?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[F]||(a[F]=function(h){return a.handleEvent(h)}),a[F])}function B(){T.call(this),this.i=new Be(this),this.M=this,this.G=null}p(B,T),B.prototype[ce]=!0,B.prototype.removeEventListener=function(a,h,d,m){I(this,a,h,d,m)};function $(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var k=h;h=new w(m,a),it(h,k)}k=!0;let N,W;if(d)for(W=d.length-1;W>=0;W--)N=h.g=d[W],k=V(N,m,!0,h)&&k;if(N=h.g=a,k=V(N,m,!0,h)&&k,k=V(N,m,!1,h)&&k,d)for(W=0;W<d.length;W++)N=h.g=d[W],k=V(N,m,!1,h)&&k}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)se(d[m]);delete a.g[h],a.h--}}this.G=null},B.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},B.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function V(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let N=0;N<h.length;++N){const W=h[N];if(W&&!W.da&&W.capture==d){const re=W.listener,We=W.ha||W.src;W.fa&&rt(a.i,W),k=re.call(We,m)!==!1&&k}}return k&&!m.defaultPrevented}function Z(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function K(a){a.g=Z(()=>{a.g=null,a.i&&(a.i=!1,K(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Q extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(a){T.call(this),this.h=a,this.g={}}p(ee,T);var oe=[];function Ie(a){Ue(a.g,function(h,d){this.g.hasOwnProperty(d)&&S(h)},a),a.g={}}ee.prototype.N=function(){ee.Z.N.call(this),Ie(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pe=o.JSON.stringify,ot=o.JSON.parse,at=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function St(){}function Ot(){}var Ht={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nr(){w.call(this,"d")}p(nr,w);function Xe(){w.call(this,"c")}p(Xe,w);var Je={},Hr=null;function ir(){return Hr=Hr||new B}Je.Ia="serverreachability";function Ch(a){w.call(this,Je.Ia,a)}p(Ch,w);function Wr(a){const h=ir();$(h,new Ch(h))}Je.STAT_EVENT="statevent";function kh(a,h){w.call(this,Je.STAT_EVENT,a),this.stat=h}p(kh,w);function pt(a){const h=ir();$(h,new kh(h,a))}Je.Ja="timingevent";function Rh(a,h){w.call(this,Je.Ja,a),this.size=h}p(Rh,w);function zr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function qr(){this.g=!0}qr.prototype.ua=function(){this.g=!1};function yb(a,h,d,m,k,N){a.info(function(){if(a.g)if(N){var W="",re=N.split("&");for(let Se=0;Se<re.length;Se++){var We=re[Se].split("=");if(We.length>1){const ze=We[0];We=We[1];const on=ze.split("_");W=on.length>=2&&on[1]=="type"?W+(ze+"="+We+"&"):W+(ze+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function vb(a,h,d,m,k,N,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+W})}function rr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+wb(a,d)+(m?" "+m:"")})}function bb(a,h){a.info(function(){return"TIMEOUT: "+h})}qr.prototype.info=function(){};function wb(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var k=m[0];if(k!="noop"&&k!="stop"&&k!="close")for(let W=1;W<m.length;W++)m[W]=""}}}}return pe(N)}catch{return h}}var nl={NO_ERROR:0,TIMEOUT:8},Ib={},Ph;function il(){}p(il,St),il.prototype.g=function(){return new XMLHttpRequest},Ph=new il;function Gr(a){return encodeURIComponent(String(a))}function Eb(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Hn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nh}function Nh(){this.i=null,this.g="",this.h=!1}var Oh={},rl={};function sl(a,h,d){a.M=1,a.A=co(sn(h)),a.u=d,a.R=!0,xh(a,null)}function xh(a,h){a.F=Date.now(),lo(a),a.B=sn(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),qh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Nh,a.g=hf(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Q(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(oe[0]=k.toString()),k=oe);for(let N=0;N<k.length;N++){const W=He(d,k[N],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?bt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Wr(),yb(a.i,a.v,a.B,a.l,a.S,a.u)}Hn.prototype.ba=function(a){a=a.target;const h=this.O;h&&qn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const re=qn(this.g),We=this.g.ya(),Se=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Zh(this.g)))){this.K||re!=4||We==7||(We==8||Se<=0?Wr(3):Wr(2)),ol(this);var h=this.g.ca();this.X=h;var d=Tb(this);if(this.o=h==200,vb(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,k=this.g;if((m=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var N=m;break t}}N=null}if(a=N)rr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,al(this,a);else{this.o=!1,this.m=3,pt(12),wi(this),Kr(this);break e}}if(this.R){a=!0;let ze;for(;!this.K&&this.C<d.length;)if(ze=Sb(this,d),ze==rl){re==4&&(this.m=4,pt(14),a=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Oh){this.m=4,pt(15),rr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else rr(this.i,this.l,ze,null),al(this,ze);if(Dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||d.length!=0||this.h.h||(this.m=1,pt(16),a=!1),this.o=this.o&&a,!a)rr(this.i,this.l,d,"[Invalid Chunked Response]"),wi(this),Kr(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),gl(W),W.P=!0,pt(11))}}else rr(this.i,this.l,d,null),al(this,d);re==4&&wi(this),this.o&&!this.K&&(re==4?af(this.j,this):(this.o=!1,lo(this)))}else jb(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),wi(this),Kr(this)}}}catch{}finally{}};function Tb(a){if(!Dh(a))return a.g.la();const h=Zh(a.g);if(h==="")return"";let d="";const m=h.length,k=qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return wi(a),Kr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(k&&N==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Dh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Sb(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?rl:(d=Number(h.substring(d,m)),isNaN(d)?Oh:(m+=1,m+d>h.length?rl:(h=h.slice(m,m+d),a.C=m+d,h)))}Hn.prototype.cancel=function(){this.K=!0,wi(this)};function lo(a){a.T=Date.now()+a.H,Mh(a,a.H)}function Mh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=zr(u(a.aa,a),h)}function ol(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(bb(this.i,this.B),this.M!=2&&(Wr(),pt(17)),wi(this),this.m=2,Kr(this)):Mh(this,this.T-a)};function Kr(a){a.j.I==0||a.K||af(a.j,a)}function wi(a){ol(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ie(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function al(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||ll(d.h,a))){if(!a.L&&ll(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)go(d),fo(d);else break e;pl(d),pt(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=zr(u(d.Va,d),6e3));Uh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ei(d,11)}else if((a.L||d.g==a)&&go(d),!y(h))for(k=d.Ba.g.parse(h),h=0;h<k.length;h++){let Se=k[h];const ze=Se[0];if(!(ze<=d.K))if(d.K=ze,Se=Se[1],d.I==2)if(Se[0]=="c"){d.M=Se[1],d.ba=Se[2];const on=Se[3];on!=null&&(d.ka=on,d.j.info("VER="+d.ka));const Ti=Se[4];Ti!=null&&(d.za=Ti,d.j.info("SVER="+d.za));const Gn=Se[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(m=1.5*Gn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kn=a.g;if(Kn){const mo=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var N=m.h;N.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(cl(N,N.h),N.h=null))}if(m.G){const ml=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(m.wa=ml,Re(m.J,m.G,ml))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var W=a;if(m.na=uf(m,m.L?m.ba:null,m.W),W.L){jh(m.h,W);var re=W,We=m.O;We&&(re.H=We),re.D&&(ol(re),lo(re)),m.g=W}else sf(m);d.i.length>0&&po(d)}else Se[0]!="stop"&&Se[0]!="close"||Ei(d,7);else d.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Ei(d,7):dl(d):Se[0]!="noop"&&d.l&&d.l.qa(Se),d.A=0)}}Wr(4)}catch{}}var Ab=class{constructor(a,h){this.g=a,this.map=h}};function Lh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uh(a){return a.h?1:a.g?a.g.size:0}function ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cl(a,h){a.g?a.g.add(h):a.h=h}function jh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Lh.prototype.cancel=function(){if(this.i=$h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $h(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return E(a.i)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cb(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let k,N=null;m>=0?(k=a[d].substring(0,m),N=a[d].substring(m+1)):k=a[d],h(k,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wn?(this.l=a.l,Yr(this,a.j),this.o=a.o,this.g=a.g,Xr(this,a.u),this.h=a.h,ul(this,Gh(a.i)),this.m=a.m):a&&(h=String(a).match(Vh))?(this.l=!1,Yr(this,h[1]||"",!0),this.o=Jr(h[2]||""),this.g=Jr(h[3]||"",!0),Xr(this,h[4]),this.h=Jr(h[5]||"",!0),ul(this,h[6]||"",!0),this.m=Jr(h[7]||"")):(this.l=!1,this.i=new Zr(null,this.l))}Wn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Qr(h,Bh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qr(h,Bh,!0),"@"),a.push(Gr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Qr(d,d.charAt(0)=="/"?Pb:Rb,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Qr(d,Ob)),a.join("")},Wn.prototype.resolve=function(a){const h=sn(this);let d=!!a.j;d?Yr(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Xr(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var k=h.h.lastIndexOf("/");k!=-1&&(m=h.h.slice(0,k+1)+m)}if(k=m,k==".."||k==".")m="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){m=k.lastIndexOf("/",0)==0,k=k.split("/");const N=[];for(let W=0;W<k.length;){const re=k[W++];re=="."?m&&W==k.length&&N.push(""):re==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&W==k.length&&N.push("")):(N.push(re),m=!0)}m=N.join("/")}else m=k}return d?h.h=m:d=a.i.toString()!=="",d?ul(h,Gh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function sn(a){return new Wn(a)}function Yr(a,h,d){a.j=d?Jr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Xr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ul(a,h,d){h instanceof Zr?(a.i=h,xb(a.i,a.l)):(d||(h=Qr(h,Nb)),a.i=new Zr(h,a.l))}function Re(a,h,d){a.i.set(h,d)}function co(a){return Re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Jr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qr(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,kb),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bh=/[#\/\?@]/g,Rb=/[#\?:]/g,Pb=/[#\?]/g,Nb=/[#\?@]/g,Ob=/#/g;function Zr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ii(a){a.g||(a.g=new Map,a.h=0,a.i&&Cb(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Zr.prototype,t.add=function(a,h){Ii(this),this.i=null,a=sr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Hh(a,h){Ii(a),h=sr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wh(a,h){return Ii(a),h=sr(a,h),a.g.has(h)}t.forEach=function(a,h){Ii(this),this.g.forEach(function(d,m){d.forEach(function(k){a.call(h,k,m,this)},this)},this)};function zh(a,h){Ii(a);let d=[];if(typeof h=="string")Wh(a,h)&&(d=d.concat(a.g.get(sr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ii(this),this.i=null,a=sr(this,a),Wh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=zh(this,a),a.length>0?String(a[0]):h):h};function qh(a,h,d){Hh(a,h),d.length>0&&(a.i=null,a.g.set(sr(a,h),E(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const k=Gr(d);d=zh(this,d);for(let N=0;N<d.length;N++){let W=k;d[N]!==""&&(W+="="+Gr(d[N])),a.push(W)}}return this.i=a.join("&")};function Gh(a){const h=new Zr;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function sr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function xb(a,h){h&&!a.j&&(Ii(a),a.i=null,a.g.forEach(function(d,m){const k=m.toLowerCase();m!=k&&(Hh(this,m),qh(this,k,d))},a)),a.j=h}function Db(a,h){const d=new qr;if(o.Image){const m=new Image;m.onload=f(zn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(zn,d,"TestLoadImage: error",!1,h,m),m.onabort=f(zn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(zn,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Mb(a,h){const d=new qr,m=new AbortController,k=setTimeout(()=>{m.abort(),zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(k),N.ok?zn(d,"TestPingServer: ok",!0,h):zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),zn(d,"TestPingServer: error",!1,h)})}function zn(a,h,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function Lb(){this.g=new at}function hl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(hl,St),hl.prototype.g=function(){return new uo(this.i,this.h)};function uo(a,h){B.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(uo,B),t=uo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?es(this):ts(this),this.readyState==3&&Kh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,es(this))},t.Na=function(a){this.g&&(this.response=a,es(this))},t.ga=function(){this.g&&es(this)};function es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ts(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yh(a){let h="";return Ue(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function fl(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Yh(d),typeof a=="string"?d!=null&&Gr(d):Re(a,h,d))}function Le(a){B.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Le,B);var Fb=/^https?$/i,Ub=["POST","PUT"];t=Le.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ph.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Xh(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ub,h,void 0)>=0)||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Xh(this,N)}};function Xh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Jh(a),ho(a)}function Jh(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ho(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Qh(this):this.Xa())},t.Xa=function(){Qh(this)};function Qh(a){if(a.h&&typeof s<"u"){if(a.v&&qn(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),qn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=N===0){let W=String(a.D).match(Vh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),m=!Fb.test(W?W.toLowerCase():"")}d=m}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var k=qn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",Jh(a)}}finally{ho(a)}}}}function ho(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ot(h)}};function Zh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jb(a){const h={};a=(a.g&&qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=Eb(a[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}Vt(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ef(a){this.za=0,this.i=[],this.j=new qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,a),this.Za=ns("retryDelaySeedMs",1e4,a),this.Ta=ns("forwardChannelMaxRetries",2,a),this.va=ns("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Lh(a&&a.concurrentRequestLimit),this.Ba=new Lb,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ef.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){pt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=uf(this,null,this.W),po(this)};function dl(a){if(tf(a),a.I==3){var h=a.V++,d=sn(a.J);if(Re(d,"SID",a.M),Re(d,"RID",h),Re(d,"TYPE","terminate"),is(a,d),h=new Hn(a,a.j,h),h.M=2,h.A=co(sn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=hf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),lo(h)}cf(a)}function fo(a){a.g&&(gl(a),a.g.cancel(),a.g=null)}function tf(a){fo(a),a.v&&(o.clearTimeout(a.v),a.v=null),go(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function po(a){if(!Fh(a.h)&&!a.m){a.m=!0;var h=a.Ea;Y||v(),X||(Y(),X=!0),A.add(h,a),a.D=0}}function $b(a,h){return Uh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=zr(u(a.Ea,a,h),lf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Hn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=bt(N),it(N,this.U)):N=this.U),this.u!==null||this.R||(k.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=rf(this,k,h),d=sn(this.J),Re(d,"RID",a),Re(d,"CVER",22),this.G&&Re(d,"X-HTTP-Session-Id",this.G),is(this,d),N&&(this.R?h="headers="+Gr(Yh(N))+"&"+h:this.u&&fl(d,this.u,N)),cl(this.h,k),this.Ra&&Re(d,"TYPE","init"),this.S?(Re(d,"$req",h),Re(d,"SID","null"),k.U=!0,sl(k,d,null)):sl(k,d,h),this.I=2}}else this.I==3&&(a?nf(this,a):this.i.length==0||Fh(this.h)||nf(this))};function nf(a,h){var d;h?d=h.l:d=a.V++;const m=sn(a.J);Re(m,"SID",a.M),Re(m,"RID",d),Re(m,"AID",a.K),is(a,m),a.u&&a.o&&fl(m,a.u,a.o),d=new Hn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=rf(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),cl(a.h,d),sl(d,m,h)}function is(a,h){a.H&&Ue(a.H,function(d,m){Re(h,m,d)}),a.l&&Ue({},function(d,m){Re(h,m,d)})}function rf(a,h,d){d=Math.min(a.i.length,d);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let re=-1;for(;;){const We=["count="+d];re==-1?d>0?(re=k[0].g,We.push("ofs="+re)):re=0:We.push("ofs="+re);let Se=!0;for(let ze=0;ze<d;ze++){var N=k[ze].g;const on=k[ze].map;if(N-=re,N<0)re=Math.max(0,k[ze].g-100),Se=!1;else try{N="req"+N+"_"||"";try{var W=on instanceof Map?on:Object.entries(on);for(const[Ti,Gn]of W){let Kn=Gn;l(Gn)&&(Kn=pe(Gn)),We.push(N+Ti+"="+encodeURIComponent(Kn))}}catch(Ti){throw We.push(N+"type="+encodeURIComponent("_badmap")),Ti}}catch{m&&m(on)}}if(Se){W=We.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function sf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Y||v(),X||(Y(),X=!0),A.add(h,a),a.A=0}}function pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=zr(u(a.Da,a),lf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,of(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=zr(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),fo(this),of(this))};function gl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function of(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=sn(a.na);Re(h,"RID","rpc"),Re(h,"SID",a.M),Re(h,"AID",a.K),Re(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Re(h,"TO",a.ia),Re(h,"TYPE","xmlhttp"),is(a,h),a.u&&a.o&&fl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=co(sn(h)),d.u=null,d.R=!0,xh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,fo(this),pl(this),pt(19))};function go(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function af(a,h){var d=null;if(a.g==h){go(a),gl(a),a.g=null;var m=2}else if(ll(a.h,h))d=h.G,jh(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;m=ir(),$(m,new Rh(m,d)),po(a)}else sf(a);else if(k=h.m,k==3||k==0&&h.X>0||!(m==1&&$b(a,h)||m==2&&pl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Ei(a,5);break;case 4:Ei(a,10);break;case 3:Ei(a,6);break;default:Ei(a,2)}}}function lf(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Ei(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),m=a.Ua;const k=!m;m=new Wn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Yr(m,"https"),co(m),k?Db(m.toString(),d):Mb(m.toString(),d)}else pt(2);a.I=0,a.l&&a.l.pa(h),cf(a),tf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function cf(a){if(a.I=0,a.ja=[],a.l){const h=$h(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function uf(a,h,d){var m=d instanceof Wn?sn(d):new Wn(d);if(m.g!="")h&&(m.g=h+"."+m.g),Xr(m,m.u);else{var k=o.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const N=new Wn(null);m&&Yr(N,m),h&&(N.g=h),k&&Xr(N,k),d&&(N.h=d),m=N}return d=a.G,h=a.wa,d&&h&&Re(m,d,h),Re(m,"VER",a.ka),is(a,m),m}function hf(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Le(new hl({ab:d})):new Le(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ff(){}t=ff.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function xt(a,h){B.call(this),this.g=new ef(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new or(this)}p(xt,B),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){dl(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=pe(a),a=d);h.i.push(new Ab(h.Ya++,a)),h.I==3&&po(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,xt.Z.N.call(this)};function df(a){nr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(df,nr);function pf(){Xe.call(this),this.status=1}p(pf,Xe);function or(a){this.g=a}p(or,ff),or.prototype.ra=function(){$(this.g,"a")},or.prototype.qa=function(a){$(this.g,new df(a))},or.prototype.pa=function(a){$(this.g,new pf)},or.prototype.oa=function(){$(this.g,"b")},xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,nl.NO_ERROR=0,nl.TIMEOUT=8,nl.HTTP_ERROR=6,Ib.COMPLETE="complete",Ot.EventType=Ht,Ht.OPEN="a",Ht.CLOSE="b",Ht.ERROR="c",Ht.MESSAGE="d",B.prototype.listen=B.prototype.J,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Gp="@firebase/firestore",Kp="4.9.2";/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let Za="12.3.0";/**
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
 */const wa=new Fr("@firebase/firestore");function Jt(t,...e){if(wa.logLevel<=be.DEBUG){const n=e.map(Hv);wa.debug(`Firestore (${Za}): ${t}`,...n)}}function Bv(t,...e){if(wa.logLevel<=be.ERROR){const n=e.map(Hv);wa.error(`Firestore (${Za}): ${t}`,...n)}}function Hv(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function Ia(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Wv(t,i,n)}function Wv(t,e,n){let i=`FIRESTORE (${Za}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Bv(i),new Error(i)}function Rs(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||Wv(e,r,i)}/**
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
 */const _e={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ye extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ps{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class qP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ct.UNAUTHENTICATED)))}shutdown(){}}class KP{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Rs(this.o===void 0,42304);let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Ps;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ps,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{Jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ps)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(Jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Rs(typeof i.accessToken=="string",31837,{l:i}),new qP(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rs(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class YP{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XP{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new YP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Rs(this.o===void 0,3512);const i=s=>{s.error!=null&&Jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>i(s)))};const r=s=>{Jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Rs(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Yp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class ZP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=QP(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%62))}return i}}function _i(t,e){return t<e?-1:t>e?1:0}function eN(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const r=t.charAt(i),s=e.charAt(i);if(r!==s)return Ql(r)===Ql(s)?_i(r,s):Ql(r)?1:-1}return _i(t.length,e.length)}const tN=55296,nN=57343;function Ql(t){const e=t.charCodeAt(0);return e>=tN&&e<=nN}/**
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
 */const Xp="__name__";class cn{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ia(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Ia(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=cn.compareSegments(e.get(r),n.get(r));if(s!==0)return s}return _i(e.length,n.length)}static compareSegments(e,n){const i=cn.isNumericId(e),r=cn.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?cn.extractNumericId(e).compare(cn.extractNumericId(n)):eN(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mh.fromString(e.substring(4,e.length-2))}}class zt extends cn{construct(e,n,i){return new zt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ye(_e.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((r=>r.length>0)))}return new zt(n)}static emptyPath(){return new zt([])}}const iN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xi extends cn{construct(e,n,i){return new xi(e,n,i)}static isValidIdentifier(e){return iN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xp}static keyField(){return new xi([Xp])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ye(_e.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ye(_e.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ye(_e.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(i+=l,r++):(s(),r++)}if(s(),o)throw new ye(_e.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xi(n)}static emptyPath(){return new xi([])}}/**
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
 */class Li{constructor(e){this.path=e}static fromPath(e){return new Li(zt.fromString(e))}static fromName(e){return new Li(zt.fromString(e).popFirst(5))}static empty(){return new Li(zt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&zt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return zt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Li(new zt(e.slice()))}}function rN(t,e,n,i){if(e===!0&&i===!0)throw new ye(_e.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sN(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!sN(t))throw new ye(_e.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const o=t[i];if(r&&typeof o!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new ye(_e.INVALID_ARGUMENT,n);return!0}/**
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
 */const Jp=-62135596800,Qp=1e6;class hn{static now(){return hn.fromMillis(Date.now())}static fromDate(e){return hn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Qp);return new hn(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(_e.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(_e.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jp)throw new ye(_e.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(_e.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qp}_compareTo(e){return this.seconds===e.seconds?_i(this.nanoseconds,e.nanoseconds):_i(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:hn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,hn._jsonSchema))return new hn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}hn._jsonSchemaVersion="firestore/timestamp/1.0",hn._jsonSchema={type:$e("string",hn._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};function oN(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class aN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new aN("Invalid base64 string: "+s):s}})(e);return new Xi(n)}static fromUint8Array(e){const n=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new Xi(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _i(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xi.EMPTY_BYTE_STRING=new Xi("");const Zp="(default)";class Ea{constructor(e,n){this.projectId=e,this.database=n||Zp}static empty(){return new Ea("","")}get isDefaultDatabase(){return this.database===Zp}isEqual(e){return e instanceof Ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class lN{constructor(e,n=null,i=[],r=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function cN(t){return new lN(t)}/**
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
 */var eg,he;(he=eg||(eg={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new mh([4294967295,4294967295],0);/**
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
 */const uN=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=1048576;function Zl(){return typeof document<"u"?document:null}/**
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
 */class fN{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-i);r>0&&Jt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class _h{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,l=new _h(e,n,o,r,s);return l.start(i),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(_e.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var tg,ng;(ng=tg||(tg={})).Ma="default",ng.Cache="cache";/**
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
 */function dN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="firestore.googleapis.com",rg=!0;class sg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(_e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pN,this.ssl=rg}else this.host=e.host,this.ssl=e.ssl??rg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uN;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hN)throw new ye(_e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dN(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ye(_e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ye(_e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ye(_e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,r){return i.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gN{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(_e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(_e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new GP;switch(i.type){case"firstParty":return new XP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ye(_e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=ig.get(n);i&&(Jt("ComponentProvider","Removing Datastore"),ig.delete(n),i.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new yh(this.firestore,e,this._query)}}class pn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}toJSON(){return{type:pn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(ao(n,pn._jsonSchema))return new pn(e,i||null,new Li(zt.fromString(n.referencePath)))}}pn._jsonSchemaVersion="firestore/documentReference/1.0",pn._jsonSchema={type:$e("string",pn._jsonSchemaVersion),referencePath:$e("string")};class vh extends yh{constructor(e,n,i){super(e,n,cN(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new Li(e))}withConverter(e){return new vh(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="AsyncQueue";class ag{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fN(this,"async_queue_retry"),this._c=()=>{const i=Zl();i&&Jt(og,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Zl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ps;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!oN(e))throw e;Jt(og,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Bv("INTERNAL UNHANDLED ERROR: ",lg(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=_h.createAndSchedule(this,e,n,i,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&Ia(47125,{Pc:lg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function lg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mN extends gN{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new ag,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ag(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Xi.fromBase64String(e))}catch(n){throw new ye(_e.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(Xi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:$e("string",Cn._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(_e.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $i{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(_e.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(_e.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _i(this._lat,e._lat)||_i(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$i._jsonSchemaVersion}}static fromJSON(e){if(ao(e,$i._jsonSchema))return new $i(e.latitude,e.longitude)}}$i._jsonSchemaVersion="firestore/geoPoint/1.0",$i._jsonSchema={type:$e("string",$i._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,Vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Vi(e.vectorValues);throw new ye(_e.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vi._jsonSchemaVersion="firestore/vectorValue/1.0",Vi._jsonSchema={type:$e("string",Vi._jsonSchemaVersion),vectorValues:$e("object")};const _N=new RegExp("[~\\*/\\[\\]]");function yN(t,e,n){if(e.search(_N)>=0)throw cg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new zv(...e.split("."))._internalPath}catch{throw cg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function cg(t,e,n,i,r){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new ye(_e.INVALID_ARGUMENT,s+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vN extends qv{data(){return super.data()}}function Gv(t,e){return typeof e=="string"?yN(t,e):e instanceof zv?e._internalPath:e._delegate._internalPath}class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cr extends qv{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Gv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(_e.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Cr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cr._jsonSchema={type:$e("string",Cr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Ho extends Cr{data(e={}){return super.data(e)}}class Ns{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ko(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new Ho(this._firestore,this._userDataWriter,i.key,i,new ko(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(_e.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new Ho(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ko(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new Ho(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ko(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bN(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(_e.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ZP.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(n.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ia(61501,{type:t})}}Ns._jsonSchemaVersion="firestore/querySnapshot/1.0",Ns._jsonSchema={type:$e("string",Ns._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};(function(e,n=!0){(function(r){Za=r})(bi),Tt(new vt("firestore",((i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),l=new mN(new KP(i.getProvider("auth-internal")),new JP(o,i.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ye(_e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ea(u.options.projectId,f)})(o,r),o);return s={useFetchStreams:n,...s},l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),tt(Gp,Kp,e),tt(Gp,Kp,"esm2020")})();/**
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
 */const Kv="firebasestorage.googleapis.com",wN="storageBucket",IN=120*1e3,EN=600*1e3;/**
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
 */class vn extends $t{constructor(e,n,i=0){super(ec(e),`Firebase Storage: ${n} (${ec(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ec(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function ec(t){return"storage/"+t}function TN(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(yn.UNKNOWN,t)}function SN(){return new vn(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AN(){return new vn(yn.CANCELED,"User canceled the upload/download.")}function CN(t){return new vn(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function kN(t){return new vn(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ug(t){return new vn(yn.INVALID_ARGUMENT,t)}function Yv(){return new vn(yn.APP_DELETED,"The Firebase app was deleted.")}function RN(t){return new vn(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(i.path==="")return i;throw kN(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${r}/o${g}`,"i"),C={bucket:1,path:3},P=n===Kv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",O=new RegExp(`^https?://${P}/${r}/${M}`,"i"),j=[{regex:l,indices:c,postModify:s},{regex:E,indices:C,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<j.length;U++){const Y=j[U],X=Y.regex.exec(e);if(X){const A=X[Y.indices.bucket];let v=X[Y.indices.path];v||(v=""),i=new Qt(A,v),Y.postModify(i);break}}if(i==null)throw CN(e);return i}}class PN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NN(t,e,n){let i=1,r=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...M){u||(u=!0,e.apply(null,M))}function p(M){r=setTimeout(()=>{r=null,t(E,c())},M)}function g(){s&&clearTimeout(s)}function E(M,...O){if(u){g();return}if(M){g(),f.call(null,M,...O);return}if(c()||o){g(),f.call(null,M,...O);return}i<64&&(i*=2);let j;l===1?(l=2,j=0):j=(i+Math.random())*1e3,p(j)}let C=!1;function P(M){C||(C=!0,g(),!u&&(r!==null?(M||(l=2),clearTimeout(r),p(0)):M||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function ON(t){t(!1)}/**
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
 */function xN(t){return t!==void 0}function hg(t,e,n,i){if(i<e)throw ug(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ug(`Invalid value for '${t}'. Expected ${n} or less.`)}function DN(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Ta;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ta||(Ta={}));/**
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
 */function MN(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class LN{constructor(e,n,i,r,s,o,l,c,u,f,p,g=!0,E=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ro(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ta.NO_ERROR,c=s.getStatus();if(!l||MN(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Ta.ABORT;i(!1,new Ro(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Ro(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());xN(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=TN();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Yv():AN();o(c)}else{const c=SN();o(c)}};this.canceled_?n(!1,new Ro(!1,null,!0)):this.backoffId_=NN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ON(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ro{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function FN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $N(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VN(t,e,n,i,r,s,o=!0,l=!1){const c=DN(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return jN(f,e),FN(f,n),UN(f,s),$N(f,i),new LN(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,l)}/**
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
 */function BN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Sa{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Sa(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HN(this._location.path)}get storage(){return this._service}get parent(){const e=BN(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new Sa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RN(e)}}function fg(t,e){const n=e?.[wN];return n==null?null:Qt.makeFromBucketSpec(n,t)}class WN{constructor(e,n,i,r,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=Kv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IN,this._maxUploadRetryTime=EN,this._requests=new Set,r!=null?this._bucket=Qt.makeFromBucketSpec(r,this._host):this._bucket=fg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=fg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sa(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new PN(Yv());{const o=VN(e,this._appId,i,r,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const dg="@firebase/storage",pg="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="storage";function qN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new WN(n,i,r,e,bi)}function GN(){Tt(new vt(zN,qN,"PUBLIC").setMultipleInstances(!0)),tt(dg,pg,""),tt(dg,pg,"esm2020")}GN();function KN(t,{firebaseApp:e,modules:n=[]}){t.provide(ok,e);for(const i of n)i(e,t)}const Xv="@firebase/installations",bh="0.6.19";/**
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
 */const Jv=1e4,Qv=`w:${bh}`,Zv="FIS_v2",YN="https://firebaseinstallations.googleapis.com/v1",XN=3600*1e3,JN="installations",QN="Installations";/**
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
 */const ZN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ji=new vi(JN,QN,ZN);function eb(t){return t instanceof $t&&t.code.includes("request-failed")}/**
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
 */function tb({projectId:t}){return`${YN}/projects/${t}/installations`}function nb(t){return{token:t.token,requestStatus:2,expiresIn:tO(t.expiresIn),creationTime:Date.now()}}async function ib(t,e){const i=(await e.json()).error;return Ji.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eO(t,{refreshToken:e}){const n=rb(t);return n.append("Authorization",nO(e)),n}async function sb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tO(t){return Number(t.replace("s","000"))}function nO(t){return`${Zv} ${t}`}/**
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
 */async function iO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=tb(t),r=rb(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Zv,appId:t.appId,sdkVersion:Qv},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await sb(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:nb(u.authToken)}}else throw await ib("Create Installation",c)}/**
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
 */function ob(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sO=/^[cdef][\w-]{21}$/,tu="";function oO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aO(t);return sO.test(n)?n:tu}catch{return tu}}function aO(t){return rO(t).substr(0,22)}/**
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
 */function el(t){return`${t.appName}!${t.appId}`}/**
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
 */const ab=new Map;function lb(t,e){const n=el(t);cb(n,e),lO(n,e)}function cb(t,e){const n=ab.get(t);if(n)for(const i of n)i(e)}function lO(t,e){const n=cO();n&&n.postMessage({key:t,fid:e}),uO()}let Fi=null;function cO(){return!Fi&&"BroadcastChannel"in self&&(Fi=new BroadcastChannel("[Firebase] FID Change"),Fi.onmessage=t=>{cb(t.data.key,t.data.fid)}),Fi}function uO(){ab.size===0&&Fi&&(Fi.close(),Fi=null)}/**
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
 */const hO="firebase-installations-database",fO=1,Qi="firebase-installations-store";let tc=null;function wh(){return tc||(tc=G_(hO,fO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qi)}}})),tc}async function Aa(t,e){const n=el(t),r=(await wh()).transaction(Qi,"readwrite"),s=r.objectStore(Qi),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&lb(t,e.fid),e}async function ub(t){const e=el(t),i=(await wh()).transaction(Qi,"readwrite");await i.objectStore(Qi).delete(e),await i.done}async function tl(t,e){const n=el(t),r=(await wh()).transaction(Qi,"readwrite"),s=r.objectStore(Qi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&lb(t,l.fid),l}/**
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
 */async function Ih(t){let e;const n=await tl(t.appConfig,i=>{const r=dO(i),s=pO(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===tu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dO(t){const e=t||{fid:oO(),registrationStatus:0};return hb(e)}function pO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ji.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=gO(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mO(t)}:{installationEntry:e}}async function gO(t,e){try{const n=await iO(t,e);return Aa(t.appConfig,n)}catch(n){throw eb(n)&&n.customData.serverCode===409?await ub(t.appConfig):await Aa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mO(t){let e=await gg(t.appConfig);for(;e.registrationStatus===1;)await ob(100),e=await gg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ih(t);return i||n}return e}function gg(t){return tl(t,e=>{if(!e)throw Ji.create("installation-not-found");return hb(e)})}function hb(t){return _O(t)?{fid:t.fid,registrationStatus:0}:t}function _O(t){return t.registrationStatus===1&&t.registrationTime+Jv<Date.now()}/**
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
 */async function yO({appConfig:t,heartbeatServiceProvider:e},n){const i=vO(t,n),r=eO(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Qv,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await sb(()=>fetch(i,l));if(c.ok){const u=await c.json();return nb(u)}else throw await ib("Generate Auth Token",c)}function vO(t,{fid:e}){return`${tb(t)}/${e}/authTokens:generate`}/**
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
 */async function Eh(t,e=!1){let n;const i=await tl(t.appConfig,s=>{if(!fb(s))throw Ji.create("not-registered");const o=s.authToken;if(!e&&IO(o))return s;if(o.requestStatus===1)return n=bO(t,e),s;{if(!navigator.onLine)throw Ji.create("app-offline");const l=TO(s);return n=wO(t,l),l}});return n?await n:i.authToken}async function bO(t,e){let n=await mg(t.appConfig);for(;n.authToken.requestStatus===1;)await ob(100),n=await mg(t.appConfig);const i=n.authToken;return i.requestStatus===0?Eh(t,e):i}function mg(t){return tl(t,e=>{if(!fb(e))throw Ji.create("not-registered");const n=e.authToken;return SO(n)?{...e,authToken:{requestStatus:0}}:e})}async function wO(t,e){try{const n=await yO(t,e),i={...e,authToken:n};return await Aa(t.appConfig,i),n}catch(n){if(eb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ub(t.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Aa(t.appConfig,i)}throw n}}function fb(t){return t!==void 0&&t.registrationStatus===2}function IO(t){return t.requestStatus===2&&!EO(t)}function EO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+XN}function TO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function SO(t){return t.requestStatus===1&&t.requestTime+Jv<Date.now()}/**
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
 */async function AO(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ih(e);return i?i.catch(console.error):Eh(e).catch(console.error),n.fid}/**
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
 */async function CO(t,e=!1){const n=t;return await kO(n),(await Eh(n,e)).token}async function kO(t){const{registrationPromise:e}=await Ih(t);e&&await e}/**
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
 */function RO(t){if(!t||!t.options)throw nc("App Configuration");if(!t.name)throw nc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw nc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function nc(t){return Ji.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="installations",PO="installations-internal",NO=t=>{const e=t.getProvider("app").getImmediate(),n=RO(e),i=Ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},OO=t=>{const e=t.getProvider("app").getImmediate(),n=Ur(e,db).getImmediate();return{getId:()=>AO(n),getToken:r=>CO(n,r)}};function xO(){Tt(new vt(db,NO,"PUBLIC")),Tt(new vt(PO,OO,"PRIVATE"))}xO();tt(Xv,bh);tt(Xv,bh,"esm2020");/**
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
 */const Ca="analytics",DO="firebase_id",MO="origin",LO=60*1e3,FO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Th="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new Fr("@firebase/analytics");/**
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
 */const UO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pt=new vi("analytics","Analytics",UO);/**
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
 */function jO(t){if(!t.startsWith(Th)){const e=Pt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function pb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $O(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function VO(t,e){const n=$O("firebase-js-sdk-policy",{createScriptURL:jO}),i=document.createElement("script"),r=`${Th}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function BO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HO(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await pb(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){Et.error(l)}t("config",r,s)}async function WO(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await pb(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Et.error(s)}}function zO(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[l,c]=o;await WO(t,e,n,l,c)}else if(s==="config"){const[l,c]=o;await HO(t,e,n,i,l,c)}else if(s==="consent"){const[l,c]=o;t("consent",l,c)}else if(s==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return r}function qO(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=zO(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function GO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Th)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=30,YO=1e3;class XO{constructor(e={},n=YO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gb=new XO;function JO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QO(t){const{appId:e,apiKey:n}=t,i={method:"GET",headers:JO(n)},r=FO.replace("{app-id}",e),s=await fetch(r,i);if(s.status!==200&&s.status!==304){let o="";try{const l=await s.json();l.error?.message&&(o=l.error.message)}catch{}throw Pt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function ZO(t,e=gb,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw Pt.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Pt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nx;return setTimeout(async()=>{l.abort()},LO),mb({appId:i,apiKey:r,measurementId:s},o,l,e)}async function mb(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=gb){const{appId:s,measurementId:o}=t;try{await ex(i,e)}catch(l){if(o)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:o};throw l}try{const l=await QO(t);return r.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!tx(c)){if(r.deleteThrottleMetadata(s),o)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?Dd(n,r.intervalMillis,KO):Dd(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(s,f),Et.debug(`Calling attemptFetch again in ${u} millis`),mb(t,f,i,r)}}function ex(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(Pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tx(t){if(!(t instanceof $t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ix(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o={...i,send_to:s};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(){if(Uu())try{await H_()}catch(t){return Et.warn(Pt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Et.warn(Pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sx(t,e,n,i,r,s,o){const l=ZO(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Et.error(g)),e.push(l);const c=rx().then(g=>{if(g)return i.getId()}),[u,f]=await Promise.all([l,c]);GO(s)||VO(s,u.measurementId),r("js",new Date);const p=o?.config??{};return p[MO]="firebase",p.update=!0,f!=null&&(p[DO]=f),r("config",u.measurementId,p),u.measurementId}/**
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
 */class ox{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},_g=[];const yg={};let ic="dataLayer",ax="gtag",vg,_b,bg=!1;function lx(){const t=[];if(V_()&&t.push("This is a browser extension environment."),dS()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Pt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function cx(t,e,n){lx();const i=t.options.appId;if(!i)throw Pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pt.create("no-api-key");if(Os[i]!=null)throw Pt.create("already-exists",{id:i});if(!bg){BO(ic);const{wrappedGtag:s,gtagCore:o}=qO(Os,_g,yg,ic,ax);_b=s,vg=o,bg=!0}return Os[i]=sx(t,_g,yg,e,vg,ic,n),new ox(t)}function ux(t=Y_()){t=Bn(t);const e=Ur(t,Ca);return e.isInitialized()?e.getImmediate():hx(t)}function hx(t,e={}){const n=Ur(t,Ca);if(n.isInitialized()){const r=n.getImmediate();if(Wi(e,n.getOptions()))return r;throw Pt.create("already-initialized")}return n.initialize({options:e})}function fx(t,e,n,i){t=Bn(t),ix(_b,Os[t.app.options.appId],e,n,i).catch(r=>Et.error(r))}const wg="@firebase/analytics",Ig="0.10.18";function dx(){Tt(new vt(Ca,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return cx(i,r,n)},"PUBLIC")),Tt(new vt("analytics-internal",t,"PRIVATE")),tt(wg,Ig),tt(wg,Ig,"esm2020");function t(e){try{const n=e.getProvider(Ca).getImmediate();return{logEvent:(i,r,s)=>fx(n,i,r,s)}}catch(n){throw Pt.create("interop-component-reg-failed",{reason:n})}}}dx();const px={apiKey:"AIzaSyDQrN8Y6tIrXcJvZyTLmLilz1Gs2ZEKW9s",authDomain:"erika-website-c5d6a.firebaseapp.com",projectId:"erika-website-c5d6a",storageBucket:"erika-website-c5d6a.firebasestorage.app",messagingSenderId:"914877650590",appId:"1:914877650590:web:9da36dbdecaae4ae85cd8f",measurementId:"G-E1GVYJ80QT"},Sh=K_(px);O2(Sh);ux(Sh);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var gx={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},mx={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},_x={prefix:"fas",iconName:"building-columns",icon:[512,512,["bank","institution","museum","university"],"f19c","M271.9 20.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 208 32 208l32 0 0 208 0 0-51.2 38.4C4.7 460.4 0 469.9 0 480 0 497.7 14.3 512 32 512l448 0c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6l-51.2-38.4 0-208 32 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15.1-36l-224-128zM400 208l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},yx={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var vx={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},bx={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},wx={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},Ix={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ex={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]},Tx={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]},Sx={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};function Ax(){NT.add(gx,mx,yx,_x,vx,bx,Tx,Ex,wx,Ix,Sx)}YT.init();Ax();const Ah=yw(Sw);Ah.component("font-awesome-icon",WT);Ah.use(KN,{firebaseApp:Sh,modules:[]});Ah.mount("#app");export{Wt as F,Nx as T,Tw as _,Cx as a,R1 as b,ti as c,mu as d,bs as e,kx as f,Me as g,Rx as h,P1 as i,Yn as j,Jn as k,yu as l,Px as m,ou as n,Tm as o,WT as p,yr as r,Zb as t,In as u,x0 as w};
