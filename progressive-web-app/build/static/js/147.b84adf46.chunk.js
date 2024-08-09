"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[147],{753:(e,n,t)=>{t.d(n,{O:()=>s,Z:()=>o});var i=t(189),r=t(184);let s=function(e){return e.base="base",e.google="google-sign-in",e.inverted="inverted",e}({});const o=e=>{let{children:n,buttonType:t,isLoading:o,...d}=e;const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.base;return{[s.base]:i.Yd,[s.google]:i.NY,[s.inverted]:i.OZ}[e]}(t);return(0,r.jsx)(c,{disabled:o,...d,children:o?(0,r.jsx)(i.X4,{}):n})}},189:(e,n,t)=>{t.d(n,{Yd:()=>s,NY:()=>o,OZ:()=>d,X4:()=>c});var i=t(884),r=t(415);const s=i.ZP.button`
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
`,o=(0,i.ZP)(s)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,d=(0,i.ZP)(s)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,c=(0,i.ZP)(r.e)`
  width: 30px;
  height: 30px;
`},147:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var i=t(420),r=t(610),s=t(791),o=t(754),d=t(884);const c=d.ZP.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`,a=d.ZP.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`,l=d.ZP.span`
  width: 23%;
`,h=(0,d.ZP)(l)`
  display: flex;
`,p=d.ZP.div`
  cursor: pointer;
`,x=d.ZP.span`
  margin: 0 10px;
`,u=d.ZP.div`
  padding-left: 12px;
  cursor: pointer;
`;var g=t(184);const m=(0,s.memo)((e=>{let{cartItem:n}=e;const{name:t,imageUrl:s,price:d,quantity:m}=n,j=(0,i.v9)(r.D1),f=(0,i.I0)();return(0,g.jsxs)(c,{children:[(0,g.jsx)(a,{children:(0,g.jsx)("img",{src:s,alt:`${t}`})}),(0,g.jsxs)(l,{children:[" ",t," "]}),(0,g.jsxs)(h,{children:[(0,g.jsx)(p,{onClick:()=>f((0,o.Cn)(j,n)),children:"\u276e"}),(0,g.jsx)(x,{children:m}),(0,g.jsx)(p,{onClick:()=>f((0,o.dm)(j,n)),children:"\u276f"})]}),(0,g.jsxs)(l,{children:[" ",d]}),(0,g.jsx)(u,{onClick:()=>f((0,o.X_)(j,n)),children:"\u2715"})]})}));var j=t(764),f=t(543),b=t(753);const y=d.ZP.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,v=d.ZP.form`
  height: 100px;
  min-width: 500px;
`,P=(0,d.ZP)(b.Z)`
  margin-left: auto;
  margin-top: 30px;
`,w=()=>{const e=(0,j.useStripe)(),n=(0,j.useElements)(),t=(0,i.v9)(r.ej),o=(0,i.v9)(f.H),[d,c]=(0,s.useState)(!1);return(0,g.jsx)(y,{children:(0,g.jsxs)(v,{onSubmit:async i=>{if(i.preventDefault(),!e||!n)return;c(!0);const r=await fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*t})}).then((e=>e.json())),{paymentIntent:{client_secret:s}}=r,d=n.getElement(j.CardElement);if(null===d)return;const a=await e.confirmCardPayment(s,{payment_method:{card:d,billing_details:{name:o?o.displayName:"Guest"}}});c(!1),a.error?alert(a.error):"succeeded"===a.paymentIntent.status&&alert("Payment Successful")},children:[(0,g.jsx)("h2",{children:"Credit Card Payment: "}),(0,g.jsx)(j.CardElement,{}),(0,g.jsx)(P,{isLoading:d,buttonType:b.O.inverted,children:"Pay now"})]})})},Z=d.ZP.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`,k=d.ZP.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`,C=d.ZP.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`,O=d.ZP.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`,I=()=>{const e=(0,i.v9)(r.D1),n=(0,i.v9)(r.ej);return(0,g.jsxs)(Z,{children:[(0,g.jsxs)(k,{children:[(0,g.jsx)(C,{children:(0,g.jsx)("span",{children:"Product"})}),(0,g.jsx)(C,{children:(0,g.jsx)("span",{children:"Description"})}),(0,g.jsx)(C,{children:(0,g.jsx)("span",{children:"Quantity"})}),(0,g.jsx)(C,{children:(0,g.jsx)("span",{children:"Price"})}),(0,g.jsx)(C,{children:(0,g.jsx)("span",{children:"Remove"})})]}),e.map((e=>(0,g.jsx)(m,{cartItem:e},e.id))),(0,g.jsxs)(O,{children:["Total: $",n]}),(0,g.jsx)(w,{})]})}},610:(e,n,t)=>{t.d(n,{D1:()=>s,Ju:()=>o,z4:()=>d,ej:()=>c});var i=t(553);const r=e=>e.cart,s=(0,i.P1)([r],(e=>e.cartItems)),o=(0,i.P1)([r],(e=>e.isCartOpen)),d=(0,i.P1)([s],(e=>e.reduce(((e,n)=>e+n.quantity),0))),c=(0,i.P1)([s],(e=>e.reduce(((e,n)=>e+n.quantity*n.price),0)))},543:(e,n,t)=>{t.d(n,{H:()=>i});const i=(0,t(553).P1)((e=>e.user),(e=>e.currentUser))}}]);
//# sourceMappingURL=147.b84adf46.chunk.js.map