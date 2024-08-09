"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[940],{940:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var r=i(871),s=i(884);const n=s.ZP.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${e=>{let{$imageUrl:t}=e;return`url(${t})`}};
`,o=s.ZP.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
        text-transform: uppercase;
    }

    p {
        font-weight: lighter;
        font-size: 16px;
    }
`,a=s.ZP.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        ${n} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${o} {
            opacity: 0.9;
        }
    }
`;var c=i(184);const l=e=>{let{category:t}=e;const{imageUrl:i,title:s,route:l}=t,p=(0,r.s0)();return(0,c.jsxs)(a,{onClick:()=>p(l),children:[(0,c.jsx)(n,{$imageUrl:i}),(0,c.jsxs)(o,{children:[(0,c.jsx)("h2",{children:s}),(0,c.jsx)("p",{children:"Shop Now"})]})]})},p=s.ZP.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,h=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"shop/sneakers"},{id:4,title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",route:"shop/womens"},{id:5,title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",route:"shop/mens"}],d=()=>(0,c.jsx)(p,{children:h.map((e=>(0,c.jsx)(l,{category:e},e.id)))}),g=()=>(0,c.jsxs)("div",{children:[(0,c.jsx)(d,{}),(0,c.jsx)(r.j3,{})]})}}]);
//# sourceMappingURL=940.66a25986.chunk.js.map