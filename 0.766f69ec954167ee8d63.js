webpackJsonp([0],{"+j0Y":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7asN");Object.defineProperty(t,"ShowsPage",{enumerable:!0,get:function(){return o(a).default}});var r=n("KCgE");Object.defineProperty(t,"ShowPage",{enumerable:!0,get:function(){return o(r).default}})},"0S8E":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("GiK3"),s=o(i),c=n("KSGD"),d=(o(c),n("gRdO")),f=o(d),p=n("xPIz"),_=n("XT3n"),h=n("LLON"),S=o(h),E=p.Checkbox.Group,m=[{label:"Movies",value:"movie"},{label:"TV Shows",value:"show"},{label:"Anime",value:"anime"},{label:"Comics",value:"comic"}],w=[{label:"Following",value:!0},{label:"Not following",value:!1}],O=s.default.createElement(_.CreateShowButton,null),v=function(e){function t(){var e,n,o,l;a(this,t);for(var u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.handleTitleChange=function(e){var t=e.target.value,n=o.props.filters,a=n.types,r=n.following;o.props.onSetFilters(t,a,r)},o.handleTypesChange=function(e){var t=o.props.filters,n=t.title,a=t.following;o.props.onSetFilters(n,e,a)},o.handleFollowingChange=function(e){var t=o.props.filters,n=t.title,a=t.types;o.props.onSetFilters(n,a,e)},l=n,r(o,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.filters,n=e.isAtLeastAdmin,o=t.title,a=t.types,r=t.following;return s.default.createElement("div",{className:S.default.container},s.default.createElement(p.Input,{className:S.default.title,prefix:s.default.createElement(f.default,{className:S.default.searchPrefix}),value:o,placeholder:"Search...",onChange:this.handleTitleChange}),s.default.createElement(E,{className:S.default.types,options:m,value:a,onChange:this.handleTypesChange}),s.default.createElement(E,{className:S.default.following,options:w,value:r,onChange:this.handleFollowingChange}),n&&O)}}]),t}(s.default.Component);t.default=v},"2+zk":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.epics=t.showSel=t.showLoadingSel=t.allShowsSel=t.getShowError=t.getShowResponse=t.getShowRequest=t.GET_SHOW_ERROR=t.GET_SHOW_RESPONSE=t.GET_SHOW_REQUEST=t.setAllShowsTableNav=t.SET_ALL_SHOWS_TABLE_NAV=t.setAllShowsFilters=t.SET_ALL_SHOWS_FILTERS=t.getShowsError=t.getShowsResponse=t.getShowsRequest=t.GET_SHOWS_ERROR=t.GET_SHOWS_RESPONSE=t.GET_SHOWS_REQUEST=t.ROUTE_SHOW_DETAILS=t.ROUTE_ALL_SHOWS=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n("2KeS"),r=n("N+5n"),l=n("rCTf");n("1APj"),n("6Yye"),n("94IA"),n("+pb+"),n("uCY4"),n("cPC/");var u=n("wf2E"),i=n("XT3n"),s=n("TTK8"),c=n("JSrZ"),d=t.ROUTE_ALL_SHOWS=c.moduleName+"/ROUTE_ALL_SHOWS",f=t.ROUTE_SHOW_DETAILS=c.moduleName+"/ROUTE_SHOW_DETAILS",p=t.GET_SHOWS_REQUEST=c.moduleName+"/GET_SHOWS_REQUEST",_=t.GET_SHOWS_RESPONSE=c.moduleName+"/GET_SHOWS_RESPONSE",h=t.GET_SHOWS_ERROR=c.moduleName+"/GET_SHOWS_ERROR",S=t.getShowsRequest=function(){return{type:p}},E=t.getShowsResponse=function(e){return{type:_,payload:e}},m=t.getShowsError=function(e){return{type:h,payload:e}},w=t.SET_ALL_SHOWS_FILTERS=c.moduleName+"/SET_ALL_SHOWS_FILTERS",O=(t.setAllShowsFilters=function(e,t,n){return{type:w,payload:{title:e,types:t,following:n}}},t.SET_ALL_SHOWS_TABLE_NAV=c.moduleName+"/SET_ALL_SHOWS_TABLE_NAV"),v=(t.setAllShowsTableNav=function(e,t){return{type:O,payload:{pagination:e,sorter:t}}},t.GET_SHOW_REQUEST=c.moduleName+"/GET_SHOW_REQUEST"),y=t.GET_SHOW_RESPONSE=c.moduleName+"/GET_SHOW_RESPONSE",b=t.GET_SHOW_ERROR=c.moduleName+"/GET_SHOW_ERROR",g=t.getShowRequest=function(e){return{type:v,payload:e}},T=t.getShowResponse=function(e){return{type:y,payload:e}},P=(t.getShowError=function(e){return{type:b,payload:e}},function(){var e={title:"",types:["movie","show","anime","comic"],following:[!0,!1]};return{loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case p:return!0;case _:case h:return!1;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.type,a=t.payload;switch(n){case _:return a;case i.FOLLOW_RESPONSE:case i.UNFOLLOW_RESPONSE:var r=n===i.FOLLOW_RESPONSE;return e.map(function(e){return o({},e,{following:e.showId===a.showId?r:e.following})});case i.DELETE_SHOW_RESPONSE:return e.filter(function(e){return e.showId!==a.showId});default:return e}},filters:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments[1],o=n.type,a=n.payload;switch(o){case w:return a;default:return t}},tableNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=t.type,o=t.payload;switch(n){case O:return o;default:return e}}}}()),R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case v:return!0;case y:case b:return!1;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=t.type,a=t.payload;switch(n){case v:return{};case y:return a;case i.DELETE_SHOW_RESPONSE:return e.showId===a.showId?{}:e;case i.DELETE_EPISODES_RESPONSE:return o({},e,{episodes:e.episodes.filter(function(e){return!(e.season===a.season&&(e.episode===a.episode||null==a.episode))})});case i.FOLLOW_RESPONSE:case i.UNFOLLOW_RESPONSE:var r=n===i.FOLLOW_RESPONSE;return o({},e,{following:e.showId===a.showId?r:e.following});case i.MARK_WATCHED_RESPONSE:case i.UNMARK_WATCHED_RESPONSE:var l=n===i.MARK_WATCHED_RESPONSE;return e.showId===a.showId?o({},e,{episodes:e.episodes.map(function(e){return e.episodeId===a.episodeId?o({},e,{watched:l}):e})}):e;case i.MARK_WATCHED_BULK_RESPONSE:case i.UNMARK_WATCHED_BULK_RESPONSE:var u=n===i.MARK_WATCHED_BULK_RESPONSE;return e.showId===a.showId?o({},e,{episodes:e.episodes.map(function(e){return e.season===a.season&&(e.episode<=a.episode||null==a.episode)?o({},e,{watched:u}):e})}):e;default:return e}},N=(0,a.combineReducers)({allShows:(0,a.combineReducers)(P),showLoading:R,show:L});t.default=N;var I=function(e){return e[c.moduleName]},A=(t.allShowsSel=function(e){return I(e).allShows},t.showLoadingSel=function(e){return I(e).showLoading},t.showSel=function(e){return I(e).show},function(e){return e.ofType(p).switchMap(function(){return H().map(E).apiCatch(function(e){return l.Observable.of(m(e))})})}),j=function(e,t){return e.ofType(i.EDIT_SHOW_RESPONSE).filter(function(){return(0,s.isCurrentLocationSel)(t.getState(),d)}).mapTo(S())},W=function(e){return e.ofType(f).map(function(e){var t=e.payload;return g(t.slug)})},M=function(e){return e.ofType(v).switchMap(function(e){var t=e.payload;return D(t).map(T).apiCatch(function(e){return l.Observable.of(T(e))})})},C=function(e,t){return e.ofType(i.POSTPONE_EPISODES_RESPONSE,i.EDIT_SHOW_RESPONSE).filter(function(){return(0,s.isCurrentLocationSel)(t.getState(),f)}).map(function(){var e=(0,s.payloadSel)(t.getState()),n=e.slug;return g(n)})},H=(t.epics=(0,r.combineEpics)(A,j,W,M,C),function(){return u.apiService.get$("/shows")}),D=function(e){return u.apiService.get$("/shows/"+e)}},"6Je2":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("pY+3");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},"7asN":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("nVOi");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},"8C6v":function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("GiK3"),l=function(e){return e&&e.__esModule?e:{default:e}}(r),u=n("2+zk"),i=n("+j0Y"),s=l.default.createElement(i.ShowPage,null),c=l.default.createElement(i.ShowsPage,null),d=(a={},o(a,u.ROUTE_SHOW_DETAILS,{path:"/shows/:slug",component:function(){return s},roles:["root","admin","user"]}),o(a,u.ROUTE_ALL_SHOWS,{path:"/shows",component:function(){return c},roles:["root","admin","user"]}),a);t.default=d},"DPD+":function(e,t){e.exports={card:"ShowDetails__card___3VxWT",content:"ShowDetails__content___3JxBb",showTypeIcon:"ShowDetails__showTypeIcon___DWfc2"}},FcxW:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=o(a),l=n("KSGD"),u=(o(l),n("RH2O")),i=n("xPIz"),s=n("2+zk"),c=n("IDdn"),d=o(c),f=r.default.createElement(d.default,null),p=function(e){var t=e.title;return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.PageTitle,null,t),f)},_=function(e){return{title:(0,s.showSel)(e).title}};t.default=(0,u.connect)(_)(p)},IDdn:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("UZho");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},JSrZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.moduleName="shows"},KCgE:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("FcxW");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(a).default}})},LLON:function(e,t){e.exports={container:"SearchBar__container___1KUin",searchPrefix:"SearchBar__searchPrefix___3kz11",title:"SearchBar__title___2ZgG-",types:"SearchBar__types___ciha_",following:"SearchBar__following___2zwLD"}},S7k4:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("JSrZ");Object.defineProperty(t,"moduleName",{enumerable:!0,get:function(){return a.moduleName}});var r=n("8C6v");Object.defineProperty(t,"routes",{enumerable:!0,get:function(){return o(r).default}});var l=n("+j0Y");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var u=n("2+zk");Object.defineProperty(t,"reducers",{enumerable:!0,get:function(){return o(u).default}}),Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})})},UZho:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("GiK3"),s=o(i),c=n("KSGD"),d=(o(c),n("RH2O")),f=n("xPIz"),p=n("0waI"),_=n("TTK8"),h=n("XT3n"),S=n("2+zk"),E=n("Yjam"),m=o(E),w=n("yJQ0"),O=o(w),v=n("DPD+"),y=o(v),b=s.default.createElement("div",null),g=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.show,n=e.loading,o=e.slug;n||t.showId||this.props.onLoadShow(o)}},{key:"render",value:function(){var e=this.props,t=e.show,n=e.loading,o=e.isAtLeastAdmin,a=t.showId,r=t.title,l=t.aka,u=t.type,i=t.recurring,c=t.following,d=t.episodes;return s.default.createElement(f.Card,{loading:n,className:y.default.card},!n&&a&&s.default.createElement("div",{className:y.default.content},s.default.createElement(f.ShowTypeIcon,{type:u,size:"xlarge",className:y.default.showTypeIcon}),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement(f.H,{size:"2",className:y.default.title},r),l&&s.default.createElement(f.Aka,null,l),s.default.createElement("div",{className:y.default.actions},s.default.createElement(h.FollowButton,{showId:a,title:r,following:c}),o&&s.default.createElement(h.EditShowButton,{show:t}))),s.default.createElement("div",null,i?s.default.createElement(m.default,{showId:a,title:r,episodes:d,isAtLeastAdmin:o}):s.default.createElement(O.default,{showId:a,title:r,episode:d[0],isAtLeastAdmin:o}))))||b)}}]),t}(s.default.Component),T=function(e){return{isAtLeastAdmin:(0,p.isAtLeastAdminSel)(e),loading:(0,S.showLoadingSel)(e),show:(0,S.showSel)(e),slug:(0,_.payloadSel)(e).slug}},P=function(e){return{onLoadShow:function(t){return e((0,S.getShowRequest)(t))}}};t.default=(0,d.connect)(T,P)(g)},"Y/Rf":function(e,t){e.exports={seasonRow:"EpisodesList__seasonRow___RpHUA",episodeRow:"EpisodesList__episodeRow___SjgrL",actionButtons:"EpisodesList__actionButtons___1FSFC",watched:"EpisodesList__watched___17NjY"}},Yjam:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),l=o(r),u=n("KSGD"),i=(o(u),n("HW6M")),s=o(i),c=n("wf2E"),d=n("xPIz"),f=n("XT3n"),p=n("Y/Rf"),_=o(p),h=d.Tree.TreeNode,S=l.default.createElement(d.FlexSpacer,null),E=l.default.createElement(d.PlaceholderIconButton,null),m=l.default.createElement(d.PlaceholderIconButton,null),w=l.default.createElement(d.FlexSpacer,null),O=l.default.createElement(d.PlaceholderIconButton,null),v=l.default.createElement(d.PlaceholderIconButton,null),y=function(e){var t=e.showId,n=e.title,o=e.episodes,r=e.isAtLeastAdmin,u=(0,c.groupEpisodes)(o),i=u.map(function(e){var o=e[0].season,i=e.length-1,p=e.reduce(function(e,t){return e&&t.watched},!0),y=!0,b=e.map(function(u,p){var w=u.episodeId,O=u.episode,v=u.premiereDate,b=u.watched;y=y&&b;var g=p===i&&e.length>1&&r,T=(0,s.default)(_.default.episodeRow,a({},_.default.watched,b));return l.default.createElement(h,{key:w,selectable:!1,isLeaf:!0,title:l.default.createElement("div",{className:T},l.default.createElement("div",null,l.default.createElement(d.EpisodeLabel,{season:o,episode:O})," ","-"," ",l.default.createElement(d.DateFormat,{value:v,fromNowTitle:!0})),S,l.default.createElement("div",{className:_.default.actionButtons},l.default.createElement(f.MarkWatchedButton,{showId:t,episodeId:w,watched:b,title:n+" "+(0,c.episodeLabel)(o,O)}),l.default.createElement(f.MarkWatchedBulkButton,{showId:t,season:o,episode:O,watched:y,title:n+" "+(0,c.seasonLabel)(o)+" through episode "+O}),r&&l.default.createElement(f.PostponeButton,{showId:t,season:o,episode:O,currentPremiereDate:v,title:n+" "+(0,c.episodeLabel)(o,O)})||E,g&&l.default.createElement(f.DeleteEpisodesButton,{showId:t,season:o,episode:O,title:n+" "+(0,c.episodeLabel)(o,O)})||m))})}),g=u.length>1&&r,T=(0,s.default)(_.default.seasonRow,a({},_.default.watched,p));return l.default.createElement(h,{key:o,title:l.default.createElement("div",{className:T},l.default.createElement(d.SeasonLabel,{season:o}),w,l.default.createElement("div",{className:_.default.actionButtons},l.default.createElement(f.MarkWatchedBulkButton,{showId:t,season:o,watched:p,title:n+" "+(0,c.seasonLabel)(o)}),O,g&&l.default.createElement(f.DeleteEpisodesButton,{showId:t,season:o,title:n+" "+(0,c.seasonLabel)(o)})||v)),selectable:!1},b)});return l.default.createElement(d.Tree,{defaultExpandAll:!0},i)};t.default=y},e2a8:function(e,t){e.exports={container:"PremiereDate__container___23UMu",label:"PremiereDate__label___zduhe",watched:"PremiereDate__watched___1FLdC"}},gRdO:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=o(a),l=n("9rdB"),u=o(l),i=n("VJec"),s=o(i),c=e.__MUI_SvgIcon__||s.default,d=r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),f=function(e){return r.default.createElement(c,e,d)};f=(0,u.default)(f),f.muiName="SvgIcon",t.default=f}).call(t,n("DuR2"))},k7Jy:function(e,t){e.exports={table:"AllShows__table___304Xx",operations:"AllShows__operations___3Zl14"}},nVOi:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=o(a),l=n("xPIz"),u=n("6Je2"),i=o(u),s=r.default.createElement(r.default.Fragment,null,r.default.createElement(l.PageTitle,null,"All"),r.default.createElement(i.default,null)),c=function(){return s};t.default=c},"pY+3":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("GiK3"),c=o(s),d=n("KSGD"),f=(o(d),n("RH2O")),p=n("wHKe"),_=o(p),h=n("xPIz"),S=n("0waI"),E=n("wf2E"),m=n("XT3n"),w=n("2+zk"),O=n("0S8E"),v=o(O),y=n("k7Jy"),b=o(y),g={pageSize:10,pageSizeOptions:["10","25","50","100"],showSizeChanger:!0},T=function(e){function t(){var e,n,o,l;a(this,t);for(var u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={filteredItems:[]},o.componentWillReceiveProps=function(e){var t=e.allShows,n=t.items,a=t.filters,r=o.props.allShows,l=r.items,u=r.filters;l===n&&u===a||o.updateFilteredItems(n,a)},o.updateFilteredItems=function(e,t){var n=t.title,a=t.types,r=t.following,l=e.filter(function(e){return(e.title.toLowerCase().includes(n.toLowerCase())||(e.aka||"").toLowerCase().includes(n.toLowerCase()))&&a.includes(e.type)&&r.includes(e.following)});o.setState({filteredItems:l})},o.handleTableChange=function(e,t,n){var a=n.dataIndex,r=n.columnKey,l=n.field,u=n.order,i={dataIndex:a,columnKey:r,field:l,order:u};o.props.onSetTableNav(e,i)},o.getColumns=function(){var e=o.props.isAtLeastAdmin,t=o.props.allShows.tableNav.sorter,n=void 0===t?{}:t;return[{dataIndex:"type",width:"5rem",render:function(e){return c.default.createElement(h.ShowTypeIcon,{type:e})}},{dataIndex:"title",sorter:E.tableSorters.string("title"),sortOrder:(0,E.tableSortOrder)(n,"title"),title:c.default.createElement(h.TableHeadingSort,{name:"title",sorter:n},"Title"),render:function(e,t){var n=t.aka,o=t.slug;return c.default.createElement("div",null,c.default.createElement(_.default,{to:"/shows/"+o,title:"Go to details"},e),n&&c.default.createElement(h.Aka,null,n))}},{width:"5rem",render:function(t,n){var o=n.showId,a=n.title,r=n.following;return c.default.createElement("div",{className:b.default.operations},c.default.createElement(m.FollowButton,{showId:o,title:a,following:r}),e&&c.default.createElement(m.DeleteShowButton,{showId:o,title:a}))}}]},l=n,r(o,l)}return l(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.onGetShows()}},{key:"render",value:function(){var e=this.props,t=e.allShows,n=e.isAtLeastAdmin,o=e.onSetFilters,a=this.state.filteredItems,r=t.loading,l=t.tableNav,i=t.filters,s=l.pagination,d=void 0===s?g:s;return c.default.createElement(c.default.Fragment,null,c.default.createElement(v.default,{filters:i,isAtLeastAdmin:n,onSetFilters:o}),c.default.createElement(h.Table,{className:b.default.table,rowKey:"showId",size:"middle",columns:this.getColumns(),dataSource:a,loading:r,pagination:u({},d,{showTotal:function(){return a.length+" total"}}),onChange:this.handleTableChange}))}}]),t}(c.default.Component),P=function(e){return{allShows:(0,w.allShowsSel)(e),isAtLeastAdmin:(0,S.isAtLeastAdminSel)(e)}},R=function(e){return{onGetShows:function(){return e((0,w.getShowsRequest)())},onSetFilters:function(t,n,o){return e((0,w.setAllShowsFilters)(t,n,o))},onSetTableNav:function(t,n){return e((0,w.setAllShowsTableNav)(t,n))}}};t.default=(0,f.connect)(P,R)(T)},yJQ0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),r=o(a),l=n("KSGD"),u=(o(l),n("xPIz")),i=n("XT3n"),s=n("e2a8"),c=o(s),d=r.default.createElement(u.FlexSpacer,null),f=function(e){var t=e.showId,n=e.title,o=e.episode,a=e.isAtLeastAdmin,l=o.episodeId,s=o.watched,f=o.premiereDate;return r.default.createElement("div",{className:c.default.container},r.default.createElement("div",null,r.default.createElement("span",{className:c.default.label},"Premiere date:"),r.default.createElement(u.DateFormat,{value:f,fromNowTitle:!0,className:s?c.default.watched:""})),d,r.default.createElement("div",{className:c.default.actionButtons},r.default.createElement(i.MarkWatchedButton,{showId:t,episodeId:l,watched:s,title:n}),a&&r.default.createElement(i.PostponeButton,{showId:t,currentPremiereDate:f,title:n})))};t.default=f}});
//# sourceMappingURL=0.766f69ec954167ee8d63.js.map