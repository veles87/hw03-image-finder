(this["webpackJsonphw03-image-finder"]=this["webpackJsonphw03-image-finder"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(17),a(7)),i=a.n(c),l=a(11),u=a(9),h=a(3),m=a(4),d=a(6),p=a(5),b=(a(19),function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("11753469-fae5ae7c0c549b8c5c7373ba2","&image_type=photo&orientation=horizontal&per_page=12"));case 2:if((n=e.sent).ok){e.next=5;break}throw n;case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),j=b,f=a(1),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.changeHandler=function(t){e.setState({value:t.target.value})},e.submitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state.value.trim())},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.submitHandler,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeHandler,value:this.state.value})]})})}}]),a}(n.Component),O=g,v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image",onClick:this.props.showImageHandle})})}}]),a}(n.Component),y=v,x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("ul",{className:"ImageGallery",children:this.props.images.map((function(t,a){return Object(f.jsx)(y,{webformatURL:t.webformatURL,showImageHandle:e.props.showImageHandler(t.largeImageURL),index:a},t.id)}))})}}]),a}(n.Component),w=x,H=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("button",{type:"button",className:"Button",onClick:this.props.loadMoreHandler,children:"Load more"})}}]),a}(n.Component),k=H,S=a(12),I=a.n(S),L=(a(41),function(){return Object(f.jsx)("div",{className:"Loader",children:Object(f.jsx)(I.a,{type:"Bars",color:"#3f51b5",height:60,width:120})})}),C=document.querySelector("#modal-root"),M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).keyDownHandler=function(t){"Escape"===t.code&&e.props.onClose()},e.overlayClickHandler=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.overlayClickHandler,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:this.props.fullImageURL,alt:""})})}),C)}}]),a}(n.Component),N=M,U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,isLoading:!1,openModal:!1,error:""},e.maxPages=0,e.fullImageURL="",e.newElementHight=0,e.closeModal=function(){e.fullImageURL="",e.setState({openModal:!1})},e.showImageHandler=function(t){return function(){e.fullImageURL=t,e.setState({openModal:!0})}},e.scrollToHandler=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),750)},e.searchImagesHandler=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchQuery,r=a.page,e.setState({isLoading:!0,error:""}),t.prev=2,t.next=5,j(n,r);case 5:0!==(o=t.sent).total?(e.maxPages=Math.ceil(o.totalHits/12),e.setState((function(e){var t=e.images;return{images:[].concat(Object(l.a)(t),Object(l.a)(o.hits))}}))):e.setState((function(){return{images:[],error:"No results were found for your search."}})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0),e.setState((function(){return{error:t.t0.toString()}}));case 13:return t.prev=13,e.setState({isLoading:!1}),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])}))),e.loadMoreHandler=function(){e.setState((function(){return{page:Math.min(e.maxPages,e.state.page+1)}}))},e.onSubmitHandler=function(t){e.maxPages=0,e.setState((function(){return{images:[],searchQuery:t,page:1}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){(t.searchQuery!==this.state.searchQuery&&""!==this.state.searchQuery||t.page!==this.state.page)&&this.searchImagesHandler(),t.images.length!==this.state.images.length&&0!==t.images.length&&this.scrollToHandler()}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{onSubmit:this.onSubmitHandler}),this.state.error?Object(f.jsx)("p",{className:"ErrorText",children:this.state.error}):Object(f.jsx)(w,{images:this.state.images,showImageHandler:this.showImageHandler,scrollToHandler:this.scrollToHandler}),this.state.isLoading&&Object(f.jsx)(L,{}),this.state.page<this.maxPages&&Object(f.jsx)(k,{loadMoreHandler:this.loadMoreHandler}),this.state.openModal&&Object(f.jsx)(N,{fullImageURL:this.fullImageURL,onClose:this.closeModal})]})}}]),a}(n.Component),R=U;s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f1d6d37a.chunk.js.map