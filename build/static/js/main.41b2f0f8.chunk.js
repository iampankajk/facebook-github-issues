(this["webpackJsonpgithub-issues"]=this["webpackJsonpgithub-issues"]||[]).push([[0],{1:function(e,s,c){e.exports={nav:"Header_nav__3yRlw",title:"Header_title__3SH2Q",code:"Header_code__3fDRz",span:"Header_span__2_2lW",facebook:"Header_facebook__117Ze",react:"Header_react__dRCXN",titleList:"Header_titleList__19NfD",icons:"Header_icons__3I61Z",text:"Header_text__G3J9D",element:"Header_element__Jfi5z",codeTitle:"Header_codeTitle__2FVGn",codeIcon:"Header_codeIcon__3JrP_"}},14:function(e,s,c){e.exports={card:"IssueCard_card__32jul"}},24:function(e,s,c){},28:function(e,s,c){"use strict";c.r(s);var a=c(12),t=c.n(a),n=(c(24),c(1)),i=c.n(n),j=c(3),l=c(4),r=c(0),d=function(){return Object(r.jsxs)("nav",{className:i.a.nav,children:[Object(r.jsxs)("div",{className:i.a.title,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(j.a,{icon:l.b,color:"grey",className:i.a.element}),Object(r.jsx)("a",{href:"#",className:i.a.facebook,children:"facebook"}),Object(r.jsx)("span",{className:i.a.span,children:"/"}),Object(r.jsx)("a",{href:"#",className:i.a.react,children:"react"}),Object(r.jsx)("span",{className:i.a.span,children:Object(r.jsx)("span",{children:"Public"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:i.a.titleList,children:[Object(r.jsxs)("span",{className:i.a.icons,children:[Object(r.jsx)(j.a,{icon:l.a,className:i.a.element}),"Notification"]}),Object(r.jsx)("span",{className:i.a.text,children:"6639"})]}),Object(r.jsxs)("div",{className:i.a.titleList,children:[Object(r.jsxs)("span",{className:i.a.icons,children:[Object(r.jsx)(j.a,{icon:l.n,className:i.a.element}),"Star"]}),Object(r.jsx)("span",{className:i.a.text,children:"175k"})]}),Object(r.jsxs)("div",{className:i.a.titleList,children:[Object(r.jsxs)("span",{className:i.a.icons,children:[Object(r.jsx)(j.a,{icon:l.h,className:i.a.element}),"Fork"]}),Object(r.jsx)("span",{className:i.a.text,children:"35.3k"})]})]})]}),Object(r.jsxs)("div",{className:i.a.code,children:[Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.j,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Code"}),Object(r.jsx)("span",{children:"253"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.g,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Issues"}),Object(r.jsx)("span",{children:"625"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.i,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Pull request"}),Object(r.jsx)("span",{children:"208"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.k,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Actions"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.d,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Projects"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.c,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Wiki"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.m,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Security"})]}),Object(r.jsxs)("div",{className:i.a.codeTitle,children:[Object(r.jsx)(j.a,{icon:l.e,className:i.a.codeIcon}),Object(r.jsx)("a",{href:"#",children:"Insights"})]})]})]})},o=c(10),b=c(13),x=c(15),h=c(6),O=c(8),_=c(7),m=c.n(_),u=function(){var e=Object(h.useState)([]),s=Object(x.a)(e,2),c=s[0],a=s[1],t=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var s,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/facebook/react/issues");case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,console.log(c),a(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(h.useEffect)((function(){t()}),[]);var n=c.map((function(e){var s=new Date(e.created_at);return s=s.getDate(),Object(r.jsxs)("div",{className:m.a.issueItems,children:[Object(r.jsxs)("div",{className:m.a.title,children:[Object(r.jsxs)("div",{className:m.a.title,children:[Object(r.jsx)("div",{children:Object(r.jsx)(j.a,{icon:O.a,color:"green"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:e.title})}),Object(r.jsx)("div",{children:e.labels.map((function(e){return Object(r.jsx)("span",{style:{backgroundColor:"#".concat(e.color),borderRadius:"10px",padding:"2px",margin:"2px"},children:e.name},e.id)}))})]}),Object(r.jsxs)("div",{className:m.a.comments,children:[Object(r.jsx)(j.a,{icon:O.b})," ",e.comments]})]}),Object(r.jsx)("div",{className:m.a.description,children:Object(r.jsxs)("p",{children:["#",e.number," opened on ",s," Jun by ",e.user.login]})})]},e.node_id)}));return Object(r.jsx)("div",{children:n})},v=c(14),p=c.n(v),N=function(){return Object(r.jsx)("div",{className:p.a.card,children:Object(r.jsx)(u,{})})},f=c(9),I=c.n(f),k=function(){return Object(r.jsxs)("div",{className:I.a.nav,children:[Object(r.jsxs)("div",{className:I.a.icon,children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(j.a,{icon:O.a})," 711 Open"]}),Object(r.jsxs)("span",{children:[Object(r.jsx)(j.a,{icon:l.f})," 10,811 closed"]})]}),Object(r.jsxs)("div",{className:I.a.list,children:[Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Author"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Label"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Projects"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Milestones"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Assinee"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("select",{children:Object(r.jsx)("option",{children:"Sort"})})})]})]})},g=c(5),S=c.n(g),T=function(){return Object(r.jsxs)("div",{className:S.a.container,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:S.a.filters,children:"Filters"}),Object(r.jsxs)("div",{className:S.a.input,children:[Object(r.jsx)(j.a,{icon:l.l,className:S.a.searchIcon}),Object(r.jsx)("input",{value:"issue open"})]})]}),Object(r.jsxs)("div",{className:S.a.labelMile,children:[Object(r.jsx)("a",{href:"#",className:S.a.labels,children:"Labels"}),Object(r.jsx)("a",{href:"#",className:S.a.milestones,children:"Milestones"})]})]}),Object(r.jsx)("a",{href:"#",className:S.a.newIssue,children:"New Issue"})]})};var H=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(T,{}),Object(r.jsx)(k,{}),Object(r.jsx)(N,{})]})};t.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(H,{}))},5:function(e,s,c){e.exports={container:"Search_container__1ATIJ",newIssue:"Search_newIssue__1svv_",labels:"Search_labels__2bpO2",milestones:"Search_milestones__2O1Bt",filters:"Search_filters__3UZkj",input:"Search_input__yx45c",labelMile:"Search_labelMile__4JZow",searchIcon:"Search_searchIcon__3ef9K"}},7:function(e,s,c){e.exports={issueItems:"IssueList_issueItems__1c_Ol",title:"IssueList_title__2T2jY",description:"IssueList_description__11vzR"}},9:function(e,s,c){e.exports={nav:"IssueNav_nav__3SMEz",icon:"IssueNav_icon__2JTYv",list:"IssueNav_list__33Tma"}}},[[28,1,2]]]);
//# sourceMappingURL=main.41b2f0f8.chunk.js.map