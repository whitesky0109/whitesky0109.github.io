(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EDuE:function(e,a,t){},HDCr:function(e,a,t){},I14Z:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz");var c,i,o,s=t("vOnD"),m={H4Global:Object(s.a)(c||(i=["\n  font-family: Raleway;\n"],o||(o=i.slice(0)),i.raw=o,c=i)),TechTagButton:s.b.button.withConfig({displayName:"TechTagStyled__TechTagButton",componentId:"ownvgv-0"})(["background:black;border-radius:20% 0 0 20%;border-color:transparent;font-family:Raleway;font-size:.85rem;"]),Tag:s.b.div.withConfig({displayName:"TechTagStyled__Tag",componentId:"ownvgv-1"})(["font-size:","px;color:",";"],(function(e){return e.size}),(function(e){return e.color})),Svg:s.b.svg.withConfig({displayName:"TechTagStyled__Svg",componentId:"ownvgv-2"})(["fill:",";"],(function(e){return e.color}))},d=function(e){var a=e.tag,t=e.tech,n=e.name,c=e.size,i=e.color,o=e.img;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(m.H4Global,null),l.a.createElement(r.Link,{to:"/tags/"+a+"/"},l.a.createElement(m.TechTagButton,{className:"text-white"},l.a.createElement("p",{className:"d-inline"},t+" "),l.a.createElement(m.Tag,{className:"d-inline",size:c,color:i},l.a.createElement(m.Svg,{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,color:i},l.a.createElement("title",null,t),null!=o&&l.a.createElement("image",{href:o,width:c,height:c}),null!=n&&(Array.isArray(n)?n.map((function(e){return l.a.createElement("path",{key:e,d:e})})):l.a.createElement("path",{d:n})))))))};d.defaultProps={tag:"",tech:"",name:"",size:20,color:"",img:null};a.a=d},ccoC:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=(t("+eM2"),t("EDuE"),t("L12J")),i=t("dmsj"),o=t("hudu"),s=t("I14Z"),m=function(e){var a=e.pageContext,t=e.data,n=t.allMarkdownRemark,m=t.site,d=n.edges,u=m.siteMetadata.labels,p=a.tag,g=n.totalCount,f=g+" post"+(1===g?"":"s")+' tagged with "'+p+'"',E=u.reduce((function(e,a){return e[a.tag]=a,e}),{});return l.a.createElement(c.a,null,l.a.createElement(i.a,{title:"Home",keywords:["gatsby","javascript","react","web development","node.js","graphql"]}),l.a.createElement("div",{className:"index-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"post-list-main"},l.a.createElement("i",null,l.a.createElement("h2",{className:"heading"},f)),d.map((function(e){var a=e.node.frontmatter.tags;return l.a.createElement("div",{key:e.node.id,className:"container mt-5"},l.a.createElement(r.Link,{to:e.node.fields.slug,className:"text-dark"},l.a.createElement("h2",{className:"heading"},e.node.frontmatter.title)),l.a.createElement("small",{className:"d-block text-info"},"Posted on ",e.node.frontmatter.date),l.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),l.a.createElement(r.Link,{to:e.node.fields.slug,className:"text-primary"},l.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),l.a.createElement("div",{className:"d-block"},function(e){return e.map((function(e){var a=E[e];return a&&l.a.createElement(s.a,{key:e,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color,img:a.img})}))}(a)))})))))};m.defaultProps={pageContext:null,data:null};a.default=m},hudu:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("vOnD"),i=c.b.img.withConfig({displayName:"BioStyled__ProfileImgStyled",componentId:"bqsioc-0"})(["border-radius:50%;box-shadow:1px 1px 3px;min-width:100px;max-width:100px;"]),o=c.b.h3.withConfig({displayName:"BioStyled__AuthorBioStyled",componentId:"bqsioc-1"})(["font-family:Raleway;font-size:2vw;"]),s=c.b.small.withConfig({displayName:"BioStyled__SmallStyled",componentId:"bqsioc-2"})(["font-family:Raleway;"]),m=t("pTNS"),d=t.n(m),u=function(e){var a=e.author,t=e.tagline;return l.a.createElement("div",{className:"bio-main w-75"},l.a.createElement(i,{src:d.a,alt:""}),l.a.createElement(o,{className:"mt-2"},a),l.a.createElement(s,{className:"text-muted"},t))};u.defaultProps={author:"",tagline:""};var p=u,g=t("ma3e"),f={SideSocialLinks:c.b.div.withConfig({displayName:"SocialLinksStyled__SideSocialLinks",componentId:"sc-196e2bh-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr;"])},E=(t("HDCr"),function(e){var a=e.contacts;return l.a.createElement(f.SideSocialLinks,{className:"float-left mt-3 mb-3"},l.a.createElement("a",{className:"text-secondary p-2",href:a.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(g.f,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(g.e,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.stackoverflow},l.a.createElement("span",{title:"Stack Overflow"},l.a.createElement(g.g,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.freecodecamp},l.a.createElement("span",{title:"freeCodeCamp"},l.a.createElement(g.d,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:a.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(g.i,{size:26,style:{color:"secondary"}}))))});E.defaultProps={contacts:{}};var h=E,y=t("I14Z"),b=function(e){var a=e.labels,t=e.posts,n={},r=a.reduce((function(e,a){return n[a.tag]=a,t.filter((function(e){return!0===e.node.frontmatter.tags.includes(a.tag)})).length>0&&e.push(a.tag),e}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Tech Topics"),l.a.createElement("div",{className:"d-block"},r.map((function(e){var a=n[e];return a&&l.a.createElement(y.a,{key:e,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color,img:a.img})}))))};b.defaultProps={labels:[],posts:[]};var v=b,w={SiderbarMain:c.b.div.withConfig({displayName:"SidebarStyled__SiderbarMain",componentId:"sc-3ilkqr-0"})(["width:100%;"]),PageLinks:c.b.div.withConfig({displayName:"SidebarStyled__PageLinks",componentId:"sc-3ilkqr-1"})(["margin-top:3rem;padding-top:4rem;font-family:Raleway;"])};a.a=function(){return l.a.createElement(r.StaticQuery,{query:"1539267777",render:function(e){var a=e.site.siteMetadata,t=e.allMarkdownRemark;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.SiderbarMain,{className:"border-right"},l.a.createElement(p,{author:a.author,tagline:a.tagline}),l.a.createElement(h,{contacts:a.contacts}),l.a.createElement(w.PageLinks,null,l.a.createElement(r.Link,{to:"/"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),l.a.createElement(r.Link,{to:"/about"},l.a.createElement("span",{className:"text-dark d-block py-1"},"About")),l.a.createElement(r.Link,{to:"/archive"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),l.a.createElement("div",{className:"tech-tags mt-4"},l.a.createElement(v,{labels:a.labels,posts:t.edges}))))}})}}}]);
//# sourceMappingURL=component---src-templates-tag-js-b7ac9fc43c90ab11d9c7.js.map