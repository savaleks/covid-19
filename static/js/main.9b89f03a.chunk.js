(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/covid-19.62a5d289.png"},26:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),o=(a(31),a(2)),i=a.n(o),u=a(6),l=a(20),d=a(21),m=a(3),h=a(24),v=a(25),p=(a(33),a(4)),f=a.n(p),E=a(22),b=a.n(E),g=(a(52),a(17),a(23)),k=a.n(g),y=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovered:0,deaths:0,lastUpdate:0,countries:[]},n.getCountryData=n.getCountryData.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getData(),f.a.get("https://covid19.mathdro.id/api/countries").then((function(e){return e.data.countries.map((function(e){return{name:"".concat(e.name)}}))})).then((function(t){e.setState({countries:t})}))}},{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://covid19.mathdro.id/api");case 2:t=e.sent,this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,deaths:t.data.deaths.value,lastUpdate:t.data.lastUpdate});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Pasaulyje"!==t.target.value){e.next=2;break}return e.abrupt("return",this.getData());case 2:return e.prev=2,e.next=5,f.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 5:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value,lastUpdate:a.data.lastUpdate}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),404===e.t0.response.status&&this.setState({confirmed:"No data available",recovered:"No data available",deaths:"No data available"});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCountryOptions",value:function(){return this.state.countries.map((function(e,t){return r.a.createElement("option",null,e.name)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header-text"},"Koronovirusas online"),r.a.createElement("div",{className:"box update"},r.a.createElement("h4",null,"Paskutinis atnaujinimas"),r.a.createElement(b.a,{fromNow:!0},this.state.lastUpdate)),r.a.createElement("div",null,r.a.createElement("select",{className:"dropdown",onChange:this.getCountryData},r.a.createElement("option",null,"Pasaulyje"),this.renderCountryOptions())),r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",{className:"box confirmed"},r.a.createElement("h2",null,"U\u017esikr\u0117tusi\u0173j\u0173 skai\u010dius"),r.a.createElement("h3",null,this.state.confirmed)),r.a.createElement("div",{className:"box recovered"},r.a.createElement("h2",null,"I\u0161gijusi\u0173ju skai\u010dius"),r.a.createElement("h3",null,this.state.recovered)),r.a.createElement("div",{className:"box deaths"},r.a.createElement("h2",null,"Mirusi\u0173ju skai\u010dius"),r.a.createElement("h3",null,this.state.deaths))),r.a.createElement("img",{className:"picture",src:k.a,alt:"corona-virus"}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.9b89f03a.chunk.js.map