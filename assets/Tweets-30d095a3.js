import{R as w,u as Ct,r as O,s as m,a as u,b as j,j as o,c as St,p as At,d as Rt,G as Bt,U as C,e as c,f as zt,g as Lt,h as Dt,i as Nt}from"./index-541af7a1.js";import{p as x,q as Mt,W as qt}from"./index.module-eb8a33de.js";function Tt(e=w){const t=e===w?Ct:()=>O.useContext(e);return function(){const{store:a}=t();return a}}const It=Tt();function Ut(e=w){const t=e===w?It:Tt(e);return function(){return t().dispatch}}const S=Ut();var T="NOT_FOUND";function Ht(e){var t;return{get:function(a){return t&&e(t.key,a)?t.value:T},put:function(a,r){t={key:a,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Wt(e,t){var n=[];function a(i){var s=n.findIndex(function(b){return t(i,b.key)});if(s>-1){var p=n[s];return s>0&&(n.splice(s,1),n.unshift(p)),p.value}return T}function r(i,s){a(i)===T&&(n.unshift({key:i,value:s}),n.length>e&&n.pop())}function l(){return n}function g(){n=[]}return{get:a,put:r,getEntries:l,clear:g}}var Gt=function(t,n){return t===n};function Kt(e){return function(n,a){if(n===null||a===null||n.length!==a.length)return!1;for(var r=n.length,l=0;l<r;l++)if(!e(n[l],a[l]))return!1;return!0}}function Vt(e,t){var n=typeof t=="object"?t:{equalityCheck:t},a=n.equalityCheck,r=a===void 0?Gt:a,l=n.maxSize,g=l===void 0?1:l,i=n.resultEqualityCheck,s=Kt(r),p=g===1?Ht(s):Wt(g,s);function b(){var f=p.get(arguments);if(f===T){if(f=e.apply(null,arguments),i){var h=p.getEntries(),v=h.find(function(y){return i(y.value,f)});v&&(f=v.value)}p.put(arguments,f)}return f}return b.clearCache=function(){return p.clear()},b}function Xt(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(a){return typeof a=="function"})){var n=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function Yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=function(){for(var g=arguments.length,i=new Array(g),s=0;s<g;s++)i[s]=arguments[s];var p=0,b,f={memoizeOptions:void 0},h=i.pop();if(typeof h=="object"&&(f=h,h=i.pop()),typeof h!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var v=f,y=v.memoizeOptions,k=y===void 0?n:y,Pt=Array.isArray(k)?k:[k],F=Xt(i),B=e.apply(void 0,[function(){return p++,h.apply(null,arguments)}].concat(Pt)),z=e(function(){for(var L=[],$t=F.length,E=0;E<$t;E++)L.push(F[E].apply(null,arguments));return b=B.apply(null,L),b});return Object.assign(z,{resultFunc:h,memoizedResultFunc:B,dependencies:F,lastResult:function(){return b},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),z};return r}var Jt=Yt(Vt);const Qt=e=>e.tweets.items,Zt=e=>e.tweets.isLoading,tn=e=>e.tweets.error,kt=e=>e.filters.status,nn=Jt([Qt,kt],(e,t)=>{switch(t){case m.follow:return e.filter(n=>!n.isFollowing);case m.following:return e.filter(n=>n.isFollowing);default:return e}}),en=u.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`,P=u.button`
    padding: 8px 10px;
    background: ${e=>e.selected?"#5CD3A8":"#EBD8FF"};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-size: 12px;
    font-weight: 500;
   
`,rn=()=>{const e=S(),t=j(kt),n=a=>e(St(a));return o.jsxs(en,{children:[o.jsx(P,{selected:t===m.all,onClick:()=>n(m.all),children:"All"}),o.jsx(P,{selected:t===m.follow,onClick:()=>n(m.follow),children:"Follow"}),o.jsx(P,{selected:t===m.following,onClick:()=>n(m.following),children:"Following"})]})},an=e=>{const[t,n]=O.useState(e);return{perPage:t,loadMore:()=>n(r=>r+e)}},on=u.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
`,sn=u.img`
    z-index: 101;
    position: relative;
    width: 62px;
    height: 62px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    border: 8px solid #EBD8FF;
    object-fit: contain;



`,ln=u.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;

    &:after {
        content: '';
        width: 380px;
        z-index: 100;
        position: absolute;
        width: 380px;
        height: 8px;
        left: 0px;
        top: 214px;

        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`,D=u.p`
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #EBD8FF;

`,N=u.button`
    padding: 14px 28px;
    background: ${e=>e.isFollow?"#5CD3A8":"#EBD8FF"};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;

    :hover {
        background: tomato;
    }
`,cn=u.button`
    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 25px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    background-color: #5CD3A8;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;


    :hover {
        background: #EBD8FF;
    }
`,Ft=({item:e})=>{const t=S(),n=()=>{t(At(e)),t(Rt(e.id))},a=new Intl.NumberFormat("EN").format(e.followers);return o.jsxs(on,{children:[o.jsx(sn,{src:e.avatar,alt:"avatar"}),o.jsxs(ln,{children:[o.jsxs(D,{children:[e.tweets," tweets"]}),o.jsxs(D,{children:[a," followers"]})]}),e.isFollowing?o.jsx(N,{isFollow:e.isFollowing,type:"button",onClick:n,children:"Following"}):o.jsx(N,{type:"button",onClick:n,children:"Follow"})]})};Ft.propTypes={item:x.shape({id:x.string,avatar:x.string,tweets:x.number,followers:x.number,isFollowing:x.bool}).isRequired};const un="/tweets-test-react/assets/Logo-aec7c177.svg",gn="/tweets-test-react/assets/bg-7d909fcf.svg",pn=u.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`,fn=u.li`
    position: relative;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: cover;
    display: flex;
    width: 380px;
    justify-content: center;
    
    padding-top: 178px;
    padding-bottom: 36px;
    border-radius: 20px;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

    &:before {
        content: '';
        width: 308px;
        height: 156px;
        z-index: 100;
        background-image: url(${gn});
        position: absolute;
        top: 28px;
        left: 36px;

    }



    &:after {
        content: '';
        width: 76px;
        height: 23px;
        z-index: 100;
        background-image: url(${un});
        position: absolute;
        top: 20px;
        left: 20px;

    }
`,hn=()=>{const e=j(nn),{perPage:t,loadMore:n}=an(3);return o.jsxs("div",{children:[o.jsx(pn,{children:e.slice(0,t).map(a=>o.jsx(fn,{children:o.jsx(Ft,{item:a})},a.id))}),e.length>t&&o.jsx(cn,{type:"button",onClick:n,children:"Load More"})]})};function dn(e){return Bt({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}var bn={"aria-busy":!0,role:"status"},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M.apply(this,arguments)},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)},I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},I.apply(this,arguments)},U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)},H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)},W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)},G=globalThis&&globalThis.__assign||function(){return G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)},Et=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=242.776657104492,mn=1.6,vn=C(K||(K=Et([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),d*.14,d,d*.11,d*.35,d,d*.35,d*.01,d,d*.99);u.path(V||(V=Et([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),d*.01,d,vn,mn);var K,V,X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},X.apply(this,arguments)},Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Y.apply(this,arguments)},J=globalThis&&globalThis.__assign||function(){return J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},J.apply(this,arguments)},Q=globalThis&&globalThis.__assign||function(){return Q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q.apply(this,arguments)},Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)},tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tt.apply(this,arguments)},nt=globalThis&&globalThis.__assign||function(){return nt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},nt.apply(this,arguments)},yn=function(t,n){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),l=r.length,g=a[r[0]],i=1;g!=null&&i<l;)g=g[r[i]],i+=1;if(typeof g<"u")return g}return n}},A=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},et.apply(this,arguments)},xn=C(rt||(rt=A([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));u.svg(at||(at=A([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),xn,yn("speed","0.75"));u.polyline(ot||(ot=A([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var rt,at,ot,st=globalThis&&globalThis.__assign||function(){return st=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},st.apply(this,arguments)},it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},it.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lt.apply(this,arguments)},R=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ct.apply(this,arguments)},_n=C(ut||(ut=R([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));u.polygon(gt||(gt=R([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),_n);u.svg(pt||(pt=R([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var ut,gt,pt,ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ft.apply(this,arguments)},ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ht.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dt.apply(this,arguments)},bt=globalThis&&globalThis.__assign||function(){return bt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bt.apply(this,arguments)},mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mt.apply(this,arguments)},vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yt.apply(this,arguments)},xt=globalThis&&globalThis.__assign||function(){return xt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xt.apply(this,arguments)},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_t.apply(this,arguments)},wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wt.apply(this,arguments)},$=globalThis&&globalThis.__assign||function(){return $=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$.apply(this,arguments)};function wn(e){var t=e.visible,n=t===void 0?!0:t,a=e.width,r=a===void 0?"80":a,l=e.height,g=l===void 0?"80":l,i=e.colors,s=i===void 0?["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]:i,p=e.wrapperClass,b=p===void 0?"":p,f=e.wrapperStyle,h=f===void 0?{}:f,v=e.ariaLabel,y=v===void 0?"color-ring-loading":v;return n?c.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:r,height:g,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:b,style:h,"aria-label":y,"data-testid":"color-ring-svg"},bn),c.createElement("defs",null,c.createElement("mask",{id:"ldio-4offds5dlws-mask"},c.createElement("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})))),c.createElement("g",{mask:"url(#ldio-4offds5dlws-mask)"},c.createElement("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:s[0]},c.createElement("animate",{attributeName:"fill",values:s.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})),c.createElement("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:s[1]},c.createElement("animate",{attributeName:"fill",values:s.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})),c.createElement("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:s[2]},c.createElement("animate",{attributeName:"fill",values:s.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})),c.createElement("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:s[3]},c.createElement("animate",{attributeName:"fill",values:s.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})),c.createElement("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:s[4]},c.createElement("animate",{attributeName:"fill",values:s.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})))):null}var Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ot.apply(this,arguments)},jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jt.apply(this,arguments)};const On=u.div`
    margin: 0 auto;
`,jn=()=>o.jsx(On,{children:o.jsx(wn,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),Fn=()=>{var l;const e=zt(),t=S(),n=j(Zt),a=j(tn),r=O.useRef(((l=e.state)==null?void 0:l.from)??"/");return O.useEffect(()=>{t(Lt())},[t]),o.jsxs(Mt,{children:[o.jsx(qt,{children:o.jsx("title",{children:"Tweets"})}),o.jsxs(Dt,{children:[o.jsxs(Nt,{to:r.current,children:[o.jsx(dn,{size:"12"}),"Go Back"]}),o.jsx(rn,{}),n?o.jsx(jn,{}):a?o.jsx("p",{children:a}):o.jsx(hn,{})]})]})};export{Fn as default};
