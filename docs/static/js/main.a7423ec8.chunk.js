(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),r=c(16),n=c.n(r),l=(c(23),c(14)),o=c(2),j=(c(24),c(4)),h=(c(25),c.p+"static/media/Rick-Morty_logo.de13d484.png"),d=function(e){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:h,alt:"Logo Rick and Morty",title:"Back to landing page"})})})},m=(c(31),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("p",{className:"footer__copyright",children:["Made with"," ",Object(a.jsx)("i",{className:"fa fa-heart footer__copyright--icon","aria-hidden":"true"})," ","by"," ",Object(a.jsxs)("a",{className:"footer__copyright--author",href:"https://www.linkedin.com/in/aliciacolomortega/",target:"_blank",title:"Link to Alicia Colom LinkedIn",children:[" ","Alicia Colom"," "]})]}),Object(a.jsx)("a",{className:"footer__small",href:"https://twitter.com/hashtag/PromoKizzy?src=hashtag_click",target:"_blank",title:"Link to Twitter hashtag #PromoKizzy",children:" Twitter #PromoKizzy "})]})})}),b=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"landing",children:[Object(a.jsx)("h1",{className:"landing__title",children:"Find the craziest characters from your favourite TV show and know them better"}),Object(a.jsx)(j.b,{to:"/home",className:"landing__link",title:"Go to Rick and Morty finder",children:"Let's go!"})]}),Object(a.jsx)(m,{})]})},u=(c(32),c(33),c.p,c(34),function(e){var t=function(e){console.log("filtro por gender",e.target.value)},c=e.resultList.map((function(e){return Object(a.jsx)("option",{value:e.species,children:e.species},e.id)}));return Object(a.jsxs)("form",{className:"filter",children:[Object(a.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(a.jsx)("label",{htmlFor:"status",children:"Status: "}),Object(a.jsxs)("select",{className:"filter__select",name:"status",id:"status",onChange:function(e){console.log("filtro por status",e.target.value)},children:[Object(a.jsx)("option",{value:"Alive",children:"Alive"}),Object(a.jsx)("option",{value:"Dead",children:"Dead"}),Object(a.jsx)("option",{value:"unknown",children:"unknown"})]})]}),Object(a.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(a.jsx)("label",{htmlFor:"Female",children:"Female"}),Object(a.jsx)("input",{type:"radio",id:"Female",name:"gender",value:"Female",className:"filter__gender",onChange:t}),Object(a.jsx)("label",{htmlFor:"Male",children:"Male"}),Object(a.jsx)("input",{type:"radio",id:"Male",name:"gender",value:"Male",onChange:t}),Object(a.jsx)("label",{htmlFor:"unknown",children:"unknown"}),Object(a.jsx)("input",{type:"radio",id:"unknown",name:"gender",value:"unknown",onChange:t})]}),Object(a.jsxs)("fieldset",{className:"filter__fieldset",children:[Object(a.jsx)("label",{htmlFor:"specie",children:"Species: "}),Object(a.jsx)("select",{className:"filter__select",name:"specie",id:"specie",onChange:function(e){console.log("filtro por specie",e.target.value)},children:c})]})]})}),x=(c(35),function(e){return Object(a.jsxs)("article",{className:"character-card",children:[Object(a.jsx)("img",{src:e.character.image,alt:"Here will apperas the face of "+e.character.name,title:"This is "+e.character.name,className:"character-card__img"}),Object(a.jsxs)("div",{className:"character-card__info",children:[Object(a.jsx)("h2",{className:"character-card__info--name",children:e.character.name}),Object(a.jsx)("p",{className:"character-card__info--paragraph",children:e.character.species}),Object(a.jsx)(j.b,{to:"/info/".concat(e.character.name),className:"character-card__info--link",children:"+ info"})]})]})}),O=(c(36),c.p+"static/media/Rick-Morty_men-in-black.a97e92ff.png"),f=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"There is nothing in here"}),Object(a.jsx)("img",{src:O,alt:"Rick and Morty keep driving",className:"imgNotResults"}),Object(a.jsx)("h2",{children:"Keep browsing"})]})},p=function(e){var t=e.resultList.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(x,{character:e})},e.id)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"character-list",children:[Object(a.jsxs)("form",{action:"",className:"character-list__form",children:[Object(a.jsx)("legend",{htmlFor:"searchInput",className:"character-list__form--legend",children:"Who are you looking for?"}),Object(a.jsxs)("div",{className:"character-list__form--container",children:[Object(a.jsx)("i",{className:"fa fa-search character-list__form--icon","aria-hidden":"true"}),Object(a.jsx)("input",{id:"searchInput",type:"text",className:"character-list__form--input",title:"Enter here the name of the character you are looking for",placeholder:"Write right here...",onSubmit:function(e){e.preventDefault()},onChange:function(t){e.handleInputValue(t.currentTarget.value)}})]})]}),Object(a.jsx)(u,{resultList:e.resultList}),0!==e.resultList.length?Object(a.jsx)("ul",{className:"character-list__list",children:t}):Object(a.jsx)(f,{})]}),Object(a.jsx)(m,{})]})},_=(c(37),c.p+"static/media/death-icon.b7c3daa8.png"),g=c.p+"static/media/yay-icon.feab6746.svg",N=function(e){var t=e.detail.episode.map((function(e,t){var c=e.replace("https://rickandmortyapi.com/api/episode/","");return Object(a.jsxs)("option",{className:"detail__episodes--item",value:e,children:["E",c]})}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"character-detail",children:[Object(a.jsx)(j.b,{to:"/home",className:"character-detail__link",title:"Back to your search",children:"Back to search"}),Object(a.jsxs)("div",{className:"character-detail__container",children:[Object(a.jsx)("img",{src:e.detail.image,alt:"Image of "+e.detail.name,title:"This is "+e.detail.name,className:"character-detail__container--img"}),Object(a.jsxs)("div",{className:"character-detail__container--info detail",children:[Object(a.jsxs)("div",{className:"character-detail__container--header",children:[Object(a.jsx)("h2",{className:"detail__name",children:e.detail.name}),Object(a.jsx)("img",{src:"Dead"===e.detail.status?_:g,alt:"Status icon",title:"Status of the character",className:"detail__statusIcon"})]})," ",Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Status: "}),e.detail.status]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Specie: "}),e.detail.species]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Gender: "}),e.detail.gender]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Origin: "}),e.detail.origin.name]}),Object(a.jsxs)("div",{className:"detail__episodes",children:[Object(a.jsxs)("label",{htmlFor:"episodes",children:[Object(a.jsx)("b",{children:"Appears in "}),41===e.detail.episode.length?"all":e.detail.episode.length," ","episodes"]}),Object(a.jsx)("select",{className:"detail__episodes--list",id:"episodes",name:"episodes",title:"Number of episodes where character appears",children:t})]})]})]})]}),Object(a.jsx)(m,{})]})},k=(c(38),function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{className:"error",children:[Object(a.jsx)(j.b,{to:"/home",className:"error__link",children:"Try again your search"}),Object(a.jsxs)("div",{className:"error__container",children:[Object(a.jsx)("h1",{className:"error__container--title",children:"This character doesn't exist."}),Object(a.jsx)("h2",{children:"I mean... It doesn't exist dead or alive."}),Object(a.jsx)("h3",{children:"It's your invention, dude. "}),Object(a.jsx)("h4",{children:"You made it up!!"}),Object(a.jsx)("h5",{children:"Do you think you are better than us?!"}),Object(a.jsx)("h6",{children:"What the *$%* !?"})]})]}),Object(a.jsx)(m,{})]})}),v=function(e){return fetch("https://rickandmortyapi.com/api/character/?name="+e).then((function(e){return e.json()})).then((function(e){return e}))},y=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)([]),n=Object(l.a)(r,2),j=n[0],h=n[1];Object(s.useEffect)((function(){v(c).then((function(e){h(e.results)}))}),[c]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(b,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/home",children:Object(a.jsx)(p,{resultList:j,handleInputValue:function(e){i(e)}})}),Object(a.jsx)(o.a,{exact:!0,path:"/info/:characterName",component:function(e){var t=e.match.params.characterName,c=j.find((function(e){return t===e.name}));return c?Object(a.jsx)(N,{detail:c}):Object(a.jsx)(k,{})}})]})})};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a7423ec8.chunk.js.map