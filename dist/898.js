"use strict";(self.webpackChunkstock_calendar_ts_front=self.webpackChunkstock_calendar_ts_front||[]).push([[898],{61898:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(67294),n=a(74316);const s=(0,n.Z)("div",{target:"e22m3kn3"})({name:"ttzjnq",styles:"display:flex;flex-direction:column;padding-top:108px"}),r=(0,n.Z)("header",{target:"e22m3kn2"})({name:"zab05d",styles:"text-align:center;font-family:Slack-Larsseit,Helvetica Neue,Helvetica,Segoe UI,Tahoma,Arial,sans-serif;font-weight:700;font-size:48px;line-height:46px;letter-spacing:-0.75px;margin-bottom:50px"}),o=(0,n.Z)("div",{target:"e22m3kn1"})({name:"186hipq",styles:"color:#e01e5a;margin:8px 0 16px;font-weight:bold"}),i=(0,n.Z)("div",{target:"e22m3kn0"})({name:"1sn56sp",styles:"color:#2eb67d;font-weight:bold"});var u=a(60977),p=a(79655),d=a(38678),Z=a(45767),c=a(83564),m=a(9669),g=a.n(m),v=a(76505),h=a(70917);const f=()=>{const{data:e,error:t,revalidate:a}=(0,Z.ZP)(`${v.Z.server.url}/api/users`,c.Z),[n,m]=(0,d.Z)(""),[f,,k]=(0,d.Z)(""),[b,,w]=(0,d.Z)(""),[_,x]=(0,l.useState)(!1),[y,C]=(0,l.useState)(""),[I,S]=(0,l.useState)(!1),z=(0,l.useCallback)((e=>{k(e.target.value),x(e.target.value!==b)}),[b]),q=(0,l.useCallback)((e=>{w(e.target.value),x(e.target.value!==f)}),[f]),H=(0,l.useCallback)((e=>{e.preventDefault(),!_&&n&&f&&b?(S(!1),g().post(`${v.Z.server.url}/api/users`,{email:n,password:f}).then((e=>{S(!0)})).catch((e=>{C(e.response.data)})).finally((()=>{}))):C(n?n&&!f?"비밀번호를 입력해주세요.":"비밀번호가 일치하지 않습니다.":"아이디를 입력해주세요.")}),[n,f,_]);return void 0===e?(0,h.tZ)("div",null,"로딩중..."):(0,h.tZ)(s,null,(0,h.tZ)(r,null,"주식 캘린더"),(0,h.tZ)(u.l0,{onSubmit:H},(0,h.tZ)(u.__,null,(0,h.tZ)("span",null,"이메일 주소"),(0,h.tZ)("div",null,(0,h.tZ)(u.II,{type:"email",id:"email",name:"email",value:n,onChange:m}))),(0,h.tZ)(u.__,null,(0,h.tZ)("span",null,"비밀번호"),(0,h.tZ)("div",null,(0,h.tZ)(u.II,{type:"password",id:"password",name:"password",value:f,onChange:z}))),(0,h.tZ)(u.__,null,(0,h.tZ)("span",null,"비밀번호 확인"),(0,h.tZ)("div",null,(0,h.tZ)(u.II,{type:"password",id:"password-check",name:"password-check",value:b,onChange:q})),!y&&_&&(0,h.tZ)(o,null,"비밀번호가 일치하지 않습니다."),y&&(0,h.tZ)(o,null,y),I&&(0,h.tZ)(i,null,"회원가입되었습니다! 로그인해주세요.")),(0,h.tZ)(u.Vm,{type:"submit",color:"#60d6bf",marginBottom:"20px"},"회원가입")),(0,h.tZ)(u.l3,null,"이미 회원이신가요? ",(0,h.tZ)(p.rU,{to:"/login"},"로그인")))}}}]);