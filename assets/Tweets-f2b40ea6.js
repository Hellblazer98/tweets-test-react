import{R as O,u as Rt,r as w,s as b,a as p,b as j,j as s,c as At,p as Bt,d as Lt,G as zt,U as C,e as g,f as Dt,g as Nt,h as It,i as Mt}from"./index-6e103c02.js";function Tt(e=O){const t=e===O?Rt:()=>w.useContext(e);return function(){const{store:a}=t();return a}}const qt=Tt();function Ut(e=O){const t=e===O?qt:Tt(e);return function(){return t().dispatch}}const S=Ut();var T="NOT_FOUND";function Wt(e){var t;return{get:function(a){return t&&e(t.key,a)?t.value:T},put:function(a,r){t={key:a,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Ht(e,t){var n=[];function a(i){var o=n.findIndex(function(m){return t(i,m.key)});if(o>-1){var c=n[o];return o>0&&(n.splice(o,1),n.unshift(c)),c.value}return T}function r(i,o){a(i)===T&&(n.unshift({key:i,value:o}),n.length>e&&n.pop())}function l(){return n}function u(){n=[]}return{get:a,put:r,getEntries:l,clear:u}}var Gt=function(t,n){return t===n};function Vt(e){return function(n,a){if(n===null||a===null||n.length!==a.length)return!1;for(var r=n.length,l=0;l<r;l++)if(!e(n[l],a[l]))return!1;return!0}}function Yt(e,t){var n=typeof t=="object"?t:{equalityCheck:t},a=n.equalityCheck,r=a===void 0?Gt:a,l=n.maxSize,u=l===void 0?1:l,i=n.resultEqualityCheck,o=Vt(r),c=u===1?Wt(o):Ht(u,o);function m(){var f=c.get(arguments);if(f===T){if(f=e.apply(null,arguments),i){var h=c.getEntries(),v=h.find(function(x){return i(x.value,f)});v&&(f=v.value)}c.put(arguments,f)}return f}return m.clearCache=function(){return c.clear()},m}function Kt(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(a){return typeof a=="function"})){var n=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function Xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=function(){for(var u=arguments.length,i=new Array(u),o=0;o<u;o++)i[o]=arguments[o];var c=0,m,f={memoizeOptions:void 0},h=i.pop();if(typeof h=="object"&&(f=h,h=i.pop()),typeof h!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var v=f,x=v.memoizeOptions,k=x===void 0?n:x,Ct=Array.isArray(k)?k:[k],P=Kt(i),B=e.apply(void 0,[function(){return c++,h.apply(null,arguments)}].concat(Ct)),L=e(function(){for(var z=[],St=P.length,F=0;F<St;F++)z.push(P[F].apply(null,arguments));return m=B.apply(null,z),m});return Object.assign(L,{resultFunc:h,memoizedResultFunc:B,dependencies:P,lastResult:function(){return m},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),L};return r}var Jt=Xt(Yt);const Qt=e=>e.tweets.items,Zt=e=>e.tweets.isLoading,te=e=>e.tweets.error,kt=e=>e.filters.status,ee=Jt([Qt,kt],(e,t)=>{switch(t){case b.follow:return e.filter(n=>!n.isFollowing);case b.following:return e.filter(n=>n.isFollowing);default:return e}}),ne=p.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`,E=p.button`
    padding: 8px 10px;
    background: ${e=>e.selected?"#5CD3A8":"#EBD8FF"};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-size: 12px;
    font-weight: 500;
   
`,re=()=>{const e=S(),t=j(kt),n=a=>e(At(a));return s.jsxs(ne,{children:[s.jsx(E,{selected:t===b.all,onClick:()=>n(b.all),children:"All"}),s.jsx(E,{selected:t===b.follow,onClick:()=>n(b.follow),children:"Follow"}),s.jsx(E,{selected:t===b.following,onClick:()=>n(b.following),children:"Following"})]})},ae=e=>{const[t,n]=w.useState(e);return{perPage:t,loadMore:()=>n(r=>r+e)}};var y={},oe={get exports(){return y},set exports(e){y=e}},se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ie=se,le=ie;function Pt(){}function Ft(){}Ft.resetWarningCache=Pt;var ce=function(){function e(a,r,l,u,i,o){if(o!==le){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ft,resetWarningCache:Pt};return n.PropTypes=n,n};oe.exports=ce();const ue=p.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
`,ge=p.img`
    z-index: 101;
    position: relative;
    width: 62px;
    height: 62px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    border: 8px solid #EBD8FF;
    object-fit: contain;



`,pe=p.div`
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
`,D=p.p`
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #EBD8FF;

`,N=p.button`
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
`,fe=p.button`
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
`,Et=({item:e})=>{const t=S(),n=()=>{t(Bt(e)),t(Lt(e.id))},a=new Intl.NumberFormat("EN").format(e.followers);return s.jsxs(ue,{children:[s.jsx(ge,{src:e.avatar,alt:"avatar"}),s.jsxs(pe,{children:[s.jsxs(D,{children:[e.tweets," tweets"]}),s.jsxs(D,{children:[a," followers"]})]}),e.isFollowing?s.jsx(N,{isFollow:e.isFollowing,type:"button",onClick:n,children:"Following"}):s.jsx(N,{type:"button",onClick:n,children:"Follow"})]})};Et.propTypes={item:y.shape({id:y.string,avatar:y.string,tweets:y.number,followers:y.number,isFollowing:y.bool}).isRequired};const he="/tweets-test-react/assets/Logo-aec7c177.svg",de="/tweets-test-react/assets/bg-7d909fcf.svg",me=p.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`,be=p.li`
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
        background-image: url(${de});
        position: absolute;
        top: 28px;
        left: 36px;

    }



    &:after {
        content: '';
        width: 76px;
        height: 23px;
        z-index: 100;
        background-image: url(${he});
        position: absolute;
        top: 20px;
        left: 20px;

    }
`,ye=()=>{const e=j(ee),{perPage:t,loadMore:n}=ae(3);return s.jsxs("div",{children:[s.jsx(me,{children:e.slice(0,t).map(a=>s.jsx(be,{children:s.jsx(Et,{item:a})},a.id))}),e.length>t&&s.jsx(fe,{type:"button",onClick:n,children:"Load More"})]})};function ve(e){return zt({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}var xe={"aria-busy":!0,role:"status"},I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},I.apply(this,arguments)},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M.apply(this,arguments)},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)},U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)},W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)},H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)},G=globalThis&&globalThis.__assign||function(){return G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)},$t=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=242.776657104492,_e=1.6,Oe=C(V||(V=$t([`
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
`])),d*.14,d,d*.11,d*.35,d,d*.35,d*.01,d,d*.99);p.path(Y||(Y=$t([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),d*.01,d,Oe,_e);var V,Y,K=globalThis&&globalThis.__assign||function(){return K=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)},X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},X.apply(this,arguments)},J=globalThis&&globalThis.__assign||function(){return J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},J.apply(this,arguments)},Q=globalThis&&globalThis.__assign||function(){return Q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q.apply(this,arguments)},Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)},tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tt.apply(this,arguments)},et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},et.apply(this,arguments)},we=function(t,n){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),l=r.length,u=a[r[0]],i=1;u!=null&&i<l;)u=u[r[i]],i+=1;if(typeof u<"u")return u}return n}},R=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},nt=globalThis&&globalThis.__assign||function(){return nt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},nt.apply(this,arguments)},je=C(rt||(rt=R([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));p.svg(at||(at=R([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),je,we("speed","0.75"));p.polyline(ot||(ot=R([`
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
`])),function(e){return e.width});var rt,at,ot,st=globalThis&&globalThis.__assign||function(){return st=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},st.apply(this,arguments)},it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},it.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lt.apply(this,arguments)},A=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ct.apply(this,arguments)},Te=C(ut||(ut=A([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));p.polygon(gt||(gt=A([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),Te);p.svg(pt||(pt=A([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var ut,gt,pt,ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ft.apply(this,arguments)},ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ht.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dt.apply(this,arguments)},mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mt.apply(this,arguments)},bt=globalThis&&globalThis.__assign||function(){return bt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yt.apply(this,arguments)},vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vt.apply(this,arguments)},xt=globalThis&&globalThis.__assign||function(){return xt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xt.apply(this,arguments)},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_t.apply(this,arguments)},Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ot.apply(this,arguments)},$=globalThis&&globalThis.__assign||function(){return $=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$.apply(this,arguments)};function ke(e){var t=e.visible,n=t===void 0?!0:t,a=e.width,r=a===void 0?"80":a,l=e.height,u=l===void 0?"80":l,i=e.colors,o=i===void 0?["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]:i,c=e.wrapperClass,m=c===void 0?"":c,f=e.wrapperStyle,h=f===void 0?{}:f,v=e.ariaLabel,x=v===void 0?"color-ring-loading":v;return n?g.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:r,height:u,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:m,style:h,"aria-label":x,"data-testid":"color-ring-svg"},xe),g.createElement("defs",null,g.createElement("mask",{id:"ldio-4offds5dlws-mask"},g.createElement("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)"},g.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})))),g.createElement("g",{mask:"url(#ldio-4offds5dlws-mask)"},g.createElement("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:o[0]},g.createElement("animate",{attributeName:"fill",values:o.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})),g.createElement("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:o[1]},g.createElement("animate",{attributeName:"fill",values:o.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})),g.createElement("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:o[2]},g.createElement("animate",{attributeName:"fill",values:o.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})),g.createElement("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:o[3]},g.createElement("animate",{attributeName:"fill",values:o.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})),g.createElement("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:o[4]},g.createElement("animate",{attributeName:"fill",values:o.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})))):null}var wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wt.apply(this,arguments)},jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jt.apply(this,arguments)};const Pe=p.div`
    margin: 0 auto;
`,Fe=()=>s.jsx(Pe,{children:s.jsx(ke,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),$e=()=>{var l;const e=Dt(),t=S(),n=j(Zt),a=j(te),r=w.useRef(((l=e.state)==null?void 0:l.from)??"/");return w.useEffect(()=>{t(Nt())},[t]),s.jsxs(It,{children:[s.jsxs(Mt,{to:r.current,children:[s.jsx(ve,{size:"12"}),"Go Back"]}),s.jsx(re,{}),n?s.jsx(Fe,{}):a?s.jsx("p",{children:a}):s.jsx(ye,{})]})};export{$e as default};
