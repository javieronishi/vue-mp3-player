(function(){"use strict";var t={3955:function(t,e,a){var s=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].bgprimary}},[a("AudioPlayer",{attrs:{track:t.track,autoplay:t.autoplay}}),a("PlayList",{on:{select:t.playMusic}}),a("Footer"),a("v-snackbar",{attrs:{timeout:t.timeout,color:"white black--text",dense:"",top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{small:"",color:"black",icon:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[a("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.track.name)+" ")]),a("v-btn",{attrs:{color:"bgsecondary white--text mt-1",absolute:"",right:"",fab:"",small:""},on:{click:t.goGithub}},[a("v-icon",[t._v("mdi-github")])],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"4",sm:"6",xs:"12"}},[a("audio",{attrs:{controls:"",src:t.track.src,autoplay:t.autoplay,id:"audio-player"},on:{ended:function(e){return t.onEnd()}}})])],1)],1)},l=[],c={name:"AudioPlayer",props:{track:{type:Object,default:function(){return{id:null,src:null,name:null,snackbar:!1}}},autoplay:{type:Boolean,default:!1}},created(){this.$vuetify.theme.dark=!0,this.$bus.$on("stop-track",(()=>{this.stop()})),this.$bus.$on("play-track",(()=>{this.play()})),this.$bus.$on("pause-track",(()=>{this.pause()}))},methods:{onEnd(){this.$bus.$emit("next-track",this.track)},stop(){const t=document.getElementById("audio-player");t.pause(),t.currentTime=0},play(){const t=document.getElementById("audio-player");t.play()},pause(){const t=document.getElementById("audio-player");t.pause()}}},o=c,u=a(1001),p=a(3453),d=a.n(p),m=a(2102),h=a(9846),v=a(2877),y=(0,u.Z)(o,i,l,!1,null,"28de74ff",null),f=y.exports;d()(y,{VCol:m.Z,VContainer:h.Z,VRow:v.Z});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"6",sm:"6",xs:"12"}},[0===t.playList.length?[a("v-file-input",{attrs:{outlined:"",dense:"",multiple:"",accept:".mp3",label:"Selecciona tus canciones favoritas"},on:{change:t.upload},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})]:t._e(),t.playList.length>0?[a("ButtonsPlayer",{on:{next:t.nextTrack,previous:t.previousTrack}}),a("marquee",[a("span",{staticClass:"text-caption"},[t._v(" "+t._s(t.name?t.name:"No se está reproduciendo nada")+" ")])]),a("v-card",{staticClass:"list pa-2 bgsecondary",attrs:{outlined:""}},[a("v-simple-table",{staticClass:"bgsecondary",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Lista de Reproducción")]),a("th",{staticClass:"text-left"})])]),a("tbody",t._l(t.playList,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"select-track text-caption",class:{"cyan--text":e.id===t.selectedItem},attrs:{width:"80%"},on:{click:function(a){return t.selectTrack(e)}}},[t._v(" "+t._s(e.id+1)+" - "+t._s(e.name)+" ")]),a("td",{staticClass:"text-caption",attrs:{width:"20%"}},[a("v-icon",{on:{click:function(a){return t.selectTrack(e)}}},[t._v(" "+t._s(e.iconPlay)+" ")]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,r=s.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-2",on:{click:function(a){return t.addToQueue(e)}}},"v-icon",r,!1),n),[t._v(" "+t._s(e.iconQueue)+" ")])]}}],null,!0)},[a("span",[t._v("Agregar a la cola")])])],1)])})),0)]},proxy:!0}],null,!1,400099259)})],1),a("OptionsPlayer",{attrs:{queue:t.playListQueue,playList:t.playList},on:{"clear-play-list":t.clearPlayList,"play-search":t.playSearch}})]:t._e()],2),a("v-snackbar",{staticClass:"text-caption",attrs:{timeout:t.timeout,color:"white black--text",dense:"",top:"",left:""},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[a("v-btn",t._b({attrs:{small:"",color:"black",icon:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[a("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" A la cola: "+t._s(t.name)+" ")])],1)],1)},k=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"8"}},[a("v-autocomplete",{attrs:{dense:"",placeholder:"Buscar .....","prepend-icon":"mdi-text-search",items:t.items,"no-data-text":"No existen canciones","item-text":"name","item-value":"id"},on:{change:t.handleSelectionTrack},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-col",{staticClass:"text-right",attrs:{md:"4"}},[a("v-btn",{attrs:{small:"",icon:""},on:{click:t.clearPlayList}},[a("v-icon",[t._v("mdi-delete-sweep")])],1),a("v-btn",{attrs:{small:"",icon:""},on:{click:t.viewQueue}},[a("v-icon",[t._v("mdi-playlist-music")])],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"bgsecondary",attrs:{outlined:""}},[a("v-card-title",{staticClass:"text-h6 bgprimary white--text"},[t._v(" Cola de Reproducción ")]),a("v-card-text",{staticClass:"mt-4"},[0===t.queue.length?a("v-alert",{attrs:{dense:"",text:"",border:"left",type:"info",color:"white black--text"}},[t._v(" Cola de reproducción vacia ")]):t._e(),a("v-simple-table",{staticClass:"bgsecondary",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.queue,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+1)+" - "+t._s(e.name))])])})),0)]},proxy:!0}])})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{elevation:"2",outlined:"",raised:"",small:"",color:"white black--text"},on:{click:function(e){t.dialog=!1}}},[t._v(" Aceptar ")])],1)],1)],1)],1)],1)},_=[],x={name:"OptionsPlayer",props:{queue:{type:Array,default:()=>[]},playList:{type:Array,default:()=>[]}},data(){return{dialog:!1,items:this.playList,search:null}},methods:{clearPlayList(){this.$emit("clear-play-list")},viewQueue(){this.dialog=!0},handleSelectionTrack(){this.$nextTick((()=>{this.$emit("play-search",this.items[this.search]),this.search=null}))}}},Z=x,w=a(3401),C=a(6334),T=a(680),V=a(3237),L=a(7118),$=a(7336),F=a(6428),P=a(3568),S=a(9762),O=(0,u.Z)(Z,g,_,!1,null,null,null),B=O.exports;d()(O,{VAlert:w.Z,VAutocomplete:C.Z,VBtn:T.Z,VCard:V.Z,VCardActions:L.h7,VCardText:L.ZB,VCardTitle:L.EB,VCol:m.Z,VContainer:h.Z,VDialog:$.Z,VIcon:F.Z,VRow:v.Z,VSimpleTable:P.Z,VSpacer:S.Z});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{staticClass:"mb-3 text-center"},[a("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"bgsecondary white--text",fab:""},on:{click:t.previousTrack}},[a("v-icon",[t._v("mdi-skip-previous")])],1),a("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"bgsecondary white--text",fab:""},on:{click:t.stopTrack}},[a("v-icon",[t._v("mdi-stop")])],1),a("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"bgsecondary white--text",fab:""},on:{click:t.playTrack}},[a("v-icon",[t._v("mdi-play")])],1),a("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"bgsecondary white--text",fab:""},on:{click:t.pauseTrack}},[a("v-icon",[t._v("mdi-pause")])],1),a("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"bgsecondary white--text",fab:""},on:{click:t.nextTrack}},[a("v-icon",[t._v("mdi-skip-next")])],1)],1)],1)},j=[],I={name:"OptionsPlayer",props:{queue:{type:Array,default:()=>[]}},data(){return{dialog:!1}},methods:{nextTrack(){this.$emit("next")},previousTrack(){this.$emit("previous")},stopTrack(){this.$bus.$emit("stop-track")},playTrack(){this.$bus.$emit("play-track")},pauseTrack(){this.$bus.$emit("pause-track")}}},E=I,Q=(0,u.Z)(E,A,j,!1,null,null,null),R=Q.exports;d()(Q,{VBtn:T.Z,VCol:m.Z,VIcon:F.Z,VRow:v.Z});var q={name:"PlayList",components:{OptionsPlayer:B,ButtonsPlayer:R},data(){return{files:[],playList:[],playListQueue:[],selectedItem:0,name:null,snackbar:!1,timeout:3e3}},created(){this.$bus.$on("next-track",(t=>{const e=this.playList.length===t.id+1?0:t.id+1,a=this.playList[e];this.selectTrack(a)}))},methods:{upload(){this.playList=[];let t=0;for(const e of this.files){const a={id:t,name:e.name.slice(0,-4),size:e.size,type:e.type,src:URL.createObjectURL(e),iconPlay:"mdi-play",iconQueue:"mdi-playlist-music"};this.playList.push(a),t++}},selectTrack(t){if(this.playList.length>0){let e=t;this.playListQueue.length>0&&(e=this.playListQueue[0],this.playListQueue.shift()),this.$emit("select",e),this.name=e.name,this.selectedItem=e.id}},nextTrack(){this.playList.length===this.selectedItem+1?this.selectTrack(this.playList[0]):this.selectTrack(this.playList[this.selectedItem+1])},previousTrack(){0===this.selectedItem?this.selectTrack(this.playList[this.playList.length-1]):this.selectTrack(this.playList[this.selectedItem-1])},addToQueue(t){this.playListQueue.push(t),this.name=t.name,this.snackbar=!0},clearPlayList(){this.playList=[],this.files=[]},playSearch(t){this.selectTrack(t)}}},M=q,z=a(7781),D=a(3202),G=a(9330),N=(0,u.Z)(M,b,k,!1,null,"264fcc1e",null),U=N.exports;d()(N,{VBtn:T.Z,VCard:V.Z,VCol:m.Z,VContainer:h.Z,VFileInput:z.Z,VIcon:F.Z,VRow:v.Z,VSimpleTable:P.Z,VSnackbar:D.Z,VTooltip:G.Z});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:"",fixed:""}},[a("v-card",{staticClass:"bgsecondary white--text text-center flex",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"white--text caption pa-1"},[t._v(" Reproductor "),a("code",[t._v("mp3")]),t._v(" simple y elegante para el navegador. "),a("code",[t._v("Vue.js")])])],1)],1)},J=[],K={name:"Footer",data:()=>({icons:["mdi-twitter","mdi-github"]})},W=K,X=a(5652),Y=(0,u.Z)(W,H,J,!1,null,null,null),tt=Y.exports;d()(Y,{VCard:V.Z,VCardText:L.ZB,VFooter:X.Z});var et={name:"App",components:{AudioPlayer:f,PlayList:U,Footer:tt},data(){return{src:null,autoplay:!1,track:{},snackbar:!1,timeout:4e3}},methods:{playMusic(t){this.track={id:t.id,src:t.src,name:t.name},this.autoplay=!0,this.snackbar=!0},goGithub(){window.location.href="https://github.com/javieronishi/vue-mp3-player"}},computed:{theme(){return this.$vuetify.theme.dark?"dark":"light"}}},at=et,st=a(7524),nt=(0,u.Z)(at,n,r,!1,null,null,null),rt=nt.exports;d()(nt,{VApp:st.Z,VBtn:T.Z,VIcon:F.Z,VSnackbar:D.Z});var it=a(9132),lt=a(6379);s.Z.use(it.Z);var ct=new it.Z({theme:{theme:{dark:!0},options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",bgprimary:"#1F1F1F",bgsecondary:"#2F2F2F"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",bgprimary:"#15202b",bgsecondary:"#273340"}}},lang:{locales:{es:lt.Z},current:"es"}});const ot={install:function(t){t.prototype.$bus=new t}};var ut=ot;s.Z.use(ut),s.Z.config.productionTip=!1,new s.Z({vuetify:ct,render:t=>t(rt)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,r){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var l=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(l=!1,r<i&&(i=r));if(l){t.splice(u--,1);var o=n();void 0!==o&&(e=o)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,i=s[0],l=s[1],c=s[2],o=0;if(i.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var u=c(a)}for(e&&e(s);o<i.length;o++)r=i[o],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkvue_mp3_player"]=self["webpackChunkvue_mp3_player"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3955)}));s=a.O(s)})();
//# sourceMappingURL=app.ee980b39.js.map