(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{7633:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slice-test/what-is-slice-test",function(){return s(9729)}])},9729:function(t,e,s){"use strict";s.r(e),s.d(e,{__toc:function(){return d},default:function(){return u}});var i=s(5893),n=s(2673),a=s(373),r=s(8426);s(9128);var o=s(2643),c={src:"/docs-spring-reactive-test/_next/static/media/stack.b930a2aa.png",height:283,width:711,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAIElEQVR42gVAAQ0AMAiyf2A44NXVbguUa9qP9C8nAjIHPQwXc7k3SF8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3};let d=[{depth:2,value:"슬라이스 테스트란?",id:"슬라이스-테스트란"},{depth:2,value:"Controller, Data Access Layer",id:"controller-data-access-layer"}];function _createMdxContent(t){let e=Object.assign({h2:"h2",p:"p",img:"img",strong:"strong",ul:"ul",li:"li",code:"code"},(0,o.a)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"슬라이스-테스트란",children:"슬라이스 테스트란?"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{placeholder:"blur",src:c})}),"\n",(0,i.jsxs)(e.p,{children:["두꺼운 치즈를 자르면 하나의 슬라이스가 되듯 ",(0,i.jsx)(e.strong,{children:'"슬라이스 테스트"'})," 라는 용어의 의미는 여러 복합적인 기능 중 하나의 단면에 대한 레이어를 테스트한다는 의미를 가지고 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:['**"슬라이스 테스트"**는 스프링 프레임워크에서 제공하는 기능입니다. 예를 들면 Controller 의 경우에는 MockMVC 또는 @WebFluxTest 테스트를 통해 검증할수 있고, Data Access Layer 는 @DataR2dbcTest, 레디스는 @DataRedisTest, MongoDB 는 @DataMongoTest 애노테이션을 통해서 그 기능을 제공해줍니다.',(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(e.p,{children:"Web MVC"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"MockMVC"}),"\n",(0,i.jsx)(e.li,{children:"@WebFluxTest"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.p,{children:"Data Access Layer"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"@DataR2dbcTest"}),"\n",(0,i.jsx)(e.li,{children:"@DataRedisTest"}),"\n",(0,i.jsx)(e.li,{children:"@DataMongoTest"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h2,{id:"controller-data-access-layer",children:"Controller, Data Access Layer"}),"\n",(0,i.jsxs)(e.p,{children:["Service 나 내부 컴포넌트 들은 정해진 입력에 대해 정해진 동작을 하는 역할을 하게끔 작성이 가능합니다. 그런데 Service 계층이 아닌 Controller, Data Access Layer 는 외부의 입력을 받습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Controller"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:["Controller 는 주어진 API 에 대한 비즈니스 요구사항에 맞는 요청과 응답을 검증해야 하는데 이 때 Service 및 내부 Component 들에 대해서는 Mocking 을 해서 테스트를 수행합니다. Controller 가 속한 프리젠테이션 레이어는 비즈니스 요구사항에 맞는 요청의 형식이나 응답코드, 응답 형식이 요구사항이 변할 때마다 대응이 가능해야 하는데 이에 맞는 테스트를 하는 영역입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:["그런데 이 Controller 는 단순히 요청 응답만 테스트 하는 것이 아니라 Netty 또는 Tomcat 컨테이너 위에서 잘 구동되는지 역시 검증이 가능해야 합니다. 따라서 단순한 기능의 검증을 넘어서 WAS 레벨에서의 테스트까지 수행해야 합니다. 이렇게 웹 컨테이너에서부터 API 의 비즈니스 요건 테스트에 대해서 Webflux 에서는 @WebFluxTest 라는 기능을 제공해줍니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Data Access Layer"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:["Data Access Layer 는 R2DBC 와 같은 데이터베이스 클라이언트를 통해서 데이터베이스라고 하는 이종의 머신과 통신을 한 결과를 데이터로 응답합니다. Data Access Layer 계층에서는 DBMS 와 통신을 하는 것 외에도 실제 쿼리가 잘 짠 것인지도 테스트를 해봐야 합니다. 쿼리의 검증은 단순히 Java 코드로만은 검증이 불가능합니다. 실제로 존재하는 Database 를 소규모로 구성해서 테스트를 해봐야 합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.p,{children:["이렇게 Data Access Layer 에서는 실제 쿼리를 검증하는 테스트 코드, Database 접근 로직 등을 테스트하기 위해서 ",(0,i.jsx)(e.code,{children:"@DataR2dbcTest"}),", ",(0,i.jsx)(e.code,{children:"@DataRedisTest"}),", ",(0,i.jsx)(e.code,{children:"@DataMongoTest"})," 를 제공해주고 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{})]})}let l={MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),t.components);return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(_createMdxContent,{...t})}):_createMdxContent(t)},pageOpts:{filePath:"pages/slice-test/what-is-slice-test.mdx",route:"/slice-test/what-is-slice-test",timestamp:1713179291e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"integration-test",route:"/integration-test"},{kind:"MdxPage",name:"mockito-test",route:"/mockito-test"},{kind:"Folder",name:"reactor-test",route:"/reactor-test",children:[{kind:"MdxPage",name:"if-without-stepverifier",route:"/reactor-test/if-without-stepverifier"},{kind:"MdxPage",name:"stepverifier-test",route:"/reactor-test/stepverifier-test"},{kind:"Meta",data:{"if-without-stepverifier":"StepVerifier 없이 테스트할 경우","stepverifier-test":"StepVerifier 테스트"}}]},{kind:"MdxPage",name:"reactor-test",route:"/reactor-test"},{kind:"Folder",name:"slice-test",route:"/slice-test",children:[{kind:"MdxPage",name:"data-mongo-test",route:"/slice-test/data-mongo-test"},{kind:"MdxPage",name:"data-r2dbc-test",route:"/slice-test/data-r2dbc-test"},{kind:"MdxPage",name:"web-flux-test",route:"/slice-test/web-flux-test"},{kind:"MdxPage",name:"web-test-client",route:"/slice-test/web-test-client"},{kind:"MdxPage",name:"what-is-context-configuration",route:"/slice-test/what-is-context-configuration"},{kind:"MdxPage",name:"what-is-mockbean",route:"/slice-test/what-is-mockbean"},{kind:"MdxPage",name:"what-is-slice-test",route:"/slice-test/what-is-slice-test"},{kind:"Meta",data:{"what-is-slice-test":"슬라이스 테스트란?","what-is-context-configuration":"@ContextConfiguration 이란?","what-is-mockbean":"@MockBean 이란?","web-flux-test":"@WebFluxTest","web-test-client":"WebTestClient 로 API 검증","data-r2dbc-test":"@DataR2dbcTest","data-mongo-test":"@DataMongoTest"}}]},{kind:"MdxPage",name:"slice-test",route:"/slice-test"},{kind:"Folder",name:"test-tips",route:"/test-tips",children:[{kind:"MdxPage",name:"private-method-test",route:"/test-tips/private-method-test"},{kind:"MdxPage",name:"test-fixtures",route:"/test-tips/test-fixtures"},{kind:"MdxPage",name:"what-is-test-double",route:"/test-tips/what-is-test-double"},{kind:"Meta",data:{"private-method-test":"Private 메서드 테스트","test-fixtures":"테스트 더미 객체 생성","what-is-test-double":"Test Double 이 뭔가요?"}}]},{kind:"MdxPage",name:"test-tips",route:"/test-tips"},{kind:"Folder",name:"unit-test",route:"/unit-test",children:[{kind:"MdxPage",name:"assertj-assertions",route:"/unit-test/assertj-assertions"},{kind:"MdxPage",name:"assumption",route:"/unit-test/assumption"},{kind:"MdxPage",name:"junit-jupiter",route:"/unit-test/junit-jupiter"},{kind:"MdxPage",name:"jupiter-assertions",route:"/unit-test/jupiter-assertions"},{kind:"MdxPage",name:"test-libraries",route:"/unit-test/test-libraries"},{kind:"MdxPage",name:"what-is-unit-test",route:"/unit-test/what-is-unit-test"},{kind:"Meta",data:{"what-is-unit-test":"유닛 테스트의 개념, 원칙, 목적","junit-jupiter":"JUnit Jupiter","jupiter-assertions":"Assrtions (Junit Jupiter)","assertj-assertions":"Assertions (Assertj)",assumption:"Assumption (Junit Jupiter)","test-libraries":"Test Libraries"}}]},{kind:"MdxPage",name:"unit-test",route:"/unit-test"},{kind:"MdxPage",name:"what-is-software-test",route:"/what-is-software-test"},{kind:"Meta",data:{index:"Introduction","what-is-software-test":"소프트웨어 테스트란?","unit-test":"유닛 테스트","mockito-test":"Mockito 테스트","reactor-test":"Reactor 테스트","slice-test":"슬라이스 테스트","integration-test":"통합 테스트",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0},"test-tips":"Test Tips"}}],flexsearch:{codeblocks:!0},title:"What Is Slice Test",headings:d},pageNextRoute:"/slice-test/what-is-slice-test",nextraLayout:a.ZP,themeConfig:r.Z};var u=(0,n.j)(l)},8426:function(t,e,s){"use strict";var i=s(5893);s(7294);let n={logo:(0,i.jsx)("span",{children:"Docs Spring Reactive Test"}),project:{link:"https://github.com/chagchagchag/docs-spring-reactive-test"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-reactive-test",footer:{text:"Nextra Docs Template"}};e.Z=n},5789:function(){}},function(t){t.O(0,[774,796,888,179],function(){return t(t.s=7633)}),_N_E=t.O()}]);