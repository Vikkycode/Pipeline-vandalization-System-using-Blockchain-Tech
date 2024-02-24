(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{2998:function(e,t,s){Promise.resolve().then(s.bind(s,3363))},3363:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Login}});var a=s(7437),l=s(3417),n=s(1476),x=s(2265),r=s(4033),c=s(4057),o=s(393),p=s(5221),i=s(8484),d=s(4288),m=s(3046),h=s(3294);function Login(){let e=(0,r.useRouter)(),t=(0,m.I0)(),[s,{isLoading:f}]=(0,p.YA)(),{token:u}=(0,h.z)(),[b,g]=(0,x.useState)({pass_phrase:"",password:"",remember_me:!1}),[j,w]=(0,x.useState)(!1),[N,v]=(0,x.useState)(!1),[_,y]=(0,x.useState)(!0),validate_fields=()=>{""!==E&&""!==C?y(!1):y(!0)},on_change=e=>{e.preventDefault(),g(t=>({...t,[e.target.name]:e.target.value}))},commit_login=async()=>{let a=await s(b),{error:l,data:n}=a;if(n){let{msg:s,code:a,token:l}=n;(0,i.V)({code:a,msg:s}),t((0,p.tG)(l)),l&&e.replace("/admin/dashboard")}},{pass_phrase:E,password:C,remember_me:k}=b;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"md:hidden lg:hidden w-full h-[100vh] flex flex-col items-center justify-between bg-white",children:[(0,a.jsx)("h1",{className:"text-[#131212] text-left w-[85%] text-[2rem] font-[700] mt-[1rem]",children:"Login"}),(0,a.jsxs)("form",{className:"w-[85%] mb-[2rem] flex flex-col",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-[24px]",children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("input",{value:E,onChange:on_change,className:"w-full border-b-[1px] outline-[unset] border-b-[rgba(0, 0, 0, 0.20)] text-[20px] font-[400] placeholder:text-[rgba(0, 0, 0, 0.40)] h-[50px]",type:"text",name:"pass_phrase",placeholder:"Email / Admin number"}),j&&(0,a.jsx)("span",{className:"w-[20.5px] h-[20.5px] absolute top-[10px] right-0",children:(0,a.jsx)(n.Z,{})})]}),(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("input",{onChange:on_change,onInput:()=>validate_fields(),className:"w-full border-b-[1px] outline-[unset] border-b-[rgba(0, 0, 0, 0.20)] text-[20px] font-[400] placeholder:text-[rgba(0, 0, 0, 0.40)] h-[50px]",type:N?"text":"password",name:"password",placeholder:"Password"}),""!==C&&(0,a.jsx)("span",{onClick:()=>v(e=>!e),className:"w-[20.5px] h-[20.5px] absolute top-[10px] right-0",children:(0,a.jsx)(l.Z,{})})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between px-2 mt-[3px] mb-[40px]",children:[(0,a.jsxs)("span",{className:"flex gap-2",children:[(0,a.jsx)("input",{className:"bg-[#800E80] text-[#800E80] fill-[#800E80]",type:"checkbox",name:"remember_me"}),(0,a.jsx)("span",{className:"text-[#800E80] text-[14px] font-[400]",children:"Remember me"})]}),(0,a.jsx)("span",{className:"text-[#800E80] text-[14px] font-[400]",children:"Forgot password?"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[24px] mt-[40px]",children:[(0,a.jsx)("button",{onClick:()=>signup(),className:"flex items-center justify-center w-full h-[48px] py-[8px] px-[24px] text-white ".concat(_||j?"bg-[rgba(19, 18, 18, 0.20)] bg-gray-200":"bg-[#800E80]"," rounded-[4px] text-[16px] font-[700]"),type:"button",disabled:_,children:"Login"}),(0,a.jsxs)("p",{className:"text-center text-[rgba(19, 18, 18, 0.60)] text-[16px] font-[400]",children:["Don't have an account? ",(0,a.jsx)("a",{className:"font-[700] text-[#800E80]",href:"",children:"Sign Up"})]})]})]})]}),(0,a.jsxs)("div",{className:"max-sm:hidden bg-transparent w-full h-[100vh] relative flex items-center justify-center",children:[(0,a.jsxs)("div",{className:"w-[80%] h-[87%] bg-transparent flex flex-col justify-start items-end pt-[20px] pr-[20px] relative",style:{boxShadow:"0px 4px 16px 6px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("h2",{className:"w-[45%] text-center text-[32px] font-[700] text-[#800E80]",children:"Login"}),(0,a.jsxs)("form",{className:"w-[45%] mb-[2rem] flex flex-col",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-[24px]",children:[(0,a.jsx)("div",{className:"relative w-full",children:(0,a.jsx)("input",{value:E,onChange:on_change,className:"w-full border-b-[1px] outline-[unset] border-b-[rgba(0, 0, 0, 0.20)] text-[16px] focus:border-none focus:outline-none font-[400] placeholder:text-[rgba(0, 0, 0, 0.40)] h-[30px]",type:"text",name:"pass_phrase",placeholder:"Email / Admin number"})}),(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)("input",{value:C,onChange:on_change,onInput:()=>validate_fields(),className:"w-full border-b-[1px] outline-[unset] border-b-[rgba(0, 0, 0, 0.20)] text-[16px] focus:border-none focus:outline-none font-[400] placeholder:text-[rgba(0, 0, 0, 0.40)] h-[30px]",type:N?"text":"password",name:"password",placeholder:"Password"}),""!==C&&(0,a.jsx)("span",{onClick:()=>v(e=>!e),className:"w-[20.5px] h-[20.5px] absolute top-[10px] right-0",children:(0,a.jsx)(l.Z,{})})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between px-2 mt-[3px] mb-[40px]",children:[(0,a.jsxs)("span",{className:"flex gap-2",children:[(0,a.jsx)("input",{value:k,onChange:on_change,className:"bg-[#800E80] text-[#800E80] fill-[#800E80]",type:"checkbox",name:"remember_me"}),(0,a.jsx)("span",{className:"text-[#800E80] text-[14px] font-[400]",children:"Remember me"})]}),(0,a.jsx)("a",{href:"/forgot_password",className:"text-[#800E80] text-[14px] font-[400]",children:"Forgot password?"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[24px] mt-[40px]",children:[(0,a.jsxs)("button",{onClick:()=>commit_login(),className:"flex items-center justify-center w-full h-[48px] py-[8px] px-[24px] text-white bg-[#800E80] rounded-[4px] text-[16px] font-[700]",type:"button",children:[f?"":"Login",f&&(0,a.jsxs)("span",{children:[(0,a.jsx)(d.Z,{h:15,w:15})," "]})]}),(0,a.jsxs)("p",{className:"text-center text-[rgba(19, 18, 18, 0.60)] text-[16px] font-[400]",children:["Don't have an account? ",(0,a.jsx)("a",{className:"font-[700] text-[#800E80]",href:"/signup",children:"Sign Up"})]})]})]}),(0,a.jsx)("span",{className:"w-[107px] h-[101px] absolute top-[3%] left-[12%] z-[2]",children:(0,a.jsx)(c.Z,{})}),(0,a.jsxs)("span",{className:"w-[fit-content] absolute bottom-[15px] right-[15px] flex gap-[1px]",children:[(0,a.jsx)("img",{className:"h-[15px] object-contain",src:o.W.tetfund_img.src,alt:""}),(0,a.jsx)("img",{className:"h-[18px] object-contain",src:o.W.tetfund_co_support_img.src,alt:""})]})]}),(0,a.jsx)("div",{className:"w-[35vw] h-full fixed top-0 left-0 z-[-1] pr-[97px] pt-[48px] text-[10rem] bg-[#800E80] flex flex-col items-end justify-start",style:{boxShadow:"0px 4px 16px 6px rgba(0, 0, 0, 0.25)"}})]})]})}},3294:function(e,t,s){"use strict";s.d(t,{z:function(){return auth_selectors}});var a=s(3046);function auth_selectors(){let{token:e}=(0,a.v9)(e=>e.auth);return{token:e}}}},function(e){e.O(0,[771,687,436,971,472,744],function(){return e(e.s=2998)}),_N_E=e.O()}]);