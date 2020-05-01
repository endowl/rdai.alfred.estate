(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[84],{2509:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(8),r=a(14),s=a(25),o=a(20),l=a(21),i=a(0),m=a.n(i),d=a(334),u=a(15),p=a.n(u),f=function(e){return p.a.get("/api/chat/contacts",{data:e})},h=function(e){return p.a.get("/api/chat/contacts/recent",{data:e})},b=function(e,t){return p.a.get("/api/chat/chat-room",{data:{currentUser:e,contactId:t}})},g=function(e){return p.a.post("/api/chat/add",e)},v=a(16),E=a(217),N=a.n(E),x=a(1174),w=function(e){var t=e.open,a=(e.currentUser,e.contactList),n=void 0===a?[]:a,c=e.recentContactList,r=void 0===c?[]:c,s=e.handleContactClick,o=e.toggleSidenav,l=Object(i.useState)(""),d=Object(v.a)(l,2),u=d[0],p=d[1];return m.a.createElement("div",{className:"chat-sidebar-wrap sidebar",style:{left:t?0:"-260px"}},m.a.createElement("div",{className:"border-right"},m.a.createElement("div",{className:"pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:o},m.a.createElement("i",{className:"icon-regular ml-0 mr-3 i-Left"})),m.a.createElement("div",{className:"form-group m-0 flex-grow-1"},m.a.createElement("input",{type:"text",className:"form-control form-control-rounded",id:"search",placeholder:"Search contacts",value:u,onChange:function(e){var t=e.target.value;return p(t)}}))),m.a.createElement(N.a,{className:"contacts-scrollable"},m.a.createElement("div",{className:"mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Recent"),r.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex align-items-center border-bottom contact ".concat(e.status)},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("div",null,m.a.createElement("h6",{className:"m-0"},e.name),m.a.createElement("span",{className:"text-muted text-small"},Object(x.default)(new Date(e.lastChatTime).getTime(),"dd MMM, yyyy"))))})),m.a.createElement("div",{className:"mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Contacts"),n.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex border-bottom align-items-center contact online"},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("h6",{className:""},e.name))})))))},y=a(839),C=a(48),L=function(){return m.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center h-100"},m.a.createElement("div",{className:"card bg-white d-flex justify-content-center align-items-center",style:{height:"220px",width:"220px",borderRadius:"50%"}},m.a.createElement("i",{className:"i-Mail-Reply text-64 text-primary font-weight-900"}," ")),m.a.createElement("p",{className:"py-3"},"Click on a contact to start chat"))},R=function(e){e.currentUser;var t=e.toggleSidenav,a=(e.currentChatRoom,e.opponentUser),n=void 0===a?{}:a,c=e.messageList,r=void 0===c?[]:c,s=e.setBottomRef,o=e.handleMessageSend,l=e.isMobile,i=m.a.useState(""),d=Object(v.a)(i,2),u=d[0],p=d[1];return m.a.createElement("div",{className:"chat-content-wrap sidebar-content",style:{marginLeft:l?0:"260px"}},m.a.createElement("div",{className:"d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:t},m.a.createElement("i",{className:"icon-regular i-Right ml-0 mr-3"})),n&&m.a.createElement("div",{className:"d-flex align-items-center"},m.a.createElement("img",{src:n.avatar,alt:"",className:"avatar-sm rounded-circle mr-2"}),m.a.createElement("p",{className:"m-0 text-title text-16 flex-grow-1"},n.name))),n?m.a.createElement(m.a.Fragment,null,m.a.createElement(N.a,{className:"chat-content",containerRef:function(e){s(e)}},r.map((function(e,t){return e.contactId===n.id?m.a.createElement("div",{key:t,className:"d-flex mb-4"},m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)),m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"})):m.a.createElement("div",{key:t,className:"d-flex mb-4 user"},m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"}),m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)))}))),m.a.createElement("div",{className:"pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area"},m.a.createElement("form",{className:"inputForm"},m.a.createElement("div",{className:"form-group"},m.a.createElement("textarea",{className:"form-control form-control-rounded",placeholder:"Type your message",name:"message",id:"message",cols:"30",rows:"3",onChange:function(e){return p(e.target.value)},onKeyUp:function(e){"Enter"!==e.key||e.shiftKey||(""!==(u=u.trim())&&o(u),p(""))},value:u})),m.a.createElement("div",{className:"d-flex"},m.a.createElement("div",{className:"flex-grow-1"}),m.a.createElement(y.a,{className:"btn btn-icon btn-rounded mr-2",variant:"primary",onClick:function(){""!==u.trim()&&o(u),p("")}},m.a.createElement("i",{className:"i-Paper-Plane"})),m.a.createElement("label",{htmlFor:"attachment",className:"mb-0"},m.a.createElement(y.a,{type:"button",className:"mr-2",as:"span",variant:"outline-primary"},m.a.createElement("i",{className:"i-Add-File"}))),m.a.createElement("input",{onChange:function(e){console.log(e.target.files[0])},className:"d-none",id:"attachment",type:"file"}))))):m.a.createElement(L,null))},S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={currentUser:{id:"7863a6802ez0e277a0f98534"},contactList:[],recentContactList:[],messageList:[],currentChatRoom:"",opponentUser:null,open:!0,isMobile:!1},e.bottomRef=m.a.createRef(),e.updateRecentContactList=function(){var t=e.state.currentUser.id;h(t).then((function(t){e.setState({recentContactList:Object(c.a)(t.data)})}))},e.scrollToBottom=function(){e.bottomRef.current.scrollIntoView({behavior:"smooth"})},e.handleContactClick=function(t){Object(C.d)()&&e.toggleSidenav(),f(t).then((function(t){var a=t.data;e.setState({opponentUser:Object(n.a)({},a)})})),b(e.state.currentUser.id,t).then((function(t){var a=t.data,n=a.chatId,c=a.messageList,r=a.recentListUpdated;console.log(n),e.setState({currentChatRoom:n,messageList:c},(function(){e.bottomRef.scrollTop=9999999999999})),r&&e.updateRecentContactList()}))},e.handleMessageSend=function(t){var a=e.state.currentUser.id,n=e.state,r=n.currentChatRoom,s=n.opponentUser;""!==r&&g({chatId:r,text:t,contactId:a,time:new Date}).then((function(t){e.setState({messageList:Object(c.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999})),setTimeout((function(){g({chatId:r,text:"Hi, I'm ".concat(s.name,". Your imaginary friend."),contactId:s.id,time:new Date}).then((function(t){e.setState({messageList:Object(c.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999}))}))}),750)}))},e.setBottomRef=function(t){e.bottomRef=t},e.toggleSidenav=function(){return e.setState({open:!e.state.open})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this.state.currentUser.id;f(a).then((function(e){t.setState({currentUser:Object(n.a)({},e.data)})})),(e=this.state.currentUser.id,p.a.get("/api/chat/contacts/all",{data:e})).then((function(e){return t.setState({contactList:Object(c.a)(e.data)})})),this.updateRecentContactList(),Object(C.d)()&&this.setState({open:!1,isMobile:!0}),window&&(this.windowResizeListener=window.addEventListener("resize",(function(e){Object(C.d)()?t.setState({open:!1,isMobile:!0}):t.setState({open:!0,isMobile:!1})})))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.windowResizeListener)}},{key:"render",value:function(){var e=this.state,t=e.open,a=e.isMobile,n=e.currentUser,c=e.contactList,r=e.recentContactList,s=e.messageList,o=e.opponentUser,l=e.currentChatRoom;return m.a.createElement(d.a,{className:"chat-sidebar-container sidebar-container"},m.a.createElement(w,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,contactList:c,recentContactList:r,handleContactClick:this.handleContactClick}),m.a.createElement(R,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,messageList:s,currentUser:n,opponentUser:o,currentChatRoom:l,setBottomRef:this.setBottomRef,handleMessageSend:this.handleMessageSend}))}}]),a}(i.Component);t.default=S},839:function(e,t,a){"use strict";var n=a(4),c=a(10),r=a(6),s=a.n(r),o=a(0),l=a.n(o),i=a(52),m=a(204),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,o=e.size,d=e.active,u=e.className,p=e.block,f=e.type,h=e.as,b=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),g=Object(i.b)(a,"btn"),v=s()(u,g,d&&"active",g+"-"+r,p&&g+"-block",o&&g+"-"+o);if(b.href)return l.a.createElement(m.a,Object(n.a)({},b,{as:h,ref:t,className:s()(v,b.disabled&&"disabled")}));t&&(b.ref=t),h||(b.type=f);var E=h||"button";return l.a.createElement(E,Object(n.a)({},b,{className:v}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d}}]);
//# sourceMappingURL=84.d779c1a5.chunk.js.map