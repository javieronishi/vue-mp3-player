(function(){"use strict";var t={8008:function(t,e,a){var s=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AudioPlayer",{attrs:{track:t.track,autoplay:t.autoplay}}),a("PlayList",{on:{select:t.playMusic,stop:t.stopMusic}}),a("v-snackbar",{staticClass:"text-caption",attrs:{timeout:t.timeout,color:"info",dense:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Reproduciendo: "+t._s(t.track.name)+" ")])],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"6",sm:"6",xs:"12"}},[a("audio",{attrs:{controls:"",src:t.track.src,autoplay:t.autoplay},on:{ended:function(e){return t.onEnd()}}})])],1)],1)},o=[],l={name:"AudioPlayer",props:{track:{type:Object,default:function(){return{id:null,src:null,name:null,snackbar:!1}}},autoplay:{type:Boolean,default:!1}},created(){this.$vuetify.theme.dark=!0},methods:{onEnd(){this.$bus.$emit("next-track",this.track)}}},c=l,u=a(1001),p=a(3453),d=a.n(p),v=a(2102),m=a(9846),f=a(2877),h=(0,u.Z)(c,r,o,!1,null,"1f61c45d",null),y=h.exports;d()(h,{VCol:v.Z,VContainer:m.Z,VRow:f.Z});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"6",sm:"6",xs:"12"}},[0===t.playList.length?[a("v-file-input",{attrs:{outlined:"",dense:"",multiple:"",accept:".mp3",label:"Selecciona tus canciones favoritas"},on:{change:t.upload},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})]:t._e(),t.playList.length>0?[a("v-card",{attrs:{outlined:"",flat:""}},[a("v-list",{staticClass:"list",attrs:{shaped:"",dense:""}},[a("v-list-item-group",t._l(t.playList,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-content",{on:{click:function(a){return t.selectTrack(e)}}},[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),a("v-list-item-icon",[a("v-icon",{on:{click:function(a){return t.selectTrack(e)}}},[t._v(" "+t._s(e.iconPlay)+" ")]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,i=s.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-2",on:{click:function(a){return t.addToQueue(e)}}},"v-icon",i,!1),n),[t._v(" "+t._s(e.iconQueue)+" ")])]}}],null,!0)},[a("span",[t._v("Agregar a la cola")])])],1)],1)})),1)],1)],1),t.name?a("marquee",[a("span",{staticClass:"text-caption"},[t._v(" "+t._s(t.name)+" ")])]):t._e(),a("OptionsPlayer",{attrs:{queue:t.playListQueue},on:{"clear-play-list":t.clearPlayList,next:t.nextTrack,previous:t.previousTrack,stop:t.stopTrack}})]:t._e()],2),a("v-snackbar",{staticClass:"text-caption",attrs:{timeout:t.timeout,color:"success",dense:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Se agrego a la cola: "+t._s(t.name)+" ")])],1)],1)},b=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"p-0",attrs:{outlined:""}},[a("v-card-text",{staticClass:"text-center"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"6",sm:"6",xs:"12"}},[a("v-btn",{attrs:{small:"",icon:""},on:{click:t.previousTrack}},[a("v-icon",[t._v("mdi-skip-previous")])],1),a("v-btn",{attrs:{small:"",icon:""},on:{click:t.stopTrack}},[a("v-icon",[t._v("mdi-stop")])],1),a("v-btn",{attrs:{small:"",icon:""},on:{click:t.nextTrack}},[a("v-icon",[t._v("mdi-skip-next")])],1)],1),a("v-col",{attrs:{md:"6",sm:"6",xs:"12"}},[a("v-btn",{attrs:{small:"",icon:""},on:{click:t.clearPlayList}},[a("v-icon",[t._v("mdi-delete-sweep")])],1),a("v-btn",{attrs:{small:"",icon:""},on:{click:t.viewQueue}},[a("v-icon",[t._v("mdi-playlist-music")])],1)],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"340"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"text-h6 blue-grey"},[t._v(" Cola de Reproducción ")]),a("v-card-text",{staticClass:"mt-4"},[0===t.queue.length?a("v-alert",{attrs:{dense:"",text:"",border:"left",type:"info"}},[t._v(" Cola de reproducción vacia ")]):t._l(t.queue,(function(e,s){return a("p",{key:s,staticClass:"text-caption"},[t._v(" "+t._s(e.name)+" ")])}))],2),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{elevation:"2",outlined:"",raised:"",small:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v(" Aceptar ")])],1)],1)],1)],1)],1)},g=[],x={name:"OptionsPlayer",props:{queue:{type:Array,default:()=>[]}},data:()=>({dialog:!1}),methods:{clearPlayList(){this.$emit("clear-play-list")},viewQueue(){this.dialog=!0,console.log(this.queue)},nextTrack(){this.$emit("next")},previousTrack(){this.$emit("previous")},stopTrack(){this.$emit("stop")}}},Z=x,L=a(3401),V=a(680),C=a(3237),T=a(7118),w=a(3179),P=a(6428),F=a(9762),O=(0,u.Z)(Z,_,g,!1,null,null,null),$=O.exports;d()(O,{VAlert:L.Z,VBtn:V.Z,VCard:C.Z,VCardActions:T.h7,VCardText:T.ZB,VCardTitle:T.EB,VCol:v.Z,VContainer:m.Z,VDialog:w.Z,VIcon:P.Z,VRow:f.Z,VSpacer:F.Z});var I={name:"PlayList",components:{OptionsPlayer:$},data:()=>({files:[],playList:[],playListQueue:[],selectedItem:0,name:null,snackbar:!1,timeout:3e3}),created(){this.$bus.$on("next-track",(t=>{const e=this.playList.length===t.id+1?0:t.id+1,a=this.playList[e];this.selectTrack(a)}))},methods:{upload(){this.playList=[];let t=0;for(const e of this.files){const a={id:t,name:e.name.slice(0,-4),size:e.size,type:e.type,src:URL.createObjectURL(e),iconPlay:"mdi-play",iconQueue:"mdi-playlist-music"};this.playList.push(a),t++}},selectTrack(t){if(this.playList.length>0){let e=t;this.playListQueue.length>0&&(e=this.playListQueue[0],this.playListQueue.shift()),this.$emit("select",e),this.name=e.name,this.selectedItem=e.id}},nextTrack(){this.playList.length===this.selectedItem+1?this.selectTrack(this.playList[0]):this.selectTrack(this.playList[this.selectedItem+1])},previousTrack(){0===this.selectedItem?this.selectTrack(this.playList[this.playList.length-1]):this.selectTrack(this.playList[this.selectedItem-1])},addToQueue(t){this.playListQueue.push(t),this.name=t.name,this.snackbar=!0},clearPlayList(){this.playList=[],this.files=[]},stopTrack(){this.$emit("stop")}}},j=I,A=a(4980),Q=a(6816),S=a(7620),E=a(3013),B=a(6651),M=a(459),R=a(3202),q=a(6053),z=(0,u.Z)(j,k,b,!1,null,"e940124a",null),D=z.exports;d()(z,{VCard:C.Z,VCol:v.Z,VContainer:m.Z,VFileInput:A.Z,VIcon:P.Z,VList:Q.Z,VListItem:S.Z,VListItemContent:E.km,VListItemGroup:B.Z,VListItemIcon:M.Z,VListItemTitle:E.V9,VRow:f.Z,VSnackbar:R.Z,VTooltip:q.Z});var U={name:"App",components:{AudioPlayer:y,PlayList:D},data:()=>({src:null,autoplay:!1,track:{},snackbar:!1,timeout:4e3}),methods:{playMusic(t){this.track={id:t.id,src:t.src,name:t.name},this.autoplay=!0,this.snackbar=!0},stopMusic(){console.log("excuchando"),this.autoplay=!1}}},G=U,H=a(7524),J=(0,u.Z)(G,n,i,!1,null,null,null),K=J.exports;d()(J,{VApp:H.Z,VSnackbar:R.Z});var N=a(1910),W=a(6379);s.Z.use(N.Z);var X=new N.Z({theme:{theme:{dark:!0},options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:W.Z},current:"es"}});const Y={install:function(t){t.prototype.$bus=new t}};var tt=Y;s.Z.use(tt),s.Z.config.productionTip=!1,new s.Z({vuetify:X,render:t=>t(K)}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,i){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(s);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkvue_mp3_player"]=self["webpackChunkvue_mp3_player"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8008)}));s=a.O(s)})();
//# sourceMappingURL=app.0cc1b305.js.map