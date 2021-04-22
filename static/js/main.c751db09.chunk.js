(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),o=n.n(c),i=(n(14),n(3)),s=n(4),l=n(6),u=n(5),h=(n(15),n(0)),d=function(e){var t=e.children;return Object(h.jsx)("div",{className:"Container",children:t})},g=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})})}}]),n}(r.Component)),j=n(2),y=n.n(j),b=(n(20),function(e){var t=e.largeImageURL,n=e.tags;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})})});b.protoTypes={largeImageURL:y.a.string.isRequired,tags:y.a.string.isRequired};var f=b,p=n(8),m=(n(21),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",gallery:[]},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"Search images and photos"})]})})}}]),n}(r.Component));m.protoTypes={handleSubmit:y.a.func.isRequired,handleChange:y.a.func.isRequired};var v=m,O=(n(22),function(e){var t=e.gallery,n=e.tags;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,r=e.webformatURL;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:r,alt:n,className:"ImageGalleryItem-image"})},t)}))})});O.protoTypes={gallery:y.a.array.isRequired,id:y.a.string.isRequired,webformatURL:y.a.string.isRequired,tags:y.a.string.isRequired};var x=O,w=(n(23),function(e){var t=e.onClick;return Object(h.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})});w.protoTypes={onClick:y.a.func.isRequired};var S=w,k=function(e){var t=e.searchQuery,n=void 0===t?"":t,r=e.currentPage,a=void 0===r?1:r,c=e.pageSize,o=void 0===c?12:c,i="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(n,"&page=").concat(a,"&per_page=").concat(o,"&key=").concat("20386842-9f390c2ddb67ac927c9e310bb");return fetch(i).then((function(e){return e.json()})).then((function(e){var t=e.hits;return console.log(t),a+=1,t})).catch((function(e){return console.log(e)}))},C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",gallery:[],currentPage:1,searchQuery:"",isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[],error:null})},e.fetchGallery=function(){var t=e.state,n=t.currentPage,r={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoading:!0}),k(r).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(p.a)(e.gallery),Object(p.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.isLoading,r=e.error,a=!!t.length;return Object(h.jsxs)("div",{children:[r&&Object(h.jsx)("h1",{children:"Error!"}),Object(h.jsx)(v,{onSubmit:this.onChangeQuery}),Object(h.jsx)(x,{gallery:t}),n&&Object(h.jsx)("p",{children:"Loading..."}),a&&Object(h.jsx)(S,{onClick:this.fetchGallery})]})}}]),n}(r.Component),q=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",gallery:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(e){e.preventDefault();var t=e.currentTarget;console.log(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.showModal;return Object(h.jsxs)(d,{children:[Object(h.jsx)(C,{}),n&&Object(h.jsx)(g,{onClose:this.toggleModal,onOpen:this.onOpenModal,children:Object(h.jsx)(f,{largeImageURL:t.largeImageURL,tags:t.tags})})]})}}]),n}(r.Component));n(25);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c751db09.chunk.js.map