"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[737],{753:(e,n,o)=>{o.d(n,{O:()=>t,Z:()=>s});var r=o(189),a=o(184);let t=function(e){return e.base="base",e.google="google-sign-in",e.inverted="inverted",e}({});const s=e=>{let{children:n,buttonType:o,isLoading:s,...i}=e;const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.base;return{[t.base]:r.Yd,[t.google]:r.NY,[t.inverted]:r.OZ}[e]}(o);return(0,a.jsx)(l,{disabled:s,...i,children:s?(0,a.jsx)(r.X4,{}):n})}},189:(e,n,o)=>{o.d(n,{Yd:()=>t,NY:()=>s,OZ:()=>i,X4:()=>l});var r=o(884),a=o(415);const t=r.ZP.button`
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
`,s=(0,r.ZP)(t)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,i=(0,r.ZP)(t)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,l=(0,r.ZP)(a.e)`
  width: 30px;
  height: 30px;
`},737:(e,n,o)=>{o.r(n),o.d(n,{default:()=>P});var r=o(791),a=o(808),t=o(420),s=o(884);const i="grey",l=s.iv`
  top: -14px;
  font-size: 12px;
  color: ${"black"};
`,d=s.ZP.label`
  color: ${i};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${e=>{let{shrink:n}=e;return n&&l}};
`,c=s.ZP.input`
  background: none;
  background-color: white;
  color: ${i};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${i};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${d} {
    ${l};
  }
`,p=s.ZP.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;var u=o(184);const h=e=>{let{label:n,...o}=e;return(0,u.jsxs)(p,{children:[(0,u.jsx)(c,{...o}),n&&(0,u.jsx)(d,{shrink:Boolean(o.value&&"string"===typeof o.value&&o.value.length),children:n})]})};var x=o(753);const g=s.ZP.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;var b=o(542);const m={displayName:"",email:"",password:"",confirmPassword:""},w=()=>{const[e,n]=(0,r.useState)(m),{displayName:o,email:s,password:i,confirmPassword:l}=e,d=(0,t.I0)(),c=o=>{const{name:r,value:a}=o.target;n({...e,[r]:a})};return(0,u.jsxs)(g,{children:[(0,u.jsx)("h2",{children:"Don't have an account?"}),(0,u.jsx)("span",{children:"Sign up with your email and password"}),(0,u.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),i===l)try{d((0,b.hI)(s,i,o)),n(m)}catch(r){r.code===a.kq.EMAIL_EXISTS?alert("Cannot create user, email already in use"):console.log("user creation encountered an error",r)}else alert("passwords do not match")},children:[(0,u.jsx)(h,{label:"Display Name",type:"text",required:!0,onChange:c,name:"displayName",value:o}),(0,u.jsx)(h,{label:"Email",type:"email",required:!0,onChange:c,name:"email",value:s}),(0,u.jsx)(h,{label:"Password",type:"password",required:!0,onChange:c,name:"password",value:i}),(0,u.jsx)(h,{label:"Confirm Password",type:"password",required:!0,onChange:c,name:"confirmPassword",value:l}),(0,u.jsx)(x.Z,{type:"submit",children:"Sign Up"})]})]})},f=s.ZP.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`,y=s.ZP.div`
  display: flex;
  justify-content: space-between;
`,v={email:"",password:""},j=()=>{const e=(0,t.I0)(),[n,o]=(0,r.useState)(v),{email:a,password:s}=n,i=e=>{const{name:r,value:a}=e.target;o({...n,[r]:a})};return(0,u.jsxs)(f,{children:[(0,u.jsx)("h2",{children:"Already have an account?"}),(0,u.jsx)("span",{children:"Sign in with your email and password"}),(0,u.jsxs)("form",{onSubmit:async n=>{n.preventDefault();try{e((0,b.Xu)(a,s)),o(v)}catch(r){console.log("user sign in failed",r)}},children:[(0,u.jsx)(h,{label:"Email",type:"email",required:!0,onChange:i,name:"email",value:a}),(0,u.jsx)(h,{label:"Password",type:"password",required:!0,onChange:i,name:"password",value:s}),(0,u.jsxs)(y,{children:[(0,u.jsx)(x.Z,{type:"submit",children:"Sign In"}),(0,u.jsx)(x.Z,{buttonType:x.O.google,type:"button",onClick:async()=>{e((0,b.Pd)())},children:"Sign In With Google"})]})]})]})},k=s.ZP.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`,P=()=>(0,u.jsxs)(k,{children:[(0,u.jsx)(j,{}),(0,u.jsx)(w,{})]})}}]);
//# sourceMappingURL=737.aa392294.chunk.js.map