"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[133],{753:(e,t,r)=>{r.d(t,{O:()=>i,Z:()=>c});var o=r(189),n=r(184);let i=function(e){return e.base="base",e.google="google-sign-in",e.inverted="inverted",e}({});const c=e=>{let{children:t,buttonType:r,isLoading:c,...s}=e;const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.base;return{[i.base]:o.Yd,[i.google]:o.NY,[i.inverted]:o.OZ}[e]}(r);return(0,n.jsx)(a,{disabled:c,...s,children:c?(0,n.jsx)(o.X4,{}):t})}},189:(e,t,r)=>{r.d(t,{Yd:()=>i,NY:()=>c,OZ:()=>s,X4:()=>a});var o=r(884),n=r(415);const i=o.ZP.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`,c=(0,o.ZP)(i)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,s=(0,o.ZP)(i)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,a=(0,o.ZP)(n.e)`
  width: 30px;
  height: 30px;
`},133:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var o=r(791),n=r(871),i=r(420),c=r(553);const s=e=>e.categories,a=(0,c.P1)([s],(e=>e.categories)),d=(0,c.P1)([a],(e=>e.reduce(((e,t)=>{const{title:r,items:o}=t;return e[r.toLowerCase()]=o,e}),{}))),l=(0,c.P1)([s],(e=>e.isLoading));var p=r(610),x=r(754),h=r(753),u=r(884);const g=u.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`,b=u.ZP.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`,m=u.ZP.span`
  width: 90%;
  margin-bottom: 15px;
`,f=u.ZP.span`
  width: 10%;
`;var j=r(184);const v=e=>{let{product:t}=e;const{name:r,price:o,imageUrl:n}=t,c=(0,i.I0)(),s=(0,i.v9)(p.D1);return(0,j.jsxs)(g,{children:[(0,j.jsx)("img",{src:n,alt:`${r}`}),(0,j.jsxs)(b,{children:[(0,j.jsx)(m,{children:r}),(0,j.jsx)(f,{children:o})]}),(0,j.jsx)(h.Z,{buttonType:h.O.inverted,onClick:()=>c((0,x.dm)(s,t)),children:"Add to card"})]})};var w=r(504);const y=u.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,P=(0,u.ZP)(w.rU)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`,Z=u.ZP.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`,k=e=>{let{title:t,products:r}=e;return(0,j.jsxs)(y,{children:[(0,j.jsx)("h2",{children:(0,j.jsx)(P,{to:t,children:t.toUpperCase()})}),(0,j.jsx)(Z,{children:r.filter(((e,t)=>t<4)).map((e=>(0,j.jsx)(v,{product:e},e.id)))})]})};var C=r(833);const O=()=>{const e=(0,i.v9)(d),t=(0,i.v9)(l);return(0,j.jsx)(o.Fragment,{children:t?(0,j.jsx)(C.Z,{}):Object.keys(e).map((t=>{const r=e[t];return(0,j.jsx)(k,{title:t,products:r},t)}))})},z=u.ZP.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`,U=u.ZP.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`,Y=()=>{const{category:e}=(0,n.UO)(),t=(0,i.v9)(d),r=(0,i.v9)(l),[c,s]=(0,o.useState)(t[e]);return(0,o.useEffect)((()=>{s(t[e])}),[e,t]),(0,j.jsxs)(o.Fragment,{children:[(0,j.jsx)(U,{children:e.toUpperCase()}),r?(0,j.jsx)(C.Z,{}):(0,j.jsx)(z,{children:c&&c.map((e=>(0,j.jsx)(v,{product:e},e.id)))})]})};var A=r(977);const I=()=>{const e=(0,i.I0)();return(0,o.useEffect)((()=>{e((0,A.ti)())}),[e]),(0,j.jsxs)(n.Z5,{children:[(0,j.jsx)(n.AW,{index:!0,element:(0,j.jsx)(O,{})}),(0,j.jsx)(n.AW,{path:":category",element:(0,j.jsx)(Y,{})})]})}},610:(e,t,r)=>{r.d(t,{D1:()=>i,Ju:()=>c,z4:()=>s,ej:()=>a});var o=r(553);const n=e=>e.cart,i=(0,o.P1)([n],(e=>e.cartItems)),c=(0,o.P1)([n],(e=>e.isCartOpen)),s=(0,o.P1)([i],(e=>e.reduce(((e,t)=>e+t.quantity),0))),a=(0,o.P1)([i],(e=>e.reduce(((e,t)=>e+t.quantity*t.price),0)))}}]);
//# sourceMappingURL=133.5e6502a4.chunk.js.map