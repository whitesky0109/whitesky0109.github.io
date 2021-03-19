(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3XHS":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("Bl7J"),s=t("vrFN"),r=t("ma3e"),i=(t("EDuE"),t("FRpb")),m=t("o+pQ");a.default=function(e){var a=e.data.site.siteMetadata.labels,t=["react","nodejs","html","css"],l={};return a.forEach((function(e){t.forEach((function(a){a===e.tag&&(l[a]=e.name)}))})),n.a.createElement(c.a,null,n.a.createElement(s.a,{title:"About"}),n.a.createElement("div",{className:"post-page-main"},n.a.createElement("div",{className:"sidebar px-4 py-2"},n.a.createElement(i.a,null)),n.a.createElement("div",{className:"post-main"},n.a.createElement(s.a,{title:"About"}),n.a.createElement("div",{className:"mt-3"},n.a.createElement("h2",{className:"heading"},"About"),n.a.createElement("p",null,n.a.createElement("i",null,"Developer Diary is a Gatsby Starter blog template created with web developers in mind, but really, anyone can use it. It's totally usable right out of the box, but minimalist enough to be easily modifiable to suit your needs.")),n.a.createElement("br",null),n.a.createElement("h4",null,"Features"),n.a.createElement("div",null,n.a.createElement("span",{className:"text-success d-inline-block",title:"blazing"},n.a.createElement(r.a,{size:26,style:{color:"success"}})),n.a.createElement("p",{className:"d-inline-block ml-3 w-75 align-top"},"Blazing fast, as you'd expect from a Gatsby site")),n.a.createElement("div",null,n.a.createElement("span",{className:"text-success d-inline-block",title:"tags"},n.a.createElement(r.a,{size:26,style:{color:"success"}})),n.a.createElement("p",{className:"d-inline-block ml-3 w-75 align-top"},"Tech tags designed for web developers"),n.a.createElement("div",{className:"ml-5"},n.a.createElement(m.a,{tag:"react",tech:"React",name:l.react,size:20,color:"deepskyblue"}),n.a.createElement(m.a,{tag:"nodejs",tech:"Node.js",name:l.nodejs,size:20,color:"lightgreen"}),n.a.createElement(m.a,{tag:"html",tech:"HTML",name:l.html,size:20,color:"darkorange"}),n.a.createElement(m.a,{tag:"css",tech:"CSS",name:l.css,size:20,color:"teal"}))),n.a.createElement("div",{className:"mt-4"},n.a.createElement("span",{className:"text-success d-inline-block",title:"prism"},n.a.createElement(r.a,{size:26,style:{color:"success"}})),n.a.createElement("p",{className:"d-inline-block ml-3 w-75 align-top"},"Includes Prism for code block styling in markdown files")),n.a.createElement("div",null,n.a.createElement("span",{className:"text-success d-inline-block",title:"icons"},n.a.createElement(r.a,{size:26,style:{color:"success"}})),n.a.createElement("p",{className:"d-inline-block ml-3 w-75 align-top"},"Developer-relevant social-media icon links including GitHub, Stack Overflow and freeCodeCamp")),n.a.createElement("div",null,n.a.createElement("span",{className:"text-success d-inline-block",title:"mobile"},n.a.createElement(r.a,{size:26,style:{color:"success"}})),n.a.createElement("p",{className:"d-inline-block ml-3 w-75 align-top"},"Mobile responsive, of course"))))))}},"6MZL":function(e,a,t){},EDuE:function(e,a,t){},FRpb:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=t("Wbzz"),s=(t("HDCr"),t("coSX")),r=t.n(s),i=function(e){var a=e.author,t=e.tagline;return n.a.createElement("div",{className:"bio-main w-75"},n.a.createElement("img",{src:r.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.a.createElement("h3",{className:"mt-2 author-bio"},a),n.a.createElement("small",{className:"text-muted"},t))},m=t("ma3e"),o=function(e){var a=e.contacts;return n.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.a.createElement("a",{className:"text-secondary p-2",href:a.linkedin},n.a.createElement("span",{title:"Linked In"},n.a.createElement(m.f,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.github},n.a.createElement("span",{title:"GitHub"},n.a.createElement(m.e,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.stackoverflow},n.a.createElement("span",{title:"Stack Overflow"},n.a.createElement(m.g,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.freecodecamp},n.a.createElement("span",{title:"freeCodeCamp"},n.a.createElement(m.d,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.twitter},n.a.createElement("span",{title:"Twitter"},n.a.createElement(m.i,{size:26,style:{color:"secondary"}}))))},d=t("o+pQ"),u=function(e){var a=e.labels,t=e.posts,l=a.map((function(e){var a=0;return t.forEach((function(t){t.node.frontmatter.tags.includes(e.tag)&&(a+=1)})),[e.tag,a]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",null,"Tech Topics"),n.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,l){a.forEach((function(a){e===a.tag&&t.push(n.a.createElement(d.a,Object.assign({key:l},a)))}))})),t}(l)))};a.a=function(){return n.a.createElement(c.StaticQuery,{query:"1539267777",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sidebar-main border-right"},n.a.createElement(i,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.a.createElement(o,{contacts:e.site.siteMetadata.contacts}),n.a.createElement("div",{className:"page-links"},n.a.createElement(c.Link,{to:"/"},n.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),n.a.createElement(c.Link,{to:"/about"},n.a.createElement("span",{className:"text-dark d-block py-1"},"About")),n.a.createElement(c.Link,{to:"/archive"},n.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),n.a.createElement("div",{className:"tech-tags mt-4"},n.a.createElement(u,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},HDCr:function(e,a,t){},"o+pQ":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=(t("6MZL"),t("Wbzz"));a.a=function(e){var a=e.tag,t=e.tech,l=e.name,s=e.size,r=e.color,i=e.img;return n.a.createElement("div",{className:"d-inline-block p-1"},n.a.createElement(c.Link,{to:"/tags/"+a+"/"},n.a.createElement("button",{className:"tech-tag text-white"},n.a.createElement("p",{className:"d-inline"},t," "),n.a.createElement("div",{className:"d-inline",style:{fontSize:s,color:r}},n.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:s,height:s,style:{fill:""+r}},n.a.createElement("title",null,t),null!=i&&n.a.createElement("image",{href:i,width:s,height:s}),null!=l&&(Array.isArray(l)?l.map((function(e,a){return n.a.createElement("path",{key:a,d:e})})):n.a.createElement("path",{d:l})))))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-336ef20bae35643dacda.js.map