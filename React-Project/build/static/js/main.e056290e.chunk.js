(window.webpackJsonpreactecommerce=window.webpackJsonpreactecommerce||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=(a(30),a(24)),c=a(6),s=a(7),m=a(9),u=a(8),d=a(10),h=a(5),p=a(11);var g=function(e){var t=e.isUserLoggedIn,a=e.loading;return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"plaidLogo nav-ul__li"},r.a.createElement("img",{src:"img/plaid-shirt.svg",alt:"Plaid Shirt Icon"})),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/products"},"Our Sets Of Styles")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/contact"},"Contact")),!t&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/signIn"},"Sign In")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/signUp"},"Sign Up"))):null,t&&r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/signOut"},"Sign Out")))))};var E=function(e){var t=e.images,a=e.currentIndex,n=e.goToNextSlide,l=e.goToPrevSlide,o={background:"linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(t[a],") 25% 85% / cover")};return r.a.createElement("div",{className:"slider"},r.a.createElement("button",{className:"slider__next",onClick:n},"\u276f"),r.a.createElement("button",{className:"slider__prev",onClick:l},"\u276e"),r.a.createElement("ul",{className:"slider__slides"},r.a.createElement("li",{style:o},0===a?"Plaid Me":"")))};var f=function(e){var t=e.images,a=e.currentIndex,n=e.goToNextSlide,l=e.goToPrevSlide;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{images:t,currentIndex:a,goToNextSlide:n,goToPrevSlide:l}),r.a.createElement("h1",{className:"winterh1"},"How To Get Ready With Plaid For This Winter's Fashion Season!"),r.a.createElement("div",{className:"fashion"},r.a.createElement("h2",{className:"top-story"}," The Top Story"),r.a.createElement("p",{className:"content"},"\u201cOnce you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy,\u201d Albert Einstein, the greatest nuclear physicist of the 20th century and an unlikely fashion muse, once averred. Turns out Al, who had his own distinctive brand of disheveled chic, was on to something beyond a mere theory of relativity. (Which is not, by the way, a treatise on how to get along with your family at dinner next week.) Far beyond its association with detested school uniforms, plaid, worn with or without stripes, has a rich backstory: Though usually associated with kilt-wearing Scottish Highlanders, there is a much older history. A shard of the fabric was found buried with the remains of \u201cthe Cherchen Man,\u201d a 3,000-year-old mummy uncovered in the western Chinese desert.")),r.a.createElement("div",{className:"fashion"},r.a.createElement("h2",null," Some Options To Add To Your Closet!"),r.a.createElement("p",{className:"content"},"Mulberry Sophia jacket, $1,415, mulberry.com; Mulberry Marianne skirt, $625, mulberry.com"),r.a.createElement("p",{className:"content"},"Topshop Boutique check peg pants, $150, topshop.com"),r.a.createElement("p",{className:"content"},"Nicole Saldan\xf1a Deborah plaid pumps, $357, farfetch.com"),r.a.createElement("p",{className:"content"},"House of Dagmar beata cardigan, $243, houseofdagmar.com; House of Dagmar teja skirt, $298, houseofdagmar.com")))};var v=function(e){var t;return t=e.filteredProducts.length>0?e.filteredProducts:e.products,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Plaid Me"),r.a.createElement("h2",null,"The New Set Of Vinatge Fashion"),r.a.createElement("h3",null,"Filter Your Choice Down Below!"),r.a.createElement("div",{className:"filter-container"},r.a.createElement("select",{id:"filter",className:"filterType",onChange:e.filterProductsFunc},r.a.createElement("option",{value:"none"},"Filter By Type"),r.a.createElement("option",{value:"Bottoms"},"Bottoms"),r.a.createElement("option",{value:"Overlay"},"Overlay"),r.a.createElement("option",{value:"Shoes"},"Shoes"),r.a.createElement("option",{value:"Dresses"},"Dresses"),r.a.createElement("option",{value:"Skirts"},"Skirts")),r.a.createElement("select",{className:"filterPrice",onChange:e.filterProductsFunc},r.a.createElement("option",{value:"none"},"Filter By Price"),r.a.createElement("option",{value:"high"},"Highest to Lowest"),r.a.createElement("option",{value:"low"},"Lowest to Highest"))),r.a.createElement("div",{className:"products-container"},t.map(function(e){return r.a.createElement("figure",{className:"image-container"},r.a.createElement("img",{src:e.IMG_SRC,alt:e.Product_Name}),r.a.createElement("figcaption",null,e.Product_Name),r.a.createElement("p",null,"$",e.Price))})))};var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Plaid Me"),r.a.createElement("h2",null,"Let's Chat About Your Order!"),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"sform"},r.a.createElement("form",{action:"",class:"contact-page-form"},r.a.createElement("label",{for:"fname"},"First Name"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"First Name",required:!0}),r.a.createElement("label",{for:"lname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Last Name",required:!0}),r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("label",{for:"country"},"Country"),r.a.createElement("select",{id:"country",name:"country",required:!0,className:"country-select"},r.a.createElement("option",{value:"uk"},"UK"),r.a.createElement("option",{value:"canada"},"Canada"),r.a.createElement("option",{value:"usa"},"USA")),r.a.createElement("label",{for:"comments"},"Comments"),r.a.createElement("textarea",{id:"comments",name:"comments",placeholder:"Write Something.."}),r.a.createElement("input",{type:"submit",value:"Submit"})))))};var y=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"plaidLogo nav-ul__li"},r.a.createElement("img",{src:"/img/plaid-shirt.svg",alt:"Plaid Shirt Icon"})),r.a.createElement("p",{className:"plaidPhrase"},"Plaid Me: A New Set Of Vinatge Fashion!"),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://twitter.com/?lang=en",target:"_blank",rel:"noopener noreferrer"}," Our Twitter")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},"Our Facebook")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://www.instagram.com/?hl=en",target:"_blank",rel:"noopener noreferrer"},"Our Instagram")))))},w=(a(36),a(14)),N=(a(20),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(w.a)({},r,n))},a.onFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;fetch("/api/newUser",{method:"POST",body:JSON.stringify({email:n,password:r}),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status&&(a.props.history.push("/"),window.location.reload())})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sign Up!"),r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",{htmlFor:"sign_up_email"},"Email"),r.a.createElement("input",{type:"email",id:"sign_up_email",name:"email",onChange:this.onInputChange,required:!0}),r.a.createElement("label",{htmlFor:"sign_in_password"},"Password"),r.a.createElement("input",{type:"password",id:"sign_in_password",name:"password",onChange:this.onInputChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component)),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(w.a)({},r,n))},a.onFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;fetch("/api/authenticateUser",{method:"POST",body:JSON.stringify({email:n,password:r}),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status&&(a.props.history.push("/"),window.location.reload())})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sign In!"),r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"sign-in-form"},r.a.createElement("div",{className:"sign-in-form__input-container"},r.a.createElement("label",{htmlFor:"sign_in_email",className:"label"},"Email:"),r.a.createElement("input",{type:"email",id:"sign_in_email",name:"email",onChange:this.onInputChange,required:!0})),r.a.createElement("div",{className:"sign-in-form__input-container"},r.a.createElement("label",{htmlFor:"sign_in_password",className:"label"},"Password:"),r.a.createElement("input",{type:"password",id:"sign_in_password",name:"password",onChange:this.onInputChange,required:!0})),r.a.createElement("input",{type:"submit",value:"Submit",className:"submitButton-signIn"})))}}]),t}(r.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.signOut()}},{key:"render",value:function(){return r.a.createElement(p.a,{to:"/signIn"})}}]),t}(r.a.Component);var O=function(){return"Error: Not authorized"},P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],filteredProducts:[],images:["/img/fashionWeek.jpg","/img/modelsWeek.jpg","/img/plaidWeek.jpg","/img/versaceWeek.jpg"],currentIndex:0,isUserLoggedIn:!1,loading:!0},a.goToPrevSlide=function(){0!==a.state.currentIndex&&a.setState({currentIndex:a.state.currentIndex-1})},a.goToNextSlide=function(){if(a.state.currentIndex===a.state.images.length-1)return a.setState({currentIndex:0});a.setState({currentIndex:a.state.currentIndex+1})},a.filterProducts=function(){var e=Object(i.a)(a.state.products),t=document.querySelector(".filterType").value,n=document.querySelector(".filterPrice").value;"none"!==t&&(e=e.filter(function(e){return e.Category===t})),"none"!==n&&("low"===n?e.sort(function(e,t){return Number(e.Price)-Number(t.Price)}):"high"===n&&e.sort(function(e,t){return Number(t.Price)-Number(e.Price)})),a.setState({filteredProducts:e})},a.signOut=function(){fetch("/api/signOut",{method:"GET"}).then(function(e){window.location.reload()})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/checkToken").then(function(e){return e.json()}).then(function(t){200!==t.status?e.setState({isUserLoggedIn:!1,loading:!0}):e.setState({isUserLoggedIn:!0,loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isUserLoggedIn,n=t.loading;return r.a.createElement(h.a,null,r.a.createElement(g,{signOut:this.signOut,isUserLoggedIn:a,loading:n}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f,{images:e.state.images,currentIndex:e.state.currentIndex,goToNextSlide:e.goToNextSlide,goToPrevSlide:e.goToPrevSlide})}}),r.a.createElement(p.b,{path:"/products",render:function(){return a?r.a.createElement(v,{products:e.state.products,filterProductsFunc:e.filterProducts,filteredProducts:e.state.filteredProducts}):r.a.createElement(O,null)}}),r.a.createElement(p.b,{path:"/contact",component:b}),r.a.createElement(p.b,{path:"/signUp",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(p.b,{path:"/signIn",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(p.b,{path:"/signOut",render:function(){return r.a.createElement(_,{signOut:e.signOut})}})),r.a.createElement(y,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.e056290e.chunk.js.map