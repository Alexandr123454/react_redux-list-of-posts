(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=n(6),u=n(8),i=n(12),l=n(1),p=n.n(l),m=n(4),f=n(9),d=n(10),b=n(13),h=n(11),O=n(14),v=function(){var e=Object(m.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/posts",e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/users",e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com/comments",e.next=3,fetch("https://jsonplaceholder.typicode.com/comments");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.userItem;return a.a.createElement("div",{className:"user_information"},a.a.createElement("p",null,a.a.createElement("b",null,"Name")," ",t.name),a.a.createElement("p",null,a.a.createElement("b",null,"Nick name")," ",t.username),a.a.createElement("p",null,a.a.createElement("b",null,"Email")," ",t.email))},w=function(e){var t=e.comments;return a.a.createElement("div",{className:"comments"},a.a.createElement("br",null),a.a.createElement("b",null,"Comment")," ",t.body)},g=function(e){var t=e.comments;return a.a.createElement("p",null,t.map(function(e){return a.a.createElement(w,{comments:e})}))},P=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showComment:!1},n}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post;return a.a.createElement("li",{className:"post_list"},a.a.createElement(E,{userItem:t.user}),a.a.createElement("p",{className:"post_title"},a.a.createElement("b",null,"Title")," ",t.title),a.a.createElement("p",{className:"post_body"},t.body),a.a.createElement("div",{tabIndex:0,role:"button",onKeyDown:function(){},className:"show_comments",onClick:function(){return e.setState(function(e){return{showComment:!e.showComment}})}},a.a.createElement("p",{className:"view-comments"},this.state.showComment?"Hide comments":"View comments")),this.state.showComment?a.a.createElement(g,{comments:t.comments}):"")}}]),t}(a.a.Component);n(31);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).loadData=Object(m.a)(p.a.mark(function e(){var t,r,a,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.loading(),e.next=3,y();case 3:return t=e.sent,e.next=6,v();case 6:return r=e.sent,e.next=9,j();case 9:a=e.sent,c=r.map(function(e){return L({},e,{comments:a.filter(function(t){return e.id===t.postId}),user:t.find(function(t){return t.id===e.userId})})}),n.props.setData(c);case 12:case"end":return e.stop()}},e)})),n}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filterPosts;return a.a.createElement("div",null,t.length?a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"search_list"},a.a.createElement("input",{className:"search_field",type:"text",onChange:function(t){return e.props.handleChangeFilter(t.target.value)},placeholder:"Search"})),a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",null,a.a.createElement(P,{post:e}))}))):a.a.createElement("div",{className:"button_load"},a.a.createElement("button",{onClick:this.loadData,type:"button",className:"button"},this.props.isLoading?"Loading":"Load")))}}]),t}(a.a.Component),N=Object(i.b)(function(e){return{filterPosts:e.filterPosts,isLoading:e.isLoading}},function(e){return{loading:function(){return e({type:"LOADING",isLoading:!0})},setData:function(t){return e({type:"SET_DATA",value:t,isLoading:!1,isLoaded:!0})},handleChangeFilter:function(t){return e({type:"FILTER_POSTS",value:t})}}})(x);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=Object(u.b)(function(e,t){switch(t.type){case"FILTER_POSTS":return k({},e,{filterPosts:e.posts.filter(function(e){return[e.title,e.body].join("").toLowerCase().includes(t.value.toLowerCase())})});case"SET_DATA":return{posts:t.value,filterPosts:t.value,isLoading:!1,isLoaded:!0};case"LOADING":return k({},e,{isLoading:!0});default:return e}},{posts:[],filterPosts:[]}),_=function(){return a.a.createElement(i.a,{store:S},a.a.createElement(N,null))};o.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ea89c182.chunk.js.map