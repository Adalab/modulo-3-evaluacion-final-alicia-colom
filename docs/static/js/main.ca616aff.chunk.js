(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),n=a.n(r),i=a(16),s=a.n(i),l=(a(23),a(9)),o=a(2),d=(a(24),a(4)),j=(a(25),a.p+"static/media/Rick-Morty_logo.de13d484.png"),h=function(e){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("img",{className:"header__logo",src:j,alt:"Logo Rick and Morty",title:"Back to landing page"})})})},m=(a(31),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsxs)("p",{className:"footer__copyright",children:["Made with"," ",Object(c.jsx)("i",{className:"fa fa-heart footer__copyright--icon","aria-hidden":"true"})," ","by"," ",Object(c.jsxs)("a",{className:"footer__copyright--author",href:"https://www.linkedin.com/in/aliciacolomortega/",target:"_blank",rel:"noreferrer",title:"Link to Alicia Colom LinkedIn",children:[" ","Alicia Colom"," "]})]}),Object(c.jsx)("a",{className:"footer__small",href:"https://twitter.com/hashtag/PromoKizzy?src=hashtag_click",target:"_blank",rel:"noreferrer",title:"Link to Twitter hashtag #PromoKizzy",children:"2020 Adalab #PromoKizzy"})]})})}),b=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"landing",children:[Object(c.jsx)(h,{}),Object(c.jsxs)("main",{className:"landing__main",children:[Object(c.jsx)("h1",{className:"landing__main--title",children:"Find the craziest characters from your favourite TV show and know them better"}),Object(c.jsx)(d.b,{to:"/home",className:"landing__main--link",title:"Go to Rick and Morty finder",children:"Let's go!"})]}),Object(c.jsx)(m,{})]})})},u=(a(32),a(33),a.p,a(34),function(e){var t=function(t){var a=t.target.value;return e.handleFilterGender(a)},a=e.resultList.map((function(e){return Object(c.jsx)("option",{value:e.species,children:e.species},e.id)}));return Object(c.jsxs)("form",{className:"filter",children:[Object(c.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(c.jsx)("label",{htmlFor:"status",children:"Status: "}),Object(c.jsxs)("select",{className:"filter__select",name:"status",id:"status",onChange:function(t){var a=t.target.value;return e.handleFilterStatus(a)},children:[Object(c.jsx)("option",{value:"All",children:"All"}),Object(c.jsx)("option",{value:"Alive",children:"Alive"}),Object(c.jsx)("option",{value:"Dead",children:"Dead"}),Object(c.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(c.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(c.jsxs)("div",{className:"filter__gender",children:[Object(c.jsx)("label",{htmlFor:"All",children:"All"}),Object(c.jsx)("input",{type:"radio",id:"All",name:"gender",value:"All",onChange:t})]}),Object(c.jsxs)("div",{className:"filter__gender",children:[Object(c.jsx)("label",{htmlFor:"female",children:"Female"}),Object(c.jsx)("input",{type:"radio",id:"female",name:"gender",value:"female",onChange:t})]}),Object(c.jsxs)("div",{className:"filter__gender",children:[Object(c.jsx)("label",{htmlFor:"male",children:"Male"}),Object(c.jsx)("input",{type:"radio",id:"male",name:"gender",value:"male",onChange:t})]}),Object(c.jsxs)("div",{className:"filter__gender",children:[Object(c.jsx)("label",{htmlFor:"unknown",children:"Other"}),Object(c.jsx)("input",{type:"radio",id:"unknown",name:"gender",value:"unknown",onChange:t})]})]}),Object(c.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(c.jsx)("label",{htmlFor:"specie",children:"Species: "}),Object(c.jsx)("select",{className:"filter__select",name:"specie",id:"specie",onChange:function(e){console.log("filtro por specie",e.target.value)},children:a})]}),Object(c.jsx)("fieldset",{className:"filter__fieldset",children:Object(c.jsxs)("div",{className:"filter__gender",children:[Object(c.jsx)("label",{htmlFor:"sort",children:"Sort by name"}),Object(c.jsx)("input",{type:"checkbox",id:"sort",name:"gender",value:"isSort",onChange:function(t){var a=t.target.checked;return e.handleSort(a)}})]})})]})}),O=(a(35),a.p+"static/media/death-icon.b7c3daa8.png"),x=a.p+"static/media/yay-icon.feab6746.svg",f=function(e){return Object(c.jsxs)("article",{className:"character-card",children:[Object(c.jsx)("img",{src:"Dead"===e.character.status?O:x,alt:"Status icon",title:"Status of the character",className:"character-card__info--statusIcon"})," ",Object(c.jsx)("img",{src:e.character.image,alt:"Here will apperas the face of "+e.character.name,title:"This is "+e.character.name,className:"character-card__img"}),Object(c.jsxs)("div",{className:"character-card__info",children:[Object(c.jsx)("h2",{className:"character-card__info--name",children:e.character.name}),Object(c.jsx)("p",{className:"character-card__info--paragraph",children:e.character.species}),Object(c.jsx)("small",{className:"character-card__info--small",children:"+ info"})]})]})},p=(a(36),a.p+"static/media/Rick-Morty_men-in-black.a97e92ff.png"),_=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"There is nothing in here"}),Object(c.jsx)("img",{src:p,alt:"Rick and Morty keep driving",className:"imgNotResults"}),Object(c.jsx)("h2",{children:"Keep browsing"})]})},g=function(e){var t=e.resultList.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/info/".concat(e.name),className:"character-list__list--link",children:Object(c.jsx)(f,{character:e})})},e.id)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"character-list",children:[Object(c.jsx)(h,{}),Object(c.jsxs)("main",{className:"character-list__main",children:[Object(c.jsxs)("form",{action:"",className:"character-list__form",children:[Object(c.jsx)("label",{htmlFor:"searchInput",className:"character-list__form--label",children:"Who are you looking for?"}),Object(c.jsxs)("div",{className:"character-list__form--container",children:[Object(c.jsx)("i",{className:"fa fa-search character-list__form--icon","aria-hidden":"true"}),Object(c.jsx)("input",{id:"searchInput",type:"text",className:"character-list__form--input",title:"Enter here the name of the character you are looking for",placeholder:"Write right here...",value:e.userSearch,onSubmit:function(e){e.preventDefault()},onChange:function(t){e.handleInputValue(t.currentTarget.value)}})]})]}),Object(c.jsx)(u,{initialList:e.initialList,resultList:e.resultList,handleFilterStatus:e.handleFilterStatus,handleFilterGender:e.handleFilterGender,handleSort:e.handleSort}),Object(c.jsx)("div",{children:0===e.resultList.length?Object(c.jsx)(_,{}):Object(c.jsx)("ul",{className:"character-list__list",children:t})})]}),Object(c.jsx)(m,{})]})})},N=(a(37),function(e){var t=e.detail.episode.map((function(e,t){var a=e.replace("https://rickandmortyapi.com/api/episode/","");return Object(c.jsxs)("option",{value:e,children:["E",a]},t)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"character-detail",children:[Object(c.jsx)(h,{}),Object(c.jsxs)("main",{className:"character-detail__main",children:[Object(c.jsx)(d.b,{to:"/home",className:"character-detail__link",title:"Back to your search",children:"Back to search"}),Object(c.jsxs)("div",{className:"character-detail__container",children:[Object(c.jsx)("img",{src:e.detail.image,alt:"Image of "+e.detail.name,title:"This is "+e.detail.name,className:"character-detail__container--img"}),Object(c.jsxs)("div",{className:"character-detail__container--info detail",children:[Object(c.jsxs)("div",{className:"character-detail__container--header",children:[Object(c.jsx)("h2",{className:"detail__name",children:e.detail.name}),Object(c.jsx)("img",{src:"Dead"===e.detail.status?O:x,alt:"Status icon",title:"Status of the character",className:"detail__statusIcon"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Status: "}),e.detail.status]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Specie: "}),e.detail.species]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Gender: "}),e.detail.gender]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Origin: "}),e.detail.origin.name]}),Object(c.jsxs)("div",{className:"detail__episodes",children:[Object(c.jsxs)("label",{htmlFor:"episodes",children:[Object(c.jsx)("b",{children:"Appears in "}),41===e.detail.episode.length?"all":e.detail.episode.length," ","episodes"]}),Object(c.jsxs)("select",{className:"detail__episodes--list",id:"episodes",name:"episodes",title:"Number of episodes where character appears",children:[Object(c.jsx)("option",{value:"List",children:"List"}),t]})]})]})]})]}),Object(c.jsx)(m,{})]})})}),v=(a(38),function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("main",{className:"error",children:Object(c.jsxs)("div",{className:"error__container",children:[Object(c.jsx)(d.b,{to:"/home",className:"error__container--link",children:"Try again your search"})," ",Object(c.jsx)("h1",{className:"error__container--title",children:"This character doesn't exist."}),Object(c.jsx)("h2",{children:"I mean... It doesn't exist dead or alive."}),Object(c.jsx)("h3",{children:"It's your invention, dude. "}),Object(c.jsx)("h4",{children:"You made it up!!"}),Object(c.jsx)("h5",{children:"Do you think you are better than us?!"}),Object(c.jsx)("h6",{children:"What the *$%* !?"})]})})})}),k=function(e){return fetch("https://rickandmortyapi.com/api/character/?name="+e).then((function(e){return e.json()})).then((function(e){return e}))},y=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),d=s[0],j=s[1],h=Object(r.useState)([]),m=Object(l.a)(h,2),u=m[0],O=m[1],x=Object(r.useState)("All"),f=Object(l.a)(x,2),p=f[0],_=f[1],y=Object(r.useState)("All"),S=Object(l.a)(y,2),F=S[0],w=S[1],L=Object(r.useState)(!1),A=Object(l.a)(L,2),C=A[0],I=A[1];Object(r.useEffect)((function(){k(a).then((function(e){j(e.results),O(e.results)}))}),[a]);var M=d.filter((function(e){return"All"===p||e.status.toLowerCase()===p})).filter((function(e){return"All"===F||e.gender.toLowerCase()===F})).sort((function(e,t){return C?e.name>t.name?1:e.name<t.name?-1:0:0}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(b,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/home",children:Object(c.jsx)(g,{initialList:d,resultList:M,handleSort:function(e){return I(e)},userSearch:a,handleInputValue:function(e){n(e)},handleFilterStatus:function(e){return _(e)},handleFilterGender:function(e){return w(e)}})}),Object(c.jsx)(o.a,{exact:!0,path:"/info/:characterName",component:function(e){var t=e.match.params.characterName,r=u.find((function(e){return t===e.name}));return r?Object(c.jsx)(N,{detail:r,userSearch:a}):Object(c.jsx)(v,{})}})]})})};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ca616aff.chunk.js.map